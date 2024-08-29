// @ts-nocheck

let dateofbirth;
const settingIconEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialtxtEl=document.getElementById("initialtxt");
const afterbtntxtEl=document.getElementById("afterbtntxt");
const btninputEl=document.getElementById("btninput");
const btnEl=document.getElementById("btntext");

const yearEl=document.getElementById("years");
const monthEl=document.getElementById("months");
const daysEl=document.getElementById("days");
const hourEl=document.getElementById("hours");
const minEl=document.getElementById("mins");
const secEl=document.getElementById("secs");
 
const settwodigittime = (number)=>{
    return  number > 9 ? number : `0${number}`;
    
};

let buttonclick = false;
settingIconEl.addEventListener("click",function (){
    if(buttonclick){
        settingContentEl.classList.add("hide");
   }
   else{
       settingContentEl.classList.remove("hide");
   }
   buttonclick = !buttonclick;
});

const updateAge = ()=>{
    const currentDate = new Date();
    const dateDiff=currentDate - dateofbirth;
    console.log(dateDiff);
    const year=Math.floor(dateDiff/(1000*60*60*24*365));
    const month=Math.floor(dateDiff/(1000*60*60*24*365))%12;
    const day=Math.floor(dateDiff/(1000*60*60*24))%30;
    const hour=Math.floor(dateDiff/(1000*60*60))%24;
    const min=Math.floor(dateDiff/(1000*60))%60;
    const sec=Math.floor(dateDiff/(1000))%60;
    yearEl.innerHTML=settwodigittime(year);
    monthEl.innerHTML=settwodigittime(month);
    daysEl.innerHTML=settwodigittime(day);
    hourEl.innerHTML=settwodigittime(hour);
    minEl.innerHTML=settwodigittime(min);
    secEl.innerHTML=settwodigittime(sec);

 };
 
btnEl.addEventListener("click",function(){
    const dateString=btninputEl.value;
    dateofbirth= dateString ? new Date(dateString) :null ;
    if(dateofbirth){
        initialtxtEl.classList.add("hide");
        afterbtntxtEl.classList.remove("hide");
        setInterval(()=>updateAge(),1000);
    }
    else{
        initialtxtEl.classList.remove("hide");
        afterbtntxtEl.classList.add("hide");
    }
});





