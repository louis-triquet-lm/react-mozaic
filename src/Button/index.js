import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import 'styles/dist/index.css'

const prefix = 'mc-button--';

const Button = ({ children, bordered, variant, size, full, className, icon, iconRight, ...props }) => {
	const [ variantClass, setVariantClass ] = useState('');
	const [ sizeClass, setSizeClass ] = useState('');

	useEffect(
		() => {
			const variantClass = `${prefix}${bordered ? 'bordered' : 'solid'}${variant ? `-${variant}` : ''}`;
			setVariantClass(variantClass);
		},
		[ bordered, variant ]
	);

	useEffect(
		() => {
			const sizeClass = `${prefix}${size ? size : 'm'}`;
			setSizeClass(sizeClass);
		},
		[ size ]
	);

	return (
		<button
			className={classNames('mc-button', sizeClass, variantClass, { [`${prefix}full`]: full }, className)}
			{...props}
		>
			{icon && icon}
			<span class="mc-button__label">{children}</span>
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired,
	bordered: PropTypes.bool,
	full: PropTypes.bool,
	variant: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
	iconRight: PropTypes.bool,
};

Button.defaultProps = {
	bordered: false,
	full: false,
	variant: '',
	className: '',
	size: '',
	icon: '',
	iconRight: false,
};

export default Button;
