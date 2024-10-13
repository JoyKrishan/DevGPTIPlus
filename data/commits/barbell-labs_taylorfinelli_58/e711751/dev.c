/**
 * This program comes without any warranty
 * of any kind. Use of this program is
 * done completely at your own risk.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>

#define FILE_PATH "/sys/class/backlight/intel_backlight/brightness"
#define MAX_BRIGHTNESS 120000
#define MIN_BRIGHTNESS 3000
#define BRIGHTNESS_INCREMENT 12000

void handle_error(const char* message) {
    fprintf(stderr, "%s\n", message);
    exit(EXIT_FAILURE);
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        handle_error("Usage: cbright [up|down]");
    }

    struct stat sb;
    if (stat(FILE_PATH, &sb) == -1) {
        handle_error("Failed to get file status");
    }

    FILE* file = fopen(FILE_PATH, "r+");
    if (!file) {
        handle_error("Failed to open file");
    }

    int cur_brightness;
    fread(&cur_brightness, sizeof(int), 1, file);

    int new_brightness;
    if (strcmp(argv[1], "up") == 0) {
        printf("Brightness up\n");
        new_brightness = cur_brightness + BRIGHTNESS_INCREMENT;
    } else if (strcmp(argv[1], "down") == 0) {
        printf("Brightness down\n");
        new_brightness = cur_brightness - BRIGHTNESS_INCREMENT;
    } else {
        handle_error("Unknown option");
    }

    if (new_brightness > MAX_BRIGHTNESS) {
        new_brightness = MAX_BRIGHTNESS;
    } else if (new_brightness < MIN_BRIGHTNESS) {
        new_brightness = MIN_BRIGHTNESS;
    }

    printf("Current brightness: %i\n", cur_brightness);
    printf("New brightness: %i\n", new_brightness);

    fseek(file, 0, SEEK_SET);
    fwrite(&new_brightness, sizeof(int), 1, file);

    fclose(file);

    exit(EXIT_SUCCESS);
}