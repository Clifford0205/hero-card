import blackListProps from 'SRC/utils/blackListProps';

const isStyledPropsValid = (props) => !blackListProps[props];

export default isStyledPropsValid;
