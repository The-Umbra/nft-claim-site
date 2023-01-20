// METAMASK CONNECTION

var connectButton = document.getElementById("connect");

connectButton.addEventListener("click", function () {
  // Call Metamask
  window.ethereum.enable().then(function (accounts) {
    // Take Address
    var address = accounts[0];
    var shortaddress = address.substring(0, 11) + "..." + address.substring(38);
    // Print Address
    connectButton.innerHTML = shortaddress;
  });

  // METAMASK NETWORK CHECKER AND SWITCHER
  if (window.ethereum.networkVersion != 5) {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x5" }], // chainId must be in hexadecimal numbers
    });
  }
});
