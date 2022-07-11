

function usersignup(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
}
function signup(event){
event.preventDefault();

let form = document.getElementById("forms");

let username =  form.name.value;
let email = form.email.value;
let password = form.password.value;

let signupuser = new usersignup(username,email,password);
const  newuser = JSON.parse(localStorage.getItem("users")) || [];

newuser.push(signupuser);
localStorage.setItem("users",JSON.stringify(newuser));

} 


