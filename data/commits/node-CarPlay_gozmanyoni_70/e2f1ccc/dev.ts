import { Bitstream, NALUStream, SPS } from './h264-utils'
const NaluTypes = {
  NDR: 1,
  IDR: 5,
  SEI: 6,
  SPS: 7,
  PPS: 8,
  AUD: 9,
}

function getDecoderConfig(frameData: Uint8Array): VideoDecoderConfig | null {
  const nalus = getNalus(frameData)
  const spsNalu = nalus.find(n => n.type === NaluTypes.SPS)
  if (spsNalu) {
    const sps = new SPS(spsNalu.nalu.nalu)
    const decoderConfig: VideoDecoderConfig = {
      codec: sps.MIME,
      codedHeight: sps.picHeight,
      codedWidth: sps.picWidth,
      hardwareAcceleration: 'prefer-hardware',
    }
    return decoderConfig
  }
  return null
export { getDecoderConfig, isKeyFrame }