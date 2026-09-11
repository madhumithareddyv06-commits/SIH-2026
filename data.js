const student = {

    name: localStorage.getItem("userName") || "Student",

    role: localStorage.getItem("dreamRole") || "AI Engineer",

    readiness: 74,

    skillMatch: 0,

    currentSkills: [],

    missingSkills: []

};