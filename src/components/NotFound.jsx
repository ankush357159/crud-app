import notFound from "../components/Assets/Images/NotFound.jpg";

const NotFound = () => {
	return (
		<img
			src={notFound}
			alt='Not Found'
			style={{ width: "30%", margin: "80px 0 0 35%" }}
		/>
	);
};
export default NotFound;
