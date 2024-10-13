import os
import xml.etree.ElementTree as ET
import difflib
import re

NAMESPACE = {'pmd': 'https://pmd-code.org/schema/cpd-report'}

COMMENT_PATTERNS = {
    "python": [r'#.*', r'""".*?"""', r"'''.*?'''"],
    "java": [r'//.*', r'/\*.*?\*/'],
    "typescript": [r'//.*', r'/\*.*?\*/'],
    "javascript": [r'//.*', r'/\*.*?\*/'],
    "cpp": [r'//.*', r'/\*.*?\*/'],
    "csharp": [r'//.*', r'/\*.*?\*/']
}

def normalize_code(code, language):
    """Normalize code by removing comments and normalizing indentation."""
    for pattern in COMMENT_PATTERNS.get(language, []):
        code = re.sub(pattern, '', code, flags=re.DOTALL)
    
    lines = [line.strip() for line in code.splitlines() if line.strip()]
    return lines

def classify_clone(fragment1, fragment2, language):
    """Classify the clone based on the similarity of code fragments."""
    lines1 = normalize_code(fragment1, language)
    lines2 = normalize_code(fragment2, language)
    
    sm = difflib.SequenceMatcher(None, lines1, lines2)
    matching_blocks = sm.get_matching_blocks()
    
    for block in matching_blocks:
        if block.size >= 5:
            sublines1 = lines1[block.a:block.a+block.size]
            sublines2 = lines2[block.b:block.b+block.size]
            
            if sublines1 == sublines2:
                return "Type I"

            elif are_variables_different(sublines1, sublines2):
                return "Type II"
            
            else:
                return "Type III"
    
    return "None"  

def are_variables_different(lines1, lines2):
    """Check if two code fragments differ only in variable names or literal values."""
    pattern = re.compile(r'\b[A-Za-z_][A-Za-z0-9_]*\b')
    
    for line1, line2 in zip(lines1, lines2):
        # Replace variable names with a placeholder
        normalized1 = pattern.sub('VAR', line1)
        normalized2 = pattern.sub('VAR', line2)
        
        # Check if the lines are the same after normalization
        if normalized1 != normalized2:
            return False
    return True

def extract_code_from_file(path, start_line, start_column, end_line, end_column):
    """Extract the code fragment from a file based on the line and column range."""
    with open(path, 'r') as file:
        lines = file.readlines()
    
    # Extract the required lines
    if start_line == end_line:
        # Same line: extract the part between start_column and end_column
        fragment = lines[start_line - 1][start_column - 1:end_column]
    else:
        # Multiple lines: extract from start column to end column
        fragment = lines[start_line - 1][start_column - 1:]  # From start column to end of the line
        fragment += ''.join(lines[start_line:end_line - 1])  # Middle full lines
        fragment += lines[end_line - 1][:end_column]  # Up to end column
        list()
    return fragment

def update_xml_with_clone_type(xml_file, language):
    """Update the XML file with clone type classification by reading the actual files."""
    tree = ET.parse(xml_file)
    root = tree.getroot()

    count = 0
    # Iterate through each duplication element
    for duplication in root.findall('.//pmd:duplication', NAMESPACE):
        # Get the two file elements inside each duplication
        file_elements = duplication.findall('pmd:file', NAMESPACE)
        # print(file_elements)
        if len(file_elements) != 2:
            continue  # Skip if not exactly two files

        # Extract the details from the first file
        path1 = file_elements[0].get('path')
        start_line1 = int(file_elements[0].get('line'))
        end_line1 = int(file_elements[0].get('endline'))
        start_column1 = int(file_elements[0].get('column'))
        end_column1 = int(file_elements[0].get('endcolumn'))

        # Extract the details from the second file
        path2 = file_elements[1].get('path')
        start_line2 = int(file_elements[1].get('line'))
        end_line2 = int(file_elements[1].get('endline'))
        start_column2 = int(file_elements[1].get('column'))
        end_column2 = int(file_elements[1].get('endcolumn'))

        # Extract code fragments from the files
        code1 = extract_code_from_file(path1, start_line1, start_column1, end_line1, end_column1)
        code2 = extract_code_from_file(path2, start_line2, start_column2, end_line2, end_column2)
        print("PATH1: ", path1)
        print("PATH2: ", path2)
        count += 1
        print(count)
        # Classify the clone based on the language
        clone_type = classify_clone(code1, code2, language)
        print(clone_type)
        # Add the clone type as an attribute to both file elements
        for file_element in file_elements:
            file_element.set('clone_type', clone_type)

    # Write the updated XML back to a file
    tree.write('updated_clones.xml')

if __name__ == "__main__":
    
    project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))
    xml_file = os.path.join(project_dir, "data", "rq3", "cpd_reports", "cs-report.xml")
    language = 'csharp'  # Can be 'python', 'java', 'typescript', 'javascript', 'cpp', 'csharp'
    update_xml_with_clone_type(xml_file, language)