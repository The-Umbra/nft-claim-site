const form = document.querySelector("form");
const progressBar = document.querySelector(".progress-bar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // form submit logic here
  progressBar.style.width = "50%"; // set the width of the progress bar
});

const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// PROGRESS BAR ANIMATE

$(".two-part-section .main-container .right-side .animated-progress span").each(
  function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  }
);

function checkWallet() {
  if (window.ethereum.selectedAddress != null) {
    var connectButton = document.getElementById("connect");

    // Take Address
    var address = window.ethereum.selectedAddress;
    var shortaddress = address.substring(0, 11) + "..." + address.substring(38);
    // Print Address
    connectButton.innerHTML = shortaddress;
  }
  if (window.ethereum.networkVersion != 5) {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x5" }], // chainId must be in hexadecimal numbers
    });
  }
}
