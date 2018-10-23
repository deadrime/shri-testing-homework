const assert = require('assert');

describe('Переходы по ссылкам', () => {
  const baseUrl = 'http://localhost:3000/';
  const fileUrl = 'http://localhost:3000/files/90180910fc27a11272a3e5caeeb119a51e5c0545/';
  const fileContentUrl = 'http://localhost:3000/content/90180910fc27a11272a3e5caeeb119a51e5c0545/.gitignore';

  it('Переход к списку файлов', function () {
    return this.browser
      .url(baseUrl)
      .click(`a[href*="90180910fc27a11272a3e5caeeb119a51e5c0545"]`)
      .assertExists('.content ul', 'Нет списка файлов')
      .assertUrl(fileUrl, 'Ссылка не совпадает');
  });
  it('Переход к содержимому файла', function () {
    return this.browser
      .url(fileUrl)
      .click('a[href*=".gitignore"]')
      .assertExists('.file-content', 'Нет содержимого')
      .assertUrl(fileContentUrl, 'Ссылка не совпадает');
  });
  it('Переход в подкатегорию и обратно на главную', function () {
    return this.browser
      .url(baseUrl)
      .click('a[href*="90180910fc27a11272a3e5caeeb119a51e5c0545"]')
      .click('a[href*="controllers"]')
      .click('a[href*="90180910fc27a11272a3e5caeeb119a51e5c0545"]')
      .click('a[href="/"]')
      .assertExists('.commit', 'Нет содержимого файла')
      .assertUrl(baseUrl, 'Ссылка не совпадает');
  });
});

