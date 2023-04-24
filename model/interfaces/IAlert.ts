/* eslint-disable no-unused-vars */
import { ReactElement } from 'react'

import { EColorAlert } from '../enums'

export interface IAlertProps {
	visible?: boolean
	text?: string
	type?: keyof typeof EColorAlert
	show?: (text: string, type: keyof typeof EColorAlert) => void
	hide?: () => void
	handlerTimer?: () => void
	children?: ReactElement | null
}
