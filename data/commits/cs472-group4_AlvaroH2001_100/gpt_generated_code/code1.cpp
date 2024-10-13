#include <cstdlib>
#include <string>
#include <iostream>

using namespace std;

// Template class for a doubly linked list
template <typename T>
class LL
{
private:
    // Nested structure to represent each node in the linked list
    struct Node
    {
        T data;     // Data held by the node
        Node *prev; // Pointer to the previous node in the list
        Node *next; // Pointer to the next node in the list
    };

    Node *head; // Pointer to the first node in the list
    Node *tail; // Pointer to the last node in the list

public:
    // Iterator class to enable external access to the list's nodes
    class Iterator
    {
    private:
        Node *current; // Pointer to the current node in the iteration

    public:
        // Default constructor initializes current to nullptr
        Iterator() : current(nullptr) {}

        // Constructor initializes current to the given node pointer
        Iterator(Node *ptr) : current(ptr) {}

        // Dereference operator returns the data of the current node
        T operator*() const { return current->data; }

        // Postfix increment operator moves the iterator to the next node
        const Iterator &operator++(int) {
            current = current->next;
            return *this;
        }

        // Postfix decrement operator moves the iterator to the previous node
        const Iterator &operator--(int) {
            current = current->prev;
            return *this;
        }

        // Equality comparison operator
        bool operator==(const Iterator &rhs) const { return current == rhs.current; }

        // Inequality comparison operator
        bool operator!=(const Iterator &rhs) const { return current != rhs.current; }

        // Allow LL to access Iterator's private members
        friend class LL;
    };

    // Default constructor initializes an empty list
    LL() : head(nullptr), tail(nullptr) {}

    // Copy constructor creates a deep copy of the given list
    LL(const LL<T> &copy);

    // Copy assignment operator assigns a deep copy of the given list
    const LL<T> &operator=(const LL<T> &rhs);

    // Destructor deallocates all nodes in the list
    ~LL();

    // Inserts a new node with the given data at the beginning of the list
    void headInsert(const T &item);

    // Inserts a new node with the given data at the end of the list
    void tailInsert(const T &item);

    // Returns an iterator pointing to the first node in the list
    Iterator begin() const;

    // Returns an iterator pointing to the node past the last node in the list
    Iterator end() const;

    // Swaps the positions of the nodes pointed to by the given iterators
    void swapNodes(Iterator &it1, Iterator &it2);
};

// Implementation details for methods, especially those involving complex operations
// like copying and assignment, should follow here. These implementations would include
// thorough comments explaining each step of the process, such as how nodes are copied
// in a deep copy, how the destructor iterates through the list to delete nodes, and how
// swapNodes manages pointers to effectively swap nodes without losing track of the list structure.
