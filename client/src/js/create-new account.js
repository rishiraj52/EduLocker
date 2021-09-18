import {logout}from "../utils";
document.getElementById("Sign-Out" ).addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
})

// document.getElementById("create-account-button").addEventListener('click',(e)=>{
//     e.preventDefault();
//     const studentName=document.getElementById("student-name").Value;
// const usernamewithrollno=document.getElementById("username-rollno").Value;
// const userClass=document.getElementById("class").Value;
// const schoolFees=document.getElementById("fee").Value;
// const timeperiodtopayfees=document.getElementById("fees-id").Value;
// })
// document.getElementById("cancel-button").addEventListener('click',(e)=>{
//     e.preventDefault();
//     const studentName=document.getElementById("student-name").Value;
//     const usernamewithrollno=document.getElementById("username-rollno").Value;
//     const userClass=document.getElementById("class").Value;
//     const schoolFees=document.getElementById("fee").Value;
//     const timeperiodtopayfees=document.getElementById("fees-id").Value;
//     studentName.innerHTML='';
//     usernamewithrollno.innerHTML='';
//     userClass.innerHTML='';
//     schoolFees.innerHTML='';
//     timeperiodtopayfees.innerHTML='';

// })


