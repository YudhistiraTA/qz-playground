import { MutableRefObject, ReactNode, createContext, useRef } from 'react'

export const QzContext = createContext<{
	payloadRef: MutableRefObject<undefined>
}>(null)
export function QzProvider({ children }: { children: ReactNode }) {
	const payloadRef = useRef()
	return (
		<QzContext.Provider value={{ payloadRef }}>{children}</QzContext.Provider>
	)
}
