import { useState, useCallback } from 'react';
import { useContext } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, IconButton, useTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { NavigationContainer } from './navigation.styles';
import ColorModeContext from 'CONTEXTS/colorMode.context';

const Navigation = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const { toggleColorMode } = useContext(ColorModeContext);
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleOpenDrawer = useCallback(() => {
		setOpenDrawer(!openDrawer);
	}, []);

	const renderDrawer = () => (
		<>
			<SwipeableDrawer
				anchor='left'
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				PaperProps={{
					sx: {
						width: 230,
					},
				}}
			>
				<Box mt={'70px'}></Box>
				<List>
					<ListItem disablePadding>
						<ListItemButton onClick={toggleColorMode}>
							<ListItemIcon sx={{ minWidth: '35px' }}>
								{theme.palette.mode === 'dark' ? (
									<LightModeOutlinedIcon />
								) : (
									<DarkModeOutlinedIcon />
								)}
							</ListItemIcon>
							<ListItemText primary={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'} />
						</ListItemButton>
					</ListItem>
				</List>
			</SwipeableDrawer>

			<Box>
				<IconButton onClick={handleOpenDrawer}>
					<MenuIcon />
				</IconButton>
			</Box>
		</>
	);

	const renderTabs = () => (
		<Box>
			<IconButton onClick={toggleColorMode}>
				{theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
			</IconButton>
		</Box>
	);

	return <NavigationContainer>{matches ? renderDrawer() : renderTabs()}</NavigationContainer>;
};

export default Navigation;
