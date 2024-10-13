void Time::normalizeTime() {
    min += sec / 60;
    sec %= 60;
    hour += min / 60;
    min %= 60;
}

Time operator+ (const Time& obj1, const Time& obj2) {
    result.normalizeTime();
Time operator+ (const Time& obj1, int secs) {
    Time result = obj1;
    result.sec += secs;
    result.normalizeTime();
std::ostream& operator<< (std::ostream& out, const Time& obj) {
}