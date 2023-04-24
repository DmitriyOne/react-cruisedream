import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@crdr/store/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
