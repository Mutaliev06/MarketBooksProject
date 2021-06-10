const { Router } = require('express')
const router = Router();

router.use(require('./books'));

router.use(require('./reviews'));

router.use(require('./genres'));

router.use(require('./upload'));

module.exports = router;