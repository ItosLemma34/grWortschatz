import { allWords } from './getWordsList.js';
import { wordExamples } from './wordExamples.js';
"use strict";

const EnterKey = 13;
const ScrollDebounce = 500; // ms

class DropDown {
	input = null;
	select = null;
	options = {};

	lastAutoScroll = null;

	constructor(input, dropdown) {
		this.input = input;
		this.dropdown = dropdown;

		allWords.forEach((word) => {
			const option = document.createElement('option');
			option.value = word;
			option.textContent = word;
			this.dropdown.appendChild(option);
			this.options[this.normalize(word)] = option;
		});

		this.input.addEventListener('input', e => this.handleTextInput(e));

		this.input.addEventListener('keydown', (e) => {
			if (e.keyCode === EnterKey) {
				const showExamplesButton = this.displaySelectedWord(dropdown.value);
				this.resetInputText();
				// Defer the focus move: if it happens synchronously while
				// this Enter key is still down, the keyup fires on the
				// button instead of the input and triggers its native
				// Enter-activates-button behavior, jumping straight to
				// the examples page.
				setTimeout(() => showExamplesButton.focus(), 0);
			}
		});

		this.dropdown.addEventListener('change', () => {
			this.displaySelectedWord(dropdown.value);
			this.dropdown.focus();
		});

		this.dropdown.addEventListener('click', () => {
			this.resetInputText();
			const showExamplesButton = this.displaySelectedWord(dropdown.value);
			showExamplesButton.focus();
		});

		this.dropdown.addEventListener('keydown', (e) => {
			if (e.keyCode === EnterKey) {
				displayExamples(dropdown.value);
			}
		});

		this.dropdown.addEventListener('scroll', (e) => {
			// Scroll events are created for both automated scroll events
			// triggered by find-as-you-type and those manually invoked by
			// scrolling. Differentiate both based on timing.
			if (!this.lastAutoScroll || (new Date() - this.lastAutoScroll) >= ScrollDebounce) {
				this.resetInputText();
			}
		});
	}

	displaySelectedWord(word) {
		const mainContainer = document.getElementById('main-container');
		mainContainer.innerHTML = `<div class="selected-word">${word}</div>`;

		// Always create and append "Show Examples" button
		const showExamplesButton = document.createElement('button');
		showExamplesButton.id = 'showExamplesButton';
		showExamplesButton.textContent = 'Bedeutung und Beispiele';
		mainContainer.appendChild(showExamplesButton);

		showExamplesButton.addEventListener('click', () => {
			displayExamples(word);
			this.input.focus();
		});

		return showExamplesButton;
	}

	reset() {
		this.resetInputText();
		for (const word in this.options) {
			this.options[word].selected = false;
		}
	}

	resetInputText() {
		this.input.value = '';
	}

	sessionWordSelect(sessionWord) {
		this.lastAutoScroll = new Date();
		this.dropdown.value = sessionWord;
		this.displaySelectedWord(sessionWord);
	}

	randomSelect() {
		this.lastAutoScroll = new Date();
		const randomIdx = Math.floor(Math.random() * allWords.length);
		this.reset();
		const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
		wordDropdown.value = randomWord;
		const showExamplesButton = this.displaySelectedWord(randomWord);
		showExamplesButton.focus();
	}

	handleTextInput(e) {
		this.lastAutoScroll = new Date();
		const match = this.matchPrefix(e.target.value);
		if (match) {
			const option = this.options[this.normalize(match)];
			option.selected = true;
		}
	}

	matchPrefix(searchTerm) {
		for (let word of allWords) {
			if (this.normalize(word).startsWith(this.normalize(searchTerm))) {
				return word;
			}
		}

		return null;
	}

	// Normalize text by turning it consistently into lower case and
	// matching ä as a, ö as o, ü as u and ß as ss.
	normalize(text) {
		let normalized = '';

		for (let ch of text) {
			ch = ch.toLowerCase();

			switch (ch) {
			case 'ä':
				normalized += 'a';
				break;
			case 'ö':
				normalized += 'o';
				break;
			case 'ü':
				normalized += 'u';
				break;
			case 'ß':
				normalized += 'ss';
				break;
			default:
				if (this.isLetter(ch)) normalized += ch;
			};
		}

		return normalized;
	}

	isLetter(str) {
		return str.length === 1 && str.match(/[a-z]/i);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const findAsYouType = document.getElementById('find-as-you-type');
	const wordDropdown = document.getElementById('wordDropdown');
	const dropDown = new DropDown(findAsYouType, wordDropdown);
	const randomSelectButton = document.getElementById('randomSelectButton');

	// Check if there's a stored word from the session
	const sessionWord = sessionStorage.getItem('returnWord');
	if (sessionWord) {
		dropDown.sessionWordSelect(sessionWord);
	}

	randomSelectButton.addEventListener('click', () => {
		dropDown.randomSelect();
	});

	document.addEventListener('click', (e) => {
		if (e.target === findAsYouType) return;
		if (wordDropdown.contains(e.target)) return;
		// Random word/phrase moves focus to the "Show Examples" button
		// itself; don't yank it back to the input.
		if (randomSelectButton.contains(e.target)) return;
		const selection = window.getSelection();
		if (selection && selection.toString().length > 0) return;
		findAsYouType.focus();
	});

	findAsYouType.focus();

	window.addEventListener('pageshow', (e) => {
		if (e.persisted) findAsYouType.focus();
	});
});

function displayExamples(word) {
	const mainContainer = document.getElementById('main-container');
	mainContainer.innerHTML = '';

	const examples = wordExamples[word] || [];

	// The header (word title + first entry, which is the definition/
	// translation block) stays pinned to the top while the remaining
	// literary examples scroll underneath it.
	const header = document.createElement('div');
	header.classList.add('main-container-header');
	header.innerHTML = `<div class="selected-word">${word}</div>`;

	if (examples.length > 0) {
		const definitionElement = document.createElement('div');
		definitionElement.innerHTML = examples[0];
		definitionElement.classList.add('example');
		definitionElement.classList.add('main-container-item');
		header.appendChild(definitionElement);
	}

	mainContainer.appendChild(header);

	examples.slice(1).forEach((example) => {
		const exampleElement = document.createElement('div');
		exampleElement.innerHTML = example;
		exampleElement.classList.add('example');
		exampleElement.classList.add('main-container-item');
		mainContainer.appendChild(exampleElement);
	});
}
