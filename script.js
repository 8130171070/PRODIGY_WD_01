const navbar = document.getElementById("navbar");

if (navbar) {
  console.log("Navbar element found!");  // Check if navbar is selected

  window.addEventListener("scroll", () => {
    console.log("Scrolling..."); // Check if scroll event is firing
    console.log("scrollY value:", window.scrollY);  // Print scrollY value to check threshold

    // Check if page is scrolled more than 10px (threshold)
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
      console.log("Scrolled, class added!"); // Log when class is added
    } else {
      navbar.classList.remove("scrolled");
      console.log("Class removed, still at top");
    }
  });
} else {
  console.log("Navbar element not found!"); // If navbar is not found
}