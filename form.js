const createForm = () => {
  return ``;
};

const form = document.getElementById("formContainer");

form.innerHTML = createForm();

function Toggle() {
  let password = document.getElementById("exampleInputPassword1");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
