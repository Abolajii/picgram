import React from 'react';

import { Container, Inner, Title } from './styles';

const UploadForm = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

UploadForm.Inner = function UploadFormInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

UploadForm.Title = function UploadFormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

export default UploadForm;
