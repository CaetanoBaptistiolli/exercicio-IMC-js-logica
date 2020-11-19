// let listaPessoas = []; //Array vazio, mas posso colocar valores para ja iniciarem a minha tabela[{objeto},{objeto2}]
// EXPLICAÇÃO SOBRE JSON E LOCAL STORAGE

// let pessoa = {
//     nome: "Eduardo",
//     idade: 38
// }

// let stringPessoa = JSON.stringify(pessoa);

// EXPLICAÇÃO SOBRE JSON E LOCAL STORAGE

// let pessoa = {
//     nome: "Eduardo",
//     idade: 38
// }

// let stringPessoa = JSON.stringify(pessoa);

// console.log(pessoa);
// console.log(stringPessoa);

// localStorage.setItem("pessoa", pessoa);
// localStorage.setItem("stringPessoa", stringPessoa);


// console.log(JSON.parse(localStorage.getItem("stringPessoa")));
// localStorage.setItem("listaPessoas", 'teste');

//LEMBRAR SEMPRE DE LIMPAR O STORAGE
// COMEÇO DO PROGRAMA
let listaPessoas; //undefined


if (localStorage.getItem("listaPessoas") == null) { //não tem dados
    listaPessoas = []; //inicializa com array vazio

} else { //não tem dados no localStorage
    //inicializa com os dados do storage
    listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));

}
exibeResultado();
// console.log(listaPessoas);
// console.log(listaPessoas.length);



//função para calcular IMC
//recebve altura e peso e faz o calculo
function calculaIMC(a, p) {
    return p / (a * a);
    /*
        Resultado	        Situação
        Entre 18,5 e 24,99	Peso normal
        Entre 25 e 29,99	Acima do peso
        Entre 30 e 34,99	Obesidade I
        Entre 35 e 39,99	Obesidade II (severa)
    */
}
function geraSituacao(imc) {
    //alert(imc)
    let situacao = "";
    //gerar a situação, baseada no imc
    
    if (imc < 18.5) {
        return 'Magreza Severa';
    } else if (imc >= 18.5 && imc <=24.99) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <=29.99) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc <=34.99) {
        return 'Obesidade l';
    } else if (imc >= 35 && imc <=39.99) {
        return 'Obesidade ll (Severa)';
    } else { 
        return 'Cuidado';
    }
    alert(situacao);
}
function calcular() {
    


    //pegar os dados do formulario
    let nome = document.getElementById('nome').value;
    //parseFloat para numeros quebrados
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    
    console.log(nome);
    console.log(altura);
    console.log(peso);

    if( nome == "" || isNaN(altura) || isNaN(peso) ) {
        alert("Preencha todos os campos corretamente");
    } else { //Senão tudo preenchido

        //calcular o IMC
        let imc = calculaIMC(altura, peso); //peso / (altura * altura)

        let situacao = geraSituacao(imc)
        
        //guardar o imc e a situação no objeto pessoa
        let pessoa = {};
        pessoa.nome = nome;
        pessoa.altura = altura;
        pessoa.peso = peso;
        pessoa.imc = imc;
        pessoa.situacao = situacao;

        //cadastra na linha de pessoa
        listaPessoas.push(pessoa);
        localStorage.setItem("listaPessoas", JSON.stringify(listaPessoas)); //armazena os dados em forma de string no storage

        // exibir a pessoa na tela
        exibeResultado();
    }  
} // fim fa função calcular

function exibeResultado() {
    let template = "";
    for (let i = 0; i < listaPessoas.length; i++) {
        template += `<tr>
                    <td>${listaPessoas[i].nome}</td>
                    <td>${listaPessoas[i].altura}</td>
                    <td>${listaPessoas[i].peso}</td>
                    <td>${listaPessoas[i].imc}</td>
                    <td>${listaPessoas[i].situacao}</td>
                </tr>`;  
    }
    
        document.getElementById('cadastro').innerHTML = template;

        
}
