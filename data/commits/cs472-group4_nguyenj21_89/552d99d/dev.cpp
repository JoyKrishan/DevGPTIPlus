    void foo() { 
        unsigned char * buffer = new unsigned char[1000]; 
     
        // ... do something non-trivial with the buffer 
        // but no return from the function... 
     
        delete[] buffer; 
    } 