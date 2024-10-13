   (function() {
     var ext = {};

     // Bitwise AND operator
     ext.bitwise_and = function(a, b) {
       return a & b;
     };

     // Bitwise OR operator
     ext.bitwise_or = function(a, b) {
       return a | b;
     };

     // Bitwise XOR operator
     ext.bitwise_xor = function(a, b) {
       return a ^ b;
     };

     // Bitwise NOT operator
     ext.bitwise_not = function(a) {
       return ~a;
     };

     // Block and block menu descriptions
     var descriptor = {
       blocks: [
         ['r', 'bitwise AND %n %n', 'bitwise_and', 0, 0],
         ['r', 'bitwise OR %n %n', 'bitwise_or', 0, 0],
         ['r', 'bitwise XOR %n %n', 'bitwise_xor', 0, 0],
         ['r', 'bitwise NOT %n', 'bitwise_not', 0],
       ],
     };

     // Register the extension
     ScratchExtensions.register('Bitwise Operators', descriptor, ext);
   })();