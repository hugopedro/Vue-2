new Vue({
    el: '#desafio',
    data: {
        SEU_NOME: 'Hugo',
        IDADE: 21,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg' 
    },
    methods: {
        idadeVezes3() {
            return this.IDADE * 3 // ATENÇÃO É CASE-SENSITIVE
        },
        /*
        random() {
            return Math.random()
        }*/
    }
})