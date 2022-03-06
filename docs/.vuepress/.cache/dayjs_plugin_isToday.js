import {
  __commonJS,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-FCVWRIDD.js";

// ../wovoui/node_modules/dayjs/plugin/isToday.js
var require_isToday = __commonJS({
  "../wovoui/node_modules/dayjs/plugin/isToday.js"(exports, module) {
    init_define_MZ_ZOOM_OPTIONS();
    !function(e, o) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = o() : typeof define == "function" && define.amd ? define(o) : (e = typeof globalThis != "undefined" ? globalThis : e || self).dayjs_plugin_isToday = o();
    }(exports, function() {
      "use strict";
      return function(e, o, t) {
        o.prototype.isToday = function() {
          var e2 = "YYYY-MM-DD", o2 = t();
          return this.format(e2) === o2.format(e2);
        };
      };
    });
  }
});

// dep:dayjs_plugin_isToday
init_define_MZ_ZOOM_OPTIONS();
var dayjs_plugin_isToday_default = require_isToday();
export {
  dayjs_plugin_isToday_default as default
};
//# sourceMappingURL=dayjs_plugin_isToday.js.map
