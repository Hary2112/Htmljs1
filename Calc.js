
var mainstring="";
function Selected(a){
    mainstring += a;
    document.getElementById("maintext").value=mainstring;
}
function calculate(){
    let result=eval(mainstring);
    this.history(mainstring,result);
    mainstring=""+result;
    document.getElementById("maintext").value=result;
}
function history(str1,str2){
    let temp=str1+"="+str2;
    document.getElementById("hist").textContent=temp;

}
function backspace(){
    mainstring=mainstring.slice(0,-1);
    document.getElementById("maintext").value=mainstring;
}
function clean(){
    mainstring="";
    document.getElementById("maintext").value=mainstring;
}