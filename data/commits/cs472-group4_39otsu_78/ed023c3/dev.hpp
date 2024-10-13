#ifndef VERTEX_H_
#define VERTEX_H_

template <class Type>
class vertex
{
	
	struct node
	{
		Type item;
		node * link;
	};
	
public:

	class edgeIterator
	{
	public:
	
		friend class vertex;
		edgeIterator();
		edgeIterator(node*);
		edgeIterator operator++(int);
		Type operator*();
		bool operator==(const edgeIterator&);
		bool operator!=(const edgeIterator&);
		
	private:
	
		node * current;
	};
	
	vertex();
	vertex(const vertex<Type>&);
	const vertex& operator=(const vertex<Type>&);
	~vertex();
	edgeIterator begin();
	edgeIterator end();
	void addEdge(const Type&);
	
private:

	node * neighbors;
};

template <class Type>
vertex<Type>::vertex()
{
	neighbors = nullptr;
}

template <class Type>
vertex<Type>::vertex(const vertex<Type>& copy)
{	
	neighbors = new node;
	neighbors->item = copy.neighbors->item;
	neighbors->link = new node;

	auto * current = neighbors->link;
	auto * current_copy = copy.neighbors->link;
	while (current != nullptr) {
		
		current->item = current_copy->item;

		current_copy = current_copy->link;
		
		if (current_copy != nullptr){
			current->link = new node;
		}else {
			current->link = nullptr;
		}
		current = current->link;
	}
	
}

template <class Type>
const vertex<Type>& vertex<Type>::operator=(const vertex<Type>& rhs)
{
	if (neighbors != nullptr) {
		auto it = this->begin();
		while (it != nullptr) {
			delete it.current;
			it++;
		}
	}
	
	neighbors = new node;
	neighbors->item = rhs.neighbors->item;
	neighbors->link = new node;

	auto current = neighbors->link;
	auto current_copy = rhs.neighbors->link;
	while (current != nullptr) {
		
		current->item = current_copy->item;

		current_copy = current_copy->link;

		if (current_copy != nullptr) {
			current->link = new node;
		}else {
			current->link = nullptr;
		}
		current = current->link;

	}
	
	return *this;
}

template <class Type>
vertex<Type>::~vertex()
{
	auto it = this->begin();
	while (it != nullptr) {
		delete it.current;
		it++;
	}
}

template <class Type>
typename vertex<Type>::edgeIterator vertex<Type>::begin()
{
	return this->neighbors;
}

template <class Type>
typename vertex<Type>::edgeIterator vertex<Type>::end()
{
	return nullptr;
}

template <class Type>
void vertex<Type>::addEdge(const Type& data)
{
	node * new_node = new node;

	new_node->item = data;
	new_node->link = nullptr;
	if (this->neighbors == nullptr) {
		this->neighbors = new_node;
	}else {
		new_node->link = this->neighbors;
		this->neighbors = new_node;
	}
}

template <class Type>
vertex<Type>::edgeIterator::edgeIterator()
{
	current = nullptr;
}

template <class Type>
vertex<Type>::edgeIterator::edgeIterator(node* rhs)
{
	current = rhs;
}

template <class Type>
typename vertex<Type>::edgeIterator vertex<Type>::edgeIterator::operator++(int)
{
	current = current->link;
	return *this;
}

template <class Type>
Type vertex<Type>::edgeIterator::operator*()
{
	return this->current->item;
}

template <class Type>
bool vertex<Type>::edgeIterator::operator==(const edgeIterator& rhs)
{
	return (this->current == rhs.current);
}

template <class Type>
bool vertex<Type>::edgeIterator::operator!=(const edgeIterator& rhs)
{
	return (this->current != rhs.current);
}

#endif // VERTEX_H_