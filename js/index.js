const skillsIcons = document.querySelectorAll(".skills-icons");
const skillsText = document.querySelector("#skills-text");
const aboutMeBtn = document.querySelectorAll(".about-me-btn");
const aboutMeText = document.querySelector("#about-me-text");
const scrollTopBtn = document.querySelector("#scroll-top-btn");

const hamBtn = document.querySelector("#ham-btn");
const hamNav = document.querySelector("#ham-nav");
let counter = 0;

hamBtn.addEventListener("click", () => {
    counter++;
    counter % 2 === 1 ? hamNav.style.display = "block" : hamNav.style.display = "none"
});

window.onscroll = () => {
    document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? scrollTopBtn.style.visibility = "visible" : scrollTopBtn.style.visibility = "hidden"
}

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

skillsIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if(icon.id === "html"){
            skillsText.innerHTML = "<h1 id='skills-name'>HTML</h1><p id='skills-description'>É uma linguagem de marcação de hiper-texto, Facilmente de aprender, o HTML se domina em poucos dias. Apesar de muitos não conhecerem todas as tags existentes.</p>"
        } else if(icon.id === "css") {
            skillsText.innerHTML = "<h1 id='skills-name'>CSS</h1><p id='skills-description'>Acompanhado do HTML, o CSS é o que vai estilizar todo o conteúdo. Eu particularmente não tenho domínio total pela limitação artística, mas sei usar a linguagem.</p>"
        } else if(icon.id === "javascript"){
            skillsText.innerHTML = "<h1 id='skills-name'>JavaScript</h1><p id='skills-description'>O JavaScript é o que dá a funcionalidade para o site. Sou suficientemente capaz de programar toda a interativa deste portfólio sabendo o básico, apesar de não ter uma das melhores otimizações.</p>"
        } else if(icon.id === "php"){
            skillsText.innerHTML = "<h1 id='skills-name'>PHP</h1><p id='skills-description'>Tive pouco contato com a linguagem pois usei para alguns testes para conectar banco de dados. Porém, sei de sua importância.</p>"
        } else if(icon.id === "mysql"){
            skillsText.innerHTML = "<h1 id='skills-name'>MySQL</h1><p id='skills-description'>Foi uma linguagem aprendida como matéria da grade curricular, logo tenho pouca prática. Mas se for o caso de um dia mexer com banco de dados, terei noção do que estou fazendo.</p>"
        } else if(icon.id === "java"){
            skillsText.innerHTML = "<h1 id='skills-name'>Java</h1><p id='skills-description'>Tem uns que odeiam e outros que amam. Particularmente, gosto de Java mesmo com seus defeitos. Não confundir com JavaScript pois não são a mesma coisa.</p>"
        } else if(icon.id === "csharp"){
            skillsText.innerHTML = "<h1 id='skills-name'>C#</h1><p id='skills-description'>Parecido com Java, CSharp (lê-se assim) está fora da matéria técnica pois preciso investir nessa linguagem para poder programar jogos em Unity. Tive pouco contato com a linguagem.</p>"
        } else if(icon.id === "git"){
            skillsText.innerHTML = "<h1 id='skills-name'>Git</h1><p id='skills-description'>Git é uma ferramenta de versionamento de código. Junto do Github, o Git mostra-se uma ferramenta extremamente boa para todos da área de TI.</p>"
        } else if(icon.id === "github"){
            skillsText.innerHTML = "<h1 id='skills-name'>Github</h1><p id='skills-description'>Eu apenas uso o site do Github para colocar todos os meus projetos de relevância. E aproveitando, dá uma passado no meu perfil.</p>"
        } else if(icon.id === "vscode"){
            skillsText.innerHTML = "<h1 id='skills-name'>Visual Studio Code</h1><p id='skills-description'>Eu praticamente só uso o VS Code para qualquer coisa, apesar de ter dificuldade para rodar alguns programas como java, que precisam de compilador.</p>";
        } else if (icon.id === "react"){
            skillsText.innerHTML = "<h1 id='skills-name'>React.Js</h1><p id='skills-description'>Avançando um pouco mais no Desenvolvimento Front End, React é a biblioteca mais popular usada para criar sites profissionais. Tenho só conhecimento básico. Ainda sem projeto usando React.</p>"
        } else if (icon.id === "nodejs"){
            skillsText.innerHTML = "<h1 id='skills-name'>Node.Js</h1><p id='skills-description'>Node.Js é uma tecnologia em alta no Desenvolvimento Web por meio da criação de aplicações e interfaces através de API's que trabalham no Back End com a linguagem JavaScript.</p>"
        }
        else if (icon.id === "unity"){
            skillsText.innerHTML = "<h1 id='skills-name'>Unity</h1><p id='skills-description'>Provavelmente vai ser a ferramenta que mais vou estar usando daqui a algum tempo, Unity é meio complicado no começo mas com o tempo você acostuma.</p>"
        }
    });
});

aboutMeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.id === "info"){
            aboutMeText.innerHTML =
            "<h3>Informações</h3><p>Meu nome é Rafael Yu, apenas isso. Tenho 17 anos. Sou estudante de Informática do IFRJ Campus Arraial do Cabo. Gosto de muitas coisas e me falta tempo para aproveitar as milhões de coisas que fui passar a gostar. Tenho gosto por minhas criações e quero criar mais conteúdo, apesar de faltar um tom artístico como você pode ver no design deste portfolio.</p>";
        } else if(btn.id === "exp"){
            aboutMeText.innerHTML = "<h3>Experiência</h3><p>Não tenho muitas experiência até o momento atual, mas fiz alguns projetos que podem ser conferidos no meu <a href='https://github.com/YuuY314' target='_blank'>Github</a>. Muitos destes projetos são voltados ao Desenvolvimento Front End, mas não pretendo seguir nessa área apesar de gostar. Ainda tenho muito o que aprender.</p>";
        } else {
            aboutMeText.innerHTML = "<h3>Objetivos</h3><p>Eu almejo ser um Desenvolvedor de Jogos, mas para isso preciso reaver minhas capacidades. Uma vez que pretendo fazer os meus próprios jogos, estarei fazendo todo o trabalho ou requisitando a ajuda de terceiros. Apesar desses obstáculos, eu sempre sonhei transformar as minhas histórias em jogos e conseguir passar o controle para quem for jogar. Por enquanto, esse é o meu maior desejo.</p>";
        }
    });
});