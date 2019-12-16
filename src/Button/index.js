import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import 'styles/dist/index.css';

const prefix = 'mc-button--';

const Button = ({ children, bordered, variant, size, full, className, Icon, iconRight, ...props }) => {
	const [ variantClass, setVariantClass ] = useState('');
	const [ sizeClass, setSizeClass ] = useState('');

	useEffect(
		() => {
			console.log('variant effect', variant);
			const variantClass = `${prefix}${bordered ? 'bordered' : 'solid'}${variant && variant !== 'primary'
				? `-${variant}`
				: ''}`;
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

	const icon = Icon ? <Icon className="mc-button__icon  mc-button__icon--m" /> : null;
	const isIconButton = Icon && !children;

	return (
		<button
			className={classNames(
				'mc-button',
				sizeClass,
				variantClass,
				{ [`${prefix}full`]: full, 'mc-button--square': isIconButton },
				className
			)}
			{...props}
		>
			{!iconRight && icon}
			{children && <span className="mc-button__label">{children}</span>}
			{iconRight && icon}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
	bordered: PropTypes.bool,
	full: PropTypes.bool,
	variant: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.string,
	Icon: PropTypes.func,
	iconRight: PropTypes.bool,
};

Button.defaultProps = {
	children: null,
	bordered: false,
	full: false,
	variant: '',
	className: '',
	size: '',
	Icon: null,
	iconRight: false,
};

export default Button;
