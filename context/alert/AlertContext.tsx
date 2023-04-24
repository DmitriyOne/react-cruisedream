'use client'
import { createContext } from 'react'

import { IAlertProps } from '@crdr/interfaces'

export const AlertContext = createContext<IAlertProps>({ text: '', handlerTimer: () => {} })
