//========================================
//  入力欄のカスタムフック
//  stateを作って、入力値をstateに格納
//  イベント永続化？
//========================================
import { useState } from 'react';

const useForm = () => {
	const [state, setState] = useState({});

	// 入力値をstateに格納
	const handleChange = (e) => {
		// イベント永続化
		e.persist();
		setState((state) => ({ ...state, [e.target.name]: e.target.value }));
	};

	return [state, handleChange];
};

export default useForm;
