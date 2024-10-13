```bash
```bash
2. To run the gptask on all _files_ in a directory:
```bash
gptask -p your_prompt example/
# Runs on /example/test.py, /example/test2.js, but NOT /example/sub/test.py
3. To run the gptask on a glob pattern, just specify the pattern in file_path:
```bash
gptask -p your_prompt example/*.py
# Runs on /example/test.py but NOT /example/test2.js or /example/sub/test.py
```

4. To run the gptask on all files in a directory recursively:

```bash
gptask -r -p your_prompt example/
# Runs on /example/test.py, /example/test2.js, AND /example/sub/test.py
```

5. To force execution even if some conditions are not met:

```bash
```bash

```

```