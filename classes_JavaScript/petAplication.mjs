import Pet, {petName, petAge} from './pet.mjs'; //importando o Pet como defalut e petName e petAge também do meu arquivo que elas estão


const alexei = new Pet(20, 'alexei'); //criando um novo (new) objeto da classe Pet que recebe 20(age) e 'alexei'(name) e atribui esse objeto à constante alexei
console.log(alexei.showName()); //printa o resultado da função showName do objeto alexei (definido acima)


console.log(alexei.showAge(3));//printa o resultado da função showAge (que recebeu o parametro própirio 3) do objeto alexei
