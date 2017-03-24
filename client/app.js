var socket = io();

// executes socket.io function

$('form').on('submit',function () {
    var text = $('#message').val();
    socket.emit('message', text);
    $('#message').val('');
    return false;
});

// watches the form, and upon submit, sends you an alert
// alert later appended to what the socket emits - i.e. the message the user inputted


socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});

