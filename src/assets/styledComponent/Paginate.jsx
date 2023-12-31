import {styled} from 'styled-components'

const Paginate=styled.div`
    
.pagination {
	list-style: none;
	margin: 0 auto;
	padding: 0;
	
	display: flex;
	gap: 0.5em;
	flex-wrap: nowrap;
	width: fit-content;
}

.pagination li {
	text-decoration: none;
	padding: 0;
	text-align: center;
}

.pagination li > * {
	--size: 2em;
	display: inline-block;
	width: var(--size);
	line-height: var(--size);
	aspect-ratio: 1;
	border: 1px solid currentcolor;
}

.pagination li a {
	color: blue;
	text-decoration: none;
}
.pagination li a:hover,
.pagination li a:focus {
	background: #0000FF22;
}

.pagination li[data-pagination-current] a {
	color: #fff;
	background: blue;
	border-color: blue;
}

.pagination li[data-pagination-current] a:hover,
.pagination li[data-pagination-current] a:focus {
	color: blue;
	background: #0000FF22;
}

.pagination li[data-pagination-ellipsis],
.pagination li[data-pagination-disabled] {
	color: #ccc;
}

.pagination li[data-pagination-ellipsis] > *,
.pagination li[data-pagination-disabled] > *,
.pagination li[data-pagination-first] > *,
.pagination li[data-pagination-prev] > *,
.pagination li[data-pagination-next] > *,
.pagination li[data-pagination-last] > * {
	border-color: transparent;
}

/* Instructions + Tweak Settings */
h2 {
	margin: 3rem auto 0.75rem;
}
fieldset {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 0.5em;
}
label {
	text-align: right;
}


/* General Styles */
html, body {
	height: 100%;
	width: 100%;
    margin: 0;
    padding: 0;
}
body {
	display: grid;
	place-items: center;
}
#root {
	margin: 4em 0;
}
main > :not(root) {
	text-align: center;
}
main > :not(#root) a {
	color: blue;
}
`

export default Paginate