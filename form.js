const forms = document.querySelector(".forms"),
  passShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

console.log(forms, passShowHide, links);

// Show and Hide Password
passShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let pwField = icon.previousElementSibling;
    if (pwField.type === "password") {
      pwField.type = "text";
      icon.classList.add("fa-eye-slash");
    } else {
      pwField.type = "password";
      icon.classList.remove("fa-eye-slash");
    }
  });
});

window.onload = () => {
  // Check local storage support
  if (localStorage) {
    // Add event listener to form submission for Login
    document.getElementById("LoginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      // Get the data from the form for Login
      let email = document.getElementById("email").value;
      console.log(email);
      let password = document.getElementById("passwordLogin").value;

      // Save the data to localStorage for Login
      localStorage.setItem("email-Login", email);
      localStorage.setItem("password-Login", password);

      alert("Login data has been saved to local storage.");
    });

    // Add event listener to form submission for Sign Up
    document.getElementById("signupForm").addEventListener("submit", (e) => {
      e.preventDefault();
      // Get the data from the form for Sign Up
      let firstName = document.getElementById("firstName").value;
      let lastName = document.getElementById("lastName").value;
      let signUpEmail = document.getElementById("signupEmail").value;
      let signUpPassword = document.getElementById("signupPassword").value;
      let address = document.getElementById("address").value;
      let phoneNumber = document.getElementById("phoneNumber").value;

      // Save the data to localStorage for Sign Up
      localStorage.setItem("firstName-SignUp", firstName);
      localStorage.setItem("lastName-SignUp", lastName);
      localStorage.setItem("email-SignUp", signUpEmail);
      localStorage.setItem("password-SignUp", signUpPassword);
      localStorage.setItem("address-SignUp", address);
      localStorage.setItem("phoneNumber-SignUp", phoneNumber);

      alert("Sign Up data has been saved to local storage.");
    });
  }
};
