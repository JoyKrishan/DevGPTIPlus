sed --in-place --regexp-extended "s#((\.\.)?/(\w*\+?/)*)?(\w*\.java)[0-9.:\-]*#\4:#" "$output"
sed --in-place --regexp-extended "s#((\.\.)?/(\w*\+?/)*)?(\w*\.java)[0-9.:\-]*#\4:#" "$refoutput"