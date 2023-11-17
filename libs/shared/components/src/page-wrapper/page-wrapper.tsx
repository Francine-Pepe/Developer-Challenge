import { clsx } from 'clsx'
import { PropsWithChildren } from 'react'
import styles from './page-wrapper.module.css'

type PageWrapperProps = {
	className?: string
}

export const PageWrapper: React.FC<PropsWithChildren<PageWrapperProps>> = ({ children, className }) => {
	return <main className={clsx(styles.container, className)}>{children}</main>
}
