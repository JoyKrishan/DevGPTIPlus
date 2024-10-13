    document.getElementById('myForm').addEventListener('submit', function(event) {
        // Disable the submit button
        document.getElementById('submitButton').disabled = true;

        // Optional: Prevent form from submitting if you need to do something else
        // event.preventDefault();
    });