$(document).ready( function(){

	var xarray=[];
	var oarray=[];
	var turn= 1;

	$('td a').click(function() {

		if ($(this).text() != "X" && $(this).text() != "O" ) {

			if (turn % 2 ===0) {

				$(this).text("O");
				oarray.push($(this).parent().attr('id'));
				turn +=1;				
				if( check_win(oarray) === true) {
					alert("O wins");
				}
			}

			else {

				$(this).text("X");
				xarray.push($(this).parent().attr('id'));
				turn +=1;
				if (check_win(xarray) === true) {
					alert("X wins");
				}
			}
		}
		else {
			alert("Pick another grid cell to place your X or O")
		}

	});	

	function check_win(array) {
		if (array.indexOf('1') != -1
			&& array.indexOf('2') != -1
			&& array.indexOf('3') != -1) 
		{
			return true;
		}
		else if  (array.indexOf('4') != -1
			&& array.indexOf('5') != -1
			&& array.indexOf('6') != -1) 
		{
			return true;
		}
		else if (array.indexOf('7') != -1
			&& array.indexOf('8') != -1
			&& array.indexOf('9') != -1) 
		{
			return true;
		}
		else if (array.indexOf('1') != -1
			&& array.indexOf('5') != -1
			&& array.indexOf('9') != -1) 
		{
			return true;
		}
		else if (array.indexOf('3') != -1
			&& array.indexOf('5') != -1
			&& array.indexOf('7') != -1) 
		{
			return true;
		}
		else if (array.indexOf('2') != -1
			&& array.indexOf('5') != -1
			&& array.indexOf('8') != -1) 
		{
			return true;
		}
		else if (array.indexOf('1') != -1
			&& array.indexOf('4') != -1
			&& array.indexOf('7') != -1) 
		{
			return true;
		}
		else if (array.indexOf('3') != -1
			&& array.indexOf('6') != -1
			&& array.indexOf('9') != -1) 
		{
			return true;
		}
		else
		{
			return false;
		}
	}
});