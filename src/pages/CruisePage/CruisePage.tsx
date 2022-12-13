import { useWindowSize } from '../../hooks'
import { CruiseHeader } from './sections'

export const CruisePage = () => {
	const { isMobile } = useWindowSize()

	const isShow = !isMobile
	return (
		<>
			{isShow && <CruiseHeader />}
		</>
	)
}
