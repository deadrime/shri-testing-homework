const executeGit = require('./executeGit')

function gitFileContent(hash) {
  return executeGit('git', ['show', hash]);
}

module.exports = gitFileContent