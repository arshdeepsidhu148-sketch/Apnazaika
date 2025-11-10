// Apna Zaika JavaScript

// Dummy food data (future vich seller upload system nal replace hovega)
const foods = [
  { name: "Veg Burger", price: "₹99", img: "https://i.imgur.com/4YQZ6Xr.jpg", distance: 1.2 },
  { name: "Paneer Biryani", price: "₹149", img: "https://i.imgur.com/nk8gqYZ.jpg", distance: 2.5 },
  { name: "Pizza Margherita", price: "₹199", img: "https://i.imgur.com/yYvX8bC.jpg", distance: 0.9 },
  { name: "Chole Bhature", price: "₹129", img: "https://i.imgur.com/7BywzYc.jpg", distance: 3.1 },
  { name: "Butter Chicken", price: "₹249", img: "https://i.imgur.com/T7r81EH.jpg", distance: 1.8 }
];

// HTML element references
const locateBtn = document.getElementById("locateBtn");
const productContainer = document.getElementById("products");

// Function: display food items
function showFoods() {
  productContainer.innerHTML = "";
  foods.forEach(food => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${food.img}" alt="${food.name}">
      <h4>${food.name}</h4>
      <p>${food.price}</p>
      <p>📍 ${food.distance} km away</p>
      <button onclick="orderFood('${food.name}')">Order Now</button>
    `;
    productContainer.appendChild(div);
  });
}

// Function: order now
function orderFood(name) {
  const userName = prompt("Enter your name:");
  const number = prompt("Enter your mobile number:");
  if (userName && number) {
    alert(`Thank you ${userName}! Your order for ${name} is being prepared 🍴`);
  } else {
    alert("Please enter valid details!");
  }
}

// Function: get location
locateBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      alert("Location accessed ✅");
      showFoods();
    }, () => {
      alert("Please allow location access to view nearby food.");
    });
  } else {
    alert("Location not supported in this browser.");
  }
});
