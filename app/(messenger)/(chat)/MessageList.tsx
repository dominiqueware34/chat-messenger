import React from 'react'
import { Message } from '@/lib/types'

interface MessageListProps {
	messages: Message[]
}

export default function MessageList({ messages }: MessageListProps) {
	return (
		<div className="flex-[11] border-2 border-blue-400">
			{messages.map((message, index) => (
				<div key={message.id}>{message.text}</div>
			))}
		</div>
	)
}
