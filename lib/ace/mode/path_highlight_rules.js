
/*
 * Syntax definitions for highlighting routing paths
 */

define(function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var PathHighlightRules = function() {

        this.$rules = {
            "start" : [
                {token : "keyword", regex: "[?]"},
                {token : "keyword.operator", regex: "[/]"},
                {token : "variable.parameter", regex : ":[a-zA-Z0-9_]+"}, 
            ]
        }
    };
    oop.inherits(PathHighlightRules, TextHighlightRules);

    exports.PathHighlightRules = PathHighlightRules;
});
