let sum=0;
function sum_until_reset(){
    sum=sum+Number(event.target.innerHTML);
    document.getElementById("output").innerHTML=sum
}
function reset(){
    sum=0;
    document.getElementById("output").innerHTML=sum;
}
// function sum_until_reset_1(){
//     sum=sum+1;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_2(){
//     sum=sum+2;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_3(){
//     sum=sum+3;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_4(){
//     sum=sum+4;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_5(){
//     sum=sum+5;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_6(){
//     sum=sum+6;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_7(){
//     sum=sum+7;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_8(){
//     sum=sum+8;
//     document.getElementById("output").innerHTML=sum;
// }
// function sum_until_reset_9(){
//     sum=sum+9;
//     document.getElementById("output").innerHTML=sum;
// }
