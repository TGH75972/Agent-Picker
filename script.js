const agentData = {
    "ascent": [
        { name: "Jett", img: "images/jett.jpg" },
        { name: "Sova", img: "images/sova.jpg" },
        { name: "Killjoy", img: "images/killjoy.jpg" },
        { name: "Omen", img: "images/omen.jpg" }
    ],
    "bind": [
        { name: "Raze", img: "images/raze.jpg" },
        { name: "Viper", img: "images/viper.jpg" },
        { name: "Brimstone", img: "images/brimstone.jpg" },
        { name: "Sage", img: "images/sage.jpg" }
    ],
    "breeze": [
        { name: "Skye", img: "images/skye.jpg" },
        { name: "Viper", img: "images/viper.jpg" },
        { name: "Astra", img: "images/astra.jpg" },
        { name: "Yoru", img: "images/yoru.jpg" }
    ],
    "fracture": [
        { name: "Breach", img: "images/breach.jpg" },
        { name: "Cypher", img: "images/cypher.jpg" },
        { name: "Astra", img: "images/astra.jpg" },
        { name: "Reyna", img: "images/reyna.jpg" }
    ],
    "haven": [
        { name: "Phoenix", img: "images/phoenix.jpg" },
        { name: "Sova", img: "images/sova.jpg" },
        { name: "Jett", img: "images/jett.jpg" },
        { name: "Cypher", img: "images/cypher.jpg" }
    ],
    "icebox": [
        { name: "Viper", img: "images/viper.jpg" },
        { name: "Sage", img: "images/sage.jpg" },
        { name: "Raze", img: "images/raze.jpg" },
        { name: "Sova", img: "images/sova.jpg" }
    ],
    "split": [
        { name: "Reyna", img: "images/reyna.jpg" },
        { name: "Killjoy", img: "images/killjoy.jpg" },
        { name: "Omen", img: "images/omen.jpg" },
        { name: "Raze", img: "images/raze.jpg" }
    ]
};

document.getElementById("getAgents").addEventListener("click", function() {
    const map = document.getElementById("map").value;
    const resultDiv = document.getElementById("result");
    const agents = agentData[map];

    if (agents) {
        resultDiv.innerHTML = `<h2>Recommended Agents for ${map.charAt(0).toUpperCase() + map.slice(1)}:</h2>`;
        agents.forEach(agent => {
            resultDiv.innerHTML += `
                <div class="agent-card fade-in">
                    <img src="${agent.img}" alt="${agent.name}">
                    <div class="agent-name">${agent.name}</div>
                </div>`;
        });
    } else {
        resultDiv.innerHTML = "No agents found for this map.";
    }
});
