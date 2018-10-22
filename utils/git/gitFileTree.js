const executeGit = require('./executeGit')
const parseFileTreeItem = require('./parseFileTreeItem')

function gitFileTree(hash, path) {
  const params = ['ls-tree', hash];
  path && params.push(path);

  return executeGit('git', params).then(data => {
    return data
      .split('\n')
      .filter(Boolean)
      .map(parseFileTreeItem);
  });
}

module.exports = gitFileTree