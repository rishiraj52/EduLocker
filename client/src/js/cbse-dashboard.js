import {logout}from "../utils";
import uploadCertificate from "../HTML/upload-certificate.html";
document.getElementById("sign-out").addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
})

document.getElementById('create-new-student-account').addEventListener('click',(e)=>{
    e.preventDefault();
})

document.getElementById('upload-certificate').addEventListener('click',(e)=>{
    e.preventDefault();
    const wnd = window.open("about:blank","_blank")
    wnd.document.write(uploadCertificate);
})
