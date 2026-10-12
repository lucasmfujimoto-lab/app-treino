// Catálogo de Exercícios com instrução e demonstração em Português
const catalogoExercicios = {
  Peito: [
    { id: 101, nome: "Supino Reto com Barra", video: "https://www.youtube.com/embed/rT7DgCr-3pg" },
    { id: 102, nome: "Supino Inclinado Halteres", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 103, nome: "Crossover no Cabo", video: "https://www.youtube.com/embed/taI4XduLpTk" },
    { id: 104, nome: "Peck Deck / Voador", video: "https://www.youtube.com/embed/Z57CtFmRMxA" },
    { id: 105, nome: "Flexão de Braço", video: "https://www.youtube.com/embed/v9LABVI11S0" }
  ],
  Triceps: [
    { id: 201, nome: "Tríceps Pulley Corda", video: "https://www.youtube.com/embed/vB5OHsJ3EME" },
    { id: 202, nome: "Tríceps Testa", video: "https://www.youtube.com/embed/d_KZxkY_0cM" },
    { id: 203, nome: "Tríceps Coice Halter", video: "https://www.youtube.com/embed/6SS6K3l-I4A" },
    { id: 204, nome: "Dip na Paralela / Banco", video: "https://www.youtube.com/embed/2z8JmcrW-As" }
  ],
  Ombro: [
    { id: 301, nome: "Desenvolvimento Halteres", video: "https://www.youtube.com/embed/M2rwv2g8OEU" },
    { id: 302, nome: "Elevação Lateral", video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
    { id: 303, nome: "Elevação Frontal", video: "https://www.youtube.com/embed/hRJ6tR5-ioo" },
    { id: 304, nome: "Crucifixo Invertido", video: "https://www.youtube.com/embed/deGfBIn1Hyo" }
  ],
  Costas: [
    { id: 401, nome: "Puxada Frontal", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
    { id: 402, nome: "Remada Curvada", video: "https://www.youtube.com/embed/vT2GjY_Umpw" },
    { id: 403, nome: "Remada Baixa Triângulo", video: "https://www.youtube.com/embed/GZbfZ033f74" },
    { id: 404, nome: "Pulldown Corda", video: "https://www.youtube.com/embed/39InmXk0Rfg" }
  ],
  Biceps: [
    { id: 501, nome: "Rosca Direta Barra", video: "https://www.youtube.com/embed/kwG2ipFRgfo" },
    { id: 502, nome: "Rosca Martelo", video: "https://www.youtube.com/embed/zC3nLlEvinU" },
    { id: 503, nome: "Rosca Scott", video: "https://www.youtube.com/embed/fD3qCmk_O_0" },
    { id: 504, nome: "Rosca Inclinada Halter", video: "https://www.youtube.com/embed/soxrZlIl35U" }
  ],
  Perna: [
    { id: 601, nome: "Agachamento Livre", video: "https://www.youtube.com/embed/U3HlEF_E9so" },
    { id: 602, nome: "Leg Press 45°", video: "https://www.youtube.com/embed/yZmx_Ac3880" },
    { id: 603, nome: "Cadeira Extensora", video: "https://www.youtube.com/embed/Yy5D4O3_02s" },
    { id: 604, nome: "Mesa Flexora", video: "https://www.youtube.com/embed/1Tq3VMWInno" },
    { id: 605, nome: "Gêmeos em Pé (Panturrilha)", video: "https://www.youtube.com/embed/N3awlEyY980" }
  ],
  Abdomen: [
    { id: 701, nome: "Abdominal Supra Solo", video: "https://www.youtube.com/embed/5ER5Of4-62g" },
    { id: 702, nome: "Prancha Abdominal", video: "https://www.youtube.com/embed/pSHjTRCQxIw" },
    { id: 703, nome: "Elevacao de Pernas", video: "https://www.youtube.com/embed/l41NoxJ3I1U" }
  ],
  Cardio: [
    { id: 801, nome: "Esteira (Caminhada / Corrida)", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 802, nome: "Bicicleta Ergométrica", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 803, nome: "Transport / Elíptico", video: "https://www.youtube.com/embed/0G2_XV7slIg" }
  ]
};

// Lista de Grupos Disponíveis
const todosGrupos = ["Peito", "Triceps", "Ombro", "Costas", "Biceps", "Perna", "Abdomen", "Cardio"];

// Rotina Padrão do Usuário
let configuracaoTreino = JSON.parse(localStorage.getItem('minhaRotina')) || [
  { letra: "A", grupos: ["Peito", "Triceps"] },
  { letra: "B", grupos: ["Costas", "Biceps"] },
  { letra: "C", grupos: ["Perna", "Ombro", "Abdomen"] }
];

let indiceTreinoAtual = parseInt(localStorage.getItem('indiceTreinoAtual')) || 0;
let historicoTreinos = JSON.parse(localStorage.getItem('historicoTreinos')) || {};

document.addEventListener("DOMContentLoaded", () => {
  atualizarTelaInicial();
  renderizarCalendario();
});

function atualizarTelaInicial() {
  if (configuracaoTreino.length === 0) return;
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  document.getElementById('nome-treino').innerText = `TREINO ${treinoAtual.letra}`;
  document.getElementById('foco-treino').innerText = `Grupos: ${treinoAtual.grupos.join(', ')}`;
}

// Iniciar Treino e Montar Lista
function iniciarTreino() {
  const areaExecucao = document.getElementById('area-execucao');
  const listaContainer = document.getElementById('lista-exercicios');
  listaContainer.innerHTML = '';

  const treinoAtual = configuracaoTreino[indiceTreinoAtual];

  treinoAtual.grupos.forEach(grupo => {
    const exerciciosGrupo = catalogoExercicios[grupo] || [];
    if (exerciciosGrupo.length > 0) {
      const tituloGrupo = document.createElement('h3');
      tituloGrupo.style.cssText = "color: #00e676; margin: 15px 0 8px 0; font-size: 0.95rem; text-align: left;";
      tituloGrupo.innerText = `● ${grupo}`;
      listaContainer.appendChild(tituloGrupo);
    }

    exerciciosGrupo.forEach(ex => {
      const cardEx = document.createElement('div');
      cardEx.className = 'item-exercicio';
      cardEx.innerHTML = `
        <div class="exercicio-topo">
          <label>
            <input type="checkbox" class="check-ex" data-nome="${ex.nome}" checked> 
            <strong>${ex.nome}</strong>
          </label>
          <button class="btn-secundario" style="padding: 4px 8px; font-size: 0.75rem;" onclick="verVideo('${ex.nome}', '${ex.video}')">▶ Vídeo</button>
        </div>
        <div class="inputs-treino">
          <input type="number" placeholder="Séries" value="3" class="input-series">
          <input type="text" placeholder="Reps" value="8-10" class="input-reps">
          <input type="number" placeholder="Carga (kg)" class="input-carga">
        </div>
      `;
      listaContainer.appendChild(cardEx);
    });
  });

  areaExecucao.classList.remove('hidden');
}

// Concluir e Salvar no Histórico
function concluirTreino() {
  const hoje = new Date().toISOString().split('T')[0];
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];

  const itensEx = document.querySelectorAll('.item-exercicio');
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

  localStorage.setItem('historicoTreinos', JSON.stringify(historicoTreinos));

  // Avançar Sequência (A -> B -> C -> A)
  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
  localStorage.setItem('indiceTreinoAtual', indiceTreinoAtual);

  alert('Treino concluído com sucesso! 👏');
  document.getElementById('area-execucao').classList.add('hidden');
  atualizarTelaInicial();
  renderizarCalendario();
}

function trocarTreinoManual() {
  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
  localStorage.setItem('indiceTreinoAtual', indiceTreinoAtual);
  atualizarTelaInicial();
}

// Renderizar Calendário dos Últimos 14 Dias
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

// Modal de Detalhamento do Treino Realizado
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
    html += "<ul style='list-style: none; padding: 0;'>";
    
    treinoFeito.exercicios.forEach(ex => {
      html += `
        <li style='background: #121214; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 0.85rem;'>
          <strong>${ex.nome}</strong><br>
          <span style='color: #a8a8b3;'>${ex.series} series x ${ex.reps} reps | Carga: ${ex.carga}</span>
        </li>
      `;
    });
    html += "</ul>";
    corpo.innerHTML = html;
  }

  modal.classList.remove('hidden');
}

function fecharModalDetalhes() {
  document.getElementById('modal-detalhes').classList.add('hidden');
}

// Configuração de Divisão de Treinos (A, B, C...)
function abrirConfigRotina() {
  const container = document.getElementById('container-config-dias');
  container.innerHTML = '';

  const divisao = prompt("Qual divisão deseja usar? (Ex: AB, ABC, ABCD, ABCDE)", "ABC");
  if (!divisao) return;

  const letras = divisao.toUpperCase().split('');

  letras.forEach((letra) => {
    const bloco = document.createElement('div');
    bloco.style.cssText = "margin-bottom: 15px; border-bottom: 1px solid #29292e; padding-bottom: 10px;";
    
    let html = `<h4 style='color: #00e676; margin-bottom: 8px;'>Treino ${letra}</h4>`;
    html += `<div class='grupo-checkboxes' data-letra='${letra}'>`;
    
    todosGrupos.forEach(grupo => {
      html += `
        <label>
          <input type='checkbox' value='${grupo}'> ${grupo}
        </label>
      `;
    });
    html += `</div>`;
    bloco.innerHTML = html;
    container.appendChild(bloco);
  });

  document.getElementById('modal-config-rotina').classList.remove('hidden');
}

function salvarNovaConfig() {
  const blocos = document.querySelectorAll('.grupo-checkboxes');
  const novaRotina = [];

  blocos.forEach(bloco => {
    const letra = bloco.getAttribute('data-letra');
    const marcados = [];
    bloco.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
      marcados.push(cb.value);
    });

    if (marcados.length > 0) {
      novaRotina.push({ letra: letra, grupos: marcados });
    }
  });

  if (novaRotina.length > 0) {
    configuracaoTreino = novaRotina;
    indiceTreinoAtual = 0;
    localStorage.setItem('minhaRotina', JSON.stringify(configuracaoTreino));
    localStorage.setItem('indiceTreinoAtual', 0);
    atualizarTelaInicial();
    fecharModalConfig();
    alert('Nova rotina configurada com sucesso!');
  } else {
    alert('Selecione pelo menos um grupo muscular por treino.');
  }
}

function fecharModalConfig() {
  document.getElementById('modal-config-rotina').classList.add('hidden');
}

function verVideo(titulo, url) {
  document.getElementById('video-titulo').innerText = titulo;
  document.getElementById('video-container').innerHTML = `<iframe width="100%" height="220" src="${url}" frameborder="0" allowfullscreen></iframe>`;
  document.getElementById('modal-video').classList.remove('hidden');
}

function fecharModalVideo() {
  document.getElementById('modal-video').classList.add('hidden');
  document.getElementById('video-container').innerHTML = '';
}
