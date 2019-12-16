import { configure, addDecorator } from '@storybook/react';
import './styles.scss';
/*
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 
*/

configure(require.context('../src', true, /\.stories\.js$/), module);
