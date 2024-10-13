#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

/* Decode a single base64 character */
char base64dec_getc(const char **src) {
    while (**src && !isprint((unsigned char)**src))
        (*src)++;
    return **src ? *((*src)++) : '=';
}

/* Decode base64 encoded text */
char *base64dec(const char *src, size_t src_len) {
    char *result, *dst;
    static const char base64_digits[256] = {
        ['+'] = 62, ['\\'] = 0, ['\n'] = 0, ['\r'] = 0, ['/'] = 63, ['0'] = 52, ['1'] = 53, ['2'] = 54, ['3'] = 55, ['4'] = 56,
        ['5'] = 57, ['6'] = 58, ['7'] = 59, ['8'] = 60, ['9'] = 61, ['A'] = 0, ['B'] = 1, ['C'] = 2, ['D'] = 3, ['E'] = 4,
        ['F'] = 5, ['G'] = 6, ['H'] = 7, ['I'] = 8, ['J'] = 9, ['K'] = 10, ['L'] = 11, ['M'] = 12, ['N'] = 13, ['O'] = 14,
        ['P'] = 15, ['Q'] = 16, ['R'] = 17, ['S'] = 18, ['T'] = 19, ['U'] = 20, ['V'] = 21, ['W'] = 22, ['X'] = 23, ['Y'] = 24,
        ['Z'] = 25, ['a'] = 26, ['b'] = 27, ['c'] = 28, ['d'] = 29, ['e'] = 30, ['f'] = 31, ['g'] = 32, ['h'] = 33, ['i'] = 34,
        ['j'] = 35, ['k'] = 36, ['l'] = 37, ['m'] = 38, ['n'] = 39, ['o'] = 40, ['p'] = 41, ['q'] = 42, ['r'] = 43, ['s'] = 44,
        ['t'] = 45, ['u'] = 46, ['v'] = 47, ['w'] = 48, ['x'] = 49, ['y'] = 50, ['z'] = 51
    };

    /* Allocate memory for decoded string */
    result = dst = malloc(src_len / 4 * 3 + 1);
    if (!result) {
        fprintf(stderr, "Memory allocation failed\n");
        return NULL;
    }

    /* Decode base64 characters */
    while (*src) {
        char firstChar = base64dec_getc(&src);
        char secondChar = base64dec_getc(&src);
        char thirdChar = base64dec_getc(&src);
        char fourthChar = base64dec_getc(&src);

        int a = base64_digits[(unsigned char)firstChar];
        int b = base64_digits[(unsigned char)secondChar];
        int c = base64_digits[(unsigned char)thirdChar];
        int d = base64_digits[(unsigned char)fourthChar];

        if (a == -1 || b == -1) {
            fprintf(stderr, "Invalid input detected\n");
            free(result);
            return NULL;
        }

        *dst++ = (a << 2) | ((b & 0x30) >> 4);
        if (thirdChar == '=')
            break;
        *dst++ = ((b & 0x0f) << 4) | ((c & 0x3c) >> 2);
        if (fourthChar == '=')
            break;
        *dst++ = ((c & 0x03) << 6) | d;
    }
    *dst = '\0';
    return result;
}