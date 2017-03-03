var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
// Angular
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/http');
require('@angular/router');
// RxJS
require('rxjs');
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
//# sourceMappingURL=vendor.js.map