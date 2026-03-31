let h1=document.querySelector("h1");
let btn=document.querySelector("button");
let p=document.querySelector("p");
let inp=document.querySelector("input");
btn.addEventListener("click",()=>{
    h1.innerHTML="<b>ram is happy</b>";
    p.innerHTML=`<i><b>${inp.value}</b></i>`
})