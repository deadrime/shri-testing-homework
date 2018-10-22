function buildFolderUrl(parentHash, path = '') {
  return `/files/${parentHash}/${path}`;
}

module.exports = buildFolderUrl