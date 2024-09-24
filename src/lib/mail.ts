import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationEmail(email: string, token: string) {
	const confirmLink = `${process.env.NEXT_PUBLIC_URL}/auth/new-verification?token=${token}`

	await resend.emails.send({
		from: 'claudio.lins@docegeleia.pt',
		to: email,
		subject: 'Verify your email address',
		html: `
    <div class="email" style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; width: 300px; padding: 16px">
    <h1>Verify your email address</h1>
    <p>Hello!</p>
    <p>To verify your email address, please click the following link:</p>
    <a href="${confirmLink}">Confirm Email</a>
    <br /><br />
    <p>This email was sent automatically. If you didn't request this verification, please contact us at <a href="mailto:claudio.lins@docegeleia.pt">claudio.lins@docegeleia.pt</a>.</p>
    <p>Best regards,</p>
    <p>Auth Team</p>
    </div>
    `,
	})
}
