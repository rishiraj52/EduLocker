import {logout}from "../utils";
document.getElementById("Sign-Out" ).addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
})

document.getElementById("create-account-button").addEventListener('click',(e)=>{
    e.preventDefault();
    const studentName=document.getElementById("student-name").Value;
const usernamewithrollno=document.getElementById("username-rollno").Value;
const userClass=document.getElementById("class").Value;
const schoolFees=document.getElementById("fee").Value;
const timeperiodtopayfees=document.getElementById("fees-id").Value;
})
document.getElementById("cancel-button").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("student-name").value="";
    document.getElementById("username-rollno").value="";
    document.getElementById("class").Value;
    document.getElementById("fee").Value;
    document.getElementById("fees-id").value="";
})


