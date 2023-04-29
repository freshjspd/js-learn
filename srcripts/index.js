// делаем асинхронный вызов загрузки

//fetch , async-await возращают обещание (promise)

async function loadUsers(){
    try{
        const res = await fetch('../users.json');
        const users = res.json();
        console.log(users);

    } catch(error){
        console.log(error);
    }
}

loadUsers();

//(loadUsers()).then().catch();


