let list = document.querySelector(".usersList");
const container = document.querySelector('.container');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const idpage = document.getElementById('idpage');

const opt = {
    results: 10,
    seed: 'abc',
    page: 1
};

prev.onclick = function(){
    if(opt.page > 1){
        opt.page--;
        load(opt);
    }
}
next.onclick = function(){
    opt.page++;
    load(opt);
}

load(opt);

function load(opt){
    fetch(`https://randomuser.me/api/?results=${opt.results}&seed=${opt.seed}&page=${opt.page}`)
    .then(res => res.json())
    .then(({results}) => gettingData(results))
    .catch(errorLoad);
}


function errorLoad(res){
    const error = new Error(`Loading Error. ${res}`);
    const p = document.createElement('h2');
    p.innerText = error;
    document.body.append(p);
}

function gettingData(users){
    idpage.innerText = `page: ${opt.page}`;
    list.remove();
    list = document.createElement('ul');
    list.classList.add('usersList');
    container.append(list);
    users.forEach( u => {
        list.append(createCard(u));
    });
}

function createCard(user){
    const card = document.createElement('div');
    card.classList.add('card_container');

    const imgContainer = createUserPhoto(user.picture.large);
    card.append(imgContainer);
    console.log(user.imgSrc);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info_container');
    const userFullName = createUserFullName(user.name);
    infoContainer.append(userFullName);
    card.append(infoContainer);

    return card;
}

function createUserPhoto(userImgSrc){
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image_container');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', userImgSrc);
    imgEl.setAttribute('alt', 'photo');
    imgContainer.append(imgEl);
    return imgContainer;
}

function createUserFullName(name){
    const userFullName = document.createElement('p');
    userFullName.classList.add('user_fullname');
    userFullName.innerText = `${name.title}. ${name.first} ${name.last}`;
    return userFullName;
}





