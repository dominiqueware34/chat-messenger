'use client'

import { USERS } from '@/lib/data'
import Chat from './(chat)/Chat'
import ContactsList from './(contacts)/ContactsList'

import { useState } from 'react'
import { Message } from '@/lib/types'

const currentUser = {
	id: '1',
	name: 'Current User',
}
export default function Home() {
	const [selectedContactId, setSelectedContactId] = useState('')
	const [messages, setMessages] = useState<Record<string, Message[]>>({})
	const sendMessage = (text: string) => {}
	return (
		<main className="min-h-screen grid grid-cols-12">
			<aside className="col-span-3 p-4 border-r-2">
				<ContactsList
					contacts={USERS}
					selectContact={function (contactId: string): void {
						throw new Error('Function not implemented.')
					}}
					selectedContactId={''}
				/>
			</aside>
			<section className="flex col-span-9">
				<Chat
					key={selectedContactId}
					messages={messages[selectedContactId] ?? []}
					onSendMessage={sendMessage}
				/>
			</section>
		</main>
	)
}
