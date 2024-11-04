const imagem = document.getElementById('imagem-de-fundo');

window.onload = () => {
    setTimeout(() => {
        imagem.style.opacity = '1'; // Aumenta a opacidade para 1 quando a página carrega
    }, 100); // atrasa 100ms para garantir que a imagem seja visível
};
