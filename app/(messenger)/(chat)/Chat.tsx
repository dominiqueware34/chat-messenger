import React from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import { Message } from '@/lib/types'

interface ChatProps {
	messages: Message[]
	onSendMessage: (text: string) => void
}
function Chat({ messages, onSendMessage }: ChatProps) {
	return (
		<div className="flex-1 flex flex-col p-4">
			<MessageList messages={messages} />
			<MessageForm onSubmit={onSendMessage} />
		</div>
	)
}

export default Chat
