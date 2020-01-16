<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import  {mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed: {
        quantidade() {
            return this.$store.state.parametros.quantidade
        },
        preco() {
            return this.$store.state.parametros.preco
        } //após criar as unidades computadas deve-se remover as propiedades iguais em data para n dar conflito
    },
    methods: {
        //getters são colocados dentro de propiedades computadas, e setters dentro dos métodos!
        //entao para recaptular o ...mapActions cria automaticamente uma função adicionarProduto, e essa função entro dela só faz fazer o dispatch, então o que ele faz é nada mais que isso:

        /* 
        
        adicionarProduto(produto) {
            this.$store.dispatch('adicionarProduto', produto)
        },
        
        
        */
        ...mapActions(['adicionarProduto']), //colocando a reticências(operador spread) o resultado será gerado dentro do método (aqui)
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            // this.sequencia++
            // ALTERA O ESTADO CENTRAL DA APLICAÇÃO
            //this.$store.state.produtos.push(produto) // produto que acabeu de criar na linha 25, se usar isso junto com o payload vai dar pau
            // entao da mesma forma que usei pra ler os produtos (this.$store.state.produtos.)
            // tambem uso o push que pega a referencia que é compartilhada na minha aplicação e 
            //colocando dentro do produto que está compartilhado lá na store, que é o
            //this.$store.state.produtos

            //this.$store.commit('adicionarProduto', produto) //passa-se o nome da mutation no parâmetro, e receberá
            // um payload que é o produto que acabei de calcular na função adicionar... const produto etc
            //this.$store.dispatch('adicionarProduto', produto) //nome da action, e o payload
            this.adicionarProduto(produto) // então estou usando isso pois fiz um mapeamento da mutation na linha 27
    }
}
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>    