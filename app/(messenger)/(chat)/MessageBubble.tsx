import { Message } from '@/lib/types'
import React from 'react'

interface MessageBubbleProps {
	message: Message
}

function MessageBubble({ message }: MessageBubbleProps) {
	return (
		<div>
			<div>{message.text}</div>
			<div>{message.userId}</div>
		</div>
	)
}

export default MessageBubble
