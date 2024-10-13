#include <stdio.h>
#include <inttypes.h>

int main() {
    int64_t value;
    int64_t *p = &value;

    // Use the correct format specifier and pass a pointer to int64_t
    if (scanf("%" SCNd64, p) == 1) {
        // Input was successfully read into the variable 'value'
        printf("Value: %" PRId64 "\n", value);
    } else {
        printf("Input error\n");
    }

    return 0;
}