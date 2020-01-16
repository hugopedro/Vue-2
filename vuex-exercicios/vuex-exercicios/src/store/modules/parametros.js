export default {
    state: {
        quantidade: 2,
        preco: 19.99
    },
    mutations: { //payload é uma convenção de nome pra passar um dado adicional
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    }
}