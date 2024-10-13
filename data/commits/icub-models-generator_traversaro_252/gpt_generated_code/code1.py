from lxml import etree

# Load the XML file
tree = etree.parse('your_xml_file.xml')
root = tree.getroot()

# Define the sensor names to be removed
sensor_names_to_remove = ['r_upper_leg_ft_gyro_3b11', 'l_foot_mtb_acc_10b12']

# Find and remove the specified sensor tags
for sensor_name in sensor_names_to_remove:
    for sensor_tag in root.xpath(f"//sensor[@name='{sensor_name}']"):
        sensor_tag.getparent().remove(sensor_tag)

# Save the modified XML back to a file
tree.write('modified_xml_file.xml', pretty_print=True)