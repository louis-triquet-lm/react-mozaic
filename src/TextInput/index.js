import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import 'styles/dist/index.css';

const Input = ({ value, onChange, valid, invalid, className, ...props }) => {
	const handleChange = (e) => {
		onChange(e.target.value, e);
	};
	return (
		<input
			className={classNames(
				'rm-text-input mc-text-input',
				{ 'is-valid': valid, 'is-invalid': invalid },
				className
			)}
			value={value}
			onChange={handleChange}
			{...props}
		/>
	);
};

const LeftIconInput = ({ Icon, className, ...props }) => (
	<div className="mc-left-icon-input">
		<Icon className="mc-left-icon-input__icon" />
		<Input className={classNames('mc-left-icon-input__input', className)} {...props} />
	</div>
);

const TextInput = ({ Icon, ...props }) => (Icon ? <LeftIconInput Icon={Icon} {...props} /> : <Input {...props} />);

Input.propTypes = {
	value: PropTypes.string,
	className: PropTypes.string,
	valid: PropTypes.bool,
	invalid: PropTypes.bool,
	onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
	value: '',
	className: '',
	valid: false,
	invalid: false
};

LeftIconInput.propTypes = {
	Icon: PropTypes.func.isRequired,
	className: PropTypes.string
};

LeftIconInput.defaultProps = {
	className: ''
};

TextInput.propTypes = {
	Icon: PropTypes.func
};

TextInput.defaultProps = {
	Icon: null
};

export default TextInput;
