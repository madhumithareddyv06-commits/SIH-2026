const API_URL = "http://127.0.0.1:5000";

async function analyzeSkillGap() {

    // Get the role selected during Profile Setup
    const role = localStorage.getItem("dreamRole") || "AI Engineer";

    // Temporary skill data for the prototype
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
    try {

        const response = await fetch(API_URL + "/skill-gap", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                role: role,
                skills: getCurrentSkills()
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to analyze skills");
        }

        displayResults(data);

    } catch (error) {

        console.error("Error:", error);

        document.getElementById("targetRole").innerText = role;
        document.getElementById("matchScore").innerText = "Backend Offline";
    }
}


function displayResults(data) {

    const role = data.role;
    const score = data.match_score;
    const skills = data.skills;

    // Role
    document.getElementById("targetRole").innerText = role;

    // Score
    document.getElementById("matchScore").innerText = score + "%";

    // Progress bar
    document.getElementById("progressFill").style.width = score + "%";


    const currentContainer =
        document.getElementById("currentSkills");

    const missingContainer =
        document.getElementById("missingSkills");

    const analysisContainer =
        document.getElementById("skillAnalysis");

    const recommendationContainer =
        document.getElementById("recommendations");


    // Clear old content
    currentContainer.innerHTML = "";
    missingContainer.innerHTML = "";
    analysisContainer.innerHTML = "";
    recommendationContainer.innerHTML = "";


    let recommendations = [];


    skills.forEach(skill => {

        // CURRENT SKILLS
        if (skill.current > 0) {

            const span = document.createElement("span");

            span.className = "skill";

            span.innerText =
                skill.skill + " (" + skill.current + "%)";

            currentContainer.appendChild(span);
        }


        // SKILL GAPS
        if (skill.gap > 0) {

            const span = document.createElement("span");

            span.className = "missing";

            span.innerText =
                skill.skill + " (" + skill.gap + "% gap)";

            missingContainer.appendChild(span);


            // Recommendations
            if (skill.gap >= 40) {

                recommendations.push(
                    "Prioritize learning " + skill.skill
                );

            } else {

                recommendations.push(
                    "Improve your " + skill.skill + " skills"
                );
            }
        }


        // SKILL ANALYSIS
        const analysis = document.createElement("div");

        analysis.className = "skill-analysis-row";


        analysis.innerHTML = `
            <div class="skill-analysis-header">

                <strong>${skill.skill}</strong>

                <span>
                    Current: ${skill.current}%
                    |
                    Required: ${skill.required}%
                </span>

            </div>

            <div class="analysis-bar">

                <div
                    class="current-bar"
                    style="width:${skill.current}%">
                </div>

            </div>

            <small class="status ${skill.status
                .toLowerCase()
                .replace(" ", "-")}">

                ${skill.status}

            </small>
        `;


        analysisContainer.appendChild(analysis);

    });


    // Display maximum 5 recommendations
    recommendations.slice(0, 5).forEach(item => {

        const li = document.createElement("li");

        li.innerText = item;

        recommendationContainer.appendChild(li);

    });


    // Save score for other pages
    localStorage.setItem("skillMatch", score);
}


// Start analysis
analyzeSkillGap();