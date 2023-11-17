'use client'

import { useIntervalEffect } from '@react-hookz/web'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC, PropsWithChildren, useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Temporal } from 'temporal-polyfill'
import styles from './countdown.module.css'

type TCountdownProps = {
	className?: string
	date: string
}

type TAnimatedTextProps = {
	fontSize?: string
	className?: string
}

const AnimatedText: FC<PropsWithChildren<TAnimatedTextProps>> = ({ className, children, fontSize }) => {
	const { current: initialFontSize } = useRef(fontSize)

	return (
		<motion.span
			className={className}
			initial={{
				fontSize: initialFontSize,
			}}
			animate={{
				fontSize: fontSize,
			}}
		>
			{children}
		</motion.span>
	)
}

const LARGE_FONT_SIZE = '32px'
const SMALL_FONT_SIZE = '10px'

export const Countdown: FC<TCountdownProps> = ({ className, date }) => {
	const [intervalDuration, setIntervalDuration] = useState<number | undefined>(1000)

	const { current: timezone } = useRef(Temporal.Now.timeZone())
	const { current: finalDate } = useRef(Temporal.Instant.from(date).toZonedDateTimeISO(timezone))

	const [duration, setDuration] = useState<{ days: number; hours: number; minutes: number; seconds: number }>()

	const updateDuration = useCallback(() => {
		const time = Temporal.Now.zonedDateTimeISO()
		const { days, hours, minutes, seconds } = time.until(finalDate, { largestUnit: 'days' })

		if ([days, hours, minutes, seconds].every((time) => time <= 0)) {
			setDuration({ days: 0, hours: 0, minutes: 0, seconds: 0 })
			setIntervalDuration(undefined)
			return
		}

		setDuration({ days, hours, minutes, seconds })
	}, [finalDate])

	useLayoutEffect(() => {
		updateDuration()
	}, [updateDuration])

	useIntervalEffect(updateDuration, intervalDuration)

	return (
		<motion.div
			layout
			layoutRoot
			className={clsx(
				styles.container,
				className,
				'flex',
				'flex--direction-column',
				'flex--align-items-center',
				'bold',
				'user-select--none'
			)}
			initial={{ opacity: 0 }}
			animate={{
				opacity: duration ? 1 : 0,
			}}
		>
			<AnimatedText className={clsx(styles.header)} fontSize={SMALL_FONT_SIZE}>
				remaining
			</AnimatedText>

			<motion.div className={clsx(styles.countdown)}>
				<AnimatedText className={styles['days--value']} fontSize={LARGE_FONT_SIZE}>
					{duration?.days || 0}
				</AnimatedText>
				<AnimatedText className={clsx(styles['days--label'])} fontSize={SMALL_FONT_SIZE}>
					Days
				</AnimatedText>

				<AnimatedText className={styles.divider} fontSize={LARGE_FONT_SIZE}>
					<span className={styles.spacer} />
				</AnimatedText>

				<AnimatedText className={styles['hours--value']} fontSize={LARGE_FONT_SIZE}>
					{String(duration?.hours || 0).padStart(2, '0')}
				</AnimatedText>
				<AnimatedText className={clsx(styles['hours--label'])} fontSize={SMALL_FONT_SIZE}>
					Hours
				</AnimatedText>

				<AnimatedText className={styles.divider} fontSize={LARGE_FONT_SIZE}>
					:
				</AnimatedText>

				<AnimatedText className={styles['minutes--value']} fontSize={LARGE_FONT_SIZE}>
					{String(duration?.minutes || 0).padStart(2, '0')}
				</AnimatedText>
				<AnimatedText className={clsx(styles['minutes--label'])} fontSize={SMALL_FONT_SIZE}>
					Minutes
				</AnimatedText>

				<AnimatedText className={styles.divider} fontSize={LARGE_FONT_SIZE}>
					:
				</AnimatedText>

				<AnimatedText className={styles['seconds--value']} fontSize={LARGE_FONT_SIZE}>
					{String(duration?.seconds || 0).padStart(2, '0')}
				</AnimatedText>
				<AnimatedText className={clsx(styles['seconds--label'])} fontSize={SMALL_FONT_SIZE}>
					Seconds
				</AnimatedText>
			</motion.div>
		</motion.div>
	)
}
