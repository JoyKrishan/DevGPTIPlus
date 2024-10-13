/**
 * @brief Swaps the height and y-coordinate of two Rectangle objects.
 * 
 * This function takes two Rectangle objects as arguments and swaps their
 * height values along with adjusting their y-coordinates based on the ground
 * position. It also changes the color of the rectangles and introduces a 
 * small delay for visualization.
 * 
 * @param lhs The first Rectangle object.
 * @param rhs The second Rectangle object.
 */
void swap(Rectangle& lhs, Rectangle& rhs)
{
    // Temporary storage for swapping values
    Rectangle temp;

    // Swap height and adjust y-coordinate for the first rectangle
    temp.height = lhs.height;
    temp.y = ground - lhs.height;

    // Swap height and adjust y-coordinate for the second rectangle
    lhs.height = rhs.height;
    lhs.y = ground - rhs.height;

    // Restore height and y-coordinate for the first rectangle
    rhs.height = temp.height;
    rhs.y = temp.y;

    // Change rectangle colors for visualization
    lhs.color = sf::Color(255, 255, 255);
    rhs.color = sf::Color(255, 255, 255);

    // Introduce a small delay for visualization
    sf::sleep(sf::milliseconds(10));
}


// Previous Code that I had!!
/*
}
*/