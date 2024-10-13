	test_type="$4"
	echo "Running $test_type Tests for $grammar"
	echo "$grammar $test_type Tests" >> "$file_to_write_to"
	for file in "$testsdir/$grammar"/${test_type}Tests/*; do
}
trimFilePaths() {
	output_file="$1"
	sed --in-place --regexp-extended "s#((\.\.)?/(\w*\+?/)*)?(\w*\.java)[0-9.:\-]*#\4:#" "$output_file"
			generateResults ./espressocr "$refoutput" "$grammar" "Good"
			generateResults ./espressocr "$refoutput" "$grammar" "Bad"
		generateResults ./espressoc "$output" "$grammar" "Good"
		generateResults ./espressoc "$output" "$grammar" "Bad"
	trimFilePaths "$output"
	trimFilePaths "$refoutput"
