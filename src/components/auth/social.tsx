'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

interface SocialProps {}

export function Social({}: SocialProps) {
	return (
		<div className={cn('w-full flex items-center gap-x-2')}>
			<Button variant='outline' className={cn('w-full')} onClick={() => {}}>
				<FcGoogle className={cn('size-6')} />
			</Button>
			<Button variant='outline' className={cn('w-full')} onClick={() => {}}>
				<FaGithub className={cn('size-6')} />
			</Button>
		</div>
	)
}
