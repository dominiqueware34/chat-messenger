import React from 'react'
import UserTile from './UserTile'
import { User } from '@/lib/types'

interface ContactsListProps {
	contacts: User[]
	selectContact: (contactId: string) => void
	selectedContactId: string
}

function ContactsList({
	contacts,
	selectContact,
	selectedContactId,
}: ContactsListProps) {
	return (
		<div>
			<h1 className="text-xl">Contacts</h1>
			<hr className="my-2" />
			<ul className="list-none">
				{contacts.map((user) => (
					<UserTile
						key={user.id}
						onClick={() => selectContact(user.id)}
						name={user.name}
						selected={user.id === selectedContactId}
					/>
				))}
			</ul>
		</div>
	)
}

export default ContactsList
