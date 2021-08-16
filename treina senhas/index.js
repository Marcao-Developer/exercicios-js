const buttonShowOptions = document.querySelector("#show-opt");
const displayOptions = document.querySelector("#display-opt");

const buttonNewPassword = document.querySelector("#new-psswd");
const buttonClearPassword = document.querySelector("#clear-psswd");
const buttonShowPassword = document.querySelector("#show-psswd");
const buttonSendTry = document.querySelector("#send-try");

buttonShowOptions.addEventListener("click", () => {
	const isOptionsOn = displayOptions.classList.contains("hidden-opt") ? true : false; 
	if(isOptionsOn){
		displayOptions.classList.remove("hidden-opt");
		displayOptions.classList.add("showed-opt");
	}else if(!isOptionsOn){
		displayOptions.classList.remove("showed-opt");
		displayOptions.classList.add("hidden-opt");
	}

});


buttonNewPassword.addEventListener("click", () => {
	const psswd = prompt("DIGITE A SENHA QUE DESEJA TREINAR: ");
	localStorage.setItem('psswd', psswd);
});

buttonClearPassword.addEventListener("click", () => {
	if(localStorage.getItem("psswd")) return localStorage.removeItem("psswd")	
});

buttonShowPassword.addEventListener("click", () => {
	const getedPassword = localStorage.getItem("psswd");
	if(getedPassword) return alert(`SEU PASSWORD SETADO PARA TREINO ATUALMENTE É : ${getedPassword}`);
});

buttonSendTry.addEventListener("click", () => {
	const inputValueTry = document.querySelector("#try-psswd").value;
	const getedPassword = localStorage.getItem("psswd");
	const isCorrectPsswd = inputValueTry === getedPassword ? true : false;
	
	if(!getedPassword) return alert('POR FAVOR "SETE" UM PASSWORD PRIMEIRO');

	if(isCorrectPsswd) return alert("PASSWORD CORRETO, PARABÉNS");
	else if(!isCorrectPsswd) return alert("PASSWORD INCORRETO, :/");
});
