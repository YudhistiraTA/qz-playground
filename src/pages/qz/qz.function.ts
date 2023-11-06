import { MutableRefObject } from 'react'

export function QzPrint(payloadRef: MutableRefObject<undefined>) {
	const payload = (payloadRef?.current as HTMLElement)?.outerHTML
	console.log(payload)
	import('qz-tray').then((qz) =>
		qz.websocket
			.connect()
			.then(() => {
				return qz.printers.find("Microsoft Print to PDF")
				// return qz.printers.find("POS-58")
			})
			.then((printers) => {
				console.log(printers)
				const config = qz.configs.create(printers, {
					size: { width: 57 },
					units: 'mm',
					colorType: 'grayscale',
					margins: {right: 7}
				})
				const data = [
					{
						type: 'pixel',
						format: 'html',
						flavor: 'plain',
						data: payload,
					},
				]
				return qz.print(config, data)
			})
			.then()
			.catch((e) => {
				console.error('Error:', e)
			})
			.finally(() => {
				qz.websocket
					.disconnect()
					.then(() => {})
					.catch((disconnectError) => {
						console.error('Disconnect Error:', disconnectError)
					})
			}),
	)
}
