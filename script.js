document.addEventListener("DOMContentLoaded", () => {
    // Lista com o caminho de cada imagem
    const imagensCole = [
        "banner/cole1.jpg",
        "banner/cole2.jpg",
        "banner/cole3.jpg",
        "banner/cole4.jpg",
        "banner/cole5.jpg"
    ];

    const imagem = document.getElementById("cole-image");
    
    // Verifica se a imagem existe na página antes de executar
    if (!imagem) return;

    let imagemAtual = 0;
    const tempoTroca = 3000; // Tempo em milissegundos (3 segundos)

    setInterval(() => {
        // Inicia o efeito de esmaecimento (fade out)
        imagem.style.opacity = "0";

        setTimeout(() => {
            // Avança para a próxima imagem da lista
            imagemAtual = (imagemAtual + 1) % imagensCole.length;
            imagem.src = imagensCole[imagemAtual];

            // Reaparece com a nova imagem (fade in)
            imagem.style.opacity = "1";
        }, 600); // 600ms bate com o tempo de transition do CSS
    }, tempoTroca);
});
