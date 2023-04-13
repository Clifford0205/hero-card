import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'SRC/theme';
import { PaletteMode } from '@mui/material';

const { customColors } = themeSettings('dark');

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		cardTitle: true;
	}
}

declare module '@mui/material/styles' {
	type Colors = typeof customColors;

	interface Theme {
		customColors: Colors;
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		customColors?: Colors;
	}
}

const useColorMode = () => {
	const [mode, setMode] = useState<PaletteMode>('dark');

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
