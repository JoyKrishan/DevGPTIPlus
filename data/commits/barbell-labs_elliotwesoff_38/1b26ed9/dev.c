/**
 * This program comes without any warranty
 * of any kind. Use of this program is
 * done completely at your own risk.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>

int main(int argc, char *argv[])
{
  const char file_path[] = "/sys/class/backlight/intel_backlight/brightness";
  const int max = 120000;
  const int min = 3000;
  const int inc = 12000;
  int cur_b;
  int new_b;
  char dir[4];
  char new_b_str[7];
  struct stat sb;

  if (stat(file_path, &sb) == -1) {
    perror("stat");
    exit(EXIT_FAILURE);
  }

  FILE* file = fopen(file_path, "w+");
  char* file_contents = malloc(sb.st_size);
  fread(file_contents, sb.st_size, 1, file);

  cur_b = atoi(file_contents);

  memset(dir, '\0', sizeof(dir));
  strcpy(dir, argv[1]);

  if (strcmp("up", dir) == 0) {
    printf("brightness up\n");
    new_b = cur_b + inc;
  } else if (strcmp("down", dir) == 0) {
    printf("brightness down\n");
    new_b = cur_b - inc;
  } else {
    printf("unknown option: %s\n", dir);
    new_b = cur_b;
  }

  if (new_b > max) {
    new_b = max;
  } else if (new_b < min) {
    new_b = min;
  }

  printf("current brightness: %i\n", cur_b);
  snprintf(new_b_str, 7, "%i", new_b);
  printf("new brightness: %s\n", new_b_str);

  fwrite(new_b_str, 1, sizeof(new_b_str), file);

  fclose(file);
  free(file_contents);

  exit(EXIT_SUCCESS);
}