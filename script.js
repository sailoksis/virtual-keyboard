let containerDiv = document.createElement('div');
containerDiv.classList.add('container');

let textareaDiv = document.createElement('textarea');
textareaDiv.classList.add('main__textarea');

let keyboardDiv = document.createElement('div');
keyboardDiv.id = 'keyboard';

containerDiv.appendChild(textareaDiv);
containerDiv.appendChild(keyboardDiv); // Добавляем keyboardDiv как дочерний элемент containerDiv
document.body.appendChild(containerDiv);
textareaDiv.value = 'Input some text';