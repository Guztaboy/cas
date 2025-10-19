document.querySelector('#confirmar_presenca').addEventListener('click',function(){
 let nome = document.querySelector('#nome').value;
 let fone = document.querySelector('#fone').value;
 let mensagem = document.querySelector('#mensagem').value;
 
let url = ("https://api.whatsapp.com/send?phone=5511963482368&text= Estou confirmando minha presença no Casamento. Dia 06/12/2025 às 09:30. %0A Meu nome: " + 
			nome + " %0A Meu telefone pra contato é: "+ fone +" %0A Meu recado Especial:  %0A" + mensagem );
window.open(url);

});