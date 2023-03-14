import blackListProps from 'CONSTANTS/blackListProps';

const isStyledPropsValid = (props) => !blackListProps[props];

export default isStyledPropsValid;
