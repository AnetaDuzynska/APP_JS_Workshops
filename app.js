$(function () {
    var BASE_URL = 'http://localhost:8282';

    function getAllBooks() {
        $('#container').empty();
        $.ajax({
            url: BASE_URL + '/books',
            method: 'get',
            dataType: 'json'
        }).done(function (result) {
            result.forEach(function (elem) {
                var newDiv = $('<div>');
                newDiv.html('<h3>' + elem.title + '</h3>');
                $('#container').append(newDiv);
            });
        });
    };
    $('#addButton').on('click', function (e) {
        e.preventDefault();
        var newBook = {
            title: $('#title').val(),
            isbn: $('#isbn').val(),
            author: $('#author').val(),
            publisher: $('#publisher').val(),
            type: $('#type').val()
        };
        $.ajax({
            url: BASE_URL + '/books',
            method: 'POST',
            data: JSON.stringify(newBook),
            contentType: 'application/json'
        }).done(function () {
            getAllBooks();
            $('#title').val('');
            $('#isbn').val('');
            $('#author').val('');
            $('#publisher').val('');
            $('#type').val('');
        });
    });
    getAllBooks();
});

// $(function() {
// ​
//   var BASE_URL = 'http://localhost:8282';
// ​
//   function getAllBooks() {
//   ​
//     $('#container').empty();
// ​
//     $.ajax({
//         url: BASE_URL + '/books',
//         method: 'GET',
//         dataType: 'json'
//     }).done(function(result) {
//     ​
//       result.forEach(function(element) {
//           var newDiv = $('<div>');
//           newDiv.html('<h3>' + element.title +'</h3>')
//           $('#container').append(newDiv);
//       });
// ​
//     });
//   };
// ​
//   $('#addButton').on('click', function(e) {
//       e.preventDefault();
//       var newBook = {
//           title: $('#title').val(),
//           isbn: $('#isbn').val(),
//           author: $('#author').val(),
//           publisher: $('#publisher').val(),
//           type: $('#type').val()
//       };
//       $.ajax({
//           url: BASE_URL + "/books",
//           method: 'POST',
//           data: JSON.stringify(newBook),
//           contentType: 'application/json'
//       }).done(function() {
//           getAllBooks();
//           $('#title').val('');
//           $('#isbn').val('');
//           $('#author').val('');
//           $('#publisher').val('');
//           $('#type').val('');
//       });
//   });
// ​
//   getAllBooks();
// ​
// });