const hours = document.getElementById('hours'); //Atribuindo o id horas
const minutes = document.getElementById('minutes'); //Atribuindo o id minutos
const seconds = document.getElementById('seconds'); //Atribuindo o id segundos

const clock = setInterval (function time(){   //const com nome do id => html e criando a function dentro de setInterval
    let dateToday = new Date(); //criando a nova data
    let hr = dateToday.getHours(); //Atribuindo o var hr a nova data + getHours para o evento horas
    let min = dateToday.getMinutes(); //Atribuindo o var min a nova data + getMinutes para o evento minutos
    let sec = dateToday.getSeconds(); //Atribuindo o var sec a nova data + getSeconds para o evento segundos

    if(hr < 10){ // Colocando o '0' antes do numero caso o numero correspondido for menor que 10
        hr = '0' +hr;
    }
    if(min < 10){   // Colocando o '0' antes do numero caso o numero correspondido for menor que 10
        min = '0' +min;
    }
    if(sec < 10){   // Colocando o '0' antes do numero caso o numero correspondido for menor que 10
        sec = '0' +sec;
    }

    hours.textContent = hr;       //Atribuindo a const horas com a let hr para a mudança de texto quando a função for chamada
    minutes.textContent = min;    //Atribuindo a const minutes com a let min para a mudança de texto quando a função for chamada
    seconds.textContent = sec;    //Atribuindo a const seconds com a let min para a mudança de texto quando a função for chamada
});


const dt = document.getElementById('dates'); //Atribuindo o id dates 

const dates = new Date();   //const com nome do id

const formatter = Intl.DateTimeFormat ('pt-BR', {   //Colocando a formatação br
    dateStyle: 'long',
});
dt.innerHTML = formatter.format (dates);    // formatando o texto

