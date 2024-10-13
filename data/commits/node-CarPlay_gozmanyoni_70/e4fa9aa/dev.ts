import { Bitstream, NALUStream } from './h264-utils'
      const bitstream = new Bitstream(nalu.nalu)
function isKeyFrame(frameData: Uint8Array): boolean {
  const stream = new NALUStream(frameData, { type: 'annexB' })
  for (const nalu of stream.nalus()) {
    if (nalu?.nalu) {
      const bitstream = new Bitstream(nalu.nalu)
      bitstream.seek(3)
      const nal_unit_type = bitstream.u(5)
      if (nal_unit_type === NaluTypes.IDR) {
        return true
      }
    }
  }
  return false
}

export { isKeyFrame, getNalus, NaluTypes }