#!/bin/sh

# Put this script in your PhaseX directory

usage() {
	echo "Usage:    $0 <regular|unit>"
	echo "Options: "
	echo "          regular   use regular tests from /home/matt/CSC460/Espresso/Espresso-Handout-All-Phases.tar @ java.cs.unlv.edu"
	echo "          unit      use unit tests from Canvas (requires manual download)"

	exit "${1:-0}"
}

clean() {
	rm --force ./ourTestResults ./refTestResults ./test_changes.diff ./ourUnitTestResults ./refUnitTestResults ./unit_test_changes.diff
}

installRegularTests() {
	echo "==================="
	echo "Grabbing Test Files"
	echo "==================="
	../espressou install tests ../
}

generateResults() {
	script_to_run="$1"
	file_to_write_to="$2"
	grammar="$3"
	test_type="$4"

	echo "================================="
	echo "Running $test_type Tests for $grammar"
	echo "================================="

	echo "$grammar $test_type Tests" >> "$file_to_write_to"
	echo "===================" >> "$file_to_write_to"

	for file in "$testsdir/$grammar"/${test_type}Tests/*; do
		[ "${file##*.}" = "java" ] && $script_to_run "$file" >> "$file_to_write_to"
	done
}

trimFilePaths() {
	output_file="$1"
	sed --in-place --regexp-extended "s#((\.\.)?/(\w*\+?/)*)?(\w*\.java)[0-9.:\-]*#\4:#" "$output_file"
}

checkAndCompile() {
	[ ! -d ./bin ] && echo "bin directory not found! Compiling using ant..." && ant > /dev/null
}

main() {
	[ -z "$1" ] && usage 1

	phase_number="$(pwd | tail -c 2)"
	if ! echo "$phase_number" | grep --quiet "[1-5]"; then
		 echo "Error: Couldn't detect phase number. Make sure this script is in PhaseX (where X is the current phase)" && exit 1
	fi
	
	case "$1" in
		regular)
			output=./ourTestResults
			refoutput=./refTestResults
			testsdir="../Tests/Tests/Phase$phase_number"
			# grammars="Espresso Espresso+ Espresso++"  # Edit this line to only process for one particular grammar/extension
			grammars="Espresso"  # Edit this line to only process for one particular grammar/extension
			finaldiff=./test_changes.diff
			;;
		unit)
			output=./ourUnitTestResults
			refoutput=./refUnitTestResults
			testsdir="../unit_tests/$phase_number/"
			# grammars="Espresso Espresso_Plus Espresso_Star"
			grammars="Espresso"
			finaldiff=./unit_test_changes.diff
			;;
		clean) clean && exit 0 ;;
		-h|--help)  usage ;;
		*)          echo "Error: invalid parameter." >&2 && exit 1 ;;
	esac

	if [ ! -d "${testsdir%/*/*}" ]; then
		if [ "$1" = regular ]; then
			installRegularTests
		else
			echo "Copy unit_tests from Canvas into the parent directory (${PWD%/*}) before use!" && exit 1
		fi
	fi

	checkAndCompile

	rm -f "$output"

	if [ ! -f "$refoutput" ]; then
		echo "================================="
		echo "Reference Test Results not found!"
		echo "Running reference compiler once to generate reference results"
		echo "================================="

		for grammar in $grammars; do
			generateResults ./espressocr "$refoutput" "$grammar" "Good"
			generateResults ./espressocr "$refoutput" "$grammar" "Bad"
		done
	fi

	echo "================================="
	echo "Running our compiler to generate our results"
	echo "================================="

	for grammar in $grammars; do
		generateResults ./espressoc "$output" "$grammar" "Good"
		generateResults ./espressoc "$output" "$grammar" "Bad"
	done

	trimFilePaths "$output"
	trimFilePaths "$refoutput"

	diff "$output" "$refoutput" > "$finaldiff"

	echo "Done! Check $finaldiff to see any discrepancies between the output of our compiler versus the reference compiler"
	echo "If there's nothing in the file. You are Good!"

	exit 0
}

main "$@"