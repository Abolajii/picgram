import { useState, useEffect } from 'react';

import { projectFirestore, projectStorage, timestamp } from '../firebase';

const useFirebase = (file) => {
	const [url, setUrl] = useState('');
	const [progress, setProgress] = useState(null);
	const [err, setErr] = useState(null);

	useEffect(() => {
		const projectRef = projectStorage.ref(file?.name);
		const collectionRef = projectFirestore.collection('images');
		projectRef.put(file).on(
			'state_changed',
			(snapshot) => {
				let perc = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

				setProgress(perc);
			},
			(err) => {
				setErr(err);
			},
			async () => {
				const url = await projectRef.getDownloadURL();

				const createdAt = timestamp();
				collectionRef.add({ url, createdAt });

				setUrl(url);
			}
		);
	}, [file]);

	return { url, err, progress };
};

export default useFirebase;
