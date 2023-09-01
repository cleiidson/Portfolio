//function escrevendoLetra(){const a=document.querySelector(".digitando");(function(a){const b=a.innerHTML.split("");a.innerHTML="",b.forEach((b,c)=>{setTimeout(()=>{a.innerHTML+=b},75*c)})})(a)}escrevendoLetra();function MenuMobol(){const a=document.querySelector(".fa-bars"),b=document.querySelector("header .navegacao-primaria");a.addEventListener("click",()=>{a.classList.toggle("fa-x"),b.classList.toggle("ativado")})}function sobreMim(){document.addEventListener("DOMContentLoaded",function(){function a(a,b){a.forEach(a=>{a.classList.remove("ativo")}),a[b].classList.add("ativo")}const b=document.querySelectorAll(".experience_content ul li"),c=document.querySelectorAll(".experience_content div"),d=document.querySelectorAll(".education_content ul li"),e=document.querySelectorAll(".education_content div");c[0].classList.add("ativo"),b[0].classList.add("ativo"),e[0].classList.add("ativo"),d[0].classList.add("ativo"),b.forEach((d,e)=>{d.addEventListener("click",()=>{a(c,e),b.forEach(a=>{a.classList.remove("ativo")}),d.classList.add("ativo")})}),d.forEach((b,c)=>{b.addEventListener("click",()=>{a(e,c),d.forEach(a=>{a.classList.remove("ativo")}),b.classList.add("ativo")})})})}sobreMim();

function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra();


function MenuMobile() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}

MenuMobile();

function sobreMim() {
    document.addEventListener('DOMContentLoaded', function () {
        const liExperiencia = document.querySelectorAll('.experience_content ul li');
        const divExperiencia = document.querySelectorAll('.experience_content div');
        const liEducation = document.querySelectorAll('.education_content ul li');
        const divEducation = document.querySelectorAll('.education_content div');

        // Define o primeiro item como ativo por padrão
        divExperiencia[0].classList.add('ativo');
        liExperiencia[0].classList.add('ativo');

        divEducation[0].classList.add('ativo');
        liEducation[0].classList.add('ativo');

        function slideShow(collection, index) {
            collection.forEach((element) => {
                element.classList.remove('ativo');
            });
            collection[index].classList.add('ativo');
        }

        liExperiencia.forEach((li, index) => {
            li.addEventListener('click', () => {
                slideShow(divExperiencia, index);
                liExperiencia.forEach((li) => {
                    li.classList.remove('ativo');
                });
                li.classList.add('ativo');
            });
        });

        liEducation.forEach((li, index) => {
            li.addEventListener('click', () => {
                slideShow(divEducation, index);
                liEducation.forEach((li) => {
                    li.classList.remove('ativo');
                });
                li.classList.add('ativo');
            });
        });
    });
}

sobreMim();


