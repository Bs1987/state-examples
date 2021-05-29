import {useState} from "react";

function User (props) {
	// score: getter current state of "score"
	// setScore: setter. function to update score
	// =useState(0) => initialise state at initial state (start at setter "0")
	//useState is a hook: starts with "use"

	const [score, setScore] = useState(0);
	const [name, setName] = useState("Boy");
	const [avatar, setAvatar] = useState("😮")
	const [editMode, setEditmote] = useState(false);

	//onclick
	// formulier laten verdwijnen
	//boolean , true of false -> conditional render
	//submit -> false
	//pennetje -> true


	return (
	 <div>
		 {editMode && <div>
			 <label>Playername </label>
			 <input
			  value={name}
			  onChange={(event) => setName(event.target.value)}
			 />
			 <button onClick={() => setEditmote(false)}>Submit</button>
			 <select
			  value={avatar}
			  onChange={(event) => setAvatar(event.target.value)}
			 >
				 <option>😁</option>
				 <option>🙀</option>
				 <option>😍</option>
				 <option>😎</option>
			 </select>
		 </div>}
		 {avatar} - {name}: {score}
		 <button onClick={() => setScore(score + 1)}>+</button>
		 <button onClick={() => setScore(score - 1)}>-</button>
		 <button onClick={() => setEditmote(!editMode)}>📝</button>
	 </div>
	);
}

export default User;