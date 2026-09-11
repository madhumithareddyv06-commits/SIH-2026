const ctx =
document.getElementById('skillChart');

new Chart(ctx, {

type: 'radar',

data: {

labels: [
'Python',
'SQL',
'ML',
'Docker',
'AWS',
'LLMs'
],

datasets: [{

label:'Skill Score',

data:[
90,
80,
75,
30,
20,
15
]

}]
},

options: {

responsive:true,

plugins:{

legend:{
labels:{
color:'white'
}
}
},

scales:{

r:{

ticks:{
color:'white'
},

pointLabels:{
color:'white'
},

grid:{
color:'rgba(255,255,255,0.2)'
},

angleLines:{
color:'rgba(255,255,255,0.2)'
}
}
}
}
});

document.getElementById("profileBtn").addEventListener("click", function() {
    window.location.href = "profile.html";
});

document.addEventListener("DOMContentLoaded", function () {

    const userName = localStorage.getItem("userName");

    const nameElement = document.getElementById("userName");

    if (userName && nameElement) {
        nameElement.textContent = userName;
    }

});