import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import terser from "@rollup/plugin-terser"

export default {
  input: "react/index.js",
  output: [
    {
      file: "react/lib/index.cjs.js",
      format: "cjs",
    },
    {
      file: "react/lib/index.es.js",
      format: "es",
    },
  ],
  external: ["react"],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      configFile: "./babel.config.react.js",
      extensions: [".js"],
      exclude: "node_modules/**",
    }),
    terser(),
  ],
}
