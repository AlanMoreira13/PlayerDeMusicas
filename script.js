let musicas = [
    {
        titulo: "Rap da Akatsuki",
        artista: "7Minutoz",
        src: "./assets/musicas/Rap da Akatsuki.mp3",
        img: "./assets/imagens/akatsuki.jpg",
      },{
      titulo: "Rap do Jiraya",
      artista: "7Minutoz",
      src: "./assets/musicas/Rap do Jiraiya.mp3",
      img: "./assets/imagens/jiraya.jpeg",
     },{
    titulo: "Rap do Deidara",
    artista: "7Minutoz",
    src: "./assets/musicas/Rap do Deidara.mp3",
    img: "./assets/imagens/deidara.jpg",
  },{
    titulo: "Rap do Itachi",
    artista: "7Minutoz",
    src: "./assets/musicas/Rap do Itachi.mp3",
    img: "./assets/imagens/itachi.png",
  },{
    titulo: "Rap do Maito Gai",
    artista: "7Minutoz",
    src: "assets/musicas/Rap do maito Gai.mp3",
    img: "./assets/imagens/guy.jpg",
  },{
    titulo: "Rap do Rock Lee",
    artista: "7Minutoz",
    src: "./assets/musicas/Rap do Rock Lee.mp3",
    img: "./assets/imagens/rock-lee.jpg",
  },{
    titulo: "Rap do Kakashi",
    artista: "7Minutoz",
    src: "./assets/musicas/Rap do Kakashi.mp3",
    img: "./assets/imagens/kakashi.jpg",
  },{
    titulo: "Rap dos Hokages",
    artista: "7Minutoz",
    src: "./assets/musicas/Rap dos Hokages.mp3",
    img: "./assets/imagens/hokages.jpg",
  },
];


let musica = document.querySelector("audio");
let indexmusica = 0;

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
renderizarMusica(indexmusica);

// eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexmusica--;
  if (indexmusica < 0) {
    indexmusica = 8;
  }
  renderizarMusica(indexmusica);
});

document.querySelector(".proximo").addEventListener("click", () => {
    indexmusica++;
    if (indexmusica > 8) {
        indexmusica = 0;
    }
    renderizarMusica(indexmusica);
});

// funções
function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration));
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }
  return campoMinutos+ ":" +campoSegundos;
}
