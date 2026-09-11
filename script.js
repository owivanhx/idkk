document.addEventListener("DOMContentLoaded", () => {
    // Caminho exato das imagens na pasta banner
    const imagensCole = [
        "banner/cole1.jpg",
        "banner/cole2.jpg",
        "banner/cole3.jpg",
        "banner/cole4.jpg",
        "banner/cole5.jpg"
    ];

    const imagem = document.getElementById("cole-image");
    
    // Cancela a execução se a tag não for encontrada
    if (!imagem) return;

    let imagemAtual = 0;
    const tempoTroca = 3000; // Troca a cada 3 segundos

    setInterval(() => {
        // Esconde a imagem (fade out)
        imagem.style.opacity = "0";

        setTimeout(() => {
            // Alterna o índice da imagem
            imagemAtual = (imagemAtual + 1) % imagensCole.length;
            imagem.src = imagensCole[imagemAtual];

            // Exibe a imagem (fade in)
            imagem.style.opacity = "1";
        }, 600); // Aguarda o fim da transição CSS
    }, tempoTroca);
});
