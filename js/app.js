{/* <Main> */}

function play(){
    let music = document.getElementById("music");
    music.play();
}

function pause(){
    let music = document.getElementById("music");
    music.pause();
}

{/* <Portfolio> */}
const img = document.getElementById('img-area');

function change1(){
    img.src='../assets/img/1.jpg'
}

function change2(){
    img.src='../assets/img/2.jpg'
}

function change3(){
    img.src='../assets/img/3.jpg'
}

function change4(){
    img.src='../assets/img/4.jpg'
}

function change5(){
    img.src='../assets/img/5.jpg'
}

function change6(){
    img.src='../assets/img/6.jpg'
}

function change7(){
    img.src='../assets/img/7.jpg'
}

function change8(){
    img.src='../assets/img/8.jpg'
}



{/* <Contact> */}
const right = document.getElementById('right');
const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const checkbox = document.getElementById('checkbox');


form.addEventListener('submit', function(event){
    event.preventDefault();
    checkInputs();
});

function checkInputs(){
    const nameValue = name.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();


if(nameValue === ""){
    setError(name, "Name cannot be blank");
} else{
    setSuccess(name);
}

if(usernameValue === ""){
    setError(username, "Username cannot be blank");
} else{
    setSuccess(username);
}

if(emailValue === ""){
    setError(email, "Email cannot be blank");
} else{
    setSuccess(email);
}

}

function setError(input, message){
    const rightControl = input.parentElement;
    const small = rightControl.querySelector('small');
    small.innerText = message;
    rightControl.className = 'form-control error'
}

function setSuccess(input){
    const rightControl = input.parentElement;
    rightControl.className = 'form-control success';
}

