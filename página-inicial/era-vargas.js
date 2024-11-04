const governo_provisorio = document.getElementById('img1');
const governo_constitucionalista = document.getElementById('img2');
const estado_novo = document.getElementById('img3');

governo_provisorio.addEventListener('click', () => {
    window.location.href = '../página-governo-provisório/governo_provisório.html';
});

governo_constitucionalista.addEventListener('click', () => {
    window.location.href = '../página-governo-constitucionalista/governo_constitucionalista.html';
});

estado_novo.addEventListener('click', () => {
    window.location.href = '../página-estado-novo/estado_novo.html';
});