'use client'

import { UserCurrentRole } from '@/hooks/use-current-role'
import type { UserRole } from '@prisma/client'
import { FormError } from '../form-error'

interface RoleGateProps {
	children: React.ReactNode
	allowedRoles: UserRole
}
export function RoleGate({ children, allowedRoles }: RoleGateProps) {
	const role = UserCurrentRole()
	if (role !== allowedRoles) {
		return <FormError message='You are not authorized to view this page.' />
	}
	return <>{children}</>
}
