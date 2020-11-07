import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      getFact: '',
    },
    mutations: {
      setFact(state, fact) {
        state.getFact = fact
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios

          .get('https://uselessfacts.jsph.pl/random.json?language=en')
          .then((res) => {
            const fact = res.data
            vuexContext.commit('setFact', fact.text)
          })
          .catch((e) => context.error(e))
      },
      setFact(vuexContext, fact) {
        vuexContext.commit('setFact', fact)
      },
    },
    getters: {
      getFact(state) {
        return state.getFact
      },
    },
  })
}

export default createStore
