document.getElementById("start-battle").addEventListener("click", startBattle);

let softAndWet = {
    name: "Soft & Wet",
    health: 120,
    attack: 20,
    accuracy: 0.4
};

let killerQueen = {
    name: "Killer Queen",
    health: 100,
    attack: 10,
    accuracy: 0.7
};

function logMessage(message) {
    const battleLog = document.getElementById("battle-log");
    battleLog.innerHTML += `<p>${message}</p>`;
    battleLog.scrollTop = battleLog.scrollHeight;
}

function attack(attacker, defender) {
    if (Math.random() <= attacker.accuracy) {
        const damage = Math.floor(attacker.attack + Math.random() * 5 - 2);
        defender.health = Math.max(0, defender.health - damage);
        logMessage(`${attacker.name} hits ${defender.name} for ${damage} damage!`);
    } else {
        logMessage(`${attacker.name}'s attack missed!`);
    }
    updateStats();
}

function updateStats() {
    document.getElementById("stats-soft-and-wet").innerText = `Health: ${softAndWet.health}`;
    document.getElementById("stats-killer-queen").innerText = `Health: ${killerQueen.health}`;
}

function startBattle() {
    softAndWet.health = 120;
    killerQueen.health = 100;
    updateStats();

    const battleLog = document.getElementById("battle-log");
    battleLog.innerHTML = "";
    logMessage("The battle begins!");

    let round = 1;
    const interval = setInterval(() => {
        if (softAndWet.health > 0 && killerQueen.health > 0) {
            logMessage(`--- Round ${round} ---`);
            
            if (Math.random() > 0.6) {
                attack(softAndWet, killerQueen);
            } else {
                attack(killerQueen, softAndWet);
            }
            
            round++;
        } else {
            clearInterval(interval);
            const winner = softAndWet.health > 0 ? "Soft & Wet" : "Killer Queen";
            logMessage(`${winner} wins the battle!`);
        }
    }, 1000);
}

