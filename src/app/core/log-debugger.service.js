"use strict";
var LogDebugger = (function () {
    function LogDebugger(enabled) {
        this.enabled = enabled;
    }
    LogDebugger.prototype.debug = function (message) {
        if (this.enabled) {
            console.log("DEBUG: " + message);
        }
    };
    return LogDebugger;
}());
exports.LogDebugger = LogDebugger;
//# sourceMappingURL=log-debugger.service.js.map