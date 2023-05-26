$(document).ready(function() {
  var $table = $('#tableId');
  
  $table.find('tr').first().find('th').each(function(i) {
    $(this).click(function() {
      sortTable(i);
    });
  });

  function swapRows(array, row1, row2) {
    console.log(`${row1}, ${row2}`);
    for (let j = 0; j < array[0].length; j++) {
      let x = array[row1][j];
      array[row1][j] = array[row2][j];
      array[row2][j] = x;
    }
  }

  function sortTable(colIndex) {
    let array = [];
    $table.find('tr').each(function(i) {
      if (i === 0) return true; // continue to next iteration
      const row = $(this).find('td').map(function() {
        return $(this).text();
      }).get();
      array.push(row);
    });
    
    for (let i = 1; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i][colIndex] > array[j][colIndex]) {
          swapRows(array, i, j);
        }
      }
    }
    
    $table.find('tr').each(function(i) {
      if (i === 0) return true; // continue to next iteration
      const $row = $(this).find('td');
      for (let j = 0; j < array[i - 1].length; j++) {
        $row.eq(j).text(array[i - 1][j]);
      }
    });
  }
});