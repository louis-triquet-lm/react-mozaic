import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'styles/dist/index.css';

const Select = ({ value, onChange, options, className, placeholder, clearable, searchable, ...props }) => {
	const [ selectValue, setSelectValue ] = useState();
	useEffect(
		() => {
			options && setSelectValue(options.find((opt) => opt.value === value));
		},
		[ options, value ]
	);

	const handleChange = (option) => {
		setSelectValue(option);
		onChange(option ? option.value : undefined, option);
	};

	return (
		<ReactSelect
			className={classNames('select', className)}
			classNamePrefix="select"
			isClearable={clearable}
			isSearchable={searchable}
			options={options}
			value={selectValue}
			onChange={handleChange}
			placeholder={placeholder}
			{...props}
		/>
	);
};

Select.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.object),
	className: PropTypes.string,
	placeholder: PropTypes.string,
	clearable: PropTypes.bool,
	searchable: PropTypes.bool
};

Select.defaultProps = {
	value: '',
	options: null,
	className: '',
	placeholder: '',
	clearable: false,
	searchable: false
};

export default Select;
