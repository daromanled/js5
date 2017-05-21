/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    let el = document.createElement('div');
    el.draggable = true;
    el.classList.add('draggable-div');
    el.style.width = (Math.random()*300).toFixed()+'px';
    el.style.height = (Math.random()*300).toFixed()+'px';
    el.style.backgroundColor = '#'+Math.random().toString(16).slice(-6);
    el.style.position = 'absolute';
    el.style.top = (Math.random()*document.body.clientWidth).toFixed()+'px';
    el.style.left = (Math.random()*document.body.clientWidth).toFixed()+'px';
    return el;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
}
let a = homeworkContainer.querySelector('#addDiv');
a.addEventListener('click', function() {
    let b = createDiv();
    homeworkContainer.appendChild(b);
    addListeners(b);
});
export {
    createDiv
};
