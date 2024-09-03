import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"

export default {
  input: "vue/index.js",
  output: [
    {
      file: "vue/lib/index.cjs.js",
      format: "cjs",
    },
    {
      file: "vue/lib/index.es.js",
      format: "es",
    },
  ],
  external: ["vue", /@babel\/runtime/], // Externalize Vue and Babel runtime
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"],
    }),
    terser(),
  ],
}
