// Base de Exercícios com Vídeo de Demonstração
const catalogoExercicios = {
  Peito: [
    { id: 1, nome: "Supino Reto com Barra", video: "https://www.youtube.com/embed/rT7DgCr-3pg" },
    { id: 2, nome: "Supino Inclinado Halteres", video: "https://www.youtube.com/embed/0G2_XV7slIg" },
    { id: 3, nome: "Crossover Cabo", video: "https://www.youtube.com/embed/taI4XduLpTk" }
  ],
  Triceps: [
    { id: 4, nome: "Tríceps Pulley Corda", video: "https://www.youtube.com/embed/vB5OHsJ3EME" },
    { id: 5, nome: "Tríceps Testa", video: "https://www.youtube.com/embed/d_KZxkY_0cM" }
  ],
  Costas: [
    { id: 6, nome: "Puxada Frontal", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
    { id: 7, nome: "Remada Curvada", video: "https://www.youtube.com/embed/vT2GjY_Umpw" }
  ],
  Biceps: [
    { id: 8, nome: "Rosca Direta", video: "https://www.youtube.com/embed/kwG2ipFRgfo" },
    { id: 9, nome: "Rosca Martelo", video: "https://www.youtube.com/embed/zC3nLlEvinU" }
  ]
};

// Estrutura de Treino Padrão (ABC)
let configuracaoTreino = JSON.parse(localStorage.getItem('minhaRotina')) || [
  { letra: "A", grupos: ["Peito", "Triceps"] },
  { letra: "B", grupos: ["Costas", "Biceps"] },
  { letra: "C", grupos: ["Perna", "Ombro"] }
];

let indiceTreinoAtual = parseInt(localStorage.getItem('indiceTreinoAtual')) || 0;
let historicoTreinos = JSON.parse(localStorage.getItem('historicoTreinos')) || {};

// Inicializar App
document.addEventListener("DOMContentLoaded", () => {
  atualizarTelaInicial();
  renderizarCalendario();
});

function atualizarTelaInicial() {
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  document.getElementById('nome-treino').innerText = `TREINO ${treinoAtual.letra}`;
  document.getElementById('foco-treino').innerText = `Grupos: ${treinoAtual.grupos.join(', ')}`;
}

// Iniciar e carregar exercícios
function iniciarTreino() {
  const areaExecucao = document.getElementById('area-execucao');
  const listaContainer = document.getElementById('lista-exercicios');
  listaContainer.innerHTML = '';
  
  const treinoAtual = configuracaoTreino[indiceTreinoAtual];
  
  treinoAtual.grupos.forEach(grupo => {
    const exerciciosGrupo = catalogoExercicios[grupo] || [];
    
    exerciciosGrupo.forEach(ex => {
      const cardEx = document.createElement('div');
      cardEx.className = 'item-exercicio';
      cardEx.innerHTML = `
        <div class="exercicio-topo">
          <label>
            <input type="checkbox" class="check-ex" data-id="${ex.id}" data-nome="${ex.nome}" checked> 
            <strong>${ex.nome}</strong>
          </label>
          <button class="btn-secundario" style="padding:4px 8px; font-size:0.8rem" onclick="verVideo('${ex.nome}', '${ex.video}')">▶ Vídeo</button>
        </div>
        <div class="inputs-treino">
          <input type="number" placeholder="Séries" value="3" class="input-series">
          <input type="text" placeholder="Reps" value="8-10" class="input-reps">
          <input type="number" placeholder="Carga (kg) - Opcional" class="input-carga">
        </div>
      `;
      listaContainer.appendChild(cardEx);
    });
  });

  areaExecucao.classList.remove('hidden');
}

// Fazer Check-in do Treino
function concluirTreino() {
  const hoje = new Date().toISOString().split('T')[0]; // Data YYYY-MM-DD
  const letraAtual = configuracaoTreino[indiceTreinoAtual].letra;

  // Registrar no histórico
  historicoTreinos[hoje] = {
    treino: letraAtual,
    concluido: true
  };
  localStorage.setItem('historicoTreinos', JSON.stringify(historicoTreinos));

  // Avançar para o próximo treino da sequência (A -> B -> C -> A)
  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
  localStorage.setItem('indiceTreinoAtual', indiceTreinoAtual);

  alert('Treino concluído e salvo com sucesso! 🎉');
  document.getElementById('area-execucao').classList.add('hidden');
  atualizarTelaInicial();
  renderizarCalendario();
}

// Trocar de treino manualmente sem perder a ordem
function trocarTreinoManual() {
  indiceTreinoAtual = (indiceTreinoAtual + 1) % configuracaoTreino.length;
  localStorage.setItem('indiceTreinoAtual', indiceTreinoAtual);
  atualizarTelaInicial();
}

// Alterar sequência (Recriar AB / ABC / ABCD)
function alterarSequencia() {
  const op = prompt("Digite a nova sequência desejada (Ex: AB, ABC, ABCD):", "ABC");
  if(op) {
    const letras = op.toUpperCase().split('');
    configuracaoTreino = letras.map(l => ({
      letra: l,
      grupos: ["Peito", "Triceps"] // Exemplo padrão
    }));
    indiceTreinoAtual = 0;
    localStorage.setItem('minhaRotina', JSON.stringify(configuracaoTreino));
    localStorage.setItem('indiceTreinoAtual', 0);
    atualizarTelaInicial();
  }
}

// Modal de Vídeo
function verVideo(titulo, url) {
  document.getElementById('video-titulo').innerText = titulo;
  document.getElementById('video-container').innerHTML = `<iframe width="100%" height="250" src="${url}" frameborder="0" allowfullscreen></iframe>`;
  document.getElementById('modal-video').classList.remove('hidden');
}

function fecharModal() {
  document.getElementById('modal-video').classList.add('hidden');
  document.getElementById('video-container').innerHTML = '';
}

// Calendário simples dos últimos 7 dias
function renderizarCalendario() {
  const cal = document.getElementById('calendario');
  cal.innerHTML = '';
  
  for(let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dataIso = d.toISOString().split('T')[0];
    
    const div = document.createElement('div');
    const foiTreinado = historicoTreinos[dataIso];
    
    div.className = `dia-cal ${foiTreinado ? 'treinado' : ''}`;
    div.innerHTML = `
      <div>${d.getDate()}/${d.getMonth()+1}</div>
      <small>${foiTreinado ? foiTreinado.treino : '-'}</small>
    `;
    cal.appendChild(div);
  }
}
