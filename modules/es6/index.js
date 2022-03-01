import liquidos from './es6'
import $ from 'jquery'; 

window.jQuery = $;

console.log(liquidos);
console.log($);

$.each(liquidos, (index, value) => {
    console.log(index, value); 
}); 