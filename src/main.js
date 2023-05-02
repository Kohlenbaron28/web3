import { createApp } from "vue";
import App from "./App.vue";
import Web3 from "web3";

createApp(App).mount("#app");

const btnLogIn = document.querySelector(".login-btn");
const btnLogOut = document.querySelector(".logout-btn");
window.userWalletAddress = null;

window.onload = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
  } else {
    alert("Please install MetaMask or any Ethereum Extension Wallet");
  }
  window.userWalletAddress = window.localStorage.getItem("userWalletAddress");
  showUserDashboard();
};

const showUserWalletAddress = () => {
  const walletAddressEl = document.querySelector(".wallet-address");
  walletAddressEl.innerHTML = window.userWalletAddress;
};

const showUserDashboard = async () => {
  if (!window.userWalletAddress) {
    document.title = "Web3 Login";
    document.querySelector(".login-section").style.display = "flex";
    document.querySelector(".dashboard-section").style.display = "none";
    return false;
  }
  document.title = "Web3 Dashboard 🤝";
  document.querySelector(".login-section").style.display = "none";
  document.querySelector(".dashboard-section").style.display = "flex";
  showUserWalletAddress();
};

const loginWithEth = async () => {
  if (window.web3) {
    try {
      const selectedAccount = await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => accounts[0])
        .catch(() => {
          throw Error("Please select an account");
        });
      window.userWalletAddress = selectedAccount;
      window.localStorage.setItem("userWalletAddress", selectedAccount);
      showUserDashboard();
    } catch (error) {
      alert(error);
    }
  } else {
    alert("wallet not found");
  }
};
btnLogIn.addEventListener("click", loginWithEth);

const logout = () => {
  window.userWalletAddress = null;
  window.localStorage.removeItem("userWalletAddress");
  showUserDashboard();
};
btnLogOut.addEventListener("click", logout);
