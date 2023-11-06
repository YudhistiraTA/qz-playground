import { QzProvider } from '@/contexts/index.ts'
import { QzBody } from './qz.body.tsx'
import { QzPayload } from './qz.payload.tsx'

export function QzMain() {
	return (
		<QzProvider>
			<QzBody />
			<QzPayload />
		</QzProvider>
	)
}
