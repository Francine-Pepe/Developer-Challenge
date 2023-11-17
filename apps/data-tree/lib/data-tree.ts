export type TTreeLeaf = {
	id: string
	parent: string | null
	label: string
	children?: TDataTree
}

export type TDataTree = TTreeLeaf[]

export const dataTree: TDataTree = [
	{
		id: 'b38aad117bec',
		parent: null,
		label: 'Level 1',
	},
	{
		id: '5457506d3294',
		parent: null,
		label: 'Level 2',
	},
	{
		id: '05b9ca09b68f',
		parent: null,
		label: 'Level 3',
	},
	{
		id: 'a2708626fbff',
		parent: 'b38aad117bec',
		label: 'Level 1-1',
	},
	{
		id: '3d9591be525b',
		parent: 'b38aad117bec',
		label: 'Level 1-2',
	},
	{
		id: 'd66177137e56',
		parent: 'b38aad117bec',
		label: 'Level 1-3',
	},
	{
		id: 'd70c944eb454',
		parent: '5457506d3294',
		label: 'Level 2-1',
	},
	{
		id: '9f8275b44d0b',
		parent: '5457506d3294',
		label: 'Level 2-2',
	},
	{
		id: 'eli2dq4hd6sy',
		parent: '05b9ca09b68f',
		label: 'Level 3-1',
	},
	{
		id: 'urjxrku1ppg7',
		parent: '05b9ca09b68f',
		label: 'Level 3-2',
	},
	{
		id: 'q5eobndgyqok',
		parent: 'eli2dq4hd6sy',
		label: 'Level 3-1-1',
	},
	{
		id: 'wuap6a8gis78',
		parent: 'eli2dq4hd6sy',
		label: 'Level 3-1-2',
	},
	{
		id: 'yx1qmrclkvy0',
		parent: 'urjxrku1ppg7',
		label: 'Level 3-2-1',
	},
]

export const nestedDataTree = [
	{
		id: 'b38aad117bec',
		parent: null,
		label: 'Level 1',
		children: [
			{
				id: 'a2708626fbff',
				parent: 'b38aad117bec',
				label: 'Level 1-1',
			},
			{
				id: '3d9591be525b',
				parent: 'b38aad117bec',
				label: 'Level 1-2',
			},
			{
				id: 'd66177137e56',
				parent: 'b38aad117bec',
				label: 'Level 1-3',
			},
		],
	},
	{
		id: '5457506d3294',
		parent: null,
		label: 'Level 2',
		children: [
			{
				id: 'd70c944eb454',
				parent: '5457506d3294',
				label: 'Level 2-1',
			},
			{
				id: '9f8275b44d0b',
				parent: '5457506d3294',
				label: 'Level 2-2',
			},
		],
	},
	{
		id: '05b9ca09b68f',
		parent: null,
		label: 'Level 3',
		children: [
			{
				id: 'eli2dq4hd6sy',
				parent: '05b9ca09b68f',
				label: 'Level 3-1',
				children: [
					{
						id: 'q5eobndgyqok',
						parent: 'eli2dq4hd6sy',
						label: 'Level 3-1-1',
					},
					{
						id: 'wuap6a8gis78',
						parent: 'eli2dq4hd6sy',
						label: 'Level 3-1-2',
					},
				],
			},
			{
				id: 'urjxrku1ppg7',
				parent: '05b9ca09b68f',
				label: 'Level 3-2',
				children: [
					{
						id: 'yx1qmrclkvy0',
						parent: 'urjxrku1ppg7',
						label: 'Level 3-2-1',
					},
				],
			},
		],
	},
]
