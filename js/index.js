$(function() {
//starter code

	//status of lights

	var lights = 'on';

	//click event

	$('#light_switch').click(switchLights);

	function switchLights(){

		if(lights == 'on') {
			console.log("lights are on, turn them off!");
			lights = 'off';
			//$('body').css('background-color', 'black');
			$('body').addClass('dark');

		} else {
			console.log("lights are off, turn them on");
			lights = 'on';
			//$('body').css('background-color', 'white');
			$('body').addClass('light');
		}

	}

	//lights conditional

	//if lights are on, turn them off

	//if lights are off (else) turn them on

});