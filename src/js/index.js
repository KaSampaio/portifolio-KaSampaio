/*  
    Objetivo 1 - Quando o usuário cliclar no botão de mostrar mais, deve abrir  os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clilcar em cima dele

        Passo 2 - Identificar o clique no botão

        Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais

        Passo 1 - pegar o botão e esconder ele.

*/
const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");
const rolagemProjetos = document.querySelector('.link-projetos');

rolagemProjetos.addEventListener("click" , () =>{
  rolagem();
})

botaoMostrarProjetos.addEventListener("click", () => {
  mostrarMaisProjetos();
  esconderBotao();
});


function rolagem() {
  document.getElementById('meus-projetos').scrollIntoView({ behavior: 'smooth' });
}

function esconderBotao() {
  botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("ativo");
  });
}
