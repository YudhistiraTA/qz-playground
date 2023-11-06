import { useQz } from '@/contexts/index.ts'
import { QzPrint } from './qz.function.ts'

export function QzBody() {
	const { payloadRef } = useQz()
	return (
		<div className="p-4">
			<button
				onClick={() => QzPrint(payloadRef)}
				className="border-2 border-black rounded p-2 hover:scale-105 transition-all hover:bg-gray-100 active:scale-100 active:bg-white"
			>
				Cetak
			</button>
		</div>
	)
}
