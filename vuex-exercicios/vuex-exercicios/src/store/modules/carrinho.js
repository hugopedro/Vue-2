export default {
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
    },
    actions: { // O objetivo da action não é alterar o estado, portanto recebe context que é uma
        // espécie de this, apartir desse contexto é possível chamar a função commit
        // em actions que se pode usar AJAX, em mutations nunca.
        adicionarProduto({ commit }, payload) { // esse { commit } é um operador de desestruturação do ECMAScript, assim expoe o método pra fora do objeto e ai não precisa mais acessar objeto.nome do método, faz direto já
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}