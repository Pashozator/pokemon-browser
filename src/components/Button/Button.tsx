import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
	children: any;
	link?: string;
}

const Button: React.FC<ButtonProps> = ({ children, link }) => {
	const button = <button className="button">{children}</button>;

	if (link) {
		return (
			<Link to={link}>
				{button}
			</Link>
		);
	}

	return button;
};

export default Button;
