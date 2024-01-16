const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }

    const trimmedValues = {
        email: email.trim(),
        password: password.trim(),
    };

    console.log(trimmedValues);

    formElem.reset();
}