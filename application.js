$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  $('.todo_list').sortable({cancel: 'a'});

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    $('.add').on('click',function(){
      addTodo();
    });

    $('.todo_list').on('click','.complete',function(){
      completeTodo(this);
    });

    $('.todo_list').on('click','.delete',function(){
      removeTodo(this);
    });
  }

  //Create functions to add, remove and complete todos

  function addTodo() {
    if ($('input.todo').val() != '') {
      $('.todo_list').append(buildTodo($('input.todo').val()));
      $('input.todo').val('');
    }
  }

  function completeTodo(element) {
    $(element).closest('div.todo').toggleClass('complete');
  }

  function removeTodo(element) {
    $(element).closest('div.todo').fadeOut().queue(function(){
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
