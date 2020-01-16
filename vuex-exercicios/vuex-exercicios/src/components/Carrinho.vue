<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: { // como o método computado tem mais de 1 propiedade(no caso produtos) usa-se o spread (...)
        ...mapGetters({
            total: 'valorTotal'
        }),
        // total() {
        //     return this.$store.getters.valorTotal
        // },
        produtos() { //cuidado , o $ não é no this e sim no primeiro após o this.
            return this.$store.state.produtos
        }
    }
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

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
