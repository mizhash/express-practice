suite('Тесты "..."', function() {
  test('страница должна содержать ссылку на страницу контактов', function() {
    assert($('a[href="/contact"]').lenght);
  });
});
