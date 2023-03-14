import { Routes, Route } from 'react-router-dom';
import Navigation from 'COMPONENTS/navigation/navigation.component';
import Home from 'ROUTES/home/home.component';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ColorModeContext from 'CONTEXTS/colorMode.context';
import useColorMode from 'HOOKS/useColorMode.hooks';

import './App.css';

function App() {
	const { colorModeHooksValue, theme } = useColorMode();
	return (
		<ColorModeContext.Provider value={colorModeHooksValue}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navigation />
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
