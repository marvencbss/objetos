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
