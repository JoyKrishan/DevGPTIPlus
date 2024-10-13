String.prototype.checksum = function () {
    let encoder = new TextEncoder();
    let data = encoder.encode(this);
    let seed = 0x12345678;
    for (let i = 0; i < data.length; i++) {
        seed += (data[i] * (i + 1));
    }
    return (seed & 0xffffffff).toString(16);
}