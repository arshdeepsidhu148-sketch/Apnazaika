function login(){
  const name=document.getElementById('sellerName').value;
  const phone=document.getElementById('sellerPhone').value;
  if(name===''||phone===''){alert('Please fill all fields');return;}
  document.getElementById('showName').innerText=name;
  localStorage.setItem('seller',JSON.stringify({name,phone,foods:[]}));
  document.querySelector('.login-box').style.display='none';
  document.getElementById('sellerPanel').style.display='block';
}
function addFood(){
  const data=JSON.parse(localStorage.getItem('seller'));
  const food=document.getElementById('foodName').value;
  const price=document.getElementById('foodPrice').value;
  if(food===''||price===''){alert('Enter food details');return;}
  const newFood={food,price};
  data.foods.push(newFood);
  localStorage.setItem('seller',JSON.stringify(data));
  showFoods();
}
function showFoods(){
  const data=JSON.parse(localStorage.getItem('seller'));
  const list=document.getElementById('foodList');
  list.innerHTML='';
  data.foods.forEach(f=>{
    list.innerHTML+=`<div class="food-item">${f.food} — ₹${f.price} <button onclick="order('${f.food}',${f.price})">Order</button></div>`;
  });
}
function order(item,price){
  const msg=encodeURIComponent(`Hello Apna Zaika, I want to order ${item} ₹${price}`);
  window.open(`https://wa.me/916239046449?text=${msg}`,'_blank');
}
window.onload=()=>{
  if(localStorage.getItem('seller')){document.querySelector('.login-box').style.display='none';document.getElementById('sellerPanel').style.display='block';showFoods();}
};
