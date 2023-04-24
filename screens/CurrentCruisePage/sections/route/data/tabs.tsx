import { ITabs } from '../../../../../model/interfaces'
import { RouteList } from '../routeList/routeList'
import { RouteMap } from '../routeMap/routeMap'
import { RouteTimeline } from '../routeTimeline/routeTimeline'

export const tabs: ITabs[] = [
	{
		id: 1,
		title: 'ТАЙМЛАЙН',
		children: <RouteTimeline />,
	},
	{
		id: 2,
		title: 'СПИСОК',
		children: <RouteList />,
	},
	{
		id: 3,
		title: 'КАРТА',
		children: <RouteMap />,
	},
]
