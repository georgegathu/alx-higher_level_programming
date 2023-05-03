$(function () {
  const add = $('div#add_item');
  const remove = $('div#remove_item');
  const clear = $('div#clear_list');
  const ul = $('ul.my_list');

  add.on('click', () => {
    ul.append('<li>Item</li>');
  });
  remove.on('click', () => {
    $('li').last().remove();
  });
  clear.on('click', () => {
    ul.empty();
  });
});
