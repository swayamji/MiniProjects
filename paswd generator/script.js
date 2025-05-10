const generatebtn =document.querySelector('#pswd');
const length=12;

const upperCase="ABCDEFGIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const Number="0123456789"
const Signs="!@#$%^&*()~{}|;:?+-"

const all="upperCase"+"lowerCase"+"Number"+"Signs";

function generatePassword(){
    let password="";
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= Number[Math.floor(Math.random()*Number.length)];
    password+= Signs[Math.floor(Math.random()*Signs.length)];
    while(length>password.length){
        password+= all[Math.floor(Math.random()*all.length)]; 
    }
    pswd.value=password;
}