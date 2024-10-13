tmpfile=$(mktemp)
echo "nix-path = " > "$tmpfile"
export NIX_USER_CONF_FILES="$tmpfile"

# This should still work because the NIX_PATH environment variable will take
# precedence over the empty nix path set by the configuration file
nix-instantiate --eval -E '<by-relative-path/simple.nix>' --restrict-eval

