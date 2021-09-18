import {logout}from "../utils";
document.getElementById("sign-out").addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
})
document.getElementById("upload-button").addEventListener('click',(e)=>{
    e.preventDefault();
    const studentUsername=document.getElementById("username").Value;
})


document.getElementById("cancel-button" ).addEventListener('click',(e)=>{
    e.preventDefault();
    const studentUsername=document.getElementById("username").Value;
    studentUsername.innerHTML='';
})