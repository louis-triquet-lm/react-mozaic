import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import 'styles/dist/index.css';

const Checkbox = ({ checked, onChange, invalid, ...props }) => {
	const handleChange = (e) => {
		onChange(e.target.checked, e);
	};

	return (
		<input
			type="checkbox"
			className={classNames('mc-checkbox', { 'is-invalid': invalid })}
			checked={checked}
			onChange={handleChange}
			{...props}
		/>
	);
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	invalid: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
	checked: false,
	invalid: false,
};

export default Checkbox;
