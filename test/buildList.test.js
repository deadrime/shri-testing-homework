const { buildList } = require('../utils/navigation/')

const expectedInput = new Array(10).fill(0).map((i, index) => {
  return {
    hash: index,
    author: 'test',
    timestamp: 'test',
    msg: 'test',
  }
})

const expectedOutput = expectedInput.map(i => {
  return {
    ...i,
    href: `/files/${i.hash}/`,
  }
})

it('Правильно генерируется список файлов', () => {
  const list = buildList(expectedInput)
  expect(list).toEqual(expectedOutput)
})
