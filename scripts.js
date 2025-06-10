/* código para os botoes funcionarem */

document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".menu button");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const alvoId = botao.getAttribute("destino");
      const alvo = document.getElementById(alvoId);
      if (alvo) {
      
        const posicao = alvo.offsetTop;

        
        window.scrollTo({
          top: posicao - 100,
          behavior: "smooth"
        });
      }
    });
  });
});










