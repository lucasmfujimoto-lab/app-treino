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

// REGISTRO DE EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  // Atualizar o texto quando uma foto for selecionada/capturada no Feed de Equipe
const inputFotoFeed = document.getElementById('input-foto-feed');
const textoFotoFeed = document.getElementById('texto-foto-feed'); // Ajuste o ID conforme o seu HTML se necessário

if (inputFotoFeed) {
  inputFotoFeed.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // Se houver um span/p para o texto ao lado do botão
      if (textoFotoFeed) {
        textoFotoFeed.textContent = "Foto capturada ✓";
        textoFotoFeed.style.color = "#00e676";
      }
    }
  });
}

  const btnGoogle = document.getElementById('btn-login-google');
  if (btnGoogle) btnGoogle.addEventListener('click', autenticarComGoogle);

  const formLogin = document.getElementById('form-login');
  if (formLogin) formLogin.addEventListener('submit', autenticarUsuario);

  const linkAlternar = document.getElementById('link-alternar-login');
  if (linkAlternar) linkAlternar.addEventListener('click', alternarModoLogin);

  const btnDeslogar = document.getElementById('btn-deslogar');
  if (btnDeslogar) {
    btnDeslogar.addEventListener('click', async () => {
      try {
        await auth.signOut();
        const modalPerfil = document.getElementById('modal-perfil');
        if (modalPerfil) modalPerfil.classList.add('hidden');

        const telaPrincipal = document.getElementById('tela-principal');
        const telaLogin = document.getElementById('tela-login');

        if (telaPrincipal) telaPrincipal.classList.add('hidden');
        if (telaLogin) telaLogin.classList.remove('hidden');

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

  // Perfil
  const btnAbrirPerfil = document.getElementById('btn-abrir-perfil');
  if (btnAbrirPerfil) btnAbrirPerfil.addEventListener('click', abrirModalPerfil);

  const btnFecharPerfil = document.getElementById('btn-fechar-modal-perfil');
  if (btnFecharPerfil) btnFecharPerfil.addEventListener('click', fecharModalPerfil);

  const btnPerfilConquistas = document.getElementById('btn-perfil-conquistas');
  if (btnPerfilConquistas) {
    btnPerfilConquistas.addEventListener('click', () => {
      fecharModalPerfil();
      document.getElementById('modal-conquistas').classList.remove('hidden');
    });
  }

  const btnFecharConquistas = document.getElementById('btn-fechar-modal-conquistas');
  if (btnFecharConquistas) btnFecharConquistas.addEventListener('click', () => document.getElementById('modal-conquistas').classList.add('hidden'));

  const btnVoltarConquistas = document.getElementById('btn-voltar-conquistas');
  if (btnVoltarConquistas) btnVoltarConquistas.addEventListener('click', () => document.getElementById('modal-conquistas').classList.add('hidden'));

  const btnPerfilEquipes = document.getElementById('btn-perfil-equipes');
  if (btnPerfilEquipes) {
    btnPerfilEquipes.addEventListener('click', () => {
      fecharModalPerfil();
      abrirModalEquipes();
    });
  }

  const btnPerfilAlongamento = document.getElementById('btn-perfil-alongamento');
  if (btnPerfilAlongamento) {
    btnPerfilAlongamento.addEventListener('click', () => {
      fecharModalPerfil();
      document.getElementById('modal-alongamento').classList.remove('hidden');
    });
  }

  const btnPerfilTreinador = document.getElementById('btn-perfil-treinador');
  if (btnPerfilTreinador) {
    btnPerfilTreinador.addEventListener('click', () => {
      fecharModalPerfil();
      document.getElementById('modal-treinador').classList.remove('hidden');
    });
  }

  const btnFecharTreinador = document.getElementById('btn-fechar-modal-treinador');
  if (btnFecharTreinador) btnFecharTreinador.addEventListener('click', () => document.getElementById('modal-treinador').classList.add('hidden'));

  const btnVoltarTreinador = document.getElementById('btn-voltar-treinador');
  if (btnVoltarTreinador) btnVoltarTreinador.addEventListener('click', () => document.getElementById('modal-treinador').classList.add('hidden'));

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
    document.getElementById('titulo-modal-config').innerText = "Configurar Minha Rotina";
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

  // Fechar Modais Gerais
  const btnFecharEq1 = document.getElementById('btn-fechar-modal-equipes');
  if (btnFecharEq1) btnFecharEq1.addEventListener('click', fecharModalEquipes);

  const btnFecharEq2 = document.getElementById('btn-fechar-equipes-btn');
  if (btnFecharEq2) btnFecharEq2.addEventListener('click', fecharModalEquipes);

  const btnFecharAlong1 = document.getElementById('btn-fechar-modal-alongamento');
  if (btnFecharAlong1) btnFecharAlong1.addEventListener('click', fecharModalAlongamento);

  const btnFecharAlong2 = document.getElementById('btn-voltar-alongamento');
  if (btnFecharAlong2) btnFecharAlong2.addEventListener('click', fecharModalAlongamento);

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

// ABRIR MODAL DE SELEÇÃO DO TREINO AVULSO
function abrirModalTreinoAvulso() {
  const container = document.getElementById('container-selecao-avulso');
  if (!container) return;
  
  // Limpa o modal para evitar duplicações
  container.innerHTML = '';

  // 1. Renderizar os grupos musculares padrões
  todosGrupos.forEach(grupo => {
    const bloco = document.createElement('div');
    bloco.style.cssText = "margin-bottom: 15px; border-bottom: 1px solid #29292e; padding-bottom: 10px;";
    
    let html = `<h4 style='color: #00e676; margin-bottom: 6px;'>● ${grupo}</h4>`;
    const exerciciosGrupo = catalogoExercicios[grupo] || [];

    exerciciosGrupo.forEach(ex => {
      // Garanta que o value receba ex.nome ou o nome do exercício
html += `
  <label style='display: block; font-size: 0.85rem; margin-bottom: 4px; font-weight: normal; color: #e1e1e6;'>
    <input type='checkbox' class='cb-ex-avulso' data-grupo='${grupo}' value='${ex.nome}'> ${ex.nome}
  </label>
`;

    });

    bloco.innerHTML = html;
    container.appendChild(bloco);
  });

  // 2. Renderizar a seção "Outros Treinos" UMA ÚNICA VEZ NO FINAL
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

  // 3. Exibir o modal
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
  // 1. Procurar checkboxes marcados
  const selecionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
  
  // 2. Procurar treinos manuais preenchidos
  const inputsOutros = Array.from(document.querySelectorAll('.input-outro-treino'));
  const treinosManuais = inputsOutros
    .map(input => input.value.trim())
    .filter(texto => texto !== '');

  // Validar se pelo menos 1 item foi selecionado ou preenchido
  if (selecionados.length === 0 && treinosManuais.length === 0) {
    return alert("Selecione pelo menos um exercício ou digite em Outros Treinos!");
  }

  ehTreinoAvulsoAtivo = true;

  const areaExecucao = document.getElementById('area-execucao') || document.getElementById('areaExecucaoTreino');
  const listaContainer = document.getElementById('lista-exercicios') || document.getElementById('listaExerciciosExecucao');
  
  if (listaContainer) listaContainer.innerHTML = '';

  const exerciciosPorGrupo = {};

  // Agrupar exercícios marcados por Grupo
  // Ler o valor do checkbox (ou data-nome se preferir)
selecionados.forEach(cb => {
  const grupo = cb.getAttribute('data-grupo') || 'Geral';
  const nomeEx = cb.value !== 'on' ? cb.value : cb.getAttribute('data-nome');

  if (!exerciciosPorGrupo[grupo]) exerciciosPorGrupo[grupo] = [];
  exerciciosPorGrupo[grupo].push(nomeEx);
});


  // Agrupar treinos manuais no grupo "Outros Treinos"
  if (treinosManuais.length > 0) {
    exerciciosPorGrupo['Outros Treinos'] = treinosManuais;
  }

  // Renderizar na tela de execução
  Object.keys(exerciciosPorGrupo).forEach(grupo => {
    const tituloGrupo = document.createElement('h3');
    tituloGrupo.style.cssText = "color: #00e676; margin: 15px 0 8px 0; font-size: 0.95rem; text-align: left;";
    tituloGrupo.innerText = `● ${grupo} (Avulso)`;
    if (listaContainer) listaContainer.appendChild(tituloGrupo);

    exerciciosPorGrupo[grupo].forEach(nomeEx => {
      const cardEx = document.createElement('div');
      cardEx.className = 'item-exercicio';

      const topo = document.createElement('div');
      topo.className = 'exercicio-topo';

      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox" class="check-ex" data-nome="${nomeEx}" checked> <strong>${nomeEx}</strong>`;

      topo.appendChild(label);

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
      if (listaContainer) listaContainer.appendChild(cardEx);
    });
  });

  // Fechar modal e abrir tela de treino ativo
  fecharModalTreinoAvulso();
  if (areaExecucao) areaExecucao.classList.remove('hidden');
}

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
        perfilUsuario = { 
  email: user.email, 
  nomeExibicao: user.displayName || user.email.split('@')[0], 
  tipo: "aluno", 
  codigo: gerarCodigoUsuario() 
};

        await db.collection("usuarios").doc(user.uid).set(perfilUsuario);
      }
    } catch (e) {
      perfilUsuario = { 
        email: user.email, 
        nomeExibicao: user.email.split('@')[0], 
        tipo: "aluno", 
        codigo: "ALUNO-" + Math.random().toString(36).substr(2, 6).toUpperCase() 
      };
    }

    const nomeExibir = perfilUsuario.nomeExibicao || user.email.split('@')[0];

    document.getElementById("tela-login").classList.add("hidden");
    document.getElementById("app-principal").classList.remove("hidden");
    
    document.getElementById("info-usuario-logado").innerText = `Olá, ${nomeExibir} | Código: ${perfilUsuario.codigo}`;
    document.getElementById("perfil-email-destaque").innerText = `${user.email} (${perfilUsuario.codigo})`;
    document.getElementById("input-nome-exibicao").value = nomeExibir;

    if (perfilUsuario.tipo === "treinador") {
      document.getElementById("btn-perfil-treinador").classList.remove("hidden");
    }

    carregarDadosDoServidor();
  } else {
    document.getElementById("tela-login").classList.remove("hidden");
    document.getElementById("app-principal").classList.add("hidden");
  }
});

async function salvarNomeExibicao() {
  if (!usuarioLogado) return;
  const novoNome = document.getElementById("input-nome-exibicao").value.trim();

  if (!novoNome) return alert("Digite um nome válido.");

  try {
    perfilUsuario.nomeExibicao = novoNome;
    await db.collection("usuarios").doc(usuarioLogado.uid).set({
      nomeExibicao: novoNome
    }, { merge: true });

    document.getElementById("info-usuario-logado").innerText = `Olá, ${novoNome} | Código: ${perfilUsuario.codigo}`;
    alert("Nome atualizado com sucesso!");
  } catch (e) {
    alert("Erro ao salvar nome: " + e.message);
  }
}

async function carregarTreinoDoAluno() {
  const codigoInput = document.getElementById("input-codigo-aluno");
  const codigo = codigoInput.value.trim().toUpperCase();

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

    document.getElementById("modal-treinador").classList.add("hidden");
    codigoInput.value = "";

    document.getElementById('titulo-modal-config').innerText = `⚙️ Montando Rotina de: ${nomeAluno}`;
    
    const docRotina = await db.collection("rotinas").doc(uidAlvoTrabalho).get();
    if (docRotina.exists) {
      configuracaoTreino = docRotina.data().rotina || [];
    } else {
      configuracaoTreino = [];
    }

    abrirConfigRotina();
  } catch (e) {
    alert("Erro ao buscar aluno: " + e.message);
  }
}

function abrirModalPerfil() {
  document.getElementById('modal-perfil').classList.remove('hidden');
}

function fecharModalPerfil() {
  document.getElementById('modal-perfil').classList.add('hidden');
}

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
// Função centralizada para garantir que o código seja SEMPRE o mesmo do banco
async function obterOuCriarCodigoUsuario(user, tipoDefinido = "aluno") {
  const userRef = db.collection("usuarios").doc(user.uid);
  const docUser = await userRef.get();

  if (docUser.exists) {
    const dados = docUser.data();
    // Se já tem código no banco, retorna ele (nunca gera outro!)
    if (dados.codigo) {
      return dados.codigo;
    }
  }

  // Se não existe ou não tem código, gera um novo e salva
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

// OBSERVADOR DE AUTENTICAÇÃO ATUALIZADO
auth.onAuthStateChanged(async (user) => {
  if (user) {
    usuarioLogado = user;
    uidAlvoTrabalho = user.uid;

    try {
      // Garante que o perfil existe e puxa o código oficial exato do banco
      const codigoOficial = await obterOuCriarCodigoUsuario(user);
      
      const docUser = await db.collection("usuarios").doc(user.uid).get();
      perfilUsuario = docUser.data();
      perfilUsuario.codigo = codigoOficial; // Força sincronia exata

    } catch (e) {
      console.error("Erro ao sincronizar perfil:", e);
      perfilUsuario = { 
        email: user.email, 
        nomeExibicao: user.email.split('@')[0], 
        tipo: "aluno", 
        codigo: "ERRO-COD" 
      };
    }

    const nomeExibir = perfilUsuario.nomeExibicao || user.email.split('@')[0];

    document.getElementById("tela-login").classList.add("hidden");
    document.getElementById("app-principal").classList.remove("hidden");
    
    // Atualiza imediatamente na tela com o código oficial do banco
    document.getElementById("info-usuario-logado").innerText = `Olá, ${nomeExibir} | Código: ${perfilUsuario.codigo}`;
    document.getElementById("perfil-email-destaque").innerText = `${user.email} (${perfilUsuario.codigo})`;
    document.getElementById("input-nome-exibicao").value = nomeExibir;

    if (perfilUsuario.tipo === "treinador") {
      document.getElementById("btn-perfil-treinador").classList.remove("hidden");
    }

    carregarDadosDoServidor();
  } else {
    document.getElementById("tela-login").classList.remove("hidden");
    document.getElementById("app-principal").classList.add("hidden");
  }
});

// AUTENTICAÇÃO POR EMAIL E SENHA ATUALIZADA
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
      
      // Usa a função centralizada para criar com o código oficial
      await obterOuCriarCodigoUsuario(res.user, tipoPerfil);

      alert("Conta criada com sucesso!");
    } else {
      await auth.signInWithEmailAndPassword(email, senha);
    }
  } catch (err) {
    alert("Erro na autenticação: " + err.message);
  }
}


// Atualizar função abrirModalPerfil para revalidar os dados na tela
async function abrirModalPerfil() {
  if (usuarioLogado) {
    try {
      const docRef = await db.collection("usuarios").doc(usuarioLogado.uid).get();
      if (docRef.exists) {
        const dados = docRef.data();
        perfilUsuario = dados;
        const codigoAtual = dados.codigo || "--";
        const emailDestaque = document.getElementById("perfil-email-destaque");
        if (emailDestaque) {
          emailDestaque.innerText = `${usuarioLogado.email} (${codigoAtual})`;
        }
      }
    } catch (e) {}
  }
  document.getElementById('modal-perfil').classList.remove('hidden');
}




async function publicarFotoNoFeed() {
  if (!equipeAtiva || !usuarioLogado) return alert("Selecione uma equipe primeiro.");

  const fileInput = document.getElementById('input-foto-feed');
  if (!fileInput.files || fileInput.files.length === 0) {
    return alert("Selecione uma foto para publicar!");
  }

  const file = fileInput.files[0];
  const btnPublicar = document.getElementById('btn-publicar-foto');
  
  if (btnPublicar) {
    btnPublicar.disabled = true;
    btnPublicar.innerText = "⏳ Comprimindo e publicando...";
  }

  comprimirImagem(file, 800, 800, 0.7, async function(base64Comprimido) {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    
    const dataFormatada = `${dia}/${mes}/${ano}`;
    const horaAtual = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const nomeAutor = perfilUsuario.nomeExibicao || usuarioLogado.email.split('@')[0];

    try {
      const snapFeed = await db.collection("feed_fotos")
        .where("equipeId", "==", equipeAtiva.id)
        .get();

      const posts = snapFeed.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      if (posts.length >= 30) {
        posts.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        const qtdParaDeletar = posts.length - 29;
        
        for (let i = 0; i < qtdParaDeletar; i++) {
          await db.collection("feed_fotos").doc(posts[i].id).delete();
        }
      }

      await db.collection("feed_fotos").add({
        equipeId: equipeAtiva.id,
        usuarioUid: usuarioLogado.uid,
        usuarioNome: nomeAutor,
        fotoUrl: base64Comprimido,
        dataIso: dataFormatada,
        dataHora: horaAtual,
        timestamp: agora.getTime(),
        curtidas: []
      });

      fileInput.value = "";
      alert("Foto publicada com sucesso!");
      await renderizarFeedEquipe();
    } catch (err) {
      alert("Erro ao publicar foto: " + err.message);
    } finally {
      if (btnPublicar) {
        btnPublicar.disabled = false;
        btnPublicar.innerText = "📸 Publicar Foto no Feed";
      }
      // Dentro de publicarFotoNoFeed(), após o sucesso:
// Dentro da função publicarFotoNoFeed(), logo após enviar a foto:
const textoStatus = document.getElementById('nome-arquivo-foto');
if (textoStatus) {
  textoStatus.innerText = "Nenhuma foto selecionada";
  textoStatus.style.color = "#a8a8b3";
}


    }
  });
}

async function renderizarFeedEquipe() {
  if (!equipeAtiva) return;

  const container = document.getElementById("container-feed-equipe");
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Carregando fotos do feed...</p>";

  try {
    const snapFeed = await db.collection("feed_fotos")
      .where("equipeId", "==", equipeAtiva.id)
      .get();

    if (snapFeed.empty) {
      container.innerHTML = "<p style='font-size:0.85rem; color:#a8a8b3;'>Ainda não há fotos nesta equipe. Seja o primeiro a publicar!</p>";
      return;
    }

    const posts = snapFeed.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    posts.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    let html = "";
    posts.forEach(post => {
      const curtidas = post.curtidas || [];
      const jaCurtiu = usuarioLogado ? curtidas.includes(usuarioLogado.uid) : false;

      html += `
        <div class="feed-foto-card">
          <div class="feed-header">
            <span class="feed-usuario">📸 ${post.usuarioNome}</span>
            <span class="feed-data">${post.dataIso} às ${post.dataHora || ''}</span>
          </div>
          <img src="${post.fotoUrl}" class="feed-foto-img" alt="Foto do treino">
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
    console.error("Erro ao carregar feed:", e);
    container.innerHTML = "<p style='font-size:0.8rem; color:#f75a68;'>Erro ao carregar as fotos.</p>";
  }
}

async function alternarCurtida(postId) {
  if (!usuarioLogado) return;

  try {
    const postRef = db.collection("feed_fotos").doc(postId);
    const doc = await postRef.get();

    if (doc.exists) {
      const data = doc.data();
      let curtidas = data.curtidas || [];

      if (curtidas.includes(usuarioLogado.uid)) {
        curtidas = curtidas.filter(uid => uid !== usuarioLogado.uid);
      } else {
        curtidas.push(usuarioLogado.uid);
      }

      await postRef.update({ curtidas: curtidas });
      renderizarFeedEquipe();
    }
  } catch (e) {
    console.error("Erro ao alterar curtida:", e);
  }
}

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

  document.getElementById("stat-total").innerText = `📊 ${stats.total} treinos`;

  if (stats.total === 0) {
    document.getElementById("stat-inicio").innerText = "desde o início";
    document.getElementById("stat-ofensiva").innerText = "🔥 0 dias";
    renderizarConquistas(0, 0);
    return;
  }

  const primeiraDataFormatada = obterDataFormatadaBR(datasTreinadas[0]);
  document.getElementById("stat-inicio").innerText = `desde ${primeiraDataFormatada}`;
  document.getElementById("stat-ofensiva").innerText = `🔥 ${stats.streak} ${stats.streak === 1 ? "dia" : "dias"}`;

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

// GERENCIAMENTO DE EQUIPES
async function abrirModalEquipes() {
  document.getElementById('modal-equipes').classList.remove('hidden');
  voltarParaListaEquipes();
  await carregarEquipesDoUsuario();
}

function fecharModalEquipes() {
  document.getElementById('modal-equipes').classList.add('hidden');
}

function voltarParaListaEquipes() {
  document.getElementById('view-lista-equipes').classList.remove('hidden');
  document.getElementById('view-detalhes-equipe').classList.add('hidden');
  equipeAtiva = null;
}

async function carregarEquipesDoUsuario() {
  if (!usuarioLogado) return;

  const container = document.getElementById('container-lista-equipes');
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Carregando equipes...</p>";

  try {
    const snap = await db.collection("equipes").where("membrosUids", "array-contains", usuarioLogado.uid).get();
    equipesDoUsuario = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    document.getElementById('contador-equipes-texto').innerText = `Você participa de ${equipesDoUsuario.length}/5 equipes`;

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
  const nome = inputNome.value.trim();

  if (!nome) return alert("Digite um nome para a equipe.");

  try {
    const novaEquipe = {
      nome: nome,
      criadorUid: usuarioLogado.uid,
      membrosUids: [usuarioLogado.uid]
    };

    await db.collection("equipes").add(novaEquipe);
    inputNome.value = "";
    await carregarEquipesDoUsuario();
    alert("Equipe criada com sucesso!");
  } catch (e) {
    alert("Erro ao criar equipe: " + e.message);
  }
}

async function abrirDetalhesEquipe(equipeId) {
  equipeAtiva = equipesDoUsuario.find(eq => eq.id === equipeId);
  if (!equipeAtiva) return;

  document.getElementById('view-lista-equipes').classList.add('hidden');
  document.getElementById('view-detalhes-equipe').classList.remove('hidden');
  document.getElementById('titulo-equipe-ativa').innerText = `👥 ${equipeAtiva.nome}`;

  mudarAbaEquipe('membros');
}

function mudarAbaEquipe(aba) {
  document.getElementById('aba-membros').classList.remove('ativa');
  document.getElementById('aba-ranking').classList.remove('ativa');
  document.getElementById('aba-feed').classList.remove('ativa');

  document.getElementById('conteudo-aba-membros').classList.add('hidden');
  document.getElementById('conteudo-aba-ranking').classList.add('hidden');
  document.getElementById('conteudo-aba-feed').classList.add('hidden');

  document.getElementById(`aba-${aba}`).classList.add('ativa');
  document.getElementById(`conteudo-aba-${aba}`).classList.remove('hidden');

  if (aba === 'membros') renderizarMembrosEquipe();
  if (aba === 'ranking') renderizarRankingEquipe();
  if (aba === 'feed') renderizarFeedEquipe();
}

async function renderizarMembrosEquipe() {
  if (!equipeAtiva) return;

  const container = document.getElementById("container-membros-equipe");
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Carregando membros...</p>";

  try {
    const promessasMembros = equipeAtiva.membrosUids.map(async (uid) => {
      let userData = { email: "Usuário", codigo: "--", nomeExibicao: "" };
      let historico = {};

      try {
        const userDoc = await db.collection("usuarios").doc(uid).get();
        if (userDoc.exists) userData = userDoc.data();
      } catch (e) {}

      try {
        const histDoc = await db.collection("historicos").doc(uid).get();
        if (histDoc.exists) historico = histDoc.data();
      } catch (e) {}

      const stats = calcularStatsMembro(historico);
      const nomeExibicao = userData.nomeExibicao || (userData.email ? userData.email.split('@')[0] : "Usuário");

      return {
        uid,
        nomeExibicao,
        codigo: userData.codigo || "--",
        stats
      };
    });

    const membros = await Promise.all(promessasMembros);

    if (membros.length === 0) {
      container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Nenhum membro encontrado.</p>";
      return;
    }

    let html = "";
    membros.forEach(m => {
      html += `
        <div class="membro-card">
          <div class="membro-info">
            <span class="membro-email">${m.nomeExibicao} ${m.uid === usuarioLogado.uid ? '(Você)' : ''}</span>
            <span class="membro-codigo">${m.codigo}</span>
          </div>
          <div class="membro-stats">
            <span class="stat-badge" title="Dias Seguidos">🔥 ${m.stats.streak}d</span>
            <span class="stat-badge" style="color: #e1e1e6;" title="Total de Treinos">📊 ${m.stats.total}t</span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  } catch (e) {
    console.error("Erro ao carregar membros:", e);
    container.innerHTML = "<p style='font-size:0.8rem; color:#f75a68;'>Erro ao carregar membros do grupo.</p>";
  }
}

async function renderizarRankingEquipe() {
  if (!equipeAtiva) return;

  const container = document.getElementById("container-ranking-equipe");
  container.innerHTML = "<p style='font-size:0.8rem; color:#a8a8b3;'>Gerando ranking da equipe...</p>";

  try {
    const promessasMembros = equipeAtiva.membrosUids.map(async (uid) => {
      let userData = { email: "Usuário", nomeExibicao: "" };
      let historico = {};

      try {
        const userDoc = await db.collection("usuarios").doc(uid).get();
        if (userDoc.exists) userData = userDoc.data();
      } catch (e) {}

      try {
        const histDoc = await db.collection("historicos").doc(uid).get();
        if (histDoc.exists) historico = histDoc.data();
      } catch (e) {}

      const stats = calcularStatsMembro(historico);
      const pontos = (stats.total * 10) + (stats.streak * 25);
      const nome = userData.nomeExibicao || (userData.email ? userData.email.split('@')[0] : "Usuário");

      return {
        nome,
        isVoce: uid === usuarioLogado.uid,
        streak: stats.streak,
        total: stats.total,
        pontos
      };
    });

    const listaMembros = await Promise.all(promessasMembros);
    listaMembros.sort((a, b) => b.pontos - a.pontos);

    let html = "";
    const trofeus = ["🥇", "🥈", "🥉"];

    listaMembros.forEach((membro, index) => {
      const posi = trofeus[index] || `#${index + 1}`;
      html += `
        <div class="membro-card" style="${index === 0 ? 'border-color: #ffb703;' : ''}">
          <div class="membro-info">
            <span class="membro-email">${posi} ${membro.nome} ${membro.isVoce ? '(Você)' : ''}</span>
            <span class="membro-codigo">${membro.pontos} Pts (🔥${membro.streak}d | 📊${membro.total}t)</span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  } catch (e) {
    console.error("Erro ao carregar ranking:", e);
    container.innerHTML = "<p style='font-size:0.8rem; color:#f75a68;'>Erro ao carregar o ranking.</p>";
  }
}

async function adicionarMembroEquipe() {
  if (!equipeAtiva) return;

  const inputCodigo = document.getElementById("input-codigo-membro");
  const codigo = inputCodigo.value.trim().toUpperCase();

  if (!codigo) return alert("Digite o código do aluno.");

  try {
    // Valida o limite de 15 membros na equipe atual
    if (equipeAtiva.membrosUids.length >= 15) {
      return alert("Esta equipe atingiu o limite máximo de 15 membros!");
    }

    const snap = await db.collection("usuarios").where("codigo", "==", codigo).get();
    if (snap.empty) {
      return alert("Nenhum aluno encontrado com este código.");
    }

    const alunoDoc = snap.docs[0];
    const uidNovoMembro = alunoDoc.id;

    if (equipeAtiva.membrosUids.includes(uidNovoMembro)) {
      return alert("Este aluno já faz parte desta equipe.");
    }

    equipeAtiva.membrosUids.push(uidNovoMembro);
    await db.collection("equipes").doc(equipeAtiva.id).update({
      membrosUids: equipeAtiva.membrosUids
    });

    inputCodigo.value = "";
    await renderizarMembrosEquipe();
    alert("Membro adicionado com sucesso!");
  } catch (e) {
    alert("Erro ao adicionar membro: " + e.message);
  }
}


async function sairDaEquipeAtiva() {
  if (!equipeAtiva) return;

  if (!confirm(`Deseja realmente sair da equipe "${equipeAtiva.nome}"?`)) return;

  try {
    equipeAtiva.membrosUids = equipeAtiva.membrosUids.filter(uid => uid !== usuarioLogado.uid);

    if (equipeAtiva.membrosUids.length === 0) {
      await db.collection("equipes").doc(equipeAtiva.id).delete();
    } else {
      await db.collection("equipes").doc(equipeAtiva.id).update({
        membrosUids: equipeAtiva.membrosUids
      });
    }

    voltarParaListaEquipes();
    await carregarEquipesDoUsuario();
    alert("Você saiu da equipe.");
  } catch (e) {
    alert("Erro ao sair da equipe: " + e.message);
  }
}

function fecharModalAlongamento() {
  document.getElementById('modal-alongamento').classList.add('hidden');
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

function atualizarTelaInicial() {
  if (configuracaoTreino.length === 0) return;
  if (indiceTreinoAtual >= configuracaoTreino.length) indiceTreinoAtual = 0;
  
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  document.getElementById('nome-treino').innerText = `TREINO ${treinoAtual.letra}`;
  document.getElementById('foco-treino').innerText = `Músculos: ${treinoAtual.grupos.join(', ')}`;
}


function iniciarTreino() {
  ehTreinoAvulsoAtivo = false;
  const areaExecucao = document.getElementById('area-execucao');
  const listaContainer = document.getElementById('lista-exercicios');
  listaContainer.innerHTML = '';

  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  if (!treinoAtual) return;

  // 1. Renderizar exercícios dos grupos musculares normais
  treinoAtual.grupos.forEach(grupo => {
    if (grupo === "Avulso") return; // Ignora o grupo placeholder se houver
    
    const exerciciosGrupo = catalogoExercicios[grupo] || [];
    const selecionados = treinoAtual.exerciciosFixos || [];
    
    // Filtra apenas os do catálogo que pertencem a este grupo e foram selecionados
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

  // 2. Renderizar os treinos avulsos / manuais digitados especificamente nesta letra
  const exerciciosFixosSalvos = treinoAtual.exerciciosFixos || [];
  const exerciciosManuais = exerciciosFixosSalvos.filter(nomeEx => {
    let pertenceCatalogo = false;
    Object.keys(catalogoExercicios).forEach(g => {
      if (g === "Alongamento") return;
      if (catalogoExercicios[g].some(item => item.nome === nomeEx)) {
        pertenceCatalogo = true;
      }
    });
    return !pertenceCatalogo; // Se não está no catálogo padrão, é um treino manual/avulso!
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

  areaExecucao.classList.remove('hidden');
}

// Função auxiliar para desenhar o card na tela (evita código duplicado)
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
  document.getElementById('area-execucao').classList.add('hidden');
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
  if (areaExecucao) {
    areaExecucao.classList.add('hidden');
  }

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
  
  if (configuracaoTreino && configuracaoTreino.length > 0) {
    const letrasSalvas = configuracaoTreino.map(t => t.letra).join('');
    document.getElementById('input-divisao-letras').value = letrasSalvas;
  } else {
    document.getElementById('input-divisao-letras').value = "ABC";
  }
  
  gerarCamposConfig();
}

function gerarCamposConfig() {
  const inputDiv = document.getElementById('input-divisao-letras').value.toUpperCase().trim();
  const container = document.getElementById('container-config-dias');
  if (!container) return;
  container.innerHTML = '';

  if (!inputDiv) return;

  const letras = inputDiv.split('');

  letras.forEach((letra) => {
    const treinoSalvo = configuracaoTreino.find(t => t.letra === letra);
    const gruposSalvos = treinoSalvo ? treinoSalvo.grupos : [];
    const exerciciosFixosSalvos = treinoSalvo ? (treinoSalvo.exerciciosFixos || []) : [];
    
    // Filtra o que são treinos avulsos manuais salvos nesta letra (itens que não estão no catálogo padrão)
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

    // Seção de Treinos Avulsos / Manuais para esta letra específica
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

  document.getElementById('btn-salvar-rotina').classList.remove('hidden');
}

// Função auxiliar para criar nova linha de treino avulso na configuração
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
      // Garante que só marca se estiver explicitamente salvo, vindo limpo para contas novas
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

    // Recolher também os treinos avulsos/manuais adicionados nesta letra
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
  document.getElementById('modal-config-rotina').classList.add('hidden');
  uidAlvoTrabalho = usuarioLogado ? usuarioLogado.uid : null;
}

function verVideo(titulo, url) {
  document.getElementById('video-titulo').innerText = titulo;
  
  let urlFormatada = url;
  if (!urlFormatada.includes('?')) {
    urlFormatada += '?enablejsapi=1&rel=0';
  } else {
    urlFormatada += '&enablejsapi=1&rel=0';
  }

  document.getElementById('video-container').innerHTML = `
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
  document.getElementById('modal-video').classList.remove('hidden');
}

function fecharModalVideo() {
  document.getElementById('modal-video').classList.add('hidden');
  document.getElementById('video-container').innerHTML = '';
}

// LOGIN COM O GOOGLE
async function autenticarComGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;

    const docUser = await db.collection("usuarios").doc(user.uid).get();
    
    if (!docUser.exists) {
  const codigoGerado = gerarCodigoUsuario();
  const novoPerfil = {
    email: user.email,
    nomeExibicao: user.displayName || user.email.split('@')[0],
    tipo: "aluno",
    codigo: codigoGerado
  };
  await db.collection("usuarios").doc(user.uid).set(novoPerfil);
}


    alert(`Bem-vindo, ${user.displayName || user.email}!`);
  } catch (error) {
    console.error("Erro no login com Google:", error);
    alert("Erro ao fazer login com o Google: " + error.message);
  }
}

// AMIGOS E FEED DOS AMIGOS
const modalAmigos = document.getElementById('modal-amigos');
const modalFeedAmigos = document.getElementById('modal-feed-amigos');

document.getElementById('btn-amigos')?.addEventListener('click', () => {
  if (modalAmigos) modalAmigos.classList.remove('hidden');
  carregarAmigosEConvites();
});

document.getElementById('btn-fechar-amigos')?.addEventListener('click', () => {
  if (modalAmigos) modalAmigos.classList.add('hidden');
});

document.getElementById('btn-feed-amigos')?.addEventListener('click', () => {
  if (modalFeedAmigos) modalFeedAmigos.classList.remove('hidden');
  carregarFeedAmigos();
});

document.getElementById('btn-fechar-feed-amigos')?.addEventListener('click', () => {
  if (modalFeedAmigos) modalFeedAmigos.classList.add('hidden');
});

// Enviar convite de amizade
document.getElementById('btn-enviar-convite')?.addEventListener('click', async () => {
  const inputCodigo = document.getElementById('input-codigo-amigo');
  const codigoDigitado = inputCodigo ? inputCodigo.value.trim().toUpperCase() : "";
  const userAtual = auth.currentUser;

  if (!codigoDigitado) return alert("Digite o código do seu amigo.");

  try {
    // 1. Valida o limite de 25 amigos antes de enviar
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

    // 2. Procura o usuário pelo código
    const snap = await db.collection("usuarios").where("codigo", "==", codigoDigitado).get();
    if (snap.empty) return alert("Usuário não encontrado com esse código.");

    const amigoDoc = snap.docs[0];
    const amigoData = amigoDoc.data();
    const amigoId = amigoDoc.id;

    if (amigoId === userAtual.uid) {
      return alert("Você não pode adicionar a si mesmo.");
    }

    let jaEAmigo = mapaAmigosCheck.has(amigoId);

    if (jaEAmigo) {
      return alert(`Você e ${amigoData.nomeExibicao || 'essa pessoa'} já são amigos!`);
    }

    const convitesEnviados = await db.collection("convites_amizade")
      .where("remetenteId", "==", userAtual.uid)
      .where("destinatarioId", "==", amigoId)
      .where("status", "==", "pendente")
      .get();

    const convitesRecebidos = await db.collection("convites_amizade")
      .where("remetenteId", "==", amigoId)
      .where("destinatarioId", "==", userAtual.uid)
      .where("status", "==", "pendente")
      .get();

    if (!convitesEnviados.empty) {
      return alert(`Você já enviou um convite de amizade para ${amigoData.nomeExibicao || 'essa pessoa'}. Aguarde a resposta.`);
    }

    if (!convitesRecebidos.empty) {
      return alert(`${amigoData.nomeExibicao || 'Esta pessoa'} já enviou um convite para você! Verifique a aba de convites pendentes.`);
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


// Carregar Lista de Amigos e Convites (Corrigido sem duplicados)
async function carregarAmigosEConvites() {
  const userAtual = auth.currentUser;
  if (!userAtual) return;

  const listaAmigos = document.getElementById('lista-amigos');
  const containerConvites = document.getElementById('container-convites-pendentes');
  const listaConvites = document.getElementById('lista-convites');

  if (listaAmigos) listaAmigos.innerHTML = "<p style='color: #a1a1aa; font-size: 0.85rem;'>Carregando amigos...</p>";
  if (listaConvites) listaConvites.innerHTML = "";

  try {
    // 1. CARREGAR CONVITES RECEBIDOS PENDENTES
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
            remetenteNome = remetenteDoc.data().nomeExibicao || remetenteDoc.data().email?.split('@')[0] || 'Usuário';
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

    // 2. CARREGAR AMIGOS CONFIRMADOS (SEM DUPLICAÇÃO)
    const amigosSnap = await db.collection("amizades")
      .where("usuarios", "array-contains", userAtual.uid)
      .get();

    if (amigosSnap.empty) {
      if (listaAmigos) listaAmigos.innerHTML = `<p style="color: #a1a1aa; font-size: 0.85rem;">Você ainda não possui amigos adicionados.</p>`;
      return;
    }

    // Usar um Map para garantir apenas 1 registro por amigo (evita duplicações de amizades duplicadas no banco)
    const mapaAmigos = new Map();

    amigosSnap.docs.forEach(doc => {
      const amizade = doc.data();
      const amigoId = amizade.usuarios.find(id => id !== userAtual.uid);
      if (amigoId && !mapaAmigos.has(amigoId)) {
        mapaAmigos.set(amigoId, doc.id); // Guarda o ID do amigo e o docId da amizade
      }
    });

    // Buscar dados dos amigos em paralelo
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
      const nomeAmigo = userData.nomeExibicao || (userData.email ? userData.email.split('@')[0] : 'Amigo');

      return {
        amizadeDocId,
        nomeAmigo,
        statsAmigo
      };
    });

    const listaProcessada = await Promise.all(promessasAmigos);

    if (listaAmigos) listaAmigos.innerHTML = ""; // Limpa a mensagem de carregando

    listaProcessada.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item-amigo';
      div.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; background: #121214; padding: 10px; border-radius: 6px; border: 1px solid #29292e;";
      
      div.innerHTML = `
        <div style="flex: 1;">
          <strong style="color: #fff; font-size: 0.9rem;">${item.nomeAmigo}</strong>
          <div class="info-amigo-stats" style="font-size: 0.8rem; color: #00e676; margin-top: 2px;">
            🔥 ${item.statsAmigo.streak} dias seguidos | 📊 ${item.statsAmigo.total} treinos
          </div>
        </div>
        <button 
          onclick="removerAmizade('${item.amizadeDocId}', '${item.nomeAmigo.replace(/'/g, "\\'")}')" 
          title="Remover Amigo"
          style="background: transparent; border: none; color: #ef4444; font-size: 1.1rem; cursor: pointer; padding: 4px 8px;"
        >
          ✖
        </button>
      `;
      listaAmigos.appendChild(div);
    });
const totalAmigosAtuais = listaProcessada.length;
const textoContadorAmigos = document.getElementById('contador-amigos-texto');
if (textoContadorAmigos) {
  const formatado = String(totalAmigosAtuais).padStart(2, '0');
  textoContadorAmigos.innerText = `Você possui ${formatado}/25 amigos`;
}

  } catch (err) {
    console.error("Erro ao carregar amigos e convites:", err);
    if (listaAmigos) listaAmigos.innerHTML = `<p style="color: #ef4444; font-size: 0.85rem;">Erro ao carregar a lista de amigos.</p>`;
  }
}


// Remover Amizade
async function removerAmizade(amizadeDocId, nomeAmigo) {
  const confirmar = confirm(`Quer remover amizade com ${nomeAmigo}?`);
  if (!confirmar) return;

  try {
    await db.collection("amizades").doc(amizadeDocId).delete();
    alert(`Amizade com ${nomeAmigo} foi removida.`);
    carregarAmigosEConvites();
  } catch (err) {
    console.error("Erro ao remover amizade:", err);
    alert("Erro ao remover amizade: " + err.message);
  }
}

// Aceitar Convite de Amizade
async function aceitarAmigo(conviteId, remetenteId) {
  const userAtual = auth.currentUser;
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

    await db.collection("amizades").add({
      usuarios: [userAtual.uid, remetenteId],
      criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });

    await db.collection("convites_amizade").doc(conviteId).update({ status: "aceito" });

    alert("Convite aceito!");
    carregarAmigosEConvites();
  } catch (err) {
    console.error("Erro ao aceitar convite:", err);
    alert("Erro ao aceitar convite: " + err.message);
  }
}


// -------------------------------------------------------------
// FEED DOS AMIGOS (CHECK-IN E REGRAS DE ROLAGEM/LIMITE)
// -------------------------------------------------------------

const inputFotoCheckin = document.getElementById('input-foto-checkin');
const nomeFotoCheckin = document.getElementById('nome-foto-checkin');

if (inputFotoCheckin && nomeFotoCheckin) {
  inputFotoCheckin.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      nomeFotoCheckin.textContent = "Foto capturada ✓";
      nomeFotoCheckin.style.color = "#00e676";
    }
  });
}

// Postar foto no feed de check-in dos amigos (Máximo 20 fotos e 1 por dia)
document.getElementById('btn-postar-checkin')?.addEventListener('click', async () => {
  if (!inputFotoCheckin || !inputFotoCheckin.files.length) {
    return alert("Tire uma foto antes de postar.");
  }

  const file = inputFotoCheckin.files[0];
  const userAtual = auth.currentUser;
  const hoje = obterDataLocalIso();
  const btnPostar = document.getElementById('btn-postar-checkin');

  try {
    // 1. Valida se já postou hoje
    const checkHoje = await db.collection("feed_amigos")
      .where("usuarioId", "==", userAtual.uid)
      .where("dataData", "==", hoje)
      .get();

    if (!checkHoje.empty) {
      return alert("Você já realizou o seu check-in diário de hoje!");
    }

    if (btnPostar) {
      btnPostar.disabled = true;
      btnPostar.textContent = "⏳ Enviando foto...";
    }

    // 2. Comprime a foto
    comprimirImagem(file, 800, 800, 0.7, async function(base64Comprimido) {
      const userDoc = await db.collection("usuarios").doc(userAtual.uid).get();
      const userData = userDoc.data();

      const agora = new Date();
      const dataFormatada = agora.toLocaleDateString('pt-BR');
      const horaFormatada = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

      // 3. Salva a foto no Firestore
      await db.collection("feed_amigos").add({
        usuarioId: userAtual.uid,
        nomeUsuario: userData?.nomeExibicao || (userData?.email ? userData.email.split('@')[0] : 'Usuário'),
        fotoUrl: base64Comprimido,
        dataData: hoje,
        dataExibicao: `${dataFormatada} às ${horaFormatada}`,
        timestamp: agora.getTime(),
        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
      });

      // 4. Limpeza automática: Mantém apenas os últimos 20 posts no feed geral
      const todosPostsSnap = await db.collection("feed_amigos")
        .orderBy("timestamp", "asc")
        .get();

      if (todosPostsSnap.docs.length > 20) {
        const excesso = todosPostsSnap.docs.length - 20;
        for (let i = 0; i < excesso; i++) {
          await db.collection("feed_amigos").doc(todosPostsSnap.docs[i].id).delete();
        }
      }

      alert("Check-in postado com sucesso!");
      inputFotoCheckin.value = "";
      if (nomeFotoCheckin) {
        nomeFotoCheckin.textContent = "Nenhuma foto";
        nomeFotoCheckin.style.color = "#a1a1aa";
      }

      if (btnPostar) {
        btnPostar.disabled = false;
        btnPostar.textContent = "Postar Check-in no Feed";
      }

      carregarFeedAmigos();
    });

  } catch (err) {
    console.error("Erro ao postar check-in:", err);
    alert("Erro ao postar check-in: " + err.message);
    if (btnPostar) {
      btnPostar.disabled = false;
      btnPostar.textContent = "Postar Check-in no Feed";
    }
  }
});

// Carregar Feed de fotos dos amigos
async function carregarFeedAmigos() {
  const userAtual = auth.currentUser;
  if (!userAtual) return;

  const areaPostar = document.getElementById('area-postar-checkin');
  const avisoCheckin = document.getElementById('aviso-checkin-realizado');
  const hoje = obterDataLocalIso();

  // 1. Verifica se já fez check-in hoje
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
  } catch (e) {
    console.error("Erro ao verificar check-in de hoje:", e);
  }

  // 2. Busca IDs dos amigos
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
  } catch (e) {
    console.error("Erro ao buscar amigos:", e);
  }

  // 3. Busca os posts do feed sem travar na ordenação do banco
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

    // Ordena as fotos da mais recente para a mais antiga via código
    posts.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    // Limita às 20 fotos mais recentes
    posts = posts.slice(0, 20);

    if (posts.length === 0) {
      containerFeed.innerHTML = `<p style="color: #a1a1aa; font-size: 0.85rem; text-align: center; margin-top: 20px;">Nenhum check-in postado recentemente pelos seus amigos.</p>`;
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
    console.error("Erro ao carregar feed de amigos:", err);
    containerFeed.innerHTML = `<p style="color: #ef4444; font-size: 0.85rem; text-align: center;">Erro ao carregar fotos do feed.</p>`;
  }
}
// Função chamada automaticamente quando escolhe/tira a foto no Feed da Equipe
// Função chamada automaticamente quando escolhe/tira a foto no Feed da Equipe
function atualizarTextoFotoFeed(input) {
  const textoStatus = document.getElementById('nome-arquivo-foto');
  if (input.files && input.files.length > 0) {
    if (textoStatus) {
      textoStatus.innerText = "Foto capturada ✓";
      textoStatus.style.color = "#00e676";
    }
  } else {
    if (textoStatus) {
      textoStatus.innerText = "Nenhuma foto selecionada";
      textoStatus.style.color = "#a8a8b3";
    }
  }
}

// Função para gerar código único de 6 caracteres (Ex: WNUF33)
function gerarCodigoUsuario() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

// Pré-visualizar foto do Feed da Equipe
function previsualizarFotoFeed(input) {
  const textoStatus = document.getElementById('nome-arquivo-foto');
  const miniatura = document.getElementById('miniatura-foto-feed');

  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      if (miniatura) {
        miniatura.src = e.target.result;
        miniatura.classList.remove('hidden');
      }
      if (textoStatus) {
        textoStatus.innerText = "Foto capturada ✓ (Toque na foto para ver)";
        textoStatus.style.color = "#00e676";
      }
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    resetarVisualizacaoFeed();
  }
}

function resetarVisualizacaoFeed() {
  const textoStatus = document.getElementById('nome-arquivo-foto');
  const miniatura = document.getElementById('miniatura-foto-feed');
  if (miniatura) {
    miniatura.src = "";
    miniatura.classList.add('hidden');
  }
  if (textoStatus) {
    textoStatus.innerText = "Nenhuma foto selecionada";
    textoStatus.style.color = "#a8a8b3";
  }
}

// Pré-visualizar foto do Check-in dos Amigos
function previsualizarFotoCheckin(input) {
  const textoStatus = document.getElementById('nome-foto-checkin');
  const miniatura = document.getElementById('miniatura-foto-checkin');

  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      if (miniatura) {
        miniatura.src = e.target.result;
        miniatura.classList.remove('hidden');
      }
      if (textoStatus) {
        textoStatus.innerText = "Foto capturada ✓";
        textoStatus.style.color = "#00e676";
      }
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    resetarVisualizacaoCheckin();
  }
}

function resetarVisualizacaoCheckin() {
  const textoStatus = document.getElementById('nome-foto-checkin');
  const miniatura = document.getElementById('miniatura-foto-checkin');
  if (miniatura) {
    miniatura.src = "";
    miniatura.classList.add('hidden');
  }
  if (textoStatus) {
    textoStatus.innerText = "Nenhuma foto";
    textoStatus.style.color = "#a1a1aa";
  }
}

// Funções para Abrir/Fechar o Modal de Ampliação
function ampliarFotoMiniatura(src) {
  const modal = document.getElementById('modal-ampliar-foto');
  const imgAmpliada = document.getElementById('imagem-ampliada');
  if (modal && imgAmpliada) {
    imgAmpliada.src = src;
    modal.classList.remove('hidden');
  }
}

function fecharModalAmpliar() {
  const modal = document.getElementById('modal-ampliar-foto');
  if (modal) {
    modal.classList.add('hidden');
  }
}


