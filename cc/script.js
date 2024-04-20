document.addEventListener("DOMContentLoaded", function() {
    // Get the button and hidden stories
    const seeMoreBtn = document.getElementById("see-more-btn");
    const hiddenStories = document.querySelector(".hidden-stories");
  
    // Toggle the visibility of hidden stories when the button is clicked
    seeMoreBtn.addEventListener("click", function() {
      if (hiddenStories.style.display === "none") {
        hiddenStories.style.display = "block";
        seeMoreBtn.textContent = "See Less";
      } else {
        hiddenStories.style.display = "none";
        seeMoreBtn.textContent = "See More";
      }
    });
  });
  