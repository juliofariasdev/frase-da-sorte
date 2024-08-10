import readlineSync from 'readline-sync'
import {frases} from './frases.js'
console.log('-'.repeat(11), 'FRASE DA SORTE DO ANIVERSÁRIO', '-'.repeat(11))
console.log('\nSEJA BEM-VINDO!! LEIA A SORTE DO SEU ANIVERSÁRIO!!')

let diaAniversario = readlineSync.question('\nInforme o dia do seu aniversario: ')
console.log()
if (diaAniversario>= 1 && diaAniversario<=31){
    console.log('*'.repeat(60))
    console.log('Sua sorte:',frases[diaAniversario])
    console.log('*'.repeat(60))
}else{
    console.log('DIA INVÁLIDO!!!')
}