import {useState} from "react";

function User (props) {
	// score: getter current state of "score"
	// setScore: setter. function to update score
	// =useState(0) => initialise state at initial state (start at setter "0")
	//useState is a hook: starts with "use"

	const [score, setScore] = useState(0);
	// const whatIsThis = useState("bla");
	// console.log("WHAT IS THIS: ", whatIsThis);
	const [name, setName] = useState("Boy");
	const [avatar, setAvatar] = useState("😮")

	return (
	 <div>
		 <div>
			 <label>Playername </label>
			 <input value={name} onChange={(event) => setName(event.target.value)}/>
			 <button>Submit</button>
			 <select value={avatar} onChange={(event) => setAvatar(event.target.value)}>
				 <option>😁</option>
				 <option>🙀</option>
				 <option>😍</option>
				 <option>😎</option>
			 </select>
		 </div>
		 {avatar} {name}: {score}
		 {/*{ score === 10 && <p>You have won!!</p>}*/}
		 {/*{score ==s*/}
		 <button onClick={() => setScore(score + 1)}>+</button>
		 <button onClick={() => setScore(score - 1)}>-</button>
		 <button>📝</button>
	 </div>
	);
}

export default User;