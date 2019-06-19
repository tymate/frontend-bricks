"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockChannel = void 0;

require("regenerator-runtime/runtime");

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _coreEvents = require("@storybook/core-events");

var _preview = require("./preview");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@storybook/addons');

var mockChannel = function mockChannel() {
  return {
    emit: jest.fn(),
    on: jest.fn(),
    once: jest.fn()
  };
};

exports.mockChannel = mockChannel;
describe('preview', function () {
  describe('linkTo()', function () {
    it('should select the kind and story provided', function () {
      var channel = {
        emit: jest.fn()
      };

      _addons["default"].getChannel.mockReturnValue(channel);

      var handler = (0, _preview.linkTo)('kind', 'name');
      handler();
      expect(channel.emit).toHaveBeenCalledWith(_coreEvents.SELECT_STORY, {
        kind: 'kind',
        story: 'name'
      });
    });
    it('should handle functions returning strings', function () {
      var channel = {
        emit: jest.fn()
      };

      _addons["default"].getChannel.mockReturnValue(channel);

      var handler = (0, _preview.linkTo)(function (a, b) {
        return a + b;
      }, function (a, b) {
        return b + a;
      });
      handler('kind', 'name');
      expect(channel.emit.mock.calls).toContainEqual([_coreEvents.SELECT_STORY, {
        kind: 'kindname',
        story: 'namekind'
      }]);
    });
  });
  describe('hrefTo()', function () {
    it('should return promise resolved with story href',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var href;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _preview.hrefTo)('kind', 'name');

            case 2:
              href = _context.sent;
              expect(href).toContain('?id=kind--name');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
});