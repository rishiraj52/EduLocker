import { logout } from "../utils";
import { init, requestSignIn } from "@textile/near-storage";

makeConnectionWithFileCoin();
async function makeConnectionWithFileCoin() {
  await requestSignIn(walletConnection);
  // Initialize the storage object, and you're ready to go
  window.storage = await init(walletConnection.account());
  console.log("dep: ", await storage.hasDeposit());
//   storage.addDeposit();
  if(!await storage.hasDeposit()) {
    storage.addDeposit();
  }
}
class Certificates{
    constructor(studentClass,id,cid){
        this.studentClass=studentClass;
        this.id=id;
        this.cid=cid;
    }
};
class DayFees{
    constructor(day,fees){
        this.day=day;
        this.fees=fees;
    }
}
document.getElementById("sign-out").addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});
document
  .getElementById("upload-button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("button clicked")
    const studentUsername = document.getElementById("username").value;
    const studnetClass = document.getElementById("studentClass").value;
    const file = document.getElementById("formFileMultiple").files[0];
    console.log("storing data");
    console.log("file: ", file);
    const { id, cid } = await storage.store(file);
    console.log("checking status", id);
    const { request, deals } = await storage.status(id);
    console.log("req status code: ", request.status_code);
    console.log("cid: ", cid);
    console.log("calling contract");
    const certificate = new Certificates(studnetClass,id,cid['/']);
    console.log("certificates: ",certificate);
    console.log("username: ",studentUsername);
    // const day= new DayFees(8,'2000');
    // const arr=[day];
    // const response = await contract.createStudentID({
    //     studentId: studentUsername,
    //     dayFees:arr
    // });
    const response1 = await contract.uploadStudentCertificate({
      studentId: studentUsername,
      certificate,
    });

    console.log("response from smart contract: ", response1);
  });

document.getElementById("cancel-button").addEventListener("click", (e) => {
  e.preventDefault();
  cancelButon();
});
export function cancelButon() {
    document.getElementById("username").value = "";
  document.getElementById("studentClass").value = "";
}
// console.log("hello")
