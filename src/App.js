import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from 'SRC/components/navigation/Navigation.component';
import HerosContainer from 'SRC/routes/home/HerosContainer.component';
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
					<Route path='*' element={<Navigate to='/heros' />} />
					<Route path='heros/*' index element={<HerosContainer />} />
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
