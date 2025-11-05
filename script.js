const botaoAleatorio = document.getElementById('btn-random');
const botaoAutomatico = document.getElementById('btn-auto')
const imagemGato = document.getElementById('cat-image')

async function buscarImagemGato() {
    imagemGato.src = ''
    imagemGato.alr = 'carregando...'
    try{
    const resposta = await fetch('https://api.thecatapi.com/v1/images/search');

    const dados = await resposta.json();

    imagemGato.src = dados[0].url;
    imagemGato.alt = "Imagem gato"
    } catch(error){
        console.log('ocorreu um erro ao chamar a api, o erro e esse aqui:', erro);
    }
}

botaoAleatorio.addEventListener('click', buscarImagemGato);

function buscarImagemGatoAutomatica() {
  setInterval(buscarImagemGato, 5000);
  botaoAutomatico.textContent = 'Gerando gatinhos automático';
}

botaoAleatorio.addEventListener('click', buscarImagemGato);