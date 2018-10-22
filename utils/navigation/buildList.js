const buildFolderUrl = require('./buildFolderUrl')

function buildList(history) {
  return history.map(item => ({
    ...item,
    href: buildFolderUrl(item.hash, '')
  }));
}

module.exports = buildList