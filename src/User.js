import {useState} from "react";

function User (props) {
	// score: getter current state of "score"
	// setScore: setter. function to update score
	// =useState(0) => initialise state at initial state (start at setter "0")
	//useState is a hook: starts with "use"

	const [score, setScore] = useState(0);
	const whatIsThis = useState("bla");
	console.log("WHAT IS THIS: ", whatIsThis);

	return (
	 <div>
		 {props.username}: {score}
		 {/*{ score === 10 && <p>You have won!!</p>}*/}
		 {score === 10 ? (
		  <p>You have won!!</p>
		 ) : (
		  <p>You lose!</p>
		 )}
		 <button onClick={() => setScore(score + 1)}>+</button>
		 <button onClick={() => setScore(score - 1)}>-</button>
	 </div>
	);
}

export default User;