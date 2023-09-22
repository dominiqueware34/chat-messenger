import React, { useRef, useEffect } from 'react'
import { Message, User } from '@/lib/types'
import MessageBubble from './MessageBubble'

interface MessageListProps {
	messages: Message[]
	receiver: User
}

export default function MessageList({ messages, receiver }: MessageListProps) {
	const chatListRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		// Scroll to bottom when messages change
		chatListRef.current?.scrollTo({
			top: chatListRef.current.scrollHeight,
			behavior: 'instant',
		})
	}, [messages])

	return (
		<div
			className=" overflow-scroll flex flex-col gap-4 px-4 py-2"
			ref={chatListRef}
		>
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
