import { ChangeEvent, FormEvent, useState } from 'react'

export const useInput = (initialVal: string) => {
	const [value, setValue] = useState(initialVal)

	const reset = (e: FormEvent) => {
		e.preventDefault()
		setValue(initialVal)
	}

	const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

	return {
		bind: { value, onChange },
		value,
		reset,
	}
}
