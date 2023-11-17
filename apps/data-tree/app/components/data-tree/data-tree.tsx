import { FC } from 'react'
import { TDataTree, TTreeLeaf } from '../../../lib/data-tree'
import styles from './data-tree.module.css'

const TreeLeaf: FC<TTreeLeaf> = (props) => {
	const { label, children } = props

	if (children) {
		return (
			<details className={styles.leaf} open>
				<summary>{label}</summary>
				{children && <DataTree data={children} />}
			</details>
		)
	}

	return <div className={styles.leaf}>{label}</div>
}

export const DataTree: FC<{ data: TDataTree; showAsJson?: boolean }> = ({ data, showAsJson = false }) => {
	return (
		<div className={styles.branch}>
			{showAsJson ? (
				<pre>{JSON.stringify(data, null, 2)}</pre>
			) : (
				data.map((item) => <TreeLeaf {...item} key={item.id} />)
			)}
		</div>
	)
}
