document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const emailInput = document.querySelector(".email");
  const errorMessage = document.querySelector(".error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue))
      showError("Please enter a valid email address.");
    else clearError();
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }

  function clearError() {
    errorMessage.style.display = "none";
  }
});
