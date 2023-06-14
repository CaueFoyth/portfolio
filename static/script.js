
// Abrir e fechar o menu lateral para mobile

//Pegando a classe do menu para mobile
const menuMobile = document.querySelector('.menu-mobile');

//Pegando a classe do body
const body = document.querySelector('body');

//Adicionando um evendo para o botão
menuMobile.addEventListener("click", () => {

    //Verificando se bi-list está nas classes
    menuMobile.classList.contains("bi-list")

    //Se tiver irá trocar o icone para o x
    ? menuMobile.classList.replace("bi-list", "bi-x")

    //Se não tiver irá trocar o icone para a lista
    : menuMobile.classList.replace("bi-x", "bi-list");
    //Adicionando a animação no body quando ativar o botão
    body.classList.toggle("menu-nav-active");
})

//Fechar o menu quando clicar em algum item e mudar o icone para list

//Pegando todos nav-item(itens da nav bar do menu lateral)
const navItem = document.querySelectorAll('.nav-item')

//Verificar os itens
navItem.forEach(item => {
    item.addEventListener("click", ()=>{

        //Se o botão for apertado ele muda o icone e tira o active do menu lateral
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

//Animando todos os atributos que contem o data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.add('animate')
        } else{
            element.classList.remove('animate')
        }
    })
}

window.addEventListener("scroll", ()=>{
    animeScroll();
})