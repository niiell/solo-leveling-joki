/**
 * Function to update date and time in the footer
 */
function updateDateTime() {
    try {
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
    } catch (error) {
        console.error("Error updating date and time:", error);
    }
}

// Initial call to display immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

/**
 * Accessibility improvements for WhatsApp buttons
 * Adds role, aria-label, and tabindex for better screen reader support and keyboard navigation
 */
try {
    document.querySelectorAll('.whatsapp-button a').forEach(button => {
        button.setAttribute('role', 'button');
        button.setAttribute('aria-label', 'Order via WhatsApp');
        button.setAttribute('tabindex', '0');
    });
} catch (error) {
    console.error("Error setting accessibility attributes on WhatsApp buttons:", error);
}

/**
 * Add keyboard accessibility for tooltips
 * Adds tabindex to elements with data-tooltip attribute for keyboard focus
 */
try {
    document.querySelectorAll('[data-tooltip]').forEach(elem => {
        elem.setAttribute('tabindex', '0');
    });
} catch (error) {
    console.error("Error setting tabindex for tooltip elements:", error);
}

const videoContainer = document.getElementById('video-container');
const body = document.body;

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
  // For mobile users, remove preload-active class immediately and do not run timeout
  body.classList.remove('preload-active');
  document.body.style.overflow = 'auto'; // Ensure scrollbar is enabled
} else {
  // For non-mobile users, keep existing timeout to remove preload-active class after 5 seconds
  setTimeout(() => {
    videoContainer.classList.add('hidden');
    body.classList.remove('preload-active'); // Remove preload-active class after video finishes
    document.body.style.overflow = 'auto'; // Restore scrollbar
  }, 5000); // Preload duration 5 seconds
}