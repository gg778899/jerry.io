var a = document.querySelector('h1');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

button2.onclick = function(){
    user();
}

button1.onclick = function(){
    localStorage.clear();
    a.innerHTML = 'welcome';
}

function user(){
    let myname = prompt('what is your name ?');
    localStorage.setItem('name',myname);
    a.innerHTML = 'welcome '+myname;
}

if(!localStorage.getItem('name')){
    
}
else{
    a.innerHTML = 'welcome'+ localStorage.getItem('name');
}