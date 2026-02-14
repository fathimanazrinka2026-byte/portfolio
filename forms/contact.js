
  
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop default submission

  const name = document.querySelector("input[name='name']");
  const email = document.querySelector("input[name='email']");
  const subject = document.querySelector("input[name='subject']");
  const message = document.querySelector("textarea[name='message']");
  const formMessage = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  // Clear previous messages
  formMessage.innerHTML = "";

  // Validation
  if (!name.value.trim() || !email.value.trim() || 
      !subject.value.trim() || !message.value.trim()) {
    
    formMessage.innerHTML = 
      "<div class='alert alert-danger'>All fields are required!</div>";
    return;
  }

  if (!emailPattern.test(email.value.trim())) {
    formMessage.innerHTML = 
      "<div class='alert alert-danger'>Please enter a valid email address!</div>";
    return;
  }

  // Simulated Submission
  formMessage.innerHTML = 
    "<div class='alert alert-success'>Message sent successfully!</div>";

  // Reset form
  document.getElementById("contactForm").reset();
});

