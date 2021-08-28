import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
	InputLabel,
	FormControl,
	FormGroup,
	Input,
	Button,
	makeStyles,
	Typography,
} from "@material-ui/core";

import { editUser, getUsers } from "../Service/api";

const useStyles = makeStyles({
	container: {
		width: "50%",
		margin: "5% 0 0 25%",
		"& > *": {
			marginTop: 20,
		},
	},
});

const initialValue = {
	name: "",
	username: "",
	email: "",
	phone: "",
};

const EditUser = () => {
	const [user, setUser] = useState(initialValue);
	const { name, username, email, phone } = user;
	const classes = useStyles();
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		loadUserData();
	}, []);

	const loadUserData = async () => {
		const response = await getUsers(id);
		setUser(response.data);
	};

	const onValueChange = (e) => {
		setUser({ ...user, [e.target.name]: [e.target.value] });
		//console.log(user)
	};

	const editUserDetails = async () => {
		await editUser(id, user);
		history.push("/all");
	};

	return (
		<FormGroup className={classes.container}>
			<Typography variant='h4'>Edit User</Typography>
			<FormControl>
				<InputLabel>Name</InputLabel>
				<Input onChange={(e) => onValueChange(e)} name='name' value={name} />
			</FormControl>
			<FormControl>
				<InputLabel>Username</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name='username'
					value={username}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Email</InputLabel>
				<Input onChange={(e) => onValueChange(e)} name='email' value={email} />
			</FormControl>
			<FormControl>
				<InputLabel>Phone</InputLabel>
				<Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
			</FormControl>
			<Button
				variant='contained'
				color='primary'
				onClick={() => editUserDetails()}
			>
				Edit User
			</Button>
		</FormGroup>
	);
};

export default EditUser;
