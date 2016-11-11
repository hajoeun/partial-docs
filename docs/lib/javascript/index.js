/* General functions */ var test;
var make_func_list = _.T.each('d', '\
  a[href=#{{d}}]\
    li.fn_li[data={{d}}] _.{{d}}');
var make_group_list = _.T.each('obj', '\
  li.gr_li[data={{obj.title}}]\
    i.fa.fa-plus-square-o\
    a[href=#{{obj.title}}].gr_title {{obj.title}}\
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
                textarea.input.code    '+ eg.cd : '')
          }, '');
      }, '');
  }, '').replace(/\|(_+)/g, function(m, u) { return "|" + u.replace(/_/g, '&nbsp;'); }).replace(/`(.*?)`/g, '<code>$1</code>').replace(/(\n)/g, '\\$1');
};

/* HTML Rendering */
_.pipe(null,
  _.T('', '\
   div#sidebar\
    div#logo\
      span Partial JS\
    div#listbar\
      div#search\
        input[type="text" placeholder="Search Functions" autofocus]\
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

  _.each($('textarea.input.code'), function(e) {
    return CodeMirror(function(t) {
        t.className += " " + e.className;
        e.parentNode.replaceChild(t, e);
      }, {
        mode: "javascript",
        value: e.value,
        theme: "marpple",
        tabSize: 0
      });
  });

  // $('#listbar .gr_li:last').prepend("<a href='template.html' target='_blank'><button id='try'><span>TRY</span></button></a>")

  /* Event listener functions */
  $('#search').keyup(function(e) { update_section_list($(e.target).val()); });

  $('#listbar i.fa').click(function(e) {
    var F_list = e.target.nextSibling.nextSibling;

    if (!F_list.style.display || (F_list.style.display == 'block')) { hide(F_list); e.target.className = "fa fa-minus-square-o";}
    else { show(F_list); e.target.className = "fa fa-plus-square-o"; }
  });
});

var open_marpple = function() { window.open('http://www.marpple.com/', '_blank'); open_marpple = void 0; };
function hide(e) { $(e).hide(); }
function show(e) { $(e).show(); }
function showAll(e, childName) { $(e).find(childName).show(); $(e).show(); $('#no_result').hide(); }
function update_section_list(str) {

  str = str.replace(/\s*([?\w]+)\s*/,'$1'); // Trim
  if (!str) return (showAll('#listbar', 'li'));

  // reg: 정규표현식, G_list: 그룹 리스트, F_list: 함수명 리스트, alive: 목록 중에서 검색과 일치한 목록
  var reg = new RegExp(str, "i"), G_list = $('#listbar li.gr_li'), F_list = $('#listbar li.fn_li'), alive = {};

  _.each(F_list, function(f_list) {
    var g_name = f_list.parentNode.parentNode.parentNode.getAttribute('data');
    if (f_list.getAttribute('data').match(reg)) { show(f_list); alive[g_name] = true; }
    else { hide(f_list); if (!alive.hasOwnProperty(g_name)) { alive[g_name] = false; } }
  });

  _.each(G_list, function(g_list) {
    var g_name = g_list.getAttribute('data');
    if (g_name.match(reg)) { showAll(g_list, 'li'); }
    else { alive[g_name] ? show(g_list) : hide(g_list); }
  });

  if (('marpple' == str) && open_marpple) open_marpple();
  _.some(alive) ? $('#no_result').hide() : $('#no_result').show();
}