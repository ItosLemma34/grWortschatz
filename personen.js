"use strict";
document.addEventListener('DOMContentLoaded', function () {
	renderPersonen();
});

window.addEventListener('hashchange', function() {
	renderPersonen();
});

function showPersonen(bookId) {
	window.location.hash = '#!/' + bookId;
}

function renderPersonen() {
	let bookId = window.location.hash.replace('#!/', '');
	if (!bookId) {
		bookId = 'personen-placeholder';
	}
	const element = document.getElementById(bookId);

	const parentDiv = document.getElementById('main-container');

	// Reset all children and hide
	if (parentDiv) {
		for (const child of parentDiv.children) {
			child.style.display = 'none';
		}
	}

	// Show Personen of selected book
	if (element) {
		element.style.display = 'block';
	}
}
