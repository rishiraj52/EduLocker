import "regenerator-runtime/runtime";
import studentDashboard from "./html/student-dashboard.html";

import { initContract, login, logout } from "./utils";

import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

// JS code here
// document.getElementById('sign-out').addEventListener('click',(e)=>{
//   e.preventDefault();
//   logout();
// })
document.getElementById("login").addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("The button is clicked: ", accountId);
  login();
});
document.getElementById("log-out").addEventListener("click", async (e) => {
  e.preventDefault();
  const ob = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      userId: accountId,
    }),
  };
  try {
    const res = await fetch("http://localhost:5000/getRole/", ob);
    // console.log("res: ",res.json());
    const js = await res.json();
    console.log("response: ", js);
    if (js.role == "student") {
      window.location.href = studentDashboard;
      document.write(studentDashboard)
    } else window.location.replace("/html/CBSE-dashboard.html");
  } catch (error) {
    console.log("err: ", error);
  }
});

// `nearInitPromise` gets called on page load
window.nearInitPromise = initContract()
  .then(async () => {
    if (window.walletConnection.isSignedIn()) {
      console.log("logged in");
      redirectToAuthPage();
    } else console.log("not logged in");
  })
  .catch(console.error);
async function redirectToAuthPage() {
  const ob = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      userId: accountId,
    }),
  };
  try {
    const res = await fetch("http://localhost:5000/getRole/", ob);
    // console.log("res: ",res.json());
    const js = await res.json();
    console.log("response: ", js);
    if (js.role == "student") document.write(studentDashboard);
    else window.location.replace("/html/CBSE-dashboard.html");
  } catch (error) {
    console.log("err: ", error);
  }
}