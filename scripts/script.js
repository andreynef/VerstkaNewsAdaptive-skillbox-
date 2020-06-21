$(function(){
	$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {
    $('.USD').html(data.Valute.USD.Nominal+" USD = "+ data.Valute.USD.Value+" Rub");
    $('.EUR').html(data.Valute.EUR.Nominal+" EUR = "+ data.Valute.EUR.Value+" Rub");
	});

$(window).resize(function(){
	if($(document).width() < 753) {
		$(".time-weather-items").prependTo('.main-container');
	}
	else {
		$(".time-weather-items").prependTo('.time-weather-box');
		
	}
});


});

