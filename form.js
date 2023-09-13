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

      icon.classList.replace("bxs-hide", "bx-show");
    } else {
      pwField.type = "password";
      icon.classList.replace("bx-show", "bxs-hide");
    }
  });
});

// Add data to local storage for Login

const addLoginData = () => {
  // Add event listener to form submission for Login
  document.getElementById("LoginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the data from the form for Login
    let email = document.getElementById("email").value;
    console.log(email);
    let password = document.getElementById("passwordLogin").value;

    //vaildate if the user has entered data

    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    } else {
      // Save the data to localStorage for Login
      localStorage.setItem("email-Login", email);
      localStorage.setItem("password-Login", password);
    }
  });
};

// Add data to local storage for Sign Up

const addSignUpData = () => {
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the data from the form for Sign Up
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let signUpEmail = document.getElementById("signupEmail").value;
    let signUpPassword = document.getElementById("signupPassword").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    //validate if the user has entered data

    if (
      firstName === "" ||
      lastName === "" ||
      signUpEmail === "" ||
      signUpPassword === "" ||
      address === "" ||
      phoneNumber === ""
    ) {
      alert("Please fill in all fields");
      return false;
    } else {
      // Save the data to localStorage for Sign Up
      localStorage.setItem("firstName-SignUp", firstName);
      localStorage.setItem("lastName-SignUp", lastName);
      localStorage.setItem("email-SignUp", signUpEmail);
      localStorage.setItem("password-SignUp", signUpPassword);
      localStorage.setItem("address-SignUp", address);
      localStorage.setItem("phoneNumber-SignUp", phoneNumber);
    }
  });
};
