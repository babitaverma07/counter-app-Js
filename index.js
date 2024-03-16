let text=document.getElementById("text")
let count=0;
text.innerText=`Your Currenct Count is : ${count}`
let incbtn=document.getElementById("inc");
incbtn.addEventListener("click",()=>{
    count++;
    text.innerText=`Your Currenct Count is : ${count}`
text0.innerText='';
})

let decbtn=document.getElementById("dec")
let text0=document.getElementById("text0");
decbtn.addEventListener("click",()=>{
    
    if(count<=0){
        text0.innerText="ERROR: Cannot go below 0"
    return;
    }
    count--;
    text.innerText=`Your Currenct Count is : ${count}`
})
let clearbtn=document.getElementById("clear");
clearbtn.addEventListener("click",()=>{
    count=0;
    text.innerText=`Your Currenct Count is : ${count}`
})