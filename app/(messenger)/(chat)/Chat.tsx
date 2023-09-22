import React from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import { Message, User } from '@/lib/types'

interface ChatProps {
	currentUser: User
	messages: Message[]
	onSendMessage: (text: string) => void
}
function Chat({ messages, onSendMessage, currentUser }: ChatProps) {
	return (
		<div className="flex-1 grid grid-rows-[92vh_64px] gap-2">
			<MessageList messages={messages} receiver={currentUser} />
			<MessageForm onSubmit={onSendMessage} />
		</div>
	)
}

export default Chat
