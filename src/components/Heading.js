import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Base from './Base';

const SIZES = ['xxl', 'xl', 'l', 'm', 's', 'xs'];

// eslint-disable-next-line react/prop-types
const HeadingBase = ({ as, level, ...props }) => (
	<Base as={as || `h${level}`} {...props} />
);

const Heading = styled(HeadingBase)`
	margin-top: ${props => props.theme.space[props.mt] || 0};
	margin-bottom: ${props => props.theme.space[props.mb] || 0};
	font-size: ${props => props.theme.fontSizes[SIZES[props.level - 1]]};
	line-height: ${props => props.theme.lineHeights.heading};
	font-weight: ${props => props.theme.fontWeights.heading};
`;

Heading.propTypes = {
	level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	as: PropTypes.any,
	mt: PropTypes.oneOf(SIZES),
	mb: PropTypes.oneOf(SIZES),
	/** @ignore */
	blacklist: PropTypes.array,
};

Heading.defaultProps = {
	level: 1,
	blacklist: Object.keys(Heading.propTypes),
};

/** @component */
export default Heading;
