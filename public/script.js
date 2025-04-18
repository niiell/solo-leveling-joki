document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    window.location.href = '/main'; // Redirect to the catalog page
});