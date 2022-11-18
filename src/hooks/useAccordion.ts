import { useState } from 'react'

export const useAccordion = () => {
	const [selected, setSelected] = useState<number | null>(null)

	const toggle = (i: number | null) => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i)
	}

	return { selected, toggle }
}
