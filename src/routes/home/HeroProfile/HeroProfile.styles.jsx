import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';
import { Box } from '@mui/material';

export const StyledHeroProfile = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	marginTop: '2rem',
	padding: theme.spacing(2),
	backgroundColor: theme.customColors.grey[900],
	borderRadius: '5px',
}));

export const StyledCounterArea = styled(Box, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	button: {
		marginLeft: '5px',
		marginRight: '5px',
	},
}));
