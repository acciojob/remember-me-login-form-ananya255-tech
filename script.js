//your JS code here. If required.

const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const existing = document.getElementById("existing");

if (
    localStorage.getItem("username") !== null &&
    localStorage.getItem("password") !== null
) {
    existing.style.display = "block";
}

submit.addEventListener("click", function(event) {
    event.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert("Logged in as " + user);

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existing.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }
});

existing.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername !== null) {
        alert("Logged in as " + savedUsername);
    }
});
