    // Ensure x starts within the valid range, and adjust P2.x() if it's out of bounds
    if (x < 0 || x >= static_cast<int>(buffer.at(y).size())) {
        x = 0; // Reset x to start of line if out of bounds
    int P2x_corrected = std::min(P2.x(), static_cast<int>(buffer.at(y).size()) - 1); // Correct P2.x() to prevent out-of-bounds

    for (; x <= P2x_corrected; ++x) {