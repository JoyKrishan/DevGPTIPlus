
    // Check if yind is within the valid range of lineBuffer
    if (yind >= 0 && yind < static_cast<int>(mpBuffer->lineBuffer.size())) {
        for (; xind >= 0; --xind) {
            // Ensure xind is within the valid range for the current line
            if (xind < static_cast<int>(mpBuffer->lineBuffer.at(yind).size())) {
                const QChar currentChar = mpBuffer->lineBuffer.at(yind).at(xind);
                if (currentChar == QChar::Space
                    || mpHost->mDoubleClickIgnore.contains(currentChar)) {
                    break;
                }
            } else {
                break; // xind is out of bounds, break the loop
            }

    // Repeat the check for yind and xind for the second part
    if (yind >= 0 && yind < static_cast<int>(mpBuffer->lineBuffer.size())) {
        for (; xind < static_cast<int>(mpBuffer->lineBuffer.at(yind).size()); ++xind) {
            const QChar currentChar = mpBuffer->lineBuffer.at(yind).at(xind);
            if (currentChar == QChar::Space
                || mpHost->mDoubleClickIgnore.contains(currentChar)) {
                break;
            }
        } else {
            break; // xind is out of bounds, break the loop
