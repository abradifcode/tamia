import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import themeGet from '../util/themeGet';
import Base from './Base';

const QuotedLink = styled(Base)`
	padding: 0;
	background: none;
	border: 0;
	color: inherit;
	font-family: inherit;
	text-decoration: none;
	& u,
	&:link u,
	&:visited u {
		text-decoration: underline;
		color: ${themeGet('colors.primary')};
	}
	&:hover u,
	&:active u,
	&:focus u {
		color: ${themeGet('colors.hover')};
	}
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: 1px dotted ${themeGet('colors.hover')};
		outline-offset: 1px;
	}
`;

QuotedLink.propTypes = {
	children: PropTypes.node,
	as: PropTypes.any,
	/** @ignore */
	blacklist: PropTypes.array,
};

QuotedLink.defaultProps = {
	as: 'a',
	blacklist: Object.keys(QuotedLink.propTypes),
};

/** @component */
export default QuotedLink;
