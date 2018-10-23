describe('Скриншот тесты', () => {
  const baseUrl = 'http://localhost:3000/';
  const fileUrl = 'http://localhost:3000/files/90180910fc27a11272a3e5caeeb119a51e5c0545/';
  const fileContentUrl = 'http://localhost:3000/content/90180910fc27a11272a3e5caeeb119a51e5c0545/.gitignore';

  describe('главная страница', () => {
    it('хлебные крошки', function () {
      return this.browser
        .url(baseUrl)
        .assertView('plain', '.breadcrumbs');
    });
    it('последний коммит', function () {
      return this.browser
        .url(baseUrl)
        .assertView('plain', '.commit:last-child');
    });
  });
  describe('список файлов', () => {
    it('хлебные крошки', function () {
      return this.browser
        .url(fileUrl)
        .assertView('plain', '.breadcrumbs');
    });
    it('ul', function () {
      return this.browser
        .url(fileUrl)
        .assertView('plain', '.content ul');
    });
  });
  describe('cодержимое файла', () => {
    it('хлебные крошки', function () {
      return this.browser
        .url(fileContentUrl)
        .assertView('plain', '.breadcrumbs');
    });
    it('контент', function () {
      return this.browser
        .url(fileContentUrl)
        .assertView('plain', '.file-content');
    });
  });
});