import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';

export const StyledHerosContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	height: '100%',
	padding: theme.spacing(5, 5),
}));
