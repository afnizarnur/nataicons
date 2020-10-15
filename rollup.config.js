import babel from "rollup-plugin-babel"

const plugins = [
  babel({
    presets: ["@vue/babel-preset-jsx"],
    exclude: "node_modules/**",
  }),
]

const input = "./vue/index.js"

const build = [
  /* esm */
  {
    input,
    plugins,
    output: {
      file: `packages/vue/lib/index.es.js`,
      format: "es",
      sourcemap: true,
    },
  },

  /* cjs */
  {
    input,
    plugins,
    output: {
      file: `packages/vue/lib/index.cjs.js`,
      format: "cjs",
      sourcemap: true,
    },
  },

  /* umd */
  {
    input,
    plugins,
    output: {
      file: `packages/vue/lib/index.umd.js`,
      format: "umd",
      name: `nataicons`,
      sourcemap: true,
    },
  },
]

export default build
