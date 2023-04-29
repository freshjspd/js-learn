fetch('../users.json')
    .then(res => res.json())
    .then(gettingData)
    .catch(console.error);

function gettingData(users){
    const list = document.getElementById("usersList");

}





