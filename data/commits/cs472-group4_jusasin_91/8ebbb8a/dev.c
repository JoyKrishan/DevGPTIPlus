
// Function to process characters recursively
void processCharacters(char *input) {
    // Base case: If the character is null, return
    if (*input == '\0') {
        return;
    }
    
    // Process current character
    if (*input == '/') {
        // Output the character
        putchar(*(input + 1));
    }

    // Recursive call with next character
    processCharacters(input + 1);
}

// Main function
int main() {
    // Input string
    char *inputString = "@n'+,#'/*{}w+/w#cdnr/+,{}r/*de}+,/*{*+,/w{%+,/w#q#n+,/#l+,/n{n+,/+#n+,/#;#q#n+,/+k#;*+,/'r :'d*'3,}{w+K w'K:'+}e#';dq#'l q#'+d'K#!/+k#;q#'r}eKK#}w'r}eKK{nl]'/#;#q#n'){)#}w'){){nl]'/+#n';d}rw' i;#){nl]!/n{n#'; r{#w'r nc{nl]'/#{l,+'K {rw' iK{;[{nl]'/w#q#n'wk nw' iwk{KK{nl]!/w{%'l##w#' i; :{nl]'/*{q#'ld;r'}{nlwb!/*de}'c ;;{nl'-{}rw]'/+,}##'*}#nc,',#nw]'/+kd'+e}+;#'rdq#w! nr'/ ') }+}{rl#'{n' ')# }'+}##(!!/";
    
    // Process characters recursively
    processCharacters(inputString);
    
    return 0;
}