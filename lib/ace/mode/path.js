
/*
 * Mode definitions for routing paths
 */

define(function(require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    // defines the parent mode
    var TextMode = require("./text").Mode;

    // defines the language specific highlighters and folding rules
    var PathHighlightRules = require("./path_highlight_rules").PathHighlightRules;
    var Mode = function() {
        // set everything up
        this.HighlightRules = PathHighlightRules;
    };
    oop.inherits(Mode, TextMode);

    exports.Mode = Mode;
});
