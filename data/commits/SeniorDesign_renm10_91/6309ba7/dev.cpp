#include <iostream>
#include <vector>
#include <cstdlib>
#include <time.h>
#include <unistd.h>
#include <SFML/Graphics.hpp>
#include "Rectangle.h"

void swap(Rectangle&, Rectangle&);

unsigned int WIND_WIDTH = 800; //Window width
unsigned int WIND_HEIGHT = 800; //Window height
int ground = WIND_HEIGHT - 1; //Y coordinate of the very bottom of the window

/*Swaps the value(height) and changes its y-coordinate according to its height*/
void swap(Rectangle& lhs, Rectangle& rhs)
{
    Rectangle temp;
    temp.height = lhs.height;
    temp.y = ground - lhs.height;

    lhs.height = rhs.height;
    lhs.y = ground - rhs.height;

    rhs.height = temp.height;
    rhs.y = temp.y;

    lhs.color = sf::Color(255,255,255);
    rhs.color = sf::Color(255,255,255);

    sf::sleep(sf::milliseconds(10));
}