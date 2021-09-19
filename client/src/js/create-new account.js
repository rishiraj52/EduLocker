import { logout } from "../utils";
import { sha256 } from 'js-sha256';

document.getElementById("sign-out").addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});

document
  .getElementById("create-account-button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    class DayFees{
        constructor(day,fees,schoolId){
            this.day=day;
            this.fees=fees;
            this.schoolId=schoolId;
        }
    }
    const studentName = document.getElementById("student-name").value;
    const usernamewithrollno = document.getElementById("username-rollno").value;
    const studentClass = document.getElementById("cls").value;
    const schoolFees = document.getElementById("fee").value;
    const timeperiodtopayfees = document.getElementById("fees-id").value;
    const schoolId = document.getElementById('school-id').value;
    try {
        const day= new DayFees(parseInt(timeperiodtopayfees),schoolFees,schoolId);
    const arr=[day];
    console.log("type: ",typeof parseInt(timeperiodtopayfees))
        const response = await contract.createStudentID({
        studentId: usernamewithrollno,
        dayFees:arr
    });
    console.log("reply from smart contract: ",response);
    const username=`${usernamewithrollno}.testnet`;
    // const hash=sha256(username).substring(0,43);
    // console.log("creating account: ",hash.length)
    // const rep=await walletConnection.account().createAccount('testnet112343.testnet','AhJcBqwrYf1r4itudL','10000000000000000000');
    const userObject={
        accountId:username,
        studentName,
        studentClass,
    }
    // console.log("rep: ",rep)
    sendUserDetailsToServer(userObject);
    } catch (error) {
        console.log("err: ",error)
    }
  });
async function sendUserDetailsToServer({accountId}) {
    const ob = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userId: accountId,
          role:"student"
        }),
      };
      try {
        const res = await fetch("http://localhost:5000/addUser/", ob);
        // console.log("res: ",res.json());
        const js = await res.json();
        if(js.error){
            throw "error while saving student data to database";
        }
        console.log("response: ", js);
        alert("Account created successfully");
      } catch (error) {
        console.log("err: ", error);
      }
}
document.getElementById("cancel-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("student-name").value = "";
  document.getElementById("username-rollno").value = "";
  document.getElementById("cls").value= "";
  document.getElementById("fee").value= "";
  document.getElementById("fees-id").value = "";
});
