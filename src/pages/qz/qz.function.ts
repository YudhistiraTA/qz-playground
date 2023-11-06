import { MutableRefObject } from 'react'

export async function QzPrint(payloadRef: MutableRefObject<undefined>) {
	const payload = (payloadRef?.current as HTMLElement)?.outerHTML
	// const { toPng } = await import('html-to-image')
	// const payloadPng = await toPng(payloadRef.current)
	import('qz-tray').then((qz) =>
		qz.websocket
			.connect()
			.then(() => {
				// return qz.printers.find('Microsoft Print to PDF')
				return qz.printers.find("POS-58")
			})
			.then((printers) => {
				const config = qz.configs.create(printers, {
					size: { width: 57 },
					units: 'mm',
					margins: { right: 7 },
					rasterize: "false"
				})
				const data = [
					{
						type: 'pixel',
						format: 'html',
						flavor: 'plain',
						data: payload,
					},
					// {
					// 	type: 'pixel',
					// 	format: 'image',
					// 	flavor: 'file',
					// 	data: payloadPng,
					// },
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
