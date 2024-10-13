import struct

class BMP:
    def __init__(self, filename):
        self.filename = filename
        self.colors = None
        self.data = None
        self.data_size = 0
        self.bpp = 0
        self.width = 0
        self.height = 0
        self.read_header()

    def read_header(self):
        if self.colors:
            return
        with open(self.filename, "rb") as f:
            f.seek(10)
            self.data = int.from_bytes(f.read(4), "little")
            f.seek(18)
            self.width = int.from_bytes(f.read(4), "little")
            self.height = int.from_bytes(f.read(4), "little")
            f.seek(28)
            self.bpp = int.from_bytes(f.read(2), "little")
            f.seek(34)
            self.data_size = int.from_bytes(f.read(4), "little")
            f.seek(46)
            self.colors = int.from_bytes(f.read(4), "little")

    def draw(self, disp, x=0, y=0):
        print("{:d}x{:d} image".format(self.width, self.height))
        print("{:d}-bit encoding detected".format(self.bpp))
        line_size = self.width * (self.bpp // 8)
        if line_size % 4 != 0:
            line_size += 4 - line_size % 4

        with open(self.filename, "rb") as f:
            f.seek(self.data)
            pixel_data = f.read()

        disp.set_window(x, y, self.width, self.height)
        for line in range(self.height):
            current_line_data = b""
            line_start = line * line_size
            line_end = line_start + line_size
            for i in range(line_start, line_end, self.bpp // 8):
                if (line_end - i) < self.bpp // 8:
                    break
                if self.bpp == 16:
                    color = self.convert_555_to_565(pixel_data[i] | pixel_data[i + 1] << 8)
                if self.bpp in (24, 32):
                    color = self.color565(
                        pixel_data[i + 2], pixel_data[i + 1], pixel_data[i]
                    )
                current_line_data = current_line_data + struct.pack(">H", color)
            disp.setxy(x, self.height - line + y)
            disp.push_pixels(current_line_data)
        disp.set_window(0, 0, disp.width, disp.height)

    @staticmethod
    def convert_555_to_565(color_555):
        # Convert 16-bit color from 5-5-5 to 5-6-5 format
        r = (color_555 & 0x1F) << 3
        g = ((color_555 >> 5) & 0x1F) << 2
        b = ((color_555 >> 10) & 0x1F) << 3
        return (r << 11) | (g << 5) | b

    @staticmethod
    def color565(r, g, b):
        # Convert 24-bit RGB color to 16-bit color (5-6-5 format)
        return ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3)