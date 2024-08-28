let length= document.getElementById("pwslen");
let checkboxes=document.querySelectorAll(".chk");
let display= document.querySelector(".box1");

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    const numbers = '0123456789';

    


document.getElementById("gen").addEventListener(
    "click",()=>{
        let plen= length.value;
        let pool="";
        if(checkboxes[0].checked === true){
            pool += upperCaseLetters;
        }
        if(checkboxes[1].checked === true){
            pool +=  lowerCaseLetters;
        }
        if(checkboxes[2].checked === true){
            pool +=  specialCharacters;
        }
        if(checkboxes[3].checked === true){
            pool += numbers;
        }
        if(pool===""){
            alert('Please select at least one character type.');
            return;
        }
       let password= generatePassword(plen,pool);
       display.innerHTML=password;
    }
)

document.getElementById("copy").addEventListener(
    "click", () => {
       
        let password = display.innerHTML;
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = password;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
        alert("Copied the password to clipboard.");
    }
);

function generatePassword(plen,pool){
    let password="";
    for(let i=0; i< plen; i++){
        const randomIndex = Math.floor(Math.random() * pool.length);
        console.log(pool[randomIndex]);
        password += pool[randomIndex];
    }
    return password;

}
function Numbergenerate(length) {
    let pss= Math.floor((Math.random() *(Math.pow(10,length)- Math.pow(10,length-1))) + Math.pow(10,length-1) );
    return pss;
}

function Uppercasegenerate(length){
    let password="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i< length; i++){
        const randomIndex = Math.floor(Math.random() * string.length);
        console.log(string[ randomIndex ]);
        password += string[randomIndex];
    }
    return password;
}
function Lowercasegenerate(length){
    let password="";
    let string="abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i< length; i++){
        const randomIndex = Math.floor(Math.random() * string.length);
        console.log(string[ randomIndex ]);
        password += string[randomIndex];
    }
    return password;
}
function Specialgenerate(length){
    let password="";
    let string="~!@#$%^&*";
    for(let i=0; i< length; i++){
        const randomIndex = Math.floor(Math.random() * string.length);
        console.log(string[ randomIndex ]);
        password += string[randomIndex];
    }
    return password;
}
