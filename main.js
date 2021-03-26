array1=[];
function buttonclicks(){
var name1=document.getElementById("student1").value;
var name2=document.getElementById("student2").value;
var name3=document.getElementById("student3").value;
var name4=document.getElementById("student4").value;
array1.push(name1);
array1.push(name2);
array1.push(name3);
array1.push(name4);
document.getElementById("display").innerHTML=array1;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function buttonclickso(){
array1.sort();
document.getElementById("display").innerHTML=array1;

}