const list = document.getElementById("usersList");

fetch('../users111.json')
    .then(res => res.json())
    .then(gettingData)
    .catch(errorLoad);

function errorLoad(res){
    const error = new Error(`Loading Error. ${res}`);
    const p = document.createElement('h2');
    p.innerText = error;
    document.body.append(p);
}

function gettingData(users){
    users.forEach( u => {
        list.append(createCard(u));
    })
}

function createCard(user){
    const card = document.createElement('div');
    card.classList.add('card_container');

    const imgContainer = createUserPhoto(user.imgSrc);
    card.append(imgContainer);
    console.log(user.imgSrc);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info_container');
    const userFullName = createUserFullName(user.name, user.surname);
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

function createUserFullName(name, surname){
    const userFullName = document.createElement('p');
    userFullName.classList.add('user_fullname');
    userFullName.innerText = name+" "+surname;
    return userFullName;
}





