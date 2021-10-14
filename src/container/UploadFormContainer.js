import styled from 'styled-components';
import { UploadForm } from '../components';

const UploadBox = styled.div`
	height: 50px;
	width: 50px;
	font-size: 30px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-top: 30px;
	/* background-color: red; */
	border: 2px solid #9b099b;
	color: #9b099b;
	cursor: pointer;
`;

const UploadFile = styled.input`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
`;

const FileName = styled.div`
	margin: 10px;
`;

const UploadFormContainer = ({ setSelected, selected, setErr, err }) => {
	const req = ['image/jpeg', 'image/png', 'image/jpg'];

	const handleUploadFile = (e) => {
		if (e.target.files[0] && req.includes(e.target.files[0].type)) {
			setSelected(e.target.files[0]);
			setErr('');
		} else {
			setSelected(null);
			setErr('File type must be an image (png or jpeg)');
		}
	};

	return (
		<UploadForm>
			<UploadForm.Inner>
				<UploadForm.Title>Your Pictures</UploadForm.Title>
				<UploadBox>
					<UploadFile onChange={handleUploadFile} type='file' />+
				</UploadBox>
				<FileName>{err && err}</FileName>
				<FileName>{selected?.name}</FileName>
			</UploadForm.Inner>
		</UploadForm>
	);
};

export default UploadFormContainer;
