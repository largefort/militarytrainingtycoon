let soldiers = 0;
let trainingFacilityLevel = 1;
let trainingRate = 1;
let totalSoldiers = 0;

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
    document.getElementById('soldiers').innerText = soldiers;
    document.getElementById('facility-level').innerText = trainingFacilityLevel;
    document.getElementById('training-rate').innerText = trainingRate;
    document.getElementById('total-soldiers').innerText = totalSoldiers;
}

function trainSoldier() {
    soldiers++;
    totalSoldiers++;
    updateStats();
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

function autoTrainSoldier() {
    setInterval(function() {
        soldiers += trainingRate;
        totalSoldiers += trainingRate;
        updateStats();
        saveGameState(); // Save game state after each action
    }, 1000);
}

loadGameState(); // Load game state when the page loads
autoTrainSoldier();
