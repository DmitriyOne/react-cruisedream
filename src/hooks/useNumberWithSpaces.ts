export const useNumberWithSpaces = () => {

	const handlerSpaces = (number: number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}

	return { handlerSpaces }
}
