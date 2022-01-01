let hora = document.querySelector("#hora");
let minuto = document.querySelector("#minuto");
let segundo = document.querySelector("#segundo");


function myTime(timestamp){
    let now = new Date();

    let second = now.getSeconds();

    let minute = now.getMinutes();
    let hour = now.getHours();

    hora.innerHTML = `${hour}:`;
    minuto.innerHTML = `${minute}:`;    
        if (minute < 10){
        minuto.innerHTML = `0${minute}:`;    
    }
    segundo.innerHTML = `${second}`;
        if (second < 10){
        segundoHTML = `0${second}`;    
    }

    console.log(timestamp);
}


setInterval('myTime()',1000);