import React from 'react';

import { Container, Inner, Title } from './styles';

const Header = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Header.Inner = function HeaderInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

export default Header;
