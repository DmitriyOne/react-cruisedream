import { ESvg } from '@crdr/enums'

interface IProps {
  id: keyof typeof ESvg
}

export const GeneratorSvg = ({ id }: IProps) => {
	switch (id) {
	case 'ready':
		return (
			<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M24.5689 46.5517C36.7097 46.5517 46.5517 36.7097 46.5517 24.569C46.5517 12.4282 36.7097 2.58621 24.5689 2.58621C12.4282 2.58621 2.58618 12.4282 2.58618 24.569C2.58618 36.7097 12.4282 46.5517 24.5689 46.5517Z" stroke="#10AC3C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M15.6218 23.6133L22.292 30.3454L34.3769 18.2213" stroke="#10AC3C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	case 'warning':
		return (
			<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M25 0C11.2109 0 0 11.2109 0 25C0 38.7891 11.2109 50 25 50C38.7891 50 50 38.7891 50 25C50 11.2109 38.7891 0 25 0Z" fill="#EFCE4A" />
				<path d="M27.0801 37.5C27.0801 38.6523 26.1426 39.5801 25 39.5801C23.8574 39.5801 22.9199 38.6426 22.9199 37.5C22.9199 36.3574 23.8574 35.4199 25 35.4199C26.1426 35.4199 27.0801 36.3477 27.0801 37.5Z" fill="#ECEFF1" />
				<path d="M27.0801 29.1699C27.0801 30.3223 26.1426 31.25 25 31.25C23.8574 31.25 22.9199 30.3125 22.9199 29.1699V12.5C22.9199 11.3477 23.8574 10.4199 25 10.4199C26.1426 10.4199 27.0801 11.3574 27.0801 12.5V29.1699Z" fill="#FAFAFA" />
			</svg>
		)
	case 'error':
		return (
			<svg viewBox="0 0 50 50" fill="#D75A4A" xmlns="http://www.w3.org/2000/svg">
				<path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" />
				<path d="M16 34L25 25L34 16" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
				<path d="M16 16L25 25L34 34" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
			</svg>
		)
	default:
		return <svg></svg>
	}
}
