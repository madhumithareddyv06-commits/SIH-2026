def calculate_skill_gap(current_skills, required_skills):

    results = []

    total_current = 0
    total_required = 0

    for skill, required in required_skills.items():

        current = current_skills.get(skill, 0)

        gap = max(required - current, 0)

        if gap == 0:
            status = "Strong"

        elif gap <= 25:
            status = "Minor Gap"

        elif gap <= 40:
            status = "Moderate Gap"

        else:
            status = "Critical Gap"

        results.append({
            "skill": skill,
            "current": current,
            "required": required,
            "gap": gap,
            "status": status
        })

        total_current += min(current, required)
        total_required += required

    if total_required == 0:
        match_score = 0
    else:
        match_score = round(
            (total_current / total_required) * 100
        )

    results.sort(
        key=lambda x: x["gap"],
        reverse=True
    )

    return {
        "match_score": match_score,
        "skills": results
    }