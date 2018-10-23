const executeGit = require('./executeGit')
const child_process = require('child_process')

jest.genMockFromModule('child_process')
jest.mock('child_process', () => ({
  execFile: jest.fn().mockImplementation((cmd, args, options, callback) => {
    setImmediate(() => {
      callback(null, '123')
    })
  })
}))

const { execFile } = child_process

describe('executeGit', () => {
  it('Вызывает фунцкию execFile', async () => {
    await executeGit('git', [], 'folder')
    expect(execFile.mock.calls.length).toBe(1)
  })

  it('Возвращает строку', async () => {
    const result = await executeGit('git', [], 'folder')
    expect(typeof result).toBe('string')
  })
})
