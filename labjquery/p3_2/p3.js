var matrix = [
		    [1, 2, 3, 4],
		    [5, 6, 7, 8],
		    [1, 2, 3, 4],
		    [5, 6, 7, 8]];

var finished = 8;
var choices  = [];
var tableContent = "";
var $table = $("#tableId");

for(i = 0; i < matrix.length; i++) {
	tableContent += "<tr>";
	for(j = 0; j < matrix[i].length; j++) {
		let x = i;
		let y = j;
		tableContent += `<td><img src="gray.jpg"></td>`;
	} 
	tableContent += "</tr>";
}
$table.html(tableContent);

$table.on("click", "td", function() {
	let x = $(this).parent().index();
	let y = $(this).index();
	changeCell(x, y);
});

function changeCell(x, y) {
	let $cell = $table.find(`tr:eq(${x}) td:eq(${y})`);
	$cell.html(`<img src="${matrix[x][y]}.jpg">`);
	$cell.off("click");
	if (choices.length == 0) {
		choices.push([x, y]);
	} else if (choices.length != 0 && (choices[choices.length-1][0] != x || choices[choices.length-1][1] != y)) {
		choices.push([x, y]);
	}
		    
	if (choices.length == 2) {
		let length = choices.length;
		let x1 = choices[length-2][0];
		let y1 = choices[length-2][1];

		let x2 = choices[length-1][0];
		let y2 = choices[length-1][1];
		console.log(`${x1}, ${y1}, ${x2}, ${y2}`);
		checkCells(x1, y1, x2, y2);
		choices = []
	}
}


function checkCells(x1, y1, x2, y2) {
	let $cell1 = $table.find(`tr:eq(${x1}) td:eq(${y1})`); 
	let $cell2 = $table.find(`tr:eq(${x2}) td:eq(${y2})`);
	let value1 = $cell1.html();
	let value2 = $cell2.html();
	if (value1 != value2) {
		setTimeout(function() {
			$cell1.html(`<img src="gray.jpg">`);
			$cell2.html(`<img src="gray.jpg">`);
			$cell1.on("click", function(){changeCell(x1, y1);});
			$cell2.on("click", function(){changeCell(x2, y2);});
		}, 2000);
	} else {
		finished--;
		if (finished == 0) {
			alert("You won!");
			location.reload();
		}
	}
}				