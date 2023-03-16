import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export const HeroCardContainer = styled(Card, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme, isActive }) => ({
	...(isActive && {
		backgroundColor: theme.customColors.redAccent[900],
		boxShadow:
			'0px 7px 7px 7px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);',
	}),
}));

export const HeroCardLink = styled(Link, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	textDecoration: 'none',
	color: theme.customColors.grey[200],
	[theme.breakpoints.down('sm')]: {
		display: 'flex',
	},
}));

export const HeroCardContent = styled(CardContent, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	padding: theme.spacing(2),
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexGrow: 1,
	'&:last-child': {
		paddingBottom: theme.spacing(2),
	},
}));

export const HeroCardImage = styled(CardMedia, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		maxWidth: '250px',
	},
}));
