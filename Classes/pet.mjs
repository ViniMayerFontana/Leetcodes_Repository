export const petName = 'planck';
//coisa 1 que to exportando. ela tem uma constante

export const petAge = 20;
//coisa 2 que to exportando. ela tem uma constante


export default class Pet{ //exportando a classe Pet como padrão

    constructor(age, name){ //controi um objeto que recebe 2 parametros
        this.age = age; //o age do constructor (o parametro) recebe o valor de age
        this.name = name;//mesma coisa com age
       
    }
    showName = () => this.name.toLowerCase(); //primeira função dessa classe. ela pega o nome do parametro do objeto e deixa em minusculo
    
    showAge = (age2) => age2 + this.age; //pega o age do parametro do objeto e soma com o parametro age2 da propria função
}
