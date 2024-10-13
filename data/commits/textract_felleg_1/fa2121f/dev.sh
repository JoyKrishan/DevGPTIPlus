set -ex
default_output_dir="output"

# Determine sed syntax to use
if [ "$(uname)" == "Darwin" ]; then
  # Mac OS
  SED() {
    sed -i '' "$1" "$2"
  }
else
  SED() {
    sed -i "$1" "$2"
  }
fi
if [ $# -lt 1 ]; then
    echo "OPTIONAL: An output directory as a second argument (default: $default_output_dir)."; exit
# If the second argument is not specified, use the default output dir
output_dir="${2:-$default_output_dir}"
    cd -
    echo "Output directory ($output_dir) not found"
    read -p "I will attempt to create it. Press Enter to continue."
    mkdir -p $output_dir
    if [ $? -ne 0 ]; then
      echo "Error: I was unable to create the directory."
      exit 1  # Exit the script with a non-zero exit code
    fi
SED 's/\\section{//' verbatim.csv
SED 's/\\subsection{//' verbatim.csv
SED 's/}//' verbatim.csv
SED 's/\\section{//' section.csv
SED 's/\\subsection{//' section.csv
SED 's/}//' section.csv
    lowercase_sec_name=$(echo "$sec_name" | tr '[:upper:]' '[:lower:]')
        pwd
        touch "$output_dir"/"$substring1"
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1"
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1"
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1"

        # copy the model file as a link
        if [ "$substring1" != "$substring2" ]; then
          rm -f $output_dir/$substring2
          ln -s "$output_dir"/"$substring1" "$output_dir"/"$substring2"
        fi
        pwd
        touch "$output_dir"/"$substring1"
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1"
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1"
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1"
        # copy the model file as a link
        if [ "$substring1" != "$substring2" ]; then
          rm -f $output_dir/$substring2
          ln -s "$output_dir"/"$substring1" "$output_dir"/"$substring2"
        fi
        if [ "$substring1" != "$substring3" ]; then
          rm -f $output_dir/$substring3
          ln -s "$output_dir"/"$substring1" "$output_dir"/"$substring3"
        fi
        touch "$output_dir"/"$substring1"
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1"
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1"
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1"
        # copy the model file as a link
        if [ "$substring1" != "$substring2" ]; then
          rm -f $output_dir/$substring2
          ln -s "$output_dir"/"$substring1" "$output_dir"/"$substring2"
        fi
        if [ "$substring1" != "$substring3" ]; then
          rm -f $output_dir/$substring3
          ln -s "$output_dir"/"$substring1" "$output_dir"/"$substring3"
        fi
        touch "$output_dir"/"$substring1"
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1"
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1"
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1"
        # copy the model file as a link
        if [ "$substring1" != "$substring2" ]; then
          rm -f $output_dir/$substring2
          ln -s "$output_dir"/"$substring1" "$output_dir"/"$substring2"
        fi
        if [ "$substring1" != "$substring3" ]; then
          rm -f $output_dir/$substring3
          ln -s "$output_dir"/"$substring1" "$output_dir"/"$substring3"
        fi