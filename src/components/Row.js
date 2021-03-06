import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Base from './Base';

const space = props =>
	props.narrow ? props.theme.space.s : props.theme.space.m;

const Row = styled(Base)`
	margin-left: -${space};
	margin-right: -${space};
	display: flex;
	flex-flow: row wrap;
	align-items: ${props => props.alignItems};
	align-content: ${props => props.alignContent};
	justify-content: ${props => props.justifyContent};
	& > * {
		padding-left: ${space};
		padding-right: ${space};
	}
`;

Row.propTypes = {
	as: PropTypes.any,
	narrow: PropTypes.bool,
	alignItems: PropTypes.string,
	alignContent: PropTypes.string,
	justifyContent: PropTypes.string,
	children: PropTypes.node,
	/** @ignore */
	blacklist: PropTypes.array,
};

Row.defaultProps = {
	as: 'div',
	blacklist: Object.keys(Row.propTypes),
};

/** @component */
export default Row;
