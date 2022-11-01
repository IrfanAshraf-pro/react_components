import "./App.css";
import TextField from "./components/TextField";
import "./styles/TextField.scss";

function App() {
	return (
		<div className="App">
			<TextField
				textFieldType="input__contained"
				name="Name"
				type="text"
				id="name"
			/>
			<TextField
				textFieldType="input__contained"
				name="Password"
				type="password"
				id="password"
			/>{" "}
			<TextField name="Email" type="email" id="email" />
		</div>
	);
}

export default App;
