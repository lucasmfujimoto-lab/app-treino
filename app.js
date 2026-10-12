const catalogoExercicios = {
  Alongamento: [
    { id: 1, nome: "Mobilidade de Ombro", video: "https://www.youtube.com/embed/S2pG37y-Jls" },
    { id: 2, nome: "Alongamento Torácico e Peitoral", video: "https://www.youtube.com/embed/5T2kM3g-_18" },
    { id: 3, nome: "Mobilidade de Quadril", video: "https://www.youtube.com/embed/3m4aA-Gj_pU" },
    { id: 4, nome: "Alongamento de Isquiotibiais", video: "https://www.youtube.com/embed/e_Z_8LqJd0M" },
    { id: 5, nome: "Alongamento de Dorsal e Costas", video: "https://www.youtube.com/embed/G8L_8wO9U4E" },
    { id: 6, nome: "Mobilidade de Tornozelo", video: "https://www.youtube.com/embed/N3awlEyY980" },
    { id: 7, nome: "Alongamento de Flexores do Quadril", video: "https://www.youtube.com/embed/3m4aA-Gj_pU" }
  ],
  Peito: [
    { id: 101, nome: "Supino Reto com Barra", video: "https://www.youtube.com/embed/sqOw2Y6uDWQ" },
    { id: 102, nome: "Supino Inclinado Halteres", video: "https://www.youtube.com/embed/Z1r2T8G9x-k" },
    { id: 103, nome: "Supino Declinado Halteres", video: "https://www.youtube.com/embed/sqOw2Y6uDWQ" },
    { id: 104, nome: "Crossover no Cabo (Médio)", video: "https://www.youtube.com/embed/U33S2kX1Aag" },
    { id: 105, nome: "Crossover de Baixo para Cima", video: "https://www.youtube.com/embed/U33S2kX1Aag" },
    { id: 106, nome: "Peck Deck / Voador", video: "https://www.youtube.com/embed/6Yp2I1yEUpE" },
    { id: 107, nome: "Crucifixo Reto com Halteres", video: "https://www.youtube.com/embed/Z1r2T8G9x-k" }
  ],
  Costas: [
    { id: 201, nome: "Puxada Frontal Aberta", video: "https://www.youtube.com/embed/XZA1v65I7wI" },
    { id: 202, nome: "Puxada com Pegada Cruzada/Triângulo", video: "https://www.youtube.com/embed/XZA1v65I7wI" },
    { id: 203, nome: "Remada Curvada com Barra", video: "https://www.youtube.com/embed/G8L_8wO9U4E" },
    { id: 204, nome: "Remada Baixa Triângulo", video: "https://www.youtube.com/embed/3O91b-6V-6U" },
    { id: 205, nome: "Remada Unilateral com Halter (Serrote)", video: "https://www.youtube.com/embed/G8L_8wO9U4E" },
    { id: 206, nome: "Pulldown na Polia Alta", video: "https://www.youtube.com/embed/Y0p3qR543O0" },
    { id: 207, nome: "Levantamento Terra", video: "https://www.youtube.com/embed/U3HlEF_E9so" }
  ],
  Biceps: [
    { id: 301, nome: "Rosca Direta Barra W", video: "https://www.youtube.com/embed/S2i2N02L0eI" },
    { id: 302, nome: "Rosca Martelo Halteres", video: "https://www.youtube.com/embed/zC3nLlEvinU" },
    { id: 303, nome: "Rosca Scott no Banco", video: "https://www.youtube.com/embed/0B2h8_cI66E" },
    { id: 304, nome: "Rosca Inclinada no Banco 45°", video: "https://www.youtube.com/embed/S2i2N02L0eI" },
    { id: 305, nome: "Rosca Concentrada Unilateral", video: "https://www.youtube.com/embed/0B2h8_cI66E" },
    { id: 306, nome: "Rosca na Polia Baixa Corda", video: "https://www.youtube.com/embed/zC3nLlEvinU" },
    { id: 307, nome: "Rosca Inversa com Barra", video: "https://www.youtube.com/embed/S2i2N02L0eI" }
  ],
  Triceps: [
    { id: 401, nome: "Tríceps Pulley Corda", video: "https://www.youtube.com/embed/8A28J27LpL0" },
    { id: 402, nome: "Tríceps Pulley Barra Reta", video: "https://www.youtube.com/embed/8A28J27LpL0" },
    { id: 403, nome: "Tríceps Testa Barra H", video: "https://www.youtube.com/embed/d_KZxkY_0cM" },
    { id: 404, nome: "Tríceps Francês Unilateral Halter", video: "https://www.youtube.com/embed/wX2L3O815A0" },
    { id: 405, nome: "Tríceps Coice na Polia", video: "https://www.youtube.com/embed/wX2L3O815A0" },
    { id: 406, nome: "Mergulho / Paralelas", video: "https://www.youtube.com/embed/d_KZxkY_0cM" },
    { id: 407, nome: "Supino Fechado", video: "https://www.youtube.com/embed/sqOw2Y6uDWQ" }
  ],
  Ombro: [
    { id: 501, nome: "Desenvolvimento com Halteres", video: "https://www.youtube.com/embed/M2rwv2g8OEU" },
    { id: 502, nome: "Desenvolvimento Arnold", video: "https://www.youtube.com/embed/M2rwv2g8OEU" },
    { id: 503, nome: "Elevação Lateral Halteres", video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
    { id: 504, nome: "Elevação Lateral na Polia Baixa", video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
    { id: 505, nome: "Elevação Frontal com Barra/Halteres", video: "https://www.youtube.com/embed/hRJ6tR5-ioo" },
    { id: 506, nome: "Crucifixo Invertido no Peck Deck", video: "https://www.youtube.com/embed/6Yp2I1yEUpE" },
    { id: 507, nome: "Encolhimento de Ombros (Trapézio)", video: "https://www.youtube.com/embed/M2rwv2g8OEU" }
  ],
  Perna: [
    { id: 601, nome: "Agachamento Livre com Barra", video: "https://www.youtube.com/embed/U3HlEF_E9so" },
    { id: 602, nome: "Leg Press 45°", video: "https://www.youtube.com/embed/yZmx_Ac3880" },
    { id: 603, nome: "Cadeira Extensora", video: "https://www.youtube.com/embed/Yy5D4O3_02s" },
    { id: 604, nome: "Mesa Flexora", video: "https://www.youtube.com/embed/1Tq3VMWInno" },
    { id: 605, nome: "Cadeira Flexora", video: "https://www.youtube.com/embed/1Tq3VMWInno" },
    { id: 606, nome: "Agachamento Búlgaro", video: "https://www.youtube.com/embed/U3HlEF_E9so" },
    { id: 607, nome: "Stiff com Halteres / Barra", video: "https://www.youtube.com/embed/e_Z_8LqJd0M" },
    { id: 608, nome: "Gêmeos em Pé (Panturrilha)", video: "https://www.youtube.com/embed/N3awlEyY980" }
  ],
  Abdomen: [
    { id: 701, nome: "Abdominal Infra Solo", video: "https://www.youtube.com/embed/l41NoxJ3I1U" },
    { id: 702, nome: "Abdominal Supra Solo", video: "https://www.youtube.com/embed/5ER5Of4-62g" },
    { id: 703, nome: "Abdominal na Polia Alta (Roda/Corda)", video: "https://www.youtube.com/embed/5ER5Of4-62g" },
    { id: 704, nome: "Prancha Isométrica", video: "https://www.youtube.com/embed/pSHjTRCQxIw" },
    { id: 705, nome: "Prancha Lateral", video: "https://www.youtube.com/embed/pSHjTRCQxIw" },
    { id: 706, nome: "Abdominal Infra Suspenso na Barra", video: "https://www.youtube.com/embed/l41NoxJ3I1U" },
    { id: 707, nome: "Abdominal Oblíquo Cruzado", video: "https://www.youtube.com/embed/5ER5Of4-62g" }
  ],
  Cardio: [
    { id: 801, nome: "Esteira (Caminhada / Corrida)", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 802, nome: "Bicicleta Ergométrica", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 803, nome: "Elíptico / Transport", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 804, nome: "Simulador de Escada", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 805, nome: "Corda de Pular", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 806, nome: "Remo Seco Ergômetro", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 807, nome: "Polichinelos / HIIT", video: "https://www.youtube.com/embed/0G2_XV7slIg" }
  ]
};

const todosGrupos = ["Peito", "Costas", "Biceps", "Triceps", "Ombro", "Perna", "Abdomen", "Cardio"];

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
  carregarBlocoAlongamento();

  document.getElementById('btn-abrir-alongamento').addEventListener('click', () => {
    document.getElementById('modal-alongamento').classList.remove('hidden');
  });
});

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

      const inputs = document.createElement('div');
      inputs.className = 'inputs-treino';
      inputs.innerHTML = `
        <input type="number" placeholder="Séries" value="3" class="input-series">
        <input type="text" placeholder="Reps" value="8-10" class="input-reps">
        <input type="number" placeholder="Carga (kg)" class="input-carga">
      `;

      cardEx.appendChild(topo);
      cardEx.appendChild(inputs);
      listaContainer.appendChild(cardEx);
    });
  });

  areaExecucao.classList.remove('hidden');
}

function concluirTreino() {
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

  localStorage.setItem('historicoTreinos', JSON.stringify(historicoTreinos));

  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
  localStorage.setItem('indiceTreinoAtual', indiceTreinoAtual);

  alert('Treino concluído com sucesso!');
  document.getElementById('area-execucao').classList.add('hidden');
  atualizarTelaInicial();
  renderizarCalendario();
}

function trocarTreinoManual() {
  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
  localStorage.setItem('indiceTreinoAtual', indiceTreinoAtual);
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
    html += "<ul style='list-style: none; padding: 0;'>";
    
    treinoFeito.exercicios.forEach(ex => {
      html += `
        <li style='background: #121214; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 0.85rem;'>
          <strong>${ex.nome}</strong><br>
          <span style='color: #a8a8b3;'>${ex.series} séries x ${ex.reps} reps | Carga: ${ex.carga}</span>
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

function abrirConfigRotina() {
  document.getElementById('modal-config-rotina').classList.remove('hidden');
  gerarCamposConfig();
}

function gerarCamposConfig() {
  const inputDiv = document.getElementById('input-divisao-letras').value.toUpperCase().trim();
  const container = document.getElementById('container-config-dias');
  container.innerHTML = '';

  if (!inputDiv) return;

  const letras = inputDiv.split('');

  letras.forEach((letra) => {
    const bloco = document.createElement('div');
    bloco.style.cssText = "margin-bottom: 15px; border-bottom: 1px solid #29292e; padding-bottom: 10px;";
    
    let html = `<h4 style='color: #00e676; margin-bottom: 8px; text-align: left;'>Treino ${letra}</h4>`;
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

  document.getElementById('btn-salvar-rotina').classList.remove('hidden');
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
    localStorage.setItem('indiceTreinoAtual', '0');
    
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
