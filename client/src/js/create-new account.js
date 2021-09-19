import { logout } from "../utils";
document.getElementById("sign-out").addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});

document
  .getElementById("create-account-button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    class DayFees{
        constructor(day,fees){
            this.day=day;
            this.fees=fees;
        }
    }
    const studentName = document.getElementById("student-name").value;
    const usernamewithrollno = document.getElementById("username-rollno").value;
    const userClass = document.getElementById("cls").value;
    const schoolFees = document.getElementById("fee").value;
    const timeperiodtopayfees = document.getElementById("fees-id").value;
    try {
        const day= new DayFees(parseInt(timeperiodtopayfees),'2000');
    const arr=[day];
    console.log("type: ",typeof parseInt(timeperiodtopayfees))
    //     const response = await contract.createStudentID({
    //     studentId: studentUsername,
    //     dayFees:arr
    // });
    } catch (error) {
        
    }
  });
// async function sendUserDetailsToServer() {
    
// }
document.getElementById("cancel-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("student-name").value = "";
  document.getElementById("username-rollno").value = "";
//   document.getElementById("cls").Value;
//   document.getElementById("fee").Value;
  document.getElementById("fees-id").value = "";
});
console.log("hello")