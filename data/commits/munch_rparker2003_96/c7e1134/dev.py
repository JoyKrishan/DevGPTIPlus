# Ryan Parker
# Task 2.3 Code Snippet

#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
import numpy as np
import scipy.interpolate as spline
import math

from ackermann_msgs.msg import AckermannDriveStamped
from geometry_msgs.msg import PoseStamped
from visualization_msgs.msg import Marker, MarkerArray
from tf_transformations import euler_from_quaternion
from nav_msgs.msg import Odometry


class PurePursuit(Node):
	IN_FILE = '/sim_ws/src/pure_pursuit/waypoints/waypoints.csv'
	WAYPOINTS = []

	STRAIGHT_AHEAD_SPEED = 5.5
	STRAIGHT_AHEAD_THRESHOLD = 10 * np.pi / 180
	WIDE_TURN_SPEED = 3.5
	WIDE_TURN_THRESHOLD = 20 * np.pi / 180
	SHARP_TURN_SPEED = 2.0
	CURRENT_SPEED = 0.0
	PREV_POS_X = 0.0
	PREV_POS_Y = 0.0
	STEERING_ANGLE = 0.0

	# for spline
	TCK = 0.0
	
	def __init__(self):
		super().__init__('pure_pursuit_node')
		# for the simulator, without particle filter data
		# must also change every instance of pose. to pose.pose.
		self.odom_sub = self.create_subscription (
			Odometry,
			'/ego_racecar/odom',
			self.pose_callback,
			10
		)

		self.drive_pub = self.create_publisher(
			AckermannDriveStamped,
			'/drive',
			10
		)

		self.marker_pub_current = self.create_publisher(
			MarkerArray,
			'visualization_marker_current',
			1
		)

		self.marker_spline = self.create_publisher(
			MarkerArray,
			'visualization_marker_spline',
			1
		)

		# Read waypoints from csv file
		data = np.loadtxt(self.IN_FILE, delimiter=',', skiprows=0)

		x_values = data[:, 0]  # x array
		y_values = data[:, 1]  # y array

		# make spline of waypoints
		self.TCK, u = spline.splprep([x_values, y_values], k=3, s=0)
		u_new = np.linspace(u.min(), u.max(), 1000)
		interpolated_points = spline.splev(u_new, self.TCK)
		self.WAYPOINTS = np.column_stack(interpolated_points)

		self.publish_all_spline_markers()

	def pose_callback(self, pose_msg):
		# TODO: find the current waypoint to track using methods mentioned in lecture
		# the position, orientation, and rotation of the vehicle
		car_position = [pose_msg.pose.pose.position.x, pose_msg.pose.pose.position.y]
		
		# returns the closest waypoint in the list
		# closest_waypoint = self.get_waypoints(car_position, car_orientation)
		closest_waypoint = self.get_spline_point(car_position)

		# TODO: transform goal point to vehicle frame of reference
		# the relative frame
		closest_waypoint_vehicle_frame = closest_waypoint - car_position

		# quaternion of position
		quaternion = [
			pose_msg.pose.pose.orientation.x,
			pose_msg.pose.pose.orientation.y,
			pose_msg.pose.pose.orientation.z,
			pose_msg.pose.pose.orientation.w
		]

		# the euler angles from the quaternion
		euler_angles = euler_from_quaternion(quaternion)

		# the cars current angle (yaw)
		car_angle = euler_angles[2]

		# rotation matrix for x and y
		rotated_rel_x = closest_waypoint_vehicle_frame[0] * math.cos(-car_angle) - closest_waypoint_vehicle_frame[1] * math.sin(-car_angle)
		rotated_rel_y = closest_waypoint_vehicle_frame[0] * math.sin(-car_angle) + closest_waypoint_vehicle_frame[1] * math.cos(-car_angle)

		# Lookahead distance = euclidean distance between x and y
		L = math.sqrt(rotated_rel_y**2 + rotated_rel_x**2)

		# TODO: calculate curvature/steering angle
		# formula given in class
		radius = (L ** 2) / (2.0 * np.abs(rotated_rel_y))  
		self.STEERING_ANGLE = 1 / radius
		
		# if below axis, invert steering angle
		if (rotated_rel_y < 0):
			self.STEERING_ANGLE *= -1


		# TODO: publish drive message, don't forget to limit the steering angle.
		# clamp angle based on anything greater than a wider turn (20 degrees)
		if(self.STEERING_ANGLE < self.WIDE_TURN_THRESHOLD*-1): # if <-20, set to -20
			self.STEERING_ANGLE = self.WIDE_TURN_THRESHOLD*-1
		elif self.STEERING_ANGLE > self.WIDE_TURN_THRESHOLD: # if >20, set to 20
			self.STEERING_ANGLE = self.WIDE_TURN_THRESHOLD

		# Dynamic speed
		if (np.abs(self.STEERING_ANGLE) < self.STRAIGHT_AHEAD_THRESHOLD):  # < 10 degrees speed
			self.CURRENT_SPEED = self.STRAIGHT_AHEAD_SPEED  # 0-10 degrees speed
		elif np.abs(self.STEERING_ANGLE) < self.WIDE_TURN_THRESHOLD:  # < 20 degrees speed
			self.CURRENT_SPEED = self.WIDE_TURN_SPEED  # 10-20 degrees speed
		else:  # Anything that's not < 20
			self.CURRENT_SPEED = self.SHARP_TURN_SPEED  # > 20 degrees speed

		# Publish markers for visual waypoint validation
		self.publish_marker(closest_waypoint, (0.0, 0.0, 1.0))

		self.publish_drive(pose_msg)

	def publish_marker(self, position, color):
		marker = Marker()
		marker.header.frame_id = 'map'
		marker.type = Marker.SPHERE
		marker.action = Marker.ADD
		marker.pose.position.x = position[0]
		marker.pose.position.y = position[1]
		marker.pose.position.z = 0.0
		marker.pose.orientation.w = 1.0
		marker.scale.x = 0.2
		marker.scale.y = 0.2
		marker.scale.z = 0.2
		marker.color.a = 1.0
		marker.color.r = color[0]
		marker.color.g = color[1]
		marker.color.b = color[2]

		self.marker_pub_current.publish(MarkerArray(markers=[marker]))

	def publish_drive(self, pose_msg):
		drive_msg = AckermannDriveStamped()
		drive_msg.header = pose_msg.header
		drive_msg.drive.steering_angle = self.STEERING_ANGLE
		drive_msg.drive.speed = self.CURRENT_SPEED
		self.drive_pub.publish(drive_msg)
	
	def get_spline_point(self, position):
		# Euclidean distance between all current position and all waypoints
		distance_to_all_waypoints = np.sqrt(np.sum((self.WAYPOINTS - position)**2, axis=1))

		# Get the index of the smallest distance
		closest_waypoint_index = np.argmin(distance_to_all_waypoints)

		# Adjust the waypoint index based on conditions
		if np.abs(self.STEERING_ANGLE) < 5 * np.pi/180:  # < 10 degrees steering angle
			closest_waypoint_index += int(self.CURRENT_SPEED * 10)
		else:
			closest_waypoint_index += 40

		closest_waypoint_index %= len(self.WAYPOINTS)
		return self.WAYPOINTS[closest_waypoint_index]

	def publish_all_spline_markers(self):
		marker_array = MarkerArray()

		# Find the parameterization u corresponding to all points on the spline
		u = spline.splprep(self.WAYPOINTS.T, k=3, s=0)[1]

		for i in range(len(self.WAYPOINTS)):
			point_on_spline = np.array(spline.splev(u[i], self.TCK)).flatten()

			marker = Marker()
			marker.header.frame_id = 'map'
			marker.type = Marker.SPHERE
			marker.action = Marker.ADD
			marker.ns = 'spline_markers'  # Unique namespace for the markers
			marker.id = i  # Unique ID within this namespace
			marker.pose.position.x = point_on_spline[0]
			marker.pose.position.y = point_on_spline[1]
			marker.pose.position.z = 0.0
			marker.pose.orientation.w = 1.0
			marker.scale.x = 0.1
			marker.scale.y = 0.1
			marker.scale.z = 0.1
			marker.color.a = 1.0
			marker.color.r = 1.0
			marker.color.g = 0.0
			marker.color.b = 0.0

			marker_array.markers.append(marker)

		self.marker_spline.publish(marker_array)

def main(args=None):
	rclpy.init(args=args)
	print("PurePursuit Initialized")
	
	pure_pursuit_node = PurePursuit()
	rclpy.spin(pure_pursuit_node)

	pure_pursuit_node.destroy_node()
	rclpy.shutdown()

if __name__ == '__main__':
	main()