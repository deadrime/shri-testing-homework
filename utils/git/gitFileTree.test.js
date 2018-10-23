const gitFileTree = require('./gitFileTree')

const expected = {
  executeGitResult:
    '123 tree hash1\tpath1\n' +
    '123 tree hash2\tpath2\n' +
    '123 tree hash3\tpath3\n',
  input: ['hash', 'path'],
  output: [
    {
      type: 'tree',
      hash: 'hash1',
      path: 'path1',
    },
    {
      type: 'tree',
      hash: 'hash2',
      path: 'path2',
    },
    {
      type: 'tree',
      hash: 'hash3',
      path: 'path3',
    }
  ]
}

const executeGit = require('./executeGit')
jest.genMockFromModule('./executeGit')
jest.mock('./executeGit')
executeGit.mockImplementation(() => Promise.resolve(expected.executeGitResult))

describe('gitFileTree', () => {
  it('Вызывается с правильными аргументами', async () => {
    const expectedParams = [
      'git',
      [
        'ls-tree',
        'hash',
        'path'
      ]
    ]
    await gitFileTree(...expected.input)
    expect(executeGit).toBeCalledWith(...expectedParams)
  })

  it('Возвращает правильные данные', () => {
    expect(gitFileTree(...expected.input)).resolves.toEqual(expected.output)
  })
})