function openQR() {
  alert("Opening camera for QR Scan (feature under development)!");
}
document.getElementById("searchBox").addEventListener("input", function () {
  let query = this.value.toLowerCase();
  let products = document.querySelectorAll(".product");
  products.forEach((p) => {
    let text = p.innerText.toLowerCase();
    p.style.display = text.includes(query) ? "block" : "none";
  });
});
