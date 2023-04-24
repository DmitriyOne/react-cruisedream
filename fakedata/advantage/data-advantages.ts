/* eslint-disable max-len */
import { IAdvantages } from '@crdr/interfaces'

import anchorIcon from '@crdr/image/advantages/anchor.svg'
import bookmarkIcon from '@crdr/image/advantages/bookmark.svg'
import doneIcon from '@crdr/image/advantages/done.svg'
import lockIcon from '@crdr/image/advantages/lock.svg'

export const dataAdvantages: IAdvantages[] = [
	{
		title: 'НАШИ ЦЕННОСТИ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие В первоначальном значении Круиз - морское путешествие',
		icon: { src: anchorIcon, alt: 'Anchor Icon' },
	},
	{
		title: 'НАШ ОПЫТ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие',
		icon: { src: bookmarkIcon, alt: 'Bookmark Icon' },
	},
	{
		title: 'БЕЗОПАСНОСТЬ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие В первоначальном значении Круиз - морское путешествие',
		icon: { src: lockIcon, alt: 'Lock Icon' },
	},
	{
		title: 'НАДЕЖНОСТЬ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие',
		icon: { src: doneIcon, alt: 'Done Icon' },
	},
]
