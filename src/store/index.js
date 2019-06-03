import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

console.log('process store 1', process)

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  console.log('process store 2', process)

  const Store = new Vuex.Store({
    modules: {
      example: require('./module-example')
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
