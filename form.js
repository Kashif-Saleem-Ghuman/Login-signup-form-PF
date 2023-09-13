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
