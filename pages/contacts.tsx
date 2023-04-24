import { ContactsPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Contacts = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Контакты" />
			<DynamicHeadDesc pageDescription="Это страница контактов команды cruisedream." />

			<ContactsPage />
		</>
	)
}

export default Contacts
