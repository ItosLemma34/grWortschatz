import { allWords } from './getWordsList.js';
import { wordExamples } from './wordExamples.js';
"use strict";
document.addEventListener('DOMContentLoaded', function () {
	const dropdown = document.getElementById('wordDropdown');

	allWords.forEach((word) => {
		const option = document.createElement('option');
		option.value = word;
		option.textContent = word;
		dropdown.appendChild(option);
	});

	// Check if there's a stored word from the session
	const sessionWord = sessionStorage.getItem('returnWord');
	if (sessionWord) {
		dropdown.value = sessionWord;
		displaySelectedWord(sessionWord);
	}

	document.getElementById('randomSelectButton').addEventListener('click', () => {
		const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
		dropdown.value = randomWord;
		displaySelectedWord(randomWord);
	});

	dropdown.addEventListener('change', () => {
		displaySelectedWord(dropdown.value);
	});
});

function displaySelectedWord(word) {
	const mainContainer = document.getElementById('main-container');
	mainContainer.innerHTML = `<div class="selected-word">${word}</div>`;

	// Always create and append "Show Examples" button
	const showExamplesButton = document.createElement('button');
	showExamplesButton.id = 'showExamplesButton';
	showExamplesButton.textContent = 'Bedeutung und Beispiele';
	mainContainer.appendChild(showExamplesButton);

	showExamplesButton.addEventListener('click', () => displayExamples(word));
}

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
