import { logout } from "../utils";
import { init, requestSignIn } from "@textile/near-storage";

makeConnectionWithFileCoin();
async function makeConnectionWithFileCoin() {
  await requestSignIn(walletConnection);
  // Initialize the storage object, and you're ready to go
  window.storage = await init(walletConnection.account());
}
document.getElementById("sign-out").addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});
document
  .getElementById("upload-button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    const studentUsername = document.getElementById("username").Value;
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
    const certificates = {
      studnetClass,
      id,
      cid,
    };
    const response = await contract.uploadStudentCertificate({
      studentId: studentUsername,
      certificates,
    });
    console.log("response from smart contract: ", response);
  });

document.getElementById("cancel-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("username").innerText = "";
  document.getElementById("studentClass").innerText = "";
});
