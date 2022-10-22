let info = document.getElementById("nameEmail")
info.addEventListener("submit", event => {
	event.preventDefault()

	let ourFormData = new FormData(event.target)

	const name = ourFormData.get("firstName")

	const textUpdate = `
		<h2>Congratulations, ${name}!</h2>
		<p>You're on your way to becoming a BBQ Master!</p>
		<p class="fine-print">We'll never share your information without your permission</p>
`

	const register = document.getElementById("contents")
	register.innerHTML = textUpdate
})