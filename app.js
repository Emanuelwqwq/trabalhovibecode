const produtos = [
  {
    id: 1,
    nome: 'Nintendo 64',
    preco: 3899.9,
    img: 'https://toppng.com/uploads/preview/the-success-of-the-playstation-required-an-action-by-nintendo-64-11563330254poywdtdgp7.png'
  },
  {
    id: 2,
    nome: 'PlayStation 1 Fat',
    preco: 4799.9,
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.png'
  },
  {
    id: 3,
    nome: 'Sega Genesis Edition',
    preco: 2989.0,
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg'
  },
  {
    id: 5,
    nome: 'Sony PlayStation 2',
    preco: 6999.9,
    img: 'https://i5.walmartimages.com/asr/7348e500-9536-4ee6-9117-1bc0949fe008.4d224836742f0cc1d9529023d521e2cf.jpeg'
  },
  {
    id: 6,
    nome: 'Xbox Original',
    preco: 2899.9,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Xbox_console.png/220px-Xbox_console.png'
  },
  {
    id: 7,
    nome: 'Game Boy Color',
    preco: 1299.9,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Game_Boy_Color.png/220px-Game_Boy_Color.png'
  }
];

let carrinho = [];

function showToast(msg = 'PRODUTO ADICIONADO! 🎮', type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type}`;
  t.classList.add('show');
  
  setTimeout(() => {
    t.classList.remove('show');
  }, 2500);
}

function renderProdutos() {
  document.getElementById('grid').innerHTML =
    produtos.map(p => `
      <div class="card">
        <img src="${p.img}" class="card-img">

        <div class="card-body">
          <h3>${p.nome}</h3>

          <span class="card-price">
            R$ ${p.preco.toLocaleString('pt-BR')}
          </span>

          <button
            class="add-btn"
            onclick="adicionarAoCarrinho(${p.id})"
          >
            ADICIONAR
          </button>
        </div>
      </div>
    `).join('');
}

function adicionarAoCarrinho(id) {
  const p = produtos.find(x => x.id === id);

  const item = carrinho.find(x => x.id === id);

  if (item) {
    item.qty++;
  } else {
    carrinho.push({
      ...p,
      qty: 1
    });
  }

  atualizarCarrinho();
  showToast();
}

function atualizarCarrinho() {
  document.getElementById('cartCount').textContent =
    carrinho.reduce((a, b) => a + b.qty, 0);

  const total =
    carrinho.reduce((a, b) => a + (b.preco * b.qty), 0);

  document.getElementById('cartTotal').textContent =
    `R$ ${total.toLocaleString('pt-BR', {
      minimumFractionDigits: 2
    })}`;

  // Salvar carrinho no localStorage
  localStorage.setItem('loja_carrinho', JSON.stringify(carrinho));

  document.getElementById('cartItems').innerHTML =
    carrinho.length === 0 ? '<p style="text-align: center; color: #888;">Carrinho vazio</p>' :
    carrinho.map(c => `
      <div class="cart-item-ui">

        <img src="${c.img}" class="cart-img-mini">

        <div style="flex:1">
          <p style="font-size:14px">${c.nome}</p>
          <b>${c.qty}x</b>
        </div>

        <button
          onclick="mudarQtd(${c.id}, -1)"
          style="
            border:none;
            background:none;
            color:red;
            cursor:pointer;
            font-size:18px;
          "
        >
          ✕
        </button>

      </div>
    `).join('');
}

function mudarQtd(id, d) {
  const i = carrinho.find(x => x.id === id);

  if (i) {
    i.qty += d;

    if (i.qty <= 0) {
      carrinho =
        carrinho.filter(x => x.id !== id);
    }
  }

  atualizarCarrinho();
}

function toggleCart(s) {
  document
    .getElementById('cartDrawer')
    .classList.toggle('open', s);

  document
    .getElementById('cartOverlay')
    .classList.toggle('open', s);
}

function irParaCheckout() {
  if (!carrinho.length) {
    showToast('Carrinho vazio!', 'error');
    return;
  }

  // Atualizar resumo do pedido
  const total = carrinho.reduce((a, b) => a + (b.preco * b.qty), 0);
  const items = carrinho.map(c => `
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px;">
      <span>${c.nome}</span>
      <span>${c.qty}x R$ ${(c.preco).toLocaleString('pt-BR')}</span>
    </div>
  `).join('');
  
  document.getElementById('orderItems').innerHTML = items;
  document.getElementById('orderTotal').textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

  document.getElementById('homePage').style.display = 'none';
  document.getElementById('checkoutPage').style.display = 'block';
  toggleCart(false);
}

function voltarHome() {
  document.getElementById('homePage').style.display = 'block';

  document.getElementById('checkoutPage').style.display = 'none';
}

function formatarCEP(i) {
  let valor = i.value.replace(/\D/g, '');
  if (valor.length > 5) {
    valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
  }
  i.value = valor;
}

function formatarTelefone(i) {
  let valor = i.value.replace(/\D/g, '');
  if (valor.length > 0) {
    if (valor.length <= 2) {
      valor = `(${valor}`;
    } else if (valor.length <= 7) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
    }
  }
  i.value = valor;
}

/* CONSERTADO */

function goToPayment() {
  const cep = document.getElementById('cep').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  // Validações
  if (cep.length < 9) {
    showToast('CEP inválido!', 'error');
    return;
  }
  if (endereco === '') {
    showToast('Endereço obrigatório!', 'error');
    return;
  }
  if (numero === '') {
    showToast('Número obrigatório!', 'error');
    return;
  }
  if (cidade === '') {
    showToast('Cidade obrigatória!', 'error');
    return;
  }
  if (!email.includes('@')) {
    showToast('E-mail inválido!', 'error');
    return;
  }
  if (telefone.replace(/\D/g, '').length < 10) {
    showToast('Telefone inválido!', 'error');
    return;
  }

  // Salvar dados da entrega
  const enderecoDados = {
    cep,
    endereco,
    numero,
    complemento,
    cidade,
    email,
    telefone
  };
  localStorage.setItem('loja_endereco', JSON.stringify(enderecoDados));

  document.getElementById('step-address').style.display = 'none';
  document.getElementById('step-payment').style.display = 'block';

  document.getElementById('pay-content').innerHTML = `
    <p><strong>${endereco}</strong></p>
    <p>Número: ${numero} ${complemento ? '- ' + complemento : ''}</p>
    <p>${cidade}</p>
    <p>CEP: ${cep}</p>
    <hr style="border: none; border-top: 1px solid #2b2b38; margin: 15px 0;">
    <p><strong>Contato</strong></p>
    <p>E-mail: ${email}</p>
    <p>Telefone: ${telefone}</p>
  `;
}

// Variaveis de pagamento
let metodo_pagamento_selecionado = 'pix';
const CHAVE_PIX = '08210191390';
const WHATSAPP_NUMERO = '5589981287978';

// Configuracao EmailJS
const EMAIL_SERVICE_ID = 'service_lojajoao';
const EMAIL_TEMPLATE_ID = 'template_pedido';
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// Inicializar EmailJS
try {
  emailjs.init(EMAIL_PUBLIC_KEY);
} catch (e) {
  console.log('EmailJS nao configurado. Configure a chave publica.');
}

function selecionarPagamento(metodo) {
  metodo_pagamento_selecionado = metodo;
  
  document.querySelectorAll('.payment-option').forEach(el => {
    el.classList.remove('selected');
  });
  
  document.getElementById(`opt-${metodo}`).classList.add('selected');
  
  const detailsDiv = document.getElementById('payment-details');
  const total = carrinho.reduce((a, b) => a + (b.preco * b.qty), 0);
  
  if (metodo === 'pix') {
    detailsDiv.innerHTML = `
      <div class="payment-detail-box">
        <h4>Chave PIX:</h4>
        <div class="pix-key" onclick="copiarChavePix()" style="cursor: pointer;">
          <span>${CHAVE_PIX}</span>
          <span style="margin-left: 10px; color: var(--accent);">📋 Copiar</span>
        </div>
        <p style="font-size: 12px; color: #888; margin-top: 10px;">Clique para copiar a chave PIX</p>
      </div>
    `;
  } else if (metodo === 'cartao') {
    const parcelas = gerarOpcoesParcelas(total);
    detailsDiv.innerHTML = `
      <div class="payment-detail-box">
        <h4>Parcelamento:</h4>
        <select id="select-parcelas" style="width: 100%; padding: 12px; background: #11111a; border: 1px solid #2b2b38; color: white; border-radius: 8px; font-size: 14px;">
          ${parcelas.map((p, i) => `<option value="${i + 1}">${i + 1}x de R$ ${(p).toLocaleString('pt-BR', {minimumFractionDigits: 2})}${i === 0 ? ' (sem juros)' : ''}</option>`).join('')}
        </select>
        <p style="font-size: 12px; color: #888; margin-top: 10px;">Parcelas de 1x ate 12x</p>
      </div>
    `;
  } else if (metodo === 'paypal') {
    detailsDiv.innerHTML = `
      <div class="payment-detail-box">
        <h4>PayPal</h4>
        <p style="font-size: 14px; color: #ccc; margin-top: 10px;">Voce sera redirecionado para PayPal.</p>
      </div>
    `;
  }
  
  detailsDiv.style.display = 'block';
}

function copiarChavePix() {
  navigator.clipboard.writeText(CHAVE_PIX);
  showToast('Chave PIX copiada! 📋', 'success');
}

function gerarOpcoesParcelas(total) {
  const parcelas = [];
  for (let i = 1; i <= 12; i++) {
    parcelas.push(total / i);
  }
  return parcelas;
}

function enviarMensagemWhatsApp() {
  const endereco = localStorage.getItem('loja_endereco');
  const enderecoData = JSON.parse(endereco);
  const total = carrinho.reduce((a, b) => a + (b.preco * b.qty), 0);
  
  const itens = carrinho.map(c => `- ${c.nome} (${c.qty}x)`).join('%0A');
  
  const mensagem = `*NOVO PEDIDO RECEBIDO*%0A%0A*Produtos:*%0A${itens}%0A%0A*Total: R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}*%0A%0A*Dados de Entrega:*%0AEndereco: ${enderecoData.endereco}, ${enderecoData.numero}%0AComplemento: ${enderecoData.complemento || 'N/A'}%0ACidade: ${enderecoData.cidade}%0ACEP: ${enderecoData.cep}%0A%0A*Contato:*%0AEmail: ${enderecoData.email}%0ATelefone: ${enderecoData.telefone}%0A%0A*Metodo de Pagamento: ${metodo_pagamento_selecionado.toUpperCase()}*`;
  
  const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(urlWhatsApp, '_blank');
}

function enviarEmailConfirmacao() {
  const endereco = localStorage.getItem('loja_endereco');
  const enderecoData = JSON.parse(endereco);
  const total = carrinho.reduce((a, b) => a + (b.preco * b.qty), 0);
  
  const itens = carrinho.map(c => `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;">${c.nome}</td><td style="padding: 8px; text-align: center; border-bottom: 1px solid #eee;">${c.qty}x</td><td style="padding: 8px; text-align: right; border-bottom: 1px solid #eee;">R$ ${(c.preco * c.qty).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td></tr>`).join('');
  
  const numPedido = 'PED' + Date.now().toString().slice(-8);
  
  const emailParams = {
    to_email: enderecoData.email,
    to_name: enderecoData.email.split('@')[0],
    pedido_numero: numPedido,
    produtos: itens,
    total: total.toLocaleString('pt-BR', {minimumFractionDigits: 2}),
    endereco: enderecoData.endereco,
    numero: enderecoData.numero,
    complemento: enderecoData.complemento || 'N/A',
    cidade: enderecoData.cidade,
    cep: enderecoData.cep,
    telefone: enderecoData.telefone,
    metodo_pagamento: metodo_pagamento_selecionado.toUpperCase()
  };
  
  emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailParams)
    .then(response => {
      console.log('Email enviado com sucesso!', response);
      showToast('Email de confirmacao enviado! 📧', 'success');
    })
    .catch(error => {
      console.log('Erro ao enviar email:', error);
    });
}

function finalizarCompra() {
  if (!metodo_pagamento_selecionado) {
    showToast('Selecione um metodo de pagamento!', 'error');
    return;
  }
  
  showToast('Pedido confirmado! 🎉', 'success');
  
  setTimeout(() => {
    enviarEmailConfirmacao();
    setTimeout(() => {
      enviarMensagemWhatsApp();
    }, 500);
  }, 1000);
  
  setTimeout(() => {
    carrinho = [];
    localStorage.removeItem('loja_carrinho');
    localStorage.removeItem('loja_endereco');
    atualizarCarrinho();

    document.getElementById('cep').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('payment-details').innerHTML = '';
    document.getElementById('payment-details').style.display = 'none';
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));
    metodo_pagamento_selecionado = 'pix';

    document.getElementById('step-address').style.display = 'block';
    document.getElementById('step-payment').style.display = 'none';

    voltarHome();
  }, 2500);
}

renderProdutos();