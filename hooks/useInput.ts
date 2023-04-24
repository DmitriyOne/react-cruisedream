import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

export const useInput = (initialVal: string) => {
	const [value, setValue] = useState(initialVal)

	const reset = useCallback((e: FormEvent) => {
		e.preventDefault()
		setValue(initialVal)
	}, [initialVal])

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value), [])
	
	return {
		bind: { value, onChange },
		value,
		reset,
	}
}
