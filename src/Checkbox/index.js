import React, { useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './checkbox.css';

export const CheckboxInput = ({ checked, onChange, invalid, ...props }) => {
	const handleChange = (e) => {
		onChange(e.target.checked, e);
	};

	return (
		<input
			type="checkbox"
			className={classNames('rm-checkbox__item mc-checkbox', { 'is-invalid': invalid })}
			checked={checked}
			onChange={handleChange}
			{...props}
		/>
	);
};

const Checkbox = ({ className, name, ...props }) => {
	const id = useRef(`chk${Math.round(Math.random() * 10000)}`);
	return (
		<span className={classNames('rm-checkbox', className)}>
			<CheckboxInput id={id.current} {...props} />
			<label htmlFor={id.current} className="rm-checkbox__label">
				{name}
			</label>
		</span>
	);
};

CheckboxInput.propTypes = {
	checked: PropTypes.bool,
	invalid: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
};

CheckboxInput.defaultProps = {
	checked: false,
	invalid: false,
};

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Checkbox.defaultProps = {
	className: '',
};

export default Checkbox;
