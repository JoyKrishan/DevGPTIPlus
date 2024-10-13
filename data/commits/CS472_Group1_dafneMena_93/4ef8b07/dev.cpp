
//Include Libraries
#include <iostream>  
#include <fstream> 
#include <string> 
#include <sstream> 
#include <vector> 
#include <algorithm>
#include <unordered_map>
#include <list>

//dfs function which will find list of ancestors 
bool ancestors(std::string current,std::string searchName,
    std::unordered_map<std::string, std::list<std::string> > famTree, 
    std::unordered_map<std::string, bool> &visited, std::unordered_map<std::string, bool> &listOfAncestors) 
{
    //checks if current node matches search name and returns
    if(current == searchName)
        return true; 

    //if node has already been visted return 
     if(visited[current])
        return false; 
    
    //set current node to true 
    visited[current] = true; 

    //explore that current node and traverse through link list
    for(auto i = famTree[current].begin(); i != famTree[current].end(); i++)
    {
        //check if node has already been visted 
        if(!visited[*i])
        {   
            if(ancestors(*i, searchName, famTree, visited,listOfAncestors))
            {   
                //set list of ancestors 
                listOfAncestors[current] = true; 
                return true; 
            }
           
        }
    }
    return false; 
}

int main()
{
    //holds family list
    std::unordered_map< std::string, std::list<std::string> > familyList; 
    std::unordered_map< std::string, bool> visted; 
    std::unordered_map< std::string, bool> ancestorList; 

    //holds vector to sort the relative and list of ancestors 
    std::vector<std::string> sortedRelativeName;
    std::vector<std::string> neighborsInFront; 
    std::vector<std::string> zeroNeighbors; 

    //will be used to check which nodes have no neighbors
    std::vector<std::string> noNeighbors; 
    std::unordered_map< std::string, int> neighborCheck;

    //used to read file 
    std::ifstream inFile; 
    std::string filename; 

    //used to parse the file
    std::string line;
    std::string partOfLine;
  
    //gets user input file 
    std::cout<<"\nEnter file: "; 
    std::cin >> filename; 

    //well be used to map 
    std::string from;
    std::string to; 

    //opens file
    inFile.open(filename);
    
    //reads through entire file to parse it 
    while(getline(inFile, line)) 
    {
        //prepares individual line to be parsed
        std::stringstream ss(line);

        /* remembering the format of the file
           from  ->  to
           it gets the "from" and then the following string */ 
        ss >> from; 
        ss >> partOfLine; 

        //checks if part of string is ->
        if(partOfLine == "->" ) 
        {
            //this the following parse of string will be the "to"
            ss >> partOfLine;
            to = partOfLine;  
            
            //checks if there is a second name to "to"
            if(to[2] == '.' || to[3] == '.' ) {
                //grabs second name, adds a space, and appends to "to"
                ss >> partOfLine; 
                to.append(" ");
                to.append(partOfLine); 
            }
        }
        //means there is a second name to "from"
        else{
            //adds a space and appends the second name 
            from.append(" ");
            from.append(partOfLine);
            
            ss >> partOfLine; //grabs the -> 
            ss >> partOfLine; //grabs the "to" and sets it  
            to = partOfLine;
        }
        familyList[from].push_back(to); //adds it to family list
        visted[from] = false; //set all elements in visted hashmap to false
        ancestorList[from] = false; //set all elements of ancestor to false
        neighborCheck[to] = -1; 

        //add relative names in a vector only if it hasnt been added previously
        if(std::find(sortedRelativeName.begin(), sortedRelativeName.end(),from) == sortedRelativeName.end())
            sortedRelativeName.push_back(from); 
        if(std::find(sortedRelativeName.begin(), sortedRelativeName.end(),to)== sortedRelativeName.end())
            sortedRelativeName.push_back(to); 
    }

    //sort relalative name list
    std::sort(sortedRelativeName.begin(), sortedRelativeName.end()); 
   int noNeighCount = 0; 
    //find which node has no incoming neighbors and stores in vector
    for(int i = 0 ; i < sortedRelativeName.size(); i++ )
    {   
        //if hashmap is set to 0 that means it is only a "to" and not a from
        if(neighborCheck[sortedRelativeName[i]] == 0 )
        { 
            //creates a hashmap with no incoming neighbors 
            zeroNeighbors.push_back(sortedRelativeName[i]);
            noNeighbors.push_back(sortedRelativeName[i]); //adds to no neighbor vector 
        
        }
        else
        neighborsInFront.push_back(sortedRelativeName[i]); //creates hashmap with neighbors in the front 
    }

    //finalizes a vector to send into DFS ancestors 
    for(int i = 0 ; i < neighborsInFront.size(); i++ )
    {   
        noNeighbors.push_back(neighborsInFront[i]);
    }
  

  // Clarification here 
    for(int i = 0; i < sortedRelativeName.size(); i++)
    {
        std::cout<< "\nRelative Name: " << sortedRelativeName[i]; 
        std::cout<< "\nList of ancestors"; 
        
        // Checks if the relative has no incoming neighbors
        if(std::find(zeroNeighbors.begin(), zeroNeighbors.end(),sortedRelativeName[i]) != zeroNeighbors.end())
            std::cout<< "\nNone"; 
        else{
             // Finds ancestors for the relative and prints them
            for(int j = 0; j < noNeighbors.size(); j++)
            {   
                ancestors(noNeighbors[j],sortedRelativeName[i],familyList, visted, ancestorList);

                for(int k = 0; k < sortedRelativeName.size(); k++)
                {
                    // Reset visited map for the next iteration
                    visted[sortedRelativeName[k]] = false; 
                }
            }
            for(int k = 0; k < sortedRelativeName.size();k++)
            {
                if(ancestorList[sortedRelativeName[k]])
                {   
                    // Prints ancestors found for the relative
                    std::cout<<"\n" << sortedRelativeName[k];
                }
                 ancestorList[sortedRelativeName[k]] = false; 
            }
        }
        std::cout<<std::endl;
    }

    return 0; 
}