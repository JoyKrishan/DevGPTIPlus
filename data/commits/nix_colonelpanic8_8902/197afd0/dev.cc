/* Very hacky way to parse $NIX_PATH, which is colon-separated, but
   can contain URLs (e.g. "nixpkgs=https://bla...:foo=https://"). */
static Strings parseNixPath(const std::string & s)
{
    Strings res;

    auto p = s.begin();

    while (p != s.end()) {
        auto start = p;
        auto start2 = p;

        while (p != s.end() && *p != ':') {
            if (*p == '=') start2 = p + 1;
            ++p;
        }

        if (p == s.end()) {
            if (p != start) res.push_back(std::string(start, p));
            break;
        }

        if (*p == ':') {
            auto prefix = std::string(start2, s.end());
            if (EvalSettings::isPseudoUrl(prefix) || hasPrefix(prefix, "flake:")) {
                ++p;
                while (p != s.end() && *p != ':') ++p;
            }
            res.push_back(std::string(start, p));
            if (p == s.end()) break;
        }

        ++p;
    }

    return res;
}
        // Command line specification
        // Environment variable
        auto environment = getEnv("NIX_PATH");
        if (environment)
            for (auto & i : parseNixPath(*environment))
                searchPath.elements.emplace_back(SearchPath::Elem::parse(i));
        // Config files and defaults