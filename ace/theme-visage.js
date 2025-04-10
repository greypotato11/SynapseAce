define("ace/theme/visage",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-visage";
exports.cssText = ".ace-visage .ace_gutter {\
background: #1B1B1B;\
color: #8F908A\
}\
.ace-visage .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-visage {\
background-color: #1B1B1B;\
color: #FFFFFF\
}\
.ace-visage .ace_cursor {\
color: #FFFFFF\
}\
.ace-visage .ace_marker-layer .ace_selection {\
background: #2D4F78\
}\
.ace-visage.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-visage .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-visage .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-visage .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-visage .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-visage .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-visage .ace_invisible {\
color: #52524d\
}\
.ace-visage .ace_entity.ace_name.ace_tag,\
.ace-visage .ace_keyword,\
.ace-visage .ace_meta.ace_tag,\
.ace-visage .ace_storage {\
font-weight: bold;\
color: #FA345A\
}\
.ace-visage .ace_punctuation,\
.ace-visage .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-visage .ace_constant.ace_character,\
.ace-visage .ace_constant.ace_language,\
.ace-visage .ace_constant.ace_numeric,\
.ace-visage .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-visage .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-visage .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-visage .ace_support.ace_constant,\
.ace-visage .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-visage .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-visage .ace_storage.ace_type,\
.ace-visage .ace_support.ace_class,\
.ace-visage .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-visage .ace_entity.ace_name.ace_function,\
.ace-visage .ace_entity.ace_other,\
.ace-visage .ace_entity.ace_other.ace_attribute-name,\
.ace-visage .ace_variable {\
color: #A6E22E\
}\
.ace-visage .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-visage .ace_string {\
color: #58F6A5\
}\
.ace-visage .ace_comment {\
font-style: italic;\
color: #939393\
}\
.ace-visage .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    window.require(["ace/theme/visage"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            