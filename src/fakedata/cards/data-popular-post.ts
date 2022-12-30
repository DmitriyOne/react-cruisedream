/* eslint-disable max-len */
import { ICard } from '../../model/interfaces'

import romeSrc from '../../components/RepeaterBlocks/PopularPorts/images/region/rome.jpg'
import barcelonaSrc from '../../components/RepeaterBlocks/PopularPorts/images/region/barcelona.jpg'
import santoriniSrc from '../../components/RepeaterBlocks/PopularPorts/images/region/santorini.jpg'
import veniceSrc from '../../components/RepeaterBlocks/PopularPorts/images/region/venice.jpg'

import countrySrc1 from '../../components/RepeaterBlocks/PopularPorts/images/country/1.jpg'
import countrySrc2 from '../../components/RepeaterBlocks/PopularPorts/images/country/2.jpg'
import countrySrc3 from '../../components/RepeaterBlocks/PopularPorts/images/country/3.jpg'
import countrySrc4 from '../../components/RepeaterBlocks/PopularPorts/images/country/4.jpg'


interface IPort {
	title: string
	cards: ICard[]
}

export const dataRegionPopularPort: IPort = {
	title: 'ПОПУЛЯРНЫЕ ПОРТЫ СРЕДИЗЕМНОГО МОРЯ',
	cards: [
		{
			id: 1,
			src: romeSrc,
			alt: '',
			title: 'Рим',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
		{
			id: 2,
			src: barcelonaSrc,
			alt: '',
			title: 'Барселона',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
		{
			id: 3,
			src: santoriniSrc,
			alt: '',
			title: 'Санторини',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
		{
			id: 4,
			src: veniceSrc,
			alt: '',
			title: 'Венеция',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
	]
}

export const dataCountryPopularPort: IPort = {
	title: 'ПОПУЛЯРНЫЕ ГОРОДА ИСПАНИИ',
	cards: [
		{
			id: 1,
			src: countrySrc1,
			alt: '',
			title: 'Валенсия',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
		{
			id: 2,
			src: countrySrc2,
			alt: '',
			title: 'Барселона',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
		{
			id: 3,
			src: countrySrc3,
			alt: '',
			title: 'Севилья',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
		{
			id: 4,
			src: countrySrc4,
			alt: '',
			title: 'Бильбао',
			subtitle: 'Вечный город, куда ведут все дороги, где можно прожить всю жизнь за одни каникулы длиной в день или потеряться на несколько недель. Концентрация достопримечательностей в Риме достигает таких величин, что всего через пару часов в этом городе сердце и мозг бедного туриста начинают отказываться вмещать новые. Поэтому провести в Риме день-два — просто преступление. Сюда можно приезжать и приезжать, и приезжать. Главное — отдавать себе отчет в том, что Рим — это не Италия.',
			href: '/port',
		},
	]
}
