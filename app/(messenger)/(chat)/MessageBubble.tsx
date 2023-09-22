import { Message } from '@/lib/types'
import { cn } from '@/lib/utils'
import React from 'react'

interface MessageBubbleProps {
	message: Message
	isOwner: boolean
}

function MessageBubble({ message, isOwner }: MessageBubbleProps) {
	return (
		<div
			className={cn('p-4 border rounded-sm max-w-3xl w-1/3', {
				'self-end': isOwner,
				'bg-blue-50': isOwner,
			})}
		>
			<div>{message.text}</div>
			{isOwner ? null : <div>{message.user.name}</div>}
		</div>
	)
}

export default MessageBubble
