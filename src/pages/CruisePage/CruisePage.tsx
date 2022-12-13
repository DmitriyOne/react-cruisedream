import { useWindowSize } from '../../hooks'
import { Header, Overview } from './sections'

export const CruisePage = () => {
	const { isMobile } = useWindowSize()

	const isShow = !isMobile
	return (
		<>
			{isShow && <Header />}
			<Overview />
		</>
	)
}
