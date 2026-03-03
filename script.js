const output = document.getElementById("output");
const music = document.getElementById("music");
const gallery = document.getElementById("gallery");
const inputLine = document.getElementById("input-line");
const terminal = document.getElementById("terminal");
const finalScreen = document.getElementById("final-screen");
const finalMessage = document.getElementById("final-message");


function createLine() {
    const line = document.createElement("div");
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    return line;
}


function typeLine(text, speed = 40) {
    return new Promise((resolve) => {
        const line = createLine();
        let index = 0;

        function type() {
            if (index < text.length) {
                line.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }

        type();
    });
}


function calculateDaysTogether() {
    const startDate = new Date("2025-04-01");
    const today = new Date();
    const diffTime = today - startDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}


function showMemories() {

    inputLine.style.display = "none";
    terminal.classList.add("memory-mode");
    gallery.classList.remove("hidden");

    const photos = [
        "assets/foto1.jpeg",
        "assets/foto2.jpeg",
        "assets/foto3.jpeg",
        "assets/foto4.jpeg",
        "assets/foto5.jpeg",
        "assets/foto6.jpeg",
        "assets/foto7.jpeg",
        "assets/foto8.jpeg"
    ];

    photos.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);

        setTimeout(() => {
            img.classList.add("show");
        }, index * 700);
    });

    
    setTimeout(() => {
        showFinalMessage();
    }, photos.length * 700 + 2000);
}


async function showFinalMessage() {

    terminal.classList.add("no-scroll");
gallery.style.display = "none";

    finalScreen.classList.add("show");

    try {
        await music.play();
    } catch (e) {
        console.log("Autoplay bloqueado pelo navegador.");
    }

    const message = `
Erro irreversível detectado.

Sistema comprometido desde 01/04/2025.

Responsável:
Kethellen yasmin


Desde o primeiro olhar,
algo mudou em mim.

Tudo o que vivemos até aqui —
a nossa primeira viagem,
cada momento lado a lado,
e o dia em que a SKY entrou na nossa vida —
me mostrou que isso não é apenas um ano.

É o começo de tudo.

Eu quero continuar crescendo ao seu lado.
Eu na minha jornada na TI.
Você realizando seus sonhos na área da estética.

Quero a nossa casa.
Nossos animais.
E, se Deus permitir, nosso filho.

Porque desde 01/04/2025,
meu coração tem dona.

E eu escolho você,
todos os dias.

Status atual:
Amor permanente.

Próximo protocolo:
Construir um futuro ao seu lado.

Fim da execução.
    `;

    finalMessage.textContent = message;
}


async function startSystem() {

    await typeLine("Iniciando sistema...");
    await typeLine("Carregando firewall emocional...");
    await typeLine("Escaneando alvo...");
    await typeLine("Alvo identificado: Kethellen");
    await typeLine("Ignorando defesas...");
    await typeLine("Acessando diretório do coração...");
    await typeLine("Acesso concedido.");
    await typeLine("");

    await typeLine("Analisando dados do relacionamento...");
    await typeLine("Primeiro contato visual detectado...");
    await typeLine("Nível de dependência emocional: 100%");
    await typeLine("Evento registrado: Primeira viagem juntos.");
    await typeLine("Nova entidade adicionada ao sistema: SKY.");
    await typeLine("");

    const days = calculateDaysTogether();
    await typeLine(`Dias juntos: ${days}`);
    await typeLine("Intensidade do amor: NÍVEL CRÍTICO.");
    await typeLine("");

    await typeLine("Sistema estável.");
    await typeLine("Preparando próxima fase...");
    await typeLine("Erro crítico detectado...");
    await typeLine("Coração fora de controle.");
    await typeLine("");

    await typeLine("Upload de memórias iniciado...");
    await typeLine("Carregando registros fotográficos...");
    await typeLine("");

    await new Promise(resolve => setTimeout(resolve, 1000));

    showMemories();
}

startSystem();