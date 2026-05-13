# Guia de Configuração - Envio de Emails com EmailJS

## 📧 Como Configurar o Envio de Emails

Seu projeto agora envia um email de confirmação de compra para o cliente automaticamente! Siga estas 5 simples etapas para configurar:

### Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com](https://www.emailjs.com)
2. Clique em **"Sign Up Free"**
3. Preencha os dados e confirme seu email
4. Faça login na sua conta

### Passo 2: Conectar seu Email (Gmail/Outlook/etc)

1. No painel do EmailJS, clique em **"Email Services"** no menu lateral
2. Clique em **"Add New Service"**
3. Escolha seu provedor (Gmail, Outlook, etc)
4. Siga as instruções para autorizar
5. Nomeie seu service como: **service_lojajoao**
6. Clique em "Create Service"

### Passo 3: Criar Template de Email

1. Clique em **"Email Templates"** no menu
2. Clique em **"Create New Template"**
3. Nomeie como: **template_pedido**
4. Na seção "Subject", coloque:
```
Pedido Confirmado - #{{pedido_numero}}
```

5. Na seção "Content", cola este HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #a855f7; color: white; padding: 20px; border-radius: 10px; text-align: center; }
    .section { margin: 20px 0; }
    .section h2 { color: #a855f7; border-bottom: 2px solid #a855f7; padding-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
    table th { background: #f5f5f5; padding: 10px; text-align: left; }
    table td { padding: 10px; border-bottom: 1px solid #eee; }
    .total { font-size: 24px; color: #a855f7; font-weight: bold; }
    .footer { text-align: center; color: #888; margin-top: 20px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Pedido Confirmado! 🎉</h1>
      <p>Número do Pedido: {{pedido_numero}}</p>
    </div>

    <div class="section">
      <h2>Olá, {{to_name}}!</h2>
      <p>Seu pedido foi recebido com sucesso. Abaixo estão os detalhes:</p>
    </div>

    <div class="section">
      <h2>Produtos</h2>
      <table>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Valor</th>
        </tr>
        {{produtos}}
      </table>
    </div>

    <div class="section">
      <h2>Resumo</h2>
      <p><strong>Total:</strong> <span class="total">R$ {{total}}</span></p>
      <p><strong>Método de Pagamento:</strong> {{metodo_pagamento}}</p>
    </div>

    <div class="section">
      <h2>Endereço de Entrega</h2>
      <p>
        <strong>{{endereco}}, {{numero}}</strong><br>
        {{complemento}}<br>
        {{cidade}} - {{cep}}<br>
        <br>
        <strong>Contato:</strong> {{telefone}}
      </p>
    </div>

    <div class="section">
      <h2>Próximos Passos</h2>
      <p>✓ Você receberá um aviso no WhatsApp com os detalhes do pedido</p>
      <p>✓ Aguarde a confirmação de pagamento</p>
      <p>✓ Seu pedido será processado em breve</p>
    </div>

    <div class="footer">
      <p>Obrigado por sua compra! Loja do João - Ultimate Gaming Store</p>
      <p>Qualquer dúvida, entre em contato conosco.</p>
    </div>
  </div>
</body>
</html>
```

6. Clique em **"Save Template"**

### Passo 4: Obter sua PUBLIC_KEY

1. Clique em **"Account"** no menu lateral
2. Procure por **"Public Key"**
3. Copie sua chave pública (parecido com: `abc123def456ghi789`)

### Passo 5: Atualizar o Código

Agora atualize seus arquivos com as chaves:

**No arquivo `index.html`** (linha 19):
```javascript
emailjs.init('COLE_SUA_PUBLIC_KEY_AQUI');
```

**No arquivo `app.js`** (linhas 287-288):
```javascript
const EMAIL_SERVICE_ID = 'service_lojajoao';  // O nome que você deu no passo 2
const EMAIL_TEMPLATE_ID = 'template_pedido';   // O nome que você deu no passo 3
const EMAIL_PUBLIC_KEY = 'COLE_SUA_PUBLIC_KEY_AQUI';  // Da conta do EmailJS
```

## ✅ Pronto!

Agora quando um cliente finalizar uma compra:
- Recebe um email de confirmação automaticamente
- Recebe a mensagem no WhatsApp
- Os detalhes aparecem formatados e profissionais

## 🆘 Dúvidas?

Se tiver problemas:
- Verifique se a PUBLIC_KEY está correta
- Confirme se o Service ID existe
- Teste abrindo as DevTools (F12) e procurando por mensagens de erro

Sucesso! 🚀
