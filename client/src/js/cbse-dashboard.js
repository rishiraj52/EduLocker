import {logout}from "../utils";
// import {cancelButon} from "./upload-certificate";
import uploadCertificate from "../HTML/upload-certificate.html";

let isUploadLoaded = false;
document.getElementById("sign-out").addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
})

document.getElementById('create-new-student-account').addEventListener('click',(e)=>{
    e.preventDefault();
})

document.getElementById('upload-certificate').addEventListener('click',(e)=>{
    e.preventDefault();
    if(!isUploadLoaded){
        document.write(uploadCertificate);
        isUploadLoaded=true;
    }
    else {
        // cancelButon()
        // console.log("hel")
    }
    // const wnd = window.open("uploadCertificate/")
    // wnd.document.write(uploadCertificate);
    // document.getElementsByTagName('html').innerHTML=uploadCertificate;
    // const wnd=window.open(uploadCertificate)
    // const ans=window.encodeURI(uploadCertificate)
    // console.log('ans: ',ans)
    // wnd.document.write(uploadCertificate)
    // document.write(ans);
    // document.location.replace('../HTML/upload-certificate.html')
})
