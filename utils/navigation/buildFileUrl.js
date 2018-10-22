function buildFileUrl(parentHash, path) {
  return `/content/${parentHash}/${path}`;
}

module.exports = buildFileUrl