# Goal

The data shown in "Your data structure" should be the same as the manually prepared data shown in "Target data structure"

## Task

- to start the app run `nx serve data-tree`
- adjust the function `mapTreeData` starting from #39 in `app/page.tsx`
- the input of the function should be the source data (dataTree)
- the output should be the correctly nested data as shown "Target data structure" (nestedDataTree)
- each item with a parent should be placed in the `children` property of its parent item
- the nesting should work recursively, no matter how deeps the items are nested

## Hints

- No library or other dependencies should be used
- You can use the most recent JavaScript features
- The only web resource to use should be [https://developer.mozilla.org/en-US/docs/Web/JavaScript]
