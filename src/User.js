import {useState} from "react";
import PlayerForm from "./PlayerForm"
import PlayerScore from "./PlayerScore"

function User (props) {
	// score: getter current state of "score"
	// setScore: setter. function to update score
	// =useState(0) => initialise state at initial state (start at setter "0")
	//useState is a hook: starts with "use"

	const [score, setScore] = useState(0);
	const [name, setName] = useState("");
	const [avatar, setAvatar] = useState("")
	const [editMode, setEditmode] = useState(false);

	//onclick
	// formulier laten verdwijnen
	//boolean , true of false -> conditional render
	//submit -> false
	//pennetje -> true


	return (
	 <div>
		 {editMode ? (
		  <PlayerForm
		   name={name}
		   avatar={avatar}
		   setAvatar={setAvatar}
		   setName={setName}
		   setEditMode={setEditmode}
		  />
		 ) : (
		  <PlayerScore
		   avatar={avatar}
		   name={name}
		   score={score}
		   setScore={setScore}
		   setEditMode={setEditmode}
		   editMode={editMode}
		  />
		 )}
	 </div>
	);
}

export default User;