import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

describe('Home Page', () => {
	it('should render the home page', () => {
		render(<Home />)
		expect(screen.getByText(/Get started by editing/)).toBeInTheDocument()
	})
	it('should render the logo', () => {
		render(<Home />)
		expect(screen.getByRole('img', { name: 'Next.js logo' })).toBeInTheDocument()
	})
})
