import resolve from '@rollup/plugin-node-resolve';
import derver from 'derver/rollup-plugin';
import malina from 'malinajs/malina-rollup';
import malinaSass from 'malinajs/plugins/sass';
import {
   terser
} from "rollup-plugin-terser";

const DEV = !!process.env.ROLLUP_WATCH;
const cssInJS = true;

export default {
   preserveEntrySignatures: false,
   input: 'src/main.js',
   output: {
      dir: 'public/',
      format: 'es',
      chunkFileNames: !DEV ? '[name].[hash].js' : '[name].js'
   },
   plugins: [
      malina( {
         hideLabel: !DEV,
         css: cssInJS,
         plugins: [ malinaSass() ]
      } ),
      resolve(),
      DEV && derver( {
         spa: true
      } ),
      !DEV && terser()
   ],
   watch: {
      clearScreen: false
   }
}