const loginEl = document.querySelector(".login-form");
const emailEl = document.querySelector('input[name="email"]');
const passEl = document.querySelector('input[name="password"]');

loginEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailEl.value.trim();
  const passValue = passEl.value.trim();

  if (emailValue === "" || passValue === "") {
    alert("Please fill all fields");
  } else {
    const formData = {
      email: emailValue,
      password: passValue,
    };
    console.log(formData);
    loginEl.reset();
  }
});
