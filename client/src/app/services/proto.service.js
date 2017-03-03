var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var core_1 = require('@angular/core');
var app_constants_1 = require('../app.constants');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ProtoService = (function () {
    function ProtoService(constants, http) {
        this.constants = constants;
        this.http = http;
    }
    ProtoService.prototype.get = function (id) {
        var _this = this;
        this.url = id ? this.url.concat('/', id.toString()) : this.url;
        return this.http.get(this.constants.apiEndpoint.concat(this.url))
            .map(function (res) { return _this.parse(res.json()); }, false)
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ProtoService.prototype.create = function (obj) {
        return this.http.post(this.constants.apiEndpoint.concat(this.url), this.parse(obj, true)).map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            Rx_1.Observable.throw(error.json().error || 'Server error');
        });
    };
    ProtoService.prototype.parse = function (obj, reverse) {
        var _this = this;
        if (Array.isArray(obj)) {
            obj.forEach(function (item) {
                _this.loopParser(item, reverse);
            });
        }
        else {
            this.loopParser(obj, reverse);
        }
        return obj;
    };
    ProtoService.prototype.loopParser = function (item, reverse) {
        for (var property in this.model) {
            if (this.model.hasOwnProperty(property) && property !== this.model[property]) {
                if (!reverse) {
                    console.log(property);
                    item[property] = item[this.model[property]];
                    delete item[this.model[property]];
                }
                else {
                    console.log(property);
                    var index = Object.keys(this.model).indexOf(this.model[property]);
                    console.log(index);
                    item[Object.keys(this.model)[index]] = item[this.model[property]];
                }
            }
        }
        return item;
    };
    ProtoService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_constants_1.APP_CONSTANTS)), 
        __metadata('design:paramtypes', [Object, http_1.Http])
    ], ProtoService);
    return ProtoService;
})();
exports.ProtoService = ProtoService;
//# sourceMappingURL=proto.service.js.map