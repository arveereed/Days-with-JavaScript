import orders from './orders.js';

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const themeToggler = document.querySelector(".theme-toggler");
const anchors = document.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {

    anchors.forEach(a => a.classList.remove('active'));
    anchor.classList.add('active');
  });
});

// fill orders in table
orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
    <tr>
      <td>${order.productName}</td>
      <td>${order.productId}</td>
      <td>${order.paymentStatus}</td>
      <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}">${order.shipping}</td>
      <td class="primary">Details</td>
    </tr>
  `;
  tr.innerHTML = trContent;

  document.querySelector('table tbody').appendChild(tr);
});