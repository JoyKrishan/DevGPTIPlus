   function myFunction(x, y, z) {
     console.log(x, y, z);
   }
   const args = [0, 1, 2];
   myFunction(...args); // Equivalent to myFunction(0, 1, 2)