const usuarios = {
    nome:"Maria",
    idade:20,
    endereco:[
        "Rua do bobo, numero 0",
        "Rua qualquer, numero 120"
]
};


console.log(usuarios); // = Maria, idade: 20, endereco: ...
// console.log(usuarios.nome); // = Maria
usuarios.nome = "Antonieta"
console.log(usuarios); // = Antonieta


// ex. 1 objetos

const filme = {
Direcao:"Tim Burton",
NomeDoFilme:"O estranho mundo de Jack",
AnoLancamento:1993,
Elenco:["Danny Elfman", 
"Chris Sarandon",
"Catherine O'Hara" ],
Visto:true
}

console.log(filme.Direcao);
console.log(filme.NomeDoFilme);
console.log(filme["AnoLancamento"]);
console.log(filme["Elenco"]);
console.log(filme["Visto"]);


//ex. 2 objetos

const pessoa = {
    Nome:"Marven",
    Idade:17,
    GeneroMusicalPreferido:"Rock"
}
console.log(
"O nome da pessoa é" ,pessoa.Nome,
 "ela tem" ,pessoa.Idade, 
 "anos e gosta muito de" ,pessoa.GeneroMusicalPreferido);


//ex.3 objetos

const endereco = {
    rua:"Rua do bobo",
    numero:0,
    cidade:"São Leopoldo",
    estado:"Rio Grande Do Sul",
}

const pessoa = {
    nome:"Gabriel",
    idade:25,
    enderecoPessoa:endereco
}
console.log(pessoa);


///////////////////////////////////////////continuação - 09/05//////////////////////////////////////////////

const endereco = {
    rua:"Rua do bobo",
    numero:0,
    cidade:"São Leopoldo",
    estado:"Rio Grande Do Sul",
}
endereco.cep = "047-824-150-55"

const endereco2 = {
 ...endereco,
 cep:"21-32104"
}

const pessoa = {
    nome:"Gabriel",
    idade:25,
    generoMusical: "MPB",
    enderecoPessoa:[endereco,endereco2],
}
console.log(pessoa.enderecoPessoa[0].cidade);


// ex - interpretação de código

//1)

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) 
//Matheus Nachtergaele
//Virginia Cavendish
//"Canal Globo", horario: "14h"


//2)

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a)
// idade: 3
// nome: "Juca"
// raca: "SRD"

// idade: 3
// nome: "Juba"
// raca: "SRD"

// idade: 3
// nome: "Jubo"
// raca: "SRD"


// b) copiar


// 3)

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) false, undefined
// b)backender é uma variável definida como false, e "altura" não consta no objeto


// ex. 1 - escrita de código

// Exemplo de entrada
const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 console.log("Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit");
