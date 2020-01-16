import Vue from 'vue' //cuidado pra nao por vuex sem querer
import Vuex from 'vuex'

Vue.use(Vuex)

//Função construtora, e Store é o que faz poder usar o gerenciador de estado

export default new Vuex.Store({
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    }, //mutations é a função set do vue, e só pode passar um parâmetro adicional,
    // no caso é o payload, esse parâmetro pode ser um objeto, array, etc, então ou ele vai ter
    // só o state ou o state e o payload
    mutations: { //payload é uma convenção de nome pra passar um dado adicional
        adicionarProduto(state, payload) {
            state.produtos.push(payload)//usarei o commit pra chamar o mutation em loja.vue
        }
    }
})