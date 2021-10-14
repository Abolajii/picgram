import { useState } from 'react';
import { useEffect } from 'react';
import { projectFirestore } from '../firebase';

const useFirestore = (collection) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy('createdAt', 'desc')
			.onSnapshot((snapshot) => {
				let images = [];

				snapshot.forEach((doc) => {
					images = [...images, { ...doc.id, ...doc.data() }];
				});
				setImages(images);
			});

		return () => unsub();
	}, [collection]);

	return { images };
};

export default useFirestore;
