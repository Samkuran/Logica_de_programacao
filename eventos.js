//ALGORITMOS CONDICIONAIS

function ac_03(){
    let numeros = [];
    numeros.push(ac03.value);
    
    if(numeros % 2 == 0){
                alert( ac03.value + " é um número PAR");
            } else { alert ( ac03.value + " é um número IMPAR");
     } 
 }

//ALGORITMOS REPETIÇÃO


function ap_07(){
    let numeros = [];
        event.preventDefault();
        numeros.push(ap07.value);
        resposta.innerHTML = "";
        
        console.log(numeros);

        for (let n = 1; n <= 10; n++) {
           resposta.innerHTML += `<li>${n}x${numeros}=${n*numeros}</li>`;
        }     
}


