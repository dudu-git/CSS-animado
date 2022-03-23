const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event =>{
   event.preventDefault();
   const campos = [...document.querySelectorAll(".input-block input")]
   campos.forEach(campo => {
        if(campo.value === ""){     
          form.classList.add("validacao");
        }else{
          form.classList.add("formularioSumir");
        }     
   });
    
   const formNaoValidado = document.querySelector(".validacao")

   if (formNaoValidado){
      formNaoValidado.addEventListener("animationend",(event)=>{
      if (event.animationName == "naoValido" ){
        formNaoValidado.classList.remove('validacao')
      } 
    });

   }else{
    form.classList.add("formularioSumir");
  }

   


});

form.addEventListener("animationstart",(event)=>{
  if (event.animationName == "paraBaixo" ) {
    document.querySelector("body").style.overflow = "hidden"
  };
});

form.addEventListener("animationend",(event)=>{
  if (event.animationName == "paraBaixo" ){
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none"
  } 
});

// background quadrados
const ulQuadrados = document.querySelector("ul.quadrados")

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");

  const randomizar = (min,max) => Math.random() * (max - min) + min
  

  const tamanho = Math.floor(randomizar(10,120));
  
  const posicao = randomizar(1,90)
  const delay = randomizar(0.1,5)
  const duracao = randomizar(5,30)

  li.style.width = `${tamanho}px`;
  li.style.height = `${tamanho}px`;
  
  li.style.bottom = `-${tamanho}px`;
    
  li.style.left = `${posicao}%` ;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duracao}s`;
  
  ulQuadrados.appendChild(li); 

  
}


