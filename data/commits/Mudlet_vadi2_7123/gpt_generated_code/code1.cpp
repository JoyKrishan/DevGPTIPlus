void TTextEdit::expandSelectionToWords()
{
    int yind = mPA.y();
    int xind = mPA.x();

    // Check if yind is within the valid range of lineBuffer
    if (yind >= 0 && yind < static_cast<int>(mpBuffer->lineBuffer.size())) {
        for (; xind >= 0; --xind) {
            // Ensure xind is within the valid range for the current line
            if (xind < static_cast<int>(mpBuffer->lineBuffer.at(yind).size())) {
                QChar currentChar = mpBuffer->lineBuffer.at(yind).at(xind);
                if (currentChar == QChar::Space
                    || mpHost->mDoubleClickIgnore.contains(currentChar)) {
                    break;
                }
            } else {
                break; // xind is out of bounds, break the loop
            }
        }
    }
    mDragStart.setX(xind + 1);
    mPA.setX(xind + 1);

    yind = mPB.y();
    xind = mPB.x();

    // Repeat the check for yind and xind for the second part
    if (yind >= 0 && yind < static_cast<int>(mpBuffer->lineBuffer.size())) {
        for (; xind < static_cast<int>(mpBuffer->lineBuffer.at(yind).size()); ++xind) {
            QChar currentChar = mpBuffer->lineBuffer.at(yind).at(xind);
            if (currentChar == QChar::Space
                || mpHost->mDoubleClickIgnore.contains(currentChar)) {
                break;
            }
        }
    }
    mDragSelectionEnd.setX(xind - 1);
    mPB.setX(xind - 1);
}