import React from 'react'
import { Message, User } from '@/lib/types'
import MessageBubble from './MessageBubble'

interface MessageListProps {
	messages: Message[]
	receiver: User
}

export default function MessageList({ messages, receiver }: MessageListProps) {
	return (
		<div className=" overflow-scroll flex flex-col gap-4 px-4 py-2">
			{messages.map((message, index) => (
				<MessageBubble
					key={message.id}
					message={message}
					isOwner={message.user.id === receiver.id}
				/>
			))}
		</div>
	)
}
