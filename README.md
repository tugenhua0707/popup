## 常见的移动端的对话框 总结
<p>依赖于zepto.js,js文件在libs/popup.js文件内</p>
<p>1. Alert 弹窗</p>
<p>比如HTML结构如下：</p>
    <div id="page-modal" class="page">
      <div class="content">
        <div class="content-padded popup">
          <p><a class="alert-text">只有文案的alert</a></p>
          <p><a class="alert-text-title">带文案和标题的alert</a></p>
          <p><a class="alert-text-title-callback">带回调函数的alert</a></p>
          <p><a class="confirm-ok">Confirm</a></p>
          <p><a class="prompt-ok">Prompt</a></p>
         </div>
      </div>
    </div>
<p>对话框js初始化如下：</p>
<pre>
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
</pre>
<p>2. 确认框</p>
<p>HTML代码如下</p>
    <div id="page-modal" class="page">
      <div class="content">
        <div class="content-block">
          <p><a href="#" class="confirm-ok">Confirm with text and Ok callback</a></p>
          <p><a href="#" class="confirm-ok-cancel">Confirm with text, Ok and Cancel callbacks</a></p>
          <p><a href="#" class="confirm-title-ok">Confirm with text, title and Ok callback</a></p>
          <p><a href="#" class="confirm-title-ok-cancel">Confirm with text, title, Ok and Cancel callback</a></p>
        </div>
      </div>
    </div>
<p>确认框js初始化如下：</p>
<pre>
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
</pre>
<p>3. Prompt 框</p>
<p>html代码如下：</p>
    <div id="page-modal" class="page">
      <div class="content">
        <div class="content-block">
          <p><a href="#" class="prompt-ok">Prompt with text and Ok callback</a></p>
          <p><a href="#" class="prompt-ok-cancel">Prompt with text, Ok and Cancel callbacks</a></p>
          <p><a href="#" class="prompt-title-ok">Prompt with text, title and Ok callback</a></p>
          <p><a href="#" class="prompt-title-ok-cancel">Prompt with text, title, Ok and Cancel callback</a></p>
        </div>
      </div>
    </div>
<p>JS代码初始化如下：</p>
<pre>
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
</pre>
<p>4. 自定义弹框</p>
<p>HTML代码如下</p>
    <div id="page-modal" class="page">
      <div class="content">
        <div class="content-block">
          <p><a href="#" class="open-3-modal">Modal With 3 Buttons</a></p>
          <p><a href="#" class="open-tabs-modal">Modal With Tabs</a></p>
          <p><a href="#" class="open-vertical-modal">Modal With Vertical Buttons</a></p>
        </div>
      </div>
    </div>
<p>JS代码初始化如下：</p>
<pre>
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
</pre>
<p>5. 带标题的加载指示器</p>
<p>HTML代码如下：</p>
    <div id="page-modal" class="page">
      <div class="content">
        <div class="content-block">
          <p><a href="#" class="open-preloader">Open Preloader</a></p>
          <p><a href="#" class="open-preloader-title">Open Preloader with custom title</a></p>
        </div>
      </div>
    </div>
<p>JS代码初始化如下：</p>
<pre>
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
</pre>
<p>6. toast 轻量的提示</p>
<p>html代码如下：</p>
    <p class="show-toast">显示toast</p>
<p>JS代码初始化如下：</p>
    // toast 提示
    $(document).on('click','.show-toast',function(){
      //$.toast("操作失败");
      $.toast('操作成功，正在跳转...', 2345, 'success top');
    });
