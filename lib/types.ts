export type User = {
	id: string
	name: string
}

export type Message = {
	id: string
	text: string
	createdAt: Date
	user: User
}
