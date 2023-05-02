<template>
  <section class="dashboard-section">
    <h2 class="wallet-status">Wallet Connected! 🤝</h2>
    <h3 class="wallet-address-heading">
      ETH Wallet Address:
      <span class="wallet-address"></span>
    </h3>
    <h3 class="wallet-balance-heading">
      ETH Balance:
      <span class="wallet-balance"></span>
    </h3>
    <button class="logout-btn">🔐 Log out</button>
  </section>
</template>

<script>
export default {};
</script>

<style>
.dashboard-section {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wallet-status {
  font-size: 54px;
  color: #1c1e1d;
  letter-spacing: 1.5px;
}

.wallet-address-heading,
.wallet-balance-heading {
  color: white;
  letter-spacing: 1.5px;
  margin-top: 1rem;
  text-align: center;
}

.wallet-balance,
.wallet-address {
  color: #feba35;
  letter-spacing: normal;
  display: block;
  margin-top: 1rem;
  background: #000;
  padding: 8px;
  border-radius: 19px;
}

.logout-btn {
  background: #ffd600;
  color: black;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgb(0 0 0 / 10%);
  padding: 13px 35px;
  font-size: 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
}
</style>
