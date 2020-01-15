new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 0,
        logs: []
    },
    computed: {
        hasResult() { // para saber se tem resultado verifica-se se a vida chegou a 0
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.log = [] //deve-se zerar a lista de logs antes de iniciar um novo jogo
        },
        attack(special) {
            //(5,10) para mostrar que está exibindo valores aleatorios entre 5 e 10
            //APARTIR DE UMA FUNÇÃO DENTRO DO Vue CHAMANDO OUTRA FUNÇÃO DEVE-SE USAR THIS PARA ACESSAR A VARIAVEL
            //console.log(especial, this.getRandom(5,10))
            this.hurt('monsterLife',5,10, special, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife >0) {
            this.hurt('playerLife',7,12, false, 'Monstro', 'Jogador', 'monster') }
        }, // pode-se tirar o atributo e colocar [atr], assim nao ficará preso só ao playerLife mas ao monsterLife tambem, entao pode-se manipular duas coisas ao mesmo tempo
        hurt(prop,min,max,special, source, target, cls) { // funcao generica de atacar para poder escolher
            const plus = special ? 5 : 0 // se for verdadeiro 5 se nao 0
            const hurt = this.getRandom(min+plus, max+plus)
            this[prop]= Math.max(this[prop] - hurt, 0) //Math.max pra evitar que o player life seja negativo
            // se for negativa o maior numero será 0
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10,15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster') //false porque só o monstro leva ataque especial
            // 'Monstro' porque está atingindo o player, logo a origem é monstro , e o target é o jogador, e o evento foi disparado pelo monster
        },
        heal(min,max) {
            const heal = this.getRandom(min,max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog
        },
        getRandom(min, max) {
            const value = Math.random() * ( max - min) + min
            return Math.round(value) //arredonda
        },
        registerLog(text,cls) { //cada log tem 2 parametros
            this.log.unshift({text, cls}) // cls de classe
            //faz com que apareça sempre o texto mais recente primeiro
                        //faz com que apareça sempre o texto mais recente primeiro
        }
    },
    watch: {
        hasResult(value) { // se obter resultado para de rodar o jogo
            if (value) this.running = false
        }
    }
})