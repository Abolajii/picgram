import React, { useState } from 'react';

import { ProgressBar } from './components';

import {
	HeaderContainer,
	ImageGridContainer,
	UploadFormContainer,
} from './container';
import Modal from './components/Modal';

const App = () => {
	console.log('process.env.REACT_APP_APIKEY', process.env.REACT_APP_APIKEY);

	const [selected, setSelected] = useState(null);

	const [modalImg, setModalImg] = useState(null);

	const [err, setErr] = useState(null);
	return (
		<>
			<HeaderContainer />
			<UploadFormContainer
				err={err}
				setErr={setErr}
				selected={selected}
				setSelected={setSelected}
			/>
			{selected && (
				<ProgressBar selected={selected} setSelected={setSelected} />
			)}
			<ImageGridContainer setModalImg={setModalImg} />
			{modalImg && <Modal setModalImg={setModalImg} modalImg={modalImg} />}
		</>
	);
};

export default App;
