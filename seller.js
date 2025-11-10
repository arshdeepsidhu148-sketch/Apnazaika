const createBtn = document.getElementById('createAccount');
const uploadBtn = document.getElementById('uploadProduct');
const sellerProducts = document.getElementById('sellerProducts');

let sellerData = JSON.parse(localStorage.getItem("sellerData")) || {};
let productList = JSON.parse(localStorage.getItem("productList")) || [];

// Create Account
createBtn.addEventListener('click', () => {
  const shop = document.getElementById('shopName').value;
  const name = document.getElementById('sellerName').value;
  const phone = document.getElementById('sellerPhone').value;
  const address = document.getElementById('sellerAddress').value;

  if (!shop || !name || !phone || !address) {
    alert("Please fill all details!");
    return;
  }

  sellerData = { shop, name, phone, address };
  localStorage.setItem("sellerData", JSON.stringify(sellerData));
  alert(`Welcome ${name}! Your shop "${shop}" is created successfully.`);
});

// Upload Product
uploadBtn.addEventListener('click', () => {
  const food = document.getElementById('foodName').value;
  const price = document.getElementById('foodPrice').value;
  const img = document.getElementById('foodImg').value;

  if (!food || !price || !img) {
    alert("Please fill all product details!");
    return;
  }

  const product = { food, price, img };
  productList.push(product);
  localStorage.setItem("productList", JSON.stringify(productList));
  alert("Product uploaded successfully!");

  showProducts();
});

function showProducts() {
  sellerProducts.innerHTML = "";
  productList.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.food}">
      <h4>${p.food}</h4>
      <p>₹${p.price}</p>
    `;
    sellerProducts.appendChild(div);
  });
}

showProducts();
