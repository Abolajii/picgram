import React from 'react';

import { Container, Image, ImageItem, Inner } from './styles';

const ImageGrid = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

ImageGrid.Inner = function ImageGridInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

ImageGrid.ImageItem = function ImageGridImageItem({ children, ...restProps }) {
	return <ImageItem {...restProps}>{children}</ImageItem>;
};

ImageGrid.Image = function ImageGridImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};

export default ImageGrid;
