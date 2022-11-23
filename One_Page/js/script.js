let form = document.querySelector('.needs-validation'); // document.getElementById("formId")
form.addEventListener('submit', valider);

function valider(e) {
	if (form.checkValidity() == false) {
		e.preventDefault();
	}
	form.classList.add('was-validated');
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	alert('Votre message a bien été envoyé');
}
