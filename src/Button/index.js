import React, { useEffect, useState } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './button.scss';

const Button = ({ children, bordered, variant, className, ...props }) => {
	const [ calculatedClassName, setCalculatedClassName ] = useState('');
	useEffect(() => {
        const className = `mc-button--${bordered?'bordered':'solid'}${variant?`-${variant}`:''}`
        setCalculatedClassName(className)

    }, [bordered, variant]);

	return (
		<button className={classNames('mc-button', calculatedClassName, className)} {...props}>
			<span class="mc-button__label">{children}</span>
		</button>
	);
};

Button.propTypes = {
    children:     PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    bordered: PropTypes.bool,
    variant: PropTypes.string,
    className: PropTypes.string,
}

Button.defaultProps = {
    bordered: false,
    variant: '',
    className: '',
}

export default Button;
