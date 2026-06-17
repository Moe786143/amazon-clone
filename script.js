// ===== PRODUCT DATA =====
const products = [
  // Electronics
  { id: 1, title: "Wireless Bluetooth Headphones", category: "Electronics", price: 299.99, rating: 4.5, reviews: 2847, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", prime: true },
  { id: 2, title: "Smart Watch Series 8", category: "Electronics", price: 599.99, rating: 4.7, reviews: 1523, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop", prime: true },
  { id: 3, title: "Portable Bluetooth Speaker", category: "Electronics", price: 189.99, rating: 4.3, reviews: 3210, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop", prime: false },
  { id: 4, title: "4K Webcam for Streaming", category: "Electronics", price: 449.99, rating: 4.6, reviews: 892, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop", prime: true },
  // Fashion
  { id: 5, title: "Classic White Sneakers", category: "Fashion", price: 89.99, rating: 4.4, reviews: 5621, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop", prime: true },
  { id: 6, title: "Premium Leather Jacket", category: "Fashion", price: 499.99, rating: 4.8, reviews: 743, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop", prime: false },
  { id: 7, title: "Oversized Hoodie", category: "Fashion", price: 149.99, rating: 4.5, reviews: 2103, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop", prime: true },
  { id: 8, title: "Slim Fit Chino Pants", category: "Fashion", price: 129.99, rating: 4.2, reviews: 1876, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=300&fit=crop", prime: true },
  // Home
  { id: 9, title: "Minimalist Desk Lamp", category: "Home", price: 79.99, rating: 4.6, reviews: 4532, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop", prime: true },
  { id: 10, title: "Scented Candle Set", category: "Home", price: 49.99, rating: 4.7, reviews: 8901, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=300&h=300&fit=crop", prime: false },
  { id: 11, title: "Throw Blanket", category: "Home", price: 89.99, rating: 4.8, reviews: 3421, image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=300&h=300&fit=crop", prime: true },
  { id: 12, title: "Ceramic Plant Pot Set", category: "Home", price: 39.99, rating: 4.4, reviews: 2156, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop", prime: true },
  // Books
  { id: 13, title: "Atomic Habits", category: "Books", price: 29.99, rating: 4.9, reviews: 15234, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop", prime: true },
  { id: 14, title: "The Psychology of Money", category: "Books", price: 24.99, rating: 4.8, reviews: 9876, image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=300&fit=crop", prime: true },
  // Sports
  { id: 15, title: "Yoga Mat Premium", category: "Sports", price: 69.99, rating: 4.6, reviews: 6543, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop", prime: true },
  { id: 16, title: "Adjustable Dumbbells", category: "Sports", price: 349.99, rating: 4.7, reviews: 2341, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop", prime: false },
  // Beauty
  { id: 17, title: "Vitamin C Serum", category: "Beauty", price: 59.99, rating: 4.5, reviews: 12043, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop", prime: true },
  { id: 18, title: "Perfume Collection Set", category: "Beauty", price: 199.99, rating: 4.6, reviews: 3421, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop", prime: false },
  // Toys
  { id: 19, title: "LEGO Creator Set", category: "Toys", price: 89.99, rating: 4.8, reviews: 7654, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop", prime: true },
  { id: 20, title: "Remote Control Car", category: "Toys", price: 119.99, rating: 4.4, reviews: 2341, image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=300&h=300&fit=crop", prime: true },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('amazonCart')) || [];
let currentCategory = 'All';
let currentSearch = '';
let priceFilter = 'all';
let sortFilter = 'default';

// ===== DOM =====
const productGrid = document.getElementById('productGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartItemCount = document.getElementById('cartItemCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const priceFilterEl = document.getElementById('priceFilter');
const sortFilterEl = document.getElementById('sortFilter');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const confirmationModal = document.getElementById('confirmationModal');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const orderNumber = document.getElementById('orderNumber');
const recommendedSection = document.getElementById('recommendedSection');
const recommendedGrid = document.getElementById('recommendedGrid');
const sectionTitle = document.getElementById('sectionTitle');

// ===== TOAST NOTIFICATION (Cursor Feature 1) =====
function showToast(message) {
  // Remove existing toast if any
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  // Hide after 2.5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ===== DARK MODE (Cursor Feature 1 - Enhanced) =====
if (localStorage.getItem('amazonTheme') === 'dark') {
  document.body.classList.add('dark-mode');
  darkModeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

darkModeBtn.addEventListener('click', () => {
  // Add rotation animation
  darkModeBtn.classList.add('rotating');
  setTimeout(() => darkModeBtn.classList.remove('rotating'), 400);

  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('amazonTheme', isDark ? 'dark' : 'light');
  darkModeBtn.innerHTML = isDark
    ? '<i class="fa-regular fa-sun"></i>'
    : '<i class="fa-regular fa-moon"></i>';

  // Show toast notification
  showToast(isDark ? '🌙 Dark Mode ON' : '☀️ Dark Mode OFF');
});

// ===== RENDER PRODUCTS =====
function getFilteredProducts() {
  let filtered = [...products];

  if (currentCategory !== 'All') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(currentSearch) ||
      p.category.toLowerCase().includes(currentSearch)
    );
  }

  // Price filter (manual feature - no AI)
  if (priceFilter !== 'all') {
    const [min, max] = priceFilter.split('-').map(Number);
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  // Sort
  switch (sortFilter) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-search"></i>
        <p>No products found. Try a different filter.</p>
      </div>
    `;
    recommendedSection.hidden = true;
    return;
  }

  productGrid.innerHTML = '';
  filtered.forEach(product => {
    productGrid.appendChild(createProductCard(product));
  });

  // Render recommended (Cursor Feature 2)
  renderRecommended(filtered);
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const stars = renderStars(product.rating);
  const inCart = cart.some(item => item.id === product.id);

  card.innerHTML = `
    <img class="product-img" src="${product.image}" alt="${product.title}"
      onerror="this.src='https://via.placeholder.com/300x200/f3f3f3/999?text=Product'" />
    <div class="product-info">
      <div class="product-category-badge">${product.category}</div>
      <div class="product-title">${product.title}</div>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count">(${product.reviews.toLocaleString()})</span>
      </div>
      <div class="product-price">R${product.price.toFixed(2)}</div>
      ${product.prime ? '<div class="product-prime">✓ FREE Delivery</div>' : ''}
      <button class="add-to-cart-btn ${inCart ? 'added' : ''}" data-id="${product.id}">
        ${inCart ? '✓ Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  `;

  card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product);
    const btn = card.querySelector('.add-to-cart-btn');
    btn.classList.add('added');
    btn.textContent = '✓ Added to Cart';
  });

  return card;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ===== RECOMMENDED PRODUCTS (Cursor Feature 2) =====
function renderRecommended(shownProducts) {
  if (currentCategory === 'All' && !currentSearch) {
    recommendedSection.hidden = true;
    return;
  }

  const shownIds = new Set(shownProducts.map(p => p.id));
  const categories = [...new Set(shownProducts.map(p => p.category))];

  const recommended = products
    .filter(p => !shownIds.has(p.id) && categories.includes(p.category))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  if (recommended.length === 0) {
    recommendedSection.hidden = true;
    return;
  }

  recommendedSection.hidden = false;
  recommendedGrid.innerHTML = '';
  recommended.forEach(p => recommendedGrid.appendChild(createProductCard(p)));
}

// ===== CART =====
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartUI();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
  }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('amazonCart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartItemCount.textContent = totalItems;
  cartSubtotal.textContent = `R${subtotal.toFixed(2)}`;
}

function renderCartItems() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}"
        onerror="this.src='https://via.placeholder.com/70x70/f3f3f3/999?text=Item'" />
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">R${item.price.toFixed(2)}</div>
        <div class="cart-qty-controls">
          <button class="qty-btn" data-id="${item.id}" data-action="minus">−</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" data-id="${item.id}" data-action="plus">+</button>
          <button class="remove-item-btn" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;

    div.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const delta = btn.dataset.action === 'plus' ? 1 : -1;
        changeQty(parseInt(btn.dataset.id), delta);
      });
    });

    div.querySelector('.remove-item-btn').addEventListener('click', () => {
      removeFromCart(parseInt(item.id));
    });

    cartItems.appendChild(div);
  });
}

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('active');
  renderCartItems();
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
}

// ===== CART EVENTS =====
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ===== SEARCH =====
searchBtn.addEventListener('click', () => {
  currentSearch = searchInput.value.toLowerCase().trim();
  currentCategory = 'All';
  document.querySelectorAll('.sub-nav-item').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-category="All"]').classList.add('active');
  sectionTitle.textContent = currentSearch ? `Results for "${searchInput.value}"` : 'Featured Products';
  renderProducts();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});

// ===== CATEGORY NAV =====
document.querySelectorAll('.sub-nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.dataset.category;
    currentSearch = '';
    searchInput.value = '';
    document.querySelectorAll('.sub-nav-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    sectionTitle.textContent = currentCategory === 'All' ? 'Featured Products' : currentCategory;
    renderProducts();
  });
});

document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    currentCategory = card.dataset.category;
    currentSearch = '';
    searchInput.value = '';
    document.querySelectorAll('.sub-nav-item').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`[data-category="${currentCategory}"]`);
    if (btn) btn.classList.add('active');
    sectionTitle.textContent = currentCategory;
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
    renderProducts();
  });
});

// ===== FILTERS (manual feature - no AI) =====
priceFilterEl.addEventListener('change', () => {
  priceFilter = priceFilterEl.value;
  renderProducts();
});

sortFilterEl.addEventListener('change', () => {
  sortFilter = sortFilterEl.value;
  renderProducts();
});

// ===== SHOP NOW BUTTON =====
document.getElementById('shopNowBtn').addEventListener('click', () => {
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
});

// ===== CHECKOUT =====
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  closeCart();
  checkoutModal.hidden = false;
});

closeCheckout.addEventListener('click', () => {
  checkoutModal.hidden = true;
});

checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) checkoutModal.hidden = true;
});

placeOrderBtn.addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!firstName || !address) {
    alert('Please fill in your name and address.');
    return;
  }

  checkoutModal.hidden = true;

  const orderId = 'AMZ-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  orderNumber.textContent = orderId;

  confirmationModal.hidden = false;

  cart = [];
  saveCart();
  updateCartUI();
  renderProducts();
});

continueShoppingBtn.addEventListener('click', () => {
  confirmationModal.hidden = true;
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    checkoutModal.hidden = true;
    confirmationModal.hidden = true;
    closeCart();
  }
});

// ===== INIT =====
updateCartUI();
renderProducts();