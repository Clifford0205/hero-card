import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'SRC/theme';

const useColorMode = () => {
	const [mode, setMode] = useState('dark');

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
