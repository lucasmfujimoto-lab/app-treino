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
    { id: 1, nome: "Mobilidade de Ombro (Bastão)", video: "https://www.youtube.com/embed/S2pG37y-Jls" },
    { id: 2, nome: "Alongamento Torácico e Peitoral", video: "https://www.youtube.com/embed/5T2kM3g-_18" },
    { id: 3, nome: "Mobilidade de Quadril", video: "https://www.youtube.com/embed/3m4aA-Gj_pU" },
    { id: 4, nome: "Alongamento de Isquiotibiais", video: "https://www.youtube.com/embed/e_Z_8LqJd0M" },
    { id: 5, nome: "Alongamento de Dorsal e Costas", video: "https://www.youtube.com/embed/G8L_8wO9U4E" },
    { id: 6, nome: "Mobilidade de Tornozelo", video: "https://www.youtube.com/embed/N3awlEyY980" },
    { id: 7, nome: "Alongamento de Flexores do Quadril", video: "https://www.youtube.com/embed/3m4aA-Gj_pU" },
    { id: 8, nome: "Mobilidade de Punho e Antebraço", video: "https://www.youtube.com/embed/S2pG37y-Jls" },
    { id: 9, nome: "Alongamento de Glúteo e Piriforme", video: "https://www.youtube.com/embed/3m4aA-Gj_pU" },
    { id: 10, nome: "Mobilidade de Cervical e Pescoço", video: "https://www.youtube.com/embed/5T2kM3g-_18" }
  ],
  Peito: [
    { id: 101, nome: "Supino Reto com Barra", video: "https://www.youtube.com/embed/sqOw2Y6uDWQ" },
    { id: 102, nome: "Supino Inclinado Halteres", video: "https://www.youtube.com/embed/Z1r2T8G9x-k" },
    { id: 103, nome: "Supino Declinado Halteres", video: "https://www.youtube.com/embed/sqOw2Y6uDWQ" },
    { id: 104, nome: "Crossover no Cabo (Médio)", video: "https://www.youtube.com/embed/U33S2kX1Aag" },
    { id: 105, nome: "Crossover de Baixo para Cima", video: "https://www.youtube.com/embed/U33S2kX1Aag" },
    { id: 106, nome: "Peck Deck / Voador", video: "https://www.youtube.com/embed/6Yp2I1yEUpE" },
    { id: 107, nome: "Crucifixo Reto Halteres", video: "https://www.youtube.com/embed/Z1r2T8G9x-k" },
    { id: 108, nome: "Flexão de Braço Tradicional", video: "https://www.youtube.com/embed/sqOw2Y6uDWQ" },
    { id: 109, nome: "Pullover com Halter", video: "https://www.youtube.com/embed/Z1r2T8G9x-k" },
    { id: 110, nome: "Supino Máquina Articulada", video: "https://www.youtube.com/embed/6Yp2I1yEUpE" }
  ],
  Costas: [
    { id: 201, nome: "Puxada Frontal Aberta", video: "https://www.youtube.com/embed/XZA1v65I7wI" },
    { id: 202, nome: "Puxada Triângulo", video: "https://www.youtube.com/embed/XZA1v65I7wI" },
    { id: 203, nome: "Remada Curvada com Barra", video: "https://www.youtube.com/embed/G8L_8wO9U4E" },
    { id: 204, nome: "Remada Baixa Triângulo", video: "https://www.youtube.com/embed/3O91b-6V-6U" },
    { id: 205, nome: "Remada Serrote Unilateral", video: "https://www.youtube.com/embed/G8L_8wO9U4E" },
    { id: 206, nome: "Pulldown na Polia Alta", video: "https://www.youtube.com/embed/Y0p3qR543O0" },
    { id: 207, nome: "Levantamento Terra", video: "https://www.youtube.com/embed/U3HlEF_E9so" },
    { id: 208, nome: "Barra Fixa Pronada", video: "https://www.youtube.com/embed/XZA1v65I7wI" },
    { id: 209, nome: "Remada Articulada Máquina", video: "https://www.youtube.com/embed/3O91b-6V-6U" },
    { id: 210, nome: "Hiperextensão Lombar", video: "https://www.youtube.com/embed/G8L_8wO9U4E" }
  ],
  Biceps: [
    { id: 301, nome: "Rosca Direta Barra W", video: "https://www.youtube.com/embed/S2i2N02L0eI" },
    { id: 302, nome: "Rosca Martelo Halteres", video: "https://www.youtube.com/embed/zC3nLlEvinU" },
    { id: 303, nome: "Rosca Scott no Banco", video: "https://www.youtube.com/embed/0B2h8_cI66E" },
    { id: 304, nome: "Rosca Inclinada Banco 45°", video: "https://www.youtube.com/embed/S2i2N02L0eI" },
    { id: 305, nome: "Rosca Concentrada", video: "https://www.youtube.com/embed/0B2h8_cI66E" },
    { id: 306, nome: "Rosca Polia Baixa Corda", video: "https://www.youtube.com/embed/zC3nLlEvinU" },
    { id: 307, nome: "Rosca Inversa Barra", video: "https://www.youtube.com/embed/S2i2N02L0eI" },
    { id: 308, nome: "Rosca Spider no Banco", video: "https://www.youtube.com/embed/0B2h8_cI66E" },
    { id: 309, nome: "Rosca 21 com Barra", video: "https://www.youtube.com/embed/S2i2N02L0eI" },
    { id: 310, nome: "Rosca Simultânea Halteres", video: "https://www.youtube.com/embed/zC3nLlEvinU" }
  ],
  Triceps: [
    { id: 401, nome: "Tríceps Pulley Corda", video: "https://www.youtube.com/embed/8A28J27LpL0" },
    { id: 402, nome: "Tríceps Pulley Barra Reta", video: "https://www.youtube.com/embed/8A28J27LpL0" },
    { id: 403, nome: "Tríceps Testa Barra H", video: "https://www.youtube.com/embed/d_KZxkY_0cM" },
    { id: 404, nome: "Tríceps Francês Halter", video: "https://www.youtube.com/embed/wX2L3O815A0" },
    { id: 405, nome: "Tríceps Coice Polia", video: "https://www.youtube.com/embed/wX2L3O815A0" },
    { id: 406, nome: "Paralelas / Mergulho", video: "https://www.youtube.com/embed/d_KZxkY_0cM" },
    { id: 407, nome: "Supino Fechado", video: "https://www.youtube.com/embed/sqOw2Y6uDWQ" },
    { id: 408, nome: "Tríceps Banco", video: "https://www.youtube.com/embed/d_KZxkY_0cM" },
    { id: 409, nome: "Tríceps Inverso Polia", video: "https://www.youtube.com/embed/8A28J27LpL0" },
    { id: 410, nome: "Tríceps Testa Banco Inclinado", video: "https://www.youtube.com/embed/d_KZxkY_0cM" }
  ],
  Ombro: [
    { id: 501, nome: "Desenvolvimento Halteres", video: "https://www.youtube.com/embed/M2rwv2g8OEU" },
    { id: 502, nome: "Desenvolvimento Arnold", video: "https://www.youtube.com/embed/M2rwv2g8OEU" },
    { id: 503, nome: "Elevação Lateral Halteres", video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
    { id: 504, nome: "Elevação Lateral Polia", video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
    { id: 505, nome: "Elevação Frontal Halteres", video: "https://www.youtube.com/embed/hRJ6tR5-ioo" },
    { id: 506, nome: "Crucifixo Invertido Peck Deck", video: "https://www.youtube.com/embed/6Yp2I1yEUpE" },
    { id: 507, nome: "Encolhimento com Barra", video: "https://www.youtube.com/embed/M2rwv2g8OEU" },
    { id: 508, nome: "Remada Alta Polia", video: "https://www.youtube.com/embed/hRJ6tR5-ioo" },
    { id: 509, nome: "Elevação Y no Banco Inclinado", video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
    { id: 510, nome: "Face Pull com Corda", video: "https://www.youtube.com/embed/6Yp2I1yEUpE" }
  ],
  Perna: [
    { id: 601, nome: "Agachamento Livre Barra", video: "https://www.youtube.com/embed/U3HlEF_E9so" },
    { id: 602, nome: "Leg Press 45°", video: "https://www.youtube.com/embed/yZmx_Ac3880" },
    { id: 603, nome: "Cadeira Extensora", video: "https://www.youtube.com/embed/Yy5D4O3_02s" },
    { id: 604, nome: "Mesa Flexora", video: "https://www.youtube.com/embed/1Tq3VMWInno" },
    { id: 605, nome: "Cadeira Flexora", video: "https://www.youtube.com/embed/1Tq3VMWInno" },
    { id: 606, nome: "Agachamento Búlgaro", video: "https://www.youtube.com/embed/U3HlEF_E9so" },
    { id: 607, nome: "Stiff com Halteres", video: "https://www.youtube.com/embed/e_Z_8LqJd0M" },
    { id: 608, nome: "Afundo / Passada com Halteres", video: "https://www.youtube.com/embed/U3HlEF_E9so" },
    { id: 609, nome: "Cadeira Adutora", video: "https://www.youtube.com/embed/yZmx_Ac3880" },
    { id: 610, nome: "Gêmeos em Pé (Panturrilha)", video: "https://www.youtube.com/embed/N3awlEyY980" }
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

let configuracaoTreino = [];
let indiceTreinoAtual = 0;
let historicoTreinos = {};
let modoCadastro = false;

// REGISTRO DE EVENTOS SEGUROS
document.addEventListener("DOMContentLoaded", () => {
  // Login / Cadastro
  const formLogin = document.getElementById('form-login');
  if (formLogin) formLogin.addEventListener('submit', autenticarUsuario);

  const linkAlternar = document.getElementById('link-alternar-login');
  if (linkAlternar) linkAlternar.addEventListener('click', alternarModoLogin);

  const btnDeslogar = document.getElementById('btn-deslogar');
  if (btnDeslogar) btnDeslogar.addEventListener('click', () => auth.signOut());

  // Treinador
  const btnAcessarAluno = document.getElementById('btn-acessar-aluno');
  if (btnAcessarAluno) btnAcessarAluno.addEventListener('click', carregarTreinoDoAluno);

  // Treino
  const btnIniciar = document.getElementById('btn-iniciar');
  if (btnIniciar) btnIniciar.addEventListener('click', iniciarTreino);

    // Botão Pular / Trocar Treino
  const btnTrocar = document.getElementById('btn-trocar');
  if (btnTrocar) {
    btnTrocar.addEventListener('click', trocarTreinoManual);
  }


  const btnConcluir = document.getElementById('btn-concluir');
  if (btnConcluir) btnConcluir.addEventListener('click', concluirTreino);

  // Configuração
  const btnAbrirConfig = document.getElementById('btn-abrir-config');
  if (btnAbrirConfig) btnAbrirConfig.addEventListener('click', abrirConfigRotina);

  const btnGerarConfig = document.getElementById('btn-gerar-config');
  if (btnGerarConfig) btnGerarConfig.addEventListener('click', gerarCamposConfig);

  const btnSalvarRotina = document.getElementById('btn-salvar-rotina');
  if (btnSalvarRotina) btnSalvarRotina.addEventListener('click', salvarNovaConfig);

  // Alongamento
  const btnAbrirAlong = document.getElementById('btn-abrir-alongamento');
  if (btnAbrirAlong) btnAbrirAlong.addEventListener('click', () => {
    document.getElementById('modal-alongamento').classList.remove('hidden');
  });

  // Fechar Modais
  document.getElementById('btn-fechar-modal-alongamento').addEventListener('click', fecharModalAlongamento);
  document.getElementById('btn-voltar-alongamento').addEventListener('click', fecharModalAlongamento);

  document.getElementById('btn-fechar-modal-video').addEventListener('click', fecharModalVideo);
  document.getElementById('btn-fechar-video-btn').addEventListener('click', fecharModalVideo);

  document.getElementById('btn-fechar-modal-detalhes').addEventListener('click', fecharModalDetalhes);
  document.getElementById('btn-fechar-detalhes-btn').addEventListener('click', fecharModalDetalhes);

  document.getElementById('btn-fechar-modal-config').addEventListener('click', fecharModalConfig);
});

// OBSERVADOR DE AUTENTICAÇÃO
auth.onAuthStateChanged(async (user) => {
  if (user) {
    usuarioLogado = user;
    uidAlvoTrabalho = user.uid;

    try {
      const docUser = await db.collection("usuarios").doc(user.uid).get();
      if (docUser.exists) {
        perfilUsuario = docUser.data();
      } else {
        perfilUsuario = { email: user.email, tipo: "aluno", codigo: "ALUNO-" + Math.random().toString(36).substr(2, 6).toUpperCase() };
        await db.collection("usuarios").doc(user.uid).set(perfilUsuario);
      }
    } catch (e) {
      console.log("Erro ao obter dados do usuário:", e);
      perfilUsuario = { email: user.email, tipo: "aluno", codigo: "ALUNO-" + Math.random().toString(36).substr(2, 6).toUpperCase() };
    }

    document.getElementById("tela-login").classList.add("hidden");
    document.getElementById("app-principal").classList.remove("hidden");
    
    document.getElementById("info-usuario-logado").innerText = `Usuário: ${user.email} | Código: ${perfilUsuario.codigo}`;

    if (perfilUsuario.tipo === "treinador") {
      document.getElementById("card-treinador").classList.remove("hidden");
    }

    carregarDadosDoServidor();
  } else {
    document.getElementById("tela-login").classList.remove("hidden");
    document.getElementById("app-principal").classList.add("hidden");
  }
});

function alternarModoLogin(e) {
  if (e) e.preventDefault();
  modoCadastro = !modoCadastro;
  
  document.getElementById("login-subtitulo").innerText = modoCadastro ? "Crie sua conta para começar" : "Acesse sua conta para continuar";
  document.getElementById("btn-submit-login").innerText = modoCadastro ? "CRIAR CONTA" : "ENTRAR";
  document.getElementById("txt-alternar-login").innerText = modoCadastro ? "Já tem uma conta?" : "Não tem conta?";
  document.getElementById("link-alternar-login").innerText = modoCadastro ? "Fazer Login" : "Criar Conta";
  
  if (modoCadastro) {
    document.getElementById("area-perfil-cadastro").classList.remove("hidden");
  } else {
    document.getElementById("area-perfil-cadastro").classList.add("hidden");
  }
}

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
      const codigoGerado = "ALUNO-" + Math.random().toString(36).substr(2, 6).toUpperCase();
      
      await db.collection("usuarios").doc(res.user.uid).set({
        email: email,
        tipo: tipoPerfil,
        codigo: codigoGerado
      });
      alert("Conta criada com sucesso!");
    } else {
      await auth.signInWithEmailAndPassword(email, senha);
    }
  } catch (err) {
    console.error("Erro na autenticação:", err);
    if (err.code === "auth/email-already-in-use") {
      alert("Este e-mail já está em uso!");
    } else if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
      alert("E-mail ou senha incorretos.");
    } else {
      alert("Erro na autenticação: " + err.message);
    }
  }
}

async function carregarTreinoDoAluno() {
  const codigo = document.getElementById("input-codigo-aluno").value.trim().toUpperCase();
  if (!codigo) return alert("Digite o código do aluno.");

  const snap = await db.collection("usuarios").where("codigo", "==", codigo).get();
  if (snap.empty) {
    return alert("Nenhum aluno encontrado com este código.");
  }

  const docAluno = snap.docs[0];
  uidAlvoTrabalho = docAluno.id;
  const dadosAluno = docAluno.data();

  const msg = document.getElementById("msg-aluno-carregado");
  msg.innerText = `Editando/Visualizando treino do aluno: ${dadosAluno.email}`;
  msg.classList.remove("hidden");

  carregarDadosDoServidor();
}

async function carregarDadosDoServidor() {
  try {
    const docRotina = await db.collection("rotinas").doc(uidAlvoTrabalho).get();
    if (docRotina.exists) {
      const d = docRotina.data();
      configuracaoTreino = d.rotina || [];
      indiceTreinoAtual = d.indiceAtual || 0;
    } else {
      configuracaoTreino = [
        { letra: "A", grupos: ["Peito", "Triceps"], exerciciosFixos: ["Supino Reto com Barra", "Tríceps Pulley Corda"] },
        { letra: "B", grupos: ["Costas", "Biceps"], exerciciosFixos: ["Puxada Frontal Aberta", "Rosca Direta Barra W"] }
      ];
      indiceTreinoAtual = 0;
    }

    const docHist = await db.collection("historicos").doc(uidAlvoTrabalho).get();
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
  const datasTreinadas = Object.keys(historicoTreinos).sort();
  const totalTreinos = datasTreinadas.length;

  document.getElementById("stat-total").innerText = `📊 ${totalTreinos} treinos`;

  if (totalTreinos === 0) {
    document.getElementById("stat-inicio").innerText = "desde o início";
    document.getElementById("stat-ofensiva").innerText = "🔥 0 dias";
    return;
  }

  const primeiraDataPartes = datasTreinadas[0].split("-");
  const dataFormatada = `${primeiraDataPartes[2]}/${primeiraDataPartes[1]}/${primeiraDataPartes[0]}`;
  document.getElementById("stat-inicio").innerText = `desde ${dataFormatada}`;

  let streak = 0;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  let dataChecagem = new Date(hoje);
  const hojeIso = dataChecagem.toISOString().split("T")[0];

  if (!historicoTreinos[hojeIso]) {
    dataChecagem.setDate(dataChecagem.getDate() - 1);
  }

  while (true) {
    const iso = dataChecagem.toISOString().split("T")[0];
    if (historicoTreinos[iso]) {
      streak++;
      dataChecagem.setDate(dataChecagem.getDate() - 1);
    } else {
      break;
    }
  }

  document.getElementById("stat-ofensiva").innerText = `🔥 ${streak} ${streak === 1 ? "dia" : "dias"}`;
}

function fecharModalAlongamento() {
  document.getElementById('modal-alongamento').classList.add('hidden');
}

function carregarBlocoAlongamento() {
  const container = document.getElementById('lista-alongamento');
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

function atualizarTelaInicial() {
  if (configuracaoTreino.length === 0) return;
  if (indiceTreinoAtual >= configuracaoTreino.length) indiceTreinoAtual = 0;
  
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  document.getElementById('nome-treino').innerText = `TREINO ${treinoAtual.letra}`;
  document.getElementById('foco-treino').innerText = `Músculos: ${treinoAtual.grupos.join(', ')}`;
}

async function concluirTreino() {
  const hoje = new Date().toISOString().split('T')[0];
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

  historicoTreinos[hoje] = {
    letra: treinoAtual.letra,
    grupos: treinoAtual.grupos,
    exercicios: exerciciosConcluidos
  };

  await db.collection("historicos").doc(uidAlvoTrabalho).set(historicoTreinos);

  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
  await db.collection("rotinas").doc(uidAlvoTrabalho).set({
    rotina: configuracaoTreino,
    indiceAtual: indiceTreinoAtual
  });

  alert('Treino do Dia concluído com sucesso! 👏');
  document.getElementById('area-execucao').classList.add('hidden');
  atualizarTelaInicial();
  renderizarCalendario();
  calcularEstatisticasEOfensiva();
}

async function trocarTreinoManual() {
  if (!configuracaoTreino || configuracaoTreino.length === 0) return;

  // Avança para a próxima letra (A -> B -> C -> A)
  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;

  // Atualiza no banco de dados do Firebase
  if (uidAlvoTrabalho) {
    try {
      await db.collection("rotinas").doc(uidAlvoTrabalho).set({
        rotina: configuracaoTreino,
        indiceAtual: indiceTreinoAtual
      }, { merge: true });
    } catch (e) {
      console.error("Erro ao atualizar o treino no banco:", e);
    }
  }

  // Esconde a área de execução caso estivesse aberta
  const areaExecucao = document.getElementById('area-execucao');
  if (areaExecucao) {
    areaExecucao.classList.add('hidden');
  }

  // Atualiza o texto na tela inicial
  atualizarTelaInicial();
}


function renderizarCalendario() {
  const cal = document.getElementById('calendario');
  cal.innerHTML = '';

  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dataIso = d.toISOString().split('T')[0];

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
  
  const partesData = dataIso.split('-');
  const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

  document.getElementById('detalhes-data').innerText = `Treino de ${dataFormatada}`;

  if (!treinoFeito) {
    corpo.innerHTML = "<p style='color: #a8a8b3;'>Nenhum treino registrado neste dia.</p>";
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
    corpo.innerHTML = html;
  }

  modal.classList.remove('hidden');
}

function fecharModalDetalhes() {
  document.getElementById('modal-detalhes').classList.add('hidden');
}

function abrirConfigRotina() {
  document.getElementById('modal-config-rotina').classList.remove('hidden');
  gerarCamposConfig();
}

// 1. Renderização dos campos do treino com layout adaptável (Séries, Reps e Carga)
function iniciarTreino() {
  const areaExecucao = document.getElementById('area-execucao');
  const listaContainer = document.getElementById('lista-exercicios');
  listaContainer.innerHTML = '';

  const treinoAtual = configuracaoTreino[indiceTreinoAtual];

  if (!treinoAtual) return;

  treinoAtual.grupos.forEach(grupo => {
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
      const cardEx = document.createElement('div');
      cardEx.className = 'item-exercicio';
      
      const topo = document.createElement('div');
      topo.className = 'exercicio-topo';
      
      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox" class="check-ex" data-nome="${ex.nome}" checked> <strong>${ex.nome}</strong>`;
      
      const btnVid = document.createElement('button');
      btnVid.className = 'btn-secundario';
      btnVid.style.cssText = 'padding: 4px 8px; font-size: 0.75rem;';
      btnVid.innerText = '▶ Vídeo';
      btnVid.addEventListener('click', () => verVideo(ex.nome, ex.video));

      topo.appendChild(label);
      topo.appendChild(btnVid);

      // Estrutura adaptável com rótulos
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
      listaContainer.appendChild(cardEx);
    });
  });

  areaExecucao.classList.remove('hidden');
}

// 2. Abrir configurações puxando os dados já salvos
function abrirConfigRotina() {
  document.getElementById('modal-config-rotina').classList.remove('hidden');
  
  // Pré-preenche o campo da divisão com as letras salvas atuais (ex: ABC)
  if (configuracaoTreino && configuracaoTreino.length > 0) {
    const letrasSalvas = configuracaoTreino.map(t => t.letra).join('');
    document.getElementById('input-divisao-letras').value = letrasSalvas;
  }
  
  gerarCamposConfig();
}

// 3. Gerar montagem marcando automaticamente grupos e exercícios já salvos
function gerarCamposConfig() {
  const inputDiv = document.getElementById('input-divisao-letras').value.toUpperCase().trim();
  const container = document.getElementById('container-config-dias');
  container.innerHTML = '';

  if (!inputDiv) return;

  const letras = inputDiv.split('');

  letras.forEach((letra) => {
    // Procura se já existe configuração para esta letra
    const treinoSalvo = configuracaoTreino.find(t => t.letra === letra);
    const gruposSalvos = treinoSalvo ? treinoSalvo.grupos : [];

    const bloco = document.createElement('div');
    bloco.style.cssText = "margin-bottom: 15px; border-bottom: 1px solid #29292e; padding-bottom: 10px;";
    
    let html = `<h4 style='color: #00e676; margin-bottom: 8px; text-align: left;'>Treino ${letra}</h4>`;
    html += `<p style='font-size: 0.8rem; color: #a8a8b3; text-align: left;'>Selecione os músculos e abra para escolher os exercícios fixos:</p>`;
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
    bloco.innerHTML = html;
    container.appendChild(bloco);

    // Carrega a lista de exercícios para os grupos já marcados
    todosGrupos.forEach(grupo => {
      if (gruposSalvos.includes(grupo)) {
        const cbMock = { checked: true };
        toggleExerciciosMontagem(cbMock, letra, grupo);
      }
    });
  });

  document.getElementById('btn-salvar-rotina').classList.remove('hidden');
}

// 4. Exibir exercícios com marcação prévia
function toggleExerciciosMontagem(cb, letra, grupo) {
  const containerExs = document.getElementById(`exs-${letra}-${grupo}`);
  if (!containerExs) return;

  const treinoSalvo = configuracaoTreino.find(t => t.letra === letra);
  const exerciciosFixosSalvos = treinoSalvo ? (treinoSalvo.exerciciosFixos || []) : [];

  if (cb.checked) {
    containerExs.classList.remove('hidden');
    containerExs.innerHTML = `<strong style='font-size: 0.75rem; color: #00e676;'>Exercícios de ${grupo}:</strong>`;
    
    catalogoExercicios[grupo].forEach(ex => {
      // Se não havia lista prévia salva, marca todos por padrão. Se havia, marca os salvos.
      const marcado = (exerciciosFixosSalvos.length === 0 || exerciciosFixosSalvos.includes(ex.nome)) ? 'checked' : '';
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

    if (marcados.length > 0) {
      novaRotina.push({ 
        letra: letra, 
        grupos: marcados,
        exerciciosFixos: exerciciosFixos
      });
    }
  });

  if (novaRotina.length > 0) {
    configuracaoTreino = novaRotina;
    indiceTreinoAtual = 0;
    
    await db.collection("rotinas").doc(uidAlvoTrabalho).set({
      rotina: configuracaoTreino,
      indiceAtual: 0
    });
    
    atualizarTelaInicial();
    fecharModalConfig();
    alert('Nova rotina salva com sucesso!');
  } else {
    alert('Marque pelo menos um músculo para cada treino.');
  }
}

function fecharModalConfig() {
  document.getElementById('modal-config-rotina').classList.add('hidden');
}

function verVideo(titulo, url) {
  document.getElementById('video-titulo').innerText = titulo;
  document.getElementById('video-container').innerHTML = `
    <iframe width="100%" height="220" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  document.getElementById('modal-video').classList.remove('hidden');
}

function fecharModalVideo() {
  document.getElementById('modal-video').classList.add('hidden');
  document.getElementById('video-container').innerHTML = '';
}

let equipeAtual = null;

// Vincular eventos no DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // ... (manter ouvintes anteriores) ...

  const btnCriarEq = document.getElementById('btn-criar-equipe');
  if (btnCriarEq) btnCriarEq.addEventListener('click', criarEquipe);

  const btnAddMembro = document.getElementById('btn-add-membro');
  if (btnAddMembro) btnAddMembro.addEventListener('click', adicionarMembroEquipe);

  const btnSairEq = document.getElementById('btn-sair-equipe');
  if (btnSairEq) btnSairEq.addEventListener('click', sairDaEquipe);
});

// Carregar equipe do usuário ao iniciar
async function carregarEquipeUsuario() {
  if (!usuarioLogado) return;

  try {
    const docEq = await db.collection("equipes").where("membrosUids", "array-contains", usuarioLogado.uid).get();

    if (!docEq.empty) {
      const eqDoc = docEq.docs[0];
      equipeAtual = { id: eqDoc.id, ...eqDoc.data() };
      renderizarEquipe();
    } else {
      equipeAtual = null;
      document.getElementById("equipe-sem-grupo").classList.remove("hidden");
      document.getElementById("equipe-com-grupo").classList.add("hidden");
    }
  } catch (e) {
    console.error("Erro ao carregar equipe:", e);
  }
}

// Criar nova equipe
async function criarEquipe() {
  const nome = document.getElementById("input-nome-equipe").value.trim();
  if (!nome) return alert("Digite um nome para a equipe!");

  const novaEquipe = {
    nome: nome,
    criadorUid: usuarioLogado.uid,
    membrosUids: [usuarioLogado.uid]
  };

  const docRef = await db.collection("equipes").add(novaEquipe);
  equipeAtual = { id: docRef.id, ...novaEquipe };
  document.getElementById("input-nome-equipe").value = "";
  renderizarEquipe();
}

// Adicionar membro pelo código de aluno
async function adicionarMembroEquipe() {
  const codigo = document.getElementById("input-codigo-membro").value.trim().toUpperCase();
  if (!codigo) return alert("Digite o código do aluno!");

  const snap = await db.collection("usuarios").where("codigo", "==", codigo).get();
  if (snap.empty) {
    return alert("Nenhum aluno encontrado com este código.");
  }

  const alunoDoc = snap.docs[0];
  const uidNovoMembro = alunoDoc.id;

  if (equipeAtual.membrosUids.includes(uidNovoMembro)) {
    return alert("Este aluno já faz parte da equipe!");
  }

  equipeAtual.membrosUids.push(uidNovoMembro);
  await db.collection("equipes").doc(equipeAtual.id).update({
    membrosUids: equipeAtual.membrosUids
  });

  document.getElementById("input-codigo-membro").value = "";
  renderizarEquipe();
}

// Renderizar painel da equipe e calcular a ofensiva/total de cada membro
async function renderizarEquipe() {
  if (!equipeAtual) return;

  document.getElementById("equipe-sem-grupo").classList.add("hidden");
  document.getElementById("equipe-com-grupo").classList.remove("hidden");
  document.getElementById("nome-equipe-titulo").innerText = `👥 ${equipeAtual.nome}`;

  const listaContainer = document.getElementById("lista-membros-equipe");
  listaContainer.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Carregando membros...</p>";

  let html = "";

  for (const uid of equipeAtual.membrosUids) {
    // Buscar perfil do usuário
    const userDoc = await db.collection("usuarios").doc(uid).get();
    const userData = userDoc.exists ? userDoc.data() : { email: "Usuário", codigo: "--" };

    // Buscar histórico de treinos para calcular ofensiva e total
    const histDoc = await db.collection("historicos").doc(uid).get();
    const historico = histDoc.exists ? histDoc.data() : {};

    const stats = calcularStatsMembro(historico);

    html += `
      <div class="membro-card">
        <div class="membro-info">
          <span class="membro-email">${userData.email.split('@')[0]} ${uid === usuarioLogado.uid ? '(Você)' : ''}</span>
          <span class="membro-codigo">${userData.codigo}</span>
        </div>
        <div class="membro-stats">
          <span class="stat-badge" title="Dias Seguidos">🔥 ${stats.streak}d</span>
          <span class="stat-badge" style="color: #e1e1e6;" title="Total de Treinos">📊 ${stats.total}t</span>
        </div>
      </div>
    `;
  }

  listaContainer.innerHTML = html;
}

// Função auxiliar para calcular ofensiva e total de um histórico
function calcularStatsMembro(historico) {
  const datas = Object.keys(historico).sort();
  const total = datas.length;

  if (total === 0) return { streak: 0, total: 0 };

  let streak = 0;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  let dataChecagem = new Date(hoje);
  const hojeIso = dataChecagem.toISOString().split("T")[0];

  if (!historico[hojeIso]) {
    dataChecagem.setDate(dataChecagem.getDate() - 1);
  }

  while (true) {
    const iso = dataChecagem.toISOString().split("T")[0];
    if (historico[iso]) {
      streak++;
      dataChecagem.setDate(dataChecagem.getDate() - 1);
    } else {
      break;
    }
  }

  return { streak, total };
}

// Sair da equipe
async function sairDaEquipe() {
  if (!confirm("Deseja realmente sair da equipe?")) return;

  equipeAtual.membrosUids = equipeAtual.membrosUids.filter(uid => uid !== usuarioLogado.uid);

  if (equipeAtual.membrosUids.length === 0) {
    await db.collection("equipes").doc(equipeAtual.id).delete();
  } else {
    await db.collection("equipes").doc(equipeAtual.id).update({
      membrosUids: equipeAtual.membrosUids
    });
  }

  equipeAtual = null;
  carregarEquipeUsuario();
}

