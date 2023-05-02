<template>
  <section class="login-section">
    <button class="login-btn">🔓 Log in with Web3</button>
    <span class="instruction">
      Ensure to have an Ethereum based wallet installed i.e MetaMask
    </span>
  </section>
</template>

<script>
export default {};
</script>

<style>
.login-section {
  display: flex;
  flex-direction: column;
}

.login-btn {
  background: #ffd600;
  color: black;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgb(0 0 0 / 10%);
  padding: 13px 35px;
  font-size: 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.instruction {
  text-align: center;
  color: #21bf96;
  color: #feba35;
  margin: 1rem 0;
}
</style>
