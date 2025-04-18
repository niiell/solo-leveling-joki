/**
 * Function to update date and time in the footer
 */
function updateDateTime() {
    try {
        const now = new Date();

        // Format day of month
        const day = now.getDate();

        // Format month name
        const month = now.toLocaleString('default', { month: 'long' });

        // Format year
        const year = now.getFullYear();

        // Format hours and minutes
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        // Format date-time string
        const dateTimeString = `${day} ${month} ${year} ${hours}:${minutes}`;

        // Update the footer element
        const dateTimeElement = document.getElementById('current-date-time');
        if (dateTimeElement) {
            dateTimeElement.textContent = dateTimeString;
        }

        // Update the current year in footer
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = year;
        }
    } catch (error) {
        console.error('Error updating date and time:', error);
    }
}

// Call updateDateTime initially and every minute
updateDateTime();
setInterval(updateDateTime, 60000);