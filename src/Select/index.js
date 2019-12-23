import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavigationControlCross24px, NavigationArrowArrowBottom24px } from 'Icons';

import './select.css';

const DropdownIndicator = (props) => {
	const { children = <NavigationArrowArrowBottom24px />, getStyles, innerProps: { ref, ...restInnerProps } } = props;
	return (
		<div {...restInnerProps} ref={ref} style={getStyles('dropdownIndicator', props)}>
			{children}
		</div>
	);
};
const ClearIndicator = (props) => {
	const { children = <NavigationControlCross24px />, getStyles, innerProps: { ref, ...restInnerProps } } = props;
	return (
		<div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
			{children}
		</div>
	);
};

const Select = ({
	value,
	onChange,
	options,
	className,
	placeholder,
	clearable,
	searchable,
	valid,
	invalid,
	disabled,
	...props
}) => {
	const [ selectValue, setSelectValue ] = useState();
	const [ calcPlaceholder, setCalcPlaceholder ] = useState();

	useEffect(
		() => {
			options && setSelectValue(options.find((opt) => opt.value === value));
		},
		[ options, value ]
	);

	useEffect(
		() => {
			setCalcPlaceholder(placeholder ? `-- ${placeholder} --` : '');
		},
		[ placeholder ]
	);

	const handleChange = (option) => {
		setSelectValue(option);
		onChange(option ? option.value : undefined, option);
	};

	return (
		<ReactSelect
			className={classNames('rm-select', { 'is-valid': valid, 'is-invalid': invalid }, className)}
			classNamePrefix="select"
			isClearable={clearable}
			isSearchable={searchable}
			isDisabled={disabled}
			options={options}
			value={selectValue}
			onChange={handleChange}
			placeholder={calcPlaceholder}
			components={{ DropdownIndicator, ClearIndicator }}
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
	searchable: PropTypes.bool,
	valid: PropTypes.bool,
	invalid: PropTypes.bool,
	disabled: PropTypes.bool,
};

Select.defaultProps = {
	value: '',
	options: null,
	className: '',
	placeholder: '',
	clearable: false,
	searchable: false,
	valid: false,
	invalid: false,
	disabled: false,
};

export default Select;
