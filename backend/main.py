from flask import Flask, request, jsonify
from flask_cors import CORS

from skill_data import ROLE_SKILLS
from skill_gap import calculate_skill_gap
from project_mentor import recommend_projects


app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "CareerTwin AI Skill Gap Backend is running"
    })


@app.route("/roles", methods=["GET"])
def get_roles():
    return jsonify({
        "roles": list(ROLE_SKILLS.keys())
    })


@app.route("/skill-gap", methods=["POST"])
def skill_gap():
    data = request.get_json()

    role = data.get("role")
    current_skills = data.get("skills", {})

    if role not in ROLE_SKILLS:
        return jsonify({
            "error": "Invalid role"
        }), 400

    required_skills = ROLE_SKILLS[role]

    result = calculate_skill_gap(
        current_skills,
        required_skills
    )

    return jsonify({
        "role": role,
        "match_score": result["match_score"],
        "skills": result["skills"]
    })


@app.route("/project-mentor", methods=["POST"])
def project_mentor():
    data = request.get_json()

    role = data.get("role")
    current_skills = data.get("skills", {})

    if not role:
        return jsonify({
            "error": "Role is required"
        }), 400

    result = recommend_projects(
        role,
        current_skills
    )

    return jsonify(result)


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )