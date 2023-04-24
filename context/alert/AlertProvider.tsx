'use client'
import { FC, useState } from 'react'

import { EColorAlert } from '@crdr/enums'
import { IAlertProps } from '@crdr/interfaces'

import { Alert } from '@crdr/ui'

import { AlertContext } from './AlertContext'

export const AlertProvider: FC<IAlertProps> = ({ text, type, children }) => {
	const [alertText, setAlertText] = useState<string | undefined>(text)
	const [alertType, setAlertType] = useState(type)
	const [alertOpen, setAlertOpen] = useState<boolean>(false)

	const openAlert = (text: string, type: keyof typeof EColorAlert) => {
		setAlertText(text)
		setAlertType(type)
		setAlertOpen(true)
	}

	const handlerTimer = () => {
		const alertTimeout = setTimeout(() => {
			setAlertOpen(false)
			clearTimeout(alertTimeout)
		}, 4000)
	}

	const closeAlert = () => setAlertOpen(false)

	return (
		<AlertContext.Provider value={{
			text: alertText,
			show: openAlert,
			hide: closeAlert,
			type: alertType,
			visible: alertOpen,
			handlerTimer,
		}}>
			<Alert text={alertText} />
			{children}
		</AlertContext.Provider>
	)
}
