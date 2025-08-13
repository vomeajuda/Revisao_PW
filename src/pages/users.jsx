import { useEffect, useState } from "react";

function users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/peoples")
			.then((response) => response.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h2>Lista de Usuários</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.firstName + " " + user.lastName}</li>
				))}
			</ul>
		</div>
	);
}

export default users;