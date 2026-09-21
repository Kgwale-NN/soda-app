import type { ReactNode } from 'react'
type Props = { children: ReactNode; className?: string }
export const ContentContainer = ({ children, className }: Props) => (
  <div style={{ width: '100%', maxWidth: 1200, marginInline: 'auto', paddingInline: 'clamp(20px, 4vw, 48px)' }} className={className}>{children}</div>
)
