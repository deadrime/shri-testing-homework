const { buildBreadcrumbs } = require('.')

const expected = [
  {
    input: [undefined, undefined],
    output: [ 
      { 
        text: 'HISTORY', 
        href: undefined 
      } 
    ],
    text: 'На первом уровне вложенности',
  },
  {
    input: ['1', undefined],
    output: [
      { 
        text: 'HISTORY',
        href: '/' 
      },
      { 
        text: 'ROOT', 
        href: undefined 
      } 
    ],
    text: 'На втором уровне вложенности',
  },
  {
    input: ['1', '2'],
    output: [
      { 
        text: 'HISTORY',
        href: '/' 
      },
      { 
        text: 'ROOT',
        href: '/files/1/' 
      },
      {
        text: '2',
        href: undefined,
      }
    ],
    text: 'На третьем уровне вложенности',
  }
]

describe('Хлебные крошки правильно генерируются', () => {
  expected.map(i => {
    it(i.text, () => {
      expect(buildBreadcrumbs(...i.input)).toEqual(i.output)
    });
  })
});