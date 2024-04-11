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
    document.getElementById('soldiers').innerText = soldiers.toLocaleString(); // Format numbers with commas
    document.getElementById('facility-level').innerText = trainingFacilityLevel;
    document.getElementById('training-rate').innerText = trainingRate;
    document.getElementById('total-soldiers').innerText = totalSoldiers.toLocaleString(); // Format numbers with commas
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
    let lastFrameTime = performance.now();
    const targetFPS = 30;
    const interval = 1000 / targetFPS;

    function train(currentTime) {
        const deltaTime = currentTime - lastFrameTime;

        if (deltaTime >= interval) {
            const numTrained = Math.floor(deltaTime / interval) * trainingRate;
            soldiers += numTrained;
            totalSoldiers += numTrained;
            updateStats();
            saveGameState(); // Save game state after each action
            lastFrameTime = currentTime - (deltaTime % interval);
        }

        requestAnimationFrame(train);
    }

    requestAnimationFrame(train);
}

loadGameState(); // Load game state when the page loads
autoTrainSoldier();

// Background Music
const bgm = new Audio('bgm.mp3');
bgm.volume = 0.5; // Adjust volume if needed
bgm.play();
