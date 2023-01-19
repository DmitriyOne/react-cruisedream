/* eslint-disable max-len */
import imgSrc1 from '../../../../assets/images/cabins/cabins-1.jpg'

import { ICabinsModal } from '../../../../model/interfaces'

export const dataShipModal1: ICabinsModal = {
	id: 1,
	title: 'Test 1',
	description: 'Каюта с балконом с ограниченным видом находится на второй палубе. Имеет две уютные комнаты, оборудованные всем необходимым. Собственный балкон. Джакузи. Кровать и постельное белье. В обслуживание номера входит ежедневная влажная уборка, смена постельного белья и многое другое.',
	advantages: [
		{ title: 'Портовые сборы и таксы' },
		{ title: 'Дневные развлечения на борту' },
		{ title: 'Вечерняя развлекательная программа' },
		{ title: 'Представления в театре' },
	],
	gallery: [
		{ src: imgSrc1, alt: '' },
		{ src: imgSrc1, alt: '' },
		{ src: imgSrc1, alt: '' },
		{ src: imgSrc1, alt: '' },
	]
}

export const dataShipModal2: ICabinsModal = {
	id: 2,
	title: 'Test 2',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae nihil in minus ducimus reprehenderit odit unde ad? Deserunt soluta non ea, ipsam suscipit ratione voluptas doloribus consequuntur sed. Laboriosam porro adipisci, provident nihil amet ratione deleniti enim excepturi repudiandae rem cumque tenetur voluptatibus facilis officia assumenda corporis magnam aliquam!',
	advantages: [
		{ title: 'Портовые сборы и таксы 2' },
		{ title: 'Дневные развлечения на борту 2' },
		{ title: 'Вечерняя развлекательная программа 2' },
		{ title: 'Представления в театре 2' },
	],
	gallery: [
		{ src: imgSrc1, alt: '' },
		{ src: imgSrc1, alt: '' },
		{ src: imgSrc1, alt: '' },
		{ src: imgSrc1, alt: '' },
	]
}
