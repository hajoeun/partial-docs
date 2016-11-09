/* General functions */ var test;
var make_func_list = _.T.each('d', '\
  a[href=#{{d}}]\
    li.fn_li _.{{d}}');
var make_group_list = _.T.each('obj', '\
  li#{{obj.title}}.gr_li\
    span.gr_title {{obj.title}}\
    ul.func_list\
      {{make_func_list(obj.data)}}');
var reduce_section_data = function(data) {
  return _.reduce(_.keys(data), function(memo, key) {
    var section_values = _.values(data[key]);
    var group = section_values[0], funcs = section_values[1];

    return memo + '\
            div.outer_section#'+ group +'\
              p.gr_title '+ group
      + _.reduce(funcs, function(str2, func) {
        return str2 + '\
              div.inner_section#' + func.title +'\
                p.func_title ' + func.title+' \
                  small '+ func.usage
          + _.reduce(func.egs, function(str3, eg) {
            return str3 + '\
                p '+ eg.ds + (eg.cd ? '\
                pre.javascript    '+ eg.cd : '')
          }, '');
      }, '');
  }, '').replace(/\|(_+)/g, function(m, u) { return "|" + u.replace(/_/g, '&nbsp;'); }).replace(/`(.*?)`/g, '<code>$1</code>').replace(/(\n)/g, '\\$1');
}

/* HTML Rendering */
_.pipe(null,
  _.T('', '\
   div#sidebar\
    div#logo\
        p Partial JS\
    div#listbar\
      div#search\
        input[type="text" placeholder="Search function"]\
      ul#group_list\
        {{make_group_list(sync)}}\
        small#no_result 검색 결과가 없습니다.\
    div#about\
      p#copyright Marpple ©\
      ul#linklist\
        li\
          a[href=""] About\
        li\
          a[href=""] Repository\
        li\
          a[href=""] Book\
  div#container\
    div#section_container\
      {{_.T("", reduce_section_data(section_obj))()}}\
  '),
  $,
  _(_.method, _, 'appendTo', $('body'))
);


$(document).ready(function() {
  $('#no_result').hide();

  // highlight (code prettify)
  $('pre.javascript').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  // code copy (auto copy)
  $('pre.javascript').dblclick(function(e) {
    var cp = document.createElement('textarea');
    cp.value = e.target.innerText;

    e.target.appendChild(cp).select();
    document.execCommand('copy');
    cp.remove();
  });

  /* Event listener functions */
  $('#search').keyup(function(e) {
    update_section_list($(e.target).val());
  });
});

function update_section_list(str) {
  if (!str) return ($('#listbar li').show());

  var reg = new RegExp(str, "i"), match = false;
  var reject_group = _.reject($('ul#group_list li.gr_li'), function(group) {
    if (group.id.match(reg)) { $('#' + group.id + ' li').show(); return match = true; }
  });

  _.each(reject_group, function(gr_li) {
    var flag = false;

    _.each($('#' + gr_li.id + ' ul.func_list li.fn_li'), function(li) {
      li.innerText.match(reg) ? (flag = match) && $(li).show() : $(li).hide();
    });

    if (!flag) $(gr_li).hide();
  });

  match ? $('#no_result').hide() : $('#no_result').show();
}


/* Previous Code */
// // sidebar list click event (focus animation)
// $('#listbar > .grouplist li').on('click', function(e) {
//   var $section = $(e.target.parentNode.href.match(/#[\w]+\$?$/)[0]);
//   console.log(typeof e.target.parentNode.href.match(/#[\w]+\$?$/)[0]);
//   console.log(test = $section);
//
//   if (!$section[0]) return;
//
//   (function() {
//     if (!$section[0].style.boxShadow) $section[0].style.boxShadow = "#ccc 0 0 1px";
//
//     var depth = C.iadd($section[0].style.boxShadow.match(/([0-9]*)px$/)[1], 5);
//
//     // shadow on
//     if (depth < 70) {
//       $section.css('box-shadow', ' #ccc 0 0 '+ depth +'px');
//       setTimeout(arguments.callee, 30);
//     }
//     else {
//       $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
//       // shadow off
//       (function() {
//         var depth = C.isub($section[0].style.boxShadow.match(/([0-9]*)px$/)[1], 10);
//         if (depth > 0) {
//           $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
//           setTimeout(arguments.callee, 30);
//         } else {
//           $section.css('box-shadow', '#ccc 0 0 0px');
//         }
//       })();
//     }
//   })();
// });