import { useContext } from "react"
import { QzContext } from "./qzContext.provider.tsx"

export function useQz() {
  const context = useContext(QzContext)
  if (context) return context
  throw new Error('Invalid scope')
}
