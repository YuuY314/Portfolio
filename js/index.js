const skillsIcons = document.querySelectorAll(".skills-icons");
const skillsName = document.querySelector("#skills-name");
const skillsDescription = document.querySelector("#skills-description");

skillsIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if(icon.id === "html"){
            skillsName.textContent = "HTML";
            skillsDescription.textContent = "a";
        } else if(icon.id === "css") {
            skillsName.textContent = "CSS";
            skillsDescription.textContent = "a";
        } else if(icon.id === "javascript"){
            skillsName.textContent = "JavaScript";
            skillsDescription.textContent = "a";
        } else if(icon.id === "php"){
            skillsName.textContent = "PHP";
            skillsDescription.textContent = "a";
        } else if(icon.id === "mysql"){
            skillsName.textContent = "MySQL";
            skillsDescription.textContent = "a";
        } else if(icon.id === "java"){
            skillsName.textContent = "Java";
            skillsDescription.textContent = "a";
        } else if(icon.id === "csharp"){
            skillsName.textContent = "C#";
            skillsDescription.textContent = "a";
        } else if(icon.id === "git"){
            skillsName.textContent = "Git";
            skillsDescription.textContent = "a";
        } else if(icon.id === "github"){
            skillsName.textContent = "Github";
            skillsDescription.textContent = "a";
        } else if(icon.id === "vscode"){
            skillsName.textContent = "Visual Studio Code";
            skillsDescription.textContent = "a";
        } else if (icon.id === "react"){
            skillsName.textContent = "React";
            skillsDescription.textContent = "a";
        } else if (icon.id === "unity"){
            skillsName.textContent = "Unity";
            skillsDescription.textContent = "a";
        }
    });
});