from skill_data import ROLE_SKILLS


PROJECTS = {
    "AI Engineer": [
        {
            "title": "AI Resume Analyzer",
            "description": "An AI-based system that analyzes resumes, identifies skills and compares them with a target job role.",
            "difficulty": "Medium",
            "duration": "4 Weeks",
            "technologies": ["Python", "NLP", "Machine Learning", "Flask", "HTML/CSS"],
            "skills": ["Python", "Machine Learning", "Deep Learning", "SQL"],
            "modules": [
                "Resume Upload",
                "Resume Text Extraction",
                "Skill Detection",
                "Skill Gap Analysis",
                "Job Role Matching",
                "Result Dashboard"
            ],
            "milestones": [
                "Week 1: Resume processing",
                "Week 2: Skill extraction",
                "Week 3: Skill matching",
                "Week 4: Dashboard and testing"
            ]
        },
        {
            "title": "AI Model Deployment Dashboard",
            "description": "A platform that allows students to train and monitor machine learning models and understand the deployment process.",
            "difficulty": "Hard",
            "duration": "5 Weeks",
            "technologies": ["Python", "Machine Learning", "Flask", "Docker", "AWS"],
            "skills": ["Python", "Machine Learning", "Docker", "AWS"],
            "modules": [
                "Dataset Processing",
                "Model Training",
                "Model Evaluation",
                "API Creation",
                "Docker Deployment",
                "Monitoring Dashboard"
            ],
            "milestones": [
                "Week 1: Dataset and preprocessing",
                "Week 2: Model development",
                "Week 3: Flask integration",
                "Week 4: Docker deployment",
                "Week 5: Testing and monitoring"
            ]
        },
        {
            "title": "AI Career Recommendation Engine",
            "description": "A system that recommends suitable career paths based on student skills, interests and target roles.",
            "difficulty": "Medium",
            "duration": "4 Weeks",
            "technologies": ["Python", "Machine Learning", "Flask", "HTML/CSS"],
            "skills": ["Python", "Machine Learning", "SQL", "Statistics"],
            "modules": [
                "Student Profile",
                "Skill Analysis",
                "Career Matching",
                "Recommendation Engine",
                "Career Dashboard"
            ],
            "milestones": [
                "Week 1: Student profile",
                "Week 2: Skill analysis",
                "Week 3: Recommendation logic",
                "Week 4: Dashboard and testing"
            ]
        }
    ],

    "Data Scientist": [
        {
            "title": "Student Performance Predictor",
            "description": "Predict student academic performance using historical academic and behavioral data.",
            "difficulty": "Medium",
            "duration": "4 Weeks",
            "technologies": ["Python", "Pandas", "Machine Learning", "SQL"],
            "skills": ["Python", "SQL", "Statistics", "Machine Learning", "Data Analysis"],
            "modules": [
                "Data Collection",
                "Data Cleaning",
                "Exploratory Data Analysis",
                "Model Training",
                "Prediction Dashboard"
            ],
            "milestones": [
                "Week 1: Data collection",
                "Week 2: Data analysis",
                "Week 3: Model training",
                "Week 4: Dashboard"
            ]
        },
        {
            "title": "Customer Churn Prediction",
            "description": "Analyze customer behavior and predict customers who are likely to leave a service.",
            "difficulty": "Medium",
            "duration": "4 Weeks",
            "technologies": ["Python", "SQL", "Machine Learning", "Data Analysis"],
            "skills": ["Python", "SQL", "Statistics", "Machine Learning", "Data Analysis"],
            "modules": [
                "Data Processing",
                "Customer Analysis",
                "Feature Engineering",
                "Prediction Model",
                "Visualization"
            ],
            "milestones": [
                "Week 1: Dataset preparation",
                "Week 2: Data analysis",
                "Week 3: Prediction model",
                "Week 4: Visualization"
            ]
        }
    ],

    "Machine Learning Engineer": [
        {
            "title": "ML Model Deployment System",
            "description": "Build a complete machine learning pipeline from model training to deployment.",
            "difficulty": "Hard",
            "duration": "5 Weeks",
            "technologies": ["Python", "Machine Learning", "Flask", "Docker"],
            "skills": ["Python", "Machine Learning", "Deep Learning", "Docker", "Git"],
            "modules": [
                "Data Pipeline",
                "Model Training",
                "Model Evaluation",
                "API Development",
                "Docker Deployment"
            ],
            "milestones": [
                "Week 1: Data pipeline",
                "Week 2: Model training",
                "Week 3: API development",
                "Week 4: Docker",
                "Week 5: Testing"
            ]
        }
    ],

    "Software Engineer": [
        {
            "title": "Online Coding Platform",
            "description": "A platform where students can solve programming problems and track their progress.",
            "difficulty": "Hard",
            "duration": "5 Weeks",
            "technologies": ["Java", "Python", "HTML/CSS", "JavaScript", "SQL"],
            "skills": ["Java", "Python", "Data Structures", "Algorithms", "SQL", "Git"],
            "modules": [
                "User Login",
                "Problem Repository",
                "Code Submission",
                "Progress Tracking",
                "Leaderboard"
            ],
            "milestones": [
                "Week 1: User system",
                "Week 2: Problem repository",
                "Week 3: Submission system",
                "Week 4: Progress tracking",
                "Week 5: Testing"
            ]
        },
        {
            "title": "Smart Task Management System",
            "description": "A task management application for organizing projects, deadlines and team activities.",
            "difficulty": "Medium",
            "duration": "4 Weeks",
            "technologies": ["HTML", "CSS", "JavaScript", "Python", "SQL"],
            "skills": ["Python", "SQL", "Git", "Data Structures"],
            "modules": [
                "Task Creation",
                "Task Assignment",
                "Deadline Tracking",
                "Progress Dashboard"
            ],
            "milestones": [
                "Week 1: UI design",
                "Week 2: Task management",
                "Week 3: Dashboard",
                "Week 4: Testing"
            ]
        }
    ],

    "Cybersecurity Analyst": [
        {
            "title": "Phishing URL Detector",
            "description": "Detect potentially malicious URLs using rule-based and machine learning techniques.",
            "difficulty": "Medium",
            "duration": "4 Weeks",
            "technologies": ["Python", "Machine Learning", "Networking"],
            "skills": ["Python", "Cybersecurity", "Networking", "Machine Learning"],
            "modules": [
                "URL Collection",
                "Feature Extraction",
                "Threat Analysis",
                "Detection Engine",
                "Security Dashboard"
            ],
            "milestones": [
                "Week 1: URL collection",
                "Week 2: Feature extraction",
                "Week 3: Detection system",
                "Week 4: Dashboard"
            ]
        }
    ],

    "Product Manager": [
        {
            "title": "Student Career Analytics Platform",
            "description": "Analyze student career data to identify trends and improve placement strategies.",
            "difficulty": "Medium",
            "duration": "4 Weeks",
            "technologies": ["Python", "Data Analysis", "SQL", "HTML/CSS"],
            "skills": ["Data Analysis", "SQL", "Product Strategy", "Market Research"],
            "modules": [
                "Student Data",
                "Analytics",
                "Career Trends",
                "Placement Insights",
                "Product Dashboard"
            ],
            "milestones": [
                "Week 1: Data collection",
                "Week 2: Analytics",
                "Week 3: Career insights",
                "Week 4: Dashboard"
            ]
        }
    ]
}


def recommend_projects(role, current_skills):
    if role not in PROJECTS:
        role = "AI Engineer"

    projects = PROJECTS[role]
    required_skills = ROLE_SKILLS.get(role, {})

    skill_gaps = []

    for skill, required in required_skills.items():
        current = current_skills.get(skill, 0)

        if current < required:
            skill_gaps.append(skill)

    scored_projects = []

    for project in projects:
        score = 0

        for skill in project["skills"]:
            if skill in skill_gaps:
                score += 3
            elif skill in current_skills:
                score += 1

        scored_projects.append((score, project))

    scored_projects.sort(key=lambda x: x[0], reverse=True)

    recommendations = []

    for score, project in scored_projects:
        recommendations.append({
            **project,
            "relevance_score": min(100, 70 + score * 5)
        })

    return {
        "role": role,
        "skill_gaps": skill_gaps,
        "recommendations": recommendations
    }