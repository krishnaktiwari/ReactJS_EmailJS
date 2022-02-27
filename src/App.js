import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
function App() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_21p8nee",
				"template_b795ino",
				form.current,
				"NhMuKGnNBwHzk3nAC"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>From name</label>
			<input type="text" name="from_name" />
			<br />
			<label>To name</label>
			<input type="text" name="to_name" />
			<br />
			<label>To email id</label>
			<input type="text" name="to_email_id" />
			<br />
			<label>Subject</label>
			<input type="text" name="subject" />
			<br />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
}

export default App;
