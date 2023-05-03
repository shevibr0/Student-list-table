import { doApi } from "./jokesinfo.js";

export const declareEvents=()=>{
let id_input=document.querySelector("#id_input");
let searchbtn=document.querySelector("#searchbtn");


id_input.addEventListener("keydown",(e)=>{
    document.querySelector("#id_info").innerHTML=""
    if(e.key=="Enter"){
    doApi(id_input.value)
    }
})

searchbtn.addEventListener("click",()=>{
    document.querySelector("#id_info").innerHTML=""
    doApi(id_input.value)
})}