import { ChangeEvent, useState } from 'react'

export const useInput = (initialVal: string) => {
	const [val, setVal] = useState(initialVal)

	const reset = () => {
		setVal(initialVal)
	}

	const bind = {
		value: val,
		onChange: (e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value),
	}

	return { val, reset, bind }
}
