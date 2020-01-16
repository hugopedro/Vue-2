import Vue from 'vue' //cuidado pra nao por vuex sem querer
import Vuex from 'vuex'

Vue.use(Vuex)

//Função construtora, e Store é o que faz poder usar o gerenciador de estado

export default new Vuex.Store({
    state: {
        produtos: [
        ]
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    }
})