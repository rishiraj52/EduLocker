import {logout}from "../utils";
document.getElementById("Sign-Out").addEventListener('click',(e)=>{
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