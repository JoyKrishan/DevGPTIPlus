import cv2
import dlib
import time
import math

# Initialize dlib's face detector and facial landmark predictor
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")  # Download from http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2

# Eye aspect ratio (EAR) calculation function
def eye_aspect_ratio(eye):
    vertical_dist_1 = math.sqrt((eye[1].x - eye[5].x)**2 + (eye[1].y - eye[5].y)**2)
    vertical_dist_2 = math.sqrt((eye[2].x - eye[4].x)**2 + (eye[2].y - eye[4].y)**2)
    horizontal_dist = math.sqrt((eye[0].x - eye[3].x)**2 + (eye[0].y - eye[3].y)**2)
    ear = (vertical_dist_1 + vertical_dist_2) / (2.0 * horizontal_dist)
    return ear

# Initialize constants for blink detection
EAR_THRESHOLD = 0.2  # Adjust this threshold as needed
CONSECUTIVE_FRAMES = 3

# Initialize variables
blink_count = 0
last_blink_time = time.time()
last_blink_start = None  # Store the timestamp of the blink start
blink_history = ""  # Store the blink history string

# Open the webcam
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = detector(gray)
    
    for face in faces:
        landmarks = predictor(gray, face)
        left_eye = [landmarks.part(i) for i in range(36, 42)]
        right_eye = [landmarks.part(i) for i in range(42, 48)]
        
        left_ear = eye_aspect_ratio(left_eye)
        right_ear = eye_aspect_ratio(right_eye)
        avg_ear = (left_ear + right_ear) / 2.0
        
        if avg_ear < EAR_THRESHOLD:
            if last_blink_start is None:
                last_blink_start = time.time()
                blink_history = ""  # Reset the blink history when eyes start shutting
        else:
            if last_blink_start is not None:
                blink_count += 1
                last_blink_time = time.time()
                blink_duration = time.time() - last_blink_start
                last_blink_start = None
                if blink_duration > 0.1:
                    blink_history += "-"
                else:
                    blink_history += "."
                print(f"Blink {blink_count}: {blink_history} ({blink_duration:.2f} seconds)")
                blink_history = ""  # Clear the blink history
    
    cv2.putText(frame, f"Blinks: {blink_count}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
    
    cv2.imshow("Blink Detection", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()