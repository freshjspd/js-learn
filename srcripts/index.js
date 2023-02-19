// спросить у пользователя сколько будет 2+2 
// и задавать вопрос до тех пор пока он не ответит правильно

let question = '2+2=?';
let userAnswer;
let compAnswer = 4;

while(true){
    userAnswer = prompt(question);
    if(userAnswer == compAnswer){ 
        alert('yes');
        break;
    }
    else{ 
        alert('no');
    }
}

