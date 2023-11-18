import { PageWrapper } from '@melting/shared/components/page-wrapper/page-wrapper'
import Link from 'next/link'
import { TDataTree, dataTree, nestedDataTree } from '../lib/data-tree'
import { DataTree } from './components/data-tree/data-tree'
import styles from './page.module.css'

export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const mappedData = mapTreeData(dataTree)

	return (
		<>
			<PageWrapper className={styles.container}>
				<div>
					<h3>Source data structure</h3>
					<DataTree data={dataTree} showAsJson={searchParams.showAsJson !== undefined} />
				</div>
				<div>
					<h3>Target data structure</h3>
					<DataTree data={nestedDataTree} showAsJson={searchParams.showAsJson !== undefined} />
				</div>
				<div>
					<h3>Your data structure</h3>
					<DataTree data={mappedData} showAsJson={searchParams.showAsJson !== undefined} />
				</div>
				{searchParams.showAsJson !== undefined ? (
					<Link className={styles.toggle} href={'/'}>
						Display UI
					</Link>
				) : (
					<Link className={styles.toggle} href={'/?showAsJson'}>
						Display as JSON
					</Link>
				)}
			</PageWrapper>
		</>
	)
}

const mapTreeData = (data: TDataTree = []): TDataTree => {
	const dataTree = {}
	const root: any[] = [] //multidimensional array

	data.forEach((item) => {
		dataTree[item.id] = {
			...item,
			children: [],
		}
	})

	data.forEach(function (item) {
		const parent = dataTree[item.parent]
		if (parent) {
			parent.children.push(dataTree[item.id])
		} else {
			root.push(dataTree[item.id])
		}
	})

	return root
}
