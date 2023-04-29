const btn = document.getElementById('loadData');

btn.onclick = function(){
    fetch('../users.json').then(loadData).then(printData).catch(loadError);
}

function loadData(res){
    return res.json();
}

function printData(data){
    console.log(data);
}

function loadError(res){
    console.log(res);
}

