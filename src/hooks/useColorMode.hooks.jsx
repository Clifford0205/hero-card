import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings, tokens } from 'SRC/theme';

const useColorMode = () => {
	const [mode, setMode] = useState('light');

	const colorModeHooksValue = useMemo(
		() => ({
			toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[],
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return {
		colorModeHooksValue,
		theme,
	};
};

export default useColorMode;