/* General functions */ var test;
var make_list = _.T.each("d", "  li {{d}}");
var make_funcs_sidebar = _.T.each('d', '  a[href=#{{d}}]    li _.{{d}}'); // a랑 li랑 바꿔봄
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
                h4.func_title ' + func.title+' \
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
   div#side_wrapper\
    div#sidebar\
      div#logo\
        h2 Partial JS\
      div#search\
          input[type="text" placeholder="Search function"]\
      div#listbar\
        div.grouplist\
          span.gr_title Function\
          ul#functionlist.funclist\
            {{make_funcs_sidebar(func_ary)}}\
        div.grouplist\
          span.gr_title Collection\
          ul#collectionlist.funclist\
            {{make_funcs_sidebar(coll_ary)}}\
        div.grouplist\
          span.gr_title Array\
          ul#arraylist.funclist\
            {{make_funcs_sidebar(array_ary)}}\
        div.grouplist\
          span.gr_title Object\
          ul#objectlist.funclist\
            {{make_funcs_sidebar(obj_ary)}}\
        div.grouplist\
          span.gr_title Utility\
          ul#utilitylist.funclist\
            {{make_funcs_sidebar(util_ary)}}\
        div.grouplist\
          span.gr_title Template\
          ul#templatelist.funclist\
            {{make_funcs_sidebar(tem_ary)}}\
    div#about\
      p#copyright Marpple ©\
      ul\
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
  // search event
  $('#search').keyup(function(e) {
    update_section_list($(e.target).val());
  });

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
});

function update_section_list(str) {
  // 공통 2줄
  if (!str) return $('#listbar li').show();
  var reg = new RegExp(str, "i");


  var $list = $('#listbar li');
  console.log($list);
  _.each($list, function(li) {
    console.log(li, li.innerText);
    li.innerText.match(reg) ? $(li).show() : $(li).hide();
  });

  //_.each(sync, function(key) {
  //  _.each(sync[key], function(v) {
  //    li.innerText.match(reg) ? $li.show() : $li.hide();
  //  });
  //});


  ////////////////////////////////////////////////
// 이거 다시 살려야댐 ㅜㅜ

  //var $func_li = C.filter($('ul.func_list > li'), function(func){
  //  return $(func).attr('data').match(reg) ? !$('ul.func_list > li').show() : true;
  //});
  //
  //C.each($func_li, function(li) {
  //  var $li = $(li);
  //  if (!li.innerText.match(reg)) return $li.hide();
  //
  //  var $methods = $li.children('.method_list').children('li');
  //  C.each($methods, function(m) {
  //    m.innerText.match(reg) ? $(m).show() : $(m).hide();
  //  });
  //
  //  return $li.show();
  //});
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
