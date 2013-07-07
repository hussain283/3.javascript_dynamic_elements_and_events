$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  $('.todo_list').sortable({cancel: 'a'});

  function bindEvents() {
    $('.add').on('click',addTodo);
    $('.todo_list').on('click','a.complete',completeTodo);
    $('.todo_list').on('click','a.delete',removeTodo);
  }
  //Create functions to add, remove and complete todos

  function addTodo() {
    if ($('input.todo').val() != '') {
      $('.todo_list').append(buildTodo($('input.todo').val()));
      $('input.todo').val('');
    }
  }

  function completeTodo() {
    $(this).closest('div.todo').toggleClass('complete');
  }

  function removeTodo() {
    $(this).closest('div.todo').fadeOut(function(){
      $(this).remove();
    });
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
