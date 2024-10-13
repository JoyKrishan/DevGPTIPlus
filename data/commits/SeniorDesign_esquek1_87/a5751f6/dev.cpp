#include <iostream>
#include <string>
#include <vector>
#include <type_traits>

using namespace std;

class cStreet {};
class cHouse {};
class cComputer {};
class cBook {};

    // Nested struct to store player properties
        vector<cStreet*>    Streets;    // Vector to store streets owned by the player
        vector<cHouse*>     Houses;     // Vector to store houses owned by the player
        vector<cComputer*>  Computers;  // Vector to store computers owned by the player
        vector<cBook*>      Books;      // Vector to store books owned by the player
    // Constructor
    cPlayer(string name) : m_name{name} {}
    
    // Destructor
    ~cPlayer() {}
    string         m_name{};        // Player's name
    Properties     m_Properties;    // Player's properties
    // Function to buy an item
    template<typename T>
    void buy(T& item, const string& itemName)
    {
        // Prompt the player to buy the item
        cout << m_name << " : Do you want to buy this " << itemName << "?" << endl;
        
        // Check the type of item and add it to the corresponding vector in player properties
        if (is_same_v<T, cStreet>) {
            m_Properties.Streets.push_back(&item);
        } else if (is_same_v<T, cHouse>) {
            m_Properties.Houses.push_back(&item);
        } else if (is_same_v<T, cComputer>) {
            m_Properties.Computers.push_back(&item);
        } else if (is_same_v<T, cBook>) {
            m_Properties.Books.push_back(&item);
        }
    }
};