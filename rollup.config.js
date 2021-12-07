import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only'

const production = !process.env.ROLLUP_WATCH

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      )

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    },
  }
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    css({ output: 'bundle.css' }),
    copy({
      targets: [
        {
          src: 'node_modules/bootstrap/dist/**/*',
          dest: 'public/vendor/bootstrap',
        },
      ],
    }),
    svelte({
      emitCss: true,
      compilerOptions: {
        dev: !production,
        css: (css) => {
          css.write('public/build/bundle.css')
        },
      },
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('public'),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
