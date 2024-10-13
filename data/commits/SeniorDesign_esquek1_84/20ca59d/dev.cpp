class cPlayer
{
public:

    struct Properties
    {
        std::vector<cStreet*>    Streets;
        std::vector<cHouse*>     Houses;
        std::vector<cComputer*>  Computers;
        std::vector<cBook*>      Book;
    };

    cPlayer(std::string name) : m_name{name}{};
    ~cPlayer(){};
    std::string         m_name{};
    Properties          m_Properties;

    // function overloaded
    void buy(cStreet& Street);
    void buy(cHouse& House);
    void buy(cComputer& Computer);
    void buy(cBook& Book);
};

void cPlayer::buy(cStreet& Street)
{
    std::cout << m_name.c_str() << " : Do you want buy this Street?" << std::endl;
    //Todo: Decision (here yes)
    m_Properties.Streets.push_back(&Street);
};

void cPlayer::buy(cHouse& House)
{
    std::cout << m_name.c_str() << " : Do you want buy this House?" << std::endl;
    //Todo: Decision (here yes)
    m_Properties.Houses.push_back(&House);
};

void cPlayer::buy(cComputer& PC)
{
    std::cout << m_name.c_str() << " : Do you want buy this PC?" << std::endl;
    //Todo: Decision (here yes)
    m_Properties.Computers.push_back(&PC);
};

void cPlayer::buy(cBook& Book)
{
    std::cout << m_name.c_str() << " : Do you want buy this Book?" << std::endl;
    //Todo: Decision (here yes)
    m_Properties.Book.push_back(&Book);
};