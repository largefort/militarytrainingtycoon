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

// Unlock achievement
function unlockAchievement(achievementName) {
    displayNotification(`Achievement Unlocked: ${achievementName}`);
}

// Update statistics on the UI
function updateStats() {
    document.getElementById('soldiers').innerText = soldiers.toLocaleString(); // Format numbers with commas
    document.getElementById('facility-level').innerText = trainingFacilityLevel;
    document.getElementById('training-rate').innerText = trainingRate;
    document.getElementById('total-soldiers').innerText = totalSoldiers.toLocaleString(); // Format numbers with commas
    document.getElementById('upgradeButton').innerText = `Upgrade Facility (${calculateUpgradeCost().toLocaleString()} soldiers)`; // Update upgrade button text

    // Check for achievements
    checkAchievements();
}

// Calculate upgrade cost
function calculateUpgradeCost() {
    // Calculate upgrade cost with 15% increase
    return Math.ceil(trainingFacilityLevel * 10 * 1.15);
}

// Train a soldier
function trainSoldier() {
    soldiers++;
    totalSoldiers++;
    updateStats();
    saveGameState(); // Save game state after each action
}

// Upgrade training facility
function upgradeFacility() {
    const upgradeCost = calculateUpgradeCost();
    if (totalSoldiers >= upgradeCost) {
        totalSoldiers -= upgradeCost;
        trainingFacilityLevel++;
        trainingRate++;
        updateStats();
        saveGameState(); // Save game state after each action
        displayNotification("Training facility upgraded! Training rate increased by +1.");
    } else {
        displayNotification("Not enough soldiers to upgrade facility!");
    }
}

// Automatic soldier training
function autoTrainSoldier() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - lastTrainingTime;
    const trainingTimePerSoldier = 1000 / trainingRate; // Time in milliseconds to train each soldier

    if (timeElapsed >= trainingTimePerSoldier) {
        const numTrained = Math.floor(timeElapsed / trainingTimePerSoldier);
        soldiers += numTrained;
        totalSoldiers += numTrained;
        updateStats();
        saveGameState(); // Save game state after each action
        lastTrainingTime = currentTime - (timeElapsed % trainingTimePerSoldier);
    }

    requestAnimationFrame(autoTrainSoldier);
}

// Check for achievements
function checkAchievements() {
    // Achievement conditions
    if (soldiers >= 1) {
        unlockAchievement('Basic Training');
    }
    if (totalSoldiers >= 100) {
        unlockAchievement('Seasoned Commander');
    }
    if (totalSoldiers >= 1000) {
        unlockAchievement('Master Trainer');
    }
    if (trainingFacilityLevel >= 2) {
        unlockAchievement('Facility Upgrade');
    }
    if (trainingRate >= 2) {
        unlockAchievement('Efficiency Boost');
    }
    if (totalSoldiers >= 10000) {
        unlockAchievement('Army Expansion');
    }
    if (trainingFacilityLevel >= 3) {
        unlockAchievement('Rapid Deployment');
    }
    if (totalSoldiers >= 10000) {
        unlockAchievement('Elite Forces');
    }
    // Add more achievements with their conditions here
    if (totalSoldiers >= 1000000) {
        unlockAchievement('War Hero');
    }
    if (totalSoldiers >= 10000000) {
        unlockAchievement('World Domination');
    }
    if (totalSoldiers >= 100000000) {
        unlockAchievement('Legacy Builder');
    }
    if (totalSoldiers >= 1000000000) {
        unlockAchievement('Galactic Conqueror');
    }
    if (totalSoldiers >= 10000000000) {
        unlockAchievement('Eternal Glory');
    }
    if (totalSoldiers >= 100000000000) {
        unlockAchievement('Immortal Leader');
    }
    if (totalSoldiers >= 1000000000000) {
        unlockAchievement('Universal Sovereign');
    }
    if (totalSoldiers >= 10000000000000) {
        unlockAchievement('Divine Commander');
    }
    if (totalSoldiers >= 100000000000000) {
        unlockAchievement('Cosmic Overlord');
    }
    if (totalSoldiers >= 1000000000000000) {
        unlockAchievement('Supreme Being');
    }
    if (totalSoldiers >= 10000000000000000) {
        unlockAchievement('Omni-King');
    }
    if (totalSoldiers >= 100000000000000000) {
        unlockAchievement('Creator of Realms');
    }
    if (totalSoldiers >= 1000000000000000000) {
        unlockAchievement('Transcendent Deity');
    }
    if (totalSoldiers >= 10000000000000000000) {
        unlockAchievement('Universal Architect');
    }
    if (totalSoldiers >= 100000000000000000000) {
        unlockAchievement('Supreme Existence');
    }
    if (totalSoldiers >= 1000000000000000000000) {
        unlockAchievement('Eternal Omniscience');
    }
    if (totalSoldiers >= 10000000000000000000000) {
        unlockAchievement('Ultimate Sovereignty');
    }
    if (totalSoldiers >= 100000000000000000000000) {
        unlockAchievement('Grand Creator');
    }
    if (totalSoldiers >= 1000000000000000000000000) {
        unlockAchievement('Transcendental Ascendancy');
    }
    if (totalSoldiers >= 10000000000000000000000000) {
        unlockAchievement('Divine Manifestation');
    }
    if (totalSoldiers >= 100000000000000000000000000) {
        unlockAchievement('Supreme Entity');
    }
    if (totalSoldiers >= 1000000000000000000000000000) {
        unlockAchievement('Ultimate Being');
    }
}

// Load game state when the page loads
loadGameState();
autoTrainSoldier();

// Background Music
const bgm = new Audio('bgm.mp3');
bgm.volume = 0.5; // Adjust volume if needed
bgm.play();
