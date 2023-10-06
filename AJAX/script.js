// var pagina = 1; // número da página a ser carregada
var carregando = false; // indica se uma requisição Ajax está em andamento

// função para carregar mais imagens
function carregarImagens() {
  if (carregando) {
    return;
  }
  carregando = true;

  var ajax = new XMLHttpRequest();
  ajax.open("GET", "images.json", true);
  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
       var images = JSON.parse(ajax.responseText);

        
        var divImagens = document.getElementById("imagens");
        for (const image of images.animals) {
            var img = document.createElement("img");
            img.src = image.imagemUrl;
            img.alt = image.name;
            divImagens.appendChild(img);
        }
        carregando = false;
        //pagina++;
    }
  };
  ajax.send();
}

// detecta quando o usuário chegou no final da página e carrega mais imagens
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    carregarImagens();
  }
};