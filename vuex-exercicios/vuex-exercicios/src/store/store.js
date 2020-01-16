import Vue from 'vue' //cuidado pra nao por vuex sem querer
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

// pega os getters do getters.js
import * as getters from './getters'

Vue.use(Vuex)

//Função construtora, e Store é o que faz poder usar o gerenciador de estado

export default new Vuex.Store({
    //referencia os módulos

    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
    },
    getters: { // se tiver varios objetos
        ...getters
    },
    modules: { carrinho, parametros }

    // É necessário ficar atento pois se for criar um state novo aqui teria que referenciar, exemplo:


})