const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // You can perform validation here if needed

  // Send data to server or email service
  // For example, you can use an AJAX request or a third-party email service

  // Reset form after successful submission
  form.reset();
  alert('Thank you for your message!');
});