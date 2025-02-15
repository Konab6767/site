// Dados de exemplo das obras com 10 capítulos cada
const obras = {
    1: {
        id: 1,
        titulo: "Martial Peak",
        cover: "https://exemplo.com/imagem.jpg",
        status: "Em Lançamento",
        ano: 2023,
        generos: ["Ação", "Aventura", "Cultivo", "Artes Marciais"],
        rating: 4.5,
        sinopse: "A jornada ao pico marcial é solitária e longa. Enfrentando adversidades, você deve sobreviver e permanecer firme. Apenas aqueles com força de vontade inabalável podem alcançar o ápice.",
        autor: "Momo",
        estudio: "Divine Animation Studio",
        totalCapitulos: 10,
        capitulos: [
            { numero: 1, titulo: "O Início do Cultivo", dataLancamento: "01/01/2023", visualizacoes: 15420 },
            { numero: 2, titulo: "Primeiro Desafio", dataLancamento: "08/01/2023", visualizacoes: 14320 },
            { numero: 3, titulo: "Descoberta do Qi", dataLancamento: "15/01/2023", visualizacoes: 13280 },
            { numero: 4, titulo: "Treinamento Intenso", dataLancamento: "22/01/2023", visualizacoes: 12450 },
            { numero: 5, titulo: "O Torneio Começa", dataLancamento: "29/01/2023", visualizacoes: 11870 },
            { numero: 6, titulo: "Primeira Vitória", dataLancamento: "05/02/2023", visualizacoes: 10930 },
            { numero: 7, titulo: "Novo Poder", dataLancamento: "12/02/2023", visualizacoes: 9840 },
            { numero: 8, titulo: "O Rival Aparece", dataLancamento: "19/02/2023", visualizacoes: 8760 },
            { numero: 9, titulo: "Batalha Decisiva", dataLancamento: "26/02/2023", visualizacoes: 7650 },
            { numero: 10, titulo: "Avanço de Nível", dataLancamento: "05/03/2023", visualizacoes: 6540 }
        ]
    },
    2: {
        id: 2,
        titulo: "Tales of Demons and Gods",
        cover: "https://exemplo.com/imagem2.jpg",
        status: "Em Lançamento",
        ano: 2023,
        generos: ["Ação", "Aventura", "Fantasia", "Reencarnação"],
        rating: 4.7,
        sinopse: "Um expert marcial reencarna no passado, em seu corpo mais jovem, para corrigir os erros de sua vida e proteger a cidade que falhou em salvar.",
        autor: "Mad Snail",
        estudio: "AC.qq",
        totalCapitulos: 10,
        capitulos: [
            { numero: 1, titulo: "Retorno ao Passado", dataLancamento: "01/01/2023", visualizacoes: 25420 },
            { numero: 2, titulo: "Nova Chance", dataLancamento: "08/01/2023", visualizacoes: 24320 },
            { numero: 3, titulo: "Academia", dataLancamento: "15/01/2023", visualizacoes: 23280 },
            { numero: 4, titulo: "Primeiro Teste", dataLancamento: "22/01/2023", visualizacoes: 22450 },
            { numero: 5, titulo: "Revelação", dataLancamento: "29/01/2023", visualizacoes: 21870 },
            { numero: 6, titulo: "Poder Oculto", dataLancamento: "05/02/2023", visualizacoes: 20930 },
            { numero: 7, titulo: "Demônios", dataLancamento: "12/02/2023", visualizacoes: 19840 },
            { numero: 8, titulo: "Cidade em Perigo", dataLancamento: "19/02/2023", visualizacoes: 18760 },
            { numero: 9, titulo: "Proteção", dataLancamento: "26/02/2023", visualizacoes: 17650 },
            { numero: 10, titulo: "Nova Força", dataLancamento: "05/03/2023", visualizacoes: 16540 }
        ]
    },
    3: {
        id: 3,
        titulo: "Soul Land",
        cover: "https://exemplo.com/imagem3.jpg",
        status: "Em Lançamento",
        ano: 2023,
        generos: ["Ação", "Aventura", "Fantasia", "Romance"],
        rating: 4.6,
        sinopse: "Em um mundo onde as almas marciais determinam seu poder, um jovem começa sua jornada para se tornar o mais forte.",
        autor: "Tang Jia San Shao",
        estudio: "Colored Pencil Animation",
        totalCapitulos: 10,
        capitulos: [
            { numero: 1, titulo: "Alma Marcial", dataLancamento: "01/01/2023", visualizacoes: 35420 },
            { numero: 2, titulo: "Academia Shrek", dataLancamento: "08/01/2023", visualizacoes: 34320 },
            { numero: 3, titulo: "Primeiro Anel", dataLancamento: "15/01/2023", visualizacoes: 33280 },
            { numero: 4, titulo: "Treinamento", dataLancamento: "22/01/2023", visualizacoes: 32450 },
            { numero: 5, titulo: "Competição", dataLancamento: "29/01/2023", visualizacoes: 31870 },
            { numero: 6, titulo: "Novo Poder", dataLancamento: "05/02/2023", visualizacoes: 30930 },
            { numero: 7, titulo: "Desafio", dataLancamento: "12/02/2023", visualizacoes: 29840 },
            { numero: 8, titulo: "Evolução", dataLancamento: "19/02/2023", visualizacoes: 28760 },
            { numero: 9, titulo: "Grande Batalha", dataLancamento: "26/02/2023", visualizacoes: 27650 },
            { numero: 10, titulo: "Vitória", dataLancamento: "05/03/2023", visualizacoes: 26540 }
        ]
    },
    4: {
        id: 4,
        titulo: "Battle Through the Heavens",
        cover: "https://exemplo.com/imagem4.jpg",
        status: "Em Lançamento",
        ano: 2023,
        generos: ["Ação", "Aventura", "Fantasia", "Artes Marciais"],
        rating: 4.8,
        sinopse: "A história de um gênio que perdeu seus poderes e sua jornada para recuperá-los e se tornar o mais forte.",
        autor: "Heavenly Silkworm Potato",
        estudio: "Shanghai Motion Magic",
        totalCapitulos: 10,
        capitulos: [
            { numero: 1, titulo: "Gênio Caído", dataLancamento: "01/01/2023", visualizacoes: 45420 },
            { numero: 2, titulo: "Chama Misteriosa", dataLancamento: "08/01/2023", visualizacoes: 44320 },
            { numero: 3, titulo: "Treinamento Secreto", dataLancamento: "15/01/2023", visualizacoes: 43280 },
            { numero: 4, titulo: "Primeiro Sucesso", dataLancamento: "22/01/2023", visualizacoes: 42450 },
            { numero: 5, titulo: "Desafio Público", dataLancamento: "29/01/2023", visualizacoes: 41870 },
            { numero: 6, titulo: "Revelação", dataLancamento: "05/02/2023", visualizacoes: 40930 },
            { numero: 7, titulo: "Nova Técnica", dataLancamento: "12/02/2023", visualizacoes: 39840 },
            { numero: 8, titulo: "Confronto", dataLancamento: "19/02/2023", visualizacoes: 38760 },
            { numero: 9, titulo: "Vingança", dataLancamento: "26/02/2023", visualizacoes: 37650 },
            { numero: 10, titulo: "Ascensão", dataLancamento: "05/03/2023", visualizacoes: 36540 }
        ]
    }
};

// Estado da aplicação
let ordemCrescente = true;
let capitulosFiltrados = [];
let obraAtual = null;

// Função para carregar os dados da obra
function carregarDadosObra() {
    // Pegar o ID da obra da URL
    const urlParams = new URLSearchParams(window.location.search);
    const obraId = parseInt(urlParams.get('id'));
    
    // Verificar se a obra existe
    if (!obras[obraId]) {
        console.error('Obra não encontrada');
        return;
    }

    obraAtual = obras[obraId];
    capitulosFiltrados = [...obraAtual.capitulos];

    // Carregar dados básicos
    document.getElementById('obraTitulo').textContent = obraAtual.titulo;
    document.getElementById('obraStatus').textContent = obraAtual.status;
    document.getElementById('obraAno').textContent = obraAtual.ano;
    document.getElementById('obraGeneros').textContent = obraAtual.generos.join(', ');
    document.getElementById('obraRating').textContent = obraAtual.rating.toFixed(1);
    
    // Informações detalhadas
    document.getElementById('obraSinopse').textContent = obraAtual.sinopse;
    document.getElementById('obraAutor').textContent = obraAtual.autor;
    document.getElementById('obraEstudio').textContent = obraAtual.estudio;
    document.getElementById('obraStatusCompleto').textContent = obraAtual.status;
    document.getElementById('obraTotalCaps').textContent = obraAtual.totalCapitulos;

    // Carregar capítulos
    atualizarListaCapitulos();
}

// Função para atualizar a lista de capítulos
function atualizarListaCapitulos() {
    const capitulosList = document.getElementById('capitulosList');
    if (!capitulosList) return;

    capitulosList.innerHTML = '';

    const capitulosOrdenados = [...capitulosFiltrados].sort((a, b) => {
        return ordemCrescente ? a.numero - b.numero : b.numero - a.numero;
    });

    capitulosOrdenados.forEach(capitulo => {
        const capituloElement = document.createElement('div');
        capituloElement.className = 'capitulo-item';
        capituloElement.innerHTML = `
            <div class="capitulo-info">
                <h3>Capítulo ${capitulo.numero}</h3>
                <p>${capitulo.titulo}</p>
            </div>
            <div class="capitulo-metadata">
                <span class="data">${capitulo.dataLancamento}</span>
                <span class="views">${capitulo.visualizacoes.toLocaleString()} visualizações</span>
            </div>
            <a href="#capitulo-${capitulo.numero}" class="ler-capitulo">Ler</a>
        `;
        capitulosList.appendChild(capituloElement);
    });

    // Atualizar ícone de ordenação
    const orderIcon = document.querySelector('.order-icon');
    if (orderIcon) {
        orderIcon.textContent = ordemCrescente ? '↑' : '↓';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Carregar dados iniciais
    carregarDadosObra();

    // Tabs de navegação
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Atualizar botões
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Atualizar conteúdo
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetTab) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // Botão de ordenação
    const ordenarBtn = document.getElementById('ordenarBtn');
    if (ordenarBtn) {
        ordenarBtn.addEventListener('click', () => {
            ordemCrescente = !ordemCrescente;
            atualizarListaCapitulos();
        });
    }

    // Busca de capítulos
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            capitulosFiltrados = obraAtual.capitulos.filter(cap => 
                cap.titulo.toLowerCase().includes(termo) || 
                cap.numero.toString().includes(termo)
            );
            atualizarListaCapitulos();
        });
    }

    // Sistema de avaliação
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                s.classList.toggle('active', i <= index);
            });
        });
    });
});

// Função para adicionar comentário
function adicionarComentario(texto) {
    const comentariosList = document.getElementById('comentariosList');
    if (!comentariosList) return;

    const comentario = document.createElement('div');
    comentario.className = 'comentario';
    comentario.innerHTML = `
        <div class="comentario-header">
            <img src="avatar-padrao.jpg" alt="Avatar" class="avatar">
            <div class="comentario-info">
                <h4>Usuário</h4>
                <span>${new Date().toLocaleDateString()}</span>
            </div>
        </div>
        <p>${texto}</p>
    `;
    comentariosList.prepend(comentario);
}

// Event listener para o formulário de comentários
const commentForm = document.querySelector('.novo-comentario');
if (commentForm) {
    const commentInput = commentForm.querySelector('textarea');
    const submitButton = commentForm.querySelector('.submit-comment');

    submitButton.addEventListener('click', () => {
        const texto = commentInput.value.trim();
        if (texto) {
            adicionarComentario(texto);
            commentInput.value = '';
        }
    });
}

// Dados mockados para teste
const mockObra = {
    id: 1,
    titulo: "Battle Through the Heavens",
    status: "Em Andamento",
    formato: "Donghua",
    descricao: "Em um mundo onde a força é tudo, Xiao Yan, um gênio talentoso que perdeu seus poderes, embarca em uma jornada para recuperar suas habilidades e descobrir a verdade por trás de seu declínio.",
    capa: "images/obras/btth.jpg",
    views: 150000,
    favoritos: 5000,
    dataAdicao: "2024-01-15",
    ultimaAtualizacao: "2024-02-20",
    avaliacao: 4.5,
    totalAvaliacoes: 1234,
    generos: ["Ação", "Aventura", "Fantasia", "Artes Marciais"],
    tags: ["Cultivo", "Poderes", "Alquimia", "Vingança"]
};

// Elementos DOM
document.addEventListener('DOMContentLoaded', () => {
    // Carregar dados da obra
    carregarDadosObra();

    // Configurar eventos
    configurarTabs();
    configurarBotoes();
    configurarModais();
    configurarPesquisa();
    configurarOrdenacao();
});

// Funções principais
function carregarDadosObra() {
    // Informações básicas
    document.getElementById('obraTitulo').textContent = mockObra.titulo;
    document.getElementById('obraStatus').textContent = mockObra.status;
    document.getElementById('obraFormato').textContent = mockObra.formato;
    document.getElementById('obraDescricao').textContent = mockObra.descricao;
    document.getElementById('obraCover').src = mockObra.capa;
    
    // Metadados
    document.getElementById('obraViews').textContent = formatarNumero(mockObra.views) + ' visualizações';
    document.getElementById('obraFavoritos').textContent = formatarNumero(mockObra.favoritos) + ' favoritos';
    document.getElementById('obraData').textContent = formatarData(mockObra.dataAdicao);
    
    // Detalhes
    document.getElementById('detalhesStatus').textContent = mockObra.status;
    document.getElementById('detalhesFormato').textContent = mockObra.formato;
    document.getElementById('detalhesData').textContent = formatarData(mockObra.dataAdicao);
    document.getElementById('detalhesAtualizacao').textContent = formatarData(mockObra.ultimaAtualizacao);
    document.getElementById('detalhesViews').textContent = formatarNumero(mockObra.views);
    document.getElementById('detalhesFavoritos').textContent = formatarNumero(mockObra.favoritos);
    document.getElementById('detalhesAvaliacao').textContent = mockObra.avaliacao.toFixed(1);
    
    // Gêneros e Tags
    carregarGeneros();
    carregarTags();
    
    // Carregar capítulos
    carregarCapitulos();
    
    // Carregar obras relacionadas
    carregarObrasRelacionadas();
    
    // Carregar comentários
    carregarComentarios();
}

function configurarTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover classes ativas
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            
            // Adicionar classe ativa na tab clicada
            tab.classList.add('active');
            
            // Mostrar conteúdo correspondente
            const paneId = tab.getAttribute('data-tab') + 'Tab';
            document.getElementById(paneId).classList.add('active');
        });
    });
}

function configurarBotoes() {
    // Botão de favoritar
    const favBtn = document.querySelector('.action-btn.favorite');
    favBtn.addEventListener('click', toggleFavorito);
    
    // Botão de compartilhar
    const shareBtn = document.querySelector('.action-btn.share');
    shareBtn.addEventListener('click', () => {
        document.getElementById('shareModal').style.display = 'flex';
    });
    
    // Botão de reportar
    const reportBtn = document.querySelector('.action-btn.report');
    reportBtn.addEventListener('click', () => {
        document.getElementById('reportModal').style.display = 'flex';
    });
    
    // Botões de carregar mais
    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.addEventListener('click', carregarMaisCapitulos);
}

function configurarModais() {
    // Fechar modais
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });
    
    // Fechar ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Copiar link de compartilhamento
    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
        const input = copyBtn.previousElementSibling;
        input.select();
        document.execCommand('copy');
        mostrarToast('Link copiado!');
    });
    
    // Configurar formulário de denúncia
    const reportForm = document.getElementById('reportForm');
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implementar lógica de envio
        document.getElementById('reportModal').style.display = 'none';
        mostrarToast('Denúncia enviada com sucesso!');
    });
}

function configurarPesquisa() {
    const searchInput = document.querySelector('.search-box input');
    let timeoutId;
    
    searchInput.addEventListener('input', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            const query = searchInput.value.toLowerCase();
            filtrarCapitulos(query);
        }, 300);
    });
}

function configurarOrdenacao() {
    const orderBtn = document.querySelector('.order-btn');
    let ascending = true;
    
    orderBtn.addEventListener('click', () => {
        ascending = !ascending;
        orderBtn.querySelector('i').style.transform = ascending ? 'rotate(0deg)' : 'rotate(180deg)';
        ordenarCapitulos(ascending);
    });
}

// Funções auxiliares
function formatarNumero(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}

function toggleFavorito() {
    const btn = document.querySelector('.action-btn.favorite');
    const isFavorito = btn.classList.toggle('active');
    
    if (isFavorito) {
        mockObra.favoritos++;
        mostrarToast('Adicionado aos favoritos!');
    } else {
        mockObra.favoritos--;
        mostrarToast('Removido dos favoritos!');
    }
    
    document.getElementById('obraFavoritos').textContent = formatarNumero(mockObra.favoritos) + ' favoritos';
}

function mostrarToast(mensagem) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 2000);
    }, 100);
}

// Funções de carregamento de dados
function carregarGeneros() {
    const generosContainer = document.getElementById('obraGeneros');
    generosContainer.innerHTML = mockObra.generos.map(genero => 
        `<span class="genre-tag">${genero}</span>`
    ).join('');
}

function carregarTags() {
    const tagsContainer = document.getElementById('detalhesTags');
    tagsContainer.innerHTML = mockObra.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
}

function carregarCapitulos() {
    const capitulosContainer = document.getElementById('capitulosList');
    // Implementar lógica de carregamento de capítulos
    for (let i = 1; i <= 10; i++) {
        capitulosContainer.innerHTML += `
            <div class="capitulo-item">
                <div class="capitulo-thumbnail">
                    <img src="images/thumbnails/ep${i}.jpg" alt="Episódio ${i}">
                    <span class="duracao">24:00</span>
                </div>
                <div class="capitulo-info">
                    <h3>Episódio ${i}</h3>
                    <p>Título do Episódio ${i}</p>
                    <div class="capitulo-metadata">
                        <span><i class="fas fa-eye"></i> ${formatarNumero(Math.floor(Math.random() * 50000))}</span>
                        <span><i class="fas fa-calendar"></i> ${formatarData(new Date(2024, 0, i))}</span>
                    </div>
                </div>
                <a href="player.html?id=1&ep=${i}" class="assistir-btn">
                    <i class="fas fa-play"></i> Assistir
                </a>
            </div>
        `;
    }
}

function carregarMaisCapitulos() {
    // Implementar lógica de paginação
    const capitulosContainer = document.getElementById('capitulosList');
    const currentCount = capitulosContainer.children.length;
    
    for (let i = currentCount + 1; i <= currentCount + 5; i++) {
        capitulosContainer.innerHTML += `
            <div class="capitulo-item">
                <div class="capitulo-thumbnail">
                    <img src="images/thumbnails/ep${i}.jpg" alt="Episódio ${i}">
                    <span class="duracao">24:00</span>
                </div>
                <div class="capitulo-info">
                    <h3>Episódio ${i}</h3>
                    <p>Título do Episódio ${i}</p>
                    <div class="capitulo-metadata">
                        <span><i class="fas fa-eye"></i> ${formatarNumero(Math.floor(Math.random() * 50000))}</span>
                        <span><i class="fas fa-calendar"></i> ${formatarData(new Date(2024, 0, i))}</span>
                    </div>
                </div>
                <a href="player.html?id=1&ep=${i}" class="assistir-btn">
                    <i class="fas fa-play"></i> Assistir
                </a>
            </div>
        `;
    }
}

function carregarObrasRelacionadas() {
    const relacionadosContainer = document.querySelector('#relacionadosTab .relacionados-grid');
    // Implementar lógica de carregamento de obras relacionadas
    for (let i = 1; i <= 6; i++) {
        relacionadosContainer.innerHTML += `
            <div class="obra-card">
                <img src="images/obras/relacionada${i}.jpg" alt="Obra Relacionada ${i}">
                <div class="obra-card-info">
                    <h3>Obra Relacionada ${i}</h3>
                    <div class="obra-card-metadata">
                        <span class="rating"><i class="fas fa-star"></i> ${(4 + Math.random()).toFixed(1)}</span>
                        <span class="views"><i class="fas fa-eye"></i> ${formatarNumero(Math.floor(Math.random() * 100000))}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

function carregarComentarios() {
    const comentariosContainer = document.querySelector('#comentariosTab .comentarios-list');
    // Implementar lógica de carregamento de comentários
    for (let i = 1; i <= 5; i++) {
        comentariosContainer.innerHTML += `
            <div class="comentario">
                <img src="images/avatars/user${i}.jpg" alt="Avatar" class="user-avatar">
                <div class="comentario-content">
                    <div class="comentario-header">
                        <h4>Usuário ${i}</h4>
                        <span class="comentario-data">${formatarData(new Date(2024, 1, i))}</span>
                    </div>
                    <p>Este é um comentário de exemplo ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="comentario-actions">
                        <button class="like-btn"><i class="far fa-heart"></i> ${Math.floor(Math.random() * 50)}</button>
                        <button class="reply-btn"><i class="far fa-comment"></i> Responder</button>
                    </div>
                </div>
            </div>
        `;
    }
}

function filtrarCapitulos(query) {
    const items = document.querySelectorAll('.capitulo-item');
    items.forEach(item => {
        const titulo = item.querySelector('h3').textContent.toLowerCase();
        const subtitulo = item.querySelector('p').textContent.toLowerCase();
        if (titulo.includes(query) || subtitulo.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function ordenarCapitulos(ascending) {
    const container = document.getElementById('capitulosList');
    const items = Array.from(container.children);
    
    items.sort((a, b) => {
        const numA = parseInt(a.querySelector('h3').textContent.match(/\d+/)[0]);
        const numB = parseInt(b.querySelector('h3').textContent.match(/\d+/)[0]);
        return ascending ? numA - numB : numB - numA;
    });
    
    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
}
