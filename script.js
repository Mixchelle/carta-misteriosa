function verificarConteudoCarta() {
  const inputCarta = document.getElementById('carta-texto');
  const mensagem = document.getElementById('carta-gerada');

  if (inputCarta.value.trim() === '') {
    mensagem.textContent = 'Por favor, digite o conteúdo da carta.';
  } else {
    const palavras = inputCarta.value.split(' ');
    mensagem.innerHTML = palavras
      .map((palavra) => `<span>${palavra}</span>`)
      .join(' ');
  }
}

function getRandomClass(classes) {
  const randomIndex = Math.floor(Math.random() * classes.length);
  return classes[randomIndex];
}

function atribuirClassesAleatorias() {
  const palavras = document.querySelectorAll('#carta-gerada span');

  const estilos = ['newspaper', 'magazine1', 'magazine2',
    'harrypotter', 'naruto', 'starwars', 'marvel', 'pokemon'];
  const tamanhos = ['medium', 'big', 'reallybig'];
  const rotacoes = ['rotateleft', 'rotateright'];
  const inclinacoes = ['skewleft', 'skewright'];

  palavras.forEach((word) => {
    const palavra = word;
    palavra.className = '';
    palavra.classList.add(
      getRandomClass(estilos),
      getRandomClass(tamanhos),
      getRandomClass(rotacoes),
      getRandomClass(inclinacoes),
    );
  });
}

document.getElementById('criar-carta').addEventListener('click', () => {
  verificarConteudoCarta();
  atribuirClassesAleatorias();
});
function setSpecificBackground() {
  const imagePath = './images/images.png';
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5),
  rgba(0, 0, 0, 0.5)), url(${imagePath})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
}

setSpecificBackground();

verificarConteudoCarta();
atribuirClassesAleatorias();
