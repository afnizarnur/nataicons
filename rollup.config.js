import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import terser from "@rollup/plugin-terser"
import vue from "rollup-plugin-vue"

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
  external: ["vue"],
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    babel({
      babelHelpers: "bundled",
      configFile: "./babel.config.vue.js",
      extensions: [".js", ".vue"],
      exclude: "node_modules/**",
    }),
    terser(),
  ],
}
