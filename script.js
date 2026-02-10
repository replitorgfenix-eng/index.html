const dragoes = [
    {
        nome: "Banguela (Fúria da Noite)",
      classe: "Class: Mystery",
        descricao: "Um dragão extremamente raro, inteligente, silencioso e rápido. Possui ataque de plasma e forte vínculo com seu cavaleiro.",
        imagem: "https://detailed-tan-4zvqwah9pj.edgeone.app/1310b490f2b52b032410084012bcacd7.jpg"
    },
    {
        nome: "Pesadelo Monstruoso",
      classe: "Class: Fire",
        descricao: "Dragão agressivo e poderoso que cospe fogo e pode incendiar o próprio corpo em chamas.",
        imagem: "https://indirect-lavender-lk7a4flh3f.edgeone.app/cc8f8321b4839a0613d08f79f516edc1.jpg"
    },
    {
        nome: "Nadder Mortal",
        classe: "Class: Sharp",
        descricao: "Dragão veloz com espinhos retráteis e mira extremamente precisa. Muito ágil em combate.",
        imagem: "https://gradual-sapphire-szwwvgzd7p.edgeone.app/61769442b0ad447b82be1d3bdd333383.jpg"
    },
    {
        nome: "Zíper Arrepiante",
       classe: "Class: Mystery",
        descricao: "Dragão de duas cabeças, cada uma com personalidade própria. Cospe gás e fogo separadamente.",
        imagem: "https://other-gray-sdyelkfnai.edgeone.app/deb9bf8fec777e1b1c7cd9d2df01ea46.jpg"
    },

    /* DRAGÕES ADICIONAIS */
    {
        nome: "Death Red",
        classe: "Class: Alfa",
        descricao: "Dragão de escamas vermelhas como chamas, rápido e feroz, com sopro de fogo devastador e leal a quem conquista sua confiança.",
        imagem: "https://philosophical-orange-kapazelvgx.edgeone.app/eb69ae7a2611ad16e1443042014b9dbb%20(1).jpg"
    },
    {
        nome: "Gronckle",
        classe: "Class: Rock",
        descricao: "Um dragão compacto e robusto, com corpo redondo e asas pequenas, mas incrivelmente forte. Especialista em lançar pedras de fogo e resistente a ataques, combina força e lealdade, sendo um parceiro confiável em qualquer batalha.",
        imagem: "https://unnecessary-gold-eqesleoyly.edgeone.app/55e87c163748049feff80bd6f2c8aba4.jpg"
    },
    {
        nome: "Skrill",
        classe: "Class: Mystery",
        descricao: "Dragão ágil e feroz, coberto de escamas negras, capaz de absorver e disparar relâmpagos. Extremamente rápido e imprevisível, é um caçador formidável que prefere atacar com eletricidade antes de se aproximar.",
        imagem: "https://marine-crimson-dosjqf2ys8.edgeone.app/150034e0119c24c1da1a7241974bde83.jpg"
    }
];

const lista = document.getElementById("dragon-list");

function renderizar(listaDragoes) {
    lista.innerHTML = "";

    listaDragoes.forEach(d => {
        const card = document.createElement("div");
        card.className = "dragon";

        card.innerHTML = `
            <img src="${d.imagem}" alt="${d.nome}">
            <div class="content">
                <h3>${d.nome}</h3>
<span class="classe-dragon">${d.classe}</span>
<p>${d.descricao}</p>
            </div>
        `;

        lista.appendChild(card);
    });
}

function filtrarDragoes() {
    const texto = document.getElementById("search").value.toLowerCase();

    const filtrados = dragoes.filter(d =>
        d.nome.toLowerCase().includes(texto)
    );

    renderizar(filtrados);
}

/* renderiza tudo ao abrir o site */
renderizar(dragoes);


