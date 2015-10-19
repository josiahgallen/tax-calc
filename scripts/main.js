'use strict';
var $ = require('jquery');
var $form = $('#submit');
var $subTotal = $('#subTotal');
var $state = $('#state');
var $result = $('#result');


$form.on('submit', function (e) {
	e.preventDefault();
	var taxRate = 0;
	var formatedState = $state.val().toUpperCase();
	console.log(formatedState);
	var formatedSubTotal = parseFloat($subTotal.val());
	console.log(formatedSubTotal);
	$result.html('What is the Order Amount? $' + formatedSubTotal.toFixed(2) + ' What is the state? ' + $state.val() + ' The total is $' + formatedSubTotal.toFixed(2));
	if (formatedState === 'WI' || formatedState === 'WISCONSIN') {
		taxRate = 0.055
		var totalTax = formatedSubTotal * taxRate;
		console.log(totalTax);
		var total = totalTax + formatedSubTotal;
		console.log(total);
		$result.html('What is the Order Amount? $' + formatedSubTotal.toFixed(2) + ' What is the state? ' + $state.val() + ' The sub-total is $' + formatedSubTotal.toFixed(2) +' The tax is $' + totalTax + ' The total is $' + parseFloat(Math.round(total * 100) / 100).toFixed(2));
	}
});