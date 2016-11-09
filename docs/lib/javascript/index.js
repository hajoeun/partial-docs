/* General functions */ var test;
var make_func_list = _.T.each('arr', '\
  a[href=#{{arr}}]\
    li.fn_li _.{{arr}}');
var make_group_list = _.T.each('obj', '\
  li#{{obj.title}}.gr_li\
    span.gr_title {{obj.title}}\
    ul.func_list\
      {{make_func_list(obj.data)}}');
var make_section = function(section_data) { return _.T('', reduce_section_data(section_data))(); };

function reduce_section_data(section_data) {
  return _.reduce(_.keys(section_data), function(memo, key) {
    var section_values = _.values(section_data[key]);
    var group = section_values[0],
        funcs = section_values[1];

    return memo + '\
            div.outer_section#'+ group.title +'\
              p.gr_title '+ group.title
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

//// sync 그리기
//_.pipe(sync,
//  _.T('funcs'), ) // 다 그리고나서  async그리는거랑 합칠 수 있음


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
      {{make_section(func_data)}}\
      {{make_section(coll_data)}}\
      {{make_section(array_data)}}\
      {{make_section(obj_data)}}\
      {{make_section(util_data)}}\
      {{make_section(tem_data)}}\
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

// console.time();
// /*HTML Rendering*/
// _.pipe(funcs,
//   _.T('funcs','\
//     div.bar#bar_wrapper\
//       div#logo\
//         h3 Partial JS \
//           br\
//           small Functional JavaScript\
//       div#list_bar\
//         div.input-group\
//           input.form-control#search[type=text placeholder=Search]\
//           span.input-group-addon\
//             span.glyphicon.glyphicon-search\
//         ul.func_list\
//           {{{_.pipe(funcs, ', _.T.each('func', '\
//           li[data={{func}}]\
//             h4\
//               a[href=#{{func}}] {{func}}\
//             ul.method_list.{{func}}\
//               {{{_.pipe(_.keys(window[func]), func, ', _.T.each("method, k, l, func", '\
//               li[data={{method}}]\
//                 a[href=#{{func}}_{{method}}] {{method}}'), ')}}}'
//           ),')}}}\
//       div#about_us\
//         p Mapple ©\
//         ul\
//           li\
//             a[href=http://www.marpple.com] Marpple\
//           li\
//             a[href=https://github.com/marpple/abc-functional-javascript] Repository\
//           li\
//             a[href=https://github.com/cojamm2/functional-javascript/wiki] Book\
//     div.container\
//       div#section_container\
//           {{{_.pipe(window.sections = section_bulider(section_data), ', _.T.each("section", "\
//            div {{replace_(section)}}\
//           "), ')}}}\
//     '),
//   function(v) { return v.replace(/_\{(.*?)\}_/g, '{{$1}}').replace(/_\{\{(.*?)\}\}_/g, '{{{$1}}}').replace(/!_(.*?)_!/g, '{{$1}}'); },
//   function(v){console.log(v); return v;},
//
//   $,
//   //B.M('appendTo', 'body')
//   //_.partial(_.method, 'appendTo', 'body')
//   function(v){console.log(v); return v;},
//   _(_.method, document.body, 'appendChild')
// );
//
//
//


// C([
//   H('', '\
//       a.btn.btn-sm.btn-info.pull-right#go_template[type=button href=template.html target=blank] try\
//     '),
//   $,
//   B.M('appendTo', 'div#H .func_title small')
// ]);
// console.timeEnd();
//
// /*General functions*/
// function section_bulider(temp_section) {
//   return C.map(C.keys(temp_section), function(key) {
//
//     var section_values = C.values(temp_section[key]);
//     var func = section_values[0],
//       methods = section_values[1];
//
//     return ['\
//             div.outer_section#'+key+'\
//               h3.func_title '+func.title+'\
//                 small ' + func.usage
//     + C.map(func.egs, function(eg) {
//       return  '\
//               p ' + eg.ds + (eg.cd ? '\
//               pre.javascript ' + eg.cd : '');
//     }).join('')]
//       .concat(C.map(methods, function(method) {
//         return ['\
//               div.inner_section#'+key+'_'+method.title+'\
//                 h4.method_title '+key+'.'+method.title+' \
//                   small '+method.usage]
//           .concat(C.map(method.egs, function(eg) {
//             return ['\
//                 p '+eg.ds+ (eg.cd ? '\
//                 pre.javascript\
//                   '+eg.cd : '')]
//           })).join('');
//       })).join('');
//   });
// }
//
// function replace_(str) {
//   return str.replace(/\|(_+)/g, function(m, u) { return "|" + u.replace(/_/g, '&nbsp;'); }).replace(/`(.*?)`/g, '<code>$1</code>').replace(/(\n)/g, '\\$1');
// }
//
// function update_section_list(str) {
//   if (!str) return $('#list_bar li').show();
//
//   var reg = new RegExp(str, "i"); // 우리는 정규표현식으로 검색해도 검색 됨 ^0^
//
//   var $func_li = C.filter($('ul.func_list > li'), function(func){
//     return $(func).attr('data').match(reg) ? !$('ul.func_list > li').show() : true;
//   });
//
//   C.each($func_li, function(li) {
//     var $li = $(li);
//     if (!li.innerText.match(reg)) return $li.hide();
//
//     var $methods = $li.children('.method_list').children('li');
//     C.each($methods, function(m) {
//       m.innerText.match(reg) ? $(m).show() : $(m).hide();
//     });
//
//     return $li.show();
//   });
// }

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