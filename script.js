const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const textareaDiv = document.createElement('textarea');
textareaDiv.classList.add('main__textarea');

const keyboardDiv = document.createElement('div');
keyboardDiv.id = 'keyboard'; 
containerDiv.appendChild(textareaDiv);
containerDiv.appendChild(keyboardDiv); // Добавляем keyboardDiv как дочерний элемент containerDiv
document.body.appendChild(containerDiv);
textareaDiv.value = 'Input some text';

const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
//document.onkeypress = function(event) {
//   keyboard.push(event.charCode);
//    console.log(keyboard);
//}

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
      if (i == 13 || i == 26 || i == 37) {
        out += '<div class="clearfix"></div>';
      }
      out += '<div class="buttons" data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
  
    // добавляем обработчик событий после вызова функции init()
    document.addEventListener('keydown', function(event) {
      console.log(event.code);
      console.log(event.key);
      document.querySelector('#keyboard .buttons[data="' + event.key.charCodeAt(0) + '"]').classList.add('active');
    });
  }
  
  init();