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

				if (oarray.indexOf('2') != -1
					&& oarray.indexOf('5') != -1
					&& oarray.indexOf('8') != -1) {
					alert("O wins")
				}
			}

			else {

				$(this).text("X");
				xarray.push($(this).parent().attr('id'));
				turn +=1;
			}
		}
		else {
			alert("Pick another grid cell to place your X or O")
		}

	});	

});