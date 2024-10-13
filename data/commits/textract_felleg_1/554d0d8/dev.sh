if [ $# -lt 2 ]; then
    echo "Plus, a file extention as second argument." ;
    echo "OPTIONAL: An output directory as a third argument (default: $default_output_dir)."; exit
ex_ext="$2"
output_dir="${3:-$default_output_dir}"
        touch "$output_dir"/"$substring1".$ex_ext
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1".$ex_ext
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1".$ex_ext
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1".$ex_ext
          rm -f $output_dir/$substring2.$ex_ext
          ln -s "$output_dir"/"$substring1".$ex_ext "$output_dir"/"$substring2".$ex_ext
        touch "$output_dir"/"$substring1".$ex_ext
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1".$ex_ext
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1".$ex_ext
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1".$ex_ext
          rm -f $output_dir/$substring2.$ex_ext
          ln -s "$output_dir"/"$substring1".$ex_ext "$output_dir"/"$substring2".$ex_ext
          rm -f $output_dir/$substring3.$ex_ext
          ln -s "$output_dir"/"$substring1".$ex_ext "$output_dir"/"$substring3".$ex_ext
        touch "$output_dir"/"$substring1".$ex_ext
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1".$ex_ext
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1".$ex_ext
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1".$ex_ext
          rm -f $output_dir/$substring2.$ex_ext
          ln -s "$output_dir"/"$substring1".$ex_ext "$output_dir"/"$substring2".$ex_ext
          rm -f $output_dir/$substring3.$ex_ext
          ln -s "$output_dir"/"$substring1".$ex_ext "$output_dir"/"$substring3".$ex_ext
        touch "$output_dir"/"$substring1".$ex_ext
        sed -n "${start_point},${end_point}p" "$tex_file" >> "$output_dir"/"$substring1".$ex_ext
        SED 's/\\end{verbatim}//' "$output_dir"/"$substring1".$ex_ext
        SED 's/\\begin{verbatim}//' "$output_dir"/"$substring1".$ex_ext
          rm -f $output_dir/$substring2.$ex_ext
          ln -s "$output_dir"/"$substring1".$ex_ext "$output_dir"/"$substring2".$ex_ext
          rm -f $output_dir/$substring3.$ex_ext
          ln -s "$output_dir"/"$substring1".$ex_ext "$output_dir"/"$substring3".$ex_ext