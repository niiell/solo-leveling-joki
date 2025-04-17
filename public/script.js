document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    window.location.href = '/main'; // Redirect to the catalog page
});

// Preload logic
window.onload = function() {
    setTimeout(function() {
        document.getElementById('preload').style.display = 'none'; // Hide preload
    }, 5000); // Hide preload after 5 seconds
};
