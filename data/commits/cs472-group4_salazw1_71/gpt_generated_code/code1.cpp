#include <iostream>

class Time {
private:
    int hour;
    int min;
    int sec;

    void normalizeTime() {
        min += sec / 60;
        sec %= 60;
        hour += min / 60;
        min %= 60;
    }

public:
    Time() : hour(0), min(0), sec(0) {}

    Time(int hour, int min, int sec) : hour(hour), min(min), sec(sec) {
        normalizeTime();
    }

    void setTime(int hour, int min, int sec) {
        this->hour = hour;
        this->min = min;
        this->sec = sec;
        normalizeTime();
    }

    void printTime() const {
        std::cout << hour << ":" << min << ":" << sec << "\n";
    }

    friend Time operator+(const Time &obj1, const Time &obj2);
    friend Time operator+(const Time &obj1, int secs);
    friend std::ostream &operator<<(std::ostream &out, const Time &obj);
};

Time operator+(const Time &obj1, const Time &obj2) {
    Time result;
    result.sec = obj1.sec + obj2.sec;
    result.min = obj1.min + obj2.min;
    result.hour = obj1.hour + obj2.hour;
    result.normalizeTime();
    return result;
}

Time operator+(const Time &obj1, int secs) {
    Time result = obj1;
    result.sec += secs;
    result.normalizeTime();
    return result;
}

std::ostream &operator<<(std::ostream &out, const Time &obj) {
    out << obj.hour << ":" << obj.min << ":" << obj.sec;
    return out;
}

int main() {
    Time t1(1, 30, 45);
    Time t2(0, 45, 15);
    
    Time t3 = t1 + t2;
    std::cout << "t1 + t2: " << t3 << std::endl;

    Time t4 = t1 + 1000;
    std::cout << "t1 + 1000 seconds: " << t4 << std::endl;

    return 0;
}