/* ==========================================================================
   D'GUSTE PIZZAS E LANCHES - LOGIC & APPLICATION ENGINE
   ========================================================================== */

// Menu Database
const MENU_DATA = [
    // Tradicionais
    {
        id: 'p1',
        title: 'Pizza Calabresa Especial',
        category: 'tradicionais',
        description: 'Molho de tomate caseiro, muçarela, calabresa fatiada crocante, cebola roxa fresca, azeitonas pretas e orégano.',
        badge: 'Mais Pedida',
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
        rating: '5.0',
        prices: { P: 42, M: 56, G: 68, GG: 84 }
    },
    {
        id: 'p2',
        title: 'Pizza Portuguesa Tradicional',
        category: 'tradicionais',
        description: 'Molho de tomate artesanal, muçarela, presunto de primeira, ovos, cebola, ervilha, azeitonas e azeite de oliva.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 44, M: 58, G: 72, GG: 88 }
    },
    {
        id: 'p3',
        title: 'Pizza Frango com Catupiry',
        category: 'tradicionais',
        description: 'Frango desfiado temperado na casa, cobertura generosa de Catupiry original e milho verde fresco.',
        badge: 'Favorita',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 44, M: 58, G: 72, GG: 88 }
    },
    {
        id: 'p4',
        title: 'Pizza Marguerita Especial',
        category: 'tradicionais',
        description: 'Muçarela especial, fatias de tomate fresco, manjericão colhido no dia e um toque de azeite extra virgem.',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        prices: { P: 40, M: 54, G: 66, GG: 80 }
    },
    {
        id: 'p5',
        title: 'Pizza Quatro Queijos',
        category: 'tradicionais',
        description: 'Combinação harmônica de Muçarela, Provolone defumado no forno a lenha, Gorgonzola e Catupiry.',
        image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 46, M: 60, G: 74, GG: 90 }
    },

    // Especiais
    {
        id: 'p6',
        title: 'Pizza Strogonoff de Filé',
        category: 'especiais',
        description: 'Tiras suculentas de filé ao molho de strogonoff cremoso, cogumelos champignon e finalizada com batata palha super crocante.',
        badge: 'Chef Choice',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
        rating: '5.0',
        prices: { P: 52, M: 68, G: 86, GG: 104 }
    },
    {
        id: 'p7',
        title: 'Pizza D\'Guste da Casa',
        category: 'especiais',
        description: 'Especialidade da casa: lombo canadense, bacon artesanal em cubos, Catupiry, palmito e rodelas de tomate temperado.',
        badge: 'Especial da Casa',
        image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80',
        rating: '5.0',
        prices: { P: 54, M: 70, G: 88, GG: 108 }
    },
    {
        id: 'p8',
        title: 'Pizza Filé com Alho Poró',
        category: 'especiais',
        description: 'Tiras de filé mignon salteadas na manteiga de garrafa, cream cheese e alho poró dourado.',
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 54, M: 72, G: 90, GG: 110 }
    },
    {
        id: 'p9',
        title: 'Pizza Coração de Frango',
        category: 'especiais',
        description: 'Corações de frango grelhados e temperados no ponto certo, muçarela, Catupiry e cheiro verde fresco.',
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        prices: { P: 50, M: 66, G: 84, GG: 102 }
    },

    // Doces
    {
        id: 'd1',
        title: 'Pizza Sensação com Morango',
        category: 'doces',
        description: 'Base de chocolate ao leite nobre ralado no forno e morangos frescos fatiados por cima.',
        badge: 'Doce Top',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
        rating: '5.0',
        prices: { P: 44, M: 58, G: 72, GG: 88 }
    },
    {
        id: 'd2',
        title: 'Pizza Chocolate com Confeti',
        category: 'doces',
        description: 'Creme de chocolate preto trufado com confetis coloridos de M&Ms.',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 42, M: 56, G: 68, GG: 84 }
    },
    {
        id: 'd3',
        title: 'Pizza Prestígio D\'Guste',
        category: 'doces',
        description: 'Chocolate ao leite derretido coberto com coco ralado fresco e fios de leite condensado.',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        prices: { P: 42, M: 56, G: 68, GG: 84 }
    },

    // Calzones
    {
        id: 'c1',
        title: 'Calzone de Calabresa & Catupiry',
        category: 'calzones',
        description: 'Massa fechada assada no forno a lenha recheada com calabresa moída, muçarela, Catupiry e orégano.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 38, M: 48, G: 60, GG: 74 }
    },

    // Lanches
    {
        id: 'l1',
        title: 'X-Salada Tradicional D\'Guste',
        category: 'lanches',
        description: 'Hambúrguer artesanal 150g, queijo prato derretido, presunto, alface americana, tomate, maionese verde da casa e ovo.',
        badge: 'Mais Pedido',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 28, M: 28, G: 28, GG: 28 }
    },
    {
        id: 'l2',
        title: 'X-Filé Mignon Especial',
        category: 'lanches',
        description: 'Suculento filé mignon fatiado, muçarela, bacon crocante, ovo, maionese artesanal e salada no pão prensado.',
        badge: 'Gourmet',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
        rating: '5.0',
        prices: { P: 36, M: 36, G: 36, GG: 36 }
    },
    {
        id: 'l3',
        title: 'Porção de Batata Frita com Bacon',
        category: 'lanches',
        description: '500g de batata palito dourada e crocante coberta com cheddar cremoso e bacon em cubinhos.',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
        rating: '4.9',
        prices: { P: 32, M: 32, G: 32, GG: 32 }
    },

    // Combos
    {
        id: 'cb1',
        title: 'Combo Família Panazzolo',
        category: 'combos',
        description: '1 Pizza Grande Salgada (qualquer sabor do cardápio) + 1 Pizza Pequena Doce + 1 Guaraná ou Coca-Cola 2L.',
        badge: 'Super Oferta',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        rating: '5.0',
        prices: { P: 98, M: 98, G: 98, GG: 98 }
    }
];

// State Management
let currentCategory = 'todos';
let cart = [];
let deliveryType = 'delivery'; // 'delivery' or 'retirada'

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartToggle = document.getElementById('cart-toggle');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalHeader = document.getElementById('cart-total-header');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDeliveryFee = document.getElementById('cart-delivery-fee');
const cartGrandTotal = document.getElementById('cart-grand-total');
const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');
const delBtns = document.querySelectorAll('.del-btn');
const paymentMethod = document.getElementById('payment-method');
const statusBadge = document.getElementById('status-badge');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    checkStoreStatus();
    setupEventListeners();
});

// Store Hours Checker (Seg - Sáb: 18:30 às 23:50)
function checkStoreStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    const openTime = 18 * 60 + 30; // 18:30 = 1110
    const closeTime = 23 * 60 + 50; // 23:50 = 1430

    if (day !== 0 && currentTimeInMinutes >= openTime && currentTimeInMinutes <= closeTime) {
        statusBadge.className = 'status-badge open';
        statusBadge.querySelector('.status-text').textContent = 'Aberto Agora • Pedindo no WhatsApp';
    } else {
        statusBadge.className = 'status-badge closed';
        statusBadge.querySelector('.status-text').textContent = 'Fechado Agora • Abre às 18h30';
    }
}

// Render Menu Items
function renderMenu() {
    const filteredData = currentCategory === 'todos' 
        ? MENU_DATA 
        : MENU_DATA.filter(item => item.category === currentCategory);

    menuGrid.innerHTML = filteredData.map(item => {
        const isSinglePrice = item.prices.P === item.prices.G;
        const initialSize = 'G';
        const initialPrice = item.prices[initialSize];

        return `
            <div class="menu-card" data-id="${item.id}">
                <div class="card-img-box">
                    <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
                    ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
                    <div class="card-rating"><i data-lucide="star"></i> ${item.rating || '4.9'}</div>
                </div>

                <div class="card-body">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                    
                    ${!isSinglePrice ? `
                        <div class="size-selector">
                            <button class="size-btn" onclick="selectSize('${item.id}', 'P')">P (25cm)</button>
                            <button class="size-btn" onclick="selectSize('${item.id}', 'M')">M (30cm)</button>
                            <button class="size-btn active" onclick="selectSize('${item.id}', 'G')">G (35cm)</button>
                            <button class="size-btn" onclick="selectSize('${item.id}', 'GG')">GG (40cm)</button>
                        </div>
                    ` : '<div style="height: 12px;"></div>'}

                    <div class="card-bottom">
                        <div class="card-price">
                            <span class="price-label">Valor:</span>
                            <span class="price-value" id="price-${item.id}">R$ ${initialPrice.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <button class="add-btn" onclick="addToCart('${item.id}')">
                            <i data-lucide="plus"></i> Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// Size Selection Handler
window.selectSize = function(itemId, size) {
    const card = document.querySelector(`.menu-card[data-id="${itemId}"]`);
    if (!card) return;

    card.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    const clickedBtn = Array.from(card.querySelectorAll('.size-btn')).find(btn => btn.textContent.startsWith(size));
    if (clickedBtn) clickedBtn.classList.add('active');

    const item = MENU_DATA.find(i => i.id === itemId);
    if (item) {
        const priceEl = document.getElementById(`price-${itemId}`);
        priceEl.textContent = `R$ ${item.prices[size].toFixed(2).replace('.', ',')}`;
        priceEl.setAttribute('data-selected-size', size);
    }
};

// Add Item to Cart
window.addToCart = function(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    const card = document.querySelector(`.menu-card[data-id="${itemId}"]`);
    const activeSizeBtn = card.querySelector('.size-btn.active');
    const selectedSize = activeSizeBtn ? activeSizeBtn.textContent.split(' ')[0] : 'G';
    const price = item.prices[selectedSize];

    const cartItemKey = `${itemId}-${selectedSize}`;
    const existingIndex = cart.findIndex(ci => ci.key === cartItemKey);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            key: cartItemKey,
            id: item.id,
            title: item.title,
            size: selectedSize,
            price: price,
            quantity: 1
        });
    }

    updateCartUI();
    openCart();
};

// Update Cart Drawer & Header UI
function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = deliveryType === 'delivery' ? 7.00 : 0.00;
    const grandTotal = subtotal + deliveryFee;

    cartCount.textContent = totalItems;
    cartTotalHeader.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
                <i data-lucide="shopping-bag" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5;"></i>
                <p>Seu carrinho está vazio.</p>
                <small>Escolha uma deliciosa pizza acima!</small>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>Tamanho: ${item.size} • R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                    <span class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="cart-controls">
                    <button class="cart-qty-btn" onclick="window.changeQty('${item.key}', -1)" aria-label="Diminuir quantidade">-</button>
                    <span class="cart-qty-num">${item.quantity} un</span>
                    <button class="cart-qty-btn" onclick="window.changeQty('${item.key}', 1)" aria-label="Aumentar quantidade">+</button>
                </div>
            </div>
        `).join('');
    }

    cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    cartDeliveryFee.textContent = deliveryType === 'delivery' ? 'R$ 7,00' : 'Grátis (Retirada)';
    cartGrandTotal.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;

    lucide.createIcons();
}

window.changeQty = function(itemKey, delta) {
    const index = cart.findIndex(ci => ci.key === itemKey);
    if (index === -1) return;

    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
};

// Event Listeners Setup
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderMenu();
        });
    });

    // Cart toggles
    cartToggle.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Delivery type toggles
    delBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            delBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            deliveryType = btn.getAttribute('data-type');
            updateCartUI();
        });
    });

    // Send WhatsApp Order
    btnSendWhatsapp.addEventListener('click', sendOrderToWhatsapp);

    // Presentation Modal (Proposal)
    const presTrigger = document.getElementById('presentation-trigger');
    const presOverlay = document.getElementById('pres-modal-overlay');
    const presClose = document.getElementById('pres-modal-close');
    const presCancel = document.getElementById('pres-modal-cancel');

    function closePresModal() {
        if (presOverlay) presOverlay.classList.remove('active');
    }

    function openPresModal() {
        if (presOverlay) presOverlay.classList.add('active');
    }

    if (presTrigger) presTrigger.addEventListener('click', openPresModal);
    if (presClose) presClose.addEventListener('click', closePresModal);
    if (presCancel) presCancel.addEventListener('click', closePresModal);

    if (presOverlay) {
        presOverlay.addEventListener('click', (e) => {
            if (e.target === presOverlay) closePresModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePresModal();
            closeCart();
        }
    });
}

function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
}

// Generate & Send WhatsApp Order Message
function sendOrderToWhatsapp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione itens antes de enviar o pedido.');
        return;
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = deliveryType === 'delivery' ? 7.00 : 0.00;
    const grandTotal = subtotal + deliveryFee;
    const payment = paymentMethod.value;

    let text = `🍕 *NOVO PEDIDO DE PIZZA - D'GUSTE WEBSITE*\n`;
    text += `-------------------------------------------\n\n`;
    
    cart.forEach((item, i) => {
        text += `${i+1}. *${item.title}* (${item.size})\n`;
        text += `   Qtd: ${item.quantity}x • R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });

    text += `-------------------------------------------\n`;
    text += `*Forma de Entrega:* ${deliveryType === 'delivery' ? 'Tele-Entrega (Panazzolo/Região)' : 'Retirada no Balcão (Rua João Mocelin, 1493)'}\n`;
    text += `*Forma de Pagamento:* ${payment}\n`;
    text += `*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    text += `*Taxa de Entrega:* ${deliveryType === 'delivery' ? 'R$ 7,00' : 'Grátis'}\n`;
    text += `*TOTAL DO PEDIDO:* R$ ${grandTotal.toFixed(2).replace('.', ',')}\n\n`;
    text += `📍 *Endereço de Entrega:* (Por favor, digite seu nome e endereço completo aqui ao enviar nesta conversa)`;

    const phone = "555430759626";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
}
