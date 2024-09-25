import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { redirect } from 'next/navigation'
import { auth, signOut } from '../../../../auth'

interface SettingsProps {}

export default async function Settings({}: SettingsProps) {
	const session = await auth()
	return (
		<div
			className={cn(
				'w-full flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 space-y-4',
			)}
		>
			<h1>Settings Page</h1>
			<p>User: {session?.user?.email}</p>
			<div className='w-full max-w-sm p-4 border rounded-xl overflow-hidden flex flex-col gap-4'>
				<pre>Session: {JSON.stringify(session?.user, null, 2)}</pre>
				<pre>Expires: {new Date(session?.expires || 0).toLocaleString()}</pre>
			</div>
			<form
				action={async () => {
					'use server'
					await signOut()
				}}
			>
				<Button variant='destructive' type='submit'>
					SignOut
				</Button>
			</form>
		</div>
	)
}
