// Get the modal element
const modal = document.querySelector('.job-details-modal');

// Get the button that opens the modal
const viewDetailsButtons = document.querySelectorAll('.view-details');

// Get the <span> element that closes the modal
const closeBtn = document.querySelector('.close-btn');

// When the user clicks the view details button, open the modal
viewDetailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    // Here, you can fetch the job details from an API or database and populate the modal content dynamically
  });
});

// When the user clicks on the close button, close the modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Add event listeners for filter dropdowns and search input
const industrySelect = document.getElementById('industry');
const locationSelect = document.getElementById('location');
const experienceSelect = document.getElementById('experience');
const searchInput = document.getElementById('search');

// When the user selects a filter or types in the search input, filter the job listings
[industrySelect, locationSelect, experienceSelect, searchInput].forEach(input => {
  input.addEventListener('change', filterJobs);
});

function filterJobs() {
  const industry = industrySelect.value;
  const location = locationSelect.value;
  const experience = experienceSelect.value;
  const searchTerm = searchInput.value.toLowerCase();

  const jobCards = document.querySelectorAll('.job-card');

  jobCards.forEach(card => {
    const jobTitle = card.querySelector('h3').textContent.toLowerCase();
    const jobCompany = card.querySelectorAll('p')[0].textContent.split(':')[1].trim().toLowerCase();
    const jobLocation = card.querySelectorAll('p')[1].textContent.split(':')[1].trim().toLowerCase();
    const jobExperience = card.querySelectorAll('p')[2].textContent.split(':')[1].trim().toLowerCase();

    const matchesIn