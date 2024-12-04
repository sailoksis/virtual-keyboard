const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const textareaDiv = document.createElement('textarea');
textareaDiv.classList.add('main__textarea');

const keyboardDiv = document.createElement('div');
keyboardDiv.id = 'keyboard';
textareaDiv.setAttribute('placeholder', 'Введите текст...');
textareaDiv.setAttribute('aria-label', 'Текстовое поле для ввода');

containerDiv.append(textareaDiv, keyboardDiv);
document.body.append(containerDiv);

const layouts = {
  ru: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace'],
    ['Tab','й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','Del'],
    ['CapsLock','ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift','я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.','Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space','Alt','Ctrl', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  ],
  en: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace'],
    ['Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'" , 'Enter'],
    ['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space','Alt','Ctrl', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  ]
};
function renderKeyboard(layout) {
  // Очистим клавиатуру перед началом (на случай, если она уже существует)
  keyboardDiv.innerHTML = '';

  // Проходимся по каждой строке в раскладке
  layout.forEach(row => {
    // Создаём элемент для строки
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('keyboard-row'); // Добавим класс для стилей

    // Проходимся по каждой клавише в строке
    row.forEach(key => {
      // Создаём элемент для клавиши
      const keyButton = document.createElement('button');
      keyButton.classList.add('keyboard-key'); // Добавим класс для стилей
      keyButton.textContent = key; // Устанавливаем текст клавиши

      // Добавляем клавишу в строку
      rowDiv.appendChild(keyButton);
    });

    // Добавляем строку в клавиатуру
    keyboardDiv.appendChild(rowDiv);
  });
}
let currentLayout = localStorage.getItem('keyboardLayout') || 'en';

// Функция для переключения раскладки
function switchLayout() {
  currentLayout = currentLayout === 'en' ? 'ru' : 'en'; // Переключаем раскладку
  renderKeyboard(layouts[currentLayout]); // Перерисовываем клавиатуру
}

// Обработчик событий для клавиш
document.addEventListener('keydown', (event) => {
  // Проверяем, нажаты ли одновременно Shift и Alt
  if (event.shiftKey && event.altKey) {
    event.preventDefault(); // Отменяем стандартное действие (если есть)
    switchLayout(); // Переключаем раскладку
  }
});

// Отрисуем начальную раскладку
renderKeyboard(layouts[currentLayout]);
const layoutIndicator = document.createElement('div');
layoutIndicator.textContent = `Current layout: ${currentLayout}`;
layoutIndicator.classList.add('layout-indicator'); // Класс для стилей
document.body.appendChild(layoutIndicator);

function updateLayoutIndicator() {
  layoutIndicator.textContent = `Current layout: ${currentLayout}`;
}

function switchLayout() {
  currentLayout = currentLayout === 'en' ? 'ru' : 'en';
  renderKeyboard(layouts[currentLayout]);
  updateLayoutIndicator();
}




function switchLayout() {
  currentLayout = currentLayout === 'en' ? 'ru' : 'en';
  localStorage.setItem('keyboardLayout', currentLayout); // Сохраняем раскладку
  renderKeyboard(layouts[currentLayout]);
  updateLayoutIndicator();
}

keyboardDiv.addEventListener('click', (event) => {
  const target = event.target;

  // Проверяем, является ли элемент клавишей
  if (!target.classList.contains('keyboard-key')) return;

  const key = target.textContent; // Получаем текст клавиши

  // Логика обработки ввода
  switch (key) {
    case 'Backspace':
      textareaDiv.value = textareaDiv.value.slice(0, -1); // Удаляем последний символ
      break;

    case 'Enter':
      textareaDiv.value += '\n'; // Переход на новую строку
      break;

    case 'Tab':
      textareaDiv.value += '\t'; // Добавляем табуляцию
      break;

    default:
      textareaDiv.value += key; // Добавляем текст клавиши в текстовое поле
      break;
  }
}); //клик по кнопке и кнопка в ареа



/*const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const textareaDiv = document.createElement('textarea');
textareaDiv.classList.add('main__textarea');

const keyboardDiv = document.createElement('div');
keyboardDiv.id = 'keyboard';

const textDiv = document.createElement('div');
textDiv.id = 'main__text';
textDiv.textContent = 'Для переключения языка комбинация: левые alt + shift';

containerDiv.append(textareaDiv, keyboardDiv, textDiv);
document.body.append(containerDiv);

const keyboard = {
  ru: [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],
  eng: [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32]
};

function init() {
  let out = '';
  for (let i = 0; i < keyboard.ru.length; i++) {
    if (i == 13 || i == 26 || i == 37) {
      out += '<div class="clearfix"></div>';
    }
    out += `<div class='buttons' data='${keyboard.ru[i]}' >${String.fromCharCode(keyboard.ru[i])}</div>`;
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

document.addEventListener('keydown', function (event) {
  const button = document.querySelector(
    `#keyboard .buttons[data="${event.key.charCodeAt(0)}"]`
  );

  if (button) {
    button.classList.add('active');
    setTimeout(function () {
      button.classList.remove('active');
    }, 200);
  }
  textarea.value += event.key;
});

let currentLayout = 'ru';
document.addEventListener('keydown', function (event) {
  if (event.altKey && event.shiftKey) {
    currentLayout = currentLayout === 'ru' ? 'eng' : 'ru';
    let out = '';
    const langLayout = keyboard[currentLayout];
    for (let i = 0; i < langLayout.length; i++) {
      if (i == 13 || i == 26 || i == 37) {
        out += '<div class="clearfix"></div>';
      }
      out += `<div class='buttons' data='${langLayout[i]}'>${String.fromCharCode(langLayout[i])}</div>`;
    }
    document.querySelector('#keyboard').innerHTML = out; 
  }
});


const textarea = document.querySelector('.main__textarea');
const keyboardButtons = document.querySelectorAll('#keyboard .buttons');

keyboardButtons.forEach(button => {
  button.addEventListener('click', function() {
    textarea.value += this.textContent;
  });
}); */