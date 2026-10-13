function ValidateLogin(username,password){
    if(username==="abc" && password==="123"){
        return "Login Siccessfull";
    }
    else{
        return "Invalid Username or Password";
    }
}
document.getElementById("loginform").addEventListener("submit",function(event){
    event.preventDefault();
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const msg=ValidateLogin(user,pass);

    document.getElementById("msg").textContent=msg;

    if(msg==="Login Siccessfull"){
        document.getElementById("msg").style.color="green";
    }
    else{
        document.getElementById("msg").style.color="red";
    }
})