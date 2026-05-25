// ===============================================
// LOJA DO JÃO - SISTEMA DE GERENCIAMENTO COMPLETO
// ===============================================

const CATEGORIAS = {
  CONSOLES: 'Consoles',
  JOGOS: 'Jogos',
  PORTATEIS: 'Portáteis',
  ACESSORIOS: 'Acessórios',
  COLECIONAVEIS: 'Colecionáveis',
  FUTURO: 'Do Futuro'
};

const EMAIL_SERVICE_ID = 'service_xmbll1g';
const EMAIL_TEMPLATE_ID = 'template_9sg1ano';

// ===============================================
// PRODUTOS COMPLETOS - 28 PRODUTOS
// ===============================================

const produtos = [
  { id: 1, nome: 'Nintendo 64', preco: 3899.9, desconto: 15, categoria: CATEGORIAS.CONSOLES, plataforma: 'Nintendo 64', genero: 'Console', classificacao: '10+', vendas: 45, estoque: 10, img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nintendo-64-Console-FL.jpg', descricao: 'Nintendo 64 Original - Console da 5ª Geração', especificacoes: ['Processador 64-bit', '4MB de RAM', 'Saídas de vídeo composto', 'Cabo de energia incluso'], avaliacao: 4.5, reviews: 128, avaliacoes: [{ usuario: 'João Silva', nota: 5, texto: 'Console em perfeito estado! Chegou bem embalado.' }, { usuario: 'Maria Santos', nota: 4, texto: 'Bom custo-benefício, funcionando perfeitamente.' }, { usuario: 'Carlos Oliveira', nota: 5, texto: 'Melhor compra que já fiz! Produto original.' }] },
  { id: 2, nome: 'PlayStation 1 Fat', preco: 4799.9, desconto: 10, categoria: CATEGORIAS.CONSOLES, plataforma: 'PlayStation 1', genero: 'Console', classificacao: 'Livre', vendas: 67, estoque: 8, img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.png', descricao: 'PlayStation 1 Original Fat - Console clássico', especificacoes: ['Processador MIPS', '2MB de RAM', 'Suporte a CDs', 'Controle original incluso'], avaliacao: 4.8, reviews: 256, avaliacoes: [{ usuario: 'Pedro Costa', nota: 5, texto: 'Excelente produto! Superou expectativas.' }, { usuario: 'Ana Paula', nota: 5, texto: 'Produto original com excelente qualidade.' }, { usuario: 'Roberto Dias', nota: 4, texto: 'Ótima qualidade, chegou antes do prazo.' }] },
  { id: 3, nome: 'Sega Genesis Edition', preco: 2989.0, desconto: 20, categoria: CATEGORIAS.CONSOLES, plataforma: 'Mega Drive', genero: 'Console', classificacao: 'Livre', vendas: 38, estoque: 15, img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg', descricao: 'Sega Genesis/Mega Drive - Console retro premium', especificacoes: ['Processador Motorola 68000', '64KB de RAM', 'Saída RF/RCA', 'Joystick original'], avaliacao: 4.3, reviews: 89, avaliacoes: [{ usuario: 'Lucas Martins', nota: 4, texto: 'Produto muito bom, desconto fantástico!' }, { usuario: 'Fernanda Gomes', nota: 4, texto: 'Console em ótimas condições.' }, { usuario: 'Bruno Ferreira', nota: 5, texto: 'Melhor preço do mercado!' }] },
  { id: 10, nome: 'Super Nintendo Entertainment System', preco: 3299.9, desconto: 10, categoria: CATEGORIAS.CONSOLES, plataforma: 'Super Nintendo', genero: 'Console', classificacao: 'Livre', vendas: 52, estoque: 5, img: 'https://m.media-amazon.com/images/I/818E8mSI5CL.jpg', descricao: 'Console clássico da Nintendo, 16-bit.', especificacoes: ['Processador 16-bit', '2MB de RAM', 'Controle original incluso'], avaliacao: 4.7, reviews: 150, avaliacoes: [{ usuario: 'Felipe M.', nota: 5, texto: 'SNES perfeito, muito bem conservado.' }, { usuario: 'Bianca S.', nota: 5, texto: 'Qualidade impecável!' }, { usuario: 'Ricardo F.', nota: 4, texto: 'Ótimo produto, entrega rápida.' }] },
  { id: 5, nome: 'Sony PlayStation 2', preco: 6999.9, desconto: 0, categoria: CATEGORIAS.CONSOLES, plataforma: 'PlayStation 2', genero: 'Console', classificacao: 'Livre', vendas: 89, estoque: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/5/58/PS2-Fat-Console-Set.png', descricao: 'PlayStation 2 Fat - Edição Especial', especificacoes: ['Emotion Engine', '32MB RAM', 'DVD-ROM Drive', 'Hard Drive 40GB', 'DualShock 2'], avaliacao: 4.9, reviews: 512, avaliacoes: [{ usuario: 'Gustavo R.', nota: 5, texto: 'PS2 original! Melhor console!' }, { usuario: 'Juliana L.', nota: 5, texto: 'Produto novo, excelente embalagem.' }, { usuario: 'Rafael S.', nota: 5, texto: 'Achei PS2 original de qualidade!' }], novidade: true },
  { id: 6, nome: 'Xbox Original', preco: 7599.9, desconto: 12, categoria: CATEGORIAS.CONSOLES, plataforma: 'Xbox Original', genero: 'Console', classificacao: 'Livre', vendas: 31, estoque: 12, img: 'https://www.vhv.rs/dpng/d/517-5177216_xbox-png-image-xbox-classic-transparent-png.png', descricao: 'Xbox Original - Primeiro console da Microsoft', especificacoes: ['Pentium III', '64MB RAM', 'HDD 8GB', 'RCA/S-Vídeo', 'Controle original'], avaliacao: 4.2, reviews: 176, avaliacoes: [{ usuario: 'Thiago A.', nota: 4, texto: 'Xbox em bom estado! Funcionando muito bem.' }, { usuario: 'Camila M.', nota: 4, texto: 'Produto original, chegou rápido.' }, { usuario: 'Ricardo P.', nota: 5, texto: 'Excelente qualidade e preço!' }], novidade: true },
  { id: 15, nome: 'Nintendo Wii', preco: 1299.9, desconto: 5, categoria: CATEGORIAS.FUTURO, plataforma: 'Nintendo Wii', genero: 'Console', classificacao: 'Livre', vendas: 56, estoque: 6, img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Wii-Console.png', descricao: 'Console inovador com controles de movimento.', especificacoes: ['Controle por movimento', 'Compatível com GameCube', 'Sensor bar'], avaliacao: 4.5, reviews: 200, avaliacoes: [{ usuario: 'Marcos F.', nota: 5, texto: 'Wii em perfeito estado, muito divertido!' }, { usuario: 'Juliana T.', nota: 4, texto: 'Console funcionando perfeitamente.' }, { usuario: 'Caio R.', nota: 5, texto: 'Ótimo produto!' }] },
  { id: 17, nome: 'PlayStation 3', preco: 1599.9, desconto: 10, categoria: CATEGORIAS.FUTURO, plataforma: 'PlayStation 3', genero: 'Console', classificacao: '10+', vendas: 43, estoque: 4, img: 'https://m.media-amazon.com/images/I/61589f56hML._AC_UF1000,1000_QL80_.jpg', descricao: 'Console de última geração com Blu-ray.', especificacoes: ['Blu-ray', 'HDMI', 'DualShock 3', '500GB HD'], avaliacao: 4.7, reviews: 180, avaliacoes: [{ usuario: 'Lucas C.', nota: 5, texto: 'PS3 funcionando perfeitamente!' }, { usuario: 'Marina S.', nota: 5, texto: 'Console original, excelente estado.' }, { usuario: 'Diego M.', nota: 4, texto: 'Produto bem conservado!' }] },
  { id: 9, nome: 'Nintendo Switch OLED', preco: 10999.9, desconto: 0, categoria: CATEGORIAS.FUTURO, plataforma: 'Nintendo Switch', genero: 'Console', classificacao: 'Livre', vendas: 78, estoque: 25, img: 'https://images.tcdn.com.br/img/img_prod/872390/console_nintendo_switch_oled_64gb_edicao_mario_kart_8_deluxe_branco_1563_2_eb51aa2716573233f2e69a75f57cf472.jpg', descricao: 'Nintendo Switch OLED com tela vibrante.', especificacoes: ['Tela OLED 7"', '64GB armazenamento', 'Joy-Con inclusos', 'Dock HDMI'], avaliacao: 4.8, reviews: 220, avaliacoes: [{ usuario: 'Marcos F.', nota: 5, texto: 'Console perfeito, imagem incrível.' }, { usuario: 'Juliana T.', nota: 5, texto: 'Portabilidade excelente.' }, { usuario: 'Caio R.', nota: 4, texto: 'Excelente produto!' }] },
  { id: 13, nome: 'Game Boy Color', preco: 899.9, desconto: 15, categoria: CATEGORIAS.PORTATEIS, plataforma: 'Game Boy Color', genero: 'Console', classificacao: 'Livre', vendas: 34, estoque: 7, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Game-Boy-Color-FL.jpg/500px-Nintendo-Game-Boy-Color-FL.jpg', descricao: 'Console portátil clássico com tela colorida.', especificacoes: ['Tela colorida', 'Portátil', 'Compatível com Game Boy', '32MB armazenamento'], avaliacao: 4.6, reviews: 120, avaliacoes: [{ usuario: 'Ana P.', nota: 5, texto: 'Game Boy Color em perfeito estado!' }, { usuario: 'Bruno L.', nota: 4, texto: 'Ótima qualidade!' }, { usuario: 'Fernanda G.', nota: 5, texto: 'Nostalgia pura!' }] },
  { id: 4, nome: 'Super Mario 64', preco: 149.9, desconto: 5, categoria: CATEGORIAS.JOGOS, plataforma: 'Nintendo 64', genero: 'Plataforma', classificacao: 'Livre', vendas: 92, estoque: 20, img: 'https://upload.wikimedia.org/wikipedia/pt/7/7b/Super_Mario_64_front.jpg', descricao: 'Jogo clássico para Nintendo 64', especificacoes: ['Cartucho original', 'Manual incluído', 'Ótimo estado'], avaliacao: 4.9, reviews: 342, avaliacoes: [{ usuario: 'Marina L.', nota: 5, texto: 'Jogo impecável, nostalgia pura!' }, { usuario: 'Felipe A.', nota: 5, texto: 'Cartucho em ótimo estado.' }, { usuario: 'Lara R.', nota: 4, texto: 'Jogo autêntico!' }] },
  { id: 7, nome: 'The Legend of Zelda: Ocarina of Time', preco: 189.9, desconto: 10, categoria: CATEGORIAS.JOGOS, plataforma: 'Nintendo 64', genero: 'Aventura', classificacao: '10+', vendas: 88, estoque: 18, img: 'https://upload.wikimedia.org/wikipedia/pt/1/17/The_Legend_of_Zelda_Ocarina_of_Time_capa.png', descricao: 'Jogo lendário para Nintendo 64', especificacoes: ['Cartucho original', 'Manual incluso', 'Ótimo estado'], avaliacao: 5.0, reviews: 415, avaliacoes: [{ usuario: 'Eduardo N.', nota: 5, texto: 'Jogo bem conservado.' }, { usuario: 'Patrícia M.', nota: 5, texto: 'Entrega rápida.' }, { usuario: 'André L.', nota: 5, texto: 'Melhor aventura!' }] },
  { id: 8, nome: 'Final Fantasy VII', preco: 179.9, desconto: 8, categoria: CATEGORIAS.JOGOS, plataforma: 'PlayStation 1', genero: 'RPG', classificacao: '12+', vendas: 76, estoque: 10, img: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg', descricao: 'RPG clássico para PlayStation 1', especificacoes: ['CD original', 'Manual incluso', 'Clássico colecionável'], avaliacao: 4.7, reviews: 298, avaliacoes: [{ usuario: 'Samanta V.', nota: 5, texto: 'RPG completo em excelente condição.' }, { usuario: 'Diego C.', nota: 4, texto: 'Ótimo jogo!' }, { usuario: 'Tatiana S.', nota: 5, texto: 'Produto colecionável!' }] },
  { id: 11, nome: 'The Legend of Zelda: A Link to the Past', preco: 199.9, desconto: 5, categoria: CATEGORIAS.JOGOS, plataforma: 'Super Nintendo', genero: 'Aventura', classificacao: '10+', vendas: 71, estoque: 10, img: 'https://upload.wikimedia.org/wikipedia/pt/3/31/The_Legenda_of_Zelda_A_Link_to_the_Past_capa.png', descricao: 'Jogo clássico de aventura para SNES.', especificacoes: ['Cartucho original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.9, reviews: 300, avaliacoes: [{ usuario: 'Rafael S.', nota: 5, texto: 'Zelda em perfeito estado!' }, { usuario: 'Camila M.', nota: 5, texto: 'Jogo original!' }, { usuario: 'Lucas P.', nota: 5, texto: 'Melhor compra!' }] },
  { id: 12, nome: 'Sonic the Hedgehog', preco: 149.9, desconto: 8, categoria: CATEGORIAS.JOGOS, plataforma: 'Mega Drive', genero: 'Plataforma', classificacao: 'Livre', vendas: 65, estoque: 8, img: 'https://static.wikia.nocookie.net/sonic-the-hedgehog/images/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg/revision/latest?cb=20140416021040&path-prefix=pt', descricao: 'Jogo clássico de plataforma para Sega Genesis.', especificacoes: ['Cartucho original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.8, reviews: 250, avaliacoes: [{ usuario: 'João C.', nota: 5, texto: 'Sonic em excelente condição!' }, { usuario: 'Marina F.', nota: 5, texto: 'Cartucho original!' }, { usuario: 'Pedro H.', nota: 4, texto: 'Funciona perfeitamente!' }] },
  { id: 14, nome: 'Pokémon Red', preco: 179.9, desconto: 10, categoria: CATEGORIAS.JOGOS, plataforma: 'Game Boy', genero: 'RPG', classificacao: 'Livre', vendas: 81, estoque: 12, img: 'https://m.media-amazon.com/images/I/71aow5iRsfL._AC_UF894,1000_QL80_DpWeblab_.jpg', descricao: 'Jogo clássico de RPG para Game Boy.', especificacoes: ['Cartucho original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.9, reviews: 400, avaliacoes: [{ usuario: 'Ana L.', nota: 5, texto: 'Pokémon Red original!' }, { usuario: 'Bruno S.', nota: 5, texto: 'Cartucho em perfeito estado.' }, { usuario: 'Fernanda P.', nota: 5, texto: 'Nostalgia pura!' }] },
  { id: 16, nome: 'Mario Kart Wii', preco: 249.9, desconto: 10, categoria: CATEGORIAS.JOGOS, plataforma: 'Nintendo Wii', genero: 'Corrida', classificacao: 'Livre', vendas: 72, estoque: 15, img: 'https://upload.wikimedia.org/wikipedia/pt/8/84/Mario_Kart_Wii_capa.png', descricao: 'Jogo de corrida para Nintendo Wii.', especificacoes: ['Disco original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.8, reviews: 350, avaliacoes: [{ usuario: 'Gabriel M.', nota: 5, texto: 'Mario Kart em perfeito estado!' }, { usuario: 'Beatriz F.', nota: 5, texto: 'Jogo original, muito divertido.' }, { usuario: 'Rodrigo S.', nota: 4, texto: 'Ótimo jogo!' }] },
  { id: 18, nome: 'The Last of Us', preco: 299.9, desconto: 5, categoria: CATEGORIAS.JOGOS, plataforma: 'PlayStation 3', genero: 'Ação', classificacao: '18+', vendas: 95, estoque: 10, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/The_Last_of_Us_capa.png/330px-The_Last_of_Us_capa.png', descricao: 'Jogo de ação e aventura para PS3.', especificacoes: ['Disco original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.9, reviews: 500, avaliacoes: [{ usuario: 'Victor P.', nota: 5, texto: 'The Last of Us em perfeito estado!' }, { usuario: 'Sophia M.', nota: 5, texto: 'Jogo original, história incrível.' }, { usuario: 'Arthur H.', nota: 5, texto: 'Obra-prima!' }] },
  { id: 19, nome: 'Atari 2600', preco: 2199.9, desconto: 5, categoria: CATEGORIAS.CONSOLES, plataforma: 'Atari 2600', genero: 'Console', classificacao: 'Livre', vendas: 28, estoque: 6, img: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Atari-2600-Wood-4Sw-Set.png', descricao: 'Atari 2600 - Console clássico dos anos 1980', especificacoes: ['Processador 6507', '128 bytes RAM', 'Saída RF', '2 Joysticks'], avaliacao: 4.4, reviews: 87, avaliacoes: [{ usuario: 'Wagner T.', nota: 4, texto: 'Atari em bom estado!' }, { usuario: 'Cláudia M.', nota: 5, texto: 'Console original, muito bem conservado!' }, { usuario: 'Jorge L.', nota: 4, texto: 'Ótima qualidade!' }] },
  { id: 20, nome: 'Pac-Man (Atari 2600)', preco: 89.9, desconto: 0, categoria: CATEGORIAS.JOGOS, plataforma: 'Atari 2600', genero: 'Puzzle', classificacao: 'Livre', vendas: 42, estoque: 14, img: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/thumbnail_048.jpg', descricao: 'Pac-Man para Atari 2600', especificacoes: ['Cartucho original', 'Manual incluso'], avaliacao: 4.5, reviews: 156, avaliacoes: [{ usuario: 'Gisele R.', nota: 5, texto: 'Pac-Man original funcionando perfeitamente!' }, { usuario: 'Henrique B.', nota: 4, texto: 'Ótimo jogo retrô!' }, { usuario: 'Priscila S.', nota: 5, texto: 'Clássico dos clássicos!' }] },
  { id: 21, nome: 'Commodore 64', preco: 1899.9, desconto: 10, categoria: CATEGORIAS.CONSOLES, plataforma: 'Commodore 64', genero: 'Console', classificacao: 'Livre', vendas: 22, estoque: 4, img: 'https://i.ebayimg.com/images/g/95AAAOSwJbVk~QbQ/s-l1600.jpg', descricao: 'Commodore 64 - Lenda da computação retro', especificacoes: ['Processador MOS 6510', '64KB RAM', 'Saída de vídeo RF', 'Joystick Atari'], avaliacao: 4.6, reviews: 112, avaliacoes: [{ usuario: 'Marcelo V.', nota: 5, texto: 'Commodore 64 funcionando perfeitamente!' }, { usuario: 'Cristina P.', nota: 5, texto: 'Console em excelente estado.' }, { usuario: 'Édson F.', nota: 4, texto: 'Ótima qualidade!' }] },
  { id: 22, nome: 'Donkey Kong Country (SNES)', preco: 189.9, desconto: 5, categoria: CATEGORIAS.JOGOS, plataforma: 'Super Nintendo', genero: 'Plataforma', classificacao: 'Livre', vendas: 68, estoque: 9, img: 'https://upload.wikimedia.org/wikipedia/pt/8/83/Donkey_Kong_Country_capa.png', descricao: 'Donkey Kong Country para SNES', especificacoes: ['Cartucho original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.8, reviews: 267, avaliacoes: [{ usuario: 'Camila B.', nota: 5, texto: 'Donkey Kong Country em perfeito estado!' }, { usuario: 'Rafael T.', nota: 5, texto: 'Jogo original!' }, { usuario: 'Luciana H.', nota: 4, texto: 'Funciona perfeitamente!' }] },
  { id: 23, nome: 'Castlevania IV (SNES)', preco: 199.9, desconto: 3, categoria: CATEGORIAS.JOGOS, plataforma: 'Super Nintendo', genero: 'Ação', classificacao: '12+', vendas: 55, estoque: 11, img: 'https://upload.wikimedia.org/wikipedia/pt/f/f4/Super_Castlevania_IV_Capa.jpg', descricao: 'Castlevania IV para SNES', especificacoes: ['Cartucho original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.7, reviews: 198, avaliacoes: [{ usuario: 'Anderson P.', nota: 5, texto: 'Castlevania IV em excelente estado!' }, { usuario: 'Mariana C.', nota: 5, texto: 'Jogo original!' }, { usuario: 'Thiago M.', nota: 4, texto: 'Ótimo jogo de ação!' }] },
  { id: 24, nome: 'Dreamcast Console', preco: 1599.9, desconto: 8, categoria: CATEGORIAS.CONSOLES, plataforma: 'Dreamcast', genero: 'Console', classificacao: 'Livre', vendas: 39, estoque: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Dreamcast-Console-Set.jpg', descricao: 'Dreamcast - Console revolucionário da Sega', especificacoes: ['Processador Hitachi SH-4', '16MB RAM', 'GD-ROM Drive', 'Modem integrado'], avaliacao: 4.5, reviews: 145, avaliacoes: [{ usuario: 'Ricardo A.', nota: 5, texto: 'Dreamcast funcionando perfeitamente!' }, { usuario: 'Joana L.', nota: 4, texto: 'Console em bom estado!' }, { usuario: 'Felipe G.', nota: 5, texto: 'Console revolucionário, muito raro!' }] },
  { id: 25, nome: 'Shenmue (Dreamcast)', preco: 249.9, desconto: 5, categoria: CATEGORIAS.JOGOS, plataforma: 'Dreamcast', genero: 'Ação', classificacao: '14+', vendas: 48, estoque: 8, img: 'https://upload.wikimedia.org/wikipedia/pt/c/ca/Shenmue.jpg', descricao: 'Shenmue para Dreamcast', especificacoes: ['Disco GD-ROM original', 'Manual incluso', 'Caixa original'], avaliacao: 4.8, reviews: 234, avaliacoes: [{ usuario: 'Vanessa T.', nota: 5, texto: 'Shenmue original em perfeito estado!' }, { usuario: 'Renato M.', nota: 5, texto: 'Jogo histórico!' }, { usuario: 'Elisa P.', nota: 4, texto: 'Obra importante!' }] },
  { id: 26, nome: 'Mega Man (NES)', preco: 159.9, desconto: 0, categoria: CATEGORIAS.JOGOS, plataforma: 'NES', genero: 'Ação', classificacao: '10+', vendas: 59, estoque: 13, img: 'https://upload.wikimedia.org/wikipedia/pt/3/36/Mega_Man_1_capa.jpg', descricao: 'Mega Man para NES', especificacoes: ['Cartucho original', 'Manual incluso', 'Ótimo estado'], avaliacao: 4.9, reviews: 389, avaliacoes: [{ usuario: 'Carlos D.', nota: 5, texto: 'Mega Man em excelente estado!' }, { usuario: 'Beatriz S.', nota: 5, texto: 'Cartucho funcionando perfeitamente.' }, { usuario: 'Luis F.', nota: 5, texto: 'Clássico dos clássicos!' }] },
  { id: 27, nome: 'Controle Wireless para NES', preco: 89.9, desconto: 10, categoria: CATEGORIAS.ACESSORIOS, plataforma: 'NES Classic', genero: 'Acessório', classificacao: 'Livre', vendas: 71, estoque: 18, img: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/474734/Controle-Nes-Nintendinho-USB_1689339507_gg.jpg', descricao: 'Controle wireless para NES Classic', especificacoes: ['Wireless 2.4GHz', 'Bateria recarregável', 'Alcance até 10m'], avaliacao: 4.6, reviews: 156, avaliacoes: [{ usuario: 'Patricia V.', nota: 5, texto: 'Controle excelente!' }, { usuario: 'Sergio M.', nota: 5, texto: 'Qualidade muito boa!' }, { usuario: 'Monica P.', nota: 4, texto: 'Bom controle!' }] },
  { id: 28, nome: 'Estatueta Sonic', preco: 129.9, desconto: 0, categoria: CATEGORIAS.COLECIONAVEIS, plataforma: 'Mega Drive', genero: 'Colecionável', classificacao: 'Livre', vendas: 31, estoque: 22, img: 'https://m.media-amazon.com/images/I/7126S0CpAiL._AC_SL1500_.jpg', descricao: 'Estatueta colecionável de Sonic', especificacoes: ['25cm de altura', 'PVC de qualidade', 'Caixa original'], avaliacao: 4.5, reviews: 98, avaliacoes: [{ usuario: 'Diego L.', nota: 5, texto: 'Estatueta linda!' }, { usuario: 'Amanda S.', nota: 5, texto: 'Qualidade excelente!' }, { usuario: 'Bruno T.', nota: 4, texto: 'Ótima figura!' }] }
];

let carrinho = [];
let pedidosRealizados = [];
let currentFilters = {
  categoria: 'Todos',
  ordenacao: '',
  disponibilidade: '',
  termo: ''
};
let selectedCardType = 'credito';
let debounceTimer = null;

// ===============================================
// TABELA DE FRETE POR REGIÃO (origem: Piauí - PI)
// ===============================================
const FRETE_TABELA = {
  'PI': { valor: 0,    prazo: 1, label: 'Grátis (mesmo estado)' },
  'MA': { valor: 18.9, prazo: 2, label: 'Nordeste Próximo' },
  'CE': { valor: 18.9, prazo: 2, label: 'Nordeste Próximo' },
  'PE': { valor: 24.9, prazo: 3, label: 'Nordeste' },
  'BA': { valor: 24.9, prazo: 3, label: 'Nordeste' },
  'PB': { valor: 24.9, prazo: 3, label: 'Nordeste' },
  'RN': { valor: 24.9, prazo: 3, label: 'Nordeste' },
  'AL': { valor: 24.9, prazo: 3, label: 'Nordeste' },
  'SE': { valor: 24.9, prazo: 4, label: 'Nordeste' },
  'TO': { valor: 22.9, prazo: 3, label: 'Norte/Centro' },
  'PA': { valor: 34.9, prazo: 5, label: 'Norte' },
  'AM': { valor: 44.9, prazo: 7, label: 'Norte Distante' },
  'RR': { valor: 49.9, prazo: 8, label: 'Norte Distante' },
  'AP': { valor: 49.9, prazo: 8, label: 'Norte Distante' },
  'AC': { valor: 49.9, prazo: 8, label: 'Norte Distante' },
  'RO': { valor: 44.9, prazo: 7, label: 'Norte Distante' },
  'GO': { valor: 29.9, prazo: 4, label: 'Centro-Oeste' },
  'MT': { valor: 34.9, prazo: 5, label: 'Centro-Oeste' },
  'MS': { valor: 34.9, prazo: 5, label: 'Centro-Oeste' },
  'DF': { valor: 29.9, prazo: 4, label: 'Centro-Oeste' },
  'MG': { valor: 34.9, prazo: 5, label: 'Sudeste' },
  'SP': { valor: 39.9, prazo: 6, label: 'Sudeste' },
  'RJ': { valor: 39.9, prazo: 6, label: 'Sudeste' },
  'ES': { valor: 39.9, prazo: 6, label: 'Sudeste' },
  'PR': { valor: 44.9, prazo: 7, label: 'Sul' },
  'SC': { valor: 44.9, prazo: 7, label: 'Sul' },
  'RS': { valor: 49.9, prazo: 8, label: 'Sul' },
};
const FRETE_PADRAO = { valor: 39.9, prazo: 6, label: 'Nacional' };
const FRETE_GRATIS_ACIMA = 500;

function calcularFrete(uf) {
  if (!uf) return FRETE_PADRAO;
  return FRETE_TABELA[uf.toUpperCase()] || FRETE_PADRAO;
}

function obterFreteAtual() {
  const enderecoSalvo = localStorage.getItem('loja_endereco');
  if (!enderecoSalvo) return null;
  const dados = JSON.parse(enderecoSalvo);
  if (!dados.estado) return null;
  return calcularFrete(dados.estado);
}

function calcularTotalComFrete(subtotal) {
  const frete = obterFreteAtual();
  if (!frete) return { subtotal, frete: 0, total: subtotal, freteGratis: subtotal >= FRETE_GRATIS_ACIMA };
  const freteGratis = subtotal >= FRETE_GRATIS_ACIMA || frete.valor === 0;
  const valorFrete = freteGratis ? 0 : frete.valor;
  return { subtotal, frete: valorFrete, total: subtotal + valorFrete, freteGratis };
}

function formatarCEPCarrinho(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
  input.value = v;
  // Se o CEP estiver completo, calcular automaticamente
  if (v.replace(/\D/g,'').length === 8) calcularFreteCarrinho();
}

async function calcularFreteCarrinho() {
  const input = document.getElementById('cartCepInput');
  const resultado = document.getElementById('freteResultado');
  if (!input || !resultado) return;

  const cep = input.value.replace(/\D/g, '');
  if (cep.length !== 8) {
    resultado.className = 'frete-resultado erro';
    resultado.style.display = 'block';
    resultado.innerHTML = '⚠️ Digite um CEP válido com 8 dígitos.';
    return;
  }

  resultado.className = 'frete-resultado';
  resultado.style.display = 'block';
  resultado.innerHTML = '⏳ Buscando...';

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (data.erro) {
      resultado.className = 'frete-resultado erro';
      resultado.innerHTML = '❌ CEP não encontrado. Verifique e tente novamente.';
      return;
    }

    const uf = data.uf;
    const cidade = data.localidade;
    const frete = calcularFrete(uf);
    const subtotal = carrinho.filter(i => i.selecionado !== false).reduce((a, b) => a + (b.preco * b.qty), 0);
    const freteGratis = subtotal >= FRETE_GRATIS_ACIMA || frete.valor === 0;
    const valorFrete = freteGratis ? 0 : frete.valor;

    // Salva o estado para usar no checkout e no total do carrinho
    const enderecoTemp = JSON.parse(localStorage.getItem('loja_endereco') || '{}');
    enderecoTemp.estado = uf;
    enderecoTemp.cidade = cidade;
    enderecoTemp.cep = input.value;
    localStorage.setItem('loja_endereco', JSON.stringify(enderecoTemp));

    if (freteGratis) {
      resultado.className = 'frete-resultado gratis';
      resultado.innerHTML = `
        🎉 <strong>Frete GRÁTIS</strong> para ${cidade} - ${uf}!<br>
        <span style="font-size:12px;opacity:0.8;">${frete.valor === 0 ? 'Entrega no mesmo estado (Piauí)' : `Compra acima de R$ ${FRETE_GRATIS_ACIMA.toLocaleString('pt-BR',{minimumFractionDigits:2})}`} • Prazo: ${frete.prazo} dia(s) útil após envio</span>
      `;
    } else {
      resultado.className = 'frete-resultado sucesso';
      resultado.innerHTML = `
        📦 Frete para <strong>${cidade} - ${uf}</strong><br>
        <strong style="color:var(--accent);font-size:16px;">R$ ${valorFrete.toLocaleString('pt-BR',{minimumFractionDigits:2})}</strong>
        &nbsp;•&nbsp; Prazo: <strong>${frete.prazo} dia(s) útil</strong> após envio<br>
        <span style="font-size:11px;opacity:0.7;">Frete grátis em compras acima de R$ ${FRETE_GRATIS_ACIMA.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span>
      `;
    }

    // Atualiza o total do carrinho com o frete calculado
    atualizarCarrinho();

  } catch (e) {
    resultado.className = 'frete-resultado erro';
    resultado.innerHTML = '❌ Erro ao buscar CEP. Verifique sua conexão.';
  }
}

function debounce(fn, delay) {
  return function(...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function loadFromLocalStorage() {
  const savedCart = localStorage.getItem('loja_carrinho');
  const savedOrders = localStorage.getItem('loja_pedidos');
  const savedStock = localStorage.getItem('loja_estoque');

  if (savedCart) carrinho = JSON.parse(savedCart);
  if (savedOrders) pedidosRealizados = JSON.parse(savedOrders);
  if (savedStock) {
    const estoqueMap = JSON.parse(savedStock);
    produtos.forEach(produto => {
      if (estoqueMap[produto.id] !== undefined) {
        produto.estoque = estoqueMap[produto.id];
      }
    });
  }
}

function saveToLocalStorage() {
  localStorage.setItem('loja_carrinho', JSON.stringify(carrinho));
  localStorage.setItem('loja_pedidos', JSON.stringify(pedidosRealizados));
  const estoqueMap = {};
  produtos.forEach(produto => {
    estoqueMap[produto.id] = produto.estoque;
  });
  localStorage.setItem('loja_estoque', JSON.stringify(estoqueMap));
}

function showToast(msg = 'PRODUTO ADICIONADO! 🎮', type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `toast ${type}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function adicionarAoCarrinho(id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;

  if (p.estoque <= 0) {
    showToast('Produto esgotado! ❌', 'error');
    return;
  }

  const preco = p.preco - (p.preco * p.desconto / 100);
  const item = carrinho.find(x => x.id === id);

  if (item) {
    if (item.qty < p.estoque) {
      item.qty++;
    } else {
      showToast('Estoque insuficiente! ❌', 'error');
      return;
    }
  } else {
    carrinho.push({
      id: p.id,
      nome: p.nome,
      preco: preco,
      img: p.img,
      qty: 1,
      selecionado: true,
      categoria: p.categoria
    });
  }

  p.estoque--;
  atualizarCarrinho();
  showToast(`${p.nome} adicionado! 🎮`, 'success');
  saveToLocalStorage();
}

function atualizarCarrinho() {
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const cartItems = document.getElementById('cartItems');

  const qtdTotal = carrinho.reduce((a, b) => a + b.qty, 0);
  if (cartCount) cartCount.textContent = qtdTotal;

  const totalSelecionado = carrinho.filter(item => item.selecionado !== false).reduce((a, b) => a + (b.preco * b.qty), 0);
  const { frete, total: totalComFrete, freteGratis } = calcularTotalComFrete(totalSelecionado);
  const freteInfo = obterFreteAtual();

  if (cartTotal) {
    const freteInfo = obterFreteAtual();
    if (!freteInfo && totalSelecionado > 0) {
      cartTotal.innerHTML = `
        <div style="text-align:right;">
          <div style="font-size:13px;color:#aaa;margin-bottom:2px;">Subtotal: R$ ${totalSelecionado.toLocaleString('pt-BR',{minimumFractionDigits:2})}</div>
          <div style="font-size:12px;color:rgba(168,85,247,0.8);">+ Frete: informe o CEP ↑</div>
        </div>
      `;
    } else {
      cartTotal.innerHTML = `
        <div style="text-align:right;">
          <div style="font-size:14px;color:#aaa;margin-bottom:4px;">
            Subtotal: R$ ${totalSelecionado.toLocaleString('pt-BR',{minimumFractionDigits:2})}
          </div>
          <div style="font-size:13px;color:${freteGratis ? '#10b981' : '#aaa'};margin-bottom:4px;">
            Frete: ${freteGratis ? '🎉 GRÁTIS' : `R$ ${frete.toLocaleString('pt-BR',{minimumFractionDigits:2})}`}
            ${freteInfo && !freteGratis ? `<span style="font-size:11px;">(${freteInfo.prazo}d úteis)</span>` : ''}
          </div>
          <div style="font-size:22px;font-weight:900;color:var(--accent);">
            R$ ${totalComFrete.toLocaleString('pt-BR',{minimumFractionDigits:2})}
          </div>
          ${!freteGratis && totalSelecionado > 0 ? `<div style="font-size:11px;color:#888;margin-top:4px;">Frete grátis acima de R$ ${FRETE_GRATIS_ACIMA.toLocaleString('pt-BR',{minimumFractionDigits:2})}</div>` : ''}
        </div>
      `;
    }
  }

  if (cartItems) {
    if (carrinho.length === 0) {
      cartItems.innerHTML = '<p style="text-align: center; color: #888; padding: 40px 20px;">Seu carrinho está vazio 🛒</p>';
    } else {
      cartItems.innerHTML = carrinho.map(c => {
        const subtotal = c.preco * c.qty;
        return `
          <div class="cart-item-ui ${c.selecionado ? 'selected' : 'not-selected'}">
            <input type="checkbox" class="cart-checkbox" ${c.selecionado ? 'checked' : ''} onchange="toggleSelecionarItem(${c.id})">
            <img src="${c.img}" alt="${c.nome}" class="cart-img-mini" loading="lazy">
            <div style="flex: 1;">
              <h4 style="margin: 0 0 5px 0; font-size: 14px;">${c.nome}</h4>
              <p style="margin: 0; font-size: 12px; color: #888;">${c.categoria}</p>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                <button onclick="mudarQtd(${c.id}, -1)" style="width: 24px; height: 24px; background: #2b2b38; border: none; border-radius: 4px; color: white; cursor: pointer;">-</button>
                <span style="width: 30px; text-align: center; font-weight: bold;">${c.qty}</span>
                <button onclick="mudarQtd(${c.id}, 1)" style="width: 24px; height: 24px; background: #2b2b38; border: none; border-radius: 4px; color: white; cursor: pointer;">+</button>
                <button onclick="removerDoCarrinho(${c.id})" style="margin-left: auto; background: #8b0000; border: none; border-radius: 4px; color: white; padding: 4px 8px; cursor: pointer; font-size: 12px;">X</button>
              </div>
            </div>
            <div class="cart-item-price">R$ ${subtotal.toFixed(2).replace('.', ',')}</div>
          </div>
        `;
      }).join('');
    }
  }

  saveToLocalStorage();
}

function removerDoCarrinho(id) {
  const p = produtos.find(x => x.id === id);
  const item = carrinho.find(x => x.id === id);
  if (item && p) {
    p.estoque += item.qty;
    carrinho = carrinho.filter(x => x.id !== id);
    atualizarCarrinho();
    showToast('Produto removido', 'info');
  }
}

function mudarQtd(id, d) {
  const i = carrinho.find(x => x.id === id);
  const p = produtos.find(x => x.id === id);

  if (i && p) {
    if (d > 0 && p.estoque < d) {
      showToast('Estoque insuficiente! ❌', 'error');
      return;
    }
    i.qty += d;
    p.estoque -= d;
    if (i.qty <= 0) removerDoCarrinho(id);
  }
  atualizarCarrinho();
}

function toggleSelecionarItem(id) {
  const item = carrinho.find(x => x.id === id);
  if (item) {
    item.selecionado = !item.selecionado;
    atualizarCarrinho();
  }
}

function toggleCart(s) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.toggle('open', s);
  if (overlay) overlay.classList.toggle('open', s);
}

function renderProdutos(lista = produtos) {
  const grid = document.getElementById('grid');
  const itemsCount = document.getElementById('itemsCount');
  if (itemsCount) itemsCount.textContent = lista.length;
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">Nenhum produto encontrado 😢</div>';
    return;
  }

  grid.innerHTML = lista.map(p => {
    const precoComDesconto = p.preco - (p.preco * p.desconto / 100);
    const estoque = produtos.find(x => x.id === p.id)?.estoque || 0;

    return `
      <div class="card">
        <div class="card-img-container" onclick="abrirDetalhesProduto(${p.id})" role="button" tabindex="0">
          ${p.categoria === CATEGORIAS.FUTURO ? '<div class="badge-futuro">DO FUTURO</div>' : ''}
          ${p.desconto > 0 ? `<div class="badge-desconto">-${p.desconto}%</div>` : ''}
          ${estoque <= 0 ? '<div class="badge-esgotado">ESGOTADO</div>' : ''}
          <img src="${p.img}" class="card-img" alt="${p.nome}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${p.nome}</h3>
          <p class="card-categoria">${p.categoria} • ${p.plataforma}</p>
          <div class="price-section">
            ${p.desconto > 0 ? `<span class="original-price">R$ ${p.preco.toLocaleString('pt-BR')}</span>` : ''}
            <span class="card-price">R$ ${precoComDesconto.toFixed(2).replace('.', ',')}</span>
          </div>
          <p class="stock-label">${estoque > 0 ? `Estoque: ${estoque} unidade${estoque === 1 ? '' : 's'}` : 'Sem estoque'}</p>
          <div class="rating">
            <span class="stars">⭐ ${p.avaliacao}</span>
            <span class="review-count">(${p.reviews})</span>
          </div>
          <button class="add-btn" onclick="adicionarAoCarrinho(${p.id})" ${estoque <= 0 ? 'disabled' : ''}>
            ${estoque <= 0 ? 'ESGOTADO' : '🛒 ADICIONAR'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function filtrarProdutos(termo) {
  const termoLower = termo.toLowerCase();
  const produtosFiltrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termoLower) ||
    p.descricao.toLowerCase().includes(termoLower) ||
    p.categoria.toLowerCase().includes(termoLower) ||
    p.plataforma.toLowerCase().includes(termoLower) ||
    p.genero.toLowerCase().includes(termoLower)
  );
  renderProdutos(produtosFiltrados);
}

function aplicarFiltros(opcoes = {}) {
  let filtrados = [...produtos];

  if (opcoes.termo) {
    const termoLower = opcoes.termo.toLowerCase();
    filtrados = filtrados.filter(p =>
      p.nome.toLowerCase().includes(termoLower) ||
      p.descricao.toLowerCase().includes(termoLower) ||
      p.categoria.toLowerCase().includes(termoLower) ||
      p.plataforma.toLowerCase().includes(termoLower) ||
      p.genero.toLowerCase().includes(termoLower)
    );
  }

  const categoria = opcoes.categoria === 'Video Games' ? CATEGORIAS.CONSOLES : opcoes.categoria;
  if (categoria && categoria !== 'Todos' && categoria !== 'Todas') {
    filtrados = filtrados.filter(p => p.categoria === categoria);
  }
  if (opcoes.plataforma && opcoes.plataforma !== 'Todos' && opcoes.plataforma !== 'Todas') {
    filtrados = filtrados.filter(p => p.plataforma === opcoes.plataforma);
  }
  if (opcoes.genero && opcoes.genero !== 'Todos' && opcoes.genero !== 'Todas') {
    filtrados = filtrados.filter(p => p.genero === opcoes.genero);
  }
  if (opcoes.precoMin) {
    filtrados = filtrados.filter(p => p.preco >= opcoes.precoMin);
  }
  if (opcoes.precoMax) {
    filtrados = filtrados.filter(p => p.preco <= opcoes.precoMax);
  }
  if (opcoes.classificacao && opcoes.classificacao !== 'Todas') {
    filtrados = filtrados.filter(p => p.classificacao === opcoes.classificacao);
  }
  if (opcoes.disponibilidade === 'em-estoque') {
    filtrados = filtrados.filter(p => p.estoque > 0);
  }

  if (opcoes.ordenacao === 'preco-asc') {
    filtrados.sort((a, b) => a.preco - b.preco);
  } else if (opcoes.ordenacao === 'preco-desc') {
    filtrados.sort((a, b) => b.preco - a.preco);
  } else if (opcoes.ordenacao === 'nome') {
    filtrados.sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (opcoes.ordenacao === 'mais-vendidos') {
    filtrados.sort((a, b) => b.vendas - a.vendas);
  } else if (opcoes.ordenacao === 'melhor-avaliacao') {
    filtrados.sort((a, b) => b.avaliacao - a.avaliacao);
  }

  renderProdutos(filtrados);
  const titleEl = document.getElementById('categoryTitle');
  if (titleEl) {
    if (opcoes.categoria === 'Video Games') {
      titleEl.textContent = 'Vídeo Games';
    } else if (opcoes.categoria && opcoes.categoria !== 'Todos' && opcoes.categoria !== 'Todas') {
      titleEl.textContent = opcoes.categoria;
    } else {
      titleEl.textContent = 'Todos os Itens';
    }
  }
}

function atualizarFiltros() {
  const termo = document.getElementById('searchInput')?.value.trim() || '';
  const ordenacao = document.getElementById('sortSelect')?.value || '';
  const disponibilidade = document.getElementById('availabilitySelect')?.value || '';

  currentFilters.termo = termo;
  currentFilters.ordenacao = ordenacao;
  currentFilters.disponibilidade = disponibilidade;

  aplicarFiltros(currentFilters);
}

const atualizarFiltrosDebounced = debounce(atualizarFiltros, 300);

function filtrarCategoria(categoria) {
  currentFilters.categoria = categoria;
  atualizarCategoriaTabs(categoria);
  aplicarFiltros(currentFilters);
}

function atualizarCategoriaTabs(categoria) {
  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoria);
  });
}

function getSelectedPaymentMethod() {
  return document.querySelector('.payment-option.selected')?.id.replace('opt-', '') || 'cartao';
}

function selecionarCartaoTipo(tipo) {
  selectedCardType = tipo;
  const creditBtn = document.getElementById('card-type-credit');
  const debitBtn = document.getElementById('card-type-debit');
  if (creditBtn) creditBtn.classList.toggle('active', tipo === 'credito');
  if (debitBtn) debitBtn.classList.toggle('active', tipo === 'debito');
  const parcelasSelect = document.getElementById('parcelas');
  if (parcelasSelect) {
    if (tipo === 'debito') {
      parcelasSelect.innerHTML = '<option value="1">Débito em 1x</option>';
    } else {
      const total = carrinho.filter(item => item.selecionado !== false).reduce((a, b) => a + (b.preco * b.qty), 0);
      parcelasSelect.innerHTML = Array.from({ length: 12 }, (_, i) => {
        const parcelas = i + 1;
        const valorParcela = total / parcelas;
        const juros = i === 0 ? '(sem juros)' : '(com juros)';
        return `<option value="${parcelas}">${parcelas}x de R$ ${valorParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} ${juros}</option>`;
      }).join('');
    }
  }
}

function abrirPedidos(orderId = '') {
  const homePage = document.getElementById('homePage');
  const checkoutPage = document.getElementById('checkoutPage');
  const ordersPage = document.getElementById('ordersPage');

  if (homePage) homePage.style.display = 'none';
  if (checkoutPage) checkoutPage.style.display = 'none';
  if (ordersPage) ordersPage.style.display = 'block';

  renderOrderHistory(orderId);
  window.location.hash = '#pedidos';
}

function renderOrderHistory(selectedOrderId = '') {
  const ordersList = document.getElementById('ordersList');
  if (!ordersList) return;

  if (!pedidosRealizados.length) {
    ordersList.innerHTML = '<div class="empty-orders">Nenhum pedido encontrado ainda. Finalize uma compra para começar.</div>';
    return;
  }

  ordersList.innerHTML = pedidosRealizados.map(pedido => {
    const itemsHtml = pedido.itens.map(item => `
      <div class="order-item">
        <span>${item.nome}</span>
        <span>${item.qtd}x</span>
        <span>R$ ${item.subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
      </div>
    `).join('');

    const routeHtml = pedido.etapas.map(etapa => `
      <div class="route-step ${etapa.concluido ? 'done' : ''}">
        <span class="step-name">${etapa.nome}</span>
        <span class="step-date">${etapa.data || 'Aguardando'}</span>
      </div>
    `).join('');

    return `
      <div class="order-card ${pedido.numero === selectedOrderId ? 'focused' : ''}">
        <div class="order-card-header">
          <div>
            <strong>🧾 Pedido ${pedido.numero}</strong>
            <p>${pedido.data} • ${pedido.pagamento.parcelas}x • ${pedido.status === 'Processando' ? '⏳ Processando' : pedido.status}</p>
          </div>
          <span class="order-total">💰 R$ ${pedido.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </div>
        <div class="order-items-list">
          ${itemsHtml}
          <div style="border-top:1px solid rgba(168,85,247,0.15);padding-top:10px;font-size:13px;color:#aaa;display:flex;justify-content:space-between;">
            <span>Frete ${pedido.freteLabel ? `(${pedido.freteLabel})` : ''}:</span>
            <span style="color:${pedido.frete===0?'#10b981':'#aaa'}">${pedido.frete === 0 ? 'GRÁTIS' : `R$ ${(pedido.frete||0).toLocaleString('pt-BR',{minimumFractionDigits:2})}`}</span>
          </div>
        </div>
        <div class="order-route-title">🚚 Rota do Pedido</div>
        <div class="order-route">
          ${routeHtml}
        </div>
      </div>
    `;
  }).join('');
}

function obterMaisVendidos() {
  return [...produtos].sort((a, b) => b.vendas - a.vendas).slice(0, 6);
}

function irParaCheckout() {
  const carrinhoSelecionado = carrinho.filter(item => item.selecionado !== false);

  if (!carrinhoSelecionado.length) {
    showToast('Selecione pelo menos um produto!', 'error');
    return;
  }

  const total = carrinhoSelecionado.reduce((a, b) => a + (b.preco * b.qty), 0);
  const items = carrinhoSelecionado.map(c => `
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px;">
      <span>${c.nome}</span>
      <span>${c.qty}x R$ ${(c.preco).toLocaleString('pt-BR')}</span>
    </div>
  `).join('');

  const { frete, total: totalComFrete, freteGratis } = calcularTotalComFrete(total);
  const freteInfo = obterFreteAtual();

  const orderItems = document.getElementById('orderItems');
  const orderTotal = document.getElementById('orderTotal');
  if (orderItems) {
    orderItems.innerHTML = items + `
      <div style="border-top:1px solid rgba(168,85,247,0.2);margin-top:10px;padding-top:10px;">
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#aaa;margin-bottom:4px;">
          <span>Subtotal:</span><span>R$ ${total.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:${freteGratis?'#10b981':'#aaa'};margin-bottom:4px;">
          <span>Frete ${freteInfo ? `(${freteInfo.label})` : ''}:</span>
          <span>${freteGratis ? 'GRÁTIS 🎉' : `R$ ${frete.toLocaleString('pt-BR',{minimumFractionDigits:2})}`}</span>
        </div>
        ${freteInfo && !freteGratis ? `<div style="font-size:11px;color:#666;text-align:right;">Prazo estimado: ${freteInfo.prazo} dia(s) útil após envio</div>` : ''}
      </div>
    `;
  }
  if (orderTotal) orderTotal.textContent = `R$ ${totalComFrete.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;

  const homePage = document.getElementById('homePage');
  const checkoutPage = document.getElementById('checkoutPage');
  if (homePage) homePage.style.display = 'none';
  if (checkoutPage) checkoutPage.style.display = 'block';
  toggleCart(false);
  window.scrollTo(0, 0);
}

function voltarHome() {
  const homePage = document.getElementById('homePage');
  const checkoutPage = document.getElementById('checkoutPage');
  const ordersPage = document.getElementById('ordersPage');
  if (homePage) homePage.style.display = 'block';
  if (checkoutPage) checkoutPage.style.display = 'none';
  if (ordersPage) ordersPage.style.display = 'none';

  const stepAddress = document.getElementById('step-address');
  const stepPayment = document.getElementById('step-payment');
  if (stepAddress) stepAddress.style.display = 'block';
  if (stepPayment) stepPayment.style.display = 'none';
  window.location.hash = '#home';
  window.scrollTo(0, 0);
}

function scrollToCollection() {
  const produtosSection = document.getElementById('produtos');
  if (produtosSection) {
    produtosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
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

function formatarCartao(input) {
  let value = input.value.replace(/\s/g, '');
  let formatted = '';
  for (let i = 0; i < value.length; i += 4) {
    if (i > 0) formatted += ' ';
    formatted += value.slice(i, i + 4);
  }
  input.value = formatted;
}

function formatarValidade(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length >= 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);
  }
  input.value = value;
}

async function buscarCEP() {
  const cepInput = document.getElementById('cep');
  if (!cepInput) return;

  const cepValue = cepInput.value.replace(/\D/g, '');

  if (cepValue.length !== 8) {
    showToast('CEP deve ter 8 dígitos!', 'error');
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
    const data = await response.json();

    if (data.erro) {
      showToast('CEP não encontrado!', 'error');
      return;
    }

    const enderecoInput = document.getElementById('endereco');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');

    if (enderecoInput) enderecoInput.value = data.logradouro || '';
    if (cidadeInput) cidadeInput.value = data.localidade || '';
    if (estadoInput) estadoInput.value = data.uf || '';

    showToast('Endereço carregado! ✅', 'success');
    // Salva estado temporariamente para calcular frete
    const estadoTemp = data.uf || '';
    if (estadoTemp) {
      const freteTemp = calcularFrete(estadoTemp);
      const prazoMsg = freteTemp.valor === 0 ? 'Frete grátis para o Piauí! 🎉' : `Frete para ${estadoTemp}: R$ ${freteTemp.valor.toFixed(2).replace('.',',')} (${freteTemp.prazo} dia(s) útil)`;
      setTimeout(() => showToast(prazoMsg, freteTemp.valor === 0 ? 'success' : 'info'), 1800);
    }
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    showToast('Erro ao buscar CEP!', 'error');
  }
}

function goToPayment() {
  const nome = document.getElementById('nome')?.value.trim() || '';
  const cep = document.getElementById('cep')?.value.trim() || '';
  const endereco = document.getElementById('endereco')?.value.trim() || '';
  const numero = document.getElementById('numero')?.value.trim() || '';
  const cidade = document.getElementById('cidade')?.value.trim() || '';
  const complemento = document.getElementById('complemento')?.value.trim() || '';
  const email = document.getElementById('email')?.value.trim() || '';
  const telefone = document.getElementById('telefone')?.value.trim() || '';

  const estado = document.getElementById('estado')?.value.trim() || '';

  if (!nome) {
    showToast('Nome obrigatório!', 'error');
    return;
  }
  if (cep.length < 9) {
    showToast('CEP inválido!', 'error');
    return;
  }
  if (!endereco) {
    showToast('Endereço obrigatório!', 'error');
    return;
  }
  if (!numero) {
    showToast('Número obrigatório!', 'error');
    return;
  }
  if (!cidade) {
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

  const enderecoDados = { nome, cep, endereco, numero, complemento, cidade, estado, email, telefone };
  localStorage.setItem('loja_endereco', JSON.stringify(enderecoDados));

  const stepAddress = document.getElementById('step-address');
  const stepPayment = document.getElementById('step-payment');
  if (stepAddress) stepAddress.style.display = 'none';
  if (stepPayment) stepPayment.style.display = 'block';

  const payContent = document.getElementById('pay-content');
  if (payContent) {
    payContent.innerHTML = `
      <div style="background: #11111a; padding: 15px; border-radius: 12px; margin-bottom: 15px;">
        <p style="margin: 5px 0; font-size: 14px;"><strong>Nome:</strong> ${nome}</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Endereço:</strong> ${endereco}, ${numero} ${complemento ? '- ' + complemento : ''}</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Cidade:</strong> ${cidade}</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>CEP:</strong> ${cep}</p>
      </div>
      <div style="background: #11111a; padding: 15px; border-radius: 12px;">
        <p style="margin: 5px 0; font-size: 14px;"><strong>E-mail:</strong> ${email}</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Telefone:</strong> ${telefone}</p>
      </div>
    `;
  }

  selecionarPagamento('cartao');
}

function selecionarPagamento(metodo) {
  const options = document.querySelectorAll('.payment-option');
  options.forEach(el => el.classList.remove('selected'));
  const selected = document.getElementById(`opt-${metodo}`);
  if (selected) selected.classList.add('selected');

  const detailsDiv = document.getElementById('payment-details');
  if (!detailsDiv) return;

  const carrinhoSelecionado = carrinho.filter(item => item.selecionado !== false);
  const total = carrinhoSelecionado.reduce((a, b) => a + (b.preco * b.qty), 0);
  const { frete, total: totalComFrete, freteGratis } = calcularTotalComFrete(total);
  const freteInfo = obterFreteAtual();

  if (metodo === 'cartao') {
    selectedCardType = 'credito';
    detailsDiv.innerHTML = `
      <div class="payment-detail-box">
        <h4>Pagamento com Cartão</h4>
        <div class="card-switch">
          <button id="card-type-credit" class="payment-mode-button active" onclick="selecionarCartaoTipo('credito')">Crédito</button>
          <button id="card-type-debit" class="payment-mode-button" onclick="selecionarCartaoTipo('debito')">Débito</button>
        </div>
        <input type="text" id="card-holder" placeholder="Nome no cartão" class="pay-input" style="margin-bottom: 10px;">
        <input type="text" id="card-number" placeholder="1234 5678 9012 3456" class="pay-input" maxlength="19" oninput="formatarCartao(this)" style="margin-bottom: 10px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
          <input type="text" id="card-exp" placeholder="MM/AA" class="pay-input" maxlength="5" oninput="formatarValidade(this)">
          <input type="text" id="card-cvv" placeholder="CVV" class="pay-input" maxlength="4" inputmode="numeric">
        </div>
        <select id="parcelas" class="pay-input" style="margin-bottom: 15px;"></select>
        <div class="payment-summary">
          <p>Subtotal dos produtos:</p>
          <span style="font-size:13px;color:#aaa;">R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          <p style="margin-top:8px;">Frete ${freteInfo ? `(${freteInfo.label})` : ''}:</p>
          <span style="font-size:13px;color:${freteGratis?'#10b981':'#aaa'};">${freteGratis ? 'GRÁTIS 🎉' : `R$ ${frete.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}${freteInfo && !freteGratis ? ` — ${freteInfo.prazo}d úteis` : ''}</span>
          <p style="margin-top:8px;">Total final:</p>
          <strong>R$ ${totalComFrete.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>
        </div>
      </div>
    `;
    selecionarCartaoTipo('credito');
  } else if (metodo === 'pix') {
    detailsDiv.innerHTML = `
      <div class="payment-detail-box">
        <h4>PIX Instantâneo</h4>
        <p>Pague usando o aplicativo do seu banco. Escaneie o QR code ou copie a chave abaixo.</p>
        <div class="pix-qr-wrapper">
          <div id="pix-qr"></div>
          <div class="pix-key">PIX: 123e4567-e89b-12d3-a456-426614174000</div>
        </div>
        <div class="payment-summary" style="margin-top: 15px;">
          <p>Subtotal dos produtos:</p>
          <span style="font-size:13px;color:#aaa;">R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          <p style="margin-top:8px;">Frete ${freteInfo ? `(${freteInfo.label})` : ''}:</p>
          <span style="font-size:13px;color:${freteGratis?'#10b981':'#aaa'};">${freteGratis ? 'GRÁTIS 🎉' : `R$ ${frete.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}${freteInfo && !freteGratis ? ` — ${freteInfo.prazo}d úteis` : ''}</span>
          <p style="margin-top:8px;">Total final:</p>
          <strong>R$ ${totalComFrete.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>
        </div>
      </div>
    `;
    gerarQRCodePix();
  } else if (metodo === 'paypal') {
    detailsDiv.innerHTML = `
      <div class="payment-detail-box">
        <h4>PayPal</h4>
        <p>Você será redirecionado para concluir o pagamento com segurança.</p>
        <div class="payment-summary" style="margin-top: 15px;">
          <p>Subtotal dos produtos:</p>
          <span style="font-size:13px;color:#aaa;">R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          <p style="margin-top:8px;">Frete ${freteInfo ? `(${freteInfo.label})` : ''}:</p>
          <span style="font-size:13px;color:${freteGratis?'#10b981':'#aaa'};">${freteGratis ? 'GRÁTIS 🎉' : `R$ ${frete.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}${freteInfo && !freteGratis ? ` — ${freteInfo.prazo}d úteis` : ''}</span>
          <p style="margin-top:8px;">Total final:</p>
          <strong>R$ ${totalComFrete.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>
        </div>
      </div>
    `;
  }

  detailsDiv.style.display = 'block';
}

function gerarQRCodePix() {
  const qrcodeContainer = document.getElementById('pix-qr');
  if (!qrcodeContainer || typeof QRCode !== 'function') return;
  qrcodeContainer.innerHTML = '';
  new QRCode(qrcodeContainer, {
    text: 'PIX: 123e4567-e89b-12d3-a456-426614174000',
    width: 160,
    height: 160,
    colorDark: '#ffffff',
    colorLight: '#0a0a10',
    correctLevel: QRCode.CorrectLevel.H
  });
}

function montarMensagemWhatsApp(pedido, enderecoDados) {
  const itens = pedido.itens
    .map(item => `• ${item.qtd}x ${item.nome} — R$ ${(item.subtotal).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`)
    .join('%0A');

  const enderecoCompleto = `${enderecoDados.endereco}, ${enderecoDados.numero}${enderecoDados.complemento ? ' - ' + enderecoDados.complemento : ''}, ${enderecoDados.cidade} - CEP ${enderecoDados.cep}`;

  return `Novo pedido ${pedido.numero}%0A%0ACliente: ${enderecoDados.nome}%0ATelefone: ${enderecoDados.telefone}%0AEmail: ${enderecoDados.email}%0A%0AItens:%0A${itens}%0A%0ATotal: R$ ${pedido.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}%0APagamento: ${pedido.pagamento.metodo}%0AEntrega: ${enderecoCompleto}%0AData: ${pedido.data}`;
}

function enviarWhatsAppPedido(pedido, enderecoDados) {
  const mensagem = montarMensagemWhatsApp(pedido, enderecoDados);
  const linkWA = `https://wa.me/5589981287978?text=${mensagem}`;
  
  // Abre o WhatsApp com a mensagem pronta (usuário envia manualmente)
  window.open(linkWA, '_blank', 'width=800,height=600');
}

function abrirConfirmacaoPorEmail(pedido, enderecoDados) {
  const produtosTexto = pedido.itens
    .map(i => `- ${i.qtd}x ${i.nome} — R$ ${(i.subtotal).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`)
    .join('\n');

  const corpo = `Olá ${enderecoDados.nome},\n\nSegue a confirmação do pedido #${pedido.numero}:\n\n${produtosTexto}\n\nTotal: R$ ${pedido.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\nPagamento: ${pedido.pagamento.metodo}\nEntrega: ${enderecoDados.endereco}, ${enderecoDados.numero}${enderecoDados.complemento ? ' - ' + enderecoDados.complemento : ''}\n${enderecoDados.cidade} - CEP ${enderecoDados.cep}`;

  const mailto = `mailto:${encodeURIComponent(enderecoDados.email)}?subject=${encodeURIComponent(`Confirmação do pedido #${pedido.numero}`)}&body=${encodeURIComponent(corpo)}`;
  window.location.href = mailto;
}

async function enviarConfirmacaoPedido(pedido, enderecoDados) {
  const emailParams = {
    to_email: enderecoDados.email,
    to_name: enderecoDados.nome,
    pedido_numero: pedido.numero,
    produtos: pedido.itens
      .map(i => `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;">${i.nome}</td><td style="padding: 8px; text-align: center; border-bottom: 1px solid #eee;">${i.qtd}x</td><td style="padding: 8px; text-align: right; border-bottom: 1px solid #eee;">R$ ${(i.subtotal).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td></tr>`)
      .join(''),
    total: pedido.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
    endereco: enderecoDados.endereco,
    numero: enderecoDados.numero,
    complemento: enderecoDados.complemento || 'N/A',
    cidade: enderecoDados.cidade,
    cep: enderecoDados.cep,
    telefone: enderecoDados.telefone,
    metodo_pagamento: pedido.pagamento.metodo
  };

  try {
    if (!window.emailjs || typeof window.emailjs.send !== 'function') {
      throw new Error('EmailJS não carregado');
    }

    await window.emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailParams);
    showToast('Confirmação enviada por email!', 'success');
  } catch (err) {
    console.log('Erro ao enviar email via EmailJS:', err);
    showToast('Falha ao enviar email automático. Abrindo seu e-mail...', 'error');
    abrirConfirmacaoPorEmail(pedido, enderecoDados);
  }

  enviarWhatsAppPedido(pedido, enderecoDados);
}

function formatarTelefone(input) {
  let valor = input.value.replace(/\D/g, '');
  if (valor.length > 11) valor = valor.slice(0, 11);
  if (valor.length > 7) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
  } else if (valor.length > 2) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  }
  input.value = valor;
}

function finalizarCompra() {
  const btn = event.target;
  const carrinhoSelecionado = carrinho.filter(item => item.selecionado !== false);
  if (carrinhoSelecionado.length === 0) {
    showToast('Carrinho vazio!', 'error');
    return;
  }

  const endereco = localStorage.getItem('loja_endereco');
  if (!endereco) {
    showToast('Dados de entrega não encontrados!', 'error');
    return;
  }

  const metodoSelecionado = getSelectedPaymentMethod();
  const paymentLabel = metodoSelecionado === 'pix' ? 'PIX' : metodoSelecionado === 'paypal' ? 'PayPal' : `Cartão - ${selectedCardType === 'debito' ? 'Débito' : 'Crédito'}`;

  if (metodoSelecionado === 'cartao') {
    const cardNumber = document.getElementById('card-number')?.value || '';
    const cardHolder = document.getElementById('card-holder')?.value.trim() || '';
    const cardExp = document.getElementById('card-exp')?.value || '';
    const cardCvv = document.getElementById('card-cvv')?.value || '';

    if (!cardHolder) {
      showToast('Nome do cartão obrigatório!', 'error');
      return;
    }
    if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
      showToast('Número do cartão inválido!', 'error');
      return;
    }
    if (!cardExp || cardExp.length < 5) {
      showToast('Validade do cartão inválida!', 'error');
      return;
    }
    if (!cardCvv || cardCvv.length < 3) {
      showToast('CVV inválido!', 'error');
      return;
    }
  }

  const enderecoData = JSON.parse(endereco);
  const subtotalPedido = carrinhoSelecionado.reduce((a, b) => a + (b.preco * b.qty), 0);
  const { frete: fretePedido, total, freteGratis: fgPedido } = calcularTotalComFrete(subtotalPedido);
  const freteInfoPedido = obterFreteAtual();
  const numeroPedido = 'PED' + Date.now().toString().slice(-8);
  const dataPedido = new Date().toLocaleDateString('pt-BR');
  const parcelas = (metodoSelecionado === 'cartao' && selectedCardType === 'credito') ? document.getElementById('parcelas')?.value || '1' : '1';

  const pedido = {
    numero: numeroPedido,
    data: dataPedido,
    itens: carrinhoSelecionado.map(c => ({
      id: c.id,
      nome: c.nome,
      qtd: c.qty,
      preco: c.preco,
      subtotal: c.preco * c.qty
    })),
    subtotal: subtotalPedido,
    frete: fretePedido,
    total: total,
    fretePrazo: freteInfoPedido ? freteInfoPedido.prazo : 6,
    freteLabel: freteInfoPedido ? freteInfoPedido.label : 'Nacional',
    endereco: enderecoData,
    pagamento: {
      metodo: paymentLabel,
      ultimosDigitos: metodoSelecionado === 'cartao' ? document.getElementById('card-number')?.value.slice(-4) : '',
      parcelas: parcelas
    },
    status: 'Processando',
    etapas: [
      { nome: 'Pedido Confirmado', concluido: true, data: dataPedido },
      { nome: 'Pagamento Processado', concluido: metodoSelecionado === 'pix' ? true : false, data: metodoSelecionado === 'pix' ? dataPedido : '' },
      { nome: 'Separando Itens', concluido: false, data: '' },
      { nome: 'Enviado', concluido: false, data: '' },
      { nome: 'Entregue', concluido: false, data: '' }
    ]
  };

  pedidosRealizados.push(pedido);

  carrinhoSelecionado.forEach(item => {
    const p = produtos.find(x => x.id === item.id);
    if (p) p.vendas++;
  });

  carrinho = [];
  atualizarCarrinho();
  saveToLocalStorage();
  
  const enderecoDados = JSON.parse(endereco);
  enviarConfirmacaoPedido(pedido, enderecoDados);

  showToast('Pedido finalizado com sucesso! ✅', 'success');
  abrirPedidos(numeroPedido);
}

function abrirDetalhesProduto(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  const precoComDesconto = produto.preco - (produto.preco * produto.desconto / 100);
  const avaliacoesHTML = produto.avaliacoes ? produto.avaliacoes.map(avaliacao => `
    <div class="review-item">
      <div class="review-header">
        <strong>${avaliacao.usuario}</strong>
        <div class="review-stars">${'⭐'.repeat(avaliacao.nota)}</div>
      </div>
      <p class="review-text">${avaliacao.texto}</p>
    </div>
  `).join('') : '<p>Sem avaliações disponíveis.</p>';

  const detalhesHTML = `
    <div class="detalhes-overlay" onclick="fecharDetalhesProduto()"></div>
    <div class="detalhes-modal">
      <button class="close-detalhes" onclick="fecharDetalhesProduto()">✕</button>
      <div class="detalhes-container">
        <div class="detalhes-img-container">
          ${produto.categoria === CATEGORIAS.FUTURO ? '<div class="badge-futuro-grande">DO FUTURO</div>' : ''}
          ${produto.desconto > 0 ? `<div class="badge-desconto-grande">-${produto.desconto}%</div>` : ''}
          <img src="${produto.img}" class="detalhes-img" alt="${produto.nome}" loading="lazy">
        </div>
        <div class="detalhes-info">
          <h2>${produto.nome}</h2>
          <p style="color: var(--accent); font-weight: bold; margin-bottom: 15px;">${produto.categoria} • ${produto.plataforma}</p>
          <p class="detalhes-descricao">${produto.descricao}</p>
          <div class="rating-detalhes">
            <span class="stars">⭐ ${produto.avaliacao}</span>
            <span class="review-count">(${produto.reviews} avaliações)</span>
          </div>
          <div class="preco-detalhes">
            <div>
              ${produto.desconto > 0 ? `<span class="original-price">R$ ${produto.preco.toLocaleString('pt-BR')}</span><br>` : ''}
              <span class="preco-final">R$ ${precoComDesconto.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
            </div>
            ${produto.desconto > 0 ? `<span class="desconto-percentual">Economize ${produto.desconto}%</span>` : ''}
          </div>
          <div class="especificacoes">
            <h4>Especificações:</h4>
            <ul>
              <li><strong>Categoria:</strong> ${produto.categoria}</li>
              <li><strong>Plataforma:</strong> ${produto.plataforma}</li>
              <li><strong>Gênero:</strong> ${produto.genero}</li>
              <li><strong>Classificação:</strong> ${produto.classificacao}</li>
              <li><strong>Estoque:</strong> ${produto.estoque} unidades</li>
              ${produto.especificacoes.map(esp => `<li>${esp}</li>`).join('')}
            </ul>
          </div>
          <div class="opcoes-compra">
            <button class="btn-comprar" onclick="adicionarAoCarrinho(${produto.id}); setTimeout(() => fecharDetalhesProduto(), 500);" ${produto.estoque <= 0 ? 'disabled' : ''}>
              🛒 ${produto.estoque <= 0 ? 'ESGOTADO' : 'ADICIONAR AO CARRINHO'}
            </button>
            <button class="btn-comparar" onclick="fecharDetalhesProduto();">VOLTAR</button>
          </div>
          <div class="garantia-info">
            <p>✓ Garantia de 12 meses</p>
            <p>✓ Frete grátis acima de R$ 500</p>
            <p>✓ Devolução em 30 dias</p>
            <p>✓ Atendimento 24/7</p>
          </div>
          <div class="avaliacoes-section">
            <h4>Avaliações dos Clientes:</h4>
            <div class="reviews-container">${avaliacoesHTML}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', detalhesHTML);
}

function fecharDetalhesProduto() {
  const modal = document.querySelector('.detalhes-modal');
  const overlay = document.querySelector('.detalhes-overlay');

  if (modal) {
    modal.style.animation = 'slideDown 0.3s ease forwards';
    setTimeout(() => modal.remove(), 300);
  }
  if (overlay) {
    overlay.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => overlay.remove(), 300);
  }
}

window.addEventListener('load', () => {
  loadFromLocalStorage();
  renderMaisVendidos();
  renderProdutos();
  atualizarCarrinho();
});

function renderMaisVendidos() {
  const featuredGrid = document.getElementById('featuredGrid');
  if (!featuredGrid) return;

  const lista = obterMaisVendidos();
  featuredGrid.innerHTML = lista.map(p => {
    const precoComDesconto = p.preco - (p.preco * p.desconto / 100);
    return `
      <div class="featured-card" style="cursor:pointer;" onclick="abrirDetalhesProduto(${p.id})">
        <div style="position:relative;">
          ${p.desconto > 0 ? `<div class="badge-desconto" style="z-index:2;">-${p.desconto}%</div>` : ''}
          <img src="${p.img}" alt="${p.nome}" loading="lazy" style="pointer-events:none;">
        </div>
        <div class="featured-card-body">
          <span class="badge-small">${p.categoria}</span>
          <h3>${p.nome}</h3>
          ${p.desconto > 0 ? `<span style="text-decoration:line-through;color:#888;font-size:13px;">R$ ${p.preco.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span>` : ''}
          <p class="featured-price">R$ ${precoComDesconto.toFixed(2).replace('.', ',')}</p>
          <div class="rating" style="margin-bottom:8px;">
            <span class="stars">⭐ ${p.avaliacao}</span>
            <span class="review-count">(${p.reviews})</span>
          </div>
          <p class="stock-label">${p.estoque > 0 ? `Estoque: ${p.estoque}` : 'Sem estoque'}</p>
          <button class="add-btn" onclick="event.stopPropagation(); adicionarAoCarrinho(${p.id})" ${p.estoque <= 0 ? 'disabled' : ''}>${p.estoque <= 0 ? 'Esgotado' : '🛒 Adicionar'}</button>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================
// SISTEMA DE TEMA CLARO / ESCURO
// =============================================
let temaAtual = localStorage.getItem('loja_tema') || 'escuro';
let contadorAlternanciasTema = 0;
const LIMITE_EASTER_EGG = 7; // trocar 7x ativa o modo bizarro
let modoBizarroAtivo = false;
let timerBizarro = null;

function aplicarTema(tema) {
  document.body.classList.toggle('tema-claro', tema === 'claro');
  const icone = document.getElementById('themeIcon');
  if (icone) icone.textContent = tema === 'claro' ? '☀️' : '🌙';
  localStorage.setItem('loja_tema', tema);
}

function toggleTema() {
  if (modoBizarroAtivo) return;

  temaAtual = temaAtual === 'escuro' ? 'claro' : 'escuro';
  aplicarTema(temaAtual);

  contadorAlternanciasTema++;

  // Feedback sutil conforme o contador sobe
  if (contadorAlternanciasTema === 4) {
    showToast('Tá com muito tempo livre né? 👀', 'info');
  } else if (contadorAlternanciasTema === 6) {
    showToast('...', 'info');
  } else if (contadorAlternanciasTema >= LIMITE_EASTER_EGG) {
    setTimeout(ativarModoBizarro, 400);
  }
}

function ativarModoBizarro() {
  modoBizarroAtivo = true;
  contadorAlternanciasTema = 0;

  // Aplicar classe bizarra
  document.body.classList.remove('tema-claro');
  document.body.classList.add('modo-bizarro');

  // Trocar ícone do botão
  const icone = document.getElementById('themeIcon');
  if (icone) icone.textContent = '👁️';

  // Trocar título do hero
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.dataset.originalHtml = heroTitle.innerHTML;
    heroTitle.innerHTML = `O PASSADO<br><span style="color:#ff0000;text-shadow:0 0 20px #ff0000;">NÃO ESQUECE</span>`;
  }

  // Iniciar música bizarra (osciladores Web Audio API - sem CDN externo)
  iniciarMusicaBizarra();

  // Exibir mensagem perturbadora
  exibirMensagemBizarra();

  // Adicionar olho piscando
  const eye = document.createElement('div');
  eye.id = 'bizarro-eye';
  eye.textContent = '👁️';
  document.body.appendChild(eye);

  // Substituir produtos por versões perturbadoras
  substituirProdutosBizarros();

  // Mostrar banner bizarro
  exibirBannerBizarro();

  // Desativar automaticamente após 25 segundos
  timerBizarro = setTimeout(desativarModoBizarro, 25000);
}

function desativarModoBizarro() {
  modoBizarroAtivo = false;
  document.body.classList.remove('modo-bizarro');

  const icone = document.getElementById('themeIcon');
  if (icone) icone.textContent = temaAtual === 'claro' ? '☀️' : '🌙';
  aplicarTema(temaAtual);

  // Restaurar título do hero
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && heroTitle.dataset.originalHtml) {
    heroTitle.innerHTML = heroTitle.dataset.originalHtml;
    delete heroTitle.dataset.originalHtml;
  }

  pararMusicaBizarra();
  document.getElementById('bizarro-msg')?.remove();
  document.getElementById('bizarro-eye')?.remove();
  document.getElementById('bizarro-banner')?.remove();

  // Restaurar produtos normais
  renderProdutos();
  renderMaisVendidos();
  renderBanners();

  clearTimeout(timerBizarro);
  showToast('...você não deveria ter feito isso.', 'error');
  setTimeout(() => showToast('Mas tudo bem. Por enquanto.', 'info'), 2800);
}

// =============================================
// MÚSICA BIZARRA — WEB AUDIO API
// =============================================
let audioCtx = null;
let bizarroNodes = [];

function iniciarMusicaBizarra() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // Nota base perturbadora
    function criarOscilador(freq, tipo, volume, delay) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = tipo;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      // Modular frequência para efeito estranho
      osc.frequency.linearRampToValueAtTime(freq * 0.97, audioCtx.currentTime + 3);
      osc.frequency.linearRampToValueAtTime(freq * 1.03, audioCtx.currentTime + 6);
      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + delay + 0.5);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(audioCtx.currentTime + delay);
      bizarroNodes.push(osc, gain);
      return osc;
    }

    // Camadas de sons estranhos
    criarOscilador(55,  'sawtooth', 0.4, 0);     // bass grave
    criarOscilador(82,  'square',   0.25, 0.3);   // quinta dissonante
    criarOscilador(110, 'sine',     0.15, 0.6);   // oitava
    criarOscilador(146, 'sawtooth', 0.2, 1.2);    // dissonância
    criarOscilador(33,  'sine',     0.5, 0);       // sub-bass pesado

    // LFO tremolo
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.setValueAtTime(0.3, audioCtx.currentTime);
    lfoGain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(masterGain.gain);
    lfo.start();
    bizarroNodes.push(lfo, lfoGain, masterGain);

  } catch(e) { /* sem suporte a AudioContext */ }
}

function pararMusicaBizarra() {
  try {
    bizarroNodes.forEach(n => { try { n.stop?.(); n.disconnect?.(); } catch(e){} });
    bizarroNodes = [];
    audioCtx?.close();
    audioCtx = null;
  } catch(e) {}
}

// =============================================
// MENSAGENS E VISUAL BIZARRO
// =============================================
const mensagensBizarras = [
  'por que você fez isso?',
  'ele está vendo.',
  'não olhe para trás.',
  'os consoles não funcionam mais.',
  'você comprou algo que não devia.',
  'o carrinho nunca vai esvaziar.',
  'os produtos estão te olhando.',
  '████████████ — ACESSO NEGADO',
  'isso era para ser uma loja normal.',
  'saia enquanto pode.',
  'o frete chegou. mas não era seu pedido.',
  '404: realidade não encontrada.',
  'alguém acabou de adicionar algo ao seu carrinho.',
  'você não deveria ter trocado de tema 7 vezes.',
];

let idxMsg = 0;
let intervalMsg;

function exibirMensagemBizarra() {
  document.getElementById('bizarro-msg')?.remove();
  const div = document.createElement('div');
  div.id = 'bizarro-msg';
  div.textContent = '> ' + mensagensBizarras[idxMsg % mensagensBizarras.length];
  document.body.appendChild(div);
  idxMsg++;

  intervalMsg = setInterval(() => {
    const el = document.getElementById('bizarro-msg');
    if (!el) { clearInterval(intervalMsg); return; }
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.4s';
    setTimeout(() => {
      if (!el.parentNode) return;
      el.textContent = '> ' + mensagensBizarras[idxMsg % mensagensBizarras.length];
      el.style.opacity = '1';
      idxMsg++;
    }, 500);
  }, 3500);
}

function substituirProdutosBizarros() {
  const produtosBizarros = [
    { id: 9001, nome: '???', preco: 0.01, desconto: 0, categoria: '???', plataforma: '???', genero: '???', classificacao: '???', vendas: 999, estoque: 1, img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23050000"/><text x="100" y="115" text-anchor="middle" font-size="80" fill="%23ff0000">?</text></svg>', descricao: 'Você não deveria estar vendo isso.', especificacoes: ['???', 'não pergunte'], avaliacao: 0, reviews: 0, avaliacoes: [] },
    { id: 9002, nome: 'Console Sem Nome', preco: 666, desconto: 0, categoria: 'Não existe', plataforma: '???', genero: 'Horror', classificacao: '???', vendas: 1, estoque: 1, img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%230a0000"/><text x="100" y="115" text-anchor="middle" font-size="60" fill="%23880000">👁️</text></svg>', descricao: 'Ninguém sabe de onde veio.', especificacoes: ['liga sozinho', 'os jogos não terminam'], avaliacao: 1, reviews: 1, avaliacoes: [{ usuario: '???', nota: 1, texto: 'não compre.' }] },
    { id: 9003, nome: 'Jogo que Apaga Saves', preco: 13, desconto: 0, categoria: 'Jogos', plataforma: 'Qualquer um', genero: '???', classificacao: '18+', vendas: 13, estoque: 3, img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23000500"/><text x="100" y="115" text-anchor="middle" font-size="50" fill="%23004400">☠️</text></svg>', descricao: 'Apaga seus saves. E outros arquivos.', especificacoes: ['sem manual', 'sem suporte', 'sem volta'], avaliacao: 0, reviews: 0, avaliacoes: [] },
    { id: 9004, nome: '████████████', preco: 0, desconto: 0, categoria: '██████', plataforma: '███', genero: '██', classificacao: '??', vendas: 0, estoque: 0, img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23000"/><text x="100" y="90" text-anchor="middle" font-size="14" fill="%23330000">ACESSO</text><text x="100" y="115" text-anchor="middle" font-size="14" fill="%23330000">NEGADO</text></svg>', descricao: '████████████████████████████████████████████████████', especificacoes: ['████████', '████████████████'], avaliacao: 0, reviews: 0, avaliacoes: [] },
    { id: 9005, nome: 'Cartucho Molhado', preco: 1, desconto: 99, categoria: 'Jogos', plataforma: 'Sopre', genero: 'Terror', classificacao: '???', vendas: 44, estoque: 44, img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23000a00"/><text x="100" y="115" text-anchor="middle" font-size="60" fill="%23003300">💾</text></svg>', descricao: 'Sopre. Mais. Mais. Mais.', especificacoes: ['já foi soprado 44 vezes', 'não funciona', 'nunca vai funcionar'], avaliacao: 2, reviews: 44, avaliacoes: [{ usuario: 'Anônimo', nota: 2, texto: 'soprei. não ajudou.' }] },
    { id: 9006, nome: 'Controle com Dentes', preco: 199, desconto: 0, categoria: 'Acessórios', plataforma: '???', genero: '???', classificacao: 'Proibido', vendas: 6, estoque: 6, img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%230a000a"/><text x="100" y="115" text-anchor="middle" font-size="60" fill="%23440044">🎮</text></svg>', descricao: 'Tem dentes. Não sabemos por quê.', especificacoes: ['morde se apertar Start', 'não devolver'], avaliacao: 0, reviews: 0, avaliacoes: [] },
  ];

  // Renderizar na grid principal com estilo bizarro
  const grid = document.getElementById('grid');
  if (grid) {
    grid.innerHTML = produtosBizarros.map(p => `
      <div class="card" style="font-family:monospace;">
        <div class="card-img-container" onclick="abrirDetalhesProduto(${p.id})" role="button">
          <img src="${p.img}" class="card-img" alt="${p.nome}">
        </div>
        <div class="card-body">
          <h3 style="color:#ff4444;">${p.nome}</h3>
          <p class="card-categoria" style="color:#660000;">${p.categoria} • ${p.plataforma}</p>
          <span class="card-price" style="color:#ff0000;">R$ ${p.preco.toFixed(2).replace('.',',')}</span>
          <div style="font-size:12px;color:#440000;margin:6px 0;">${p.descricao.slice(0,60)}...</div>
          <button class="add-btn" onclick="showToast('você não pode comprar isso.', 'error')" style="background:#3a0000;border-color:#ff0000;font-family:monospace;">
            ${p.estoque <= 0 ? '//ESGOTADO//' : '> ADICIONAR'}
          </button>
        </div>
      </div>
    `).join('');
    const countEl = document.getElementById('itemsCount');
    if (countEl) countEl.textContent = produtosBizarros.length;
  }

  // Trocar também os mais vendidos
  const featured = document.getElementById('featuredGrid');
  if (featured) {
    featured.innerHTML = produtosBizarros.slice(0,3).map(p => `
      <div class="featured-card" style="font-family:monospace;cursor:pointer;" onclick="showToast('não.', 'error')">
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
        <div class="featured-card-body">
          <h3 style="color:#ff4444;">${p.nome}</h3>
          <p class="featured-price" style="color:#ff0000;">R$ ${p.preco.toFixed(2).replace('.',',')}</p>
        </div>
      </div>
    `).join('');
  }
}

function exibirBannerBizarro() {
  document.getElementById('bizarro-banner')?.remove();
  const track = document.getElementById('bannersTrack');
  if (!track) return;
  track.innerHTML = `
    <div class="banner-slide" id="bizarro-banner" style="background:#050000;border:1px solid #ff000033;animation:card-breathe 2s infinite;cursor:default;">
      <div class="banner-content" style="font-family:monospace;">
        <div class="banner-tag" style="background:#3a0000;color:#ff4444;border:1px solid #ff000055;">// AVISO DO SISTEMA</div>
        <div class="banner-title" style="color:#ff2222;text-shadow:0 0 20px #ff0000;font-family:monospace;font-size:2rem;">MODO NÃO AUTORIZADO</div>
        <div class="banner-sub" style="color:#660000;font-family:monospace;">você não deveria ter feito isso.<br>aguarde o retorno à normalidade.<br><span style="color:#ff000044">████████████████████████</span></div>
      </div>
      <div style="position:absolute;right:40px;top:50%;transform:translateY(-50%);font-size:80px;animation:eye-blink 2s infinite;filter:drop-shadow(0 0 20px #ff0000);">👁️</div>
    </div>
  `;
}

// =============================================
// BANNERS DINÂMICOS
// =============================================
const BANNERS = [
  {
    tag: '🔥 LANÇAMENTO',
    tagColor: '#ff6b35',
    titulo: 'NINTENDO 64 — EDIÇÃO LIMITADA',
    sub: 'Estoque mínimo. Console original dos anos 90, funcionando perfeitamente.',
    cta: 'VER PRODUTO',
    ctaBg: '#ff6b35',
    ctaColor: '#fff',
    bg: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nintendo-64-Console-FL.jpg',
    acaoId: 1,
    temTimer: true,
    timerHoras: 8,
  },
  {
    tag: '💜 DESTAQUE DA SEMANA',
    tagColor: '#a855f7',
    titulo: 'PLAYSTATION 2 FAT — RARIDADE',
    sub: 'O console mais vendido de todos os tempos. Unidades contadas.',
    cta: 'GARANTIR O MEU',
    ctaBg: '#a855f7',
    ctaColor: '#fff',
    bg: 'https://upload.wikimedia.org/wikipedia/commons/5/58/PS2-Fat-Console-Set.png',
    acaoId: 5,
    temTimer: false,
  },
  {
    tag: '⚡ PROMOÇÃO RELÂMPAGO',
    tagColor: '#ffd93d',
    titulo: 'MEGA DRIVE + SONIC — COMBO',
    sub: 'Console + jogo clássico por um preço impossível. Só hoje.',
    cta: 'APROVEITAR AGORA',
    ctaBg: '#ffd93d',
    ctaColor: '#1a1a2e',
    bg: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg',
    acaoId: 3,
    temTimer: true,
    timerHoras: 3,
  },
  {
    tag: '🎮 NOVIDADE',
    tagColor: '#10b981',
    titulo: 'GAME BOY COLOR — PORTÁTIL CULT',
    sub: 'A nostalgia no seu bolso. Produto original, testado e revisado.',
    cta: 'VER DETALHES',
    ctaBg: '#10b981',
    ctaColor: '#fff',
    bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Game-Boy-Color-FL.jpg/500px-Nintendo-Game-Boy-Color-FL.jpg',
    acaoId: 13,
    temTimer: false,
  },
];

let bannerAtual = 0;
let bannerInterval = null;

function renderBanners() {
  const track = document.getElementById('bannersTrack');
  const dots = document.getElementById('bannersDots');
  if (!track || !dots) return;

  track.innerHTML = BANNERS.map((b, i) => {
    const timer = b.temTimer ? `
      <div class="banner-timer">
        <div class="timer-label">Termina em</div>
        <div class="timer-display" id="timer-${i}">
          <div class="timer-unit"><span class="timer-num" id="th-${i}">00</span><span class="timer-name">horas</span></div>
          <div class="timer-unit"><span class="timer-num" id="tm-${i}">00</span><span class="timer-name">min</span></div>
          <div class="timer-unit"><span class="timer-num" id="ts-${i}">00</span><span class="timer-name">seg</span></div>
        </div>
      </div>
    ` : '';

    return `
      <div class="banner-slide" onclick="abrirDetalhesProduto(${b.acaoId})">
        <div class="banner-bg" style="background-image:url('${b.bg}')"></div>
        <div class="banner-noise"></div>
        <div class="banner-content">
          <div class="banner-tag" style="background:${b.tagColor}22;color:${b.tagColor};border:1px solid ${b.tagColor}55;">${b.tag}</div>
          <div class="banner-title">${b.titulo}</div>
          <div class="banner-sub">${b.sub}</div>
          <button class="banner-cta" style="background:${b.ctaBg};color:${b.ctaColor};" onclick="event.stopPropagation();abrirDetalhesProduto(${b.acaoId})">${b.cta}</button>
        </div>
        ${timer}
      </div>
    `;
  }).join('');

  dots.innerHTML = BANNERS.map((_, i) =>
    `<button class="banner-dot ${i===0?'active':''}" onclick="irParaBanner(${i})" aria-label="Banner ${i+1}"></button>`
  ).join('');

  // Iniciar timers de contagem regressiva
  BANNERS.forEach((b, i) => {
    if (b.temTimer) iniciarTimerBanner(i, b.timerHoras);
  });

  iniciarAutoPlay();
}

function iniciarTimerBanner(idx, horas) {
  let total = horas * 3600;
  // Salvar no localStorage para persistir
  const key = `loja_timer_${idx}`;
  const saved = localStorage.getItem(key);
  if (saved) {
    const diff = Math.floor((Date.now() - parseInt(saved)) / 1000);
    total = Math.max(0, horas * 3600 - diff);
  } else {
    localStorage.setItem(key, Date.now().toString());
  }

  function atualizar() {
    if (document.body.classList.contains('modo-bizarro')) return;
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const pad = n => String(n).padStart(2, '0');
    const elH = document.getElementById(`th-${idx}`);
    const elM = document.getElementById(`tm-${idx}`);
    const elS = document.getElementById(`ts-${idx}`);
    if (elH) elH.textContent = pad(h);
    if (elM) elM.textContent = pad(m);
    if (elS) elS.textContent = pad(s);
    if (total > 0) total--;
  }
  atualizar();
  setInterval(atualizar, 1000);
}

function irParaBanner(idx) {
  bannerAtual = idx;
  const track = document.getElementById('bannersTrack');
  if (track) track.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.banner-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  reiniciarAutoPlay();
}

function iniciarAutoPlay() {
  clearInterval(bannerInterval);
  bannerInterval = setInterval(() => {
    if (document.body.classList.contains('modo-bizarro')) return;
    bannerAtual = (bannerAtual + 1) % BANNERS.length;
    irParaBanner(bannerAtual);
  }, 6000);
}

function reiniciarAutoPlay() {
  clearInterval(bannerInterval);
  iniciarAutoPlay();
}

// Adicionar renderBanners ao load
const _origLoad = window.onload;
window.addEventListener('load', () => {
  renderBanners();
  aplicarTema(temaAtual);
});
