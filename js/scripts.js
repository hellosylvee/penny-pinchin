var category = ["restaurants", "groceries", "rent/mortgage", "auto", "entertainment", "savings", "clothing", "medical", "miscellaneous"];
var total = 0;

$(document).ready(function(){
  var entryNumber = 0;

  $('button').on('click', function(){
    console.log('Description is: ' + description + ' and total is: $' + total);

    var description = $('#descriptionInput').val();
    var amount = $('#amountInput').val();
    var category = $('#categoryMenu').val();
    var removeBtn;

    // console.log('this is the date: ' + date.value);
    entryNumber += 1;
    console.log('what is this? ' + removeBtn);
    $('#table > tbody:last-child').prepend(
      '<tr><td>' + entryNumber + '</td><td>' + description + '</td><td>' + category + '</td><td>' + amount + '</td></tr>' );
    $('#descriptionInput').val('');
    $('#amountInput').val('');
    total += parseFloat(amount)
    $('.totalAmount').html(total);

    // console.log('Description is: ' + description + ' and new total is: $' + total);
    // console.log('Category is: ' + category);
  });

  $('#table').on('click', 'button', function(){
    $(this).closest ('tr').remove ();
  });

  console.log("hello");
});
