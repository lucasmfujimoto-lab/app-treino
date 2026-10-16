// CONFIGURAÇÃO DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyALJh4FgI8Tk-_POXcjadiEGF3CKtxOuBA",
  authDomain: "app-treino-4b6da.firebaseapp.com",
  projectId: "app-treino-4b6da",
  storageBucket: "app-treino-4b6da.firebasestorage.app",
  messagingSenderId: "170368119250",
  appId: "1:170368119250:web:e703af3232219bedd9980b"
};

// Inicializar Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// CATÁLOGO EXPANDIDO DE EXERCÍCIOS
const catalogoExercicios = {
  Alongamento: [
    { id: 1, nome: "Mobilidade de Ombro (Bastão)", video: "https://www.youtube.com/embed/3_SJ1YOeFxo" },
    { id: 2, nome: "Alongamento Torácico e Peitoral", video: "https://www.youtube.com/embed/20glCAA_Lyo" },
    { id: 3, nome: "Mobilidade de Quadril", video: "https://www.youtube.com/embed/fJ67PH2tVwk" },
    { id: 4, nome: "Alongamento de Isquiotibiais", video: "https://www.youtube.com/embed/3O8SLneuVKc" },
    { id: 5, nome: "Alongamento de Dorsal e Costas", video: "https://www.youtube.com/embed/PiKByqgZJ1I" },
    { id: 6, nome: "Mobilidade de Tornozelo", video: "https://www.youtube.com/embed/ACzi_1jpEEk" },
    { id: 7, nome: "Alongamento de Flexores do Quadril", video: "https://www.youtube.com/embed/LkEC8QO0ITk" },
    { id: 8, nome: "Mobilidade de Punho e Antebraço", video: "https://www.youtube.com/embed/1cFYKc_vn-s" },
    { id: 9, nome: "Alongamento de Glúteo e Piriforme", video: "https://www.youtube.com/embed/_mShDDDGDFA" },
    { id: 10, nome: "Mobilidade de Cervical e Pescoço", video: "https://www.youtube.com/embed/_a_zO4TrF68" }
  ],
  Peito: [
    { id: 101, nome: "Supino Reto com Barra", video: "https://www.youtube.com/embed/IyvZ8nsR2dw" },
    { id: 102, nome: "Supino Inclinado Halteres", video: "https://www.youtube.com/embed/JOVGGEwfhIk" },
    { id: 103, nome: "Supino Declinado Halteres", video: "https://www.youtube.com/embed/5oUAqXhViSg" },
    { id: 104, nome: "Crossover no Cabo (Médio)", video: "https://www.youtube.com/embed/J5hrCiNMdEQ" },
    { id: 105, nome: "Crossover de Baixo para Cima", video: "https://www.youtube.com/embed/xyk2-PZZ9Is" },
    { id: 106, nome: "Peck Deck / Voador", video: "https://www.youtube.com/embed/cZ75YmWYTgQ" },
    { id: 107, nome: "Crucifixo Reto Halteres", video: "https://www.youtube.com/embed/gYh3r3x4tis" },
    { id: 108, nome: "Flexão de Braço Tradicional", video: "https://www.youtube.com/embed/y-zo5IMEP0s" },
    { id: 109, nome: "Pullover com Halter", video: "https://www.youtube.com/embed/SmrBx_wA_40" },
    { id: 110, nome: "Supino Máquina Articulada", video: "https://www.youtube.com/embed/z60iX0eYJG4" }
  ],
  Costas: [
    { id: 201, nome: "Puxada Frontal Aberta", video: "https://www.youtube.com/embed/ecuTSZM1wOQ" },
    { id: 202, nome: "Puxada Triângulo", video: "https://www.youtube.com/embed/Att1gKVtDUM" },
    { id: 203, nome: "Remada Curvada com Barra", video: "https://www.youtube.com/embed/-dQiXndRAJo" },
    { id: 204, nome: "Remada Baixa Triângulo", video: "https://www.youtube.com/embed/dUy0chKG-yo" },
    { id: 205, nome: "Remada Serrote Unilateral", video: "https://www.youtube.com/embed/VqohImUXbUk" },
    { id: 206, nome: "Pulldown na Polia Alta", video: "https://www.youtube.com/embed/-74jtRco5kI" },
    { id: 207, nome: "Levantamento Terra", video: "https://www.youtube.com/embed/Fi6fFznKGhI" },
    { id: 208, nome: "Barra Fixa Pronada", video: "https://www.youtube.com/embed/thg6cGXSlvY" },
    { id: 209, nome: "Remada Articulada Máquina", video: "https://www.youtube.com/embed/TNlHjZMQUwc" },
    { id: 210, nome: "Hiperextensão Lombar", video: "https://www.youtube.com/embed/o8bmHiHvDGc" }
  ],
  Biceps: [
    { id: 301, nome: "Rosca Direta Barra W", video: "https://www.youtube.com/embed/1N43ZJT7yiM" },
    { id: 302, nome: "Rosca Martelo Halteres", video: "https://www.youtube.com/embed/YrZ0qzBi-kk" },
    { id: 303, nome: "Rosca Scott no Banco", video: "https://www.youtube.com/embed/LIcKp31AvQY" },
    { id: 304, nome: "Rosca Inclinada Banco 45°", video: "https://www.youtube.com/embed/7cctREH24SE" },
    { id: 305, nome: "Rosca Concentrada", video: "https://www.youtube.com/embed/sSO_MaspYrU" },
    { id: 306, nome: "Rosca Polia Baixa Corda", video: "https://www.youtube.com/embed/POaoNjYIbm8" },
    { id: 307, nome: "Rosca Inversa Barra", video: "https://www.youtube.com/embed/cGkneDTud8A" },
    { id: 308, nome: "Rosca Spider no Banco", video: "https://www.youtube.com/embed/05f7t11DZzE" },
    { id: 309, nome: "Rosca 21 com Barra", video: "https://www.youtube.com/embed/-aej3kEcNoU" },
    { id: 310, nome: "Rosca Simultânea Halteres", video: "https://www.youtube.com/embed/etHPJNJY5OI" }
  ],
  Triceps: [
    { id: 401, nome: "Tríceps Pulley Corda", video: "https://www.youtube.com/embed/U88oGUP-QIw" },
    { id: 402, nome: "Tríceps Pulley Barra Reta", video: "https://www.youtube.com/embed/9cmeOVHOjck" },
    { id: 403, nome: "Tríceps Testa Barra H", video: "https://www.youtube.com/embed/8g7B0VvpKiE" },
    { id: 404, nome: "Tríceps Francês Halter", video: "https://www.youtube.com/embed/qLnV4qPXeSw" },
    { id: 405, nome: "Tríceps Coice Polia", video: "https://www.youtube.com/embed/BJ1-8jBIvx4" },
    { id: 406, nome: "Paralelas / Mergulho", video: "https://www.youtube.com/embed/OPyI6B68tHw" },
    { id: 407, nome: "Supino Fechado", video: "https://www.youtube.com/embed/ZiemT4r4DcU" },
    { id: 408, nome: "Tríceps Banco", video: "https://www.youtube.com/embed/V8nX8nsjpws" },
    { id: 409, nome: "Tríceps Inverso Polia", video: "https://www.youtube.com/embed/k4p_TTQkqZw" },
    { id: 410, nome: "Tríceps Testa Banco Inclinado", video: "https://www.youtube.com/embed/bgZ5R5iFBCU" }
  ],
  Ombro: [
    { id: 501, nome: "Desenvolvimento Halteres", video: "https://www.youtube.com/embed/MmHTcVK-1tU" },
    { id: 502, nome: "Desenvolvimento Arnold", video: "https://www.youtube.com/embed/a9owAUPd304" },
    { id: 503, nome: "Elevação Lateral Halteres", video: "https://www.youtube.com/embed/W5hRdgwEoEA" },
    { id: 504, nome: "Elevação Lateral Polia", video: "https://www.youtube.com/embed/1OjCf6JyGuU" },
    { id: 505, nome: "Elevação Frontal Halteres", video: "https://www.youtube.com/embed/jhxLYSm_P-k" },
    { id: 506, nome: "Crucifixo Invertido Peck Deck", video: "https://www.youtube.com/embed/d_0PAU3Huus" },
    { id: 507, nome: "Encolhimento com Barra", video: "https://www.youtube.com/embed/BrwUPSLC_hE" },
    { id: 508, nome: "Remada Alta Polia", video: "https://www.youtube.com/embed/ZOuBEpIIwBo" },
    { id: 509, nome: "Elevação Y no Banco Inclinado", video: "https://www.youtube.com/embed/5ycEnd5GlTU" },
    { id: 510, nome: "Face Pull com Corda", video: "https://www.youtube.com/embed/xgbDSHpMfXg" }
  ],
  Perna: [
    { id: 601, nome: "Agachamento Livre Barra", video: "https://www.youtube.com/embed/rM6SDUdl9fs" },
    { id: 602, nome: "Leg Press 45°", video: "https://www.youtube.com/embed/NcmQ-wVlQdc" },
    { id: 603, nome: "Cadeira Extensora", video: "https://www.youtube.com/embed/el3oHblB5DM" },
    { id: 604, nome: "Mesa Flexora", video: "https://www.youtube.com/embed/KAdhX6otnng" },
    { id: 605, nome: "Cadeira Flexora", video: "https://www.youtube.com/embed/_TDeIBSoKzk" },
    { id: 606, nome: "Agachamento Búlgaro", video: "https://www.youtube.com/embed/LT_nelifZ_k" },
    { id: 607, nome: "Stiff com Halteres", video: "https://www.youtube.com/embed/cETLf4xXYCQ" },
    { id: 608, nome: "Afundo / Passada com Halteres", video: "https://www.youtube.com/embed/AC61Lri9jxQ" },
    { id: 609, nome: "Cadeira Adutora", video: "https://www.youtube.com/embed/M_2CxnklU-0" },
    { id: 610, nome: "Cadeira Abdutora", video: "https://www.youtube.com/embed/50qHGus1TZk" },
    { id: 611, nome: "Gluteos Máquina", video: "https://www.youtube.com/embed/cCKUK3huu8w" },
    { id: 612, nome: "Gêmeos em Pé (Panturrilha)", video: "https://www.youtube.com/embed/tPiLhI7TkLE" }
  ],
  Abdomen: [
    { id: 701, nome: "Abdominal Infra Solo", video: "https://www.youtube.com/embed/l41NoxJ3I1U" },
    { id: 702, nome: "Abdominal Supra Solo", video: "https://www.youtube.com/embed/5ER5Of4-62g" },
    { id: 703, nome: "Abdominal Polia Corda", video: "https://www.youtube.com/embed/5ER5Of4-62g" },
    { id: 704, nome: "Prancha Isométrica", video: "https://www.youtube.com/embed/pSHjTRCQxIw" },
    { id: 705, nome: "Prancha Lateral", video: "https://www.youtube.com/embed/pSHjTRCQxIw" },
    { id: 706, nome: "Abdominal Infra Suspenso", video: "https://www.youtube.com/embed/l41NoxJ3I1U" },
    { id: 707, nome: "Abdominal Oblíquo Cruzado", video: "https://www.youtube.com/embed/5ER5Of4-62g" },
    { id: 708, nome: "Abdominal Roda (Ab Roller)", video: "https://www.youtube.com/embed/pSHjTRCQxIw" },
    { id: 709, nome: "Abdominal Canivete", video: "https://www.youtube.com/embed/l41NoxJ3I1U" },
    { id: 710, nome: "Vacuum Abdominal", video: "https://www.youtube.com/embed/5ER5Of4-62g" }
  ],
  Cardio: [
    { id: 801, nome: "Esteira (Caminhada / Corrida)", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 802, nome: "Bicicleta Ergométrica", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 803, nome: "Elíptico / Transport", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 804, nome: "Simulador de Escada", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 805, nome: "Corda de Pular", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 806, nome: "Remo Seco Ergômetro", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 807, nome: "Polichinelos / HIIT", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 808, nome: "Corrida Estacionária", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 809, nome: "Burpees", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 810, nome: "Mountain Climbers", video: "https://www.youtube.com/embed/0G2_XV7slIg" }
  ]
};

const todosGrupos = ["Peito", "Costas", "Biceps", "Triceps", "Ombro", "Perna", "Abdomen", "Cardio"];

// ESTADO GLOBAL
let usuarioLogado = null;
let perfilUsuario = null;
let uidAlvoTrabalho = null;
let ehTreinoAvulsoAtivo = false;
let configuracaoTreino = [];
let indiceTreinoAtual = 0;
let historicoTreinos = {};
let modoCadastro = false;

// ESTADO DE EQUIPES
let equipesDoUsuario = [];
let equipeAtiva = null;

// FUNÇÕES UTILITÁRIAS
function obterDataLocalIso() {
  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function obterDataFormatadaBR(dataIso) {
  if (!dataIso) return '--/--/----';
  const partes = dataIso.split('-');
  if (partes.length < 3) return dataIso;
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function gerarCodigoUsuario() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

async function obterOuCriarCodigoUsuario(user, tipoDefinido = "aluno") {
  const userRef = db.collection("usuarios").doc(user.uid);
  const docUser = await userRef.get();

  if (docUser.exists) {
    const dados = docUser.data();
    if (dados.codigo) {
      return dados.codigo;
    }
  }

  const codigoGerado = gerarCodigoUsuario();
  const dadosNovos = {
    email: user.email,
    nomeExibicao: user.displayName || user.email.split('@')[0],
    tipo: tipoDefinido,
    codigo: codigoGerado
  };

  await userRef.set(dadosNovos, { merge: true });
  return codigoGerado;
}

// CÁLCULO DA OFENSIVA E ESTATÍSTICAS
function calcularStatsMembro(historico) {
  if (!historico) return { streak: 0, total: 0 };
  const datas = Object.keys(historico).sort();
  const total = datas.length;

  if (total === 0) return { streak: 0, total: 0 };

  let streak = 0;
  const hojeIso = obterDataLocalIso();

  let dataChecagem = new Date();
  dataChecagem.setHours(0, 0, 0, 0);

  if (!historico[hojeIso]) {
    let diasSemTreino = 0;
    let tempDate = new Date(dataChecagem);

    while (diasSemTreino < 3) {
      tempDate.setDate(tempDate.getDate() - 1);
      const ano = tempDate.getFullYear();
      const mes = String(tempDate.getMonth() + 1).padStart(2, '0');
      const dia = String(tempDate.getDate()).padStart(2, '0');
      const isoTemp = `${ano}-${mes}-${dia}`;

      if (historico[isoTemp]) {
        break;
      }
      diasSemTreino++;
    }

    if (diasSemTreino >= 3) {
      return { streak: 0, total };
    }

    dataChecagem.setDate(dataChecagem.getDate() - (diasSemTreino + 1));
  }

  let folgasConsecutivas = 0;

  while (true) {
    const ano = dataChecagem.getFullYear();
    const mes = String(dataChecagem.getMonth() + 1).padStart(2, '0');
    const dia = String(dataChecagem.getDate()).padStart(2, '0');
    const iso = `${ano}-${mes}-${dia}`;

    if (historico[iso]) {
      streak++;
      folgasConsecutivas = 0;
    } else {
      folgasConsecutivas++;
      if (folgasConsecutivas >= 3) {
        break;
      }
    }
    dataChecagem.setDate(dataChecagem.getDate() - 1);
  }

  return { streak, total };
}

function comprimirImagem(file, maxWidth, maxHeight, quality, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function() {
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const base64Comprimido = canvas.toDataURL('image/jpeg', quality);
      callback(base64Comprimido);
    };
  };
}

// OBSERVADOR DE AUTENTICAÇÃO ÚNICO E CENTRALIZADO
auth.onAuthStateChanged(async (user) => {
  if (user) {
    usuarioLogado = user;
    uidAlvoTrabalho = user.uid;

    try {
      const codigoOficial = await obterOuCriarCodigoUsuario(user);
      const docUser = await db.collection("usuarios").doc(user.uid).get();
      perfilUsuario = docUser.data();
      if (perfilUsuario) {
        perfilUsuario.codigo = codigoOficial;
      }
    } catch (e) {
      console.error("Erro ao sincronizar perfil:", e);
      perfilUsuario = { 
        email: user.email, 
        nomeExibicao: user.email.split('@')[0], 
        tipo: "aluno", 
        codigo: "ERRO-COD" 
      };
    }

    const nomeExibir = perfilUsuario?.nomeExibicao || user.email.split('@')[0];

    const telaLogin = document.getElementById("tela-login");
    const appPrincipal = document.getElementById("app-principal");
    if (telaLogin) telaLogin.classList.add("hidden");
    if (appPrincipal) appPrincipal.classList.remove("hidden");
    
    const infoUser = document.getElementById("info-usuario-logado");
    if (infoUser) infoUser.innerText = `Olá, ${nomeExibir} | Código: ${perfilUsuario.codigo}`;
    
    const emailDestaque = document.getElementById("perfil-email-destaque");
    if (emailDestaque) emailDestaque.innerText = `${user.email} (${perfilUsuario.codigo})`;
    
    const inputNome = document.getElementById("input-nome-exibicao") || document.getElementById("input-nome-feed");
    if (inputNome) inputNome.value = nomeExibir;

    const btnTreinadorMenu = document.getElementById("menu-treinador") || document.getElementById("btn-perfil-treinador");
    if (btnTreinadorMenu && perfilUsuario.tipo === "treinador") {
      btnTreinadorMenu.classList.remove("hidden");
    }

    carregarDadosDoServidor();
  } else {
    const telaLogin = document.getElementById("tela-login");
    const appPrincipal = document.getElementById("app-principal");
    if (telaLogin) telaLogin.classList.remove("hidden");
    if (appPrincipal) appPrincipal.classList.add("hidden");
  }
});

// REGISTRO DE EVENTOS E INTERAÇÕES DO DOM
document.addEventListener("DOMContentLoaded", () => {
  const btnGoogle = document.getElementById('btn-login-google');
  if (btnGoogle) btnGoogle.addEventListener('click', autenticarComGoogle);

  const formLogin = document.getElementById('form-login');
  if (formLogin) formLogin.addEventListener('submit', autenticarUsuario);

  const linkAlternar = document.getElementById('link-alternar-login');
  if (linkAlternar) linkAlternar.addEventListener('click', alternarModoLogin);

  const btnDeslogar = document.getElementById('btn-deslogar') || document.getElementById('btn-sair-conta');
  if (btnDeslogar) {
    btnDeslogar.addEventListener('click', async () => {
      try {
        await auth.signOut();
        window.location.reload();
      } catch (error) {
        console.error("Erro ao encerrar sessão:", error);
        alert("Erro ao sair da conta: " + error.message);
      }
    });
  }

  const btnPublicar = document.getElementById('btn-publicar-foto');
  if (btnPublicar) btnPublicar.addEventListener('click', publicarFotoNoFeed);

  const btnSalvarNome = document.getElementById('btn-salvar-nome');
  if (btnSalvarNome) btnSalvarNome.addEventListener('click', salvarNomeExibicao);

  // --- Menu Lateral / Perfil & Configurações ---
  const modalPerfil = document.getElementById('modal-perfil');
  const btnAbrirMenu = document.getElementById('btn-abrir-menu');
  const btnFecharPerfil = document.getElementById('btn-fechar-modal-perfil');

  if (btnAbrirMenu && modalPerfil) {
    btnAbrirMenu.addEventListener('click', () => {
      modalPerfil.classList.remove('hidden');
    });
  }

  if (btnFecharPerfil && modalPerfil) {
    btnFecharPerfil.addEventListener('click', () => {
      modalPerfil.classList.add('hidden');
    });
  }

  window.addEventListener('click', (event) => {
    if (modalPerfil && event.target === modalPerfil) {
      modalPerfil.classList.add('hidden');
    }
  });

  // Mapeamento dos itens do menu lateral em lista
    // --- Mapeamento correto dos itens do menu lateral em lista ---
  const associarMenuModal = (idElemento, idModalDestino) => {
    const el = document.getElementById(idElemento);
    if (el) {
      el.addEventListener('click', () => {
        if (modalPerfil) modalPerfil.classList.add('hidden');
        const modalDest = document.getElementById(idModalDestino);
        if (modalDest) {
          modalDest.classList.remove('hidden');
          
          // Se abrir equipes, carrega as equipes do usuário
          if (idModalDestino === 'modal-equipes') {
            voltarParaListaEquipes();
            carregarEquipesDoUsuario();
          }
          // Se abrir amigos, carrega a lista
          else if (idModalDestino === 'modal-amigos') {
            carregarAmigosEConvites();
          }
          // Se abrir check-in dos amigos, carrega o feed
          else if (idModalDestino === 'modal-feed-amigos') {
            carregarFeedAmigos();
          }
        }
      });
    }
  };

  // Associando cada ID da lista do menu ao seu respetivo modal
  associarMenuModal('menu-conquistas', 'modal-conquistas');
  associarMenuModal('menu-equipes', 'modal-equipes');
  associarMenuModal('menu-amigos', 'modal-amigos');          // Botão Amigos
  associarMenuModal('menu-checkin', 'modal-feed-amigos');    // Botão Check-in dos Amigos
  associarMenuModal('menu-alongamento', 'modal-alongamento');
  associarMenuModal('menu-treinador', 'modal-treinador');

  // Botões de fechar e voltar dos submodais para reabrir o perfil ou voltar
  const configurarBotaoVoltar = (idBtn, idSubModal) => {
    const btn = document.getElementById(idBtn);
    if (btn) {
      btn.addEventListener('click', () => {
        const sub = document.getElementById(idSubModal);
        if (sub) sub.classList.add('hidden');
        if (modalPerfil) modalPerfil.classList.remove('hidden');
      });
    }
  };

  configurarBotaoVoltar('btn-fechar-modal-conquistas', 'modal-conquistas');
  configurarBotaoVoltar('btn-voltar-conquistas', 'modal-conquistas');
  configurarBotaoVoltar('btn-fechar-modal-treinador', 'modal-treinador');
  configurarBotaoVoltar('btn-voltar-treinador', 'modal-treinador');
  configurarBotaoVoltar('btn-fechar-modal-alongamento', 'modal-alongamento');
  configurarBotaoVoltar('btn-voltar-alongamento', 'modal-alongamento');
  configurarBotaoVoltar('btn-fechar-modal-equipes', 'modal-equipes');

  // Notificações
  const btnNotificacoes = document.getElementById('btn-notificacoes');
  const badgeNotificacao = document.getElementById('badge-notificacao');
  if (btnNotificacoes) {
    btnNotificacoes.addEventListener('click', () => {
      if (badgeNotificacao) badgeNotificacao.classList.add('hidden');
      const modalFeedAmigos = document.getElementById('modal-feed-amigos');
      if (modalFeedAmigos) {
        modalFeedAmigos.classList.remove('hidden');
        carregarFeedAmigos();
      }
    });
  }

  // Treinador
  const btnAcessarAluno = document.getElementById('btn-acessar-aluno');
  if (btnAcessarAluno) btnAcessarAluno.addEventListener('click', carregarTreinoDoAluno);

  // Treino
  const btnIniciar = document.getElementById('btn-iniciar');
  if (btnIniciar) btnIniciar.addEventListener('click', iniciarTreino);

  const btnTrocar = document.getElementById('btn-trocar');
  if (btnTrocar) btnTrocar.addEventListener('click', trocarTreinoManual);

  const btnConcluir = document.getElementById('btn-concluir');
  if (btnConcluir) btnConcluir.addEventListener('click', concluirTreino);

  // Treino Avulso
  const btnAvulso = document.getElementById('btn-treino-avulso');
  if (btnAvulso) btnAvulso.addEventListener('click', abrirModalTreinoAvulso);

  const btnFecharAvulso = document.getElementById('btn-fechar-modal-avulso');
  if (btnFecharAvulso) btnFecharAvulso.addEventListener('click', fecharModalTreinoAvulso);

  const btnVoltarAvulso = document.getElementById('btn-voltar-avulso');
  if (btnVoltarAvulso) btnVoltarAvulso.addEventListener('click', fecharModalTreinoAvulso);

  const btnConfirmarAvulso = document.getElementById('btn-iniciar-avulso-confirmar');
  if (btnConfirmarAvulso) btnConfirmarAvulso.addEventListener('click', montarEIniciarTreinoAvulso);

  // Configuração
  const btnAbrirConfig = document.getElementById('btn-abrir-config');
  if (btnAbrirConfig) btnAbrirConfig.addEventListener('click', () => {
    uidAlvoTrabalho = usuarioLogado.uid;
    const tituloConf = document.getElementById('titulo-modal-config');
    if (tituloConf) tituloConf.innerText = "Configurar Minha Rotina";
    abrirConfigRotina();
  });

  const btnGerarConfig = document.getElementById('btn-gerar-config');
  if (btnGerarConfig) btnGerarConfig.addEventListener('click', gerarCamposConfig);

  const btnSalvarRotina = document.getElementById('btn-salvar-rotina');
  if (btnSalvarRotina) btnSalvarRotina.addEventListener('click', salvarNovaConfig);

  // Equipes
  const btnCriarEq = document.getElementById('btn-criar-equipe');
  if (btnCriarEq) btnCriarEq.addEventListener('click', criarEquipe);

  const btnVoltarListaEq = document.getElementById('btn-voltar-lista-equipes');
  if (btnVoltarListaEq) btnVoltarListaEq.addEventListener('click', voltarParaListaEquipes);

  const btnAddMembro = document.getElementById('btn-add-membro');
  if (btnAddMembro) btnAddMembro.addEventListener('click', adicionarMembroEquipe);

  const btnSairEqAtiva = document.getElementById('btn-sair-equipe-ativa');
  if (btnSairEqAtiva) btnSairEqAtiva.addEventListener('click', sairDaEquipeAtiva);

  const btnFecharVid1 = document.getElementById('btn-fechar-modal-video');
  if (btnFecharVid1) btnFecharVid1.addEventListener('click', fecharModalVideo);

  const btnFecharVid2 = document.getElementById('btn-fechar-video-btn');
  if (btnFecharVid2) btnFecharVid2.addEventListener('click', fecharModalVideo);

  const btnFecharDet1 = document.getElementById('btn-fechar-modal-detalhes');
  if (btnFecharDet1) btnFecharDet1.addEventListener('click', fecharModalDetalhes);

  const btnFecharDet2 = document.getElementById('btn-fechar-detalhes-btn');
  if (btnFecharDet2) btnFecharDet2.addEventListener('click', fecharModalDetalhes);

  const btnFecharConf = document.getElementById('btn-fechar-modal-config');
  if (btnFecharConf) btnFecharConf.addEventListener('click', fecharModalConfig);
});

// FUNÇÕES DE AUTENTICAÇÃO E PERFIL
async function autenticarUsuario(e) {
  if (e) e.preventDefault();
  
  const emailInput = document.getElementById("login-email");
  const senhaInput = document.getElementById("login-senha");

  if (!emailInput || !senhaInput) return;

  const email = emailInput.value.trim();
  const senha = senhaInput.value;

  try {
    if (modoCadastro) {
      const tipoPerfil = document.getElementById("login-tipo-perfil").value;
      const res = await auth.createUserWithEmailAndPassword(email, senha);
      await obterOuCriarCodigoUsuario(res.user, tipoPerfil);
      alert("Conta criada com sucesso!");
    } else {
      await auth.signInWithEmailAndPassword(email, senha);
    }
  } catch (err) {
    alert("Erro na autenticação: " + err.message);
  }
}

async function autenticarComGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    await obterOuCriarCodigoUsuario(user);
    alert(`Bem-vindo, ${user.displayName || user.email}!`);
  } catch (error) {
    console.error("Erro no login com Google:", error);
    alert("Erro ao fazer login com o Google: " + error.message);
  }
}

async function salvarNomeExibicao() {
  if (!usuarioLogado) return;
  const inputNome = document.getElementById("input-nome-feed") || document.getElementById("input-nome-exibicao");
  const novoNome = inputNome ? inputNome.value.trim() : "";

  if (!novoNome) return alert("Digite um nome válido.");

  try {
    perfilUsuario.nomeExibicao = novoNome;
    await db.collection("usuarios").doc(usuarioLogado.uid).set({
      nomeExibicao: novoNome
    }, { merge: true });

    const infoUser = document.getElementById("info-usuario-logado");
    if (infoUser) infoUser.innerText = `Olá, ${novoNome} | Código: ${perfilUsuario.codigo}`;
    alert("Nome atualizado com sucesso!");
  } catch (e) {
    alert("Erro ao salvar nome: " + e.message);
  }
}

function alternarModoLogin(e) {
  if (e) e.preventDefault();
  modoCadastro = !modoCadastro;
  
  const subtitulo = document.getElementById("login-subtitulo");
  const btnSubmit = document.getElementById("btn-submit-login");
  const txtAlternar = document.getElementById("txt-alternar-login");
  const linkAlternar = document.getElementById("link-alternar-login");
  const areaCadastro = document.getElementById("area-perfil-cadastro");

  if (subtitulo) subtitulo.innerText = modoCadastro ? "Crie sua conta para começar" : "Acesse sua conta para continuar";
  if (btnSubmit) btnSubmit.innerText = modoCadastro ? "CRIAR CONTA" : "ENTRAR";
  if (txtAlternar) txtAlternar.innerText = modoCadastro ? "Já tem uma conta?" : "Não tem conta?";
  if (linkAlternar) linkAlternar.innerText = modoCadastro ? "Fazer Login" : "Criar Conta";
  
  if (areaCadastro) {
    if (modoCadastro) areaCadastro.classList.remove("hidden");
    else areaCadastro.classList.add("hidden");
  }
}

// ABRIR MODAL DE SELEÇÃO DO TREINO AVULSO
function abrirModalTreinoAvulso() {
  const container = document.getElementById('container-selecao-avulso');
  if (!container) return;
  
  container.innerHTML = '';

  todosGrupos.forEach(grupo => {
    const bloco = document.createElement('div');
    bloco.style.cssText = "margin-bottom: 15px; border-bottom: 1px solid #29292e; padding-bottom: 10px;";
    
    let html = `<h4 style='color: #00e676; margin-bottom: 6px;'>● ${grupo}</h4>`;
    const exerciciosGrupo = catalogoExercicios[grupo] || [];

    exerciciosGrupo.forEach(ex => {
      html += `
        <label style='display: block; font-size: 0.85rem; margin-bottom: 4px; font-weight: normal; color: #e1e1e6;'>
          <input type='checkbox' class='cb-ex-avulso' data-grupo='${grupo}' value='${ex.nome}'> ${ex.nome}
        </label>
      `;
    });

    bloco.innerHTML = html;
    container.appendChild(bloco);
  });

  const blocoOutros = document.createElement('div');
  blocoOutros.style.cssText = "margin-top: 20px; margin-bottom: 15px; padding: 15px; background-color: #1e1e24; border-radius: 8px;";
  blocoOutros.innerHTML = `
    <h3 style="color: #ffffff; font-size: 1rem; margin-bottom: 12px; text-align: center;">Outros Treinos</h3>
    <div id="lista-outros-treinos">
      <div class="campo-treino-item" style="margin-bottom: 10px;">
        <input type="text" class="input-outro-treino" placeholder="Digite o treino avulso..." style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #333; background-color: #121214; color: #fff; font-size: 14px; box-sizing: border-box;" />
      </div>
    </div>
    <button type="button" id="btn-add-outro-treino" onclick="adicionarCampoTreino()" style="display: flex; align-items: center; justify-content: center; gap: 8px; background-color: #00e676; color: #000; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; margin: 10px auto 0 auto; width: 100%;">
      <span>+</span> Adicionar treino
    </button>
  `;
  container.appendChild(blocoOutros);

  const modal = document.getElementById('modal-treino-avulso') || document.getElementById('modalTreinoAvulso');
  if (modal) modal.classList.remove('hidden');
}

function fecharModalTreinoAvulso() {
  const modal = document.getElementById('modal-treino-avulso') || document.getElementById('modalTreinoAvulso');
  if (modal) modal.classList.add('hidden');
}

function adicionarCampoTreino() {
  const container = document.getElementById('lista-outros-treinos');
  if (!container) return;

  const divItem = document.createElement('div');
  divItem.className = 'campo-treino-item';
  divItem.style.cssText = 'display: flex; align-items: center; margin-bottom: 10px;';

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'input-outro-treino';
  input.placeholder = 'Digite o treino avulso...';
  input.style.cssText = 'flex: 1; padding: 10px; border-radius: 6px; border: 1px solid #333; background-color: #121214; color: #fff; font-size: 14px; box-sizing: border-box;';

  const btnRemover = document.createElement('button');
  btnRemover.type = 'button';
  btnRemover.innerText = '✕';
  btnRemover.style.cssText = 'background: none; border: none; color: #ff5252; margin-left: 8px; cursor: pointer; font-size: 18px; padding: 0 8px;';
  btnRemover.onclick = function () {
    container.removeChild(divItem);
  };

  divItem.appendChild(input);
  divItem.appendChild(btnRemover);
  container.appendChild(divItem);
}

function montarEIniciarTreinoAvulso() {
  const selecionados = Array.from(document.querySelectorAll('input[type="checkbox"].cb-ex-avulso:checked'));
  const inputsOutros = Array.from(document.querySelectorAll('.input-outro-treino'));
  const treinosManuais = inputsOutros
    .map(input => input.value.trim())
    .filter(texto => texto !== '');

  if (selecionados.length === 0 && treinosManuais.length === 0) {
    return alert("Selecione pelo menos um exercício ou digite em Outros Treinos!");
  }

  ehTreinoAvulsoAtivo = true;
  const areaExecucao = document.getElementById('area-execucao') || document.getElementById('areaExecucaoTreino');
  const listaContainer = document.getElementById('lista-exercicios') || document.getElementById('listaExerciciosExecucao');
  
  if (listaContainer) listaContainer.innerHTML = '';
  const exerciciosPorGrupo = {};

  selecionados.forEach(cb => {
    const grupo = cb.getAttribute('data-grupo') || 'Geral';
    const nomeEx = cb.value;
    if (!exerciciosPorGrupo[grupo]) exerciciosPorGrupo[grupo] = [];
    exerciciosPorGrupo[grupo].push(nomeEx);
  });

  if (treinosManuais.length > 0) {
    exerciciosPorGrupo['Outros Treinos'] = treinosManuais;
  }

  Object.keys(exerciciosPorGrupo).forEach(grupo => {
    const tituloGrupo = document.createElement('h3');
    tituloGrupo.style.cssText = "color: #00e676; margin: 15px 0 8px 0; font-size: 0.95rem; text-align: left;";
    tituloGrupo.innerText = `● ${grupo} (Avulso)`;
    if (listaContainer) listaContainer.appendChild(tituloGrupo);

    exerciciosPorGrupo[grupo].forEach(nomeEx => {
      renderizarCardExercicioExecucao(listaContainer, nomeEx, null);
    });
  });

  fecharModalTreinoAvulso();
  if (areaExecucao) areaExecucao.classList.remove('hidden');
}

// CARREGAR DADOS DO SERVIDOR E CALENDÁRIO
async function carregarDadosDoServidor() {
  try {
    const docRotina = await db.collection("rotinas").doc(usuarioLogado.uid).get();
    if (docRotina.exists) {
      const d = docRotina.data();
      configuracaoTreino = d.rotina || [];
      indiceTreinoAtual = d.indiceAtual || 0;
    } else {
      configuracaoTreino = [];
      indiceTreinoAtual = 0;
    }

    const docHist = await db.collection("historicos").doc(usuarioLogado.uid).get();
    historicoTreinos = docHist.exists ? docHist.data() : {};
  } catch (e) {
    console.error("Erro ao carregar dados do servidor:", e);
  }

  atualizarTelaInicial();
  renderizarCalendario();
  carregarBlocoAlongamento();
  calcularEstatisticasEOfensiva();
}

function calcularEstatisticasEOfensiva() {
  const stats = calcularStatsMembro(historicoTreinos);
  const datasTreinadas = Object.keys(historicoTreinos).sort();

  const statTotal = document.getElementById("stat-total");
  if (statTotal) statTotal.innerText = `📊 ${stats.total} treinos`;

  if (stats.total === 0) {
    const statInicio = document.getElementById("stat-inicio");
    const statOfensiva = document.getElementById("stat-ofensiva");
    if (statInicio) statInicio.innerText = "desde o início";
    if (statOfensiva) statOfensiva.innerText = "🔥 0 dias";
    renderizarConquistas(0, 0);
    return;
  }

  const primeiraDataFormatada = obterDataFormatadaBR(datasTreinadas[0]);
  const statInicio = document.getElementById("stat-inicio");
  const statOfensiva = document.getElementById("stat-ofensiva");
  if (statInicio) statInicio.innerText = `desde ${primeiraDataFormatada}`;
  if (statOfensiva) statOfensiva.innerText = `🔥 ${stats.streak} ${stats.streak === 1 ? "dia" : "dias"}`;

  renderizarConquistas(stats.streak, stats.total);
}

function renderizarConquistas(streak, total) {
  const container = document.getElementById("container-conquistas");
  if (!container) return;

  const badges = [
    { id: 1, nome: "Primeiro Treino", icon: "🌱", condicao: total >= 1 },
    { id: 2, nome: "Foco Total (5t)", icon: "🥊", condicao: total >= 5 },
    { id: 3, nome: "Monstro (15t)", icon: "🏋️", condicao: total >= 15 },
    { id: 4, nome: "Lenda (30t)", icon: "👑", condicao: total >= 30 },
    { id: 5, nome: "Chama 3 Dias", icon: "⚡", condicao: streak >= 3 },
    { id: 6, nome: "Ofensiva 7 Dias", icon: "🔥", condicao: streak >= 7 },
    { id: 7, nome: "Imparável 14d", icon: "🚀", condicao: streak >= 14 },
    { id: 8, nome: "Titan 30 Dias", icon: "💎", condicao: streak >= 30 }
  ];

  let html = "";
  badges.forEach(b => {
    html += `
      <div class="badge-item ${b.condicao ? 'desbloqueado' : ''}" title="${b.nome}">
        <span class="badge-icon">${b.icon}</span>
        <span class="badge-nome">${b.nome}</span>
      </div>
    `;
  });

  container.innerHTML = html;
}

// TREINADOR E ALUNO
async function carregarTreinoDoAluno() {
  const codigoInput = document.getElementById("input-codigo-aluno");
  const codigo = codigoInput ? codigoInput.value.trim().toUpperCase() : "";

  if (!codigo) return alert("Digite o código do aluno.");

  try {
    const snap = await db.collection("usuarios").where("codigo", "==", codigo).get();
    if (snap.empty) {
      return alert("Nenhum aluno encontrado com este código.");
    }

    const docAluno = snap.docs[0];
    uidAlvoTrabalho = docAluno.id;
    const dadosAluno = docAluno.data();
    const nomeAluno = dadosAluno.nomeExibicao || dadosAluno.email.split('@')[0];

    const modalTreinador = document.getElementById("modal-treinador");
    if (modalTreinador) modalTreinador.classList.add('hidden');
    if (codigoInput) codigoInput.value = "";

    const tituloConfig = document.getElementById('titulo-modal-config');
    if (tituloConfig) tituloConfig.innerText = `⚙️ Montando Rotina de: ${nomeAluno}`;
    
    const docRotina = await db.collection("rotinas").doc(uidAlvoTrabalho).get();
    configuracaoTreino = docRotina.exists ? (docRotina.data().rotina || []) : [];

    abrirConfigRotina();
  } catch (e) {
    alert("Erro ao buscar aluno: " + e.message);
  }
}

// EXECUÇÃO E FLUXO DO TREINO
function atualizarTelaInicial() {
  const nomeTreinoEl = document.getElementById('nome-treino');
  const focoTreinoEl = document.getElementById('foco-treino');

  if (configuracaoTreino.length === 0) {
    if (nomeTreinoEl) nomeTreinoEl.innerText = "Nenhuma Rotina";
    if (focoTreinoEl) focoTreinoEl.innerText = "Toque em Configurar Divisão e Exercícios";
    return;
  }
  if (indiceTreinoAtual >= configuracaoTreino.length) indiceTreinoAtual = 0;
  
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  if (nomeTreinoEl) nomeTreinoEl.innerText = `TREINO ${treinoAtual.letra}`;
  if (focoTreinoEl) focoTreinoEl.innerText = `Músculos: ${treinoAtual.grupos.join(', ')}`;
}

function iniciarTreino() {
  ehTreinoAvulsoAtivo = false;
  const areaExecucao = document.getElementById('area-execucao');
  const listaContainer = document.getElementById('lista-exercicios');
  if (!listaContainer) return;
  listaContainer.innerHTML = '';

  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  if (!treinoAtual) return;

  treinoAtual.grupos.forEach(grupo => {
    if (grupo === "Avulso") return;
    const exerciciosGrupo = catalogoExercicios[grupo] || [];
    const selecionados = treinoAtual.exerciciosFixos || [];
    const exerciciosExibir = exerciciosGrupo.filter(ex => selecionados.length === 0 || selecionados.includes(ex.nome));

    if (exerciciosExibir.length > 0) {
      const tituloGrupo = document.createElement('h3');
      tituloGrupo.style.cssText = "color: #00e676; margin: 15px 0 8px 0; font-size: 0.95rem; text-align: left;";
      tituloGrupo.innerText = `● ${grupo}`;
      listaContainer.appendChild(tituloGrupo);
    }

    exerciciosExibir.forEach(ex => {
      renderizarCardExercicioExecucao(listaContainer, ex.nome, ex.video);
    });
  });

  const exerciciosFixosSalvos = treinoAtual.exerciciosFixos || [];
  const exerciciosManuais = exerciciosFixosSalvos.filter(nomeEx => {
    let pertenceCatalogo = false;
    Object.keys(catalogoExercicios).forEach(g => {
      if (g === "Alongamento") return;
      if (catalogoExercicios[g].some(item => item.nome === nomeEx)) {
        pertenceCatalogo = true;
      }
    });
    return !pertenceCatalogo;
  });

  if (exerciciosManuais.length > 0) {
    const tituloManual = document.createElement('h3');
    tituloManual.style.cssText = "color: #00e676; margin: 15px 0 8px 0; font-size: 0.95rem; text-align: left;";
    tituloManual.innerText = `● Outros / Avulsos`;
    listaContainer.appendChild(tituloManual);

    exerciciosManuais.forEach(nomeManual => {
      renderizarCardExercicioExecucao(listaContainer, nomeManual, null);
    });
  }

  if (areaExecucao) areaExecucao.classList.remove('hidden');
}

function renderizarCardExercicioExecucao(container, nomeExercicio, videoUrl) {
  const cardEx = document.createElement('div');
  cardEx.className = 'item-exercicio';
  
  const topo = document.createElement('div');
  topo.className = 'exercicio-topo';
  
  const label = document.createElement('label');
  label.innerHTML = `<input type="checkbox" class="check-ex" data-nome="${nomeExercicio}" checked> <strong>${nomeExercicio}</strong>`;
  
  topo.appendChild(label);

  if (videoUrl) {
    const btnVid = document.createElement('button');
    btnVid.className = 'btn-secundario';
    btnVid.style.cssText = 'padding: 4px 8px; font-size: 0.75rem;';
    btnVid.innerText = '▶ Vídeo';
    btnVid.addEventListener('click', () => verVideo(nomeExercicio, videoUrl));
    topo.appendChild(btnVid);
  }

  const inputs = document.createElement('div');
  inputs.className = 'inputs-treino';
  inputs.innerHTML = `
    <div class="input-group">
      <label>Séries</label>
      <input type="number" value="3" class="input-series">
    </div>
    <div class="input-group">
      <label>Reps</label>
      <input type="text" value="8-10" class="input-reps">
    </div>
    <div class="input-group" style="flex: 1.2; min-width: 100px;">
      <label>Carga (kg)</label>
      <input type="number" placeholder="Opcional" class="input-carga">
    </div>
  `;

  cardEx.appendChild(topo);
  cardEx.appendChild(inputs);
  container.appendChild(cardEx);
}

async function concluirTreino() {
  const hojeChave = obterDataLocalIso();
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];

  const itensEx = document.querySelectorAll('#lista-exercicios .item-exercicio');
  const exerciciosConcluidos = [];

  itensEx.forEach(item => {
    const check = item.querySelector('.check-ex');
    if (check && check.checked) {
      const nome = check.getAttribute('data-nome');
      const series = item.querySelector('.input-series').value || "3";
      const reps = item.querySelector('.input-reps').value || "8-10";
      const carga = item.querySelector('.input-carga').value;

      exerciciosConcluidos.push({
        nome: nome,
        series: series,
        reps: reps,
        carga: carga ? `${carga} kg` : "Sem carga"
      });
    }
  });

  const letraTreino = ehTreinoAvulsoAtivo ? "AV" : (treinoAtual ? treinoAtual.letra : "A");
  const gruposTreino = ehTreinoAvulsoAtivo ? ["Avulso"] : (treinoAtual ? treinoAtual.grupos : ["Geral"]);

  historicoTreinos[hojeChave] = {
    letra: letraTreino,
    grupos: gruposTreino,
    exercicios: exerciciosConcluidos
  };

  await db.collection("historicos").doc(usuarioLogado.uid).set(historicoTreinos);

  if (!ehTreinoAvulsoAtivo && configuracaoTreino.length > 0) {
    indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
    await db.collection("rotinas").doc(usuarioLogado.uid).set({
      rotina: configuracaoTreino,
      indiceAtual: indiceTreinoAtual
    });
  }

  ehTreinoAvulsoAtivo = false;
  alert('Treino concluído com sucesso! 👏');
  
  const areaExecucao = document.getElementById('area-execucao');
  if (areaExecucao) areaExecucao.classList.add('hidden');
  
  atualizarTelaInicial();
  renderizarCalendario();
  calcularEstatisticasEOfensiva();
}

async function trocarTreinoManual() {
  if (!configuracaoTreino || configuracaoTreino.length === 0) return;
  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;

  if (usuarioLogado) {
    try {
      await db.collection("rotinas").doc(usuarioLogado.uid).set({
        rotina: configuracaoTreino,
        indiceAtual: indiceTreinoAtual
      }, { merge: true });
    } catch (e) {
      console.error("Erro ao atualizar o treino no banco:", e);
    }
  }

  const areaExecucao = document.getElementById('area-execucao');
  if (areaExecucao) areaExecucao.classList.add('hidden');
  atualizarTelaInicial();
}

function renderizarCalendario() {
  const cal = document.getElementById('calendario');
  if (!cal) return;
  cal.innerHTML = '';

  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    const dataIso = `${ano}-${mes}-${dia}`;

    const div = document.createElement('div');
    const treinoFeito = historicoTreinos[dataIso];

    div.className = `dia-cal ${treinoFeito ? 'treinado' : ''}`;
    div.innerHTML = `
      <div>${d.getDate()}/${d.getMonth() + 1}</div>
      <small>${treinoFeito ? 'Treino ' + treinoFeito.letra : '-'}</small>
    `;

    div.onclick = () => abrirDetalhesDia(dataIso);
    cal.appendChild(div);
  }
}

function abrirDetalhesDia(dataIso) {
  const treinoFeito = historicoTreinos[dataIso];
  const modal = document.getElementById('modal-detalhes');
  const corpo = document.getElementById('detalhes-corpo');
  const dataFormatada = obterDataFormatadaBR(dataIso);

  const detalhesData = document.getElementById('detalhes-data');
  if (detalhesData) detalhesData.innerText = `Treino de ${dataFormatada}`;

  if (!treinoFeito) {
    if (corpo) corpo.innerHTML = "<p style='color: #a8a8b3;'>Nenhum treino registrado neste dia.</p>";
  } else {
    let html = `<p style='margin-bottom: 10px;'><strong>Treino ${treinoFeito.letra}</strong> (${treinoFeito.grupos.join(', ')})</p>`;
    html += "<div style='max-height: 50vh; overflow-y: auto; padding-right: 5px;'>";
    html += "<ul style='list-style: none; padding: 0;'>";
    
    treinoFeito.exercicios.forEach(ex => {
      html += `
        <li style='background: #121214; padding: 10px; border-radius: 6px; margin-bottom: 8px; font-size: 0.85rem; border: 1px solid #29292e;'>
          <strong>${ex.nome}</strong><br>
          <span style='color: #a8a8b3;'>${ex.series} séries x ${ex.reps} reps | Carga: ${ex.carga}</span>
        </li>
      `;
    });
    html += "</ul></div>";
    if (corpo) corpo.innerHTML = html;
  }

  if (modal) modal.classList.remove('hidden');
}

function fecharModalDetalhes() {
  const modal = document.getElementById('modal-detalhes');
  if (modal) modal.classList.add('hidden');
}

// CONFIGURAÇÃO DE ROTINA
function abrirConfigRotina() {
  const modal = document.getElementById('modal-config-rotina');
  if (modal) modal.classList.remove('hidden');
  
  const inputDivisao = document.getElementById('input-divisao-letras');
  if (inputDivisao) {
    if (configuracaoTreino && configuracaoTreino.length > 0) {
      inputDivisao.value = configuracaoTreino.map(t => t.letra).join('');
    } else {
      inputDivisao.value = "ABC";
    }
  }
  gerarCamposConfig();
}

function gerarCamposConfig() {
  const inputDiv = document.getElementById('input-divisao-letras');
  if (!inputDiv) return;
  const letras = inputDiv.value.toUpperCase().trim().split('');
  const container = document.getElementById('container-config-dias');
  if (!container) return;
  container.innerHTML = '';

  if (letras.length === 0 || (letras.length === 1 && letras[0] === "")) return;

  letras.forEach((letra) => {
    const treinoSalvo = configuracaoTreino.find(t => t.letra === letra);
    const gruposSalvos = treinoSalvo ? treinoSalvo.grupos : [];
    const exerciciosFixosSalvos = treinoSalvo ? (treinoSalvo.exerciciosFixos || []) : [];
    
    const exerciciosManuaisSalvos = exerciciosFixosSalvos.filter(exNome => {
      let pertenceCatalogo = false;
      Object.keys(catalogoExercicios).forEach(g => {
        if (g === "Alongamento") return;
        if (catalogoExercicios[g].some(item => item.nome === exNome)) {
          pertenceCatalogo = true;
        }
      });
      return !pertenceCatalogo;
    });

    const bloco = document.createElement('div');
    bloco.style.cssText = "margin-bottom: 20px; border-bottom: 1px solid #29292e; padding-bottom: 15px;";
    
    let html = `<h4 style='color: #00e676; margin-bottom: 8px; text-align: left;'>Treino ${letra}</h4>`;
    html += `<p style='font-size: 0.8rem; color: #a8a8b3; text-align: left;'>Selecione os músculos e exercícios fixos:</p>`;
    html += `<div class='grupo-checkboxes' data-letra='${letra}'>`;
    
    todosGrupos.forEach(grupo => {
      const estaMarcado = gruposSalvos.includes(grupo) ? 'checked' : '';
      html += `
        <label>
          <input type='checkbox' value='${grupo}' ${estaMarcado} onchange='toggleExerciciosMontagem(this, "${letra}", "${grupo}")'> ${grupo}
        </label>
        <div id='exs-${letra}-${grupo}' class='seletor-exercicios-montagem ${estaMarcado ? '' : 'hidden'}'></div>
      `;
    });
    html += `</div>`;

    html += `
      <div style="margin-top: 15px; padding: 10px; background-color: #121214; border-radius: 6px; border: 1px solid #29292e;">
        <p style="font-size: 0.8rem; color: #00e676; margin-bottom: 8px; font-weight: bold;">+ Adicionar Treino Avulso / Manual no Treino ${letra}:</p>
        <div id="lista-outros-config-${letra}" class="container-outros-config" data-letra="${letra}">
    `;

    if (exerciciosManuaisSalvos.length > 0) {
      exerciciosManuaisSalvos.forEach(nomeManual => {
        html += `
          <div class="campo-treino-item-config" style="display: flex; align-items: center; margin-bottom: 8px;">
            <input type="text" class="input-outro-treino-config" value="${nomeManual}" placeholder="Ex: Corrida, Abdominal livre..." style="flex: 1; padding: 8px; border-radius: 6px; border: 1px solid #333; background-color: #1e1e24; color: #fff; font-size: 13px; box-sizing: border-box;" />
            <button type="button" onclick="this.parentElement.remove()" style="background: none; border: none; color: #ff5252; margin-left: 8px; cursor: pointer; font-size: 16px;">✕</button>
          </div>
        `;
      });
    }

    html += `
        </div>
        <button type="button" onclick="adicionarCampoTreinoConfig('${letra}')" style="background-color: #29292e; color: #00e676; border: 1px solid #00e676; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: bold; cursor: pointer; margin-top: 5px;">
          + Adicionar linha avulsa
        </button>
      </div>
    `;

    bloco.innerHTML = html;
    container.appendChild(bloco);

    todosGrupos.forEach(grupo => {
      if (gruposSalvos.includes(grupo)) {
        const cbMock = { checked: true };
        toggleExerciciosMontagem(cbMock, letra, grupo);
      }
    });
  });

  const btnSalvar = document.getElementById('btn-salvar-rotina');
  if (btnSalvar) btnSalvar.classList.remove('hidden');
}

function adicionarCampoTreinoConfig(letra) {
  const container = document.getElementById(`lista-outros-config-${letra}`);
  if (!container) return;

  const divItem = document.createElement('div');
  divItem.className = 'campo-treino-item-config';
  divItem.style.cssText = 'display: flex; align-items: center; margin-bottom: 8px;';

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'input-outro-treino-config';
  input.placeholder = 'Ex: Corrida, Abdominal livre...';
  input.style.cssText = 'flex: 1; padding: 8px; border-radius: 6px; border: 1px solid #333; background-color: #1e1e24; color: #fff; font-size: 13px; box-sizing: border-box;';

  const btnRemover = document.createElement('button');
  btnRemover.type = 'button';
  btnRemover.innerText = '✕';
  btnRemover.style.cssText = 'background: none; border: none; color: #ff5252; margin-left: 8px; cursor: pointer; font-size: 16px; padding: 0 4px;';
  btnRemover.onclick = function () {
    container.removeChild(divItem);
  };

  divItem.appendChild(input);
  divItem.appendChild(btnRemover);
  container.appendChild(divItem);
}

function toggleExerciciosMontagem(cb, letra, grupo) {
  const containerExs = document.getElementById(`exs-${letra}-${grupo}`);
  if (!containerExs) return;

  const treinoSalvo = configuracaoTreino.find(t => t.letra === letra);
  const exerciciosFixosSalvos = treinoSalvo ? (treinoSalvo.exerciciosFixos || []) : [];

  if (cb.checked) {
    containerExs.classList.remove('hidden');
    containerExs.innerHTML = `<strong style='font-size: 0.75rem; color: #00e676;'>Exercícios de ${grupo}:</strong>`;
    
    catalogoExercicios[grupo].forEach(ex => {
      const marcado = exerciciosFixosSalvos.includes(ex.nome) ? 'checked' : '';
      containerExs.innerHTML += `
        <label style='font-weight: normal;'>
          <input type='checkbox' class='cb-ex-fixo' data-letra='${letra}' data-grupo='${grupo}' value='${ex.nome}' ${marcado}> ${ex.nome}
        </label>
      `;
    });
  } else {
    containerExs.classList.add('hidden');
    containerExs.innerHTML = '';
  }
}

async function salvarNovaConfig() {
  const blocos = document.querySelectorAll('.grupo-checkboxes');
  const novaRotina = [];

  blocos.forEach(bloco => {
    const letra = bloco.getAttribute('data-letra');
    const marcados = [];
    bloco.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
      if (todosGrupos.includes(cb.value)) {
        marcados.push(cb.value);
      }
    });

    const exerciciosFixos = [];
    bloco.querySelectorAll('.cb-ex-fixo:checked').forEach(cbEx => {
      exerciciosFixos.push(cbEx.value);
    });

    const containerOutros = document.getElementById(`lista-outros-config-${letra}`);
    if (containerOutros) {
      const inputsManuais = containerOutros.querySelectorAll('.input-outro-treino-config');
      inputsManuais.forEach(input => {
        const texto = input.value.trim();
        if (texto && !exerciciosFixos.includes(texto)) {
          exerciciosFixos.push(texto);
        }
      });
    }

    if (marcados.length > 0 || exerciciosFixos.length > 0) {
      novaRotina.push({ 
        letra: letra, 
        grupos: marcados.length > 0 ? marcados : ["Avulso"],
        exerciciosFixos: exerciciosFixos
      });
    }
  });

  if (novaRotina.length > 0) {
    await db.collection("rotinas").doc(uidAlvoTrabalho).set({
      rotina: novaRotina,
      indiceAtual: 0
    });
    
    fecharModalConfig();
    alert('Nova rotina salva com sucesso!');

    if (uidAlvoTrabalho === usuarioLogado.uid) {
      configuracaoTreino = novaRotina;
      indiceTreinoAtual = 0;
      atualizarTelaInicial();
    }
  } else {
    alert('Configure pelo menos um exercício ou músculo na rotina.');
  }
}

function fecharModalConfig() {
  const modal = document.getElementById('modal-config-rotina');
  if (modal) modal.classList.add('hidden');
  uidAlvoTrabalho = usuarioLogado ? usuarioLogado.uid : null;
}

// VÍDEOS DE EXECUÇÃO
function verVideo(titulo, url) {
  const tituloEl = document.getElementById('video-titulo');
  if (tituloEl) tituloEl.innerText = titulo;
  
  let urlFormatada = url;
  if (!urlFormatada.includes('?')) {
    urlFormatada += '?enablejsapi=1&rel=0';
  } else {
    urlFormatada += '&enablejsapi=1&rel=0';
  }

  const containerVid = document.getElementById('video-container');
  if (containerVid) {
    containerVid.innerHTML = `
      <iframe 
        width="100%" 
        height="220" 
        src="${urlFormatada}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    `;
  }
  const modalVid = document.getElementById('modal-video');
  if (modalVid) modalVid.classList.remove('hidden');
}

function fecharModalVideo() {
  const modalVid = document.getElementById('modal-video');
  const containerVid = document.getElementById('video-container');
  if (modalVid) modalVid.classList.add('hidden');
  if (containerVid) containerVid.innerHTML = '';
}

function carregarBlocoAlongamento() {
  const container = document.getElementById('lista-alongamento');
  if (!container) return;
  container.innerHTML = '';

  catalogoExercicios.Alongamento.forEach(ex => {
    const item = document.createElement('div');
    item.className = 'item-exercicio';
    item.style.cssText = "display: flex; justify-content: space-between; align-items: center;";

    const span = document.createElement('span');
    span.style.fontSize = "0.85rem";
    span.innerText = ex.nome;

    const btn = document.createElement('button');
    btn.className = 'btn-secundario';
    btn.style.cssText = 'padding: 4px 8px; font-size: 0.75rem;';
    btn.innerText = '▶ Vídeo';
    btn.addEventListener('click', () => verVideo(ex.nome, ex.video));

    item.appendChild(span);
    item.appendChild(btn);
    container.appendChild(item);
  });
}

// AMIGOS E CONVITES
document.getElementById('btn-enviar-convite')?.addEventListener('click', async () => {
  const inputCodigo = document.getElementById('input-codigo-amigo');
  const codigoDigitado = inputCodigo ? inputCodigo.value.trim().toUpperCase() : "";
  const userAtual = auth.currentUser;

  if (!codigoDigitado) return alert("Digite o código do seu amigo.");

  try {
    const amigosSnapAtual = await db.collection("amizades")
      .where("usuarios", "array-contains", userAtual.uid)
      .get();

    const mapaAmigosCheck = new Map();
    amigosSnapAtual.docs.forEach(doc => {
      const amizade = doc.data();
      const amigoId = amizade.usuarios.find(id => id !== userAtual.uid);
      if (amigoId) mapaAmigosCheck.set(amigoId, true);
    });

    if (mapaAmigosCheck.size >= 25) {
      return alert("Você atingiu o limite máximo de 25 amigos!");
    }

    const snap = await db.collection("usuarios").where("codigo", "==", codigoDigitado).get();
    if (snap.empty) return alert("Usuário não encontrado com esse código.");

    const amigoDoc = snap.docs[0];
    const amigoData = amigoDoc.data();
    const amigoId = amigoDoc.id;

    if (amigoId === userAtual.uid) {
      return alert("Você não pode adicionar a si mesmo.");
    }

    if (mapaAmigosCheck.has(amigoId)) {
      return alert(`Você e ${amigoData.nomeExibicao || 'essa pessoa'} já são amigos!`);
    }

    await db.collection("convites_amizade").add({
      remetenteId: userAtual.uid,
      destinatarioId: amigoId,
      status: "pendente",
      criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert(`Convite enviado com sucesso para ${amigoData.nomeExibicao || 'o usuário'}!`);
    if (inputCodigo) inputCodigo.value = "";
  } catch (err) {
    console.error("Erro ao enviar convite:", err);
    alert("Erro ao enviar convite: " + err.message);
  }
});

async function carregarAmigosEConvites() {
  const userAtual = auth.currentUser;
  if (!userAtual) return;

  const listaAmigos = document.getElementById('lista-amigos');
  const containerConvites = document.getElementById('container-convites-pendentes');
  const listaConvites = document.getElementById('lista-convites');

  if (listaAmigos) listaAmigos.innerHTML = "<p style='color: #a1a1aa; font-size: 0.85rem;'>Carregando amigos...</p>";
  if (listaConvites) listaConvites.innerHTML = "";

  try {
    const convitesSnap = await db.collection("convites_amizade")
      .where("destinatarioId", "==", userAtual.uid)
      .where("status", "==", "pendente")
      .get();

    if (!convitesSnap.empty) {
      if (containerConvites) containerConvites.classList.remove('hidden');
      
      const promessasConvites = convitesSnap.docs.map(async (doc) => {
        const convite = doc.data();
        let remetenteNome = 'Usuário';
        try {
          const remetenteDoc = await db.collection("usuarios").doc(convite.remetenteId).get();
          if (remetenteDoc.exists) {
            remetenteNome = remetenteDoc.data().nomeExibicao || 'Usuário';
          }
        } catch (e) {}

        return `
          <div class="item-convite" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span><b>${remetenteNome}</b> quer ser seu amigo.</span>
            <button onclick="aceitarAmigo('${doc.id}', '${convite.remetenteId}')" class="btn-primario" style="padding: 4px 10px; font-size: 0.8rem;">Aceitar</button>
          </div>
        `;
      });

      const htmlConvites = await Promise.all(promessasConvites);
      if (listaConvites) listaConvites.innerHTML = htmlConvites.join('');
    } else {
      if (containerConvites) containerConvites.classList.add('hidden');
    }

    const amigosSnap = await db.collection("amizades")
      .where("usuarios", "array-contains", userAtual.uid)
      .get();

    if (amigosSnap.empty) {
      if (listaAmigos) listaAmigos.innerHTML = `<p style="color: #a1a1aa; font-size: 0.85rem;">Você ainda não possui amigos adicionados.</p>`;
      return;
    }

    const mapaAmigos = new Map();
    amigosSnap.docs.forEach(doc => {
      const amizade = doc.data();
      const amigoId = amizade.usuarios.find(id => id !== userAtual.uid);
      if (amigoId && !mapaAmigos.has(amigoId)) {
        mapaAmigos.set(amigoId, doc.id);
      }
    });

    const promessasAmigos = Array.from(mapaAmigos.entries()).map(async ([amigoId, amizadeDocId]) => {
      let userData = {};
      let historico = {};

      try {
        const userDoc = await db.collection("usuarios").doc(amigoId).get();
        if (userDoc.exists) userData = userDoc.data();
      } catch (e) {}

      try {
        const histDoc = await db.collection("historicos").doc(amigoId).get();
        if (histDoc.exists) historico = histDoc.data();
      } catch (e) {}

      const statsAmigo = calcularStatsMembro(historico);
      const nomeAmigo = userData.nomeExibicao || 'Amigo';

      return { amizadeDocId, nomeAmigo, statsAmigo };
    });

    const listaProcessada = await Promise.all(promessasAmigos);
    if (listaAmigos) listaAmigos.innerHTML = "";

    listaProcessada.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item-amigo';
      div.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; background: #121214; padding: 10px; border-radius: 6px; border: 1px solid #29292e;";
      
      div.innerHTML = `
        <div style="flex: 1;">
          <strong style="color: #fff; font-size: 0.9rem;">${item.nomeAmigo}</strong>
          <div style="font-size: 0.8rem; color: #00e676; margin-top: 2px;">
            🔥 ${item.statsAmigo.streak} dias seguidos | 📊 ${item.statsAmigo.total} treinos
          </div>
        </div>
        <button onclick="removerAmizade('${item.amizadeDocId}', '${item.nomeAmigo.replace(/'/g, "\\'")}')" style="background: transparent; border: none; color: #ef4444; font-size: 1.1rem; cursor: pointer; padding: 4px 8px;">✖</button>
      `;
      listaAmigos.appendChild(div);
    });

    const textoContadorAmigos = document.getElementById('contador-amigos-texto');
    if (textoContadorAmigos) {
      textoContadorAmigos.innerText = `Você possui ${String(listaProcessada.length).padStart(2, '0')}/25 amigos`;
    }
  } catch (err) {
    console.error("Erro ao carregar amigos:", err);
  }
}

async function removerAmizade(amizadeDocId, nomeAmigo) {
  if (!confirm(`Quer remover amizade com ${nomeAmigo}?`)) return;
  try {
    await db.collection("amizades").doc(amizadeDocId).delete();
    carregarAmigosEConvites();
  } catch (err) {
    alert("Erro ao remover amizade: " + err.message);
  }
}

async function aceitarAmigo(conviteId, remetenteId) {
  const userAtual = auth.currentUser;
  try {
    await db.collection("amizades").add({
      usuarios: [userAtual.uid, remetenteId],
      criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });
    await db.collection("convites_amizade").doc(conviteId).update({ status: "aceito" });
    carregarAmigosEConvites();
  } catch (err) {
    alert("Erro ao aceitar convite: " + err.message);
  }
}

// FEED DOS AMIGOS E EQUIPES
async function carregarFeedAmigos() {
  const userAtual = auth.currentUser;
  if (!userAtual) return;

  const areaPostar = document.getElementById('area-postar-checkin');
  const avisoCheckin = document.getElementById('aviso-checkin-realizado');
  const hoje = obterDataLocalIso();

  try {
    const checkHoje = await db.collection("feed_amigos")
      .where("usuarioId", "==", userAtual.uid)
      .where("dataData", "==", hoje)
      .get();

    if (!checkHoje.empty) {
      if (areaPostar) areaPostar.classList.add('hidden');
      if (avisoCheckin) avisoCheckin.classList.remove('hidden');
    } else {
      if (areaPostar) areaPostar.classList.remove('hidden');
      if (avisoCheckin) avisoCheckin.classList.add('hidden');
    }
  } catch (e) {}

  const idsPermitidos = [userAtual.uid];
  try {
    const amizadesSnap = await db.collection("amizades")
      .where("usuarios", "array-contains", userAtual.uid)
      .get();

    amizadesSnap.forEach(doc => {
      const amizade = doc.data();
      const amigoId = amizade.usuarios.find(id => id !== userAtual.uid);
      if (amigoId) idsPermitidos.push(amigoId);
    });
  } catch (e) {}

  const containerFeed = document.getElementById('container-feed-fotos');
  if (!containerFeed) return;
  containerFeed.innerHTML = "";

  try {
    const feedSnap = await db.collection("feed_amigos").get();
    let posts = [];

    feedSnap.forEach(doc => {
      const data = doc.data();
      if (idsPermitidos.includes(data.usuarioId)) {
        posts.push({ id: doc.id, ...data });
      }
    });

    posts.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    posts = posts.slice(0, 20);

    if (posts.length === 0) {
      containerFeed.innerHTML = `<p style="color: #a1a1aa; font-size: 0.85rem; text-align: center; margin-top: 20px;">Nenhum check-in postado recentemente.</p>`;
      return;
    }

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post-feed-card';
      div.innerHTML = `
        <div class="post-feed-header">
          <span><b>📸 ${post.nomeUsuario}</b> fez o check-in</span>
          <span style="color: #a1a1aa;">${post.dataExibicao}</span>
        </div>
        <img src="${post.fotoUrl}" class="post-feed-img" alt="Check-in">
      `;
      containerFeed.appendChild(div);
    });
  } catch (err) {
    containerFeed.innerHTML = `<p style="color: #ef4444; font-size: 0.85rem; text-align: center;">Erro ao carregar fotos.</p>`;
  }
}

// EQUIPES
async function abrirModalEquipes() {
  const modalEq = document.getElementById('modal-equipes');
  if (modalEq) modalEq.classList.remove('hidden');
  voltarParaListaEquipes();
  await carregarEquipesDoUsuario();
}

function fecharModalEquipes() {
  const modalEq = document.getElementById('modal-equipes');
  if (modalEq) modalEq.classList.add('hidden');
}

function voltarParaListaEquipes() {
  const listaEq = document.getElementById('view-lista-equipes');
  const detalheEq = document.getElementById('view-detalhes-equipe');
  if (listaEq) listaEq.classList.remove('hidden');
  if (detalheEq) detalheEq.classList.add('hidden');
  equipeAtiva = null;
}

async function carregarEquipesDoUsuario() {
  if (!usuarioLogado) return;
  const container = document.getElementById('container-lista-equipes');
  if (!container) return;
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Carregando equipes...</p>";

  try {
    const snap = await db.collection("equipes").where("membrosUids", "array-contains", usuarioLogado.uid).get();
    equipesDoUsuario = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const txtContador = document.getElementById('contador-equipes-texto');
    if (txtContador) txtContador.innerText = `Você participa de ${equipesDoUsuario.length}/5 equipes`;

    if (equipesDoUsuario.length === 0) {
      container.innerHTML = "<p style='font-size:0.85rem; color:#a8a8b3;'>Você ainda não participa de nenhuma equipe.</p>";
      return;
    }

    let html = "";
    equipesDoUsuario.forEach(eq => {
      html += `
        <div class="equipe-item-card" onclick="abrirDetalhesEquipe('${eq.id}')">
          <div>
            <div class="equipe-item-nome">👥 ${eq.nome}</div>
            <div class="equipe-item-membros-count">${eq.membrosUids.length} membro(s)</div>
          </div>
          <span style="color: #00e676; font-weight: bold;">➔</span>
        </div>
      `;
    });
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = "<p style='font-size:0.8rem; color:#f75a68;'>Erro ao carregar equipes.</p>";
  }
}

async function criarEquipe() {
  if (!usuarioLogado) return;
  if (equipesDoUsuario.length >= 5) {
    return alert("Você atingiu o limite de 5 equipes ativas!");
  }

  const inputNome = document.getElementById("input-nome-equipe");
  const nome = inputNome ? inputNome.value.trim() : "";
  if (!nome) return alert("Digite um nome para a equipe.");

  try {
    await db.collection("equipes").add({
      nome: nome,
      criadorUid: usuarioLogado.uid,
      membrosUids: [usuarioLogado.uid]
    });
    if (inputNome) inputNome.value = "";
    await carregarEquipesDoUsuario();
    alert("Equipe criada com sucesso!");
  } catch (e) {
    alert("Erro ao criar equipe: " + e.message);
  }
}

async function abrirDetalhesEquipe(equipeId) {
  equipeAtiva = equipesDoUsuario.find(eq => eq.id === equipeId);
  if (!equipeAtiva) return;

  const listaEq = document.getElementById('view-lista-equipes');
  const detalheEq = document.getElementById('view-detalhes-equipe');
  if (listaEq) listaEq.classList.add('hidden');
  if (detalheEq) detalheEq.classList.remove('hidden');

  const tituloEq = document.getElementById('titulo-equipe-ativa');
  if (tituloEq) tituloEq.innerText = `👥 ${equipeAtiva.nome}`;
  mudarAbaEquipe('membros');
}

function mudarAbaEquipe(aba) {
  ['membros', 'ranking', 'feed'].forEach(a => {
    const abaEl = document.getElementById(`aba-${a}`);
    const contEl = document.getElementById(`conteudo-aba-${a}`);
    if (abaEl) abaEl.classList.remove('ativa');
    if (contEl) contEl.classList.add('hidden');
  });

  const abaAtiva = document.getElementById(`aba-${aba}`);
  const contAtivo = document.getElementById(`conteudo-aba-${aba}`);
  if (abaAtiva) abaAtiva.classList.add('ativa');
  if (contAtivo) contAtivo.classList.remove('hidden');

  if (aba === 'membros') renderizarMembrosEquipe();
  if (aba === 'ranking') renderizarRankingEquipe();
  if (aba === 'feed') renderizarFeedEquipe();
}

async function renderizarMembrosEquipe() {
  if (!equipeAtiva) return;
  const container = document.getElementById("container-membros-equipe");
  if (!container) return;
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Carregando membros...</p>";

  try {
    const promessas = equipeAtiva.membrosUids.map(async (uid) => {
      let userData = { email: "Usuário", codigo: "--", nomeExibicao: "" };
      let historico = {};

      try {
        const uDoc = await db.collection("usuarios").doc(uid).get();
        if (uDoc.exists) userData = uDoc.data();
      } catch (e) {}

      try {
        const hDoc = await db.collection("historicos").doc(uid).get();
        if (hDoc.exists) historico = hDoc.data();
      } catch (e) {}

      const stats = calcularStatsMembro(historico);
      const nomeExibicao = userData.nomeExibicao || 'Usuário';
      return { uid, nomeExibicao, codigo: userData.codigo || "--", stats };
    });

    const membros = await Promise.all(promessas);
    let html = "";
    membros.forEach(m => {
      html += `
        <div class="membro-card">
          <div class="membro-info">
            <span class="membro-email">${m.nomeExibicao} ${m.uid === usuarioLogado.uid ? '(Você)' : ''}</span>
            <span class="membro-codigo">${m.codigo}</span>
          </div>
          <div class="membro-stats">
            <span class="stat-badge">🔥 ${m.stats.streak}d</span>
            <span class="stat-badge" style="color: #e1e1e6;">📊 ${m.stats.total}t</span>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = "<p style='font-size:0.8rem; color:#f75a68;'>Erro ao carregar membros.</p>";
  }
}

async function renderizarRankingEquipe() {
  if (!equipeAtiva) return;
  const container = document.getElementById("container-ranking-equipe");
  if (!container) return;
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Gerando ranking...</p>";

  try {
    const promessas = equipeAtiva.membrosUids.map(async (uid) => {
      let userData = { nomeExibicao: "" };
      let historico = {};
      try {
        const uDoc = await db.collection("usuarios").doc(uid).get();
        if (uDoc.exists) userData = uDoc.data();
      } catch (e) {}
      try {
        const hDoc = await db.collection("historicos").doc(uid).get();
        if (hDoc.exists) historico = hDoc.data();
      } catch (e) {}

      const stats = calcularStatsMembro(historico);
      const pontos = (stats.total * 10) + (stats.streak * 25);
      const nome = userData.nomeExibicao || 'Usuário';
      return { nome, isVoce: uid === usuarioLogado.uid, streak: stats.streak, total: stats.total, pontos };
    });

    const lista = await Promise.all(promessas);
    lista.sort((a, b) => b.pontos - a.pontos);

    let html = "";
    const trofeus = ["🥇", "🥈", "🥉"];
    lista.forEach((m, idx) => {
      const posi = trofeus[idx] || `#${idx + 1}`;
      html += `
        <div class="membro-card" style="${idx === 0 ? 'border-color: #ffb703;' : ''}">
          <div class="membro-info">
            <span class="membro-email">${posi} ${m.nome} ${m.isVoce ? '(Você)' : ''}</span>
            <span class="membro-codigo">${m.pontos} Pts (🔥${m.streak}d | 📊${m.total}t)</span>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = "<p style='font-size:0.8rem; color:#f75a68;'>Erro ao carregar ranking.</p>";
  }
}

async function adicionarMembroEquipe() {
  if (!equipeAtiva) return;
  const inputCodigo = document.getElementById("input-codigo-membro");
  const codigo = inputCodigo ? inputCodigo.value.trim().toUpperCase() : "";
  if (!codigo) return alert("Digite o código do aluno.");

  try {
    if (equipeAtiva.membrosUids.length >= 15) {
      return alert("Esta equipe atingiu o limite máximo de 15 membros!");
    }

    const snap = await db.collection("usuarios").where("codigo", "==", codigo).get();
    if (snap.empty) return alert("Nenhum aluno encontrado.");

    const uidNovo = snap.docs[0].id;
    if (equipeAtiva.membrosUids.includes(uidNovo)) return alert("Já faz parte da equipe.");

    equipeAtiva.membrosUids.push(uidNovo);
    await db.collection("equipes").doc(equipeAtiva.id).update({ membrosUids: equipeAtiva.membrosUids });
    if (inputCodigo) inputCodigo.value = "";
    await renderizarMembrosEquipe();
    alert("Membro adicionado com sucesso!");
  } catch (e) {
    alert("Erro ao adicionar membro: " + e.message);
  }
}

async function sairDaEquipeAtiva() {
  if (!equipeAtiva || !confirm(`Sair da equipe "${equipeAtiva.nome}"?`)) return;
  try {
    equipeAtiva.membrosUids = equipeAtiva.membrosUids.filter(uid => uid !== usuarioLogado.uid);
    if (equipeAtiva.membrosUids.length === 0) {
      await db.collection("equipes").doc(equipeAtiva.id).delete();
    } else {
      await db.collection("equipes").doc(equipeAtiva.id).update({ membrosUids: equipeAtiva.membrosUids });
    }
    voltarParaListaEquipes();
    await carregarEquipesDoUsuario();
    alert("Você saiu da equipe.");
  } catch (e) {
    alert("Erro ao sair: " + e.message);
  }
}

async function publicarFotoNoFeed() {
  if (!equipeAtiva || !usuarioLogado) return alert("Selecione uma equipe primeiro.");
  const fileInput = document.getElementById('input-foto-feed');
  if (!fileInput || !fileInput.files.length) return alert("Selecione uma foto!");

  const file = fileInput.files[0];
  const btnPub = document.getElementById('btn-publicar-foto');
  if (btnPub) { btnPub.disabled = true; btnPub.innerText = "⏳ Publicando..."; }

  comprimirImagem(file, 800, 800, 0.7, async function(base64Comprimido) {
    const agora = new Date();
    try {
      await db.collection("feed_fotos").add({
        equipeId: equipeAtiva.id,
        usuarioUid: usuarioLogado.uid,
        usuarioNome: perfilUsuario.nomeExibicao || 'Usuário',
        fotoUrl: base64Comprimido,
        dataIso: obterDataLocalIso(),
        dataHora: agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        timestamp: agora.getTime(),
        curtidas: []
      });
      fileInput.value = "";
      alert("Foto publicada com sucesso!");
      await renderizarFeedEquipe();
    } catch (err) {
      alert("Erro: " + err.message);
    } finally {
      if (btnPub) { btnPub.disabled = false; btnPub.innerText = "📸 Publicar Foto no Feed"; }
    }
  });
}

async function renderizarFeedEquipe() {
  if (!equipeAtiva) return;
  const container = document.getElementById("container-feed-equipe");
  if (!container) return;
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Carregando feed...</p>";

  try {
    const snap = await db.collection("feed_fotos").where("equipeId", "==", equipeAtiva.id).get();
    if (snap.empty) {
      container.innerHTML = "<p style='font-size:0.85rem; color:#a8a8b3;'>Ainda não há fotos nesta equipe.</p>";
      return;
    }

    let posts = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    posts.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    let html = "";
    posts.forEach(post => {
      const curtidas = post.curtidas || [];
      const jaCurtiu = usuarioLogado ? curtidas.includes(usuarioLogado.uid) : false;
      html += `
        <div class="feed-foto-card">
          <div class="feed-header">
            <span class="feed-usuario">📸 ${post.usuarioNome}</span>
            <span class="feed-data">${post.dataHora || ''}</span>
          </div>
          <img src="${post.fotoUrl}" class="feed-foto-img" alt="Foto">
          <div>
            <button class="btn-curtir ${jaCurtiu ? 'curtido' : ''}" onclick="alternarCurtida('${post.id}')">
              ❤️ ${curtidas.length} ${curtidas.length === 1 ? 'Curtida' : 'Curtidas'}
            </button>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = "<p style='font-size:0.8rem; color:#f75a68;'>Erro ao carregar feed.</p>";
  }
}

async function alternarCurtida(postId) {
  if (!usuarioLogado) return;
  try {
    const ref = db.collection("feed_fotos").doc(postId);
    const doc = await ref.get();
    if (doc.exists) {
      let curtidas = doc.data().curtidas || [];
      if (curtidas.includes(usuarioLogado.uid)) {
        curtidas = curtidas.filter(id => id !== usuarioLogado.uid);
      } else {
        curtidas.push(usuarioLogado.uid);
      }
      await ref.update({ curtidas });
      renderizarFeedEquipe();
    }
  } catch (e) {}
}

// --- LÓGICA DO BOTÃO DO SINO E NOTIFICAÇÕES ---
const btnNotificacoes = document.getElementById('btn-notificacoes');
const modalNotificacoes = document.getElementById('modal-notificacoes');
const btnFecharNotificacoes = document.getElementById('btn-fechar-modal-notificacoes');
const badgeNotificacao = document.getElementById('badge-notificacao');

// Ao clicar no sino, abre o modal de notificações e limpa o ponto vermelho
if (btnNotificacoes && modalNotificacoes) {
  btnNotificacoes.addEventListener('click', () => {
    if (badgeNotificacao) badgeNotificacao.classList.add('hidden');
    modalNotificacoes.classList.remove('hidden');
    carregarNotificacoesTexto();
  });
}

// Fechar pelo botão "X"
if (btnFecharNotificacoes && modalNotificacoes) {
  btnFecharNotificacoes.addEventListener('click', () => {
    modalNotificacoes.classList.add('hidden');
  });
}

// Fechar ao clicar fora do modal (fundo escuro)
window.addEventListener('click', (event) => {
  if (modalNotificacoes && event.target === modalNotificacoes) {
    modalNotificacoes.classList.add('hidden');
  }
});

// Função para buscar e exibir apenas os textos descritivos das atividades (sem imagens)
async function carregarNotificacoesTexto() {
  const userAtual = auth.currentUser;
  const containerNotif = document.getElementById('container-lista-notificacoes');
  if (!userAtual || !containerNotif) return;

  containerNotif.innerHTML = "<p style='color: #a1a1aa; font-size: 0.85rem; text-align: center;'>Buscando atualizações...</p>";

  try {
    // 1. Pega os IDs dos amigos
    const idsAmigos = [userAtual.uid];
    const amizadesSnap = await db.collection("amizades")
      .where("usuarios", "array-contains", userAtual.uid)
      .get();

    amizadesSnap.forEach(doc => {
      const amizade = doc.data();
      const amigoId = amizade.usuarios.find(id => id !== userAtual.uid);
      if (amigoId) idsAmigos.push(amigoId);
    });

    let listaNotificacoes = [];

    // 2. Busca check-ins recentes dos amigos (somente texto)
    const feedAmigosSnap = await db.collection("feed_amigos").get();
    feedAmigosSnap.forEach(doc => {
      const dados = doc.data();
      if (idsAmigos.includes(dados.usuarioId) && dados.usuarioId !== userAtual.uid) {
        listaNotificacoes.push({
          texto: `<b>${dados.nomeUsuario}</b> fez o check-in`,
          data: dados.dataExibicao || 'Recentemente',
          timestamp: dados.timestamp || 0
        });
      }
    });

    // 3. Busca postagens em equipes que o usuário participa
    if (equipesDoUsuario && equipesDoUsuario.length > 0) {
      const equipeIds = equipesDoUsuario.map(eq => eq.id);
      const feedFotosSnap = await db.collection("feed_fotos").get();
      
      feedFotosSnap.forEach(doc => {
        const dados = doc.data();
        if (equipeIds.includes(dados.equipeId) && dados.usuarioUid !== userAtual.uid) {
          const eqObj = equipesDoUsuario.find(e => e.id === dados.equipeId);
          const nomeEquipe = eqObj ? eqObj.nome : "uma equipe";

          listaNotificacoes.push({
            texto: `<b>${dados.usuarioNome}</b> postou na equipe <b>${nomeEquipe}</b>`,
            data: `${dados.dataIso || ''} às ${dados.dataHora || ''}`,
            timestamp: dados.timestamp || 0
          });
        }
      });
    }

    // Ordena da mais recente para a mais antiga
    listaNotificacoes.sort((a, b) => b.timestamp - a.timestamp);

    if (listaNotificacoes.length === 0) {
      containerNotif.innerHTML = `<p style="color: #a1a1aa; font-size: 0.85rem; text-align: center; margin-top: 15px;">Nenhuma nova notificação dos seus amigos ou equipes.</p>`;
      return;
    }

    // Renderiza apenas os cards de texto (sem imagens)
    let html = "";
    listaNotificacoes.slice(0, 15).forEach(notif => {
      html += `
        <div style="background: #121214; padding: 12px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #29292e;">
          <div style="color: #fff; font-size: 0.85rem;">📸 ${notif.texto}</div>
          <div style="color: #a1a1aa; font-size: 0.7rem; margin-top: 4px;">${notif.data}</div>
        </div>
      `;
    });

    containerNotif.innerHTML = html;

  } catch (err) {
    console.error("Erro ao carregar notificações:", err);
    containerNotif.innerHTML = `<p style="color: #ef4444; font-size: 0.85rem; text-align: center;">Erro ao carregar notificações.</p>`;
  }
}

// --- CORREÇÃO DOS BOTÕES DE FECHAR (AMIGOS E CHECK-IN) ---
const modalAmigos = document.getElementById('modal-amigos');
const btnFecharAmigos = document.getElementById('btn-fechar-modal-amigos');

if (btnFecharAmigos && modalAmigos) {
  btnFecharAmigos.addEventListener('click', () => {
    modalAmigos.classList.add('hidden');
  });
}

const modalFeedAmigos = document.getElementById('modal-feed-amigos');
const btnFecharFeedAmigos = document.getElementById('btn-fechar-modal-feed-amigos');

if (btnFecharFeedAmigos && modalFeedAmigos) {
  btnFecharFeedAmigos.addEventListener('click', () => {
    modalFeedAmigos.classList.add('hidden');
  });
}

// Fechar os modais ao clicar no fundo escuro fora deles
window.addEventListener('click', (event) => {
  if (modalAmigos && event.target === modalAmigos) {
    modalAmigos.classList.add('hidden');
  }
  if (modalFeedAmigos && event.target === modalFeedAmigos) {
    modalFeedAmigos.classList.add('hidden');
  }
});

