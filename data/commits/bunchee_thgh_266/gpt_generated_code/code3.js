   // src/entry1.js
   import { sharedFunction } from './sharedModule';

   console.log('Entry 1');
   sharedFunction();

   // src/entry2.js
   import { sharedFunction } from './sharedModule';

   console.log('Entry 2');
   sharedFunction();