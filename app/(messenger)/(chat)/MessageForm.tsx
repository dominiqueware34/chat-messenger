import React from 'react'

interface MessageFormProps {
	onSubmit: (messageText: string) => void
}

function MessageForm({ onSubmit }: MessageFormProps) {
	const [messageText, setMessageText] = React.useState('')
	const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSubmit(messageText)
		setMessageText('')
	}
	return (
		<div className="flex basis-16 gap-2 p-4">
			<form className="flex-1 grid grid-cols-12 gap-1" onSubmit={handleSumbit}>
				<div className="col-span-10">
					<textarea
						onChange={(event) => setMessageText(event.target.value)}
						value={messageText}
						rows={4}
						className="w-full resize-none outline-none border-2 rounded-md"
					/>
				</div>

				<div className="col-span-2 flex items-center justify-center">
					<button
						className="rounded border-2 bg-[#DDE2FE] px-3 py-2"
						type="submit"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	)
}

export default MessageForm
