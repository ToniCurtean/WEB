$(document).ready(function() {
  var $table = $('#tableId');

  $table.find('tr').each(function(i) {
    var $header = $(this).find('th').eq(0);
    $header.click(function() {
      sortTable(i);
    });
  });

  function swapColumns(array, col1, col2) {
    for (let i = 0; i < array.length; i++) {
      let x = array[i][col1];
      array[i][col1] = array[i][col2];
      array[i][col2] = x;
    }
  }

  function sortTable(rowIndex) {
    let array = []
    $table.find('tr').each(function(i) {
      let row = $(this).find('td');
      array.push([]);
      for (let j = 0; j < row.length; j++) {
        array[i].push(row.eq(j).text())
      }
    });

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[rowIndex][i] > array[rowIndex][j]) {
          swapColumns(array, i, j);
        }
      }
    }

    $table.find('tr').each(function(i) {
      let $row = $(this).find('td');
      for (let j = 0; j < array[i].length; j++) {
        $row.eq(j).text(array[i][j]);
      }
    });
  }
});