# DevGPT-Issues

## Description
A brief description of what your project does and its purpose.

## Features
- src/api/issue_search.py 
    <p> Contains code to retreive data from the GitHub REST API and save it in *JSON* format</p>

- src/commits/commits_save.py
    <p> Loop through all issues containing commits and save that to the local. Get GPT generated code and save to the local</p>

- src/notebooks/data_statistics.py
    <p> Calculate statistics based on the *JSON* data</p>

- src/webcrawl/chatgpt_crawl.py
    <p> From the *JSON* file in issue_search, crawl all the interactions between developer and ChatGPT, insert an extra key in the same *JSON* with conversations and other metadata</p>


## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/JoyKrishan/DevGPT-Issues.git
    ```
2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

## Usage
Provide instructions and examples on how to use your project.

<!-- ## Contributing
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/YourFeature
    ```
5. Open a pull request. -->

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
This research is supported in part by the Natural Sciences and Engineering Research Council of Canada (NSERC) Discovery Grants program, and by the industry-stream NSERC CREATE in Software Analytics Research (SOAR). 
- References