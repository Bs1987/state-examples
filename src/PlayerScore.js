function PlayerScore (props) {
	return (
	 <div>
		 {props.avatar} - {props.name}: {props.score}
		 {props.score === 10 && <p>Jij bent de winnaar!!!!</p>}
		 <button onClick={() => props.setScore(props.score + 1)}>+</button>
		 <button onClick={() => props.setScore(props.score - 1)}>-</button>
		 <button onClick={() => props.setEditMode(!props.editMode)}>📝</button>
	 </div>
	);
}

export default PlayerScore;
