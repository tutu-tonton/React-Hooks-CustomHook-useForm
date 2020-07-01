// rfce
import React from 'react';
import useForm from '../utils/useForm';

function Form() {
	const [values, handleChange] = useForm();
	// const [name, setName] = useState('');
	// const [handle, setHandle] = useState('');

	// nfn
	const register = (e) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		<form onSubmit={register} className="form-group">
			<label>Name: </label>
			<input
				// 何も入力してない場合は''
				value={values.name || ''}
				// value={name}
				// ↓ イベントが伝わってこない -> イベント永続化
				onChange={handleChange}
				// onChange={(e) => setName(e.target.value)}
				name="name"
				type="text"
				placeholder="Fox McCloud"
				className="form-control"
			/>

			<label>Handle:</label>
			<input
				value={values.handle || ''}
				// value={handle}
				// ↓ イベントが伝わってこない -> イベント永続化
				onChange={handleChange}
				// onChange={(e) => setHandle(e.target.value)}
				name="handle"
				type="text"
				placeholder="multishine20xx"
				className="form-control"
			/>
			<button className="btn">Register</button>
		</form>
	);
}

export default Form;
