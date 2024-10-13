   import resolve from 'rollup-plugin-node-resolve';
   import commonjs from 'rollup-plugin-commonjs';

   export default {
     input: {
       entry1: 'src/entry1.js',
       entry2: 'src/entry2.js',
     },
     output: {
       dir: 'dist',
       format: 'es',
     },
     plugins: [
       resolve(),
       commonjs(),
     ],
   };