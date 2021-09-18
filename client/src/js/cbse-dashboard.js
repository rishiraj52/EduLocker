import {logout}from "../utils";
document.getElementById("sign-out").addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
})

document.getElementById('create-new-student-account').addEventListener('click',(e)=>{
    e.preventDefault();
})

document.getElementById('upload-certificate').addEventListener('click',(e)=>{
    e.preventDefault();
})
