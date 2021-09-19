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
    const studentClass = document.getElementById("cls").value;
    const schoolFees = document.getElementById("fee").value;
    const timeperiodtopayfees = document.getElementById("fees-id").value;
    try {
        const day= new DayFees(parseInt(timeperiodtopayfees),schoolFees);
    const arr=[day];
    console.log("type: ",typeof parseInt(timeperiodtopayfees))
        const response = await contract.createStudentID({
        studentId: usernamewithrollno,
        dayFees:arr
    });
    console.log("reply from smart contract: ",response);
    const userObject={
        accountId:usernamewithrollno,
        studentName,
        studentClass,
    }
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
console.log("hello")