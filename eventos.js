//ALGORITMOS CONDICIONAIS

function ac_01() {
    event.preventDefault();
    let a = +document.getElementById("ac01a").value;
    let b = +document.getElementById("ac01b").value;
    let c = +document.getElementById("ac01c").value;

    if ((a + b) < c) {
        alert(`${a}+${b} é menor que ${c}`);
    } else if ((a + b) == c) {
        alert(`${a}+${b} é igual que ${c}`);
    } else if ((a + b) > c) {
        alert(`${a}+${b} é maior a ${c}`);
    } else {
        alert('Os números informados são inválidos.')
    }
}

function ac_02() {
    event.preventDefault();
    let sexo = document.getElementById("sexoac02");
    let status = document.getElementById("estadocivilac02");

    if (sexo.value == "feminino" && status.value == "casado"){
       prompt ("Por favor informe quanto tempo de casado(a)");
     } else { alert("Obrigada, o teste funciona");}

}


function ac_03() {
    event.preventDefault();
    let numeros = [];
    numeros.push(ac03.value);

    if (numeros % 2 == 0) {
        alert(ac03.value + " é um número PAR");
    } else {
        alert(ac03.value + " é um número IMPAR");
    }
}

function ac_04() {
    let a = +document.getElementById("ac04a").value;
    let b = +document.getElementById("ac04b").value;

    if (a == b){
        alert(`A soma de ${a}+${b} é igual a ${a + b}`);
    } else {
        alert(`A multiplicaçao de ${a}x${b} é igual a ${a * b}`);
    }
}

function ac_05() {
    let n = +document.getElementById("ac05").value;

    if ( n >= 0) {
        alert (`${n} x 2 = ${n*2}`);
    } if (n < 0) {
        alert (`${n} x 3 = ${n*3}`);
    }
}

function ac_06(){
    let a = document.getElementById("ac06a").value;
    let b = document.getElementById("ac06b").value;

    if ( a === b) {
        alert ("Seus valores são iguais, portanto, VERDADEIRO");
    } if ( a !== b) {
        alert ("Seus valores são diferentes, portanto, FALSO");
    }
}

function ac_07() {
    let n = +document.getElementById("ac07").value;

    if (n % 2 == 0){ 
        alert (`Seu número PAR ${n} + 5 é igual a ${n+5}`);
    } else {
        alert(`Seu número IMPAR ${n} + 8 é igual a ${n+8}`);
    }
}

function ac_08(){
   
    let a = document.getElementById("ac08a").value;
    let b = document.getElementById("ac08b").value;
    let c = document.getElementById("ac08c").value;
    let number = [`${a}`, `${b}`, `${c}`];
    
    let numberDesc = number.sort(function(a, b) {
        return b - a;
    });
   
    if (a != b && b != c ){
       
        alert ("Seus numeros são " + numberDesc);
    
    } else {
        alert (`Tente números diferentes`);
    }
}

function ac_09() {
    let sexo = document.getElementById("sexoac09");
    let altura = parseFloat(document.getElementById("ac09").value.replace(",", "."));

    if (Number.isNaN(altura)) {
        alert ("Altura inválida. Por favor digite um número válido.");
      } else if (sexo.value == "masculino"){
        let peso = (altura * 72.7) - 58
        alert (`Seu peso ideal é ${peso.toFixed(2)} Kg`);
    } else if (sexo.value == "feminino") {
        let peso = (altura * 62.1) - 44.7
        alert (`Seu peso ideal é ${peso.toFixed(2)} Kg`);
    }  
}

function ac_10(){
    let altura =  parseFloat(document.getElementById("ac10a").value.replace(",", "."));
    let peso =  parseFloat(document.getElementById("ac10b").value.replace(",", "."));
    let imc = peso / (altura*altura)

    if (Number.isNaN(altura)) {
        alert ("Altura inválida. Por favor digite um número válido.");
    } else if (Number.isNaN(peso)) {
        alert ("Peso inválido. Por favor digite um número válido.");
    } else if (imc <= 18.5){
        alert(`Voce está Abaixo do peso.`);
    } else if (imc > 18.5 && imc < 25){
        alert(`Voce está com Peso normal.`);
    } else if (imc >= 25 && imc <= 30){
        alert(`Voce está Acima do peso.`);
    } else {
        alert(`Voce está Obeso.`);
    }
} 

//ALGORITMOS REPETIÇÃO


function ap_07() {
    let numeros = [];
    event.preventDefault();
    numeros.push(ap07.value);
    resposta.innerHTML = "";

    console.log(numeros);

    for (let n = 1; n <= 10; n++) {
        resposta.innerHTML += `<li>${n}x${numeros}=${n * numeros}</li>`;
    }
}


