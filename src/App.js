import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import AddUsers from "./components/AddUsers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser"

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/all' component={AllUsers} />
				<Route exact path='/add' component={AddUsers} />
				<Route exact path='/edit/:id' component={EditUser} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
