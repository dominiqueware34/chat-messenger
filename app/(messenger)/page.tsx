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
	const [selectedContactId, setSelectedContactId] = useState(() => USERS[0].id)
	const [messages, setMessages] = useState<Record<string, Message[]>>({})
	const sendMessage = (text: string) => {
		const testNum = Math.random()
		const newMessage: Message = {
			id: String(Date.now()),
			text,
			user: testNum > 0.5 ? currentUser : USERS[2],
			createdAt: new Date(),
		}
		setMessages((prevMessages) => ({
			...prevMessages,
			[selectedContactId]: [
				...(prevMessages[selectedContactId] ?? []),
				newMessage,
			],
		}))
	}
	return (
		<main className="min-h-screen grid grid-cols-12">
			<aside className="col-span-3 p-4 border-r-2">
				<ContactsList
					contacts={USERS}
					selectContact={setSelectedContactId}
					selectedContactId={selectedContactId}
				/>
			</aside>
			<section className="flex col-span-9">
				<Chat
					key={selectedContactId}
					messages={messages[selectedContactId] ?? []}
					onSendMessage={sendMessage}
					currentUser={currentUser}
				/>
			</section>
		</main>
	)
}
