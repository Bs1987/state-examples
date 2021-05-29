function PlayerForm (props) {
	return (
	 <div>
		 <label>Playername </label>
		 <input
		  placeholder="type your name"
		  value={props.name}
		  onChange={(event) => props.setName(event.target.value)}
		 />
		 <button onClick={() => props.setEditMode(false)}>Submit</button>
		 <select
		  value={props.avatar}
		  onChange={(event) => props.setAvatar(event.target.value)}
		 >
			 <option>😁</option>
			 <option>🙀</option>
			 <option>😍</option>
			 <option>😎</option>
		 </select>
	 </div>
	);
}

export default PlayerForm;