import { cn } from '@/lib/utils'
import React from 'react'

interface UserTileProps {
	name: string
	selected?: boolean
	onClick: () => void
}
function UserTile({ name, selected, onClick }: UserTileProps) {
	return (
		<li
			onClick={onClick}
			className={cn('p-2 hover:cursor-pointer hover:bg-slate-100 rounded-sm', {
				'bg-slate-100': selected,
			})}
		>
			{name}
		</li>
	)
}

export default UserTile
