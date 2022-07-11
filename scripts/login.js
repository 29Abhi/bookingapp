function login(event){
    event.preventDefault();

    let form = document.getElementById("loginform")
    let lemail = document.getElementById("email")
    let lpass = document.getAnimations("password");

    let regiuser = JSON.parse(localStorage.getItem("users")) || [];
    // console.log(regiuser);
    regiuser.map(function(elem){
     console.log(elem.email, elem.password)

     let e = loginform.email.value;
     let p = loginform.password.value;
    //  console.log(e,p);

    if(e === elem.email && p === elem.password) {
        window.location.href = "./checkout.html"
        alert("Login successful!");
    } else if(p!= elem.password){
        alert("Wrong credentials");
    } else if(e!= elem.password){
       alert("User doesn't exist, Sign Up")
    }
    })
    lemail.innerText = null;
    lpass.innerText = null;
    form.reset();
    

}