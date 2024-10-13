default_output_dir="$(pwd)/output"
    echo "Output directory ($output_dir) not found. I will attempt to create it."

##################################
#
# Create keywords.csv
# Format: Line number, keywords
#
##################################

# Disclosure: I got this front ChatGPT.
# https://chat.openai.com/share/ab176cb0-4878-4c03-8f3d-1f0f11f58fe6
awk -F '[:,]' '/%keywords/ {
    line = $0;
    gsub(/%keywords: /, "", line);
    gsub(/ /, ",", line);
    gsub(/%keywords:/, "", line);
    printf "%d:%s\n", NR, line
}' example.tex > keywords.csv

##################################
#
# For each keyword list find section
#
##################################

while IFS= read -r line; do
  IFS=':' read -r key_num keywords <<< "$line"
  section=$(find_section "$key_num")

  sed -n "${section}p" $tex_file
done < keywords.csv >> kw_section.csv
paste -d ':' keywords.csv kw_section.csv > best_keywords.csv
rm keywords.csv kw_section.csv
mv best_keywords.csv keywords.csv

SED 's/\\section{//' keywords.csv
SED 's/\\subsection{//' keywords.csv
SED 's/}//' keywords.csv

if [ "${AUTO}" = "true" ]; then
  echo "Launching in AUTO mode, skipping prompts."
else
  read -p "Place the output in $output_dir? [y/yes,n/no]: " answer
  lower_answer=$(echo "$answer" | tr '[:upper:]' '[:lower:]')
  # Check if the answer is "yes"
  if [[ "$lower_answer" == "y" || "$lower_answer" == "yes" ]]; then
      echo "Extracting..."
  else
      echo "Extraction aborted." ; exit 1
  fi
# Insert the verbatim in a new file, named with the section's name
#################################
#
# Create links for keywords to the matching verbatim file
#
#################################

while IFS= read -r line; do
    IFS=':' read -r key_num keywords sec_name <<< "$line"

    lowercase_sec_name=$(echo "$sec_name" | tr '[:upper:]' '[:lower:]')
    no_space_sec_name="${lowercase_sec_name// /_}"
    final_sec_name="${no_space_sec_name//[\(\)]/}"

    OLD_IFS=$IFS
    IFS=','
    read -ra elements <<< "$keywords"
    IFS=$OLD_IFS

    for keyword in "${elements[@]}"; do
      lowercase_key_name=$(echo "$keyword" | tr '[:upper:]' '[:lower:]')
      no_space_key_name="${lowercase_key_name// /_}"
      final_key_name="${no_space_key_name//[\(\)]/}"

      rm -f $output_dir/$final_key_name.$ex_ext
      ln -s $output_dir/$final_sec_name.$ex_ext $output_dir/$final_key_name.$ex_ext
    done
done < keywords.csv

rm section.csv verbatim.csv keywords.csv
