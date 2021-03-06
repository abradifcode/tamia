import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Base from './Base';

const SIZES = ['xxl', 'xl', 'l', 'm', 's', 'xs'];

const Text = styled(Base)`
	margin-top: ${props => props.theme.space[props.mt]};
	margin-bottom: ${props => props.theme.space[props.mb]};
	font-size: ${props => props.theme.fontSizes[props.size]};
	font-weight: ${props => props.theme.fontWeights[props.weight]};
	font-style: ${props => props.style};
	color: ${props => props.theme.colors[props.color]};
`;

Text.propTypes = {
	size: PropTypes.oneOf(SIZES),
	color: PropTypes.string,
	style: PropTypes.oneOf(['italic']),
	weight: PropTypes.string,
	as: PropTypes.any,
	mt: PropTypes.oneOf(SIZES),
	mb: PropTypes.oneOf(SIZES),
	/** @ignore */
	blacklist: PropTypes.array,
};

Text.defaultProps = {
	size: 'm',
	weight: 'base',
	as: 'p',
	blacklist: Object.keys(Text.propTypes),
};

/** @component */
export default Text;
