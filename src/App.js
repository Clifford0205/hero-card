import { Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Box } from '@mui/material';

import Navigation from 'SRC/components/navigation/Navigation.component';
import HerosContainer from 'SRC/routes/Heros/HerosContainer.component';
import ColorModeContext from 'CONTEXTS/colorMode.context';
import useColorMode from 'HOOKS/useColorMode.hooks';
import { ToastProvider } from 'CONTEXTS/toast.context';

import './App.css';

function App() {
	const { colorModeHooksValue, theme } = useColorMode();
	return (
		<ColorModeContext.Provider value={colorModeHooksValue}>
			<ThemeProvider theme={theme}>
				<ToastProvider>
					<CssBaseline />
					<Box display='flex' flexDirection='column'>
						<Navigation />
						<Routes>
							<Route path='*' element={<Navigate to='/heros' />} />
							<Route path='heros/*' index element={<HerosContainer />} />
						</Routes>
					</Box>
				</ToastProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
