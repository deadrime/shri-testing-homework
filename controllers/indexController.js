const { gitHistory } = require('../utils/git');
const { buildBreadcrumbs, buildList } = require('../utils/navigation');

module.exports = function(req, res) {
  gitHistory(1, 20).then(
    history => {
      res.render('index', {
        title: 'history',
        breadcrumbs: buildBreadcrumbs(),
        list: buildList(history)
      });
    },
    err => next(err)
  );
};
