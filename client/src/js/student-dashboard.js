import {logout}from "../utils";
document.getElementById("sign-out").addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
});
document.getElementById('pay-fees-button').addEventListener('click',async (e)=>{
    console.log("username is: ",accountId)
    class DayFees{
        constructor(day,fees,schoolId){
            this.day=day;
            this.fees=fees;
            this.schoolId=schoolId;
        }
    }
    // const d= new DayFees(8,'2000','exampleschool.testnet');
    // const arr =[d];
    // const resp = await contract.createStudentID({studentId:'happysingh.testnet',dayFees:arr});
    const resp= await contract.getStudentPayFeesDate({studentId:accountId});
    const month = new Date().getMonth();
    if(month!=resp.day){
        document.getElementById('pay-fees-button').disabled=true;
    }
    const amount = (parseInt(resp.fees)/200).toString();
    walletConnection.account().sendMoney('exampleschool.testnet',amountInYocto('1'));
    console.log("resp: ",resp)


})
document.getElementById('username').innerText=`Username: ${accountId}`;
