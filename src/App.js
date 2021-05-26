import './App.css';
import User from "./User";

function App () {
	return (
	 <div className="App">
		 <header className="App-header">
			 <User
			  username="Boy"
			 />

			 <User
			  username="Janneke"
			 />
			 <User
			  username="Loki"
			 />
			 <User
			  username="Chewie"
			 />
		 </header>
	 </div>
	);
}

export default App;
