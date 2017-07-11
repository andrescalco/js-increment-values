let app = (function(){

    let valores = {
	    'value-1' : 0,
	    'value-2' : 0,
	    'value-3' : 0,
	    'value-4' : 0
    }

	let value_1 = document.querySelector('.value-1');
	let value_2 = document.querySelector('.value-2');
	let value_3 = document.querySelector('.value-3');
	let value_4 = document.querySelector('.value-4');

    function setValues(target,value){
    	valores[target] = valores[target] + value;
    	render();
    }

    function render() {
		value_1.innerText = valores['value-1'];
		value_2.innerText = valores['value-2'];
		value_3.innerText = valores['value-3'];
		value_4.innerText = valores['value-4'];
    }

    function init() {
    	render();
    }

    return {
        render : render,
        init : init,
        setValues : setValues
    }

})();

document.addEventListener('DOMContentLoaded', function() {

	app.init();

});
