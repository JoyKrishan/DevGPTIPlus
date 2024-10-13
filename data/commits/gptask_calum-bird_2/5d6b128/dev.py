def _get_file_list (pattern: str, is_recursive: bool):
    paths = _get_path_list(pattern, is_recursive)
def _get_file_contents_to_process(pattern: str, is_recursive: bool):
    file_list = _get_file_list(pattern, is_recursive)
@click.option('-r', '--recursive', is_flag=True, help='If true and pattern is a directory, files will be recursively prompted instead of just the top level')
@click.argument('pattern', type=click.STRING, required=True)
def main(prompt, force, print_files, recursive, print_prompts,reload_example_prompts, pattern):
        files_to_print = _get_file_list(pattern, recursive)
    files_to_process = _get_file_contents_to_process(pattern, recursive)
        click.echo(f"No files found for path/pattern/directory: {pattern}")