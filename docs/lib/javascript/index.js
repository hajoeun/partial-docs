
//var funcs = ["partial", "right", "righta", "pipe", "pipec", "pipea", "pipea2",
//  "mr", "to_mr", "is_mr", "Pipe", "Indent", "Tap", "Err", "async", "callback", "cb", "noop", "this",
//  "identity", "i", "args0", "args1", "args2", "args3", "args4", "args5",
//  "Always", "true", "false", "null", "not", "nnot", "log", "loge", "Hi", "f", "val",
//  "isArguments", "isFunction", "isString", "isNumber", "isDate", "isRegExp", "isError", "isObject", "has", "isArrayLike",
//  "rest", "values", "toArray", "object", "escape", "unescape", "uniqueId", "clone",
//  "isArray", "isMatch", "isEmpty", "isElement", "isEqual",
//  "keys", "wrapArray", "parseInt", "Lambda", "extend", "defaults", "flatten", "method", "set", "unset", "remove", "pop", "shift", "push", "unshift", "removeByIndex", "select", "sel",
//  "notice", //?
//  "each", "map", "reduce", "reduce_right", "reduceRight", "find", "filter", "where", "find_where", "findWhere", "reject", "every", "some", "contains", "invoke", "pluck",
//  "max", "min", "sortBy", "groupBy", "indexBy", "countBy", "shuffle", "random", "sample", "size", "partition", "take", "head",
//  "first", "initial", "last", "compact", "without", "union", "intersection", "difference", "uniq", "zip", "unzip",
//  "indexOf", "lastIndexOf", "sortedIndex", "findIndex", "findLastIndex", "range", "mapObject", "pairs", "invert", "functions", "findKey",
//  "pick", "omit", "all", "spread", "memoize", "delay", "defer", "negate", "after", "before", "once",
//  "Template", "Template$", "template", "template$", "String", "String$", "string", "string$",
//  "Template.each", "template.each", "String.each", "string.each"
//];


var funcs = ["partial", "right", "righta", "pipe", "pipec", "pipea", "pipea2",
  "mr", "to_mr", "is_mr", "Pipe", "Indent", "Tap", "Err", "async", "callback", "cb", "noop", "this",
  "identity", "i", "args0", "args1", "args2", "args3", "args4", "args5",
  "constant", "always", "Always", "true", "false", "null", "not", "nnot", "log", "loge", "Hi", "f", "val", "isArguments", "is_arguments", "isFunction", "is_function", "isString", "is_string", "isNumber", "is_number", "isDate", "is_date", "isRegExp", "is_regexp", "isError", "is_error", "isObject", "is_object", "has", "isArrayLike", "is_array_like", "rest", "values", "toArray", "to_array", "object", "escape", "unescape", "uniqueId", "unique_id", "clone", "isArray", "is_array", "isMatch", "is_match", "isEmpty", "is_empty", "isElement", "is_element", "isEqual", "is_equal", "keys", "wrap_arr", "wrapArray", "parse_int", "parseInt", "Lambda", "extend", "defaults", "flatten", "method", "set", "unset", "remove", "pop", "shift", "push", "unshift", "removeByIndex", "select", "sel", "notice", "Noti", "noti", "each", "map", "reduce", "reduce_right", "reduceRight", "find", "filter", "where", "find_where", "findWhere", "reject", "every", "some", "contains", "invoke", "pluck", "max", "min", "sort_by", "sortBy", "group_by", "groupBy", "index_by", "indexBy", "count_by", "countBy", "shuffle", "random", "sample", "size", "partition", "take", "head", "first", "initial", "last", "compact", "without", "union", "intersection", "difference", "uniq", "zip", "unzip", "index_of", "indexOf", "last_index_of", "lastIndexOf", "sorted_i", "sorted_idx", "sortedIndex", "findIndex", "find_idx", "find_i", "find_last_i", "find_last_idx", "findLastIndex", "range", "map_object", "mapObject", "pairs", "invert", "functions", "findKey", "find_key", "find_k", "pick", "omit", "all", "spread", "memoize", "delay", "defer", "negate", "after", "before", "once",
  "T", "Template", "T$", "Template$", "t", "template", "t$", "template$", "S", "String", "S$", "String$", "s", "string", "s$", "string$"];

//
//// 우리가 새로 만든 것
//var func = ["partial", "right", "righta", "pipe", "pipec", "pipea", "pipea2",
//  "mr", "to_mr", "is_mr", "Pipe", "Indent", "Tap", "Err", "async", "callback", "cb", "this",
//  "args0", "args1", "args2", "args3", "args4", "args5",
//
//
//
//];
//
//var func2 = ["noop", "identity",
//];
//
//var utility = [
//  "constant"
//];

var sync = ["partial", "right", "righta", "pipe", "pipec", "pipea", "pipea2",
  "mr", "to_mr", "is_mr", "Pipe", "Indent", "Tap", "Err", "callback", "cb", "noop", "this",
  "identity", "args0", "args1", "args2", "args3", "args4", "args5",
  "Always", "true", "false", "null", "not", "nnot", "log", "loge", "Hi", "f", "val",
  "isArguments", "isFunction", "isString", "isNumber", "isDate", "isRegExp", "isError", "isObject", "has", "isArrayLike",
  "rest", "values", "toArray", "object", "escape", "unescape", "uniqueId", "clone",
  "isArray", "isMatch", "isEmpty", "isElement", "isEqual",
  "keys", "wrapArray", "parseInt", "Lambda", "extend", "defaults", "flatten", "method", "set", "unset", "remove", "pop", "shift", "push", "unshift", "removeByIndex", "select", "sel",
  "notice", //?
  "each", "map", "reduce", "reduce_right", "reduceRight", "find", "filter", "where", "find_where", "findWhere", "reject", "every", "some", "contains", "invoke", "pluck",
  "max", "min", "sortBy", "groupBy", "indexBy", "countBy", "shuffle", "random", "sample", "size", "partition", "take", "head",
  "first", "initial", "last", "compact", "without", "union", "intersection", "difference", "uniq", "zip", "unzip",
  "indexOf", "lastIndexOf", "sortedIndex", "findIndex", "findLastIndex", "range", "mapObject", "pairs", "invert", "functions", "findKey",
  "pick", "omit", "all", "spread", "memoize", "delay", "defer", "negate", "after", "before", "once",
  "Template", "Template$", "template", "template$", "String", "String$", "string", "string$",
  "Template.each", "template.each", "String.each", "string.each"
];

/*
var async = ["async", "Pipe", "Indent", "pipe", "pipec", "pipea", "pipea2", "cb", "callback", "jcb",
  "Template", "Template$", "template", "template$", "String", "String$", "string", "string$",
  "Template.each", "template.each", "String.each", "string.each"];
*/



//// sync 그리기
//_.pipe(sync,
//  _.T('funcs'), ) // 다 그리고나서  async그리는거랑 합칠 수 있음
//

var ary = [100,200,300];
console.log(_.T.each("data", "    h3 {{data}}")(ary));
console.log(_.pipe(ary, _.T.each("d", "    h3 {{d}}")));

var make_list = _.T.each("d", "  li {{d}}");
var make_funcs_sidebar = _.T.each('d', '\
  li\
    a[href=#{{d}}] _.{{d}}');

_.pipe(sync,
  _.T('funcs', '\
  div#sidebar\
    div#logo\
      h1 Partial JS\
    div#listbar\
      div#search\
        input[type="text" placeholder="입력하세요."]\
      ul#grouplist\
        li\
          span.gr_title sync\
          ul#synclist\
            {{make_funcs_sidebar(funcs)}}\
    div#about\
      p Marpple ©\
      ul\
        li\
          a[href=""] Marpple\
        li\
          a[href=""] Repository\
        li\
          a[href=""] Book\
  div#container\
  '),
  $,
  _.partial(_.method, _, 'appendTo', $('body'))
);



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

// /*Functions List variable declaration*/
// var funcs = C.filter(C.keys(F), function(val) { return val !== 'F' && val !== 'G' });

///*Section Data declaration*/
//var section_data = {
//  C : {
//    func : {
//      title : 'C',
//      usage : 'C(args..., function), A(args..., [function...])',
//      egs : [{
//        ds: '`C`는 this를 제외한 `call`이라고 생각하면 쉽습니다.',
//        cd: '\
//                  |function minus(a, b) {\
//                  |__return a - b; \
//                  |}\
//                  |\
//                  |var r1 = A(20,10, minus);\
//                  |console.log(r1); // 10'}]
//    },
//    methods: {
//      isArguments :
//      {
//        title : 'isArguments',
//        usage : 'C.isArguments(object)',
//        egs : [{
//          ds: "`C.isArguments`는 arguments 객체를 판별하는 함수입니다.",
//          cd: "\
//                  |(function() { return C.isArguments(arguments); })([1,2,3]) // true\
//                  |\
//                  |C.isArguments([1,2,3]) // false"}]
//      },
//      isFunction :
//      {
//        title : 'isFunction',
//        usage : 'C.isFunction(object)',
//        egs : [{
//          ds: "`C.isFunction`은 함수를 판별하는 함수입니다.",
//          cd: "\
//                  |C.isFunction(C.map) // true"}]
//      },
//      isString :
//      {
//        title : 'isString',
//        usage : 'C.isString(object), C.is_string(object)',
//        egs : [{
//          ds: "`C.isString`은 문자열을 판별하는 함수입니다.",
//          cd: "\
//                  |C.isString('Hello ABC!') // true"}]
//      }
//    }
//  }
//};


//
//
//
//console.log("~~~~~~~~~~~~~~~~~~~~~");
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


 $(document).ready(function() {

   $('pre').each(function(i, block) {
     hljs.highlightBlock(block);
   });

   /*Event listener functions*/
   // search function
   $('#search').keyup(function(e) {
     update_section_list($(e.target).val());
   });

   // focus effect
   $('#list_bar li a').on('click', function(e) {

     var $section = $(e.target.href.match(/#[\w]+\$?$/)[0]);

     if (!$section[0]) return;

     (function() {
       if (!$section[0].style.boxShadow) $section[0].style.boxShadow = "#ccc 0 0 1px";

       var depth = C.iadd($section[0].style.boxShadow.match(/([0-9]*)px$/)[1], 5);

       // shadow on
       if (depth < 70) {
         $section.css('box-shadow', ' #ccc 0 0 '+ depth +'px');
         setTimeout(arguments.callee, 30);
       }
       else {
         $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
         // shadow off
         (function() {
           var depth = C.isub($section[0].style.boxShadow.match(/([0-9]*)px$/)[1], 10);
           if (depth > 0) {
             $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
             setTimeout(arguments.callee, 30);
           } else {
             $section.css('box-shadow', '#ccc 0 0 0px');
           }
         })();
       }
     })();
   });

   $('pre.javascript').dblclick(function(e) {
     var cp = document.createElement('textarea');
     cp.value = e.target.innerText;

     e.target.appendChild(cp).select();
     document.execCommand('copy');
     cp.remove();
   });

 });