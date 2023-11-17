import { PageWrapper } from '@melting/shared/components/page-wrapper/page-wrapper'
import Link from 'next/link'
import { Countdown } from './components/countdown/countdown'
import styles from './page.module.css'

export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	return (
		<PageWrapper className={styles.container}>
			<Countdown date={'2023-12-24T12:00:00+01:00'} />

			{searchParams.showSolution !== undefined ? (
				<>
					<Link className={styles.toggle} href={'/'}>
						Hide solution
					</Link>

					<video
						className={styles.solution}
						src="/assets/solution.mp4"
						autoPlay
						loop
						muted
						controls={false}
					/>
				</>
			) : (
				<Link className={styles.toggle} href={'/?showSolution'}>
					Show solution
				</Link>
			)}
		</PageWrapper>
	)
}
