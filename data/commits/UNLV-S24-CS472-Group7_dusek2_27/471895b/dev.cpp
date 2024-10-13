/**
 * @brief Prints substrings and their counts from a map.
 * 
 * Iterates over an unordered_map, `substringCounts`, printing each key-value pair where the key is a substring
 * and the value is its occurrence count. Output format is "<substring> - Count: <count>". The iteration order
 * is based on the map's internal hash table, hence unordered.
 * 
 * @param substringCounts An unordered_map with std::string keys (substrings) and int values (counts). Assumes
 *        the map is non-empty; an empty map results in no output.
 * 
 * @note This function produces output to std::cout and modifies no inputs.
 */