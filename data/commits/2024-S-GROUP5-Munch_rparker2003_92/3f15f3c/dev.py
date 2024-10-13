
    cov = coverage.Coverage(
        source=[os.path.join(os.path.dirname(__file__), "routes")],
        omit=exclude_patterns,
    )
        modified_line = line.replace("routes\\", "").replace(
            ".py", "{:>10}".format("")
        )