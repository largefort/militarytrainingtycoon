// Achievement data
const achievements = [
    { name: "Train 100 soldiers", requirement: 100 },
    { name: "Upgrade facility to level 5", requirement: 5 },
    { name: "Train 200 soldiers", requirement: 200 },
    { name: "Upgrade facility to level 10", requirement: 10 },
    { name: "Train 300 soldiers", requirement: 300 },
    { name: "Upgrade facility to level 15", requirement: 15 },
    { name: "Train 400 soldiers", requirement: 400 },
    { name: "Upgrade facility to level 20", requirement: 20 },
    { name: "Train 500 soldiers", requirement: 500 },
    { name: "Upgrade facility to level 25", requirement: 25 },
    { name: "Train 600 soldiers", requirement: 600 },
    { name: "Upgrade facility to level 30", requirement: 30 },
    { name: "Train 700 soldiers", requirement: 700 },
    { name: "Upgrade facility to level 35", requirement: 35 },
    { name: "Train 800 soldiers", requirement: 800 },
    { name: "Upgrade facility to level 40", requirement: 40 },
    { name: "Train 900 soldiers", requirement: 900 },
    { name: "Upgrade facility to level 45", requirement: 45 },
    { name: "Train 1000 soldiers", requirement: 1000 },
    { name: "Upgrade facility to level 50", requirement: 50 },
    // Add more achievements here
    { name: "Train 1100 soldiers", requirement: 1100 },
    { name: "Upgrade facility to level 55", requirement: 55 },
    { name: "Train 1200 soldiers", requirement: 1200 },
    { name: "Upgrade facility to level 60", requirement: 60 },
    { name: "Train 1300 soldiers", requirement: 1300 },
    { name: "Upgrade facility to level 65", requirement: 65 },
    { name: "Train 1400 soldiers", requirement: 1400 },
    { name: "Upgrade facility to level 70", requirement: 70 },
    { name: "Train 1500 soldiers", requirement: 1500 },
    { name: "Upgrade facility to level 75", requirement: 75 },
    // Add more achievements here
    { name: "Train 1600 soldiers", requirement: 1600 },
    { name: "Upgrade facility to level 80", requirement: 80 },
    { name: "Train 1700 soldiers", requirement: 1700 },
    { name: "Upgrade facility to level 85", requirement: 85 },
    { name: "Train 1800 soldiers", requirement: 1800 },
    { name: "Upgrade facility to level 90", requirement: 90 },
    { name: "Train 1900 soldiers", requirement: 1900 },
    { name: "Upgrade facility to level 95", requirement: 95 },
    { name: "Train 2000 soldiers", requirement: 2000 },
    { name: "Upgrade facility to level 100", requirement: 100 },
    // Add more achievements here
    { name: "Train 2100 soldiers", requirement: 2100 },
    { name: "Upgrade facility to level 105", requirement: 105 },
    { name: "Train 2200 soldiers", requirement: 2200 },
    { name: "Upgrade facility to level 110", requirement: 110 },
    { name: "Train 2300 soldiers", requirement: 2300 },
    { name: "Upgrade facility to level 115", requirement: 115 },
    { name: "Train 2400 soldiers", requirement: 2400 },
    { name: "Upgrade facility to level 120", requirement: 120 },
    { name: "Train 2500 soldiers", requirement: 2500 },
    { name: "Upgrade facility to level 125", requirement: 125 },
    // Add more achievements here
    { name: "Train 2600 soldiers", requirement: 2600 },
    { name: "Upgrade facility to level 130", requirement: 130 },
    { name: "Train 2700 soldiers", requirement: 2700 },
    { name: "Upgrade facility to level 135", requirement: 135 },
    { name: "Train 2800 soldiers", requirement: 2800 },
    { name: "Upgrade facility to level 140", requirement: 140 },
    { name: "Train 2900 soldiers", requirement: 2900 },
    { name: "Upgrade facility to level 145", requirement: 145 },
    { name: "Train 3000 soldiers", requirement: 3000 },
    { name: "Upgrade facility to level 150", requirement: 150 },
    // Add more achievements here
    { name: "Train 3100 soldiers", requirement: 3100 },
    { name: "Upgrade facility to level 155", requirement: 155 },
    { name: "Train 3200 soldiers", requirement: 3200 },
    { name: "Upgrade facility to level 160", requirement: 160 },
    { name: "Train 3300 soldiers", requirement: 3300 },
    { name: "Upgrade facility to level 165", requirement: 165 },
    { name: "Train 3400 soldiers", requirement: 3400 },
    { name: "Upgrade facility to level 170", requirement: 170 },
    { name: "Train 3500 soldiers", requirement: 3500 },
    { name: "Upgrade facility to level 175", requirement: 175 },
    // Add more achievements here
    { name: "Train 3600 soldiers", requirement: 3600 },
    { name: "Upgrade facility to level 180", requirement: 180 },
    { name: "Train 3700 soldiers", requirement: 3700 },
    { name: "Upgrade facility to level 185", requirement: 185 },
    { name: "Train 3800 soldiers", requirement: 3800 },
    { name: "Upgrade facility to level 190", requirement: 190 },
    { name: "Train 3900 soldiers", requirement: 3900 },
    { name: "Upgrade facility to level 195", requirement: 195 },
    { name: "Train 4000 soldiers", requirement: 4000 },
    { name: "Upgrade facility to level 200", requirement: 200 },
    // Add more achievements here
    // For example:
    { name: "Train 4100 soldiers", requirement: 4100 },
    { name: "Upgrade facility to level 205", requirement: 205 },
    { name: "Train 4200 soldiers", requirement: 4200 },
    { name: "Upgrade facility to level 210", requirement: 210 },
    { name: "Train 4300 soldiers", requirement: 4300 },
    { name: "Upgrade facility to level 215", requirement: 215 },
    { name: "Train 4400 soldiers", requirement: 4400 },
    { name: "Upgrade facility to level 220", requirement: 220 },
    { name: "Train 4500 soldiers", requirement: 4500 },
    { name: "Upgrade facility to level 225", requirement: 225 },
    // Add more achievements here
];

// Function to generate achievements dynamically
function generateAchievements(totalSoldiers, facilityLevel) {
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';

    achievements.forEach((achievement) => {
        if (
            (achievement.requirement <= totalSoldiers && achievement.name.includes("Train")) ||
            (achievement.requirement <= facilityLevel && achievement.name.includes("Upgrade"))
        ) {
            const achievementItem = document.createElement('p');
            achievementItem.textContent = achievement.name;
            achievementsList.appendChild(achievementItem);
        }
    });
}

// Example function to update achievements on game progress
function updateAchievements(totalSoldiers, facilityLevel) {
    generateAchievements(totalSoldiers, facilityLevel);
}

// Example usage (call this function whenever game progress changes)
// updateAchievements(150, 6); // Example values for totalSoldiers and facilityLevel
