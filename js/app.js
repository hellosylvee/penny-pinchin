$(document).ready(function(){
  var entryNumber = 0;

  $('button').on('click', function(){
    // console.log('Description is: ' + description + ' and total is: $' + total);

    var date = document.querySelector('input[type="date"]');
    var description = $('#descriptionInput').val();
    var amount = $('#amountInput').val();
    var category = $('#categoryMenu').val();

    console.log('this is the date: ' + date.value);
    entryNumber += 1;

    $('#table > tbody:last-child').prepend(
      '<tr><td>' + entryNumber + '</td><td>' + date.value + '</td><td>' + description + '</td><td>' + category + '</td><td>' + amount + '</td><td><button class="removeEntryBtn">Delete</button></td></tr>' );
    $('#descriptionInput').val('');
    $('#amountInput').val('');
    total += parseFloat(amount)
    $('.totalAmount').html(total);

    console.log('Description is: ' + description + ' and new total is: $' + total);
    console.log('Category is: ' + category);
  });

  $('#table').on('click', 'button', function(){
    console.log(this);
    $(this).closest ('tr').remove();
  });

  console.log("hello");
  console.log("this is the total " + total);
});
