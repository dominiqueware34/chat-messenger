import React from 'react'
import { Message } from '@/lib/types'
import MessageBubble from './MessageBubble'

interface MessageListProps {
	messages: Message[]
}

export default function MessageList({ messages }: MessageListProps) {
	return (
		<div className="flex-[11] overflow-scroll">
			{messages.map((message, index) => (
				<MessageBubble key={message.id} message={message} />
			))}
		</div>
	)
}
