import { useCallback, useState } from 'react'

export const useAccordion = () => {
	const [selected, setSelected] = useState<number | null>(null)

	const toggle = useCallback((i: number | null) => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i)
	}, [selected])

	return { selected, toggle }
}
