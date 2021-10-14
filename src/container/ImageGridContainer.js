import React from 'react';
import { ImageGrid } from '../components';
import useFirestore from '../hooks/useFirestore';

const ImageContainer = ({ setModalImg }) => {
	const { images } = useFirestore('images');

	const handleClick = (url) => {
		setModalImg(url);
	};

	return (
		<ImageGrid>
			<ImageGrid.Inner>
				{images &&
					images.map((img, i) => {
						return (
							<ImageGrid.ImageItem key={i}>
								<ImageGrid.Image
									onClick={() => handleClick(img)}
									src={img.url}
								/>
							</ImageGrid.ImageItem>
						);
					})}
			</ImageGrid.Inner>
		</ImageGrid>
	);
};

export default ImageContainer;
