import { useRef } from "react"
import { Intro } from "./intro"


export const HomePage = () => {
	const ref = useRef<HTMLDivElement>()
	return (
		<>
			<Intro  />
		</>
	)
}
