function solve(val){
    document.querySelector("#result").value+=val;
}
function equalTo(){
    var x=document.querySelector('#result').value;
    var y=eval(x);
    document.getElementById('result').value=y;
}
function clr(){
    document.getElementById('result').value="";
}
function bs(){
    var temp=document.getElementById('result').value;
    document.getElementById('result').value=temp.substr(0,temp.length-1);
}