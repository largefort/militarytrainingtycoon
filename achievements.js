// New function to display achievement notification in a popup style
function displayAchievementNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('achievement-popup');
    notification.innerText = message;

    // Add notification to the document body
    document.body.appendChild(notification);

    // Remove the notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Updated function to unlock achievement
function unlockAchievement(achievementName) {
    const message = `Achievement Unlocked: ${achievementName}`;
    displayAchievementNotification(message);
}
