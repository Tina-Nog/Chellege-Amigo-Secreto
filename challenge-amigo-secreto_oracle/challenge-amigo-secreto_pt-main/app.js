//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.



   
// Array para armazenar os amigos //
let amigos = [];

// Função para adicionar amigo à lista //
function adicionarAmigo() {
    // Obtém o valor do campo de entrada //*
    const nome = document.getElementById("amigo").value.trim();

    // Verifica se o campo de entrada está vazio //
    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    // Adiciona o nome ao array de amigos //
    amigos.push(nome);

    // Limpa o campo de entrada //
    document.getElementById("amigo").value = "";

    // Atualiza a lista exibida de amigos
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface //
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de adicionar novos itens //
    lista.innerHTML = "";

    // Cria um item de lista (<li>) para cada amigo e adiciona à lista //
    amigos.forEach(function(amigo) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente //
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    // Gera um índice aleatório para o sorteio //
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o amigo sorteado na tela //
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo Sorteado: ${amigoSorteado} 🎉</li>`;

    // Adicionar confetes //
    confetti({
        particleCount: 100,  
        spread: 90,          
        origin: { y: 0.6 },  
        colors: ['#ff6347', '#ffb6c1', '#ffdf00', '#f0e68c', '#32cd32'], 
    });

    
}
