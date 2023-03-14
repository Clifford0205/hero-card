import { Routes, Route } from 'react-router-dom';
import Navigation from 'COMPONENTS/navigation/navigation.component';
import Home from 'ROUTES/home/home.component';

import './App.css';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
