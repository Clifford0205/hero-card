import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';
import { keyframes } from '@emotion/react';

export const StyledHerosContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	height: '100%',
	padding: theme.spacing(2, 5),
}));
