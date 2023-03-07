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


