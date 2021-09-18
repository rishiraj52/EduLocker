import 'regenerator-runtime/runtime'

import { initContract, login, logout } from './utils'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

// JS code here
document.getElementById('sign-out').addEventListener('click',(e)=>{
  e.preventDefault();
  logout();
})

// `nearInitPromise` gets called on page load
window.nearInitPromise = initContract()
  .then(() => {
    if (window.walletConnection.isSignedIn()) console.log("logged in")
    else console.log("logged out!!")
  })
  .catch(console.error)
