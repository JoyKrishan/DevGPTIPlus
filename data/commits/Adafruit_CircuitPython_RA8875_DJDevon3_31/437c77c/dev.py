from adafruit_ra8875.bmp import BMP
BAUDRATE = 6000000

WHITE = color565(255, 255, 255)
bitmap = BMP("/ra8875_blinka.bmp")
bitmap.draw_bmp(display, x_position, y_position)