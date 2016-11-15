/* General functions */ var test;
var make_func_list = _.T.each('d', '\
  a[href=#{{d}}]\
    li.fn_li[data=_.{{d}}] _.{{d}}');
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
                button.try\
                  span Try\
                p '+ eg.ds + (eg.cd ? '\
                textarea.input.code    '+ eg.cd : '')
          }, '');
      }, '');
  }, '').replace(/`(.*?)`/g, '<code>$1</code>').replace(/(\n)/g, '\\$1');
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
    div#result_container\
      div#result_section\
        pre#console.javascript console result\
        div#miniDom#mini_dom.miniDom.mini_dom dom result\
  '),
  convert,
  $,
  _(_.method, _, 'appendTo', $('body'))
);

function convert(str) { return str.replace(/(__+)/g, function(m, u) { return u.replace(/__/g, '  '); }).replace(/\<\<(.*)\>\>/g, '{{$1}}') }

$(function() {
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

  /* Event listener functions */
  $('#search').keyup(function(e) { update_section_list($(e.target).val()); });

  $('#listbar i.fa').click(function(e) {
    var icon = e.target, F_list = e.target.nextSibling.nextSibling;
    if (!F_list.style.display || (F_list.style.display == 'block')) { hide(F_list); icon.className = "fa fa-minus-square-o";}
    else { show(F_list); icon.className = "fa fa-plus-square-o"; }
  });

  $('#container').on('click', 'button.try', function() {
    var code = $(this.closest('div')).find('.CodeMirror-code')[0].innerText.replace(/(console\.log)/g, '___res___ += ___log___').replace(/\n\n/g, '\\\n');

    try {
      (new Function("var ___res___ = '';" + code + "$('pre#console').css('color', 'greenyellow')[0].innerText = ___res___;"))();
    } catch(e) {
      $('pre#console').css('color', 'red')[0].innerText = e;
    }
  });
});

function ___log___(v) {
  if (arguments.length > 1) {
    return (_.reduce(arguments, function(memo, v) {
      if (_.isFunction(v)) return memo + v.toString;
      if (_.isString(v) || !isNaN(v)) return memo + v;
      return memo + JSON.stringify(v);
    }, '') + '\n');
  } else {
    if (_.isFunction(v)) return (v.toString + '\n');
    if (_.isString(v) || !isNaN(v)) return (v + '\n');
    return (JSON.stringify(v) + '\n');
  }
}
function open_marpple() { window.open('http://www.marpple.com/', '_blank'); open_marpple = void 0; }
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