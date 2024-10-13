type GetNaluResult = { type: NaluTypes; nalu: Uint8Array; rawNalu: Uint8Array }

enum NaluTypes {
  NDR = 1,
  IDR = 5,
  SEI = 6,
  SPS = 7,
  PPS = 8,
  AUD = 9,
function getNaluFromStream(
  buffer: Uint8Array,
  type: NaluTypes,
): GetNaluResult | null {
      if (nal_unit_type === type) {
        return { type: nal_unit_type, ...nalu }
  return null
  const idr = getNaluFromStream(frameData, NaluTypes.IDR)
  return Boolean(idr)
  const spsNalu = getNaluFromStream(frameData, NaluTypes.SPS)
    const sps = new SPS(spsNalu.nalu)