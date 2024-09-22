import { LoginForm } from '@/components/auth/login-form'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

// Mockar o LoaderIcon se necessário
jest.mock('lucide-react', () => ({
	LoaderIcon: () => <div data-testid='loader-icon' />,
}))

describe('LoginForm', () => {
	it('should render the LoginForm component', () => {
		render(<LoginForm />)

		// Verifica se o título "Welcome Back" está presente
		expect(screen.getByText(/Welcome Back/)).toBeInTheDocument()

		// Verifica se os campos de email e senha estão presentes
		expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument()

		// Verifica se o botão de login está presente
		expect(screen.getByText(/login/i)).toBeInTheDocument()
	})

	// it('should display validation errors if inputs are empty', async () => {
	// 	render(<LoginForm />)

	// 	// Simula a submissão do formulário sem preencher campos
	// 	fireEvent.click(screen.getByText(/login/i))

	// 	await waitFor(() => {
	// 		// Verifica se as mensagens de erro são exibidas
	// 		expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
	// 		expect(screen.getByText(/password must be/i)).toBeInTheDocument()
	// 	})
	// })

	// it('should submit form with valid inputs', async () => {
	// 	render(<LoginForm />)

	// 	// Preenche os campos de email e senha
	// 	fireEvent.change(screen.getByLabelText(/email/i), {
	// 		target: { value: 'john.doe@example.com' },
	// 	})
	// 	fireEvent.change(screen.getByLabelText(/password/i), {
	// 		target: { value: 'password123' },
	// 	})

	// 	// Simula a submissão do formulário
	// 	fireEvent.click(screen.getByText(/login/i))

	// 	await waitFor(() => {
	// 		// Verifica se a função de submissão foi chamada com os valores corretos
	// 		expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument()
	// 		expect(screen.queryByText(/password must be/i)).not.toBeInTheDocument()
	// 	})
	// })

	// it('should show loading icon when isPending is true', async () => {
	// 	render(<LoginForm />)

	// 	// Simula o estado de transição
	// 	act(() => {
	// 		fireEvent.click(screen.getByText(/login/i))
	// 	})

	// 	// Verifica se o ícone de carregamento está visível
	// 	await waitFor(() => {
	// 		expect(screen.getByTestId('loader-icon')).toBeVisible()
	// 	})
	// })

	// it('should disable button when isPending is true', () => {
	// 	render(<LoginForm />)

	// 	// Simula o estado de transição
	// 	act(() => {
	// 		fireEvent.click(screen.getByText(/login/i))
	// 	})

	// 	// Verifica se o botão está desabilitado
	// 	expect(screen.getByText(/login/i).closest('button')).toBeDisabled()
	// })
})
