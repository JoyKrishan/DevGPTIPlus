#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>

#define FILE_PATH "/sys/class/backlight/intel_backlight/brightness"
#define MAX_BRIGHTNESS 120000
#define MIN_BRIGHTNESS 3000
#define BRIGHTNESS_INCREMENT 12000
#define MAX_STR_LENGTH 20

void handle_error(const char* message) {
    perror(message);
    exit(EXIT_FAILURE);
}

int read_brightness(const char* file_path) {
    struct stat sb;
    if (stat(file_path, &sb) == -1) {
        handle_error("stat");
    }

    FILE* file = fopen(file_path, "r");
    if (!file) {
        handle_error("fopen");
    }

    char file_contents[MAX_STR_LENGTH];
    if (fgets(file_contents, MAX_STR_LENGTH, file) == NULL) {
        handle_error("fgets");
    }

    fclose(file);
    return atoi(file_contents);
}

void write_brightness(const char* file_path, int brightness) {
    FILE* file = fopen(file_path, "w");
    if (!file) {
        handle_error("fopen");
    }

    fprintf(file, "%d", brightness);
    fclose(file);
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <up|down>\n", argv[0]);
        return EXIT_FAILURE;
    }

    int current_brightness = read_brightness(FILE_PATH);
    int new_brightness;

    if (strcmp(argv[1], "up") == 0) {
        printf("Brightness up\n");
        new_brightness = current_brightness + BRIGHTNESS_INCREMENT;
    } else if (strcmp(argv[1], "down") == 0) {
        printf("Brightness down\n");
        new_brightness = current_brightness - BRIGHTNESS_INCREMENT;
    } else {
        printf("Unknown option: %s\n", argv[1]);
        new_brightness = current_brightness;
    }

    if (new_brightness > MAX_BRIGHTNESS) {
        new_brightness = MAX_BRIGHTNESS;
    } else if (new_brightness < MIN_BRIGHTNESS) {
        new_brightness = MIN_BRIGHTNESS;
    }

    printf("Current brightness: %d\n", current_brightness);
    printf("New brightness: %d\n", new_brightness);

    write_brightness(FILE_PATH, new_brightness);

    return EXIT_SUCCESS;
}