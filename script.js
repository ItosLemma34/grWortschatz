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
				this.displaySelectedWord(dropdown.value);
				this.resetInputText();
			}
		});

		this.dropdown.addEventListener('change', () => {
			this.displaySelectedWord(dropdown.value);
		});

		this.dropdown.addEventListener('click', () => {
			this.resetInputText();
			this.displaySelectedWord(dropdown.value);
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

		showExamplesButton.addEventListener('click', () => displayExamples(word));

		this.dropdown.focus();
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
		this.displaySelectedWord(randomWord);
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

	// Check if there's a stored word from the session
	const sessionWord = sessionStorage.getItem('returnWord');
	if (sessionWord) {
		dropDown.sessionWordSelect(sessionWord);
	}

	document.getElementById('randomSelectButton').addEventListener('click', () => {
		dropDown.randomSelect();
	});
});

function displayExamples(word) {
	const mainContainer = document.getElementById('main-container');
	mainContainer.innerHTML = `<div class="selected-word">${word}</div>`;

	const examples = wordExamples[word] || [];
	examples.forEach((example) => {
		const exampleElement = document.createElement('div');
		exampleElement.innerHTML = example;
		exampleElement.classList.add('example');
		exampleElement.classList.add('main-container-item');
		mainContainer.appendChild(exampleElement);
	});
}
