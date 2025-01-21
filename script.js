document.addEventListener("DOMContentLoaded", function() {
    // Load Projects
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');
                projectDiv.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a href="${project.link}" class="btn">View Project</a>
                `;
                projectList.appendChild(projectDiv);
            });
        });

    // Load Skills
    fetch('skills.json')
        .then(response => response.json())
        .then(data => {
            const skillList = document.getElementById('skill-list');
            data.forEach(skill => {
                const skillDiv = document.createElement('div');
                skillDiv.classList.add('skill');
                skillDiv.innerHTML = `
                    <img src="${skill.image}" alt="${skill.name}">
                    <h4>${skill.name}</h4>
                `;
                skillList.appendChild(skillDiv);
            });
        });
});
