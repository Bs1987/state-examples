function User (props) {
	console.log("USERNAME IS: ", props);
	return <div>{props.username}</div>
}
export default User;