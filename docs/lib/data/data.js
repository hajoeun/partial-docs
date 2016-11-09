/* Section Data declaration */
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

var undef = ["Err", "callback", "cb", "this","mr", "to_mr", "is_mr", "val",
  "wrapArray", "parseInt", "Lambda",  "select", "sel", "notice", "take", "head"];


/* Functions List*/
var sync = {
  pipe: {
    title: "Pipe",
    data: ["right", "righta", "Pipe", "pipe", "pipec", "pipea", "pipea2", "all", "spread", "Indent"]
  },
  func: {
    title: "Function",
    data: ["partial", "memoize", "delay", "defer", "once",  "after", "before", "negate"]
  },
  coll: {
    title: "Collection",
    data: ["each", "map", "reduce", "reduceRight", "find", "filter", "where", "findWhere", "reject", "every", "some", "contains", "invoke", "pluck",
           "max", "min", "sortBy", "groupBy", "indexBy", "countBy", "shuffle", "random", "sample", "toArray", "size", "partition"]
  },
  array: {
    title: "Array",
    data: ["first", "initial", "last", "rest", "compact", "flatten", "without", "union", "intersection", "difference", "uniq", "zip", "unzip",
           "object", "indexOf", "lastIndexOf", "sortedIndex", "findIndex", "findLastIndex", "range", "removeByIndex", "pop", "shift", "push", "unshift"]
  },
  obj: {
    title: "Object",
    data: ["keys", "values", "mapObject", "pairs", "invert", "functions", "findKey", "extend", "pick", "omit", "defaults", "clone", "Tap", "has", "method", "set", "unset", "remove",
      "isEqual", "isMatch", "isEmpty", "isElement", "isArray", "isObject", "isArguments", "isFunction", "isString", "isNumber", "isDate", "isRegExp", "isError", "isArrayLike"]
  },
  util: {
    title: "Utility",
    data: ["identity", "escape", "unescape", "uniqueId", "Always", "noop", "args0", "args1", "args2", "args3", "args4", "args5", "true", "false", "null", "not", "nnot", "log", "loge", "Hi", "f"]
  },
  tem: {
    title: "Template",
    data: ["Template", "Template$", "template", "template$", "String", "String$", "string", "string$", "Template.each", "template.each", "String.each", "string.each"]
  }
};

/*
 var async = ["async", "Pipe", "Indent", "pipe", "pipec", "pipea", "pipea2", "cb", "callback", "jcb",
 "Template", "Template$", "template", "template$", "String", "String$", "string", "string$",
 "Template.each", "template.each", "String.each", "string.each"];
*/



/* Sections Data */
var section_obj = {
  function: {
    title: 'Function',
    funcs: {
      partial: {
        title: 'partial',
        usage: '_.partial(func, arg1, arg2, ...)',
        egs: [{
          ds: "`_.partial`은 함수에 사용될 인자를 미리 지정해두는 함수입니다.",
          cd: "\
              |var map10 = _.partial(_.map, _, function(v) { return v + 10; })\
                  |var res = map10([1,2,3,4]);\
                  |console.log(res); // [11,12,13,14]"
        }]
      },
      pipe: {
        title: 'pipe',
        usage: '_.pipe(args, func1, func2, func3, ...)',
        egs: [{
          ds: "`_.pipe`는 함수를 연속으로 실행하는 함수입니다.",
          cd: "\
               |var res = _.pipe([1,2,3,4],\
                  |____function(arg1) { return _.map(arg1, function(v) { return v + 10; }); },\
                  |____function(arg2) { return _.reduce(arg2, function(m, v) { return m + v; }); },\
                  |____function(arg3) { return arg3 / 5; }\
                  |__)\
                  |console.log(res); // 10"
        }]
      }
    }
  },
  collection: {
    title: 'Collection',
    funcs: {
      partial: {
        title: 'partial',
        usage: '_.partial(func, arg1, arg2, ...)',
        egs: [{
          ds: "`_.partial`은 함수에 사용될 인자를 미리 지정해두는 함수입니다.",
          cd: "\
              |var map10 = _.partial(_.map, _, function(v) { return v + 10; })\
                  |var res = map10([1,2,3,4]);\
                  |console.log(res); // [11,12,13,14]"
        }]
      },
      pipe: {
        title: 'pipe',
        usage: '_.pipe(args, func1, func2, func3, ...)',
        egs: [{
          ds: "`_.pipe`는 함수를 연속으로 실행하는 함수입니다.",
          cd: "\
              |var res = _.pipe([1,2,3,4],\
                   |____function(arg1) { return _.map(arg1, function(v) { return v + 10; }); },\
                   |____function(arg2) { return _.reduce(arg2, function(m, v) { return m + v; }); },\
                   |____function(arg3) { return arg3 / 5; }\
                   |__)\
                   |console.log(res); // 10"
        }]
      }
    }
  },
  array: {
    title: 'Array',
    funcs: {
      partial: {
        title: 'partial',
        usage: '_.partial(func, arg1, arg2, ...)',
        egs: [{
          ds: "`_.partial`은 함수에 사용될 인자를 미리 지정해두는 함수입니다.",
          cd: "\
              |var map10 = _.partial(_.map, _, function(v) { return v + 10; })\
                  |var res = map10([1,2,3,4]);\
                  |console.log(res); // [11,12,13,14]"
        }]
      },
      pipe: {
        title: 'pipe',
        usage: '_.pipe(args, func1, func2, func3, ...)',
        egs: [{
          ds: "`_.pipe`는 함수를 연속으로 실행하는 함수입니다.",
          cd: "\
              |var res = _.pipe([1,2,3,4],\
                   |____function(arg1) { return _.map(arg1, function(v) { return v + 10; }); },\
                   |____function(arg2) { return _.reduce(arg2, function(m, v) { return m + v; }); },\
                   |____function(arg3) { return arg3 / 5; }\
                   |__)\
                   |console.log(res); // 10"
        }]
      }
    }
  },
  object: {
    title: 'Object',
    funcs: {
      partial: {
        title: 'partial',
        usage: '_.partial(func, arg1, arg2, ...)',
        egs: [{
          ds: "`_.partial`은 함수에 사용될 인자를 미리 지정해두는 함수입니다.",
          cd: "\
              |var map10 = _.partial(_.map, _, function(v) { return v + 10; })\
                  |var res = map10([1,2,3,4]);\
                  |console.log(res); // [11,12,13,14]"
        }]
      },
      pipe: {
        title: 'pipe',
        usage: '_.pipe(args, func1, func2, func3, ...)',
        egs: [{
          ds: "`_.pipe`는 함수를 연속으로 실행하는 함수입니다.",
          cd: "\
              |var res = _.pipe([1,2,3,4],\
                   |____function(arg1) { return _.map(arg1, function(v) { return v + 10; }); },\
                   |____function(arg2) { return _.reduce(arg2, function(m, v) { return m + v; }); },\
                   |____function(arg3) { return arg3 / 5; }\
                   |__)\
                   |console.log(res); // 10"
        }]
      }
    }
  },
  utility: {
    title: 'Utility',
    funcs: {
      partial: {
        title: 'partial',
        usage: '_.partial(func, arg1, arg2, ...)',
        egs: [{
          ds: "`_.partial`은 함수에 사용될 인자를 미리 지정해두는 함수입니다.",
          cd: "\
              |var map10 = _.partial(_.map, _, function(v) { return v + 10; })\
                  |var res = map10([1,2,3,4]);\
                  |console.log(res); // [11,12,13,14]"
        }]
      },
      pipe: {
        title: 'pipe',
        usage: '_.pipe(args, func1, func2, func3, ...)',
        egs: [{
          ds: "`_.pipe`는 함수를 연속으로 실행하는 함수입니다.",
          cd: "\
              |var res = _.pipe([1,2,3,4],\
                   |____function(arg1) { return _.map(arg1, function(v) { return v + 10; }); },\
                   |____function(arg2) { return _.reduce(arg2, function(m, v) { return m + v; }); },\
                   |____function(arg3) { return arg3 / 5; }\
                   |__)\
                   |console.log(res); // 10"
        }]
      }
    }
  },
  template: {
    title: 'Template',
    funcs: {
      partial: {
        title: 'partial',
        usage: '_.partial(func, arg1, arg2, ...)',
        egs: [{
          ds: "`_.partial`은 함수에 사용될 인자를 미리 지정해두는 함수입니다.",
          cd: "\
              |var map10 = _.partial(_.map, _, function(v) { return v + 10; })\
                  |var res = map10([1,2,3,4]);\
                  |console.log(res); // [11,12,13,14]"
        }]
      },
      pipe: {
        title: 'pipe',
        usage: '_.pipe(args, func1, func2, func3, ...)',
        egs: [{
          ds: "`_.pipe`는 함수를 연속으로 실행하는 함수입니다.",
          cd: "\
              |var res = _.pipe([1,2,3,4],\
                   |____function(arg1) { return _.map(arg1, function(v) { return v + 10; }); },\
                   |____function(arg2) { return _.reduce(arg2, function(m, v) { return m + v; }); },\
                   |____function(arg3) { return arg3 / 5; }\
                   |__)\
                   |console.log(res); // 10"
        }]
      }
    }
  }
};



