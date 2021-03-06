import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import themeGet from '../util/themeGet';
import Base from './Base';

const Link = styled(Base)`
	&,
	&:link,
	&:visited {
		padding: 0;
		background: none;
		border: 0;
		font-family: inherit;
		color: ${themeGet('colors.primary')};
		text-decoration: underline;
	}
	&:hover,
	&:active,
	&:focus {
		color: ${themeGet('colors.hover')};
		cursor: pointer;
	}
	&:focus {
		outline: 1px dotted ${themeGet('colors.hover')};
		outline-offset: 1px;
	}
`;

Link.propTypes = {
	children: PropTypes.node,
	as: PropTypes.any,
	/** @ignore */
	blacklist: PropTypes.array,
};

Link.defaultProps = {
	as: 'a',
	blacklist: Object.keys(Link.propTypes),
};

/** @component */
export default Link;
