function mymethod() {
    document.getElementById("myid").innerHTML="External Javascript Text";   
}

function AgeCheck(){
    let ageInput=document.getElementById("age").value;
    document.getElementById("age").disabled=true;
    if(ageInput>=18){
        document.getElementById("head").innerHTML="<h1>You are Eligible to Vote</h1>";
        document.getElementById("head").style.color="green";
    }
    else{

        document.getElementById("head").innerHTML="<h2>You are a Kid</h2>";
        document.getElementById("head").style.color="red"
        document.getElementById("cartoon").style.display="block";
        document.getElementById("kform").style.display="block";
    }
}