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
							<ImageGrid.ImageItem layout key={i} whileHover={{ opacity: 1 }}>
								<ImageGrid.Image
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 1 }}
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
