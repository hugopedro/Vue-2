<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default { //carrinho porque ta pegando a namespace
    computed: mapGetters('carrinho', {
        total: 'valorTotal' // tem q colocar entre aspas pra acessar o getter e vai mapear pra variavel total
    })
    //metodo 2: computed: mapGetters(['valorTotal'])
    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
