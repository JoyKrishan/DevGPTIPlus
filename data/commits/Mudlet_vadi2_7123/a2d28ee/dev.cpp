            if not (xind < static_cast<int>(mpBuffer->lineBuffer.at(yind).size())) {
            
            const QChar currentChar = mpBuffer->lineBuffer.at(yind).at(xind);
            if (currentChar == QChar::Space
                || mpHost->mDoubleClickIgnore.contains(currentChar)) {
                break;
            }