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

function attachDropdownListeners() {
    console.log('Attaching dropdown event listeners');
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', () => {
            console.log('Dropdown header clicked:', header.textContent);
            const expanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            const contentId = header.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            if (content) {
                if (expanded) {
                    content.classList.add('collapsed');
                } else {
                    content.classList.remove('collapsed');
                }
            }
        });

        // Allow keyboard toggle with Enter or Space
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachDropdownListeners);
} else {
    attachDropdownListeners();
}
