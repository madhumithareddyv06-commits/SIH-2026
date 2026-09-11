const API_URL = "http://127.0.0.1:5000";


// Same skills used by the Skill Gap module
function getCurrentSkills() {

    const selectedSkills =
        JSON.parse(
            localStorage.getItem("selectedSkills") || "[]"
        );

    const skills = {};

    selectedSkills.forEach(skill => {
        skills[skill] = 70;
    });

    return skills;
}


// Load student's profile
function loadProfile() {

    const role = localStorage.getItem("dreamRole") || "AI Engineer";
    const skillMatch = localStorage.getItem("skillMatch");

    document.getElementById("targetRole").innerText = role;

    if (skillMatch) {
        document.getElementById("skillMatch").innerText =
            skillMatch + "%";
    } else {
        document.getElementById("skillMatch").innerText =
            "Not analyzed";
    }
}


// Generate personalized projects
async function generateProjects() {

    const role =
        localStorage.getItem("dreamRole") || "AI Engineer";

    const projectList =
        document.getElementById("projectList");

    projectList.innerHTML = `
        <div class="loading-message">
            🤖 AI Project Mentor is analyzing your skills...
        </div>
    `;


    try {

        const response = await fetch(
            API_URL + "/project-mentor",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                role: role,
                skills: getCurrentSkills()
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {
            throw new Error(
                data.error || "Unable to generate projects"
            );
        }


        displayProjects(data);


    } catch (error) {

        console.error("Project Mentor Error:", error);

        projectList.innerHTML = `
            <div class="error-message">
                ❌ Unable to connect to AI Project Mentor.
                <br><br>
                Please make sure the Python backend is running.
            </div>
        `;
    }
}



// Display recommended projects
function displayProjects(data) {

    const projectList =
        document.getElementById("projectList");

    projectList.innerHTML = "";


    // Show skill gaps
    if (data.skill_gaps && data.skill_gaps.length > 0) {

        const gapBox = document.createElement("div");

        gapBox.className = "mentor-gap-box";

        gapBox.innerHTML = `
            <h3>🎯 Skills Your Projects Should Improve</h3>

            <div class="gap-list">
                ${data.skill_gaps.map(skill =>
                    `<span>${skill}</span>`
                ).join("")}
            </div>
        `;

        projectList.appendChild(gapBox);
    }


    // Create project cards
    data.recommendations.forEach((project, index) => {

        const card = document.createElement("div");

        card.className =
            "mentor-project-card";


        card.innerHTML = `

            <div class="project-number">
                #${index + 1}
            </div>


            <div class="project-card-header">

                <div>
                    <h2>${project.title}</h2>

                    <p>
                        ${project.description}
                    </p>
                </div>

                <div class="relevance-score">
                    ${project.relevance_score}% Match
                </div>

            </div>


            <div class="project-meta">

                <span>
                    🧠 Difficulty:
                    <strong>${project.difficulty}</strong>
                </span>

                <span>
                    ⏱ Duration:
                    <strong>${project.duration}</strong>
                </span>

            </div>


            <div class="project-section">

                <h3>🛠 Technologies</h3>

                <div class="technology-list">

                    ${project.technologies.map(tech =>
                        `<span>${tech}</span>`
                    ).join("")}

                </div>

            </div>


            <div class="project-section">

                <h3>📚 Skills Developed</h3>

                <div class="technology-list">

                    ${project.skills.map(skill =>
                        `<span>${skill}</span>`
                    ).join("")}

                </div>

            </div>


            <div class="project-section">

                <h3>🧩 Project Modules</h3>

                <ul>

                    ${project.modules.map(module =>
                        `<li>✓ ${module}</li>`
                    ).join("")}

                </ul>

            </div>


            <div class="project-section">

                <h3>🚀 Milestones</h3>

                <ul>

                    ${project.milestones.map(milestone =>
                        `<li>${milestone}</li>`
                    ).join("")}

                </ul>

            </div>


            <div class="mentor-advice">

                <h3>🤖 AI Mentor Advice</h3>

                <p>
                    This project is recommended because it
                    matches your <strong>${data.role}</strong>
                    career goal and helps you improve the
                    skills required for the role.
                </p>

            </div>

        `;


        projectList.appendChild(card);

    });
}


// Run when page loads
loadProfile();