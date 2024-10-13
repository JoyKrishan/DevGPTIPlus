#include <iostream>
#include "time.h"

void Time::setTime(int hour, int min, int sec) {
    this->hour = hour;
    this->min = min;
    this->sec = sec;
}

Time operator+ (Time const &obj1, Time const &obj2) {
    Time result;
    result.sec = obj1.sec + obj2.sec;
    result.min = obj1.min + obj2.min;
    result.hour = obj1.hour + obj2.hour;

    result.min =result.min + result.sec/60;
    result.sec = result.sec % 60;
    result.hour = result.hour + result.min/60;
    result.min = result.min % 60;
    return result;
}

Time operator+ (Time const &obj1, int const secs) {
    Time result;
    result.sec = obj1.sec + secs;
    result.min = obj1.min;
    result.hour = obj1.hour;

    result.min =result.min + result.sec/60;
    result.sec = result.sec % 60;
    result.hour = result.hour + result.min/60;
    result.min = result.min % 60;
    return result;
}

void Time::printTime() {
    std::cout << hour << ":" << min << ":" << sec << "\n";
}

std::ostream &operator<< (std::ostream &out, Time const &obj) {
    out << obj.hour << ":" << obj.min << ":" << obj.sec;
    return out;
}