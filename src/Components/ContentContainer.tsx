import type { ReactNode } from 'react'
type Props = { children: ReactNode; className?: string }
export const ContentContainer = ({ children, className }: Props) => (
  <div style={{ width: '100%', maxWidth: 'calc(var(--content-width) + 2 * var(--page-gutter))', marginInline: 'auto', paddingInline: 'var(--page-gutter)' }} className={className}>{children}</div>
)
