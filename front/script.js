document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the entered email address
    var email = document.getElementById('emailInput').value;
    
    // Store the email address (backend code required)
    // You will need to implement the backend code to store the email address in a database or file.
    // This JavaScript code only handles the frontend functionality.
    
    // Display success message
    var messageElement = document.getElementById('message');
    messageElement.innerText = 'Thank you for subscribing!';
    document.getElementById('emailInput').value = ''; // Clear the input field
  });
  