const gitHistory = require('./gitHistory')
const executeGit = require('./executeGit')

jest.genMockFromModule('./executeGit');
jest.mock('./executeGit')

const getGeneratedCommits = (offset, limit) => Array(100).fill(0)
  .map((i, index) => {
    return `hash${index}\tauthor${index}\ttimestamp${index}\tmsg${index}`
  })
  .splice(offset, limit)
  .join('\n')

executeGit.mockImplementation((...args) => {
  const offset = args[1][4]
  const size = args[1][6]
  return Promise.resolve(getGeneratedCommits(offset, size))
});

describe('gitHistory', () => {
  it('Правильно вызывается executeGit', async () => {
    const page = 1
    const size = 20
    const offset = (page - 1) * size;
    await gitHistory(page, size)
    const expectedInput = [
      'git',
      [
        "log",
        "--pretty=format:%H%x09%an%x09%ad%x09%s",
        "--date=iso",
        "--skip",
        offset,
        "-n",
        size,
      ]
    ]
    expect(executeGit).toBeCalledWith(...expectedInput)
  })

  it('Работает пагинация', async () => {
    const res = await gitHistory(2, 20)
    expect(res.length).toBe(20)
    expect(res[0].author).toBe('author20')
    expect(res[19].author).toBe('author39')
  })

  it('Правильная структура данных', async () => {
    const res = await gitHistory(2, 20)
    res.map(i => {
      expect(Object.keys(i)).toEqual(['hash', 'author', 'timestamp', 'msg'])
    })
  })
})