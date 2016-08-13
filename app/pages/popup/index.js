 //对话框
  /*
  var $content = $("#page-modal").find('.content');
  $content.on('click','.alert-text',function () {
    $.alert('这是一段提示消息');
  });

  $content.on('click','.alert-text-title', function () {
    $.alert('这是一段提示消息', '这是自定义的标题!');
  });

  $content.on('click', '.alert-text-title-callback',function () {
    $.alert('这是自定义的文案', '这是自定义的标题!', function () {
      $.alert('你点击了确定按钮!')
    });
  });
  $content.on('click','.confirm-ok', function () {
    $.confirm('你确定吗?', function () {
      $.alert('你点击了确定按钮!');
    });
  });
  $content.on('click','.prompt-ok', function () {
    $.prompt('你叫什么名字?', function (value) {
      $.alert('你输入的名字是"' + value + '"');
    });
  });
*/
  /*
  // 确认框
  $(document).on('click','.confirm-ok', function () {
    $.confirm('Are you sure?', function () {
      $.alert('You clicked Ok button');
    });
  });
  $(document).on('click', '.confirm-ok-cancel',function () {
    $.confirm('Are you sure?',
      function () {
        $.alert('You clicked Ok button');
      },
      function () {
        $.alert('You clicked Cancel button');
      }
    );
  });
  $(document).on('click','.confirm-title-ok', function () {
    $.confirm('Are you sure?', 'Custom Title', function () {
      $.alert('You clicked Ok button');
    });
  });
  $(document).on('click','.confirm-title-ok-cancel', function () {
    $.confirm('Are you sure?', 'Custom Title',
      function () {
        $.alert('You clicked Ok button');
      },
      function () {
        $.alert('You clicked Cancel button');
      }
    );
  });
*/
/*
// prompt框
$(document).on('click','.prompt-ok', function () {
  $.prompt('What is your name?', function (value) {
    $.alert('Your name is "' + value + '". You clicked Ok button');
  });
});

$(document).on('click','.prompt-ok-cancel', function () {
  $.prompt('What is your name?',
    function (value) {
      $.alert('Your name is "' + value + '". You clicked Ok button');
    },
    function (value) {
      $.alert('Your name is "' + value + '". You clicked Cancel button');
    }
  );
});

$(document).on('click', '.prompt-title-ok',function () {
  $.prompt('What is your name?', 'Custom Title', function (value) {
    $.alert('Your name is "' + value + '". You clicked Ok button');
  });
});

$(document).on('click', '.prompt-title-ok-cancel',function () {
  $.prompt('What is your name?', 'Custom Title',
    function (value) {
      $.alert('Your name is "' + value + '". You clicked Ok button');
    },
    function (value) {
      $.alert('Your name is "' + value + '". You clicked Cancel button');
    }
  );
});
*/
/*
// 自定义弹窗
$(document).on('click','.open-3-modal', function () {
  $.modal({
    title:  'Modal with 3 buttons',
    text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
    buttons: [
      {
        text: 'B1',
        onClick: function() {
          $.alert('You clicked first button!')
        }
      },
      {
        text: 'B2',
        onClick: function() {
          $.alert('You clicked second button!')
        }
      },
      {
        text: 'B3',
        bold: true,
        onClick: function() {
          $.alert('You clicked third button!')
        }
      },
    ]
  })
});

$(document).on('click','.open-tabs-modal', function () {
  $.modal({
    title:  '<div class="buttons-row">'+
              '<a href="#tab1" class="button active tab-link">Tab 1</a>'+
              '<a href="#tab2" class="button tab-link">Tab 2</a>'+
            '</div>',
    text: '<div class="tabs">'+
            '<div class="tab active" id="tab1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nunc non dolor euismod feugiat. Sed at sapien nisl. Ut et tincidunt metus. Suspendisse nec risus vel sapien placerat tincidunt. Nunc pulvinar urna tortor.</div>'+
            '<div class="tab" id="tab2">Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</div>'+
          '</div>',
    buttons: [
      {
        text: 'Ok, got it',
        bold: true
      },
    ]
  })
});

$(document).on('click','.open-vertical-modal', function () {
  $.modal({
    title:  'Vertical Buttons Layout',
    text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
    verticalButtons: true,
    buttons: [
      {
        text: 'Button 1',
        onClick: function() {
          $.alert('You clicked first button!')
        }
      },
      {
        text: 'Button 2',
        onClick: function() {
          $.alert('You clicked second button!')
        }
      },
      {
        text: 'Button 3',
        onClick: function() {
          $.alert('You clicked third button!')
        }
      },
    ]
  })
});
*/
/*
// 带标题的加载指示器
$(document).on('click', '.open-preloader', function () {
  $.showPreloader();
  setTimeout(function () {
      $.hidePreloader();
  }, 2000);
});
$(document).on('click','.open-preloader-title', function () {
  $.showPreloader('Custom Title')
  setTimeout(function () {
      $.hidePreloader();
  }, 2000);
});
*/
// toast 提示
$(document).on('click','.show-toast',function(){
  //$.toast("操作失败");
  $.toast('操作成功，正在跳转...', 2345, 'success top');
});