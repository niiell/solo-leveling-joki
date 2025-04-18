// Existing code
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    window.location.href = '/main'; // Redirect to the catalog page
});

// Function to update date and time in the footer
function updateDateTime() {
    const now = new Date();

    // Format day of month
    const day = now.getDate();

    // Format month name
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[now.getMonth()];

    // Format year
    const year = now.getFullYear();

    // Format hours for 12-hour clock
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format minutes and seconds with leading zeros
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Compose formatted date time string
    const formattedDateTime = `${day}, ${month} ${year} - ${hours} : ${minutes} : ${seconds} ${ampm}`;

    // Update the span content
    const dateTimeSpan = document.getElementById('current-date-time');
    if (dateTimeSpan) {
        dateTimeSpan.textContent = formattedDateTime;
    }
}

// Initial call to display immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

// Accessibility improvements for WhatsApp buttons
document.querySelectorAll('.whatsapp-button a').forEach(button => {
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', 'Order via WhatsApp');
    button.setAttribute('tabindex', '0');
});

// Add keyboard accessibility for tooltips
document.querySelectorAll('[data-tooltip]').forEach(elem => {
    elem.setAttribute('tabindex', '0');
});

// Dark mode toggle logic
const darkModeToggle = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = 'Light Mode';
        darkModeToggle.style.borderColor = '#e67e22';
        darkModeToggle.style.color = '#e67e22';
    } else {
        document.documentElement.removeAttribute('data-theme');
        darkModeToggle.textContent = 'Dark Mode';
        darkModeToggle.style.borderColor = 'white';
        darkModeToggle.style.color = 'white';
    }
}

applyTheme(currentTheme);

darkModeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
});
