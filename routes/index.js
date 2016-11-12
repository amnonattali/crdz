var express = require('express');
var router = express.Router();

/**
 * GET /auth - get current user
 * Request: none
 * Response:
 *     success: true if there is user
 *     user: username if success
 */
router.get('/auth', function(req, res, next) {
	if (req.session.username) {
		res.json({
			'success': true,
			'username': req.session.username
		});
	}
	else {
		res.json({
			'success': false
		});
	}
});

/**
 * POST /login - log in a user
 * Request:
 *     username: username of user
 * Response:
 *     success: true if login is success
 *     user: username if success
 */
router.post('/login', function(req, res, next) {
	if (req.body.username.length > 0 && req.body.username.match("^[a-z0-9_-]{3,16}$") && !req.session.username) {
		req.session.username = req.body.username;
		res.json({
			'success': true,
			'username': req.session.username
		});
	} else {
		res.json({
			'success': false,
		});
	}
});

router.post('/logout', function(req, res, next) {
	if (req.session.username) {
		req.session.destroy();
		res.json({
			'success': true
		});
	} else {
		res.json({
			'success': false
		});
	}
});

module.exports = router;