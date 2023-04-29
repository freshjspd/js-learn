/*
const user = {
    name: 'John',
    surname: 'Adson',
    age: 20,
    isMale: true
};

const resUser = JSON.stringify(user);

const gettingUser = JSON.parse(resUser);
*/

//Задача: асинхр. считать массив пользователей

const store = {
    users: null,
    error: null,
    isFetching: false   //isLoading
};

const btn = document.getElementById('loadData');
const request = new XMLHttpRequest();

btn.onclick = function(){
    request.open("GET", "../users.json", false);
    request.send();
}

request.onloadstart = function(){ 
    store.isFetching = true; 
    console.log(store);
};

request.onloadend = function(){
    store.isFetching = false;
    if(this.status >= 200 && this.status <300){
        store.users = JSON.parse(this.responseText);
    } else{
        store.error = new Error(`Loading Error. code ${this.status} - ${this.statusText}`);
    }
};

