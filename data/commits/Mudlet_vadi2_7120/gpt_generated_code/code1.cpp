TBuffer TBuffer::copy(QPoint& P1, QPoint& P2)
{
    TBuffer slice(mpHost);
    slice.clear();
    const int y = P1.y();
    int x = P1.x();
    if (y < 0 || y >= static_cast<int>(buffer.size())) {
        return slice;
    }

    // Ensure x starts within the valid range, and adjust P2.x() if it's out of bounds
    if (x < 0 || x >= static_cast<int>(buffer.at(y).size())) {
        x = 0; // Reset x to start of line if out of bounds
    }
    int P2x_corrected = std::min(P2.x(), static_cast<int>(buffer.at(y).size()) - 1); // Correct P2.x() to prevent out-of-bounds
    
    int oldLinkId{}, id{};
    for (; x <= P2x_corrected; ++x) { // Use corrected P2.x() in loop condition and allow x to start from corrected position
        const int linkId = buffer.at(y).at(x).linkIndex();
        if (linkId && (linkId != oldLinkId)) {
            id = slice.mLinkStore.addLinks(mLinkStore.getLinksConst(linkId), mLinkStore.getHintsConst(linkId), mpHost);
            oldLinkId = linkId;
        }

        if (!linkId) {
            id = 0;
        }
        const QString s(lineBuffer.at(y).at(x));
        slice.append(s, 0, 1, buffer.at(y).at(x).mFgColor, buffer.at(y).at(x).mBgColor, buffer.at(y).at(x).mFlags, id);
    }
    return slice;
}