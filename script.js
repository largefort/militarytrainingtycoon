let soldiers = 0;
let trainingFacilityLevel = 1;
let trainingRate = 1;
let totalSoldiers = 0;
let lastTrainingTime = performance.now();

// Load game state from local storage
function loadGameState() {
    const savedGameState = JSON.parse(localStorage.getItem('soldierTrainingTycoon'));
    if (savedGameState) {
        soldiers = savedGameState.soldiers || 0;
        trainingFacilityLevel = savedGameState.trainingFacilityLevel || 1;
        trainingRate = savedGameState.trainingRate || 1;
        totalSoldiers = savedGameState.totalSoldiers || 0;
        updateStats();
    }
}

// Save game state to local storage
function saveGameState() {
    const gameState = {
        soldiers: soldiers,
        trainingFacilityLevel: trainingFacilityLevel,
        trainingRate: trainingRate,
        totalSoldiers: totalSoldiers
    };
    localStorage.setItem('soldierTrainingTycoon', JSON.stringify(gameState));
}

function updateStats() {
    document.getElementById('soldiers').innerText = soldiers.toLocaleString(); // Format numbers with commas
    document.getElementById('facility-level').innerText = trainingFacilityLevel;
    document.getElementById('training-rate').innerText = trainingRate;
    document.getElementById('total-soldiers').innerText = totalSoldiers.toLocaleString(); // Format numbers with commas
}

function trainSoldier() {
    soldiers++;
    totalSoldiers++;
    updateStats();
    updateSoldiersList(1); // Update the soldiers trained list with 1 soldier
    saveGameState(); // Save game state after each action
}

function upgradeFacility() {
    const upgradeCost = trainingFacilityLevel * 10;
    if (totalSoldiers >= upgradeCost) {
        totalSoldiers -= upgradeCost;
        trainingFacilityLevel++;
        trainingRate++;
        updateStats();
        saveGameState(); // Save game state after each action
    } else {
        alert("Not enough soldiers to upgrade facility!");
    }
}

// Function to generate a random human name with a soldier rank
function generateRandomName() {
    const ranks = ["Private", "Corporal", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "General"];
    const names = ["John", "Emily", "Michael", "Sarah", "David", "Jessica", "Matthew", "Laura", "Christopher", "Elizabeth"];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return `${randomRank} ${randomName}`;
}

// Function to update the soldiers trained list
function updateSoldiersList(numTrained) {
    const soldiersList = document.getElementById('soldiers-list');
    const shouldScrollDown = soldiersList.scrollTop + soldiersList.clientHeight === soldiersList.scrollHeight;

    for (let i = 0; i < numTrained; i++) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = generateRandomName();
        soldiersList.appendChild(listItem);
    }

    if (shouldScrollDown) {
        soldiersList.scrollTop = soldiersList.scrollHeight;
    }
}

function autoTrainSoldier() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - lastTrainingTime;
    const trainingTimePerSoldier = 1000 / trainingRate; // Time in milliseconds to train each soldier

    if (timeElapsed >= trainingTimePerSoldier) {
        const numTrained = Math.floor(timeElapsed / trainingTimePerSoldier);
        soldiers += numTrained;
        totalSoldiers += numTrained;
        updateStats();
        updateSoldiersList(numTrained); // Update the soldiers trained list with the number of soldiers trained
        saveGameState(); // Save game state after each action
        lastTrainingTime = currentTime - (timeElapsed % trainingTimePerSoldier);
    }

    requestAnimationFrame(autoTrainSoldier);
}

loadGameState(); // Load game state when the page loads
autoTrainSoldier();

// Background Music
const bgm = new Audio('bgm.mp3');
bgm.volume = 0.5; // Adjust volume if needed
bgm.play();
