$(document).ready(function() {

	var socket = io();

	var reload = function() {
		$.get('/auth', function(resp) {
			if (resp.success) {
				$('#current-username').text(resp.username);
				$('#login-section').hide();
			}
			else {
				$('#game-section').hide();
				$('#logout-section').hide();
			}
		});
	}

	reload();

	$('#login-button').click(function() {
		var user = $('#username-input').val();
		$.post('/login', {
			username: user
		}, function(resp) {
			if (resp.success) {
				$('#current-username').text(user);
				$('#game-section').show();
				$('#login-section').hide();
				$('#logout-section').show();
				socket.emit('login', user);
				reload();
			} else {
				alert("err");
			}
		});
	});

	$('#logout-button').click(function() {
		$.post('/logout', {}, function(resp){
			if (resp.success) {
				$('#logout-section').hide();
				$('#login-section').show();
				$('#current-username').text("(Not logged in!)");
				$('#game-section').hide();
			} else {
				alert("err");
			}
		});
	});	

	//socket
	socket.on('login', function(username) {
		
	});
});