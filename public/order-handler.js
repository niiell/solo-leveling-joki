// JavaScript to dynamically customize order message text on click
function attachOrderClickListeners() {
    const orderButtons = document.querySelectorAll('.order-now-integrated');
    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent default navigation to update href first
            event.preventDefault();

            // Find the closest pricing-card ancestor
            const card = button.closest('.pricing-card');
            if (!card) {
                // fallback: proceed with default href
                window.location.href = button.href;
                return;
            }

            // Extract relevant info from the card
            const packageName = card.querySelector('h3')?.textContent.trim() || '';
            const price = card.querySelector('.price')?.textContent.trim() || '';
            const features = Array.from(card.querySelectorAll('ul li')).map(li => li.textContent.trim()).join(', ');

            // Construct the WhatsApp message text
            let message = `Saya tertarik dengan paket ${packageName} sebesar ${price}`;
            if (features) {
                message += ` dengan fitur: ${features}`;
            }

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);

            // Construct the WhatsApp URL with the encoded message
            const baseUrl = 'https://wa.me/6285942180995?text=';
            const newHref = baseUrl + encodedMessage;

            // Update the href attribute
            button.href = newHref;

            // Navigate to the updated href
            window.location.href = newHref;
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachOrderClickListeners);
} else {
    attachOrderClickListeners();
}
