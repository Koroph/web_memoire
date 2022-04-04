(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_admin_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/admin/admin.scss */ "./assets/scss/admin/admin.scss");
/* harmony import */ var _js_admin_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/admin/main */ "./assets/js/admin/main.js");



/***/ }),

/***/ "./assets/js/admin/bootstrap.js":
/*!**************************************!*\
  !*** ./assets/js/admin/bootstrap.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
  //window.Popper = require('popper.js').default;
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // require('./jquery/extend')
  //require('bootstrap');
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

/***/ }),

/***/ "./assets/js/admin/components/AlertDialog.js":
/*!***************************************************!*\
  !*** ./assets/js/admin/components/AlertDialog.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertDialog)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */
var AlertDialog = /*#__PURE__*/function () {
  function AlertDialog() {
    var transId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "alert-dialog-trans";

    _classCallCheck(this, AlertDialog);

    var TRANS = document.getElementById(transId); // if (TRANS === null) console.warn("require include alertDialog trans div in current view.")
    //else {

    /*   this.yes = TRANS.dataset.yes;
       this.no = TRANS.dataset.no;
       this.massage = TRANS.dataset.message;
       this.header = TRANS.dataset.header;*/
    //}

    this.yesOnly = false;
    this.type = "p";
  }

  _createClass(AlertDialog, [{
    key: "setMessage",
    set: function set(value) {
      this.massage = value;
    }
  }, {
    key: "setHeader",
    set: function set(value) {
      this.header = value;
    }
  }, {
    key: "setType",
    set: function set(value) {
      if (["p", "d", "w"].includes(value)) this.type = value;else {
        console.error("Type value is p or d, value default p");
        this.type = "p";
      }
    }
  }, {
    key: "setYesOnly",
    set: function set(value) {
      this.yesOnly = value;
    }
  }, {
    key: "setYes",
    set: function set(value) {
      this.yes = value;
    }
  }, {
    key: "setNo",
    set: function set(value) {
      this.no = value;
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      var divElement = document.createElement('div');
      document.body.style.position = "relative";
      return new Promise(function (resolve, reject) {
        divElement.className = "koroph-alertDialog-container";

        try {
          (function () {
            divElement.innerHTML = _this.alertDialogDOM();
            document.body.append(divElement);
            var alertDialogButton = document.getElementsByClassName("ripper-alert"),
                BUTTON_COUNT = alertDialogButton.length;

            var _loop = function _loop(i) {
              alertDialogButton.item(i).addEventListener("click", function () {
                if (BUTTON_COUNT <= 1) resolve(true);else {
                  if (i === 0) resolve(false);else resolve(true);
                }
                divElement.remove();
              });
            };

            for (var i = 0; i < BUTTON_COUNT; i++) {
              _loop(i);
            }
          })();
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: "getHeaderClassName",
    value: function getHeaderClassName() {
      return this.type === "p" ? "primary" : this.type === "d" ? "danger" : "warning";
    }
  }, {
    key: "getHeaderIconClassName",
    value: function getHeaderIconClassName() {
      return this.type === "p" ? "icon-info" : this.type === "d" ? "icon-bin" : "icon-warning";
    }
  }, {
    key: "alertDialogDOM",
    value: function alertDialogDOM() {
      return "\n            <div class=\"koroph-alertDialog\">\n             <header class=\"".concat(this.getHeaderClassName(), "\">\n              <div class=\"alert-dialog-icon\">\n                <span class=\"").concat(this.getHeaderIconClassName(), "\"></span>\n                </div>\n                <div class=\"alert-dialog-text\">\n                 ").concat(this.header, "\n                 </div>\n              </header>\n                <div class=\"koroph-alertDialog-content\">").concat(this.massage, "</div>\n                <div class=\"koroph-alertDialog-action\">\n                <div class=\"kh-button-custom\">\n                <button class=\"custom-default ripper-alert ripper\" style=\"display: ").concat(this.yesOnly ? "none" : "block", "\" type=\"button\">").concat(this.no, "</button>\n                 </div>\n                <div class=\"kh-button-custom primary\">\n                  <button class=\"custom-active ripper-alert ripper ").concat(this.getHeaderClassName(), "\" type=\"button\" >").concat(this.yes, "</button>\n                </div>\n                </div>\n            </div>");
    }
  }]);

  return AlertDialog;
}();



/***/ }),

/***/ "./assets/js/admin/components/CheckboxGroup.js":
/*!*****************************************************!*\
  !*** ./assets/js/admin/components/CheckboxGroup.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxGroup)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CheckboxGroup = /*#__PURE__*/function () {
  function CheckboxGroup() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kh-group';

    _classCallCheck(this, CheckboxGroup);

    var groups = document.getElementsByClassName(className);

    if (groups.length) {
      for (var i = 0; i < groups.length; i++) {
        var parentField = groups[i].firstElementChild.firstElementChild;
        var children = groups[i].lastElementChild.getElementsByClassName(parentField.dataset.target);
        this.checkedParentField(parentField, children);
        this.updateCheckboxValue(children, parentField);
        this.selectAllField(parentField, children);
      }
    }
  }

  _createClass(CheckboxGroup, [{
    key: "updateCheckboxValue",
    value: function updateCheckboxValue(children, parentField) {
      var _this = this;

      var showField = this.getShowField(children);

      for (var j = 0; j < children.length; j++) {
        children[j].addEventListener("change", function (event) {
          if (showField && showField !== event.target) {
            if (event.target.checked) {
              //event.target.value = "true";
              _this.checkedParentField(parentField, children);

              if (!(event.target.value.indexOf('SHOW') > -1)) {
                showField.checked = true; //showField.value = "true"
              }
            } else {
              //event.target.value = "false";
              parentField.checked = false;
            }
          } else {
            if (event.target.checked) {
              //event.target.value = "true";
              _this.checkedParentField(parentField, children);
            } else {
              //event.target.value = "false";
              parentField.checked = false;

              for (var h = 0; h < children.length; h++) {
                children[h].checked = false; // children[h].value = "false";
              }
            }
          }
        });
      }
    }
    /**
     * get show field
     * @param children
     * @return {HTMLInputElement|null}
     */

  }, {
    key: "getShowField",
    value: function getShowField(children) {
      var showField = null;

      for (var k = 0; k < children.length; k++) {
        if (children[k].value.indexOf('SHOW') > -1) {
          showField = children[k];
          break;
        }
      }

      return showField;
    }
  }, {
    key: "selectAllField",
    value: function selectAllField(parentField, children) {
      parentField.addEventListener("change", function (event) {
        if (event.target.checked) {
          for (var j = 0; j < children.length; j++) {
            children[j].checked = true; //children[j].value = "true";
          }
        } else {
          for (var _j = 0; _j < children.length; _j++) {
            children[_j].checked = false; // children[j].value = "false";
          }
        }
      });
    }
  }, {
    key: "checkedParentField",
    value: function checkedParentField(parentField, children) {
      if (!parentField.checked) {
        var _is = true;

        for (var k = 0; k < children.length; k++) {
          if (!children[k].checked) {
            _is = false;
            break;
          }
        }

        parentField.checked = _is;
      }
    }
  }]);

  return CheckboxGroup;
}();



/***/ }),

/***/ "./assets/js/admin/components/ChipBuilder.js":
/*!***************************************************!*\
  !*** ./assets/js/admin/components/ChipBuilder.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChipBuilder)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @company DarcFlow design [https://darcflow.com]
 * @author    Koroph <yjk@outlook.fr> (+225 0778329592)
 * @website http://koroph.site
 * @link      https://github.com/Koroph
 * @license   Apache 2.0
 * @Copyright (c) 2021.
 *
 */
var ChipBuilder = /*#__PURE__*/function () {
  /**
   * constructor
   * @param {string} className
   */
  function ChipBuilder() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kh-native-chip';

    _classCallCheck(this, ChipBuilder);

    this._ADD_EVENT_CHIP = "onChipAdd";
    this._REMOVE_EVENT_CHIP = "onChipDelete";
    /**
     *
     * @type {HTMLCollectionOf<Element>}
     */

    this.chipContainerItem = document.getElementsByClassName(className);
    this.build();
  }

  _createClass(ChipBuilder, [{
    key: "build",
    value: function build() {
      if (this.chipContainerItem.length) {
        for (var i = 0; i < this.chipContainerItem.length; i++) {
          this.chipContainerItem.item(i).append(this.tagContent(this.chipContainerItem.item(i)));
        }
      }
    }
    /**
     * chip container
     * @param {HTMLDivElement} container
     * @return {HTMLDivElement}
     */

  }, {
    key: "tagContent",
    value: function tagContent(container) {
      var _container$dataset$se, _container$dataset$in, _container$dataset$na;

      var baseContainer = document.createElement('div'),
          tagContainer = document.createElement('div'),
          inputContainer = document.createElement('div'),
          searchContainer = document.createElement('div'),
          _input = document.createElement('input'),
          _hidden_field = document.createElement('input'),
          dataSearch = JSON.parse((_container$dataset$se = container.dataset.searchable) !== null && _container$dataset$se !== void 0 ? _container$dataset$se : "[]"),
          required = container.dataset.required === "true",
          multiple = container.dataset.multiple === "true";

      var dataInit = JSON.parse((_container$dataset$in = container.dataset.init) !== null && _container$dataset$in !== void 0 ? _container$dataset$in : "[]");
      var data = [];
      baseContainer.className = "kh-chip-base-container";
      tagContainer.className = "kh-chip-base-container-chip";
      inputContainer.className = "kh-chip-base-container-input";
      searchContainer.className = "kh-chip-base-container-input-search";
      _input.className = "kh-chip-base-container-input-field";
      _input.id = container.dataset.id;
      _hidden_field.required = required;
      _hidden_field.type = "hidden";
      _hidden_field.name = (_container$dataset$na = container.dataset.name) !== null && _container$dataset$na !== void 0 ? _container$dataset$na : "";
      if (container.dataset.placeholder !== undefined) _input.placeholder = container.dataset.placeholder;
      _input.autofocus = container.dataset.focus !== undefined && container.dataset.focus === "true";

      _input.addEventListener('focus', function () {
        container.parentElement.classList.add("active");
      });

      _input.addEventListener('blur', function () {
        container.parentElement.classList.remove("active");
      });

      if (!multiple) {
        this._notMultipleChip(container, tagContainer, _input);
      }

      this.searchView(container, _input, searchContainer, dataSearch, data, _hidden_field, tagContainer);
      this.addChipItemWhenPressEnter(_input, data, tagContainer, _hidden_field, container, searchContainer);
      this.initChip(dataInit, tagContainer, data, _hidden_field, container);
      /*  for (let j = 0; j < dataSearch.length; j++) {
            searchContainer.append(this.searchItem(dataSearch[j]))
        }*/

      _hidden_field.value = multiple ? JSON.stringify(data) : data[0] === undefined ? "" : data[0];
      inputContainer.append(_input, searchContainer, _hidden_field);
      baseContainer.append(tagContainer, inputContainer);
      return baseContainer;
    }
    /**
     *
     * @param {string[]} dataInit
     * @param {HTMLDivElement} tagContainer
     * @param {string[]} data
     * @param {HTMLInputElement} _hidden_field
     * @param {HTMLDivElement} container
     */

  }, {
    key: "initChip",
    value: function initChip(dataInit, tagContainer, data, _hidden_field, container) {
      var _this2 = this;

      var multiple = container.dataset.multiple === "true";

      var _loop = function _loop(i) {
        var _tagValue = dataInit[i],
            tagItem = _this2.tagItem(_tagValue);

        tagContainer.append(tagItem);
        tagItem.children.item(1).addEventListener('click', function () {
          data.splice(data.findIndex(function (item) {
            return item === _tagValue;
          }), 1);
          _hidden_field.value = multiple ? JSON.stringify(data) : data[0] === undefined ? "" : data[0];
          tagItem.remove();
          container.dispatchEvent(new CustomEvent(this._REMOVE_EVENT_CHIP, {
            detail: {
              tag: _tagValue
            }
          }));
        }.bind(_this2));
        data.push(_tagValue);
      };

      for (var i = 0; i < dataInit.length; i++) {
        _loop(i);
      }
    }
    /**
     *
     * @param {HTMLInputElement} _input
     * @param {string[]} data
     * @param {HTMLDivElement} tagContainer
     * @param {HTMLInputElement} _hidden_field
     * @param {HTMLDivElement} container
     * @param {HTMLDivElement} searchContainer
     */

  }, {
    key: "addChipItemWhenPressEnter",
    value: function addChipItemWhenPressEnter(_input, data, tagContainer, _hidden_field, container, searchContainer) {
      var _this4 = this;

      var multiple = container.dataset.multiple === "true";

      function inputAction(tagValue, e) {
        var _this3 = this;

        var _tagItem = this.tagItem(tagValue);

        tagContainer.append(_tagItem);
        searchContainer.innerHTML = null;

        _tagItem.lastElementChild.onclick = function () {
          data.splice(data.findIndex(function (item) {
            return item === tagValue;
          }), 1);
          _hidden_field.value = multiple ? JSON.stringify(data) : data[0] === undefined ? "" : data[0];

          _tagItem.remove();

          container.dispatchEvent(new CustomEvent(_this3._REMOVE_EVENT_CHIP, {
            detail: {
              tag: tagValue
            }
          }));
        };

        e.target.value = "";

        _input.focus({
          preventScroll: true
        });

        data.push(tagValue);
        _hidden_field.value = multiple ? JSON.stringify(data) : data[0] === undefined ? "" : data[0];
        container.dispatchEvent(new CustomEvent(this._ADD_EVENT_CHIP, {
          detail: {
            tag: tagValue
          }
        }));
      }

      _input.addEventListener('keydown', function (e) {
        var tagValue = e.target.value.toString().trim();

        if (tagValue !== "" && e.keyCode === 13 && !data.includes(tagValue)) {
          e.preventDefault();
          inputAction.call(_this4, tagValue, e);
        }
      });

      _input.addEventListener('blur', function (e) {
        if (searchContainer.childElementCount === 0) {
          var tagValue = e.target.value.toString().trim();

          if (tagValue !== "" && !data.includes(tagValue)) {
            // e.preventDefault();
            inputAction.call(_this4, tagValue, e);
            /*  const _tagItem = this.tagItem(tagValue);
              tagContainer.append(_tagItem);
              searchContainer.innerHTML = null;
              _tagItem.lastElementChild.onclick = () => {
                  data.splice(data.findIndex((item) => item === tagValue), 1);
                  _hidden_field.value = multiple ? JSON.stringify(data) : (data[0] === undefined ? "" : data[0]);
                  _tagItem.remove();
                  container.dispatchEvent(new CustomEvent(this._REMOVE_EVENT_CHIP, {
                      detail: {
                          tag: tagValue
                      }
                  }));
              };
              e.target.value = "";
              _input.focus({
                  preventScroll: true,
              })
              data.push(tagValue);
              _hidden_field.value = multiple ? JSON.stringify(data) : (data[0] === undefined ? "" : data[0]);
              container.dispatchEvent(new CustomEvent(this._ADD_EVENT_CHIP, {
                  detail: {
                      tag: tagValue
                  }
              }));*/
          }
        }
      });
    }
    /**
     *
     * @param {HTMLDivElement} container
     * @param {HTMLInputElement} _input
     * @param {HTMLDivElement} searchContainer
     * @param {string[]} dataSearch
     * @param {string[]} data
     * @param {HTMLInputElement} _hidden_field
     * @param  {HTMLDivElement} tagContainer
     */

  }, {
    key: "searchView",
    value: function searchView(container, _input, searchContainer, dataSearch, data, _hidden_field, tagContainer) {
      var _this5 = this;

      var multiple = container.dataset.multiple === "true";

      if (container.hasAttribute('data-searchable')) {
        _input.addEventListener('input', function (e) {
          var tagValue = e.target.value.toString().trim();
          searchContainer.innerHTML = null;

          if (tagValue !== "") {
            dataSearch.filter(function (item) {
              return item.trim().indexOf(tagValue) !== -1;
            }).map(function (tag) {
              var _tag = _this5.searchItem(tag),
                  _this = _this5;

              _tag.onclick = function () {
                if (!data.includes(tag)) {
                  var _tagItem = _this.tagItem(tag);

                  _tagItem.children.item(1).addEventListener('click', function () {
                    data.splice(data.findIndex(function (item) {
                      return item === tag;
                    }), 1);
                    _hidden_field.value = multiple ? JSON.stringify(data) : data[0] === undefined ? "" : data[0];

                    _tagItem.remove();

                    container.dispatchEvent(new CustomEvent(_this._REMOVE_EVENT_CHIP, {
                      detail: {
                        tag: tag
                      }
                    }));
                  });

                  container.dispatchEvent(new CustomEvent(_this._ADD_EVENT_CHIP, {
                    detail: {
                      tag: tag
                    }
                  }));
                  tagContainer.append(_tagItem);
                  data.push(tag);
                  _hidden_field.value = multiple ? JSON.stringify(data) : data[0] === undefined ? "" : data[0];
                  e.target.value = "";
                  e.target.focus();
                  searchContainer.innerHTML = null;
                }
              };

              searchContainer.append(_tag);
            });
          }
        });
      }
    }
    /**
     * single chip authorize
     * @param {HTMLDivElement} container
     * @param {HTMLDivElement} tagContainer
     * @param {HTMLInputElement} _input
     * @private
     */

  }, {
    key: "_notMultipleChip",
    value: function _notMultipleChip(container, tagContainer, _input) {
      container.addEventListener(this._ADD_EVENT_CHIP, function () {
        if (tagContainer.children.length > 0) _input.disabled = true;
      });
      container.addEventListener(this._REMOVE_EVENT_CHIP, function () {
        if (tagContainer.children.length === 0) _input.disabled = false;
      });

      _input.addEventListener('focus', function () {
        if (tagContainer.children.length > 0) _input.disabled = true;
      });
    }
    /**
     * tag item builder
     * @param {string} label
     * @return {HTMLDivElement}
     */

  }, {
    key: "tagItem",
    value: function tagItem(label) {
      var _item = document.createElement('div'),
          _button = document.createElement('button'),
          _text = document.createElement('span');

      _item.className = "chip-item";
      _text.className = "chip-item-text";
      _button.className = "chip-item-del";
      _button.innerHTML = "&times;";
      _button.type = "button";
      _text.innerHTML = label; //event

      /*     _button.onclick = function () {
               _item.remove();
               container.dispatchEvent(new CustomEvent('onTagDelete', {
                   detail: {
                       tag: label
                   }
               }));
           }*/

      _item.append(_text, _button);

      return _item;
    }
    /**
     * search label item builder
     * @param {string} label
     */

  }, {
    key: "searchItem",
    value: function searchItem(label) {
      var item = document.createElement('div');
      item.tabIndex = 2;
      item.className = 'search-item';
      item.innerHTML = label;
      return item;
    }
  }]);

  return ChipBuilder;
}();



/***/ }),

/***/ "./assets/js/admin/components/Cookie.js":
/*!**********************************************!*\
  !*** ./assets/js/admin/components/Cookie.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cookie)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author Koroph <yjk@outlook.fr>
 *
 * @website http://koroph.site
 * @link  https://github.com/Koroph
 * @license MIT
 * @copyright Copyright (c) 2020.
 */
var Cookie = /*#__PURE__*/function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, null, [{
    key: "setCookie",
    value:
    /**
     * set or update cookie item
     * @param {string} name
     * @param {string} value
     * @param {number} expire
     */
    function setCookie(name, value) {
      var expire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var _date = new Date(),
          str_path = ";path=/";

      _date.setTime(_date.getTime() + expire * 24 * 60 * 60 * 1000);

      var str_expire = ";expires=" + _date.toUTCString();

      document.cookie = name + "=" + value + str_expire + str_path;
    }
    /**
     * get cookie value
     * @param {string} name
     * @return {string|null}
     */

  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var _value = null;

      var cookieRaw = document.cookie.split(';'),
          _name = name.trim() + "=";

      for (var i = 0; i < cookieRaw.length; i++) {
        if (cookieRaw[i].trim().indexOf(_name) === 0) {
          _value = cookieRaw[i].trim().substring(_name.length, cookieRaw[i].trim().length);
          break;
        }
      }

      return _value;
    }
    /**
     * delete cookie item
     * @param {string} name
     */

  }, {
    key: "delete",
    value: function _delete(name) {
      var _date = new Date(),
          str_path = ";path=/";

      _date.setTime(_date.getTime() - 24 * 24 * 60 * 60 * 1000);

      var str_expire = ";expires=" + _date.toUTCString();

      document.cookie = name + "=" + str_expire + str_path;
    }
    /**
     *Check if cookie item key exist
     * @param {string} name
     * @return {boolean}
     */

  }, {
    key: "check",
    value: function check(name) {
      return KhCookie.getCookie(name) !== null;
    }
  }]);

  return Cookie;
}();



/***/ }),

/***/ "./assets/js/admin/components/ImageLoader.js":
/*!***************************************************!*\
  !*** ./assets/js/admin/components/ImageLoader.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageLoader)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */
var ImageLoader = /*#__PURE__*/function () {
  function ImageLoader() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "kh-img-loader";
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "image/*";

    _classCallCheck(this, ImageLoader);

    this._pattern = pattern;
    this._className = className;
    this._elements = document.getElementsByClassName(className);
  }

  _createClass(ImageLoader, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (this._elements) {
        for (var i = 0; i < this._elements.length; i++) {
          this._elements.item(i).addEventListener("click", function () {
            var INPUT_FILE = this.children.item(1),
                IMG = this.children.item(0),
                SVG_CONTAINER = this.children.item(2);
            INPUT_FILE.setAttribute("accept", _this._pattern);
            INPUT_FILE.click();
            INPUT_FILE.addEventListener("change", function (event) {
              SVG_CONTAINER.style.display = "none";
              IMG.style.display = "block";
              IMG.parentElement.style.padding = "2px";

              _this.dataImgReader(event, IMG);
            });
          });
        }
      } else console.log("Aucun élément trouvés qui a le _className=" + this._className);
    }
  }, {
    key: "applyStyle",
    value: function applyStyle(img, svg) {
      svg.style.display = "none";
      img.style.display = "block";
      img.parentElement.style.padding = "2px";
    }
  }, {
    key: "dataImgReader",
    value: function dataImgReader(event, img) {
      var reader = new FileReader();

      reader.onload = function (_event) {
        img.src = _event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }]);

  return ImageLoader;
}();



/***/ }),

/***/ "./assets/js/admin/components/KhChart.js":
/*!***********************************************!*\
  !*** ./assets/js/admin/components/KhChart.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KhChart": () => (/* binding */ KhChart)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AlertDialog */ "./assets/js/admin/components/AlertDialog.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */


chart_js__WEBPACK_IMPORTED_MODULE_13__.Chart.register.apply(chart_js__WEBPACK_IMPORTED_MODULE_13__.Chart, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_13__.registerables));
var KhChart = function KhChart() {
  var _this = this;

  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kh-chart-item-content';

  _classCallCheck(this, KhChart);

  this.chartItemContent = document.getElementsByClassName(className);

  if (this.chartItemContent.length > 0) {
    var _loop = function _loop(i) {
      var _this$chartItemConten, _this$chartItemConten2, _this$chartItemConten3;

      var label = (_this$chartItemConten = _this.chartItemContent.item(i).dataset.label) !== null && _this$chartItemConten !== void 0 ? _this$chartItemConten : 'label',
          type = (_this$chartItemConten2 = _this.chartItemContent.item(i).dataset.type) !== null && _this$chartItemConten2 !== void 0 ? _this$chartItemConten2 : 'type',
          _data = JSON.parse((_this$chartItemConten3 = _this.chartItemContent.item(i).dataset.data) !== null && _this$chartItemConten3 !== void 0 ? _this$chartItemConten3 : '[]'),

      /**
       * @var {CanvasRenderingContext2D} ctx
       */
      ctx = _this.chartItemContent.item(i).getContext('2d');
      /**
       * @var {Chart} baseChart
       */


      var baseChart = new chart_js__WEBPACK_IMPORTED_MODULE_13__.Chart(ctx, {
        type: type,
        //pie,doughnut
        data: {
          labels: _data.labels,
          datasets: [{
            label: label,
            data: _data.values,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 108, 34, 0.2)', 'rgb(90,229,44,0.2)', 'rgb(214,18,236,0.2)', 'rgb(225,160,74,0.2)', 'rgb(121,217,144,0.2)', 'rgb(114,102,150,0.2)', 'rgb(101,6,46,0.2)', 'rgb(134,104,4,0.2)', 'rgb(252,4,4,0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 108, 34, 1)', 'rgb(90,229,44,1)', 'rgb(214,18,236,1)', 'rgb(225,160,74,1)', 'rgb(121,217,144,1)', 'rgb(114,102,150,1)', 'rgb(101,6,46,1)', 'rgb(134,104,4,1)', 'rgb(252,4,4,1)'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          onClick: function onClick(e, context) {
            if (context[0]) {
              var _alert = new _AlertDialog__WEBPACK_IMPORTED_MODULE_12__["default"]();

              _alert.yesOnly = true;
              _alert.yes = "OK";
              _alert.header = label;
              console.log(context[0]);
              _alert.massage = "Le site enr\xE9gistre pour <strong style=\"color: #28a745;\">".concat(_data.labels[context[0].index], "</strong>, <strong style=\"color: #28a745;\">").concat(_data.values[context[0].index], "</strong> utilisateur(s)");

              _alert.show();
            }
          }
        }
      });
    };

    for (var i = 0; i < this.chartItemContent.length; i++) {
      _loop(i);
    }
  }
};

/***/ }),

/***/ "./assets/js/admin/components/TabBar.js":
/*!**********************************************!*\
  !*** ./assets/js/admin/components/TabBar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabBar)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */
var TabBar = /*#__PURE__*/function () {
  function TabBar() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "tab";

    _classCallCheck(this, TabBar);

    var tabs = document.getElementsByClassName(className);

    if (tabs.length) {
      for (var i = 0; i < tabs.length; i++) {
        this.tab(tabs.item(i));
      }
    }
  }
  /**
   *
   * @param {HTMLDivElement} tabItem
   */


  _createClass(TabBar, [{
    key: "tab",
    value: function tab(tabItem) {
      var _this2 = this;

      var tabBtn = tabItem.getElementsByClassName("tab-bar-item"),
          TAB_KEY = "tab.key.storage.state";
      this.initTabBar(TAB_KEY, tabItem, tabBtn);

      var _loop = function _loop(i) {
        tabBtn.item(i).addEventListener("click", function () {
          _this2.tabBarAction(tabBtn.item(i), tabItem);

          localStorage.setItem(TAB_KEY, tabBtn.item(i).dataset.target);
        });
      };

      for (var i = 0; i < tabBtn.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "initTabBar",
    value: function initTabBar(TAB_KEY, tabItem, tabBtn) {
      var initKey = localStorage.getItem(TAB_KEY),
          mask = tabItem.querySelector(".tab-mask");

      if (initKey) {
        this.tabBarAction(tabItem.querySelector("[data-target=".concat(initKey, "]")), tabItem);
      } else {
        this.tabBarAction(tabBtn[0], tabItem);
      }

      if (mask) {
        setTimeout(function () {
          return mask.remove();
        }, 500);
      }
    }
    /**
     *
     * @param {HTMLButtonElement} _this
     * @param {HTMLDivElement} tabItem
     */

  }, {
    key: "tabBarAction",
    value: function tabBarAction(_this, tabItem) {
      var BTN_ACTIVE = "tab-active",
          CONTENT_ACTIVE = "tab-content-active";
      var oldBtn = tabItem.querySelector(".".concat(BTN_ACTIVE)),
          oldContent = tabItem.querySelector(".".concat(CONTENT_ACTIVE));

      if (oldBtn) {
        if (oldBtn !== _this) {
          oldBtn.classList.remove(BTN_ACTIVE);
          oldContent.classList.remove(CONTENT_ACTIVE);
        }
      }

      if (!_this.classList.contains(BTN_ACTIVE)) {
        _this.classList.add(BTN_ACTIVE);

        tabItem.querySelector("#".concat(_this.dataset.target)).classList.add(CONTENT_ACTIVE);
      }
    }
  }]);

  return TabBar;
}();



/***/ }),

/***/ "./assets/js/admin/components/media-store/KhMediaStore.js":
/*!****************************************************************!*\
  !*** ./assets/js/admin/components/media-store/KhMediaStore.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KhMediaStore)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./svg */ "./assets/js/admin/components/media-store/svg.js");
/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../AlertDialog */ "./assets/js/admin/components/AlertDialog.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./config.json */ "./assets/js/admin/components/media-store/config.json");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author Koroph <yjk@outlook.fr>
 *
 * @website http://koroph.site
 * @link  https://github.com/Koroph
 * @license MIT
 * @copyright Copyright (c) 2020.
 */




var KhMediaStore = /*#__PURE__*/function () {
  function KhMediaStore() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'img-media-store';

    _classCallCheck(this, KhMediaStore);

    this.INPUT_FILE_NAME = '_image';
    this.DIRECTORY_ID = 'directory_id';
    this.DIRECTORY_NAME = 'directory_name';
    this.CLASS_NAME = className;

    if (document.getElementsByClassName(this.CLASS_NAME) != null) {
      this.khMediaStoreBody();
    }
  }

  _createClass(KhMediaStore, [{
    key: "khLoadData",
    value: function khLoadData(_ref) {
      var data = _ref.data;

      //this.subBody.innerHTML = "";
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          this.subBody.append(this.mediaStoreList({
            item: data[i]
          }));
        }
      } else this.viewEmpty.style.display = "flex";

      this.subBody.append(this.viewEmpty);
      this.body.append(this.subBody);
    }
  }, {
    key: "_emptyView",
    value: function _emptyView() {
      var container = document.createElement('div'),
          content = document.createElement('div'),
          subWord = document.createElement('small'),
          word = document.createElement('h4');
      container.id = "kh-media-store-body-empty";
      content.id = "kh-media-store-body-empty-content";
      word.innerHTML = "Aucun dossier trouvé";
      subWord.innerHTML = "Cliquer sur le boutton " + _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_FOLDER_ADD + " pour ajouter un nouveau dossier..";
      content.innerHTML = _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_WARNING;
      content.append(word, subWord);
      container.append(content);
      container.style.display = "none";
      return container;
    }
    /**
     *
     * @param base {HTMLElement}
     * @param root {HTMLDivElement}
     */

  }, {
    key: "openMediaStore",
    value: function openMediaStore(base, root) {
      var khView = document.getElementsByClassName(this.CLASS_NAME),
          _this = this;

      this.viewEmpty = this._emptyView();
      if (khView != null) //this.prefix = khView.dataset.prefix;
        for (var i = 0; i < khView.length; i++) {
          khView.item(i).addEventListener('click', function () {
            base.style.display = "flex"; // _this.loaderContainer.style.display = "flex";

            base.setAttribute('data-target', this.id);
            if (this.dataset.required !== "") _this.file.setAttribute('required', 'required');
            base.append(root);
            axios.get(_config_json__WEBPACK_IMPORTED_MODULE_25__.files + '/' + _this.prefix).then(function (response) {
              //console.log(response.data.data)
              _this.loaderContainer.style.display = "none";

              _this.khLoadData({
                data: response.data.data
              });
            });
          });
        }
    }
    /**
     *
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {boolean} is
     * @return {(HTMLDivElement|HTMLButtonElement)[]}
     */

  }, {
    key: "folderSVG",
    value: function folderSVG(_ref2) {
      var name = _ref2.name,
          width = _ref2.width,
          height = _ref2.height,
          _ref2$is = _ref2.is,
          is = _ref2$is === void 0 ? false : _ref2$is;
      var svg = document.createElement('div'),
          div = document.createElement('div'),
          folderName = document.createElement('span'),
          button = document.createElement('button');
      button.className = "folder-delete";
      svg.className = "kh-media-list-item-header_";
      folderName.className = "kh-media-list-item-header-text"; //folderName.innerHTML = name;
      //folderName.innerHTML = name+' <small>[800x900]</small>';

      folderName.innerHTML = "".concat(name, " <strong>[").concat(width, ",").concat(height, "]</strong>");
      div.append(folderName);
      div.insertAdjacentHTML("afterbegin", _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_FOLDER);
      button.className = "folder-del";
      button.innerHTML = _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_FOLDER_DELETE; // hide folder btn remove when folder content files

      if (!is) button.style.display = "none";
      svg.append(div, button);
      return [svg, button];
    }
    /**
     *
     * @param file {File}
     * @param id {string}
     * @return {FormData}
     */

  }, {
    key: "dataSend",
    value: function dataSend(_ref3) {
      var file = _ref3.file,
          id = _ref3.id;
      var formData = new FormData();
      formData.append(this.DIRECTORY_ID, id);
      formData.append(this.INPUT_FILE_NAME, file, file.name);
      formData.append(this.DIRECTORY_NAME, file.name);
      return formData;
    }
    /**
     *
     * @param value {boolean}
     */

  }, {
    key: "listItemAddIsEnable",
    value: function listItemAddIsEnable() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var list_item_add = document.getElementsByClassName('kh-media-list-item-add');
      if (list_item_add != null) for (var i = 0; i < list_item_add.length; i++) {
        if (value) list_item_add.item(i).setAttribute('disabled', "");else {
          list_item_add.item(i).removeAttribute('disabled');
          list_item_add.item(i).style.display = "flex";
        }
      }
    }
    /**
     *
     * @param item {Object}
     * @param isMask {boolean}
     * @return {HTMLDivElement}
     */

  }, {
    key: "mediaStoreList",
    value: function mediaStoreList(_ref4) {
      var item = _ref4.item,
          _ref4$isMask = _ref4.isMask,
          isMask = _ref4$isMask === void 0 ? false : _ref4$isMask;

      var content = document.createElement('div'),
          _this = this,
          mediaList = document.createElement('div'),
          mediaListHeader = document.createElement('div'),
          base = this.base,
          khAlert = new _AlertDialog__WEBPACK_IMPORTED_MODULE_24__["default"]();

      content.className = "kh-media-list-item-content";
      mediaList.className = "kh-media-list-item";
      mediaListHeader.className = "kh-media-list-item-header";

      if (isMask) {
        var mask = document.createElement('div'),
            maskLoader = document.createElement('div');
        mask.className = "kh-media-list-item-mask";
        maskLoader.id = "kh-media-store-small-loader";
        mask.append(maskLoader);
        mediaList.append(mask);
      }

      for (var i = 0; i < item.catalog.length; i++) {
        content.append(this.mediaStoreListItem({
          id: item.catalog[i].id,
          url: item.catalog[i].url,
          is: item.catalog[i].is,
          name: item.catalog[i].title,
          created: item.catalog[i].created_at,
          selected: this.imageLisItemIsSelected(base, item.catalog[i].id)
        }));
      }

      var _this$folderSVG = this.folderSVG({
        name: item.name,
        width: item.width,
        height: item.height,
        is: item.catalog.length === 0
      }),
          _this$folderSVG2 = _slicedToArray(_this$folderSVG, 2),
          folderHeader = _this$folderSVG2[0],
          btnFolderRemove = _this$folderSVG2[1];

      mediaListHeader.append(folderHeader);
      content.append(this.mediaStoreListAdd(item.id, content, btnFolderRemove));

      btnFolderRemove.onclick = function (event) {
        var parent = mediaList.parentElement;
        khAlert.setMessage = "Vous voulez vraiment supprimer le dossier \"" + item.name + "\" ?";
        khAlert.type = "d";
        khAlert.header = "Avertissement";
        khAlert.yes = "Oui";
        khAlert.no = "Non";
        khAlert.show().then(function (rep) {
          if (rep) {
            mediaList.style.display = "none";
            mediaList.style.transition = "display 400ms ease";

            if (parent.children.length === 4) {
              _this.viewEmpty.style.display = "flex";
            }

            axios["delete"](_config_json__WEBPACK_IMPORTED_MODULE_25__.remove_folder.replace(":id", item.id)).then(function (response) {
              if (response.data.is) {
                mediaList.remove();
              }
            })["catch"](function (e) {
              mediaList.style.display = "block";

              if (parent.children.length === 3) {
                _this.viewEmpty.style.display = "none";
              }
            });
          }
        });
      };

      mediaList.append(mediaListHeader, content);
      return mediaList;
    }
    /**
     * @param base {HTMLDivElement}
     * @param id {string}
     * @return {boolean}
     */

  }, {
    key: "imageLisItemIsSelected",
    value: function imageLisItemIsSelected(base, id) {
      var _id = parseInt(document.getElementById(base.dataset.target).children.item(1).value);

      if (isNaN(_id)) return false;else return _id === id;
    }
    /**
     * @return {HTMLDivElement}
     */

  }, {
    key: "addSVG",
    value: function addSVG() {
      var svg = document.createElement('div');
      svg.innerHTML = _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_ADD;
      return svg;
    }
    /**
     *
     * @param name
     * @param created
     * @param is {boolean}
     * @param url {string}
     * @param id {string}
     * @param selected {boolean}
     * @return {HTMLDivElement}
     */

  }, {
    key: "mediaStoreListItem",
    value: function mediaStoreListItem(_ref5) {
      var name = _ref5.name,
          created = _ref5.created,
          is = _ref5.is,
          url = _ref5.url,
          id = _ref5.id,
          _ref5$selected = _ref5.selected,
          selected = _ref5$selected === void 0 ? false : _ref5$selected;

      var div = document.createElement('div'),
          _this = this,
          img = document.createElement('img'),
          button = document.createElement('button'),
          khAlert = new _AlertDialog__WEBPACK_IMPORTED_MODULE_24__["default"](),
          _placeholder = this._imagePlaceholder(),
          _date = this.dateFormat(new Date(created.date)),
          _name = name.substring(0, name.lastIndexOf('.')),
          _type = name.substring(name.lastIndexOf('.') + 1);

      div.className = "kh-media-list-item-img";
      img.title = "Nom du fichier: ".concat(_name, "\nType: image ").concat(_type, "\nCr\xE9e le: ").concat(_date);
      if (selected) div.classList.add('kh-media-active');
      button.innerHTML = _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_DELETE;
      img.setAttribute('src', url);
      if (is) div.append(img, button, _placeholder);else div.append(img, _placeholder);
      /**
       * remove img if error load
       */

      img.onerror = function () {
        return div.remove();
      };

      img.onload = function () {
        return _placeholder.remove();
      };
      /**
       * delete file
       * @param ev
       */


      button.onclick = function (ev) {
        ev.stopPropagation();
        khAlert.setMessage = "Vous voulez vraiment supprimer cette image ?";
        khAlert.type = "d";
        khAlert.header = "Avertissement";
        khAlert.yes = "Oui";
        khAlert.no = "Non";
        khAlert.show().then(function (rep) {
          if (rep) {
            div.style.display = "none";
            div.style.transition = "all 800ms ease";

            if (div.classList.contains("kh-media-active")) {
              _this.buttonSave.style.display = "none";
            }

            axios["delete"](_config_json__WEBPACK_IMPORTED_MODULE_25__.remove_file.replace(":id", id)).then(function (response) {
              console.log(response);

              if (response.data.is) {
                if (div.parentElement.children.length <= 2) {
                  div.parentElement.previousElementSibling.firstElementChild.lastElementChild.style.display = "block";
                }

                div.remove();
              } else {
                div.style.display = "block";
              }
            })["catch"](function () {
              div.style.display = "block";

              if (div.classList.contains("kh-media-active")) {
                _this.buttonSave.style.display = "block";
              }
            });
          }
        });
      };

      div.onclick = function () {
        var activated = document.getElementsByClassName('kh-media-active');
        if (activated.length) activated.item(0).classList.remove('kh-media-active');
        this.classList.add('kh-media-active');

        _this.buttonSave.setAttribute('data-url', url);

        _this.buttonSave.setAttribute('data-id', id);

        if (_this.buttonSave.style.display === "" || _this.buttonSave.style.display === "none") _this.buttonSave.style.display = "block";
      };

      return div;
    }
  }, {
    key: "_imagePlaceholder",
    value: function _imagePlaceholder() {
      var placeholder = document.createElement('div');
      placeholder.className = "image-placeholder";
      placeholder.innerHTML = "slsskkl";
      return placeholder;
    }
    /**
     * create add element
     * @param id
     * @param btnFolderRemove {HTMLButtonElement}
     * @param content {HTMLDivElement}
     * @returns {HTMLButtonElement}
     */

  }, {
    key: "mediaStoreListAdd",
    value: function mediaStoreListAdd(id, content, btnFolderRemove) {
      var div = document.createElement('button'),
          _this = this;

      div.className = "kh-media-list-item-add";
      div.id = ":" + id;
      div.append(this.addSVG());

      div.onclick = function (event) {
        _this.file.setAttribute('accept', '.png,.jpeg,.jpg,.gif');

        _this.file.click();

        var j = true;

        _this.file.onchange = function (event) {
          if (j) {
            $(_this.mediaStoreTampon({
              file: _this.file.files[0],
              id: id
            })).insertBefore(div);
            div.style.display = "none";
            j = false;

            _this.listItemAddIsEnable();

            if (content.children.length - 1 > 0) {
              btnFolderRemove.style.display = "none";
            }
          }
        };
      };

      return div;
    }
    /**
     * create tampon element
     * @param file
     * @param id
     * @returns {HTMLDivElement}
     */

  }, {
    key: "mediaStoreTampon",
    value: function mediaStoreTampon(_ref6) {
      var file = _ref6.file,
          id = _ref6.id;

      var div = document.createElement('div'),
          img = document.createElement('img'),
          clearBtn = document.createElement('button'),
          progressBar = document.createElement('span'),
          reader = new FileReader(),
          _this = this,
          khBase = this.base;

      clearBtn.innerHTML = _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_DELETE;
      div.className = "kh-media-list-item-tampon";
      div.append(img, clearBtn, progressBar);
      this.addFileRequest(this, div, progressBar, khBase, file, id);

      clearBtn.onclick = function () {
        if (div.parentElement.children.length <= 2) {
          div.parentElement.previousElementSibling.firstElementChild.lastElementChild.style.display = "block";
        }

        document.getElementById(":" + id).style.display = 'flex';

        _this.listItemAddIsEnable(false);

        _this.source.cancel();

        div.remove();
      };

      reader.onload = function (event) {
        img.src = event.target.result;
      };

      reader.readAsDataURL(file);
      return div;
    }
    /**
     * save new file
     * @param _this
     * @param div
     * @param progressBar
     * @param khBase
     * @param file
     * @param id
     */

  }, {
    key: "addFileRequest",
    value: function addFileRequest(_this, div, progressBar, khBase, file, id) {
      setTimeout(function () {
        _this.source = axios.CancelToken.source();
        axios.post(_config_json__WEBPACK_IMPORTED_MODULE_25__.add_file, _this.dataSend({
          file: file,
          id: id
        }), {
          onUploadProgress: function onUploadProgress(progressEvent) {
            var percent = progressEvent.loaded / progressEvent.total * 100;
            progressBar.style.width = "" + percent + "%";
          },
          cancelToken: _this.source.token
        }).then(function (response) {
          var dataResp = response.data;

          if (dataResp.is) {
            setTimeout(function () {
              div.replaceWith(_this.mediaStoreListItem({
                url: dataResp.url,
                id: dataResp.id,
                is: dataResp.is,
                name: dataResp.title,
                created: dataResp.created_at,
                selected: false
              }));

              _this.listItemAddIsEnable(false);
            }, 800);
          } else div.remove();
        })["catch"](function () {
          div.remove();
        });
      }, 900);
    }
    /**
     *
     * @param headerContainer
     * @param btnAddFolder
     * @param base
     */

  }, {
    key: "folderAddItem",
    value: function folderAddItem(headerContainer, btnAddFolder, base) {
      var _this = this,
          div = document.createElement('div'),
          size_container = document.createElement('div'),
          input = document.createElement('input'),
          width = document.createElement('input'),
          height = document.createElement('input'),
          button = document.createElement('button');

      div.id = "media-store-popup-input";
      input.type = "text";
      input.id = "media-store-popup-input-text";
      size_container.id = "size_container";
      width.className = "media-store-popup-input-size";
      height.className = "media-store-popup-input-size";
      input.placeholder = "Dossier";
      width.placeholder = "Largeur (" + _config_json__WEBPACK_IMPORTED_MODULE_25__.default_size.width + ")";
      height.placeholder = "Longueur (" + _config_json__WEBPACK_IMPORTED_MODULE_25__.default_size.height + ")";
      button.id = "media-store-popup-input-button";
      button.innerHTML = _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_SAVE;
      size_container.append(width, height);
      div.append(input, size_container, button);

      div.onclick = function (ev) {
        return ev.stopPropagation();
      };

      width.onkeydown = function (e) {
        width.value = width.value.replace(new RegExp(/[A-Za-z]/), '');
      };

      height.onkeydown = function (e) {
        width.value = width.value.replace(new RegExp(/[A-Za-z]/), '');
      };

      input.onkeydown = function (e) {
        if (e.keyCode === 13) {
          _this.userAddFolderRequest(input, width, height, _this, div, base);
        }
      };

      button.onclick = function (event) {
        /*if (input.value != null && input.value.trim() !== "") {
            _this.addFolderRequest({
                name: input.value,
                url: base.dataset.path_add_folder
            });
            input.value = "";
        }
        div.remove();*/
        _this.userAddFolderRequest(input, width, height, _this, div, base);
      };

      btnAddFolder.onclick = function (event) {
        event.stopPropagation();
        headerContainer.append(div);
        input.focus();
      };

      document.body.onclick = function () {
        return div.remove();
      };
    }
    /**
     *
     * @param {HTMLInputElement} input
     * @param {HTMLInputElement} width
     * @param {HTMLInputElement} height
     * @param {this} _this
     * @param {HTMLElement} div
     * @param {HTMLElement} base
     */

  }, {
    key: "userAddFolderRequest",
    value: function userAddFolderRequest(input, width, height, _this, div, base) {
      var _width = width.value.trim() !== "" ? width.value.toString().trim() : _config_json__WEBPACK_IMPORTED_MODULE_25__.default_size.width,
          _height = height.value.trim() !== "" ? height.value.toString().trim() : _config_json__WEBPACK_IMPORTED_MODULE_25__.default_size.height;

      if (input.value != null && input.value.trim() !== "") {
        _this.addFolderRequest({
          name: input.value,

          /*url: base.dataset.path_add_folder,*/
          url: _config_json__WEBPACK_IMPORTED_MODULE_25__.add_folder,
          width: _width,
          height: _height,
          prefix: this.prefix
        });

        input.value = "";
      }

      div.remove();
    }
    /**
     * Request save new folder
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} url
     * @param {string} prefix
     */

  }, {
    key: "addFolderRequest",
    value: function addFolderRequest(_ref7) {
      var name = _ref7.name,
          _ref7$width = _ref7.width,
          width = _ref7$width === void 0 ? 300 : _ref7$width,
          _ref7$height = _ref7.height,
          height = _ref7$height === void 0 ? 300 : _ref7$height,
          url = _ref7.url,
          prefix = _ref7.prefix;

      var folder = new FormData(),
          _this = this,
          listDisabled = _this.mediaStoreList({
        item: {
          "name": name,
          "width": width,
          "height": height,
          "id": "",
          "prefix": prefix,
          "catalog": [],
          "created_at": new Date().toString()
        },
        isMask: true
      }); //emptyOld


      folder.append("name", name);
      folder.append("prefix", prefix);
      folder.append("width", width.toString());
      folder.append("height", height.toString());
      if (this.viewEmpty) this.viewEmpty.style.display = "none";

      _this.subBody.insertBefore(listDisabled, _this.subBody.firstChild);

      this.buttonAddFolder.setAttribute("disabled", "disabled");
      axios.post(url, folder).then(function (response) {
        listDisabled.replaceWith(_this.mediaStoreList({
          item: response.data
        }));

        _this.buttonAddFolder.removeAttribute("disabled");
      })["catch"](function (e) {
        console.log(e);

        _this.buttonAddFolder.removeAttribute("disabled");

        listDisabled.remove();
      });
    }
  }, {
    key: "khMediaStoreBody",
    value: function khMediaStoreBody() {
      var root = document.createElement('div'),
          _this = this,
          loader = document.createElement('div'),
          header = document.createElement('header'),
          mediaButtonClose = document.createElement('button');

      this.viewTarget = document.querySelector('.img-media-store');
      this.buttonAddFolder = document.createElement('button');
      this.loaderContainer = document.createElement('div');
      this.body = document.createElement('div');
      this.subBody = document.createElement('div');
      this.buttonSave = document.createElement('button');
      this.file = document.createElement('input');
      this.base = document.getElementById('kh-media-store-base');
      this.prefix = this.viewTarget ? this.viewTarget.dataset.prefix : 'all';

      if (this.viewTarget) {
        if (this.viewTarget.dataset.width !== '0' || this.viewTarget.dataset.height !== '0') {
          if (this.viewTarget.dataset.width !== '0') _config_json__WEBPACK_IMPORTED_MODULE_25__.default_size.width = parseInt(this.viewTarget.dataset.width);
          if (this.viewTarget.dataset.height !== '0') _config_json__WEBPACK_IMPORTED_MODULE_25__.default_size.height = parseInt(this.viewTarget.dataset.height);
        }
      }

      this.file.id = "kh-media-store-file";
      this.file.type = "file";
      this.file.style.display = "none";
      this.body.id = "kh-media-store-body";
      this.subBody.id = "kh-media-store-sub-body";
      this.loaderContainer.id = "loader-container";
      loader.id = "kh-media-store-loader";
      this.loaderContainer.append(loader);
      this.subBody.append(this.file, this.loaderContainer);
      this.body.append(this.subBody);
      header.id = "kh-media-store-:header";
      this.buttonSave.id = "kh-media-store-save";
      this.buttonSave.textContent = this.viewTarget && this.viewTarget.dataset.reload === "true" ? "Fermer" : "Choisir";
      mediaButtonClose.id = "kh-media-store-close";
      mediaButtonClose.innerHTML = "<span>&times;</span>";
      root.id = "kh-media-store";
      this.buttonAddFolder.id = "img-container";
      this.buttonAddFolder.innerHTML = _svg__WEBPACK_IMPORTED_MODULE_23__.SVG_FOLDER_ADD;
      header.append(this.buttonAddFolder, mediaButtonClose);
      this.folderAddItem(header, this.buttonAddFolder, this.base); ///*

      mediaButtonClose.onclick = function () {
        this.base.style.display = "none";
        this.subBody.innerHTML = "";
        this.loaderContainer.style.display = "flex";
        this.subBody.append(this.file, this.loaderContainer);
        root.remove();
        if (this.viewTarget.dataset.reload === "true") location.reload();
      }.bind(this);

      this.buttonSave.onclick = function () {
        var img = document.getElementsByClassName(_this.viewTarget.dataset.img_class),
            input = document.getElementById(_this.viewTarget.dataset.input_id);
        this.base.style.display = "none";
        this.subBody.innerHTML = "";

        if (!(this.viewTarget.dataset.reload === "true")) {
          this.viewTarget.getElementsByClassName('media-store-icon').item(0).style.display = "none";
          input.value = this.buttonSave.dataset.id;

          for (var i = 0; i < img.length; i++) {
            img.item(i).setAttribute('src', this.buttonSave.dataset.url);

            img.item(i).onload = function () {
              this.style.display = "block";
            };

            if (img[i].hasAttribute('data-mask')) {
              var mask = document.getElementById(img[i].dataset.mask);

              if (mask) {
                mask.remove();
              }
            }
          }
        } else {
          location.reload();
        }
      }.bind(this);

      root.append(header, this.body, this.buttonSave);
      this.openMediaStore(this.base, root);
    }
    /**
     * convert date to string
     * @param {Date} date
     */

  }, {
    key: "dateFormat",
    value: function dateFormat(date) {
      return "".concat(date.getUTCDate(), ".").concat(date.getUTCMonth(), ".").concat(date.getUTCFullYear(), " \xE0 ").concat(date.getUTCHours(), ":").concat(date.getUTCMinutes());
    }
  }]);

  return KhMediaStore;
}();



/***/ }),

/***/ "./assets/js/admin/components/media-store/svg.js":
/*!*******************************************************!*\
  !*** ./assets/js/admin/components/media-store/svg.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVG_FOLDER": () => (/* binding */ SVG_FOLDER),
/* harmony export */   "SVG_ADD": () => (/* binding */ SVG_ADD),
/* harmony export */   "SVG_DELETE": () => (/* binding */ SVG_DELETE),
/* harmony export */   "SVG_FOLDER_DELETE": () => (/* binding */ SVG_FOLDER_DELETE),
/* harmony export */   "SVG_ADD_FOLDER": () => (/* binding */ SVG_ADD_FOLDER),
/* harmony export */   "SVG_EXCEL": () => (/* binding */ SVG_EXCEL),
/* harmony export */   "SVG_TEXT": () => (/* binding */ SVG_TEXT),
/* harmony export */   "SVG_PDF": () => (/* binding */ SVG_PDF),
/* harmony export */   "SVG_PDF_": () => (/* binding */ SVG_PDF_),
/* harmony export */   "SVG_WORD": () => (/* binding */ SVG_WORD),
/* harmony export */   "SVG_SAVE": () => (/* binding */ SVG_SAVE),
/* harmony export */   "SVG_FOLDER_ADD": () => (/* binding */ SVG_FOLDER_ADD),
/* harmony export */   "SVG_WARNING": () => (/* binding */ SVG_WARNING)
/* harmony export */ });
var SVG_FOLDER = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '\t viewBox="0 0 512 512" width="28" height="28" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' + '<polygon style="fill:#E0A02F;" points="0,118.904 512,118.904 512,75.704 194.848,75.704 169.184,50.312 30.72,50.312 0,81.032 "/>\n' + '<rect y="118.904" style="fill:#FFCC67;" width="512" height="342.768"/>\n' + '<g style="opacity:0.5;">\n' + '\t<rect y="449.112" style="fill:#E0A02F;" width="512" height="12.576"/>\n' + '</g>\n' + '<rect x="20.704" y="97.32" style="fill:#FFFFFF;" width="470.592" height="21.584"/>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '</svg>\n';
var SVG_ADD = '<svg version="1.1" id="Capa_1" width="32" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '\t viewBox="0 0 308.8 308.8" style="enable-background:new 0 0 308.8 308.8;" xml:space="preserve">\n' + '<g>\n' + '\t<path style="fill:#4A566E;" d="M35.6,18.8h180c19.6,0,35.6,16,35.6,35.6v185.2c0,19.6-16,35.6-35.6,35.6h-180\n' + '\t\tC16,275.2,0,259.2,0,239.6V54C0,34.8,16,18.8,35.6,18.8z"/>\n' + '\t<path style="fill:#00B594;" d="M116.4,186.4l-52.8-52.8L0,197.2v13.2v28.8c0,19.6,16,35.6,35.6,35.6h180c19.6,0,35.6-16,35.6-35.6\n' + '\t\tv-28.8v-39.6l-59.6-60L116.4,186.4z"/>\n' + '\t<circle style="fill:#FFCC03;" cx="114.8" cy="103.6" r="22.4"/>\n' + '\t<circle style="fill:#FFFFFF;" cx="251.2" cy="232.4" r="57.6"/>\n' + '</g>\n' + '<g>\n' + '\t<path style="fill:#00B594;" d="M224,240.8c-4.4,0-8.4-3.6-8.4-8.4s3.6-8.4,8.4-8.4h54.4c4.8,0,8.4,3.6,8.4,8.4s-3.6,8.4-8.4,8.4\n' + '\t\tH224z"/>\n' + '\t<path style="fill:#00B594;" d="M259.6,259.6c0,4.8-3.6,8.4-8.4,8.4s-8.4-3.6-8.4-8.4v-54c0-4.4,3.6-8.4,8.4-8.4\n' + '\t\tc4.4,0,8.4,3.6,8.4,8.4V259.6z"/>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '</svg>';
var SVG_DELETE = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 32 32"> <title>Supprimer</title><path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path></svg>';
var SVG_FOLDER_DELETE = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n' + '<title>Supprimer</title>\n' + '<path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>\n' + '<path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>\n' + '</svg>';
var SVG_ADD_FOLDER = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><title>Ajouter un dossier</title><path fill="#fff" d="M18 8l-4-4h-14v26h32v-22h-14zM22 22h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4z"></path></svg>';
var SVG_EXCEL = function SVG_EXCEL(title) {
  return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 32 32\"><title>".concat(title, "</title><path fill=\"#217346\" d=\"M31.404 4.136h-10.72v1.984h3.16v3.139h-3.16v1h3.16v3.143h-3.16v1.028h3.16v2.972h-3.16v1.191h3.16v2.979h-3.16v1.191h3.16v2.996h-3.16v2.185h10.72c0.169-0.051 0.311-0.251 0.424-0.597 0.113-0.349 0.172-0.633 0.172-0.848v-21.999c0-0.171-0.059-0.273-0.172-0.309-0.113-0.035-0.255-0.053-0.424-0.053zM30.013 25.755h-5.143v-2.993h5.143v2.996zM30.013 21.571h-5.143v-2.98h5.143zM30.013 17.4h-5.143v-2.959h5.143v2.961zM30.013 13.4h-5.143v-3.139h5.143v3.14zM30.013 9.241h-5.143v-3.12h5.143v3.14zM0 3.641v24.801l18.88 3.265v-31.416l-18.88 3.36zM11.191 22.403c-0.072-0.195-0.411-1.021-1.011-2.484-0.599-1.461-0.96-2.312-1.065-2.555h-0.033l-2.025 4.82-2.707-0.183 3.211-6-2.94-6 2.76-0.145 1.824 4.695h0.036l2.060-4.908 2.852-0.18-3.396 6.493 3.5 6.624-3.065-0.18z\"></path></svg>");
};
var SVG_TEXT = function SVG_TEXT(title) {
  return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 32 32\"><title>".concat(title, "</title><path  d=\"M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z\"></path><path d=\"M23 26h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z\"></path><path d=\"M23 22h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z\"></path><path d=\"M23 18h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z\"></path></svg>");
};
var SVG_PDF = function SVG_PDF(title) {
  return "<svg version=\"1.1\" width=\"54\" height=\"54\"  id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<title>".concat(title, "</title>\n<path style=\"fill:#E2E5E7;\" d=\"M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z\"/>\n<path style=\"fill:#B0B7BD;\" d=\"M384,128h96L352,0v96C352,113.6,366.4,128,384,128z\"/>\n<polygon style=\"fill:#CAD1D8;\" points=\"480,224 384,128 480,128 \"/>\n<path style=\"fill:#f15642;\" d=\"M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16\n\tV416z\"/>\n<g>\n\t<path style=\"fill:#FFFFFF;\" d=\"M101.744,303.152c0-4.224,3.328-8.832,8.688-8.832h29.552c16.64,0,31.616,11.136,31.616,32.48\n\t\tc0,20.224-14.976,31.488-31.616,31.488h-21.36v16.896c0,5.632-3.584,8.816-8.192,8.816c-4.224,0-8.688-3.184-8.688-8.816V303.152z\n\t\t M118.624,310.432v31.872h21.36c8.576,0,15.36-7.568,15.36-15.504c0-8.944-6.784-16.368-15.36-16.368H118.624z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M196.656,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296\n\t\tc58.464,0,57.184,88.528,1.152,88.528H196.656z M204.72,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H204.72z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M303.872,312.112v20.336h32.624c4.608,0,9.216,4.608,9.216,9.072c0,4.224-4.608,7.68-9.216,7.68\n\t\th-32.624v26.864c0,4.48-3.184,7.92-7.664,7.92c-5.632,0-9.072-3.44-9.072-7.92v-72.672c0-4.592,3.456-7.936,9.072-7.936h44.912\n\t\tc5.632,0,8.96,3.344,8.96,7.936c0,4.096-3.328,8.704-8.96,8.704h-37.248V312.112z\"/>\n</g>\n<path style=\"fill:#CAD1D8;\" d=\"M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z\"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>");
};
var SVG_PDF_ = function SVG_PDF_(title) {
  return "<svg id=\"Layer_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\"\n                             width=\"512\"\n                             xmlns=\"http://www.w3.org/2000/svg\">\n                             <title>".concat(title, "</title>\n                            <path\n                                d=\"m406 512h-345c-24.853 0-45-20.147-45-45v-422h30c0 8.276 6.724 15 15 15h315c16.569 0 30 13.431 30 30v90h-300v180h270c16.569 0 30 13.431 30 30z\"\n                                fill=\"#766e6e\"/>\n                            <path d=\"m376 60h-164.835v120h194.835v-90c0-16.569-13.431-30-30-30z\" fill=\"#5b5555\"/>\n                            <path d=\"m211.165 360h194.835v152h-194.835z\" fill=\"#5b5555\"/>\n                            <path d=\"m496 390h-420v-240h420z\" fill=\"#ff9100\"/>\n                            <path d=\"m211.165 150h284.835v240h-284.835z\" fill=\"#ff641a\"/>\n                            <path\n                                d=\"m166 330h-30v-120h45c24.814 0 45 20.186 45 45s-20.186 45-45 45h-15zm0-60h15c8.276 0 15-6.724 15-15s-6.724-15-15-15h-15z\"\n                                fill=\"#ffe6b3\"/>\n                            <g fill=\"#ffca80\">\n                                <path\n                                    d=\"m226 255c0-13.171-5.788-24.922-14.835-33.159v66.317c9.047-8.236 14.835-19.987 14.835-33.158z\"/>\n                                <path\n                                    d=\"m286 330h-30v-120h30c33.091 0 60 26.909 60 60s-26.909 60-60 60zm0-90v60c16.538 0 30-13.462 30-30s-13.462-30-30-30z\"/>\n                                <path d=\"m436 240v-30h-60v120h30v-30h30v-30h-30v-30z\"/>\n                            </g>\n                            <path d=\"m406 90h-345c-24.814 0-45-20.186-45-45s20.186-45 45-45h345z\" fill=\"#d9f2ff\"/>\n                            <path d=\"m211.165 0h194.835v90h-194.835z\" fill=\"#cdf\"/>\n                        </svg>");
};
var SVG_WORD = function SVG_WORD(title) {
  return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 32 32\"><title>".concat(title, "</title><path fill=\"#2b579a\" d=\"M31.999 4.977v22.063c0 0.188-0.067 0.34-0.199 0.461-0.135 0.125-0.295 0.184-0.48 0.184h-11.412v-3.060h9.309v-1.393h-9.317v-1.705h9.309v-1.392h-9.303v-1.72h9.307v-1.376h-9.307v-1.724h9.307v-1.392h-9.307v-1.705h9.307v-1.391h-9.307v-1.74h9.307v-1.325h-9.307v-3.457h11.416c0.199 0 0.36 0.064 0.477 0.199 0.14 0.132 0.2 0.293 0.199 0.475zM18.2 0.855v30.296l-18.2-3.149v-23.912l18.2-3.24zM15.453 9.799l-2.279 0.14-1.461 9.047h-0.033c-0.072-0.428-0.34-1.927-0.82-4.489l-0.852-4.351-2.139 0.107-0.856 4.244c-0.5 2.472-0.779 3.911-0.852 4.315h-0.020l-1.3-8.333-1.96 0.104 2.1 10.511 2.179 0.14 0.82-4.091c0.48-2.4 0.76-3.795 0.82-4.176h0.060c0.081 0.407 0.341 1.832 0.82 4.28l0.82 4.211 2.36 0.14 2.64-11.8z\"></path></svg>");
};
var SVG_SAVE = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z\"/></svg>";
var SVG_FOLDER_ADD = "<svg id=\"Flat\" height=\"32\" viewBox=\"0 0 512 512\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect fill=\"#f7cc38\" height=\"288\" rx=\"32\" width=\"384\" x=\"24\" y=\"88\"/>\n    <path d=\"m24 392a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-224a32 32 0 0 0 -32-32h-176v-64a32 32 0 0 0 -32-32h-112a32 32 0 0 0 -32 32z\"\n          fill=\"#fbe36a\"/>\n    <circle cx=\"384\" cy=\"368\" fill=\"#28a745\" r=\"104\"/>\n    <g fill=\"#e9eef2\">\n        <path d=\"m384 432a8 8 0 0 1 -8-8v-112a8 8 0 0 1 16 0v112a8 8 0 0 1 -8 8z\"/>\n        <path d=\"m440 376h-112a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16z\"/>\n    </g>\n</svg>";
var SVG_WARNING = "\n<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" width=\"64\" height=\"64\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<path style=\"fill:#3B4145;\" d=\"M322.939,62.642l178.737,309.583C508.231,383.578,512,396.74,512,410.791\n\tc0,42.67-34.592,77.264-77.264,77.264H256L194.189,256L256,23.946C284.62,23.946,309.587,39.519,322.939,62.642z\"/>\n<path style=\"fill:#525A61;\" d=\"M189.061,62.642L10.323,372.225C3.769,383.578,0,396.74,0,410.791\n\tc0,42.67,34.592,77.264,77.264,77.264H256V23.946C227.38,23.946,202.413,39.519,189.061,62.642z\"/>\n<path style=\"fill:#FFB751;\" d=\"M474.913,387.678L296.177,78.098c-8.056-13.959-22.849-22.767-38.848-23.22l152.869,402.275h24.539\n\tc25.559,0,46.358-20.798,46.358-46.358C481.095,402.677,478.952,394.683,474.913,387.678z\"/>\n<path style=\"fill:#FFD764;\" d=\"M444.853,387.678c3.492,7.005,5.336,14.999,5.336,23.117c0,25.559-17.935,46.358-39.992,46.358\n\tH77.264c-25.559,0-46.358-20.799-46.358-46.358c0-8.118,2.143-16.112,6.181-23.117l178.736-309.58\n\tc8.283-14.34,23.674-23.251,40.177-23.251c0.443,0,0.886,0.01,1.329,0.031c13.732,0.536,26.414,9.323,33.326,23.22L444.853,387.678z\n\t\"/>\n<path style=\"fill:#3B4145;\" d=\"M256,354.131v51.509c14.227,0,25.755-11.528,25.755-25.755\n\tC281.755,365.659,270.227,354.131,256,354.131z\"/>\n<path style=\"fill:#525A61;\" d=\"M256,354.131c2.843,0,5.151,11.528,5.151,25.755c0,14.227-2.308,25.755-5.151,25.755\n\tc-14.227,0-25.755-11.528-25.755-25.755C230.245,365.659,241.773,354.131,256,354.131z\"/>\n<path style=\"fill:#3B4145;\" d=\"M256,132.646V323.23c14.227,0,25.755-11.538,25.755-25.755V158.401\n\tC281.755,144.174,270.227,132.646,256,132.646z\"/>\n<path style=\"fill:#525A61;\" d=\"M256,132.646c2.843,0,5.151,11.528,5.151,25.755v139.074c0,14.216-2.308,25.755-5.151,25.755\n\tc-14.227,0-25.755-11.538-25.755-25.755V158.401C230.245,144.174,241.773,132.646,256,132.646z\"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n";

/***/ }),

/***/ "./assets/js/admin/components/selectCustom/KhSelect.js":
/*!*************************************************************!*\
  !*** ./assets/js/admin/components/selectCustom/KhSelect.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KHSelect)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _flag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./flag */ "./assets/js/admin/components/selectCustom/flag.js");














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author Koroph <yjk@outlook.fr>
 *
 * @website http://koroph.site
 * @link  https://github.com/Koroph
 * @license MIT
 * @copyright Copyright (c) 2020.
 */


var KHSelect = /*#__PURE__*/function () {
  /**
   * @param {string|Element} target
   */
  function KHSelect(target) {
    _classCallCheck(this, KHSelect);

    this.query = matchMedia("screen and (max-width:568px)");
    this.bindAction(target);
    this.closeModelGlobal();
  }
  /**
   * @private
   * {string|Element} target
   */


  _createClass(KHSelect, [{
    key: "bindAction",
    value: function bindAction(target) {
      if (target instanceof Element) target.insertAdjacentElement("beforebegin", this.customBuilder(target));else this.bindWithClassName(target);
    }
    /**
     * @private
     * @param {string} target
     */

  }, {
    key: "bindWithClassName",
    value: function bindWithClassName(target) {
      this.element = document.getElementsByClassName(target);

      for (var i = 0; i < this.element.length; i++) {
        this.element.item(i).insertAdjacentElement("beforebegin", this.customBuilder(this.element.item(i)));
      }
    }
    /**
     * close model when click document element
     * @private
     */

  }, {
    key: "closeModelGlobal",
    value: function closeModelGlobal() {
      document.documentElement.addEventListener('click', function () {
        var khBody = document.getElementsByClassName('kh-select-body');

        for (var i = 0; i < khBody.length; i++) {
          if (khBody.item(i).style.display === "flex") {
            khBody.item(i).style.display = "none";
            this.selectModalIsClose(null);
          }
        }
      }.bind(this));
    }
    /**
     *
     * @param {HTMLSelectElement} select
     * @returns {HTMLDivElement}
     */

  }, {
    key: "customBuilder",
    value: function customBuilder(select) {
      var _this2 = this;

      var container = document.createElement('div'),
          header = document.createElement('div'),
          khLabel = document.createElement('div'),
          khIcon = document.createElement('div'),
          body = document.createElement('div'),
          container_item = document.createElement('div'),
          content = document.createElement('div'),
          selectedView = document.createElement('div'),
          khData = this.selectData(select),
          _this = this;

      container.className = "kh-select";
      header.className = "kh-select-header";
      body.className = "kh-select-body";
      selectedView.className = "select-view";
      body.style.display = "none";
      select.style.display = "none";
      content.className = "kh-select-content";
      container_item.id = "item_container";
      header.append(khIcon, khLabel);
      khLabel.appendChild(this.placeHolder(select, khLabel));

      if (!select.hasAttribute('disabled')) {
        header.onclick = function (event) {
          if (!_this2.query.matches) _this2.openSelect(event, body);else {
            select.click();
            select.addEventListener('change', function () {
              return khLabel.innerText = select.options[select.selectedIndex].innerText;
            });
          }

          _this2.selectModalIsOpen(select);
        };
      }

      if (!this.query.matches) {
        if (Object.keys(khData).length > 1) {
          var _loop = function _loop(group) {
            if (group !== "default") container_item.append(_this2._createGroupItem(group));
            khData[group].forEach(function (value) {
              var item = _this2.createVictualSelectItem(value, select, _this, selectedView, body, khLabel, khIcon);

              if (group === "default") item.style.paddingLeft = "0";
              container_item.append(item);
            });
          };

          for (var group in khData) {
            _loop(group);
          }
        } else {
          khData["default"].forEach(function (value) {
            var item = _this2.createVictualSelectItem(value, select, _this, selectedView, body, khLabel, khIcon);

            container_item.append(item);
          });
        }

        body.append(container_item);

        _this.searchFieldInput(select, body);

        content.append(header, body);
        if (select.hasAttribute('multiple')) container.append(content, selectedView);else container.append(content);
      }

      return container;
    }
    /**
     *
     * @param value
     * @param {HTMLSelectElement} select
     * @param _this
     * @param {HTMLDivElement} selectedView
     * @param {HTMLDivElement} body
     * @param khLabel
     * @param khIcon
     * @return {HTMLDivElement}
     */

  }, {
    key: "createVictualSelectItem",
    value: function createVictualSelectItem(value, select, _this, selectedView, body, khLabel, khIcon) {
      var item = document.createElement('div'),
          icon = document.createElement('div'),
          label = document.createElement('div'),
          select_view_item = document.createElement('div');
      item.className = "kh-select-item";
      icon.className = "kh-select-item-icon";
      label.className = "kh-select-item-label";
      select_view_item.className = "select-view-item";
      label.innerText = value.label;
      /* if (select.options.item(value.index).hasAttribute('data-flag') || select.options.item(value.index).hasAttribute('data-icon')) {
           if (select.options.item(value.index).hasAttribute('data-flag')) {
               icon.innerHTML = _this.flag(select.options.item(value.index).dataset.flag);
           }
           if (select.options.item(value.index).hasAttribute('data-icon')) {
               icon.innerHTML = _this._createIconItem(select.options.item(value.index).dataset.icon);
           }
           item.append(icon, label);
       } else item.append(label);
      */

      _this._addIcon(select.options.item(value.index), icon);

      item.append(icon, label);

      item.onclick = function (e) {
        e.stopPropagation();

        if (select.hasAttribute('multiple')) {
          _this.multiSelectItem(item, select, value, selectedView, select_view_item);

          if (!e.ctrlKey) body.style.display = "none";
        } else if (!select.hasAttribute('multiple')) {
          _this.itemFill(body, select, value, khLabel, khIcon, this);
        } else body.style.display = "none";

        _this.selectModalIsClose(select);
      };

      if (value.selected) {
        item.classList.add('selected');

        if (select.hasAttribute('multiple')) {
          select_view_item.innerText = value.label;
          selectedView.appendChild(select_view_item);
        } else {
          khLabel.innerText = value.label;
        }

        _this._addIcon(select.options.item(value.index), khIcon);
        /* if (select.options.item(value.index).hasAttribute('data-flag') || select.options.item(value.index).hasAttribute('data-icon')) {
             if (select.options.item(value.index).hasAttribute('data-flag')) {
                 khIcon.innerHTML = _this.flag(select.options.item(value.index).dataset.flag);
             }
             if (select.options.item(value.index).hasAttribute('data-icon')) {
                 khIcon.innerHTML = _this._createIconItem(select.options.item(value.index).dataset.icon);
             }
         }*/

      }

      return item;
    }
    /**
     *
     * @param {HTMLDivElement} body
     * @param {HTMLSelectElement} select
     * @param {object} value
     * @param {HTMLDivElement} khLabel
     * @param {HTMLDivElement} khIcon
     * @param _this
     */

  }, {
    key: "itemFill",
    value: function itemFill(body, select, value, khLabel, khIcon, _this) {
      /**
       *
       * @type {HTMLCollectionOf<Element>}
       */
      var oldSelected = body.getElementsByClassName('selected');
      body.style.display = "none";
      select.selectedIndex = value.index;
      select.dispatchEvent(new Event("khchange"));

      if (oldSelected.length) {
        for (var i = 0; i < oldSelected.length; i++) {
          oldSelected.item(i).classList.remove('selected');
        }
      }

      _this.classList.add('selected');

      khLabel.innerText = value.label;

      this._addIcon(select.options.item(value.index), khIcon);
      /*if (select.options.item(value.index).hasAttribute('data-flag') || select.options.item(value.index).hasAttribute('data-icon')) {
          if (select.options.item(value.index).hasAttribute('data-flag')) {
              khIcon.innerHTML = this.flag(select.options.item(value.index).dataset.flag);
          }
          if (select.options.item(value.index).hasAttribute('data-icon')) {
              khIcon.innerHTML = this._createIconItem(select.options.item(value.index).dataset.icon);
          }
      }*/

    }
    /**
     *
     * @param {HTMLOptionElement} option
     * @param {HTMLDivElement} khIcon
     * @private
     */

  }, {
    key: "_addIcon",
    value: function _addIcon(option, khIcon) {
      var _FLAG = "data-flag",
          _ICON = "data-icon";

      if (option.hasAttribute(_FLAG) || option.hasAttribute(_ICON)) {
        if (option.hasAttribute(_FLAG)) {
          khIcon.innerHTML = this.flag(option.dataset.flag);
        }

        if (option.hasAttribute(_ICON)) {
          khIcon.innerHTML = this._createIconItem(option.dataset.icon);
        }
      }
    }
    /**
     * create icon item content
     * @param {string} icon
     * @return {string}
     * @private
     */

  }, {
    key: "_createIconItem",
    value: function _createIconItem(icon) {
      return "<span class=\"".concat(icon, "\"></span>");
    }
    /**
     *
     * @param {string} group
     * @return {HTMLDivElement}
     * @private
     */

  }, {
    key: "_createGroupItem",
    value: function _createGroupItem(group) {
      var groupElement = document.createElement('div');
      groupElement.classList.add("select-group");
      groupElement.innerText = group;
      return groupElement;
    }
    /**
     *
     * @param {MouseEvent} event
     * @param {HTMLDivElement} body
     */

  }, {
    key: "openSelect",
    value: function openSelect(event, body) {
      event.stopPropagation();
      var khBody = document.getElementsByClassName('kh-select-body');
      if (body.style.display === "none") body.style.display = "flex";else body.style.display = "none"; // close other modal

      for (var i = 0; i < khBody.length; i++) {
        if (khBody.item(i) !== body && khBody.item(i).style.display === "flex") {
          khBody.item(i).style.display = "none";
        }
      }

      if (window.innerHeight - (event.pageY - window.pageYOffset) < body.offsetHeight) {
        body.style.bottom = "0";
        body.style.top = "auto";
        body.style.flexDirection = "column-reverse";
      } else {
        body.style.bottom = "auto";
        body.style.top = "0";
        body.style.flexDirection = "column";
      }
    }
    /**
     *
     * @param {HTMLSelectElement} select
     * @param label
     * @returns {HTMLSpanElement}
     */

  }, {
    key: "placeHolder",
    value: function placeHolder(select, label) {
      var placeHolder = "Choisir une option",
          span = document.createElement('span');
      if (select.hasAttribute("data-placeholder")) placeHolder = select.dataset.placeholder;
      span.innerText = placeHolder;
      return span;
    }
    /**
     *
     * @param {Element} item
     * @param {HTMLSelectElement} select
     * @param {object} value
     * @param {Element} selectedView
     * @param {Element} select_view_item
     */

  }, {
    key: "multiSelectItem",
    value: function multiSelectItem(item, select, value, selectedView, select_view_item) {
      if (item.classList.contains('selected')) {
        select.options.item(value.index).selected = false;
        item.classList.remove('selected');
        selectedView.removeChild(select_view_item);
      } else {
        select.options.item(value.index).selected = true;
        item.classList.add('selected');
        select_view_item.innerText = value.label;
        selectedView.appendChild(select_view_item);
      }
    }
    /**
     * add input search
     * @private
     * @param {HTMLSelectElement} select
     * @param {HTMLDivElement} body
     */

  }, {
    key: "searchFieldInput",
    value: function searchFieldInput(select, body) {
      var _this3 = this;

      if (select.hasAttribute('data-search') && select.dataset.search === "true") {
        var input = document.createElement('input'),
            search_container = document.createElement('div'),
            search_icon = document.createElement('span');
        input.type = "search";
        input.id = "search_input";
        search_container.id = "search_container";
        input.placeholder = "Recherche";
        input.autocomplete = "false";
        input.type = "search";
        search_icon.classList.add('search-icon');
        search_icon.innerHTML = _flag__WEBPACK_IMPORTED_MODULE_13__.SEARCH_ICON;

        input.onclick = function (event) {
          return event.stopPropagation();
        };

        input.oninput = function (event) {
          return _this3.selectFilter(event, body);
        };
        /* input.onkeydown = function (e) {
             if (e.key === "Enter") {
                 input.value = "";
                 body.style.display = "none";
             }
         }*/


        search_container.append(input, search_icon);
        body.insertAdjacentElement("afterbegin", search_container);
      }
    }
    /**
     * @private
     * @param {Event} event
     * @param {Element} body
     */

  }, {
    key: "selectFilter",
    value: function selectFilter(event, body) {
      var khValue = event.target.value.toString().toLocaleLowerCase(),
          khItem = body.getElementsByClassName('kh-select-item'),
          group = body.getElementsByClassName('select-group');

      for (var i = 0; i < khItem.length; i++) {
        if (khItem.item(i).lastChild.textContent.toLocaleLowerCase().includes(khValue, 0)) {
          khItem.item(i).style.display = "block";
        } else khItem.item(i).style.display = "none";
      }

      for (var _i = 0; _i < group.length; _i++) {
        var _next = group[_i].nextElementSibling,
            is = false;

        while (_next !== null && _next.classList.contains('kh-select-item')) {
          if (_next.style.display === "block") {
            is = true;
            break;
          }

          _next = _next.nextElementSibling;
        }

        if (!is) group[_i].style.display = "none";else group[_i].style.display = "block";
      }
    }
    /**
     *
     * @param {HTMLSelectElement} select
     * @returns {{}}
     */

  }, {
    key: "selectData",
    value: function selectData(select) {
      //const data = [];
      var options = select.options,
          optgroup = select.getElementsByTagName('optgroup');
      var selectData = {};
      selectData['default'] = [];

      for (var i = 0; i < optgroup.length; i++) {
        if (!(optgroup[i].label in Object.keys(selectData))) {
          selectData[optgroup[i].label] = [];
        }
      }

      for (var _i2 = 0; _i2 < options.length; _i2++) {
        if (options.item(_i2).parentNode instanceof HTMLOptGroupElement) {
          selectData[options.item(_i2).parentNode.label].push({
            label: options.item(_i2).text,
            value: options.item(_i2).value,
            index: options.item(_i2).index,
            selected: options.item(_i2).hasAttribute('selected')
          });
        } else {
          if (options.item(_i2).value.trim() !== "") selectData["default"].push({
            label: options.item(_i2).text,
            value: options.item(_i2).value,
            index: options.item(_i2).index,
            selected: options.item(_i2).hasAttribute('selected')
          });
        }
        /* data.push({
             label: options.item(i).text,
             value: options.item(i).value,
             index: options.item(i).index,
             selected: options.item(i).hasAttribute('selected')
         });*/

      }

      return selectData;
    }
    /**
     * get flag country
     * @private
     * @param {string} value
     * @returns {string}
     */

  }, {
    key: "flag",
    value: function flag(value) {
      switch (value) {
        case "fr":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_FR;

        case "en":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_EN;

        case "ge":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_GER;

        case "p_t":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_P_T;

        case "c_r":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_C_R;

        case "m":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_M;

        case "h_r":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_H_R;

        case "p_r":
          return _flag__WEBPACK_IMPORTED_MODULE_13__.FLAG_P_R;
      }
    }
    /**
     *
     * @param {HTMLSelectElement} target
     */

  }, {
    key: "selectModalIsOpen",
    value: function selectModalIsOpen(target) {
      target.parentElement.classList.add("active");
    }
    /**
     *
     * @param {HTMLSelectElement|null} target
     */

  }, {
    key: "selectModalIsClose",
    value: function selectModalIsClose(target) {
      if (target === null) {
        var targets = document.getElementsByClassName('kh-select-id');

        if (targets.length) {
          for (var i = 0; i < targets.length; i++) {
            if (targets.item(i).classList.contains("active")) targets.item(i).classList.remove('active');
          }
        }
      } else {
        target.parentElement.classList.remove("active");
      }
    }
  }]);

  return KHSelect;
}();



/***/ }),

/***/ "./assets/js/admin/components/selectCustom/flag.js":
/*!*********************************************************!*\
  !*** ./assets/js/admin/components/selectCustom/flag.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEARCH_ICON": () => (/* binding */ SEARCH_ICON),
/* harmony export */   "FLAG_EN": () => (/* binding */ FLAG_EN),
/* harmony export */   "FLAG_FR": () => (/* binding */ FLAG_FR),
/* harmony export */   "FLAG_GER": () => (/* binding */ FLAG_GER),
/* harmony export */   "FLAG_P_T": () => (/* binding */ FLAG_P_T),
/* harmony export */   "FLAG_C_R": () => (/* binding */ FLAG_C_R),
/* harmony export */   "FLAG_M": () => (/* binding */ FLAG_M),
/* harmony export */   "FLAG_H_R": () => (/* binding */ FLAG_H_R),
/* harmony export */   "FLAG_P_R": () => (/* binding */ FLAG_P_R)
/* harmony export */ });
var SEARCH_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#000000\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>";
var FLAG_EN = "\n<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"><circle style=\"fill:#F0F0F0;\" cx=\"256\" cy=\"256\" r=\"256\"/><g><path style=\"fill:#0052B4;\" d=\"M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z\"/><path style=\"fill:#0052B4;\" d=\"M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z\"/><path style=\"fill:#0052B4;\" d=\"M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784\nz\"/><path style=\"fill:#0052B4;\" d=\"M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z\"/><path style=\"fill:#0052B4;\" d=\"M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z\"/><path style=\"fill:#0052B4;\" d=\"M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z\"/><path style=\"fill:#0052B4;\" d=\"M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z\"/><path style=\"fill:#0052B4;\" d=\"M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z\"/></g><g><path style=\"fill:#D80027;\" d=\"M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0\nc-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391\nh220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442\nC511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z\"/><path style=\"fill:#D80027;\" d=\"M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435\nl-97.802-97.802h-31.482V322.784z\"/><path style=\"fill:#D80027;\" d=\"M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804\nV322.784z\"/><path style=\"fill:#D80027;\" d=\"M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803\nH189.217z\"/><path style=\"fill:#D80027;\" d=\"M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802,97.803V189.219z\"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n";
var FLAG_FR = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<circle style=\"fill:#F0F0F0;\" cx=\"256\" cy=\"256\" r=\"256\"/>\n<path style=\"fill:#D80027;\" d=\"M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z\"/>\n<path style=\"fill:#0052B4;\" d=\"M0,256c0,110.071,69.473,203.906,166.957,240.077V15.923C69.473,52.094,0,145.929,0,256z\"/>\n<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n";
var FLAG_GER = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<path style=\"fill:#FFDA44;\" d=\"M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783\nL15.923,345.043z\"/>\n<path d=\"M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z\"/>\n<path style=\"fill:#D80027;\" d=\"M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155\nC506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z\"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n";
var FLAG_P_T = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#E5BA03;\" d=\"M488.8,170.178h-28.796c-12.792,0-23.2,10.408-23.2,23.2v22.396l-9.564,25.864l14.694,5.433\n\t\tl8.158-22.062h30.277c17.441,0,31.63-14.19,31.63-31.63C512,180.586,501.592,170.178,488.8,170.178z\"/>\n\t<path style=\"fill:#E5BA03;\" d=\"M75.196,193.378c0-12.792-10.408-23.2-23.2-23.2H23.199C10.407,170.178,0,180.586,0,193.378\n\t\tc0,17.441,14.19,31.63,31.63,31.63h30.277l8.158,22.062l14.694-5.433l-9.564-25.864V193.378z\"/>\n</g>\n<polygon style=\"fill:#F9CA00;\" points=\"340.558,53.571 171.442,53.571 155.774,133.129 356.226,133.129 \"/>\n<g>\n\t<path style=\"fill:#2B2A32;\" d=\"M29.893,369.08v73.747c0,8.618,6.986,15.603,15.603,15.603h60.176\n\t\tc8.618,0,15.603-6.986,15.603-15.603v-79.413\"/>\n\t<path style=\"fill:#2B2A32;\" d=\"M390.73,363.414v79.413c0,8.618,6.986,15.603,15.603,15.603h60.176\n\t\tc8.618,0,15.603-6.986,15.603-15.603v-84.888\"/>\n</g>\n<path style=\"fill:#0D1B24;\" d=\"M340.59,416.676H171.41c-12.115,0-21.936-9.822-21.936-21.936l0,0l140.54-18.794l72.512,18.794l0,0\n\tC362.526,406.855,352.705,416.676,340.59,416.676z\"/>\n<path style=\"fill:#F9CA00;\" d=\"M466.606,244.354H45.394c-16.059,0-29.078,13.019-29.078,29.078v89.982h479.368v-89.982\n\tC495.684,257.373,482.665,244.354,466.606,244.354z\"/>\n<path style=\"fill:#E5BA03;\" d=\"M92.044,244.354h-46.65c-16.059,0-29.078,13.019-29.078,29.078v89.982h46.651v-89.982\n\tC62.967,257.373,75.985,244.354,92.044,244.354z\"/>\n<rect x=\"136.945\" y=\"272\" style=\"fill:#616970;\" width=\"238.119\" height=\"45.43\"/>\n<path style=\"fill:#8292A3;\" d=\"M511.893,355.888v26.017c0,7.092-5.755,12.836-12.836,12.836H12.96\n\tc-7.092,0-12.836-5.744-12.836-12.836v-26.017c0-7.092,5.744-12.836,12.836-12.836h486.097\n\tC506.139,343.052,511.893,348.797,511.893,355.888z\"/>\n<path style=\"fill:#9AA7B8;\" d=\"M511.893,355.888v26.017c0,7.092-5.755,12.836-12.836,12.836H49.86\n\tc-7.092,0-12.836-5.744-12.836-12.836v-26.017c0-7.092,5.744-12.836,12.836-12.836h449.198\n\tC506.139,343.052,511.893,348.797,511.893,355.888z\"/>\n<path style=\"fill:#C0EAF9;\" d=\"M434.591,244.353H77.408l29.14-87.492c4.71-14.173,17.975-23.729,32.91-23.729h233.085\n\tc14.935,0,28.2,9.557,32.91,23.729L434.591,244.353z\"/>\n<path style=\"fill:#A0D9F2;\" d=\"M433.275,244.353H78.724l21.641-62.425c4.909-14.173,18.716-23.729,34.268-23.729h242.735\n\tc15.552,0,29.359,9.557,34.268,23.729L433.275,244.353z\"/>\n<path style=\"fill:#F9CA00;\" d=\"M429.63,254.261l-31.605-94.929c-3.659-10.988-13.897-18.37-25.479-18.37H139.453\n\tc-11.581,0-21.819,7.382-25.478,18.37L82.37,254.261l-14.864-4.95l31.606-94.929c5.792-17.398,22.004-29.088,40.341-29.088h233.094\n\tc18.337,0,34.55,11.689,40.342,29.088l31.606,94.929L429.63,254.261z\"/>\n<path style=\"fill:#E5BA03;\" d=\"M375.059,325.267H136.941c-4.326,0-7.833-3.507-7.833-7.833v-45.43c0-4.326,3.507-7.833,7.833-7.833\n\th238.118c4.326,0,7.833,3.507,7.833,7.833v45.43C382.892,321.76,379.385,325.267,375.059,325.267z M144.774,309.601h222.451v-29.764\n\tH144.774V309.601z\"/>\n<g>\n\t<rect x=\"403.253\" y=\"282.998\" style=\"fill:#FEFFFF;\" width=\"65.796\" height=\"34.464\"/>\n\t<rect x=\"42.947\" y=\"282.998\" style=\"fill:#FEFFFF;\" width=\"65.796\" height=\"34.464\"/>\n</g>\n<g>\n\t<path style=\"fill:#2B2A32;\" d=\"M219.432,69.77c2.295,0,3.268,2.502,3.268,4.797c0,2.642-1.182,4.937-3.268,4.937h-9.595v37.756\n\t\tc0,2.225-2.711,3.337-5.424,3.337c-2.711,0-5.424-1.112-5.424-3.337V79.504h-9.595c-2.086,0-3.268-2.295-3.268-4.937\n\t\tc0-2.295,0.973-4.797,3.268-4.797H219.432z\"/>\n\t<path style=\"fill:#2B2A32;\" d=\"M222.628,116.148c0-0.209,0.07-0.487,0.139-0.765L235.7,72.969c0.765-2.435,3.894-3.616,7.093-3.616\n\t\ts6.327,1.181,7.093,3.616l13.002,42.414c0.07,0.279,0.139,0.557,0.139,0.765c0,2.572-3.964,4.45-6.953,4.45\n\t\tc-1.739,0-3.129-0.557-3.547-2.017l-2.365-8.692h-14.671l-2.365,8.692c-0.417,1.46-1.808,2.017-3.546,2.017\n\t\tC226.592,120.598,222.628,118.72,222.628,116.148z M247.868,101.547l-5.076-18.635l-5.076,18.635\n\t\tC237.716,101.546,247.868,101.546,247.868,101.547z\"/>\n\t<path style=\"fill:#2B2A32;\" d=\"M287.287,102.658l-10.152,17.245c-0.487,0.765-1.46,1.112-2.572,1.112\n\t\tc-2.989,0-7.231-2.365-7.231-5.354c0-0.627,0.209-1.252,0.626-1.947l12.029-18.565l-11.542-18.495\n\t\tc-0.487-0.765-0.696-1.46-0.696-2.156c0-2.92,3.963-5.145,7.023-5.145c1.529,0,2.572,0.556,3.268,1.808l9.247,16.131l9.247-16.131\n\t\tc0.696-1.252,1.739-1.808,3.268-1.808c3.059,0,7.023,2.225,7.023,5.145c0,0.696-0.209,1.391-0.696,2.156l-11.542,18.495\n\t\tl12.029,18.565c0.417,0.696,0.626,1.321,0.626,1.947c0,2.989-4.241,5.354-7.232,5.354c-1.112,0-2.155-0.348-2.572-1.112\n\t\tL287.287,102.658z\"/>\n\t<path style=\"fill:#2B2A32;\" d=\"M315.027,73.038c0-2.295,2.711-3.268,5.423-3.268c2.712,0,5.424,0.973,5.424,3.268v44.222\n\t\tc0,2.225-2.711,3.337-5.424,3.337c-2.711,0-5.423-1.112-5.423-3.337V73.038z\"/>\n</g>\n<g>\n\t<rect x=\"129.112\" y=\"272\" style=\"fill:#E5BA03;\" width=\"15.666\" height=\"45.43\"/>\n\t<rect x=\"168.79\" y=\"272\" style=\"fill:#E5BA03;\" width=\"15.666\" height=\"45.43\"/>\n\t<rect x=\"208.478\" y=\"272\" style=\"fill:#E5BA03;\" width=\"15.666\" height=\"45.43\"/>\n\t<rect x=\"248.166\" y=\"272\" style=\"fill:#E5BA03;\" width=\"15.666\" height=\"45.43\"/>\n\t<rect x=\"287.854\" y=\"272\" style=\"fill:#E5BA03;\" width=\"15.666\" height=\"45.43\"/>\n\t<rect x=\"327.543\" y=\"272\" style=\"fill:#E5BA03;\" width=\"15.666\" height=\"45.43\"/>\n\t<rect x=\"367.231\" y=\"272\" style=\"fill:#E5BA03;\" width=\"15.666\" height=\"45.43\"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>";
var FLAG_C_R = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 496.485 496.485\" style=\"enable-background:new 0 0 496.485 496.485;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#454545;\" d=\"M416.628,350.32v47.352c0,8.564,6.951,15.515,15.515,15.515h34.801\n\t\tc8.564,0,15.515-6.951,15.515-15.515V350.32H416.628z\"/>\n\t<path style=\"fill:#454545;\" d=\"M14.026,350.32v47.352c0,8.564,6.951,15.515,15.515,15.515h34.8c8.564,0,15.515-6.951,15.515-15.515\n\t\tV350.32H14.026z\"/>\n</g>\n<g>\n\t<path style=\"fill:#CACACA;\" d=\"M485.19,162.758H467.44c-6.237,0-11.295,5.058-11.295,11.295s-5.058,11.295-11.295,11.295h-9.775\n\t\tl4.484,7.277h45.63c6.237,0,11.295-5.058,11.295-11.295v-7.277C496.485,167.816,491.427,162.758,485.19,162.758z\"/>\n\t<path style=\"fill:#CACACA;\" d=\"M51.634,185.348c-6.237,0-11.295-5.058-11.295-11.295c0-6.237-5.058-11.295-11.295-11.295H11.295\n\t\tC5.058,162.758,0,167.816,0,174.053v7.277c0,6.237,5.058,11.295,11.295,11.295h45.63l4.484-7.277H51.634z\"/>\n</g>\n<path style=\"fill:#F3F3F3;\" d=\"M433.137,166.435c-11.792-40.603-33.233-72.13-77.265-78.181c-48.097-6.609-167.129-6.609-215.226,0\n\tc-44.048,6.066-65.489,37.578-77.265,78.181c-13.591,46.67-49.338,44.327-49.338,101.562v93.851H482.49v-93.851\n\tC482.475,212.53,446.061,210.855,433.137,166.435z\"/>\n<path style=\"fill:#168DE2;\" d=\"M437.357,194.176c-4.949-7.432-8.983-15.794-11.667-24.917c-2.529-8.657-5.772-17.486-9.635-26.267\n\tc-10.923-24.778-34.397-42.946-61.254-46.825c-47.538-6.749-164.616-6.889-213.116,0c-40.944,5.896-60.168,36.368-70.904,73.092\n\tc-2.669,9.138-6.718,17.47-11.667,24.917C185.018,204.09,311.482,204.09,437.357,194.176z\"/>\n<g>\n\t<path style=\"fill:#CACACA;\" d=\"M468.837,308.399c0,0-10.473,6.811-52.907,12.055c-42.434,5.244-45.584,38.245-45.584,38.245h70.734\n\t\tC479.31,347.698,468.837,308.399,468.837,308.399z\"/>\n\t<path style=\"fill:#CACACA;\" d=\"M443.873,215.432c-39.439,16.089-42.062,16.493-67.336,35.126\n\t\tC390.951,225.982,427.52,215.308,443.873,215.432z\"/>\n\t<path style=\"fill:#CACACA;\" d=\"M52.612,215.432c51.929,21.194,51.821,23.676,67.336,35.126\n\t\tC105.891,226.587,70.128,215.292,52.612,215.432z\"/>\n\t<polygon style=\"fill:#CACACA;\" points=\"365.351,337.567 357.236,354.339 139.248,354.339 131.134,337.567 \t\"/>\n\t<path style=\"fill:#CACACA;\" d=\"M80.57,320.454c-42.434-5.244-52.907-12.055-52.907-12.055s-10.473,39.3,27.772,50.3h70.703\n\t\tC126.138,358.699,123.004,325.682,80.57,320.454z\"/>\n</g>\n<g>\n\t<path style=\"fill:#ED6262;\" d=\"M454.951,242.816c-50.207-4.282-84.263,34.49-84.263,34.49s-7.68,4.453,49.68,10.83\n\t\tc27.431,3.041,39.983-6.594,45.63-17.486C471.924,259.184,465.641,243.731,454.951,242.816z\"/>\n\t<path style=\"fill:#ED6262;\" d=\"M126.169,277.306c0,0-34.18-38.772-84.573-34.49c-10.736,0.915-17.036,16.368-11.093,27.819\n\t\tc5.663,10.892,18.261,20.527,45.801,17.486C133.88,281.759,126.169,277.306,126.169,277.306z\"/>\n</g>\n<path style=\"fill:#6F6F6F;\" d=\"M482.475,361.848v8.906c0,7.23-5.88,13.079-13.11,13.079H27.136c-7.23,0-13.11-5.849-13.11-13.079\n\tv-8.906H482.475z\"/>\n<path style=\"fill:#777777;\" d=\"M384.403,298.546c-24.312-27.772-59.439-43.691-96.349-43.691h-79.624\n\tc-36.911,0-72.021,15.919-96.349,43.691c-7.897,9.014-1.489,23.133,10.488,23.133h251.345\n\tC385.893,321.679,392.301,307.561,384.403,298.546z\"/>\n<g>\n\t<path style=\"fill:#6F6F6F;\" d=\"M190.309,275.336H306.16c2.622,0,4.763-2.126,4.763-4.763s-2.126-4.763-4.763-4.763H190.309\n\t\tc-2.638,0-4.763,2.126-4.763,4.763S187.687,275.336,190.309,275.336z\"/>\n\t<path style=\"fill:#6F6F6F;\" d=\"M175.973,293.07h144.524c2.622,0,4.763-2.126,4.763-4.763c0-2.622-2.126-4.763-4.763-4.763H175.973\n\t\tc-2.622,0-4.763,2.126-4.763,4.763C171.225,290.944,173.351,293.07,175.973,293.07z\"/>\n\t<path style=\"fill:#6F6F6F;\" d=\"M338.122,301.293H158.363c-2.622,0-4.763,2.126-4.763,4.763c0,2.622,2.126,4.763,4.763,4.763\n\t\th179.759c2.622,0,4.763-2.126,4.763-4.763C342.885,303.418,340.744,301.293,338.122,301.293z\"/>\n</g>\n<g>\n\t<circle style=\"fill:#FFCB5A;\" cx=\"442.492\" cy=\"263.249\" r=\"15.717\"/>\n\t<circle style=\"fill:#FFCB5A;\" cx=\"53.931\" cy=\"263.249\" r=\"15.717\"/>\n</g>\n<path style=\"fill:#1B95E0;\" d=\"M263.494,147.817v-35.452c0-5.679,4.686-10.349,10.504-10.349h0.853\n\tc5.679-0.434,10.488,4.251,10.488,9.79v34.676c0,6.811,4.965,12.769,11.636,13.188c7.23,0.279,13.188-5.384,13.188-12.474v-25.879\n\tc0-5.679,4.686-10.349,10.349-10.349h0.853c6.097,0,11.062,4.965,11.062,10.923v19.906c0,6.672,5.104,12.769,11.776,13.048\n\tc7.09,0.434,13.188-5.244,13.188-12.335v-22.9c0-5.958,4.965-10.488,10.923-10.349c0.14,0,0.14,0,0.14,0c0.14,0,0.14,0,0.279,0\n\tc5.958-0.14,10.923,4.391,10.923,10.349v25.305c0,6.811,5.104,12.769,11.776,13.188c7.23,0.279,13.048-5.384,13.048-12.474v-21.178\n\tc-12.428-15.003-30.115-25.46-49.648-28.284c-47.569-6.765-164.662-6.873-213.116,0c-19.549,2.824-37.236,13.281-49.664,28.284\n\tv17.346c0,6.672,5.104,12.769,11.916,13.048c7.09,0.434,13.048-5.244,13.048-12.335v-22.9c0-5.958,4.965-10.488,11.062-10.349\n\tc0,0,0,0,0.14,0c0,0,0,0,0.14,0c5.927-0.14,11.031,4.391,11.031,10.349v25.305c0,6.811,4.965,12.769,11.636,13.188\n\tc7.106,0.279,12.924-5.229,13.126-12.148v-33.792c0-7.106,5.911-12.769,13.095-12.443c6.703,0.403,11.729,6.377,11.729,13.079\n\tv32.256c0.186,6.501,5.167,12.257,11.698,12.676c7.23,0.279,13.048-5.384,13.048-12.474l0.14-27.493\n\tc0-7.09,5.818-12.769,13.048-12.49c6.672,0.419,11.776,6.377,11.776,13.188v29.758c0.14,6.672,5.679,12.055,12.335,12.055\n\tC257.955,160.291,263.494,154.628,263.494,147.817z\"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>";
var FLAG_M = "<svg id=\"Capa_1\" enable-background=\"new 0 0 510 510\" height=\"512\" viewBox=\"0 0 510 510\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"255\" cy=\"255\" fill=\"#a5e887\" r=\"255\"/><path d=\"m510 255c0 140.83-114.17 255-255 255v-510c140.83 0 255 114.17 255 255z\" fill=\"#00cc76\"/><circle cx=\"255\" cy=\"255\" fill=\"#00cc76\" r=\"171.65\"/><path d=\"m426.65 255c0 94.8-76.85 171.65-171.65 171.65v-343.3c94.8 0 171.65 76.85 171.65 171.65z\" fill=\"#009959\"/><path d=\"m330.89 191.25c0 50.38-31.51 93.39-75.89 110.4-13.14 5.05-27.41 7.81-42.32 7.81-65.29 0-118.21-52.92-118.21-118.21s52.92-118.21 118.21-118.21c14.91 0 29.18 2.76 42.32 7.81 44.38 17.01 75.89 60.02 75.89 110.4z\" fill=\"#fff5f5\"/><path d=\"m330.89 191.25c0 50.38-31.51 93.39-75.89 110.4v-220.8c44.38 17.01 75.89 60.02 75.89 110.4z\" fill=\"#fff5f5\"/><path d=\"m444.59 226.81c-13.097 80.194-9.622 58.904-16.35 100.16-9.35 57.25-63.34 96.08-120.59 86.73-50.197-8.195-48.371-7.784-52.65-8.91-34.06-8.9-56.38-42.44-50.59-77.88l4.11-25.15c3.68-22.55 24.09-38.21 46.48-36.36 1.16.09 2.33.23 3.49.42 20.9 3.41 40.61-10.76 44.02-31.66l4.86-29.76c5.57-34.1 35.06-58.33 68.53-58.33 3.72 0 7.49.3 11.29.92 37.89 6.19 63.59 41.92 57.4 79.82z\" fill=\"#914d24\"/><path d=\"m444.59 226.81c-13.097 80.194-9.622 58.904-16.35 100.16-9.35 57.25-63.34 96.08-120.59 86.73-50.197-8.195-48.371-7.784-52.65-8.91v-139.39c1.16.09 2.33.23 3.49.42 20.9 3.41 40.61-10.76 44.02-31.66l4.86-29.76c5.57-34.1 35.06-58.33 68.53-58.33 3.72 0 7.49.3 11.29.92 37.89 6.19 63.59 41.92 57.4 79.82z\" fill=\"#804231\"/><path d=\"m291.684 333.654c-1.822-8.081 3.252-16.109 11.333-17.932l49.469-10.564c8.085-1.818 16.11 3.253 17.932 11.334s-3.252 16.109-11.333 17.932l-49.469 10.564c-8.087 1.821-16.111-3.254-17.932-11.334z\" fill=\"#5b362a\"/><path d=\"m320.01 272.941c-1.822-8.081 3.252-16.109 11.333-17.932l43.615-9.834c8.084-1.818 16.11 3.253 17.932 11.334s-3.252 16.109-11.333 17.932l-43.615 9.834c-8.087 1.821-16.11-3.254-17.932-11.334z\" fill=\"#5b362a\"/><circle cx=\"190.048\" cy=\"172.6\" fill=\"#ff9f00\" r=\"48.309\"/><path d=\"m104.743 337.786c-7.949-2.339-16.286 2.206-18.625 10.153l-2.152 7.312c-2.339 7.947 2.207 16.286 10.154 18.626 7.955 2.34 16.288-2.214 18.625-10.153l2.152-7.312c2.339-7.947-2.207-16.286-10.154-18.626z\" fill=\"#ff6c6c\"/><path d=\"m151.877 375.107c-7.948-2.341-16.286 2.206-18.625 10.153l-2.152 7.312c-2.339 7.947 2.207 16.286 10.154 18.626 7.955 2.34 16.288-2.214 18.625-10.153l2.152-7.312c2.34-7.948-2.206-16.287-10.154-18.626z\" fill=\"#ff0059\"/><path d=\"m183.197 345.098-7.311-2.152c-7.947-2.339-16.287 2.206-18.625 10.153-2.34 7.947 2.206 16.286 10.153 18.626l7.311 2.152c7.954 2.34 16.288-2.212 18.625-10.153 2.34-7.947-2.206-16.286-10.153-18.626z\" fill=\"#ff6c6c\"/><g fill=\"#ff0059\"><path d=\"m144.822 344.325c7.274-3.966 9.956-13.076 5.991-20.35l-3.647-6.691c-3.965-7.274-13.077-9.956-20.35-5.992-7.274 3.966-9.956 13.076-5.991 20.35l3.647 6.691c3.964 7.271 13.072 9.958 20.35 5.992z\"/><path d=\"m108.372 295.212c-4.152-7.167-13.329-9.613-20.498-5.461l-7.106 4.116c-7.168 4.152-9.613 13.33-5.461 20.498 4.15 7.165 13.325 9.616 20.498 5.461l7.106-4.116c7.168-4.152 9.613-13.33 5.461-20.498z\"/></g></svg>";
var FLAG_H_R = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<g>\n\t<rect y=\"166.4\" style=\"fill:#E8EAEA;\" width=\"113.067\" height=\"345.6\"/>\n\t<rect x=\"398.933\" y=\"166.4\" style=\"fill:#E8EAEA;\" width=\"113.067\" height=\"345.6\"/>\n</g>\n<path style=\"fill:#FF7058;\" d=\"M0,172.8L0,172.8h512l0,0c0-12.8-10.667-23.467-23.467-23.467H23.467C10.667,149.333,0,160,0,172.8z\"\n\t/>\n<rect x=\"113.067\" y=\"108.8\" style=\"fill:#F2F2F2;\" width=\"285.867\" height=\"403.2\"/>\n<path style=\"fill:#FF7058;\" d=\"M414.933,85.333H97.067c-6.4,0-11.733,5.333-11.733,11.733S90.667,108.8,97.067,108.8h317.867\n\tc6.4,0,11.733-5.333,11.733-11.733S421.333,85.333,414.933,85.333z\"/>\n<g>\n\t<rect x=\"32\" y=\"198.4\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n\t<rect x=\"32\" y=\"274.133\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n\t<rect x=\"32\" y=\"349.867\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n\t<rect x=\"32\" y=\"425.6\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n\t<rect x=\"430.933\" y=\"198.4\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n\t<rect x=\"430.933\" y=\"274.133\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n\t<rect x=\"430.933\" y=\"349.867\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n\t<rect x=\"430.933\" y=\"425.6\" style=\"fill:#54C0EB;\" width=\"49.067\" height=\"54.4\"/>\n</g>\n<rect x=\"145.067\" y=\"293.333\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n<rect x=\"198.4\" y=\"378.667\" style=\"fill:#40596B;\" width=\"114.133\" height=\"133.333\"/>\n<rect y=\"489.6\" style=\"fill:#ACB3BA;\" width=\"512\" height=\"22.4\"/>\n<g>\n\t<rect x=\"145.067\" y=\"141.867\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n\t<rect x=\"145.067\" y=\"217.6\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n\t<rect x=\"229.333\" y=\"141.867\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n\t<rect x=\"229.333\" y=\"217.6\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n\t<rect x=\"229.333\" y=\"293.333\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n\t<rect x=\"313.6\" y=\"141.867\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n\t<rect x=\"313.6\" y=\"217.6\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n\t<rect x=\"313.6\" y=\"293.333\" style=\"fill:#84DBFF;\" width=\"53.333\" height=\"54.4\"/>\n</g>\n<g>\n\t<path style=\"fill:#40596B;\" d=\"M147.2,1.067h13.867V64H147.2V39.467h-25.6V64h-13.867V1.067H121.6v26.667h25.6L147.2,1.067\n\t\tL147.2,1.067z\"/>\n\t<path style=\"fill:#40596B;\" d=\"M229.333,55.467c-6.4,6.4-13.867,9.6-23.467,9.6s-17.067-3.2-23.467-9.6\n\t\tc-6.4-6.4-9.6-13.867-9.6-23.467s3.2-17.067,9.6-23.467C188.8,3.2,196.267,0,205.867,0c9.6,0,17.067,3.2,23.467,9.6\n\t\tc6.4,6.4,9.6,13.867,9.6,23.467C238.933,41.6,235.733,50.133,229.333,55.467z M225.067,33.067c0-5.333-2.133-10.667-5.333-14.933\n\t\tc-3.2-4.267-8.533-6.4-13.867-6.4s-9.6,2.133-13.867,6.4c-3.2,4.267-5.333,8.533-5.333,14.933S188.8,43.733,192,46.933\n\t\tc4.267,4.267,8.533,6.4,13.867,6.4c5.333,0,9.6-2.133,13.867-6.4S225.067,38.4,225.067,33.067z\"/>\n\t<path style=\"fill:#40596B;\" d=\"M276.267,13.867v51.2H262.4v-51.2h-18.133v-12.8H294.4V12.8h-18.133V13.867z\"/>\n\t<path style=\"fill:#40596B;\" d=\"M349.867,1.067v12.8h-32v12.8h28.8V38.4h-28.8v12.8h32V64h-46.933V1.067H349.867z\"/>\n\t<path style=\"fill:#40596B;\" d=\"M363.733,65.067v-64H377.6V51.2h26.667V64h-40.533V65.067z\"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>";
var FLAG_P_R = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<path style=\"fill:#FFB125;\" d=\"M170.479,159.141l-50.583,0.071l-0.139-85.24c-0.003-2.385,1.927-4.321,4.312-4.324l41.947-0.059\n\tc2.385-0.003,4.321,1.927,4.324,4.312L170.479,159.141z\"/>\n<path style=\"fill:#FF901D;\" d=\"M170.341,73.901c-0.003-2.385-1.939-4.315-4.324-4.312l-25.01,0.035\n\tc2.218,0.178,3.969,2.013,3.973,4.277l0.139,85.24l-25.222,0.035v0.035l50.583-0.071L170.341,73.901z\"/>\n<path style=\"fill:#E1EFFB;\" d=\"M254.124,68.044L118.628,195.686l0.271,194.046c0.007,5.119,4.163,9.263,9.281,9.256l252.811-0.353\n\tc5.119-0.007,9.263-4.163,9.256-9.281l-0.271-194.046L254.124,68.044z\"/>\n<path style=\"fill:#CCDFED;\" d=\"M389.976,195.307L254.125,68.044l-22.343,21.048l113.384,106.215l0.271,194.046\n\tc0.007,5.119-4.137,9.274-9.255,9.281h44.811c5.119-0.007,9.263-4.163,9.256-9.281L389.976,195.307z\"/>\n<path style=\"fill:#FF4C4C;\" d=\"M437.773,238.065c-4.574,0.006-9.159-1.661-12.761-5.035L254.127,72.95L83.69,233.507\n\tc-7.491,7.057-19.284,6.704-26.339-0.786c-7.057-7.49-6.705-19.283,0.786-26.339L241.315,33.823\n\tc7.161-6.747,18.335-6.762,25.515-0.036l183.659,172.047c7.51,7.035,7.895,18.827,0.859,26.336\n\tC447.687,236.079,442.736,238.058,437.773,238.065z\"/>\n<path style=\"fill:#F33939;\" d=\"M451.348,209.76c-3.661,3.908-8.612,5.887-13.575,5.894c-4.574,0.006-9.159-1.661-12.761-5.035\n\tL254.127,50.538L83.69,211.095c-7.491,7.057-19.284,6.704-26.339-0.786c-0.472-0.501-0.905-1.023-1.31-1.56\n\tc-5.369,7.117-5.009,17.264,1.31,23.971c7.054,7.49,18.848,7.843,26.339,0.786L254.127,72.95l170.885,160.08\n\tc3.602,3.374,8.187,5.041,12.761,5.035c4.964-0.007,9.914-1.986,13.575-5.894c6.288-6.711,6.631-16.833,1.277-23.933\n\tC452.229,208.762,451.806,209.271,451.348,209.76z\"/>\n<path style=\"fill:#2D5871;\" d=\"M289.175,228.014l-69.655,0.097c-3.268,0.005-5.914,2.658-5.909,5.926l0.23,164.83l81.49-0.114\n\tl-0.23-164.83C295.097,230.655,292.443,228.01,289.175,228.014z\"/>\n<path style=\"fill:#1D4859;\" d=\"M295.101,233.924c-0.005-3.268-2.658-5.914-5.926-5.909l-39.354,0.055\n\tc2.401,0.751,4.145,2.991,4.149,5.64l0.23,165.102l41.131-0.058L295.101,233.924z\"/>\n<path style=\"fill:#FED9A8;\" d=\"M466.909,315.553l-102.666,68.709l-30.597-1.717l-1.198-12.043\n\tc-1.783-17.927-15.586-32.315-33.424-34.839l-81.979-9.439c-18.911-2.676-37.119-9.013-53.605-18.657l0,0\n\tc-22.508-13.167-48.114-20.106-74.19-20.106H30.145v134.916l156.213,59.155c5.904,1.667,12.104,2.166,18.163,1.208\n\tc0.036-0.006,0.073-0.011,0.109-0.017l157.27-22.67c12.116-1.934,23.505-7.037,33.013-14.792l101.646-91.419\n\tc9.122-8.1,10.813-21.713,3.95-31.8l0,0C493.001,311.008,477.989,308.108,466.909,315.553z\"/>\n<path style=\"fill:#F4C892;\" d=\"M501.851,324.285l-100.469,84.571c-9.508,7.755-25.314,12.857-37.43,14.792l-159.321,11.389\n\tc-0.036,0.006-0.073,0.012-0.109,0.017c-6.059,0.957-12.26,0.458-18.163-1.208L30.145,374.691v47.688l156.213,59.155\n\tc2.952,0.833,5.978,1.375,9.023,1.588c0.761,0.053,1.524,0.086,2.287,0.098c2.289,0.035,4.581-0.119,6.853-0.478\n\tc0.036-0.006,0.073-0.012,0.109-0.017l157.27-22.67c3.786-0.605,7.502-1.519,11.111-2.726c0.722-0.242,1.439-0.495,2.152-0.76\n\tc3.565-1.324,7.017-2.939,10.321-4.829c0.661-0.378,1.315-0.767,1.964-1.166c2.594-1.599,5.089-3.372,7.466-5.311l101.646-91.419\n\tC505.023,346.328,507.077,334.072,501.851,324.285z\"/>\n<path style=\"fill:#2D5871;\" d=\"M50.066,468.205H26.68c-10.699,0-19.372-8.673-19.372-19.372V275.772\n\tc0-10.699,8.673-19.372,19.372-19.372h23.386c10.699,0,19.372,8.673,19.372,19.372v173.061\n\tC69.438,459.532,60.765,468.205,50.066,468.205z\"/>\n<path style=\"fill:#1D4859;\" d=\"M50.066,256.4H26.68c-1.315,0-2.598,0.134-3.839,0.384c8.859,1.782,15.532,9.604,15.532,18.988\n\tv173.061c0,9.384-6.673,17.206-15.532,18.988c1.241,0.25,2.525,0.384,3.839,0.384h23.386c10.699,0,19.372-8.673,19.372-19.372\n\tV275.772C69.438,265.073,60.765,256.4,50.066,256.4z\"/>\n<path d=\"M506.552,317.933c-9.739-14.312-29.351-18.1-43.707-8.452l-65.34,43.728l-0.19-136.11l22.7,21.265\n\tc4.827,4.521,11.121,7.009,17.729,7.009c0.012,0,0.026,0,0.039,0c7.134-0.01,14.022-3,18.898-8.205\n\tc4.737-5.057,7.222-11.655,6.996-18.581c-0.226-6.926-3.136-13.349-8.193-18.086l-43.035-40.314\n\tc-2.946-2.76-7.571-2.609-10.33,0.337c-2.759,2.946-2.608,7.57,0.337,10.33l43.035,40.314c2.208,2.068,3.478,4.872,3.577,7.895\n\tc0.098,3.023-0.986,5.904-3.055,8.111c-2.16,2.306-5.09,3.578-8.252,3.582c-0.006,0-0.011,0-0.017,0c-2.883,0-5.63-1.086-7.737-3.06\n\tl-35.026-32.811c-0.001-0.001-0.002-0.002-0.002-0.002L259.124,67.616c-2.816-2.637-7.198-2.633-10.007,0.014L113.624,195.268\n\tc-0.001,0.001-0.001,0.002-0.002,0.002l-34.943,32.917c-2.201,2.074-5.079,3.16-8.103,3.076c-3.024-0.09-5.831-1.353-7.905-3.556\n\tc-2.074-2.201-3.167-5.079-3.076-8.102c0.09-3.024,1.353-5.831,3.554-7.905L246.326,39.143c4.342-4.091,11.154-4.101,15.507-0.021\n\tL369,139.514c2.945,2.759,7.57,2.609,10.33-0.337c2.759-2.946,2.608-7.57-0.337-10.33L271.827,28.455\n\tc-9.973-9.344-25.576-9.323-35.523,0.049l-58.639,55.24l-0.016-9.853c-0.004-3.106-1.218-6.024-3.417-8.216\n\tc-2.195-2.189-5.109-3.394-8.209-3.394c-0.006,0-0.011,0-0.017,0l-41.947,0.059c-3.106,0.004-6.023,1.218-8.216,3.417\n\tc-2.192,2.199-3.398,5.12-3.393,8.227l0.116,71.087l-59.439,55.993c-5.044,4.751-7.935,11.182-8.142,18.108\n\ts2.296,13.518,7.047,18.56c4.75,5.044,11.181,7.936,18.108,8.143c0.265,0.008,0.53,0.012,0.795,0.012\n\tc6.635,0,12.918-2.49,17.767-7.06l22.649-21.336l0.09,64.291c-7.328-1.067-14.742-1.627-22.19-1.627H76.746v-4.382\n\tc0-14.711-11.969-26.68-26.68-26.68H26.68C11.969,249.092,0,261.06,0,275.772V390.29c0,4.036,3.272,7.308,7.308,7.308\n\ts7.308-3.272,7.308-7.308V275.772c0-6.652,5.412-12.064,12.064-12.064h23.385c6.652,0,12.064,5.412,12.064,12.064v11.69v149.796\n\tv11.575c0,6.652-5.412,12.064-12.064,12.064H26.68c-6.652,0-12.064-5.412-12.064-12.064v-12.788c0-4.036-3.272-7.308-7.308-7.308\n\tS0,432.009,0,436.045v12.788c0,14.711,11.969,26.68,26.68,26.68h23.385c14.711,0,26.68-11.968,26.68-26.68v-0.993l107.024,40.528\n\tc0.198,0.075,0.399,0.141,0.603,0.198c4.653,1.314,9.304,1.973,13.896,1.973c2.484,0,4.951-0.193,7.393-0.579l157.281-22.672\n\tc0.037-0.005,0.073-0.011,0.11-0.017c13.372-2.135,25.987-7.788,36.48-16.346c0.091-0.074,0.181-0.151,0.268-0.23l101.611-91.388\n\tC513.244,348.802,515.453,331.015,506.552,317.933z M163.037,76.902l0.034,20.59l-35.912,33.83l-0.089-54.371L163.037,76.902z\n\t M126.061,284.617l-0.113-80.878L254.141,82.976l128.538,120.412l0.223,159.593l-20.691,13.848L340.3,375.6l-0.579-5.82\n\tc-2.039-20.498-17.171-36.987-37.18-40.922l-0.132-94.945c-0.01-7.286-5.942-13.207-13.227-13.207c-0.006,0-0.011,0-0.018,0\n\tl-69.654,0.098c-3.533,0.005-6.853,1.385-9.347,3.887c-2.495,2.501-3.866,5.825-3.861,9.357l0.116,82.781\n\tc-13.797-3.154-26.971-8.363-39.288-15.568c-1.537-0.899-3.089-1.767-4.654-2.611c-0.61-0.329-1.23-0.638-1.845-0.959\n\tc-0.952-0.497-1.902-0.997-2.864-1.474c-0.766-0.38-1.541-0.74-2.313-1.107c-0.819-0.389-1.637-0.782-2.462-1.157\n\tc-0.84-0.381-1.687-0.744-2.533-1.11c-0.773-0.334-1.546-0.67-2.324-0.991c-0.87-0.359-1.745-0.704-2.621-1.047\n\tc-0.777-0.304-1.555-0.606-2.336-0.898c-0.867-0.324-1.738-0.637-2.611-0.944c-0.819-0.289-1.639-0.571-2.463-0.846\n\tc-0.836-0.279-1.674-0.552-2.516-0.817c-0.897-0.283-1.798-0.553-2.7-0.82c-0.775-0.228-1.549-0.456-2.328-0.672\n\tc-1.017-0.283-2.039-0.548-3.062-0.81C127.019,284.875,126.543,284.736,126.061,284.617z M220.921,235.418l66.874-0.094\n\tl0.128,91.705l-61.125-7.037l-5.759-0.663L220.921,235.418z M491.673,348.41l-101.511,91.298\n\tc-8.459,6.859-18.606,11.396-29.361,13.122l-157.213,22.662c-0.033,0.005-0.065,0.01-0.098,0.015l-0.109,0.017\n\tc-4.763,0.754-9.723,0.436-14.744-0.942L76.746,432.21V294.77h12.505c10.645,0,21.218,1.229,31.514,3.616\n\tc0.383,0.089,0.765,0.18,1.147,0.272c1.265,0.305,2.527,0.619,3.783,0.959c0.11,0.03,0.219,0.062,0.329,0.092\n\tc1.259,0.344,2.513,0.707,3.763,1.086c0.224,0.068,0.449,0.135,0.672,0.204c1.33,0.411,2.654,0.84,3.971,1.29\n\tc0.136,0.047,0.271,0.095,0.407,0.142c2.743,0.947,5.459,1.98,8.141,3.098c0.146,0.061,0.292,0.122,0.438,0.184\n\tc1.337,0.562,2.666,1.143,3.986,1.747c0.035,0.016,0.071,0.033,0.106,0.05c1.276,0.586,2.543,1.194,3.802,1.819\n\tc0.148,0.073,0.297,0.145,0.445,0.219c1.23,0.615,2.45,1.252,3.663,1.904c0.229,0.123,0.457,0.249,0.686,0.373\n\tc1.224,0.667,2.441,1.347,3.646,2.052c17.391,10.173,36.323,16.762,56.271,19.585c0.063,0.009,0.125,0.017,0.188,0.024l81.881,9.427\n\tc0.453,0.065,0.903,0.14,1.35,0.224c12.054,2.264,21.568,11.171,24.751,22.77c0.472,1.718,0.804,3.496,0.986,5.319l0.325,3.27\n\tl-153.46-13.445c-4.018-0.351-7.566,2.622-7.918,6.642c-0.353,4.021,2.622,7.566,6.642,7.918l162.242,14.215\n\tc0.039,0.003,0.077,0.002,0.115,0.005s0.075,0.009,0.114,0.012l30.597,1.717c0.137,0.008,0.273,0.011,0.409,0.011\n\tc0.145,0,0.288-0.023,0.432-0.032c0.163-0.01,0.326-0.016,0.488-0.036c0.218-0.028,0.431-0.075,0.645-0.122\n\tc0.153-0.034,0.307-0.059,0.457-0.103c0.234-0.067,0.459-0.158,0.686-0.249c0.122-0.049,0.248-0.086,0.368-0.142\n\tc0.341-0.158,0.673-0.34,0.989-0.552l25.972-17.381c0.001-0.001,0.002-0.002,0.003-0.003l76.702-51.332\n\tc7.717-5.187,18.251-3.152,23.482,4.536C499.249,333.181,498.062,342.736,491.673,348.41z\"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>";

/***/ }),

/***/ "./assets/js/admin/main.js":
/*!*********************************!*\
  !*** ./assets/js/admin/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_sub_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial/sub-menu */ "./assets/js/admin/partial/sub-menu.js");
/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ImageLoader */ "./assets/js/admin/components/ImageLoader.js");
/* harmony import */ var _partial_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partial/table */ "./assets/js/admin/partial/table.js");
/* harmony import */ var _components_KhChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/KhChart */ "./assets/js/admin/components/KhChart.js");
/* harmony import */ var _partial_welcome_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partial/welcome-message */ "./assets/js/admin/partial/welcome-message.js");
/* harmony import */ var _components_selectCustom_KhSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/selectCustom/KhSelect */ "./assets/js/admin/components/selectCustom/KhSelect.js");
/* harmony import */ var _components_media_store_KhMediaStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/media-store/KhMediaStore */ "./assets/js/admin/components/media-store/KhMediaStore.js");
/* harmony import */ var _components_ChipBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ChipBuilder */ "./assets/js/admin/components/ChipBuilder.js");
/* harmony import */ var _partial_print_invoice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partial/print-invoice */ "./assets/js/admin/partial/print-invoice.js");
/* harmony import */ var _components_TabBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TabBar */ "./assets/js/admin/components/TabBar.js");
/* harmony import */ var _partial_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partial/panel */ "./assets/js/admin/partial/panel.js");
/* harmony import */ var _partial_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./partial/switch */ "./assets/js/admin/partial/switch.js");
/* harmony import */ var _partial_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partial/field */ "./assets/js/admin/partial/field.js");
/* harmony import */ var _partial_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./partial/alert */ "./assets/js/admin/partial/alert.js");
/* harmony import */ var _partial_account_research__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partial/account-research */ "./assets/js/admin/partial/account-research.js");
/* harmony import */ var _components_CheckboxGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/CheckboxGroup */ "./assets/js/admin/components/CheckboxGroup.js");

















__webpack_require__(/*! ./bootstrap */ "./assets/js/admin/bootstrap.js");

document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.getElementById('kh-app-body-nav-bar-item-btn');
  (0,_partial_sub_menu__WEBPACK_IMPORTED_MODULE_0__["default"])(toggleBtn);
  (0,_partial_sub_menu__WEBPACK_IMPORTED_MODULE_0__.menuToggle)();
  (0,_partial_table__WEBPACK_IMPORTED_MODULE_2__.searchInTable)(); //globalSearch();
  //closeAlertAction();

  (0,_partial_account_research__WEBPACK_IMPORTED_MODULE_14__["default"])();
  (0,_partial_welcome_message__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_partial_print_invoice__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_partial_panel__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_partial_switch__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_partial_field__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_partial_alert__WEBPACK_IMPORTED_MODULE_13__["default"])();
  new _components_ImageLoader__WEBPACK_IMPORTED_MODULE_1__["default"]().start();
  new _components_selectCustom_KhSelect__WEBPACK_IMPORTED_MODULE_5__["default"]('kh-select-native');
  new _components_media_store_KhMediaStore__WEBPACK_IMPORTED_MODULE_6__["default"]();
  new _components_media_store_KhMediaStore__WEBPACK_IMPORTED_MODULE_6__["default"]('img-media-store_');
  new _components_ChipBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]();
  new _components_TabBar__WEBPACK_IMPORTED_MODULE_9__["default"]();
  new _components_CheckboxGroup__WEBPACK_IMPORTED_MODULE_15__["default"]();
  document.documentElement.addEventListener('click', function () {
    (0,_partial_sub_menu__WEBPACK_IMPORTED_MODULE_0__.closeSubMenuContentIfOpen)(toggleBtn.nextElementSibling);
  }); //components

  new _components_KhChart__WEBPACK_IMPORTED_MODULE_3__.KhChart();
});

/***/ }),

/***/ "./assets/js/admin/partial/account-research.js":
/*!*****************************************************!*\
  !*** ./assets/js/admin/partial/account-research.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ accountResearch)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AlertDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AlertDialog */ "./assets/js/admin/components/AlertDialog.js");





function accountResearch() {
  var inputSearch = document.getElementById("account-search-field"),
      btn = document.getElementById("_account-search-button"),
      username = document.getElementById("user_name"),
      userMatricule = document.getElementById("user_matricule"),
      matricule = document.getElementById("_matricule"),
      account_type = document.getElementById("account_type"),
      loader = document.getElementById("account-search-loader"),
      account_exist_view = document.getElementById("account-exist-view"),
      btnSubmit = document.getElementsByName('_btn'),
      _alert = new _components_AlertDialog__WEBPACK_IMPORTED_MODULE_4__["default"]();

  if (inputSearch && btn) {
    btn.addEventListener("click", function () {
      var _matricule = inputSearch.value.toString().trim(),
          formData = new FormData(),
          url = "/admin/office/account/find/user";

      if (_matricule !== "") {
        loader.style.display = "flex";
        formData.append("_matricule", _matricule.toUpperCase());
        resetView();
        axios.post(url, formData).then(function (response) {
          if (response.data.data !== false) {
            username.value = response.data.data.lastname + " " + response.data.data.firstname;
            userMatricule.value = response.data.data.matricule;
            account_type.value = response.data.data.type;

            if (response.data.data.account === 0) {
              matricule.value = response.data.data.matricule;
              submitButtonState();
            } else {
              account_exist_view.style.display = "block";
              submitButtonState(false);
            }
          } else {
            _alert.setYesOnly = true;
            _alert.type = "d";
            _alert.yes = "D'ACCORD";
            _alert.setMessage = "Ce matricule n'existe pas, Veuillez vérifier le matricule et réessayer";
            _alert.setHeader = "Information";

            _alert.show();
          }

          loader.style.display = "none";
        })["catch"](function (error) {
          loader.style.display = "none";
          resetView();
          submitButtonState();
        });
      } else {
        _alert.setYesOnly = true;
        _alert.type = "w";
        _alert.yes = "Oui";
        _alert.setMessage = "Veuillez remplir correctement le champ de recherche";
        _alert.setHeader = "Avertissement";

        _alert.show();

        submitButtonState();
      }
    });
  }

  function resetView() {
    username.value = "";
    userMatricule.value = "";
    account_type.value = "";
    matricule.value = "";
    account_exist_view.style.display = "none";
  }

  function submitButtonState() {
    var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    for (var i = 0; i < btnSubmit.length; i++) {
      if (isActive) {
        if (btnSubmit.item(i).hasAttribute("disabled")) btnSubmit.item(i).removeAttribute("disabled");
      } else {
        for (var _i = 0; _i < btnSubmit.length; _i++) {
          btnSubmit.item(_i).setAttribute("disabled", "disabled");
        }
      }
    }
  }
}

/***/ }),

/***/ "./assets/js/admin/partial/alert.js":
/*!******************************************!*\
  !*** ./assets/js/admin/partial/alert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closeAlertAction)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);



function closeAlertAction() {
  var ALERT_CLOSE = document.getElementsByClassName('koroph-alert-content-close');
  var _is = true;

  if (ALERT_CLOSE.length) {
    var _loop = function _loop(i) {
      ALERT_CLOSE[i].addEventListener('click', function () {
        closeAlert(this.parentElement);
        _is = false;
      });
      setTimeout(function () {
        if (_is) closeAlert(ALERT_CLOSE[i].parentElement);
      }, 10000);
    };

    for (var i = 0; i < ALERT_CLOSE.length; i++) {
      _loop(i);
    }
  }
}
/**
 *
 * @param {HTMLElement} parent
 */

function closeAlert(parent) {
  setTimeout(function () {
    parent.remove();
  }, 500);
}

/***/ }),

/***/ "./assets/js/admin/partial/field.js":
/*!******************************************!*\
  !*** ./assets/js/admin/partial/field.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activeFieldParent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);




function activeFieldParent() {
  var inputField = document.getElementsByClassName('kh-input-field');

  if (inputField.length) {
    var _loop = function _loop(i) {
      inputField.item(i).addEventListener('focus', function () {
        inputField.item(i).parentElement.classList.add('active');
      });
      inputField.item(i).addEventListener('blur', function () {
        if (this.value.toString().trim() === "") inputField.item(i).parentElement.classList.remove('active');
      });
    };

    for (var i = 0; i < inputField.length; i++) {
      _loop(i);
    }
  }
}

/***/ }),

/***/ "./assets/js/admin/partial/panel.js":
/*!******************************************!*\
  !*** ./assets/js/admin/partial/panel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ panelAction)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


function panelAction() {
  var panels = $('.koroph-panel-content');
  $('.koroph-panel-indicator-button').parent().parent().click(function () {
    var panel_content = $(this).siblings('.koroph-panel-content'),
        none = panel_content.css("display") === "none",
        FIELD_NAME = $(this).parent().data('name');
    if (none) $(this.lastElementChild.lastElementChild).addClass('panel-show');else $(this.lastElementChild.lastElementChild).removeClass('panel-show');
    panel_content.slideToggle(300);
    localStorage.setItem(FIELD_NAME, "" + none);
  });

  for (var i = 0; i < panels.length; i++) {
    var FIELD_NAME = $(panels[i]).parent().data('name'),
        INDICATOR = $(panels[i]).siblings('header').children('.koroph-panel-indicator').children();

    if (localStorage.getItem(FIELD_NAME) != null) {
      if (localStorage.getItem(FIELD_NAME) === "true") {
        INDICATOR.addClass('panel-show');
        panels[i].classList.replace('close', 'open');
      } else {
        INDICATOR.removeClass('panel-show');
        panels[i].classList.replace('open', 'close');
      }
    }
  }
}

/***/ }),

/***/ "./assets/js/admin/partial/print-invoice.js":
/*!**************************************************!*\
  !*** ./assets/js/admin/partial/print-invoice.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invoicePrint)
/* harmony export */ });
function invoicePrint() {
  var btnPrint = document.getElementById('print-invoice'),
      viewPrint = document.getElementById('invoice_view_print');

  if (btnPrint && viewPrint) {
    btnPrint.addEventListener("click", function () {
      viewPrint.contentWindow.print();
    });
  }
}

/***/ }),

/***/ "./assets/js/admin/partial/sub-menu.js":
/*!*********************************************!*\
  !*** ./assets/js/admin/partial/sub-menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMenuToggleContent),
/* harmony export */   "subMenuToggle": () => (/* binding */ subMenuToggle),
/* harmony export */   "closeSubMenuContentIfOpen": () => (/* binding */ closeSubMenuContentIfOpen),
/* harmony export */   "menuToggle": () => (/* binding */ menuToggle)
/* harmony export */ });
/* harmony import */ var _components_Cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Cookie */ "./assets/js/admin/components/Cookie.js");
/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */

/**
 *
 * @param {HTMLElement} toggleBtn
 */

function subMenuToggleContent(toggleBtn) {
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      subMenuToggle(this.nextElementSibling);
    });
  }
}
/**
 *
 * @param {HTMLElement|Element} el
 */

function subMenuToggle(el) {
  if (el.style.display === 'none') el.style.display = 'block';else el.style.display = 'none';
}
/**
 *
 * @param {HTMLElement|Element} el
 */

function closeSubMenuContentIfOpen(el) {
  if (el.style.display === 'block') el.style.display = 'none';
}
function menuToggle() {
  var btnToggle = document.getElementById('kh-app-body-nav-bar-toggle-menu-btn'),
      sideBar = document.getElementById('kh-app'),
      className = 'nav-bar-small',
      query = "(max-width:800px)";

  if (matchMedia(query).matches) {
    sideBar.classList.add(className);
    _components_Cookie__WEBPACK_IMPORTED_MODULE_0__["default"].setCookie("_visual_side_bar_state", "nav-bar-small");
  }

  btnToggle.addEventListener('click', function () {
    sideBarShowAndHidden(sideBar);
  });
  matchMedia(query).addEventListener('change', function (e) {
    if (e.matches) {
      sideBar.classList.add(className);
      _components_Cookie__WEBPACK_IMPORTED_MODULE_0__["default"].setCookie("_visual_side_bar_state", "nav-bar-small");
    } else {
      sideBar.classList.remove(className);
      _components_Cookie__WEBPACK_IMPORTED_MODULE_0__["default"].setCookie("_visual_side_bar_state", "");
    }
  });
}
/**
 *
 * @param {HTMLElement} appBar
 */

function sideBarShowAndHidden(appBar) {
  if (appBar.classList.contains('nav-bar-small')) {
    _components_Cookie__WEBPACK_IMPORTED_MODULE_0__["default"].setCookie("_visual_side_bar_state", "");
    appBar.classList.remove('nav-bar-small');
  } else {
    appBar.classList.add('nav-bar-small');
    _components_Cookie__WEBPACK_IMPORTED_MODULE_0__["default"].setCookie("_visual_side_bar_state", "nav-bar-small");
  }
}

/***/ }),

/***/ "./assets/js/admin/partial/switch.js":
/*!*******************************************!*\
  !*** ./assets/js/admin/partial/switch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchValueToggle)
/* harmony export */ });
function switchValueToggle() {
  var fields = document.getElementsByClassName('kh-switch-field');

  if (fields.length) {
    for (var i = 0; i < fields.length; i++) {
      fields.item(i).addEventListener('click', function () {
        if (this.checked) {
          this.value = this.dataset.on;
        } else {
          this.value = this.dataset.off;
        }
      });
    }
  }
}

/***/ }),

/***/ "./assets/js/admin/partial/table.js":
/*!******************************************!*\
  !*** ./assets/js/admin/partial/table.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchInTable": () => (/* binding */ searchInTable)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_AlertDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AlertDialog */ "./assets/js/admin/components/AlertDialog.js");










/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */

function searchInTable() {
  var inputSearch = document.getElementById('index-view-body-search-field'),
      tr = document.getElementsByClassName('kh-t-row');

  if (inputSearch) {
    inputSearch.addEventListener('input', function (e) {
      var _search_text = e.target.value.toString().trim().toLocaleLowerCase();

      for (var i = 0; i < tr.length; i++) {
        var _keys = tr[i].dataset.keys.split(',');

        tr[i].style.display = "none";

        for (var j = 0; j < _keys.length; j++) {
          if (tr[i].dataset[_keys[j]].toLocaleLowerCase().indexOf(_search_text) !== -1) {
            tr[i].style.display = "table-row";
            break;
          }
        }
        /*if (_str.indexOf(e.target.value.toString().trim().toLocaleLowerCase()) !== -1) {
            tr[i].style.display = "table-row";
        } else tr[i].style.display = "none";*/

      }
    });
  }

  destroyItemEvent();
}

function destroyItemEvent() {
  var _btn_item = document.getElementsByClassName('destroy-item'),
      _alert = new _components_AlertDialog__WEBPACK_IMPORTED_MODULE_9__["default"]();

  _alert.header = "suppression";
  _alert.yes = "Oui";
  _alert.no = "Non";
  _alert.type = "d";

  if (_btn_item.length) {
    for (var i = 0; i < _btn_item.length; i++) {
      _btn_item.item(i).addEventListener('click', function () {
        var _this = this;

        if (this.hasAttribute('data-message')) _alert.setMessage = this.dataset.message;else _alert.setMessage = "Voulez-vous vraiment supprimer cette donnée ?";

        _alert.show().then(function (resp) {
          if (resp) _this.parentElement.submit();
        });
      });
    }
  }
}

function accountResearch() {
  var inputSearch = document.getElementById("account-search-field"),
      btn = document.getElementById("account-search-button"),
      username = document.getElementById("user_name"),
      userMatricule = document.getElementById("user_matricule"),
      matricule = document.getElementById("_matricule");
}

/***/ }),

/***/ "./assets/js/admin/partial/welcome-message.js":
/*!****************************************************!*\
  !*** ./assets/js/admin/partial/welcome-message.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ welcomeModalCloseAction)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);

function welcomeModalCloseAction() {
  var welcome_message_container = document.getElementById('welcome-message'),
      welcome_message_btn_close = document.getElementById('welcome-message-close');

  if (welcome_message_container && welcome_message_btn_close) {
    welcome_message_btn_close.addEventListener('click', function () {
      welcome_message_container.style.left = "-100%";
      welcome_message_container.style.transition = "all 1s ease-out";
    });
    setTimeout(function () {
      welcome_message_container.style.left = "-100%";
      welcome_message_container.style.transition = "left 1s ease-out";
    }, 10000);
  }
}

/***/ }),

/***/ "./assets/scss/admin/admin.scss":
/*!**************************************!*\
  !*** ./assets/scss/admin/admin.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/admin/components/media-store/config.json":
/*!************************************************************!*\
  !*** ./assets/js/admin/components/media-store/config.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"add_folder":"/media/store/directory/create","remove_folder":"/media/store/directory/destroy/:id","add_file":"/media/store/files/create","remove_file":"/media/store/files/destroy/:id","files":"/media/store/files","default_size":{"width":300,"height":300}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_date_to-string_js-node_modules_core-js_modules_es_obj-9d2f59","vendors-node_modules_axios_index_js-node_modules_chart_js_dist_chart_esm_js-node_modules_core-1a39a4","assets_scss_font_style_css"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlCLENBQUMxZSxLQUExQixDQUFnQzRlLElBQWhDLEdBQXVDLE9BQXZDO0FBQ0FGLE1BQUFBLHlCQUF5QixDQUFDMWUsS0FBMUIsQ0FBZ0NpUSxVQUFoQyxHQUE2QyxrQkFBN0M7QUFDSCxLQUhTLEVBR1IsS0FIUSxDQUFWO0FBSUg7QUFDSjs7Ozs7Ozs7Ozs7O0FDakJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2NvbXBvbmVudHMvQWxlcnREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2NvbXBvbmVudHMvQ2hlY2tib3hHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vY29tcG9uZW50cy9DaGlwQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vY29tcG9uZW50cy9Db29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2NvbXBvbmVudHMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2NvbXBvbmVudHMvS2hDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vY29tcG9uZW50cy9UYWJCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2NvbXBvbmVudHMvbWVkaWEtc3RvcmUvS2hNZWRpYVN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9jb21wb25lbnRzL21lZGlhLXN0b3JlL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vY29tcG9uZW50cy9zZWxlY3RDdXN0b20vS2hTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2NvbXBvbmVudHMvc2VsZWN0Q3VzdG9tL2ZsYWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL3BhcnRpYWwvYWNjb3VudC1yZXNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vcGFydGlhbC9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vcGFydGlhbC9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vcGFydGlhbC9wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vcGFydGlhbC9wcmludC1pbnZvaWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9wYXJ0aWFsL3N1Yi1tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9wYXJ0aWFsL3N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vcGFydGlhbC90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vcGFydGlhbC93ZWxjb21lLW1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYWRtaW4vYWRtaW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICcuL3Njc3MvYWRtaW4vYWRtaW4uc2Nzcyc7XHJcblxyXG5pbXBvcnQgJy4vanMvYWRtaW4vbWFpbic7XHJcbiIsIlxyXG4vKipcclxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XHJcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xyXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXHJcbiAqL1xyXG5cclxudHJ5IHtcclxuICAgIC8vd2luZG93LlBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpLmRlZmF1bHQ7XHJcbiAgICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbiAgIC8vIHJlcXVpcmUoJy4vanF1ZXJ5L2V4dGVuZCcpXHJcbiAgICAvL3JlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG59IGNhdGNoIChlKSB7fVxyXG5cclxuLyoqXHJcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXHJcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXHJcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXHJcbiAqL1xyXG5cclxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcblxyXG4iLCIvKlxyXG4gKiAgQGNvbXBhbnkgRGFyY0Zsb3cgZGVzaWduIFtodHRwczovL2RhcmNmbG93LmNvbV1cclxuICogIEBhdXRob3IgICAgS29yb3BoIDx5amtAb3V0bG9vay5mcj4geygrMjI1KTA3NzgzMjk1OTJ9XHJcbiAqICBAd2Vic2l0ZSBodHRwOi8va29yb3BoLnNpdGVcclxuICogIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL0tvcm9waFxyXG4gKiAgQGxpY2Vuc2UgICBBcGFjaGUgMi4wXHJcbiAqICBAQ29weXJpZ2h0IChjKSAyMDIxLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnREaWFsb2cge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRyYW5zSWQgPSBcImFsZXJ0LWRpYWxvZy10cmFuc1wiKSB7XHJcbiAgICAgICAgY29uc3QgVFJBTlMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0cmFuc0lkKTtcclxuICAgICAgICAvLyBpZiAoVFJBTlMgPT09IG51bGwpIGNvbnNvbGUud2FybihcInJlcXVpcmUgaW5jbHVkZSBhbGVydERpYWxvZyB0cmFucyBkaXYgaW4gY3VycmVudCB2aWV3LlwiKVxyXG4gICAgICAgIC8vZWxzZSB7XHJcbiAgICAgICAgLyogICB0aGlzLnllcyA9IFRSQU5TLmRhdGFzZXQueWVzO1xyXG4gICAgICAgICAgIHRoaXMubm8gPSBUUkFOUy5kYXRhc2V0Lm5vO1xyXG4gICAgICAgICAgIHRoaXMubWFzc2FnZSA9IFRSQU5TLmRhdGFzZXQubWVzc2FnZTtcclxuICAgICAgICAgICB0aGlzLmhlYWRlciA9IFRSQU5TLmRhdGFzZXQuaGVhZGVyOyovXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgdGhpcy55ZXNPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNldE1lc3NhZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1hc3NhZ2UgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXRIZWFkZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IHZhbHVlXHJcbiAgICB9XHJcbiAgICBzZXQgc2V0VHlwZSh2YWx1ZSkge1xyXG5cclxuICAgICAgICBpZiAoW1wicFwiLCBcImRcIiwgXCJ3XCJdLmluY2x1ZGVzKHZhbHVlKSkgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUeXBlIHZhbHVlIGlzIHAgb3IgZCwgdmFsdWUgZGVmYXVsdCBwXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcInBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNldFllc09ubHkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnllc09ubHkgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXRZZXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLnllcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXRObyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubm8gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gXCJrb3JvcGgtYWxlcnREaWFsb2ctY29udGFpbmVyXCJcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5hbGVydERpYWxvZ0RPTSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZGl2RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGVydERpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaXBwZXItYWxlcnRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgQlVUVE9OX0NPVU5UID0gYWxlcnREaWFsb2dCdXR0b24ubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQlVUVE9OX0NPVU5UOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydERpYWxvZ0J1dHRvbi5pdGVtKGkpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCVVRUT05fQ09VTlQgPD0gMSkgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkgcmVzb2x2ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRIZWFkZXJDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gXCJwXCIgPyBcInByaW1hcnlcIiA6IHRoaXMudHlwZSA9PT0gXCJkXCIgPyBcImRhbmdlclwiIDogXCJ3YXJuaW5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVhZGVySWNvbkNsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBcInBcIiA/IFwiaWNvbi1pbmZvXCIgOiB0aGlzLnR5cGUgPT09IFwiZFwiID8gXCJpY29uLWJpblwiIDogXCJpY29uLXdhcm5pbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydERpYWxvZ0RPTSgpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia29yb3BoLWFsZXJ0RGlhbG9nXCI+XHJcbiAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiJHt0aGlzLmdldEhlYWRlckNsYXNzTmFtZSgpfVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuZ2V0SGVhZGVySWNvbkNsYXNzTmFtZSgpfVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0LWRpYWxvZy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgJHt0aGlzLmhlYWRlcn1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrb3JvcGgtYWxlcnREaWFsb2ctY29udGVudFwiPiR7dGhpcy5tYXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtvcm9waC1hbGVydERpYWxvZy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJraC1idXR0b24tY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3VzdG9tLWRlZmF1bHQgcmlwcGVyLWFsZXJ0IHJpcHBlclwiIHN0eWxlPVwiZGlzcGxheTogJHt0aGlzLnllc09ubHkgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIn1cIiB0eXBlPVwiYnV0dG9uXCI+JHt0aGlzLm5vfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtoLWJ1dHRvbi1jdXN0b20gcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3VzdG9tLWFjdGl2ZSByaXBwZXItYWxlcnQgcmlwcGVyICR7dGhpcy5nZXRIZWFkZXJDbGFzc05hbWUoKX1cIiB0eXBlPVwiYnV0dG9uXCIgPiR7dGhpcy55ZXN9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94R3JvdXAge1xuXG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lID0gJ2toLWdyb3VwJykge1xuICAgICAgICBjb25zdCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKGdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50RmllbGQgPSBncm91cHNbaV0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBncm91cHNbaV0ubGFzdEVsZW1lbnRDaGlsZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBhcmVudEZpZWxkLmRhdGFzZXQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRQYXJlbnRGaWVsZChwYXJlbnRGaWVsZCwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hWYWx1ZShjaGlsZHJlbiwgcGFyZW50RmllbGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsRmllbGQocGFyZW50RmllbGQsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNoZWNrYm94VmFsdWUoY2hpbGRyZW4sIHBhcmVudEZpZWxkKSB7XG4gICAgICAgIGNvbnN0IHNob3dGaWVsZCA9IHRoaXMuZ2V0U2hvd0ZpZWxkKGNoaWxkcmVuKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY2hpbGRyZW5bal0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0ZpZWxkICYmIHNob3dGaWVsZCAhPT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ldmVudC50YXJnZXQudmFsdWUgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZFBhcmVudEZpZWxkKHBhcmVudEZpZWxkLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShldmVudC50YXJnZXQudmFsdWUuaW5kZXhPZignU0hPVycpID4gLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZpZWxkLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaG93RmllbGQudmFsdWUgPSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ldmVudC50YXJnZXQudmFsdWUgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRGaWVsZC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRQYXJlbnRGaWVsZChwYXJlbnRGaWVsZCwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ldmVudC50YXJnZXQudmFsdWUgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRGaWVsZC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGNoaWxkcmVuLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5baF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hpbGRyZW5baF0udmFsdWUgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHNob3cgZmllbGRcbiAgICAgKiBAcGFyYW0gY2hpbGRyZW5cbiAgICAgKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fG51bGx9XG4gICAgICovXG4gICAgZ2V0U2hvd0ZpZWxkKGNoaWxkcmVuKSB7XG4gICAgICAgIGxldCBzaG93RmllbGQgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5ba10udmFsdWUuaW5kZXhPZignU0hPVycpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBzaG93RmllbGQgPSBjaGlsZHJlbltrXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hvd0ZpZWxkO1xuICAgIH1cblxuICAgIHNlbGVjdEFsbEZpZWxkKHBhcmVudEZpZWxkLCBjaGlsZHJlbikge1xuICAgICAgICBwYXJlbnRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltqXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGlsZHJlbltqXS52YWx1ZSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltqXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgLy8gY2hpbGRyZW5bal0udmFsdWUgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja2VkUGFyZW50RmllbGQocGFyZW50RmllbGQsIGNoaWxkcmVuKSB7XG4gICAgICAgIGlmICghcGFyZW50RmllbGQuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGV0IF9pcyA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltrXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnRGaWVsZC5jaGVja2VkID0gX2lzO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcclxuICogQGNvbXBhbnkgRGFyY0Zsb3cgZGVzaWduIFtodHRwczovL2RhcmNmbG93LmNvbV1cclxuICogQGF1dGhvciAgICBLb3JvcGggPHlqa0BvdXRsb29rLmZyPiAoKzIyNSAwNzc4MzI5NTkyKVxyXG4gKiBAd2Vic2l0ZSBodHRwOi8va29yb3BoLnNpdGVcclxuICogQGxpbmsgICAgICBodHRwczovL2dpdGh1Yi5jb20vS29yb3BoXHJcbiAqIEBsaWNlbnNlICAgQXBhY2hlIDIuMFxyXG4gKiBAQ29weXJpZ2h0IChjKSAyMDIxLlxyXG4gKlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXBCdWlsZGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSA9ICdraC1uYXRpdmUtY2hpcCcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fQUREX0VWRU5UX0NISVAgPSBcIm9uQ2hpcEFkZFwiO1xyXG4gICAgICAgIHRoaXMuX1JFTU9WRV9FVkVOVF9DSElQID0gXCJvbkNoaXBEZWxldGVcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hpcENvbnRhaW5lckl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidWlsZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlwQ29udGFpbmVySXRlbS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaXBDb250YWluZXJJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBDb250YWluZXJJdGVtLml0ZW0oaSkuYXBwZW5kKHRoaXMudGFnQ29udGVudCh0aGlzLmNoaXBDb250YWluZXJJdGVtLml0ZW0oaSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoaXAgY29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBjb250YWluZXJcclxuICAgICAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICB0YWdDb250ZW50KGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGJhc2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgdGFnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLFxyXG4gICAgICAgICAgICBfaGlkZGVuX2ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSxcclxuICAgICAgICAgICAgZGF0YVNlYXJjaCA9IEpTT04ucGFyc2UoY29udGFpbmVyLmRhdGFzZXQuc2VhcmNoYWJsZSA/PyBcIltdXCIpLFxyXG4gICAgICAgICAgICByZXF1aXJlZCA9IGNvbnRhaW5lci5kYXRhc2V0LnJlcXVpcmVkID09PSBcInRydWVcIixcclxuICAgICAgICAgICAgbXVsdGlwbGUgPSBjb250YWluZXIuZGF0YXNldC5tdWx0aXBsZSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgY29uc3QgZGF0YUluaXQgPSBKU09OLnBhcnNlKGNvbnRhaW5lci5kYXRhc2V0LmluaXQgPz8gXCJbXVwiKTtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG5cclxuXHJcbiAgICAgICAgYmFzZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImtoLWNoaXAtYmFzZS1jb250YWluZXJcIjtcclxuICAgICAgICB0YWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJraC1jaGlwLWJhc2UtY29udGFpbmVyLWNoaXBcIjtcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBcImtoLWNoaXAtYmFzZS1jb250YWluZXItaW5wdXRcIjtcclxuICAgICAgICBzZWFyY2hDb250YWluZXIuY2xhc3NOYW1lID0gXCJraC1jaGlwLWJhc2UtY29udGFpbmVyLWlucHV0LXNlYXJjaFwiO1xyXG4gICAgICAgIF9pbnB1dC5jbGFzc05hbWUgPSBcImtoLWNoaXAtYmFzZS1jb250YWluZXItaW5wdXQtZmllbGRcIjtcclxuXHJcbiAgICAgICAgX2lucHV0LmlkID0gY29udGFpbmVyLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgX2hpZGRlbl9maWVsZC5yZXF1aXJlZCA9IHJlcXVpcmVkO1xyXG4gICAgICAgIF9oaWRkZW5fZmllbGQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgX2hpZGRlbl9maWVsZC5uYW1lID0gY29udGFpbmVyLmRhdGFzZXQubmFtZSA/PyBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoY29udGFpbmVyLmRhdGFzZXQucGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCkgX2lucHV0LnBsYWNlaG9sZGVyID0gY29udGFpbmVyLmRhdGFzZXQucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgX2lucHV0LmF1dG9mb2N1cyA9IChjb250YWluZXIuZGF0YXNldC5mb2N1cyAhPT0gdW5kZWZpbmVkICYmIGNvbnRhaW5lci5kYXRhc2V0LmZvY3VzID09PSBcInRydWVcIik7XHJcblxyXG4gICAgICAgIF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3RNdWx0aXBsZUNoaXAoY29udGFpbmVyLCB0YWdDb250YWluZXIsIF9pbnB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hWaWV3KGNvbnRhaW5lciwgX2lucHV0LCBzZWFyY2hDb250YWluZXIsIGRhdGFTZWFyY2gsIGRhdGEsIF9oaWRkZW5fZmllbGQsIHRhZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2hpcEl0ZW1XaGVuUHJlc3NFbnRlcihfaW5wdXQsIGRhdGEsIHRhZ0NvbnRhaW5lciwgX2hpZGRlbl9maWVsZCwgY29udGFpbmVyLCBzZWFyY2hDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0Q2hpcChkYXRhSW5pdCwgdGFnQ29udGFpbmVyLCBkYXRhLCBfaGlkZGVuX2ZpZWxkLCBjb250YWluZXIpO1xyXG5cclxuICAgICAgICAvKiAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhU2VhcmNoLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZCh0aGlzLnNlYXJjaEl0ZW0oZGF0YVNlYXJjaFtqXSkpXHJcbiAgICAgICAgICB9Ki9cclxuICAgICAgICBfaGlkZGVuX2ZpZWxkLnZhbHVlID0gbXVsdGlwbGUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IChkYXRhWzBdID09PSB1bmRlZmluZWQgPyBcIlwiIDogZGF0YVswXSk7XHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKF9pbnB1dCwgc2VhcmNoQ29udGFpbmVyLCBfaGlkZGVuX2ZpZWxkKTtcclxuICAgICAgICBiYXNlQ29udGFpbmVyLmFwcGVuZCh0YWdDb250YWluZXIsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICByZXR1cm4gYmFzZUNvbnRhaW5lcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gZGF0YUluaXRcclxuICAgICAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IHRhZ0NvbnRhaW5lclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBfaGlkZGVuX2ZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgaW5pdENoaXAoZGF0YUluaXQsIHRhZ0NvbnRhaW5lciwgZGF0YSwgX2hpZGRlbl9maWVsZCwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSBjb250YWluZXIuZGF0YXNldC5tdWx0aXBsZSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUluaXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgX3RhZ1ZhbHVlID0gZGF0YUluaXRbaV0sIHRhZ0l0ZW0gPSB0aGlzLnRhZ0l0ZW0oX3RhZ1ZhbHVlKTtcclxuICAgICAgICAgICAgdGFnQ29udGFpbmVyLmFwcGVuZCh0YWdJdGVtKTtcclxuICAgICAgICAgICAgdGFnSXRlbS5jaGlsZHJlbi5pdGVtKDEpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoZGF0YS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IF90YWdWYWx1ZSksIDEpO1xyXG4gICAgICAgICAgICAgICAgX2hpZGRlbl9maWVsZC52YWx1ZSA9IG11bHRpcGxlID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAoZGF0YVswXSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGFnSXRlbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLl9SRU1PVkVfRVZFTlRfQ0hJUCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IF90YWdWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKF90YWdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gX2lucHV0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSB0YWdDb250YWluZXJcclxuICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gX2hpZGRlbl9maWVsZFxyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gY29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBzZWFyY2hDb250YWluZXJcclxuICAgICAqL1xyXG4gICAgYWRkQ2hpcEl0ZW1XaGVuUHJlc3NFbnRlcihfaW5wdXQsIGRhdGEsIHRhZ0NvbnRhaW5lciwgX2hpZGRlbl9maWVsZCwgY29udGFpbmVyLCBzZWFyY2hDb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBtdWx0aXBsZSA9IGNvbnRhaW5lci5kYXRhc2V0Lm11bHRpcGxlID09PSBcInRydWVcIjtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5wdXRBY3Rpb24odGFnVmFsdWUsIGUpIHtcclxuICAgICAgICAgICAgY29uc3QgX3RhZ0l0ZW0gPSB0aGlzLnRhZ0l0ZW0odGFnVmFsdWUpO1xyXG4gICAgICAgICAgICB0YWdDb250YWluZXIuYXBwZW5kKF90YWdJdGVtKTtcclxuICAgICAgICAgICAgc2VhcmNoQ29udGFpbmVyLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgICAgIF90YWdJdGVtLmxhc3RFbGVtZW50Q2hpbGQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSB0YWdWYWx1ZSksIDEpO1xyXG4gICAgICAgICAgICAgICAgX2hpZGRlbl9maWVsZC52YWx1ZSA9IG11bHRpcGxlID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAoZGF0YVswXSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgX3RhZ0l0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5fUkVNT1ZFX0VWRU5UX0NISVAsIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWdWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBfaW5wdXQuZm9jdXMoe1xyXG4gICAgICAgICAgICAgICAgcHJldmVudFNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZGF0YS5wdXNoKHRhZ1ZhbHVlKTtcclxuICAgICAgICAgICAgX2hpZGRlbl9maWVsZC52YWx1ZSA9IG11bHRpcGxlID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAoZGF0YVswXSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFbMF0pO1xyXG4gICAgICAgICAgICBjb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5fQUREX0VWRU5UX0NISVAsIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogdGFnVmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YWdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAodGFnVmFsdWUgIT09IFwiXCIgJiYgZS5rZXlDb2RlID09PSAxMyAmJiAhZGF0YS5pbmNsdWRlcyh0YWdWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlucHV0QWN0aW9uLmNhbGwodGhpcywgdGFnVmFsdWUsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZ1ZhbHVlICE9PSBcIlwiICYmICFkYXRhLmluY2x1ZGVzKHRhZ1ZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEFjdGlvbi5jYWxsKHRoaXMsIHRhZ1ZhbHVlLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAgY29uc3QgX3RhZ0l0ZW0gPSB0aGlzLnRhZ0l0ZW0odGFnVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnQ29udGFpbmVyLmFwcGVuZChfdGFnSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hDb250YWluZXIuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgIF90YWdJdGVtLmxhc3RFbGVtZW50Q2hpbGQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShkYXRhLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gdGFnVmFsdWUpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfaGlkZGVuX2ZpZWxkLnZhbHVlID0gbXVsdGlwbGUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IChkYXRhWzBdID09PSB1bmRlZmluZWQgPyBcIlwiIDogZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3RhZ0l0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMuX1JFTU9WRV9FVkVOVF9DSElQLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWdWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIF9pbnB1dC5mb2N1cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudFNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2godGFnVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgX2hpZGRlbl9maWVsZC52YWx1ZSA9IG11bHRpcGxlID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAoZGF0YVswXSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMuX0FERF9FVkVOVF9DSElQLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogdGFnVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSk7Ki9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBjb250YWluZXJcclxuICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gX2lucHV0XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBzZWFyY2hDb250YWluZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGRhdGFTZWFyY2hcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGRhdGFcclxuICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gX2hpZGRlbl9maWVsZFxyXG4gICAgICogQHBhcmFtICB7SFRNTERpdkVsZW1lbnR9IHRhZ0NvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICBzZWFyY2hWaWV3KGNvbnRhaW5lciwgX2lucHV0LCBzZWFyY2hDb250YWluZXIsIGRhdGFTZWFyY2gsIGRhdGEsIF9oaWRkZW5fZmllbGQsIHRhZ0NvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gY29udGFpbmVyLmRhdGFzZXQubXVsdGlwbGUgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIGlmIChjb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLXNlYXJjaGFibGUnKSkge1xyXG4gICAgICAgICAgICBfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFnVmFsdWUgPSBlLnRhcmdldC52YWx1ZS50b1N0cmluZygpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaENvbnRhaW5lci5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZ1ZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNlYXJjaC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHJpbSgpLmluZGV4T2YodGFnVmFsdWUpICE9PSAtMSkubWFwKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF90YWcgPSB0aGlzLnNlYXJjaEl0ZW0odGFnKSwgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGFnLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaW5jbHVkZXModGFnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF90YWdJdGVtID0gX3RoaXMudGFnSXRlbSh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90YWdJdGVtLmNoaWxkcmVuLml0ZW0oMSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSB0YWcpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hpZGRlbl9maWVsZC52YWx1ZSA9IG11bHRpcGxlID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAoZGF0YVswXSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGFnSXRlbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KF90aGlzLl9SRU1PVkVfRVZFTlRfQ0hJUCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoX3RoaXMuX0FERF9FVkVOVF9DSElQLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnQ29udGFpbmVyLmFwcGVuZChfdGFnSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hpZGRlbl9maWVsZC52YWx1ZSA9IG11bHRpcGxlID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAoZGF0YVswXSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENvbnRhaW5lci5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENvbnRhaW5lci5hcHBlbmQoX3RhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNpbmdsZSBjaGlwIGF1dGhvcml6ZVxyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gY29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSB0YWdDb250YWluZXJcclxuICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gX2lucHV0XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfbm90TXVsdGlwbGVDaGlwKGNvbnRhaW5lciwgdGFnQ29udGFpbmVyLCBfaW5wdXQpIHtcclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9BRERfRVZFTlRfQ0hJUCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIF9pbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fUkVNT1ZFX0VWRU5UX0NISVAsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhZ0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT09IDApIF9pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhZ0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSBfaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGFnIGl0ZW0gYnVpbGRlclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgdGFnSXRlbShsYWJlbCkge1xyXG4gICAgICAgIGNvbnN0IF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgICAgICAgICAgX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgICAgIF9pdGVtLmNsYXNzTmFtZSA9IFwiY2hpcC1pdGVtXCJcclxuICAgICAgICBfdGV4dC5jbGFzc05hbWUgPSBcImNoaXAtaXRlbS10ZXh0XCJcclxuICAgICAgICBfYnV0dG9uLmNsYXNzTmFtZSA9IFwiY2hpcC1pdGVtLWRlbFwiXHJcblxyXG5cclxuICAgICAgICBfYnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xyXG4gICAgICAgIF9idXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgX3RleHQuaW5uZXJIVE1MID0gbGFiZWw7XHJcblxyXG4gICAgICAgIC8vZXZlbnRcclxuICAgICAgICAvKiAgICAgX2J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgIF9pdGVtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb25UYWdEZWxldGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgIF9pdGVtLmFwcGVuZChfdGV4dCwgX2J1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIF9pdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2VhcmNoIGxhYmVsIGl0ZW0gYnVpbGRlclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXHJcbiAgICAgKi9cclxuICAgIHNlYXJjaEl0ZW0obGFiZWwpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaXRlbS50YWJJbmRleCA9IDI7XHJcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAnc2VhcmNoLWl0ZW0nO1xyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gbGFiZWw7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBAYXV0aG9yIEtvcm9waCA8eWprQG91dGxvb2suZnI+XG4gKlxuICogQHdlYnNpdGUgaHR0cDovL2tvcm9waC5zaXRlXG4gKiBAbGluayAgaHR0cHM6Ly9naXRodWIuY29tL0tvcm9waFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAyMC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIHtcblxuICAgIC8qKlxuICAgICAqIHNldCBvciB1cGRhdGUgY29va2llIGl0ZW1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBleHBpcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBleHBpcmUgPSAzMCkge1xuICAgICAgICBjb25zdCBfZGF0ZSA9IG5ldyBEYXRlKCksIHN0cl9wYXRoID0gXCI7cGF0aD0vXCI7XG4gICAgICAgIF9kYXRlLnNldFRpbWUoX2RhdGUuZ2V0VGltZSgpICsgKGV4cGlyZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgY29uc3Qgc3RyX2V4cGlyZSA9IFwiO2V4cGlyZXM9XCIgKyBfZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIHN0cl9leHBpcmUgKyBzdHJfcGF0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgY29va2llIHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgICAgbGV0IF92YWx1ZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IGNvb2tpZVJhdyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLFxuICAgICAgICAgICAgX25hbWUgPSBuYW1lLnRyaW0oKSArIFwiPVwiO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llUmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29va2llUmF3W2ldLnRyaW0oKS5pbmRleE9mKF9uYW1lKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF92YWx1ZSA9IGNvb2tpZVJhd1tpXS50cmltKCkuc3Vic3RyaW5nKF9uYW1lLmxlbmd0aCwgY29va2llUmF3W2ldLnRyaW0oKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVsZXRlIGNvb2tpZSBpdGVtXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVsZXRlKG5hbWUpIHtcbiAgICAgICAgY29uc3QgX2RhdGUgPSBuZXcgRGF0ZSgpLCBzdHJfcGF0aCA9IFwiO3BhdGg9L1wiO1xuICAgICAgICBfZGF0ZS5zZXRUaW1lKF9kYXRlLmdldFRpbWUoKSAtICgyNCAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgY29uc3Qgc3RyX2V4cGlyZSA9IFwiO2V4cGlyZXM9XCIgKyBfZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyBzdHJfZXhwaXJlICsgc3RyX3BhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpDaGVjayBpZiBjb29raWUgaXRlbSBrZXkgZXhpc3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNoZWNrKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEtoQ29va2llLmdldENvb2tpZShuYW1lKSAhPT0gbnVsbDtcbiAgICB9XG5cblxufVxuXG4iLCIvKlxyXG4gKiAgQGNvbXBhbnkgRGFyY0Zsb3cgZGVzaWduIFtodHRwczovL2RhcmNmbG93LmNvbV1cclxuICogIEBhdXRob3IgICAgS29yb3BoIDx5amtAb3V0bG9vay5mcj4geygrMjI1KTA3NzgzMjk1OTJ9XHJcbiAqICBAd2Vic2l0ZSBodHRwOi8va29yb3BoLnNpdGVcclxuICogIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL0tvcm9waFxyXG4gKiAgQGxpY2Vuc2UgICBBcGFjaGUgMi4wXHJcbiAqICBAQ29weXJpZ2h0IChjKSAyMDIxLlxyXG4gKlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUgPSBcImtoLWltZy1sb2FkZXJcIixwYXR0ZXJuPVwiaW1hZ2UvKlwiKSB7XHJcbiAgICAgICAgdGhpcy5fcGF0dGVybiA9IHBhdHRlcm47XHJcbiAgICAgICAgdGhpcy5fY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50cyl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRzLml0ZW0oaSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgSU5QVVRfRklMRSA9IHRoaXMuY2hpbGRyZW4uaXRlbSgxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU1HID0gdGhpcy5jaGlsZHJlbi5pdGVtKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTVkdfQ09OVEFJTkVSPXRoaXMuY2hpbGRyZW4uaXRlbSgyKTtcclxuICAgICAgICAgICAgICAgICAgICBJTlBVVF9GSUxFLnNldEF0dHJpYnV0ZShcImFjY2VwdFwiLF90aGlzLl9wYXR0ZXJuKVxyXG4gICAgICAgICAgICAgICAgICAgIElOUFVUX0ZJTEUuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBJTlBVVF9GSUxFLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNWR19DT05UQUlORVIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU1HLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTUcucGFyZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nPVwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRhdGFJbWdSZWFkZXIoZXZlbnQsIElNRyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGNvbnNvbGUubG9nKFwiQXVjdW4gw6lsw6ltZW50IHRyb3V2w6lzIHF1aSBhIGxlIF9jbGFzc05hbWU9XCIgKyB0aGlzLl9jbGFzc05hbWUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhcHBseVN0eWxlKGltZyxzdmcpe1xyXG4gICAgICAgIHN2Zy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgIGltZy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICAgICAgICBpbWcucGFyZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nPVwiMnB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YUltZ1JlYWRlcihldmVudCwgaW1nKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9ldmVudCkge1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gX2V2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSlcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiAgQGNvbXBhbnkgRGFyY0Zsb3cgZGVzaWduIFtodHRwczovL2RhcmNmbG93LmNvbV1cclxuICogIEBhdXRob3IgICAgS29yb3BoIDx5amtAb3V0bG9vay5mcj4geygrMjI1KTA3NzgzMjk1OTJ9XHJcbiAqICBAd2Vic2l0ZSBodHRwOi8va29yb3BoLnNpdGVcclxuICogIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL0tvcm9waFxyXG4gKiAgQGxpY2Vuc2UgICBBcGFjaGUgMi4wXHJcbiAqICBAQ29weXJpZ2h0IChjKSAyMDIxLlxyXG4gKlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSBcIi4vQWxlcnREaWFsb2dcIjtcclxuaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tICdjaGFydC5qcyc7XHJcbkNoYXJ0LnJlZ2lzdGVyKC4uLnJlZ2lzdGVyYWJsZXMpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtoQ2hhcnQge1xyXG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lID0gJ2toLWNoYXJ0LWl0ZW0tY29udGVudCcpIHtcclxuICAgICAgICB0aGlzLmNoYXJ0SXRlbUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoYXJ0SXRlbUNvbnRlbnQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYXJ0SXRlbUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSB0aGlzLmNoYXJ0SXRlbUNvbnRlbnQuaXRlbShpKS5kYXRhc2V0LmxhYmVsID8/ICdsYWJlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHRoaXMuY2hhcnRJdGVtQ29udGVudC5pdGVtKGkpLmRhdGFzZXQudHlwZSA/PyAndHlwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgX2RhdGEgPSBKU09OLnBhcnNlKHRoaXMuY2hhcnRJdGVtQ29udGVudC5pdGVtKGkpLmRhdGFzZXQuZGF0YSA/PyAnW10nKSxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBAdmFyIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuY2hhcnRJdGVtQ29udGVudC5pdGVtKGkpLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAdmFyIHtDaGFydH0gYmFzZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGxldCBiYXNlQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSwvL3BpZSxkb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBfZGF0YS5sYWJlbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6bGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfZGF0YS52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxMDgsIDM0LCAwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDkwLDIyOSw0NCwwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDIxNCwxOCwyMzYsMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigyMjUsMTYwLDc0LDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMTIxLDIxNywxNDQsMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigxMTQsMTAyLDE1MCwwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDEwMSw2LDQ2LDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMTM0LDEwNCw0LDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMjUyLDQsNCwwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDEwOCwgMzQsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDkwLDIyOSw0NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigyMTQsMTgsMjM2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDIyNSwxNjAsNzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMTIxLDIxNywxNDQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMTE0LDEwMiwxNTAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMTAxLDYsNDYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMTM0LDEwNCw0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDI1Miw0LDQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoZSxjb250ZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dFswXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfYWxlcnQ9IG5ldyBBbGVydERpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FsZXJ0Lnllc09ubHk9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hbGVydC55ZXM9XCJPS1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FsZXJ0LmhlYWRlcj1sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRleHRbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYWxlcnQubWFzc2FnZT1gTGUgc2l0ZSBlbnLDqWdpc3RyZSBwb3VyIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogIzI4YTc0NTtcIj4ke19kYXRhLmxhYmVsc1tjb250ZXh0WzBdLmluZGV4XX08L3N0cm9uZz4sIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogIzI4YTc0NTtcIj4ke19kYXRhLnZhbHVlc1tjb250ZXh0WzBdLmluZGV4XX08L3N0cm9uZz4gdXRpbGlzYXRldXIocylgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FsZXJ0LnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiAgQGNvbXBhbnkgRGFyY0Zsb3cgZGVzaWduIFtodHRwczovL2RhcmNmbG93LmNvbV1cclxuICogIEBhdXRob3IgICAgS29yb3BoIDx5amtAb3V0bG9vay5mcj4geygrMjI1KTA3NzgzMjk1OTJ9XHJcbiAqICBAd2Vic2l0ZSBodHRwOi8va29yb3BoLnNpdGVcclxuICogIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL0tvcm9waFxyXG4gKiAgQGxpY2Vuc2UgICBBcGFjaGUgMi4wXHJcbiAqICBAQ29weXJpZ2h0IChjKSAyMDIxLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiQmFyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUgPSBcInRhYlwiKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiKHRhYnMuaXRlbShpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gdGFiSXRlbVxyXG4gICAgICovXHJcbiAgICB0YWIodGFiSXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHRhYkJ0biA9IHRhYkl0ZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYi1iYXItaXRlbVwiKSxcclxuICAgICAgICAgICAgVEFCX0tFWSA9IFwidGFiLmtleS5zdG9yYWdlLnN0YXRlXCI7XHJcbiAgICAgICAgdGhpcy5pbml0VGFiQmFyKFRBQl9LRVksIHRhYkl0ZW0sIHRhYkJ0bik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGFiQnRuLml0ZW0oaSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyQWN0aW9uKHRhYkJ0bi5pdGVtKGkpLCB0YWJJdGVtKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRBQl9LRVksIHRhYkJ0bi5pdGVtKGkpLmRhdGFzZXQudGFyZ2V0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0VGFiQmFyKFRBQl9LRVksIHRhYkl0ZW0sIHRhYkJ0bikge1xyXG4gICAgICAgIGNvbnN0IGluaXRLZXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUQUJfS0VZKSxcclxuICAgICAgICAgICAgICBtYXNrPXRhYkl0ZW0ucXVlcnlTZWxlY3RvcihgLnRhYi1tYXNrYCk7XHJcbiAgICAgICAgaWYgKGluaXRLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJCYXJBY3Rpb24odGFiSXRlbS5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9JHtpbml0S2V5fV1gKSwgdGFiSXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YWJCYXJBY3Rpb24odGFiQnRuWzBdLCB0YWJJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hc2spIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+bWFzay5yZW1vdmUoKSw1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBfdGhpc1xyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gdGFiSXRlbVxyXG4gICAgICovXHJcbiAgICB0YWJCYXJBY3Rpb24oX3RoaXMsIHRhYkl0ZW0pIHtcclxuICAgICAgICBjb25zdCBCVE5fQUNUSVZFID0gXCJ0YWItYWN0aXZlXCIsXHJcbiAgICAgICAgICAgIENPTlRFTlRfQUNUSVZFID0gXCJ0YWItY29udGVudC1hY3RpdmVcIjtcclxuICAgICAgICBjb25zdCBvbGRCdG4gPSB0YWJJdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke0JUTl9BQ1RJVkV9YCksXHJcbiAgICAgICAgICAgIG9sZENvbnRlbnQgPSB0YWJJdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke0NPTlRFTlRfQUNUSVZFfWApO1xyXG5cclxuICAgICAgICBpZiAob2xkQnRuKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRCdG4gIT09IF90aGlzKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRCdG4uY2xhc3NMaXN0LnJlbW92ZShCVE5fQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIG9sZENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShDT05URU5UX0FDVElWRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFfdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQlROX0FDVElWRSkpIHtcclxuICAgICAgICAgICAgX3RoaXMuY2xhc3NMaXN0LmFkZChCVE5fQUNUSVZFKTtcclxuICAgICAgICAgICAgdGFiSXRlbS5xdWVyeVNlbGVjdG9yKGAjJHtfdGhpcy5kYXRhc2V0LnRhcmdldH1gKS5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQUNUSVZFKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQGF1dGhvciBLb3JvcGggPHlqa0BvdXRsb29rLmZyPlxyXG4gKlxyXG4gKiBAd2Vic2l0ZSBodHRwOi8va29yb3BoLnNpdGVcclxuICogQGxpbmsgIGh0dHBzOi8vZ2l0aHViLmNvbS9Lb3JvcGhcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDIwLlxyXG4gKi9cclxuaW1wb3J0IHtcclxuICAgIFNWR19BREQsXHJcbiAgICBTVkdfREVMRVRFLFxyXG4gICAgU1ZHX0ZPTERFUixcclxuICAgIFNWR19GT0xERVJfQURELFxyXG4gICAgU1ZHX0ZPTERFUl9ERUxFVEUsXHJcbiAgICBTVkdfU0FWRSxcclxuICAgIFNWR19XQVJOSU5HXHJcbn0gZnJvbSBcIi4vc3ZnXCI7XHJcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tIFwiLi4vQWxlcnREaWFsb2dcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWcuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2hNZWRpYVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSA9ICdpbWctbWVkaWEtc3RvcmUnKSB7XHJcbiAgICAgICAgdGhpcy5JTlBVVF9GSUxFX05BTUUgPSAnX2ltYWdlJztcclxuICAgICAgICB0aGlzLkRJUkVDVE9SWV9JRCA9ICdkaXJlY3RvcnlfaWQnO1xyXG4gICAgICAgIHRoaXMuRElSRUNUT1JZX05BTUUgPSAnZGlyZWN0b3J5X25hbWUnO1xyXG4gICAgICAgIHRoaXMuQ0xBU1NfTkFNRSA9IGNsYXNzTmFtZTtcclxuXHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuQ0xBU1NfTkFNRSkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmtoTWVkaWFTdG9yZUJvZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGtoTG9hZERhdGEoe2RhdGF9KSB7XHJcbiAgICAgICAgLy90aGlzLnN1YkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJCb2R5LmFwcGVuZCh0aGlzLm1lZGlhU3RvcmVMaXN0KHtpdGVtOiBkYXRhW2ldfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHRoaXMudmlld0VtcHR5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJCb2R5LmFwcGVuZCh0aGlzLnZpZXdFbXB0eSk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZCh0aGlzLnN1YkJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9lbXB0eVZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgc3ViV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyksXHJcbiAgICAgICAgICAgIHdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuaWQgPSBcImtoLW1lZGlhLXN0b3JlLWJvZHktZW1wdHlcIjtcclxuICAgICAgICBjb250ZW50LmlkID0gXCJraC1tZWRpYS1zdG9yZS1ib2R5LWVtcHR5LWNvbnRlbnRcIjtcclxuXHJcbiAgICAgICAgd29yZC5pbm5lckhUTUwgPSBcIkF1Y3VuIGRvc3NpZXIgdHJvdXbDqVwiXHJcbiAgICAgICAgc3ViV29yZC5pbm5lckhUTUwgPSBcIkNsaXF1ZXIgc3VyIGxlIGJvdXR0b24gXCIgKyBTVkdfRk9MREVSX0FERCArIFwiIHBvdXIgYWpvdXRlciB1biBub3V2ZWF1IGRvc3NpZXIuLlwiXHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBTVkdfV0FSTklORztcclxuICAgICAgICBjb250ZW50LmFwcGVuZCh3b3JkLCBzdWJXb3JkKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYmFzZSB7SFRNTEVsZW1lbnR9XHJcbiAgICAgKiBAcGFyYW0gcm9vdCB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIG9wZW5NZWRpYVN0b3JlKGJhc2UsIHJvb3QpIHtcclxuICAgICAgICBjb25zdCBraFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuQ0xBU1NfTkFNRSksXHJcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnZpZXdFbXB0eSA9IHRoaXMuX2VtcHR5VmlldygpO1xyXG4gICAgICAgIGlmIChraFZpZXcgIT0gbnVsbClcclxuICAgICAgICAgICAgLy90aGlzLnByZWZpeCA9IGtoVmlldy5kYXRhc2V0LnByZWZpeDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBraFZpZXcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGtoVmlldy5pdGVtKGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIF90aGlzLmxvYWRlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YXNldC5yZXF1aXJlZCAhPT0gXCJcIikgX3RoaXMuZmlsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJylcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmFwcGVuZChyb290KTtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoY29uZmlnLmZpbGVzICsgJy8nICsgX3RoaXMucHJlZml4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9hZGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmtoTG9hZERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzXHJcbiAgICAgKiBAcmV0dXJuIHsoSFRNTERpdkVsZW1lbnR8SFRNTEJ1dHRvbkVsZW1lbnQpW119XHJcbiAgICAgKi9cclxuICAgIGZvbGRlclNWRyh7bmFtZSwgd2lkdGgsIGhlaWdodCwgaXMgPSBmYWxzZX0pIHtcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGZvbGRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcImZvbGRlci1kZWxldGVcIjtcclxuICAgICAgICBzdmcuY2xhc3NOYW1lID0gXCJraC1tZWRpYS1saXN0LWl0ZW0taGVhZGVyX1wiO1xyXG4gICAgICAgIGZvbGRlck5hbWUuY2xhc3NOYW1lID0gXCJraC1tZWRpYS1saXN0LWl0ZW0taGVhZGVyLXRleHRcIjtcclxuICAgICAgICAvL2ZvbGRlck5hbWUuaW5uZXJIVE1MID0gbmFtZTtcclxuICAgICAgICAvL2ZvbGRlck5hbWUuaW5uZXJIVE1MID0gbmFtZSsnIDxzbWFsbD5bODAweDkwMF08L3NtYWxsPic7XHJcbiAgICAgICAgZm9sZGVyTmFtZS5pbm5lckhUTUwgPSBgJHtuYW1lfSA8c3Ryb25nPlske3dpZHRofSwke2hlaWdodH1dPC9zdHJvbmc+YDtcclxuICAgICAgICBkaXYuYXBwZW5kKGZvbGRlck5hbWUpO1xyXG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFNWR19GT0xERVIpXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwiZm9sZGVyLWRlbFwiO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBTVkdfRk9MREVSX0RFTEVURTtcclxuXHJcbiAgICAgICAgLy8gaGlkZSBmb2xkZXIgYnRuIHJlbW92ZSB3aGVuIGZvbGRlciBjb250ZW50IGZpbGVzXHJcbiAgICAgICAgaWYgKCFpcykgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzdmcuYXBwZW5kKGRpdiwgYnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzdmcsIGJ1dHRvbl07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGUge0ZpbGV9XHJcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ31cclxuICAgICAqIEByZXR1cm4ge0Zvcm1EYXRhfVxyXG4gICAgICovXHJcbiAgICBkYXRhU2VuZCh7ZmlsZSwgaWR9KSB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGhpcy5ESVJFQ1RPUllfSUQsIGlkKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGhpcy5JTlBVVF9GSUxFX05BTUUsIGZpbGUsIGZpbGUubmFtZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRoaXMuRElSRUNUT1JZX05BTUUsIGZpbGUubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgbGlzdEl0ZW1BZGRJc0VuYWJsZSh2YWx1ZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBsaXN0X2l0ZW1fYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgna2gtbWVkaWEtbGlzdC1pdGVtLWFkZCcpO1xyXG4gICAgICAgIGlmIChsaXN0X2l0ZW1fYWRkICE9IG51bGwpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdF9pdGVtX2FkZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfaXRlbV9hZGQuaXRlbShpKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0X2l0ZW1fYWRkLml0ZW0oaSkucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfaXRlbV9hZGQuaXRlbShpKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaXRlbSB7T2JqZWN0fVxyXG4gICAgICogQHBhcmFtIGlzTWFzayB7Ym9vbGVhbn1cclxuICAgICAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBtZWRpYVN0b3JlTGlzdCh7aXRlbSwgaXNNYXNrID0gZmFsc2V9KSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBfdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgICAgIG1lZGlhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBtZWRpYUxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgYmFzZSA9IHRoaXMuYmFzZSwga2hBbGVydCA9IG5ldyBBbGVydERpYWxvZygpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJraC1tZWRpYS1saXN0LWl0ZW0tY29udGVudFwiO1xyXG4gICAgICAgIG1lZGlhTGlzdC5jbGFzc05hbWUgPSBcImtoLW1lZGlhLWxpc3QtaXRlbVwiO1xyXG4gICAgICAgIG1lZGlhTGlzdEhlYWRlci5jbGFzc05hbWUgPSBcImtoLW1lZGlhLWxpc3QtaXRlbS1oZWFkZXJcIjtcclxuXHJcbiAgICAgICAgaWYgKGlzTWFzaykge1xyXG4gICAgICAgICAgICBjb25zdCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICBtYXNrTG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1hc2suY2xhc3NOYW1lID0gXCJraC1tZWRpYS1saXN0LWl0ZW0tbWFza1wiO1xyXG4gICAgICAgICAgICBtYXNrTG9hZGVyLmlkID0gXCJraC1tZWRpYS1zdG9yZS1zbWFsbC1sb2FkZXJcIjtcclxuICAgICAgICAgICAgbWFzay5hcHBlbmQobWFza0xvYWRlcik7XHJcbiAgICAgICAgICAgIG1lZGlhTGlzdC5hcHBlbmQobWFzayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uY2F0YWxvZy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmQodGhpcy5tZWRpYVN0b3JlTGlzdEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uY2F0YWxvZ1tpXS5pZCxcclxuICAgICAgICAgICAgICAgIHVybDogaXRlbS5jYXRhbG9nW2ldLnVybCxcclxuICAgICAgICAgICAgICAgIGlzOiBpdGVtLmNhdGFsb2dbaV0uaXMsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmNhdGFsb2dbaV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBpdGVtLmNhdGFsb2dbaV0uY3JlYXRlZF9hdCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmltYWdlTGlzSXRlbUlzU2VsZWN0ZWQoYmFzZSwgaXRlbS5jYXRhbG9nW2ldLmlkKVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFtmb2xkZXJIZWFkZXIsIGJ0bkZvbGRlclJlbW92ZV0gPSB0aGlzLmZvbGRlclNWRyh7XHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgd2lkdGg6IGl0ZW0ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaXRlbS5oZWlnaHQsXHJcbiAgICAgICAgICAgIGlzOiBpdGVtLmNhdGFsb2cubGVuZ3RoID09PSAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWVkaWFMaXN0SGVhZGVyLmFwcGVuZChmb2xkZXJIZWFkZXIpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHRoaXMubWVkaWFTdG9yZUxpc3RBZGQoaXRlbS5pZCwgY29udGVudCwgYnRuRm9sZGVyUmVtb3ZlKSk7XHJcblxyXG4gICAgICAgIGJ0bkZvbGRlclJlbW92ZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG1lZGlhTGlzdC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBraEFsZXJ0LnNldE1lc3NhZ2UgPSBcIlZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBsZSBkb3NzaWVyIFxcXCJcIiArIGl0ZW0ubmFtZSArIFwiXFxcIiA/XCI7XHJcbiAgICAgICAgICAgIGtoQWxlcnQudHlwZSA9IFwiZFwiO1xyXG4gICAgICAgICAgICBraEFsZXJ0LmhlYWRlciA9IFwiQXZlcnRpc3NlbWVudFwiO1xyXG4gICAgICAgICAgICBraEFsZXJ0LnllcyA9IFwiT3VpXCI7XHJcbiAgICAgICAgICAgIGtoQWxlcnQubm8gPSBcIk5vblwiO1xyXG4gICAgICAgICAgICBraEFsZXJ0LnNob3coKS50aGVuKHJlcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFMaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYUxpc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiZGlzcGxheSA0MDBtcyBlYXNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudmlld0VtcHR5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGNvbmZpZy5yZW1vdmVfZm9sZGVyLnJlcGxhY2UoXCI6aWRcIiwgaXRlbS5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYUxpc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudmlld0VtcHR5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbWVkaWFMaXN0LmFwcGVuZChtZWRpYUxpc3RIZWFkZXIsIGNvbnRlbnQpO1xyXG4gICAgICAgIHJldHVybiBtZWRpYUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYmFzZSB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ31cclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGltYWdlTGlzSXRlbUlzU2VsZWN0ZWQoYmFzZSwgaWQpIHtcclxuICAgICAgICBjb25zdCBfaWQgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlLmRhdGFzZXQudGFyZ2V0KS5jaGlsZHJlbi5pdGVtKDEpLnZhbHVlKTtcclxuICAgICAgICBpZiAoaXNOYU4oX2lkKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIF9pZCA9PT0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgYWRkU1ZHKCkge1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN2Zy5pbm5lckhUTUwgPSBTVkdfQUREO1xyXG4gICAgICAgIHJldHVybiBzdmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBjcmVhdGVkXHJcbiAgICAgKiBAcGFyYW0gaXMge2Jvb2xlYW59XHJcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XHJcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ31cclxuICAgICAqIEBwYXJhbSBzZWxlY3RlZCB7Ym9vbGVhbn1cclxuICAgICAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBtZWRpYVN0b3JlTGlzdEl0ZW0oe25hbWUsIGNyZWF0ZWQsIGlzLCB1cmwsIGlkLCBzZWxlY3RlZCA9IGZhbHNlfSkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBfdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgICAgICAgICAga2hBbGVydCA9IG5ldyBBbGVydERpYWxvZygpLFxyXG4gICAgICAgICAgICBfcGxhY2Vob2xkZXIgPSB0aGlzLl9pbWFnZVBsYWNlaG9sZGVyKCksXHJcbiAgICAgICAgICAgIF9kYXRlID0gdGhpcy5kYXRlRm9ybWF0KG5ldyBEYXRlKGNyZWF0ZWQuZGF0ZSkpLFxyXG4gICAgICAgICAgICBfbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGFzdEluZGV4T2YoJy4nKSksXHJcbiAgICAgICAgICAgIF90eXBlID0gbmFtZS5zdWJzdHJpbmcobmFtZS5sYXN0SW5kZXhPZignLicpICsgMSk7XHJcblxyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBcImtoLW1lZGlhLWxpc3QtaXRlbS1pbWdcIjtcclxuXHJcbiAgICAgICAgaW1nLnRpdGxlID0gYE5vbSBkdSBmaWNoaWVyOiAke19uYW1lfVxcblR5cGU6IGltYWdlICR7X3R5cGV9XFxuQ3LDqWUgbGU6ICR7X2RhdGV9YDtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkKSBkaXYuY2xhc3NMaXN0LmFkZCgna2gtbWVkaWEtYWN0aXZlJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFNWR19ERUxFVEU7XHJcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcclxuICAgICAgICBpZiAoaXMpIGRpdi5hcHBlbmQoaW1nLCBidXR0b24sIF9wbGFjZWhvbGRlcik7XHJcbiAgICAgICAgZWxzZSBkaXYuYXBwZW5kKGltZywgX3BsYWNlaG9sZGVyKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZW1vdmUgaW1nIGlmIGVycm9yIGxvYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IGRpdi5yZW1vdmUoKTtcclxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gX3BsYWNlaG9sZGVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkZWxldGUgZmlsZVxyXG4gICAgICAgICAqIEBwYXJhbSBldlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBraEFsZXJ0LnNldE1lc3NhZ2UgPSBcIlZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBpbWFnZSA/XCI7XHJcbiAgICAgICAgICAgIGtoQWxlcnQudHlwZSA9IFwiZFwiO1xyXG4gICAgICAgICAgICBraEFsZXJ0LmhlYWRlciA9IFwiQXZlcnRpc3NlbWVudFwiO1xyXG4gICAgICAgICAgICBraEFsZXJ0LnllcyA9IFwiT3VpXCI7XHJcbiAgICAgICAgICAgIGtoQWxlcnQubm8gPSBcIk5vblwiO1xyXG4gICAgICAgICAgICBraEFsZXJ0LnNob3coKS50aGVuKHJlcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDgwMG1zIGVhc2VcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcImtoLW1lZGlhLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5idXR0b25TYXZlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoY29uZmlnLnJlbW92ZV9maWxlLnJlcGxhY2UoXCI6aWRcIiwgaWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwia2gtbWVkaWEtYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5idXR0b25TYXZlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZhdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgna2gtbWVkaWEtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmF0ZWQubGVuZ3RoKSBhY3RpdmF0ZWQuaXRlbSgwKS5jbGFzc0xpc3QucmVtb3ZlKCdraC1tZWRpYS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgna2gtbWVkaWEtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIF90aGlzLmJ1dHRvblNhdmUuc2V0QXR0cmlidXRlKCdkYXRhLXVybCcsIHVybCk7XHJcbiAgICAgICAgICAgIF90aGlzLmJ1dHRvblNhdmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuYnV0dG9uU2F2ZS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiIHx8IF90aGlzLmJ1dHRvblNhdmUuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIF90aGlzLmJ1dHRvblNhdmUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgX2ltYWdlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NOYW1lID0gXCJpbWFnZS1wbGFjZWhvbGRlclwiO1xyXG5cclxuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcInNsc3Nra2xcIlxyXG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBhZGQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gYnRuRm9sZGVyUmVtb3ZlIHtIVE1MQnV0dG9uRWxlbWVudH1cclxuICAgICAqIEBwYXJhbSBjb250ZW50IHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgbWVkaWFTdG9yZUxpc3RBZGQoaWQsIGNvbnRlbnQsIGJ0bkZvbGRlclJlbW92ZSkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwia2gtbWVkaWEtbGlzdC1pdGVtLWFkZFwiO1xyXG4gICAgICAgIGRpdi5pZCA9IFwiOlwiICsgaWQ7XHJcbiAgICAgICAgZGl2LmFwcGVuZCh0aGlzLmFkZFNWRygpKTtcclxuICAgICAgICBkaXYub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5maWxlLnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJy5wbmcsLmpwZWcsLmpwZywuZ2lmJylcclxuICAgICAgICAgICAgX3RoaXMuZmlsZS5jbGljaygpO1xyXG4gICAgICAgICAgICBsZXQgaiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBfdGhpcy5maWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoX3RoaXMubWVkaWFTdG9yZVRhbXBvbih7ZmlsZTogX3RoaXMuZmlsZS5maWxlc1swXSwgaWQ6IGlkfSkpLmluc2VydEJlZm9yZShkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxpc3RJdGVtQWRkSXNFbmFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggLSAxID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Gb2xkZXJSZW1vdmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHRhbXBvbiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIG1lZGlhU3RvcmVUYW1wb24oe2ZpbGUsIGlkfSkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcclxuICAgICAgICAgICAgY2xlYXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcbiAgICAgICAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCksIF90aGlzID0gdGhpcyxcclxuICAgICAgICAgICAga2hCYXNlID0gdGhpcy5iYXNlO1xyXG4gICAgICAgIGNsZWFyQnRuLmlubmVySFRNTCA9IFNWR19ERUxFVEU7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwia2gtbWVkaWEtbGlzdC1pdGVtLXRhbXBvblwiO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nLCBjbGVhckJ0biwgcHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgIHRoaXMuYWRkRmlsZVJlcXVlc3QodGhpcywgZGl2LCBwcm9ncmVzc0Jhciwga2hCYXNlLCBmaWxlLCBpZCk7XHJcbiAgICAgICAgY2xlYXJCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGRpdi5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjpcIiArIGlkKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBfdGhpcy5saXN0SXRlbUFkZElzRW5hYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgX3RoaXMuc291cmNlLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzYXZlIG5ldyBmaWxlXHJcbiAgICAgKiBAcGFyYW0gX3RoaXNcclxuICAgICAqIEBwYXJhbSBkaXZcclxuICAgICAqIEBwYXJhbSBwcm9ncmVzc0JhclxyXG4gICAgICogQHBhcmFtIGtoQmFzZVxyXG4gICAgICogQHBhcmFtIGZpbGVcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICovXHJcbiAgICBhZGRGaWxlUmVxdWVzdChfdGhpcywgZGl2LCBwcm9ncmVzc0Jhciwga2hCYXNlLCBmaWxlLCBpZCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zb3VyY2UgPSBheGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKTtcclxuICAgICAgICAgICAgYXhpb3MucG9zdChjb25maWcuYWRkX2ZpbGUsIF90aGlzLmRhdGFTZW5kKHtcclxuICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUsXHJcbiAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgfSksIHtcclxuICAgICAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IChwcm9ncmVzc0V2ZW50LmxvYWRlZCAvIHByb2dyZXNzRXZlbnQudG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gXCJcIiArIHBlcmNlbnQgKyBcIiVcIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogX3RoaXMuc291cmNlLnRva2VuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhUmVzcCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVJlc3AuaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnJlcGxhY2VXaXRoKF90aGlzLm1lZGlhU3RvcmVMaXN0SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRhdGFSZXNwLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhUmVzcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzOiBkYXRhUmVzcC5pcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFSZXNwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogZGF0YVJlc3AuY3JlYXRlZF9hdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxpc3RJdGVtQWRkSXNFbmFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDgwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGRpdi5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgOTAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaGVhZGVyQ29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0gYnRuQWRkRm9sZGVyXHJcbiAgICAgKiBAcGFyYW0gYmFzZVxyXG4gICAgICovXHJcbiAgICBmb2xkZXJBZGRJdGVtKGhlYWRlckNvbnRhaW5lciwgYnRuQWRkRm9sZGVyLCBiYXNlKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcyxcclxuICAgICAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIHNpemVfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSxcclxuICAgICAgICAgICAgd2lkdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLFxyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuaWQgPSBcIm1lZGlhLXN0b3JlLXBvcHVwLWlucHV0XCI7XHJcbiAgICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlucHV0LmlkID0gXCJtZWRpYS1zdG9yZS1wb3B1cC1pbnB1dC10ZXh0XCI7XHJcbiAgICAgICAgc2l6ZV9jb250YWluZXIuaWQgPSBcInNpemVfY29udGFpbmVyXCI7XHJcbiAgICAgICAgd2lkdGguY2xhc3NOYW1lID0gXCJtZWRpYS1zdG9yZS1wb3B1cC1pbnB1dC1zaXplXCI7XHJcbiAgICAgICAgaGVpZ2h0LmNsYXNzTmFtZSA9IFwibWVkaWEtc3RvcmUtcG9wdXAtaW5wdXQtc2l6ZVwiO1xyXG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJEb3NzaWVyXCI7XHJcbiAgICAgICAgd2lkdGgucGxhY2Vob2xkZXIgPSBcIkxhcmdldXIgKFwiICsgY29uZmlnLmRlZmF1bHRfc2l6ZS53aWR0aCArIFwiKVwiO1xyXG4gICAgICAgIGhlaWdodC5wbGFjZWhvbGRlciA9IFwiTG9uZ3VldXIgKFwiICsgY29uZmlnLmRlZmF1bHRfc2l6ZS5oZWlnaHQgKyBcIilcIjtcclxuICAgICAgICBidXR0b24uaWQgPSBcIm1lZGlhLXN0b3JlLXBvcHVwLWlucHV0LWJ1dHRvblwiO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBTVkdfU0FWRTtcclxuXHJcbiAgICAgICAgc2l6ZV9jb250YWluZXIuYXBwZW5kKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBzaXplX2NvbnRhaW5lciwgYnV0dG9uKTtcclxuICAgICAgICBkaXYub25jbGljayA9IGV2ID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHdpZHRoLm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHdpZHRoLnZhbHVlID0gd2lkdGgudmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKC9bQS1aYS16XS8pLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlaWdodC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgd2lkdGgudmFsdWUgPSB3aWR0aC52YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoL1tBLVphLXpdLyksICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVzZXJBZGRGb2xkZXJSZXF1ZXN0KGlucHV0LCB3aWR0aCwgaGVpZ2h0LCBfdGhpcywgZGl2LCBiYXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAvKmlmIChpbnB1dC52YWx1ZSAhPSBudWxsICYmIGlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkRm9sZGVyUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlLmRhdGFzZXQucGF0aF9hZGRfZm9sZGVyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYucmVtb3ZlKCk7Ki9cclxuXHJcbiAgICAgICAgICAgIF90aGlzLnVzZXJBZGRGb2xkZXJSZXF1ZXN0KGlucHV0LCB3aWR0aCwgaGVpZ2h0LCBfdGhpcywgZGl2LCBiYXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuQWRkRm9sZGVyLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9ICgpID0+IGRpdi5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGhlaWdodFxyXG4gICAgICogQHBhcmFtIHt0aGlzfSBfdGhpc1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGl2XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBiYXNlXHJcbiAgICAgKi9cclxuICAgIHVzZXJBZGRGb2xkZXJSZXF1ZXN0KGlucHV0LCB3aWR0aCwgaGVpZ2h0LCBfdGhpcywgZGl2LCBiYXNlKSB7XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgX3dpZHRoID0gd2lkdGgudmFsdWUudHJpbSgpICE9PSBcIlwiID8gd2lkdGgudmFsdWUudG9TdHJpbmcoKS50cmltKCkgOiBjb25maWcuZGVmYXVsdF9zaXplLndpZHRoLFxyXG4gICAgICAgICAgICBfaGVpZ2h0ID0gaGVpZ2h0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIiA/IGhlaWdodC52YWx1ZS50b1N0cmluZygpLnRyaW0oKSA6IGNvbmZpZy5kZWZhdWx0X3NpemUuaGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9IG51bGwgJiYgaW5wdXQudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmFkZEZvbGRlclJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAvKnVybDogYmFzZS5kYXRhc2V0LnBhdGhfYWRkX2ZvbGRlciwqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjb25maWcuYWRkX2ZvbGRlcixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF9oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHRoaXMucHJlZml4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcXVlc3Qgc2F2ZSBuZXcgZm9sZGVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XHJcbiAgICAgKi9cclxuICAgIGFkZEZvbGRlclJlcXVlc3Qoe25hbWUsIHdpZHRoID0gMzAwLCBoZWlnaHQgPSAzMDAsIHVybCwgcHJlZml4fSkge1xyXG4gICAgICAgIGNvbnN0IGZvbGRlciA9IG5ldyBGb3JtRGF0YSgpLFxyXG4gICAgICAgICAgICBfdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxpc3REaXNhYmxlZCA9IF90aGlzLm1lZGlhU3RvcmVMaXN0KHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmVmaXhcIjogcHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0YWxvZ1wiOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRfYXRcIjogKG5ldyBEYXRlKCkpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpc01hc2s6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy9lbXB0eU9sZFxyXG4gICAgICAgIGZvbGRlci5hcHBlbmQoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgICAgIGZvbGRlci5hcHBlbmQoXCJwcmVmaXhcIiwgcHJlZml4KTtcclxuICAgICAgICBmb2xkZXIuYXBwZW5kKFwid2lkdGhcIiwgd2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZm9sZGVyLmFwcGVuZChcImhlaWdodFwiLCBoZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMudmlld0VtcHR5KSB0aGlzLnZpZXdFbXB0eS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgX3RoaXMuc3ViQm9keS5pbnNlcnRCZWZvcmUobGlzdERpc2FibGVkLCBfdGhpcy5zdWJCb2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQWRkRm9sZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGZvbGRlcikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbGlzdERpc2FibGVkLnJlcGxhY2VXaXRoKF90aGlzLm1lZGlhU3RvcmVMaXN0KHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBfdGhpcy5idXR0b25BZGRGb2xkZXIucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgX3RoaXMuYnV0dG9uQWRkRm9sZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICBsaXN0RGlzYWJsZWQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGtoTWVkaWFTdG9yZUJvZHkoKSB7XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBfdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSxcclxuICAgICAgICAgICAgbWVkaWFCdXR0b25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLW1lZGlhLXN0b3JlJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25BZGRGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc3ViQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2toLW1lZGlhLXN0b3JlLWJhc2UnKTtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IHRoaXMudmlld1RhcmdldCA/IHRoaXMudmlld1RhcmdldC5kYXRhc2V0LnByZWZpeCA6ICdhbGwnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy52aWV3VGFyZ2V0KXtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmlld1RhcmdldC5kYXRhc2V0LndpZHRoICE9PSAnMCcgfHwgdGhpcy52aWV3VGFyZ2V0LmRhdGFzZXQuaGVpZ2h0ICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdUYXJnZXQuZGF0YXNldC53aWR0aCAhPT0gJzAnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5kZWZhdWx0X3NpemUud2lkdGggPSBwYXJzZUludCh0aGlzLnZpZXdUYXJnZXQuZGF0YXNldC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3VGFyZ2V0LmRhdGFzZXQuaGVpZ2h0ICE9PSAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmRlZmF1bHRfc2l6ZS5oZWlnaHQgPSBwYXJzZUludCh0aGlzLnZpZXdUYXJnZXQuZGF0YXNldC5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsZS5pZCA9IFwia2gtbWVkaWEtc3RvcmUtZmlsZVwiO1xyXG4gICAgICAgIHRoaXMuZmlsZS50eXBlID0gXCJmaWxlXCI7XHJcbiAgICAgICAgdGhpcy5maWxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmJvZHkuaWQgPSBcImtoLW1lZGlhLXN0b3JlLWJvZHlcIjtcclxuICAgICAgICB0aGlzLnN1YkJvZHkuaWQgPSBcImtoLW1lZGlhLXN0b3JlLXN1Yi1ib2R5XCI7XHJcbiAgICAgICAgdGhpcy5sb2FkZXJDb250YWluZXIuaWQgPSBcImxvYWRlci1jb250YWluZXJcIjtcclxuICAgICAgICBsb2FkZXIuaWQgPSBcImtoLW1lZGlhLXN0b3JlLWxvYWRlclwiO1xyXG4gICAgICAgIHRoaXMubG9hZGVyQ29udGFpbmVyLmFwcGVuZChsb2FkZXIpO1xyXG4gICAgICAgIHRoaXMuc3ViQm9keS5hcHBlbmQodGhpcy5maWxlLCB0aGlzLmxvYWRlckNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZCh0aGlzLnN1YkJvZHkpO1xyXG4gICAgICAgIGhlYWRlci5pZCA9IFwia2gtbWVkaWEtc3RvcmUtOmhlYWRlclwiO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uU2F2ZS5pZCA9IFwia2gtbWVkaWEtc3RvcmUtc2F2ZVwiO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uU2F2ZS50ZXh0Q29udGVudCA9ICh0aGlzLnZpZXdUYXJnZXQgJiYgdGhpcy52aWV3VGFyZ2V0LmRhdGFzZXQucmVsb2FkID09PSBcInRydWVcIikgPyBcIkZlcm1lclwiIDogXCJDaG9pc2lyXCI7XHJcbiAgICAgICAgbWVkaWFCdXR0b25DbG9zZS5pZCA9IFwia2gtbWVkaWEtc3RvcmUtY2xvc2VcIjtcclxuICAgICAgICBtZWRpYUJ1dHRvbkNsb3NlLmlubmVySFRNTCA9IFwiPHNwYW4+JnRpbWVzOzwvc3Bhbj5cIjtcclxuICAgICAgICByb290LmlkID0gXCJraC1tZWRpYS1zdG9yZVwiO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQWRkRm9sZGVyLmlkID0gXCJpbWctY29udGFpbmVyXCI7XHJcbiAgICAgICAgdGhpcy5idXR0b25BZGRGb2xkZXIuaW5uZXJIVE1MID0gU1ZHX0ZPTERFUl9BREQ7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZCh0aGlzLmJ1dHRvbkFkZEZvbGRlciwgbWVkaWFCdXR0b25DbG9zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9sZGVyQWRkSXRlbShoZWFkZXIsIHRoaXMuYnV0dG9uQWRkRm9sZGVyLCB0aGlzLmJhc2UpO1xyXG4gICAgICAgIC8vLypcclxuICAgICAgICBtZWRpYUJ1dHRvbkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViQm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViQm9keS5hcHBlbmQodGhpcy5maWxlLCB0aGlzLmxvYWRlckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdUYXJnZXQuZGF0YXNldC5yZWxvYWQgPT09IFwidHJ1ZVwiKSBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uU2F2ZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKF90aGlzLnZpZXdUYXJnZXQuZGF0YXNldC5pbWdfY2xhc3MpLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChfdGhpcy52aWV3VGFyZ2V0LmRhdGFzZXQuaW5wdXRfaWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iYXNlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgdGhpcy5zdWJCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoISh0aGlzLnZpZXdUYXJnZXQuZGF0YXNldC5yZWxvYWQgPT09IFwidHJ1ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lZGlhLXN0b3JlLWljb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5pdGVtKDApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5idXR0b25TYXZlLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5pdGVtKGkpLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5idXR0b25TYXZlLmRhdGFzZXQudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuaXRlbShpKS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltZ1tpXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbWFzaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWdbaV0uZGF0YXNldC5tYXNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2sucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgcm9vdC5hcHBlbmQoaGVhZGVyLCB0aGlzLmJvZHksIHRoaXMuYnV0dG9uU2F2ZSk7XHJcbiAgICAgICAgdGhpcy5vcGVuTWVkaWFTdG9yZSh0aGlzLmJhc2UsIHJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydCBkYXRlIHRvIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXHJcbiAgICAgKi9cclxuICAgIGRhdGVGb3JtYXQoZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBgJHtkYXRlLmdldFVUQ0RhdGUoKX0uJHtkYXRlLmdldFVUQ01vbnRoKCl9LiR7ZGF0ZS5nZXRVVENGdWxsWWVhcigpfSDDoCAke2RhdGUuZ2V0VVRDSG91cnMoKX06JHtkYXRlLmdldFVUQ01pbnV0ZXMoKX1gO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU1ZHX0ZPTERFUiA9XHJcbiAgICAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcXG4nICtcclxuICAgICdcXHQgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cXG4nICtcclxuICAgICc8cG9seWdvbiBzdHlsZT1cImZpbGw6I0UwQTAyRjtcIiBwb2ludHM9XCIwLDExOC45MDQgNTEyLDExOC45MDQgNTEyLDc1LjcwNCAxOTQuODQ4LDc1LjcwNCAxNjkuMTg0LDUwLjMxMiAzMC43Miw1MC4zMTIgMCw4MS4wMzIgXCIvPlxcbicgK1xyXG4gICAgJzxyZWN0IHk9XCIxMTguOTA0XCIgc3R5bGU9XCJmaWxsOiNGRkNDNjc7XCIgd2lkdGg9XCI1MTJcIiBoZWlnaHQ9XCIzNDIuNzY4XCIvPlxcbicgK1xyXG4gICAgJzxnIHN0eWxlPVwib3BhY2l0eTowLjU7XCI+XFxuJyArXHJcbiAgICAnXFx0PHJlY3QgeT1cIjQ0OS4xMTJcIiBzdHlsZT1cImZpbGw6I0UwQTAyRjtcIiB3aWR0aD1cIjUxMlwiIGhlaWdodD1cIjEyLjU3NlwiLz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPHJlY3QgeD1cIjIwLjcwNFwiIHk9XCI5Ny4zMlwiIHN0eWxlPVwiZmlsbDojRkZGRkZGO1wiIHdpZHRoPVwiNDcwLjU5MlwiIGhlaWdodD1cIjIxLjU4NFwiLz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8L3N2Zz5cXG4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNWR19BREQgPVxyXG4gICAgJzxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcXG4nICtcclxuICAgICdcXHQgdmlld0JveD1cIjAgMCAzMDguOCAzMDguOFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDguOCAzMDguODtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJ1xcdDxwYXRoIHN0eWxlPVwiZmlsbDojNEE1NjZFO1wiIGQ9XCJNMzUuNiwxOC44aDE4MGMxOS42LDAsMzUuNiwxNiwzNS42LDM1LjZ2MTg1LjJjMCwxOS42LTE2LDM1LjYtMzUuNiwzNS42aC0xODBcXG4nICtcclxuICAgICdcXHRcXHRDMTYsMjc1LjIsMCwyNTkuMiwwLDIzOS42VjU0QzAsMzQuOCwxNiwxOC44LDM1LjYsMTguOHpcIi8+XFxuJyArXHJcbiAgICAnXFx0PHBhdGggc3R5bGU9XCJmaWxsOiMwMEI1OTQ7XCIgZD1cIk0xMTYuNCwxODYuNGwtNTIuOC01Mi44TDAsMTk3LjJ2MTMuMnYyOC44YzAsMTkuNiwxNiwzNS42LDM1LjYsMzUuNmgxODBjMTkuNiwwLDM1LjYtMTYsMzUuNi0zNS42XFxuJyArXHJcbiAgICAnXFx0XFx0di0yOC44di0zOS42bC01OS42LTYwTDExNi40LDE4Ni40elwiLz5cXG4nICtcclxuICAgICdcXHQ8Y2lyY2xlIHN0eWxlPVwiZmlsbDojRkZDQzAzO1wiIGN4PVwiMTE0LjhcIiBjeT1cIjEwMy42XCIgcj1cIjIyLjRcIi8+XFxuJyArXHJcbiAgICAnXFx0PGNpcmNsZSBzdHlsZT1cImZpbGw6I0ZGRkZGRjtcIiBjeD1cIjI1MS4yXCIgY3k9XCIyMzIuNFwiIHI9XCI1Ny42XCIvPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICdcXHQ8cGF0aCBzdHlsZT1cImZpbGw6IzAwQjU5NDtcIiBkPVwiTTIyNCwyNDAuOGMtNC40LDAtOC40LTMuNi04LjQtOC40czMuNi04LjQsOC40LTguNGg1NC40YzQuOCwwLDguNCwzLjYsOC40LDguNHMtMy42LDguNC04LjQsOC40XFxuJyArXHJcbiAgICAnXFx0XFx0SDIyNHpcIi8+XFxuJyArXHJcbiAgICAnXFx0PHBhdGggc3R5bGU9XCJmaWxsOiMwMEI1OTQ7XCIgZD1cIk0yNTkuNiwyNTkuNmMwLDQuOC0zLjYsOC40LTguNCw4LjRzLTguNC0zLjYtOC40LTguNHYtNTRjMC00LjQsMy42LTguNCw4LjQtOC40XFxuJyArXHJcbiAgICAnXFx0XFx0YzQuNCwwLDguNCwzLjYsOC40LDguNFYyNTkuNnpcIi8+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzxnPlxcbicgK1xyXG4gICAgJzwvZz5cXG4nICtcclxuICAgICc8Zz5cXG4nICtcclxuICAgICc8L2c+XFxuJyArXHJcbiAgICAnPGc+XFxuJyArXHJcbiAgICAnPC9nPlxcbicgK1xyXG4gICAgJzwvc3ZnPic7XHJcblxyXG5leHBvcnQgY29uc3QgU1ZHX0RFTEVURSA9ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiOFwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj4gPHRpdGxlPlN1cHByaW1lcjwvdGl0bGU+PHBhdGggZD1cIk0zMS43MDggMjUuNzA4Yy0wLTAtMC0wLTAtMGwtOS43MDgtOS43MDggOS43MDgtOS43MDhjMC0wIDAtMCAwLTAgMC4xMDUtMC4xMDUgMC4xOC0wLjIyNyAwLjIyOS0wLjM1NyAwLjEzMy0wLjM1NiAwLjA1Ny0wLjc3MS0wLjIyOS0xLjA1N2wtNC41ODYtNC41ODZjLTAuMjg2LTAuMjg2LTAuNzAyLTAuMzYxLTEuMDU3LTAuMjI5LTAuMTMgMC4wNDgtMC4yNTIgMC4xMjQtMC4zNTcgMC4yMjggMCAwLTAgMC0wIDBsLTkuNzA4IDkuNzA4LTkuNzA4LTkuNzA4Yy0wLTAtMC0wLTAtMC0wLjEwNS0wLjEwNC0wLjIyNy0wLjE4LTAuMzU3LTAuMjI4LTAuMzU2LTAuMTMzLTAuNzcxLTAuMDU3LTEuMDU3IDAuMjI5bC00LjU4NiA0LjU4NmMtMC4yODYgMC4yODYtMC4zNjEgMC43MDItMC4yMjkgMS4wNTcgMC4wNDkgMC4xMyAwLjEyNCAwLjI1MiAwLjIyOSAwLjM1NyAwIDAgMCAwIDAgMGw5LjcwOCA5LjcwOC05LjcwOCA5LjcwOGMtMCAwLTAgMC0wIDAtMC4xMDQgMC4xMDUtMC4xOCAwLjIyNy0wLjIyOSAwLjM1Ny0wLjEzMyAwLjM1NS0wLjA1NyAwLjc3MSAwLjIyOSAxLjA1N2w0LjU4NiA0LjU4NmMwLjI4NiAwLjI4NiAwLjcwMiAwLjM2MSAxLjA1NyAwLjIyOSAwLjEzLTAuMDQ5IDAuMjUyLTAuMTI0IDAuMzU3LTAuMjI5IDAtMCAwLTAgMC0wbDkuNzA4LTkuNzA4IDkuNzA4IDkuNzA4YzAgMCAwIDAgMCAwIDAuMTA1IDAuMTA1IDAuMjI3IDAuMTggMC4zNTcgMC4yMjkgMC4zNTYgMC4xMzMgMC43NzEgMC4wNTcgMS4wNTctMC4yMjlsNC41ODYtNC41ODZjMC4yODYtMC4yODYgMC4zNjItMC43MDIgMC4yMjktMS4wNTctMC4wNDktMC4xMy0wLjEyNC0wLjI1Mi0wLjIyOS0wLjM1N3pcIj48L3BhdGg+PC9zdmc+JztcclxuZXhwb3J0IGNvbnN0IFNWR19GT0xERVJfREVMRVRFID1cclxuICAgICc8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxcbicgK1xyXG4gICAgJzx0aXRsZT5TdXBwcmltZXI8L3RpdGxlPlxcbicgK1xyXG4gICAgJzxwYXRoIGQ9XCJNNCAxMHYyMGMwIDEuMSAwLjkgMiAyIDJoMThjMS4xIDAgMi0wLjkgMi0ydi0yMGgtMjJ6TTEwIDI4aC0ydi0xNGgydjE0ek0xNCAyOGgtMnYtMTRoMnYxNHpNMTggMjhoLTJ2LTE0aDJ2MTR6TTIyIDI4aC0ydi0xNGgydjE0elwiPjwvcGF0aD5cXG4nICtcclxuICAgICc8cGF0aCBkPVwiTTI2LjUgNGgtNi41di0yLjVjMC0wLjgyNS0wLjY3NS0xLjUtMS41LTEuNWgtN2MtMC44MjUgMC0xLjUgMC42NzUtMS41IDEuNXYyLjVoLTYuNWMtMC44MjUgMC0xLjUgMC42NzUtMS41IDEuNXYyLjVoMjZ2LTIuNWMwLTAuODI1LTAuNjc1LTEuNS0xLjUtMS41ek0xOCA0aC02di0xLjk3NWg2djEuOTc1elwiPjwvcGF0aD5cXG4nICtcclxuICAgICc8L3N2Zz4nO1xyXG5leHBvcnQgY29uc3QgU1ZHX0FERF9GT0xERVIgPSAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj48dGl0bGU+QWpvdXRlciB1biBkb3NzaWVyPC90aXRsZT48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMTggOGwtNC00aC0xNHYyNmgzMnYtMjJoLTE0ek0yMiAyMmgtNHY0aC00di00aC00di00aDR2LTRoNHY0aDR2NHpcIj48L3BhdGg+PC9zdmc+JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU1ZHX0VYQ0VMID0gdGl0bGUgPT4gYDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+PHRpdGxlPiR7dGl0bGV9PC90aXRsZT48cGF0aCBmaWxsPVwiIzIxNzM0NlwiIGQ9XCJNMzEuNDA0IDQuMTM2aC0xMC43MnYxLjk4NGgzLjE2djMuMTM5aC0zLjE2djFoMy4xNnYzLjE0M2gtMy4xNnYxLjAyOGgzLjE2djIuOTcyaC0zLjE2djEuMTkxaDMuMTZ2Mi45NzloLTMuMTZ2MS4xOTFoMy4xNnYyLjk5NmgtMy4xNnYyLjE4NWgxMC43MmMwLjE2OS0wLjA1MSAwLjMxMS0wLjI1MSAwLjQyNC0wLjU5NyAwLjExMy0wLjM0OSAwLjE3Mi0wLjYzMyAwLjE3Mi0wLjg0OHYtMjEuOTk5YzAtMC4xNzEtMC4wNTktMC4yNzMtMC4xNzItMC4zMDktMC4xMTMtMC4wMzUtMC4yNTUtMC4wNTMtMC40MjQtMC4wNTN6TTMwLjAxMyAyNS43NTVoLTUuMTQzdi0yLjk5M2g1LjE0M3YyLjk5NnpNMzAuMDEzIDIxLjU3MWgtNS4xNDN2LTIuOThoNS4xNDN6TTMwLjAxMyAxNy40aC01LjE0M3YtMi45NTloNS4xNDN2Mi45NjF6TTMwLjAxMyAxMy40aC01LjE0M3YtMy4xMzloNS4xNDN2My4xNHpNMzAuMDEzIDkuMjQxaC01LjE0M3YtMy4xMmg1LjE0M3YzLjE0ek0wIDMuNjQxdjI0LjgwMWwxOC44OCAzLjI2NXYtMzEuNDE2bC0xOC44OCAzLjM2ek0xMS4xOTEgMjIuNDAzYy0wLjA3Mi0wLjE5NS0wLjQxMS0xLjAyMS0xLjAxMS0yLjQ4NC0wLjU5OS0xLjQ2MS0wLjk2LTIuMzEyLTEuMDY1LTIuNTU1aC0wLjAzM2wtMi4wMjUgNC44Mi0yLjcwNy0wLjE4MyAzLjIxMS02LTIuOTQtNiAyLjc2LTAuMTQ1IDEuODI0IDQuNjk1aDAuMDM2bDIuMDYwLTQuOTA4IDIuODUyLTAuMTgtMy4zOTYgNi40OTMgMy41IDYuNjI0LTMuMDY1LTAuMTh6XCI+PC9wYXRoPjwvc3ZnPmA7XHJcbmV4cG9ydCBjb25zdCBTVkdfVEVYVCA9IHRpdGxlID0+IGA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPjx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+PHBhdGggIGQ9XCJNMjguNjgxIDcuMTU5Yy0wLjY5NC0wLjk0Ny0xLjY2Mi0yLjA1My0yLjcyNC0zLjExNnMtMi4xNjktMi4wMzAtMy4xMTYtMi43MjRjLTEuNjEyLTEuMTgyLTIuMzkzLTEuMzE5LTIuODQxLTEuMzE5aC0xNS41Yy0xLjM3OCAwLTIuNSAxLjEyMS0yLjUgMi41djI3YzAgMS4zNzggMS4xMjIgMi41IDIuNSAyLjVoMjNjMS4zNzggMCAyLjUtMS4xMjIgMi41LTIuNXYtMTkuNWMwLTAuNDQ4LTAuMTM3LTEuMjMtMS4zMTktMi44NDF6TTI0LjU0MyA1LjQ1N2MwLjk1OSAwLjk1OSAxLjcxMiAxLjgyNSAyLjI2OCAyLjU0M2gtNC44MTF2LTQuODExYzAuNzE4IDAuNTU2IDEuNTg0IDEuMzA5IDIuNTQzIDIuMjY4ek0yOCAyOS41YzAgMC4yNzEtMC4yMjkgMC41LTAuNSAwLjVoLTIzYy0wLjI3MSAwLTAuNS0wLjIyOS0wLjUtMC41di0yN2MwLTAuMjcxIDAuMjI5LTAuNSAwLjUtMC41IDAgMCAxNS40OTktMCAxNS41IDB2N2MwIDAuNTUyIDAuNDQ4IDEgMSAxaDd2MTkuNXpcIj48L3BhdGg+PHBhdGggZD1cIk0yMyAyNmgtMTRjLTAuNTUyIDAtMS0wLjQ0OC0xLTFzMC40NDgtMSAxLTFoMTRjMC41NTIgMCAxIDAuNDQ4IDEgMXMtMC40NDggMS0xIDF6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMjMgMjJoLTE0Yy0wLjU1MiAwLTEtMC40NDgtMS0xczAuNDQ4LTEgMS0xaDE0YzAuNTUyIDAgMSAwLjQ0OCAxIDFzLTAuNDQ4IDEtMSAxelwiPjwvcGF0aD48cGF0aCBkPVwiTTIzIDE4aC0xNGMtMC41NTIgMC0xLTAuNDQ4LTEtMXMwLjQ0OC0xIDEtMWgxNGMwLjU1MiAwIDEgMC40NDggMSAxcy0wLjQ0OCAxLTEgMXpcIj48L3BhdGg+PC9zdmc+YDtcclxuZXhwb3J0IGNvbnN0IFNWR19QREYgPSB0aXRsZSA9PiBgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCI1NFwiIGhlaWdodD1cIjU0XCIgIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cXHQgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNFMkU1RTc7XCIgZD1cIk0xMjgsMGMtMTcuNiwwLTMyLDE0LjQtMzIsMzJ2NDQ4YzAsMTcuNiwxNC40LDMyLDMyLDMyaDMyMGMxNy42LDAsMzItMTQuNCwzMi0zMlYxMjhMMzUyLDBIMTI4elwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNCMEI3QkQ7XCIgZD1cIk0zODQsMTI4aDk2TDM1Miwwdjk2QzM1MiwxMTMuNiwzNjYuNCwxMjgsMzg0LDEyOHpcIi8+XHJcbjxwb2x5Z29uIHN0eWxlPVwiZmlsbDojQ0FEMUQ4O1wiIHBvaW50cz1cIjQ4MCwyMjQgMzg0LDEyOCA0ODAsMTI4IFwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNmMTU2NDI7XCIgZD1cIk00MTYsNDE2YzAsOC44LTcuMiwxNi0xNiwxNkg0OGMtOC44LDAtMTYtNy4yLTE2LTE2VjI1NmMwLTguOCw3LjItMTYsMTYtMTZoMzUyYzguOCwwLDE2LDcuMiwxNiwxNlxyXG5cXHRWNDE2elwiLz5cclxuPGc+XHJcblxcdDxwYXRoIHN0eWxlPVwiZmlsbDojRkZGRkZGO1wiIGQ9XCJNMTAxLjc0NCwzMDMuMTUyYzAtNC4yMjQsMy4zMjgtOC44MzIsOC42ODgtOC44MzJoMjkuNTUyYzE2LjY0LDAsMzEuNjE2LDExLjEzNiwzMS42MTYsMzIuNDhcclxuXFx0XFx0YzAsMjAuMjI0LTE0Ljk3NiwzMS40ODgtMzEuNjE2LDMxLjQ4OGgtMjEuMzZ2MTYuODk2YzAsNS42MzItMy41ODQsOC44MTYtOC4xOTIsOC44MTZjLTQuMjI0LDAtOC42ODgtMy4xODQtOC42ODgtOC44MTZWMzAzLjE1MnpcclxuXFx0XFx0IE0xMTguNjI0LDMxMC40MzJ2MzEuODcyaDIxLjM2YzguNTc2LDAsMTUuMzYtNy41NjgsMTUuMzYtMTUuNTA0YzAtOC45NDQtNi43ODQtMTYuMzY4LTE1LjM2LTE2LjM2OEgxMTguNjI0elwiLz5cclxuXFx0PHBhdGggc3R5bGU9XCJmaWxsOiNGRkZGRkY7XCIgZD1cIk0xOTYuNjU2LDM4NGMtNC4yMjQsMC04LjgzMi0yLjMwNC04LjgzMi03Ljkydi03Mi42NzJjMC00LjU5Miw0LjYwOC03LjkzNiw4LjgzMi03LjkzNmgyOS4yOTZcclxuXFx0XFx0YzU4LjQ2NCwwLDU3LjE4NCw4OC41MjgsMS4xNTIsODguNTI4SDE5Ni42NTZ6IE0yMDQuNzIsMzExLjA4OFYzNjguNGgyMS4yMzJjMzQuNTQ0LDAsMzYuMDgtNTcuMzEyLDAtNTcuMzEySDIwNC43MnpcIi8+XHJcblxcdDxwYXRoIHN0eWxlPVwiZmlsbDojRkZGRkZGO1wiIGQ9XCJNMzAzLjg3MiwzMTIuMTEydjIwLjMzNmgzMi42MjRjNC42MDgsMCw5LjIxNiw0LjYwOCw5LjIxNiw5LjA3MmMwLDQuMjI0LTQuNjA4LDcuNjgtOS4yMTYsNy42OFxyXG5cXHRcXHRoLTMyLjYyNHYyNi44NjRjMCw0LjQ4LTMuMTg0LDcuOTItNy42NjQsNy45MmMtNS42MzIsMC05LjA3Mi0zLjQ0LTkuMDcyLTcuOTJ2LTcyLjY3MmMwLTQuNTkyLDMuNDU2LTcuOTM2LDkuMDcyLTcuOTM2aDQ0LjkxMlxyXG5cXHRcXHRjNS42MzIsMCw4Ljk2LDMuMzQ0LDguOTYsNy45MzZjMCw0LjA5Ni0zLjMyOCw4LjcwNC04Ljk2LDguNzA0aC0zNy4yNDhWMzEyLjExMnpcIi8+XHJcbjwvZz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNDQUQxRDg7XCIgZD1cIk00MDAsNDMySDk2djE2aDMwNGM4LjgsMCwxNi03LjIsMTYtMTZ2LTE2QzQxNiw0MjQuOCw0MDguOCw0MzIsNDAwLDQzMnpcIi8+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcbmV4cG9ydCBjb25zdCBTVkdfUERGXyA9IHRpdGxlID0+IGA8c3ZnIGlkPVwiTGF5ZXJfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDA2IDUxMmgtMzQ1Yy0yNC44NTMgMC00NS0yMC4xNDctNDUtNDV2LTQyMmgzMGMwIDguMjc2IDYuNzI0IDE1IDE1IDE1aDMxNWMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzB2OTBoLTMwMHYxODBoMjcwYzE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNzY2ZTZlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0zNzYgNjBoLTE2NC44MzV2MTIwaDE5NC44MzV2LTkwYzAtMTYuNTY5LTEzLjQzMS0zMC0zMC0zMHpcIiBmaWxsPVwiIzViNTU1NVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMjExLjE2NSAzNjBoMTk0LjgzNXYxNTJoLTE5NC44MzV6XCIgZmlsbD1cIiM1YjU1NTVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTQ5NiAzOTBoLTQyMHYtMjQwaDQyMHpcIiBmaWxsPVwiI2ZmOTEwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMjExLjE2NSAxNTBoMjg0LjgzNXYyNDBoLTI4NC44MzV6XCIgZmlsbD1cIiNmZjY0MWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTY2IDMzMGgtMzB2LTEyMGg0NWMyNC44MTQgMCA0NSAyMC4xODYgNDUgNDVzLTIwLjE4NiA0NS00NSA0NWgtMTV6bTAtNjBoMTVjOC4yNzYgMCAxNS02LjcyNCAxNS0xNXMtNi43MjQtMTUtMTUtMTVoLTE1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmU2YjNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwiI2ZmY2E4MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMjI2IDI1NWMwLTEzLjE3MS01Ljc4OC0yNC45MjItMTQuODM1LTMzLjE1OXY2Ni4zMTdjOS4wNDctOC4yMzYgMTQuODM1LTE5Ljk4NyAxNC44MzUtMzMuMTU4elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTI4NiAzMzBoLTMwdi0xMjBoMzBjMzMuMDkxIDAgNjAgMjYuOTA5IDYwIDYwcy0yNi45MDkgNjAtNjAgNjB6bTAtOTB2NjBjMTYuNTM4IDAgMzAtMTMuNDYyIDMwLTMwcy0xMy40NjItMzAtMzAtMzB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNDM2IDI0MHYtMzBoLTYwdjEyMGgzMHYtMzBoMzB2LTMwaC0zMHYtMzB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm00MDYgOTBoLTM0NWMtMjQuODE0IDAtNDUtMjAuMTg2LTQ1LTQ1czIwLjE4Ni00NSA0NS00NWgzNDV6XCIgZmlsbD1cIiNkOWYyZmZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTIxMS4xNjUgMGgxOTQuODM1djkwaC0xOTQuODM1elwiIGZpbGw9XCIjY2RmXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xyXG5leHBvcnQgY29uc3QgU1ZHX1dPUkQgPSB0aXRsZSA9PiBgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj48dGl0bGU+JHt0aXRsZX08L3RpdGxlPjxwYXRoIGZpbGw9XCIjMmI1NzlhXCIgZD1cIk0zMS45OTkgNC45Nzd2MjIuMDYzYzAgMC4xODgtMC4wNjcgMC4zNC0wLjE5OSAwLjQ2MS0wLjEzNSAwLjEyNS0wLjI5NSAwLjE4NC0wLjQ4IDAuMTg0aC0xMS40MTJ2LTMuMDYwaDkuMzA5di0xLjM5M2gtOS4zMTd2LTEuNzA1aDkuMzA5di0xLjM5MmgtOS4zMDN2LTEuNzJoOS4zMDd2LTEuMzc2aC05LjMwN3YtMS43MjRoOS4zMDd2LTEuMzkyaC05LjMwN3YtMS43MDVoOS4zMDd2LTEuMzkxaC05LjMwN3YtMS43NGg5LjMwN3YtMS4zMjVoLTkuMzA3di0zLjQ1N2gxMS40MTZjMC4xOTkgMCAwLjM2IDAuMDY0IDAuNDc3IDAuMTk5IDAuMTQgMC4xMzIgMC4yIDAuMjkzIDAuMTk5IDAuNDc1ek0xOC4yIDAuODU1djMwLjI5NmwtMTguMi0zLjE0OXYtMjMuOTEybDE4LjItMy4yNHpNMTUuNDUzIDkuNzk5bC0yLjI3OSAwLjE0LTEuNDYxIDkuMDQ3aC0wLjAzM2MtMC4wNzItMC40MjgtMC4zNC0xLjkyNy0wLjgyLTQuNDg5bC0wLjg1Mi00LjM1MS0yLjEzOSAwLjEwNy0wLjg1NiA0LjI0NGMtMC41IDIuNDcyLTAuNzc5IDMuOTExLTAuODUyIDQuMzE1aC0wLjAyMGwtMS4zLTguMzMzLTEuOTYgMC4xMDQgMi4xIDEwLjUxMSAyLjE3OSAwLjE0IDAuODItNC4wOTFjMC40OC0yLjQgMC43Ni0zLjc5NSAwLjgyLTQuMTc2aDAuMDYwYzAuMDgxIDAuNDA3IDAuMzQxIDEuODMyIDAuODIgNC4yOGwwLjgyIDQuMjExIDIuMzYgMC4xNCAyLjY0LTExLjh6XCI+PC9wYXRoPjwvc3ZnPmA7XHJcblxyXG5leHBvcnQgY29uc3QgU1ZHX1NBVkU9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMjR2MjRIMFYwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTcgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2wtNC00em0yIDE2SDVWNWgxMS4xN0wxOSA3LjgzVjE5em0tNy03Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzIDMtMS4zNCAzLTMtMS4zNC0zLTMtM3pNNiA2aDl2NEg2elwiLz48L3N2Zz5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNWR19GT0xERVJfQUREPWA8c3ZnIGlkPVwiRmxhdFwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCIzMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxyZWN0IGZpbGw9XCIjZjdjYzM4XCIgaGVpZ2h0PVwiMjg4XCIgcng9XCIzMlwiIHdpZHRoPVwiMzg0XCIgeD1cIjI0XCIgeT1cIjg4XCIvPlxyXG4gICAgPHBhdGggZD1cIm0yNCAzOTJhMzIgMzIgMCAwIDAgMzIgMzJoMzIwYTMyIDMyIDAgMCAwIDMyLTMydi0yMjRhMzIgMzIgMCAwIDAgLTMyLTMyaC0xNzZ2LTY0YTMyIDMyIDAgMCAwIC0zMi0zMmgtMTEyYTMyIDMyIDAgMCAwIC0zMiAzMnpcIlxyXG4gICAgICAgICAgZmlsbD1cIiNmYmUzNmFcIi8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMzg0XCIgY3k9XCIzNjhcIiBmaWxsPVwiIzI4YTc0NVwiIHI9XCIxMDRcIi8+XHJcbiAgICA8ZyBmaWxsPVwiI2U5ZWVmMlwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJtMzg0IDQzMmE4IDggMCAwIDEgLTgtOHYtMTEyYTggOCAwIDAgMSAxNiAwdjExMmE4IDggMCAwIDEgLTggOHpcIi8+XHJcbiAgICAgICAgPHBhdGggZD1cIm00NDAgMzc2aC0xMTJhOCA4IDAgMCAxIDAtMTZoMTEyYTggOCAwIDAgMSAwIDE2elwiLz5cclxuICAgIDwvZz5cclxuPC9zdmc+YDtcclxuXHJcbmV4cG9ydCBjb25zdCBTVkdfV0FSTklORz1gXHJcbjxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuXFx0IHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojM0I0MTQ1O1wiIGQ9XCJNMzIyLjkzOSw2Mi42NDJsMTc4LjczNywzMDkuNTgzQzUwOC4yMzEsMzgzLjU3OCw1MTIsMzk2Ljc0LDUxMiw0MTAuNzkxXHJcblxcdGMwLDQyLjY3LTM0LjU5Miw3Ny4yNjQtNzcuMjY0LDc3LjI2NEgyNTZMMTk0LjE4OSwyNTZMMjU2LDIzLjk0NkMyODQuNjIsMjMuOTQ2LDMwOS41ODcsMzkuNTE5LDMyMi45MzksNjIuNjQyelwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiM1MjVBNjE7XCIgZD1cIk0xODkuMDYxLDYyLjY0MkwxMC4zMjMsMzcyLjIyNUMzLjc2OSwzODMuNTc4LDAsMzk2Ljc0LDAsNDEwLjc5MVxyXG5cXHRjMCw0Mi42NywzNC41OTIsNzcuMjY0LDc3LjI2NCw3Ny4yNjRIMjU2VjIzLjk0NkMyMjcuMzgsMjMuOTQ2LDIwMi40MTMsMzkuNTE5LDE4OS4wNjEsNjIuNjQyelwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNGRkI3NTE7XCIgZD1cIk00NzQuOTEzLDM4Ny42NzhMMjk2LjE3Nyw3OC4wOThjLTguMDU2LTEzLjk1OS0yMi44NDktMjIuNzY3LTM4Ljg0OC0yMy4yMmwxNTIuODY5LDQwMi4yNzVoMjQuNTM5XHJcblxcdGMyNS41NTksMCw0Ni4zNTgtMjAuNzk4LDQ2LjM1OC00Ni4zNThDNDgxLjA5NSw0MDIuNjc3LDQ3OC45NTIsMzk0LjY4Myw0NzQuOTEzLDM4Ny42Nzh6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0ZGRDc2NDtcIiBkPVwiTTQ0NC44NTMsMzg3LjY3OGMzLjQ5Miw3LjAwNSw1LjMzNiwxNC45OTksNS4zMzYsMjMuMTE3YzAsMjUuNTU5LTE3LjkzNSw0Ni4zNTgtMzkuOTkyLDQ2LjM1OFxyXG5cXHRINzcuMjY0Yy0yNS41NTksMC00Ni4zNTgtMjAuNzk5LTQ2LjM1OC00Ni4zNThjMC04LjExOCwyLjE0My0xNi4xMTIsNi4xODEtMjMuMTE3bDE3OC43MzYtMzA5LjU4XHJcblxcdGM4LjI4My0xNC4zNCwyMy42NzQtMjMuMjUxLDQwLjE3Ny0yMy4yNTFjMC40NDMsMCwwLjg4NiwwLjAxLDEuMzI5LDAuMDMxYzEzLjczMiwwLjUzNiwyNi40MTQsOS4zMjMsMzMuMzI2LDIzLjIyTDQ0NC44NTMsMzg3LjY3OHpcclxuXFx0XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzNCNDE0NTtcIiBkPVwiTTI1NiwzNTQuMTMxdjUxLjUwOWMxNC4yMjcsMCwyNS43NTUtMTEuNTI4LDI1Ljc1NS0yNS43NTVcclxuXFx0QzI4MS43NTUsMzY1LjY1OSwyNzAuMjI3LDM1NC4xMzEsMjU2LDM1NC4xMzF6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzUyNUE2MTtcIiBkPVwiTTI1NiwzNTQuMTMxYzIuODQzLDAsNS4xNTEsMTEuNTI4LDUuMTUxLDI1Ljc1NWMwLDE0LjIyNy0yLjMwOCwyNS43NTUtNS4xNTEsMjUuNzU1XHJcblxcdGMtMTQuMjI3LDAtMjUuNzU1LTExLjUyOC0yNS43NTUtMjUuNzU1QzIzMC4yNDUsMzY1LjY1OSwyNDEuNzczLDM1NC4xMzEsMjU2LDM1NC4xMzF6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzNCNDE0NTtcIiBkPVwiTTI1NiwxMzIuNjQ2VjMyMy4yM2MxNC4yMjcsMCwyNS43NTUtMTEuNTM4LDI1Ljc1NS0yNS43NTVWMTU4LjQwMVxyXG5cXHRDMjgxLjc1NSwxNDQuMTc0LDI3MC4yMjcsMTMyLjY0NiwyNTYsMTMyLjY0NnpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojNTI1QTYxO1wiIGQ9XCJNMjU2LDEzMi42NDZjMi44NDMsMCw1LjE1MSwxMS41MjgsNS4xNTEsMjUuNzU1djEzOS4wNzRjMCwxNC4yMTYtMi4zMDgsMjUuNzU1LTUuMTUxLDI1Ljc1NVxyXG5cXHRjLTE0LjIyNywwLTI1Ljc1NS0xMS41MzgtMjUuNzU1LTI1Ljc1NVYxNTguNDAxQzIzMC4yNDUsMTQ0LjE3NCwyNDEuNzczLDEzMi42NDYsMjU2LDEzMi42NDZ6XCIvPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48L3N2Zz5cclxuYDsiLCIvKipcclxuICogQGF1dGhvciBLb3JvcGggPHlqa0BvdXRsb29rLmZyPlxyXG4gKlxyXG4gKiBAd2Vic2l0ZSBodHRwOi8va29yb3BoLnNpdGVcclxuICogQGxpbmsgIGh0dHBzOi8vZ2l0aHViLmNvbS9Lb3JvcGhcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDIwLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEZMQUdfQ19SLCBGTEFHX0VOLCBGTEFHX0ZSLCBGTEFHX0dFUiwgRkxBR19IX1IsIEZMQUdfTSwgRkxBR19QX1IsIEZMQUdfUF9ULCBTRUFSQ0hfSUNPTiB9IGZyb20gXCIuL2ZsYWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtIU2VsZWN0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHRhcmdldFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gbWF0Y2hNZWRpYShcInNjcmVlbiBhbmQgKG1heC13aWR0aDo1NjhweClcIik7XHJcbiAgICAgICAgdGhpcy5iaW5kQWN0aW9uKHRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGVsR2xvYmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICoge3N0cmluZ3xFbGVtZW50fSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgYmluZEFjdGlvbih0YXJnZXQpIHtcclxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudClcclxuICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHRoaXMuY3VzdG9tQnVpbGRlcih0YXJnZXQpKTtcclxuICAgICAgICBlbHNlIHRoaXMuYmluZFdpdGhDbGFzc05hbWUodGFyZ2V0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFxyXG4gICAgICovXHJcbiAgICBiaW5kV2l0aENsYXNzTmFtZSh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhcmdldCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pdGVtKGkpLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHRoaXMuY3VzdG9tQnVpbGRlcih0aGlzLmVsZW1lbnQuaXRlbShpKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xvc2UgbW9kZWwgd2hlbiBjbGljayBkb2N1bWVudCBlbGVtZW50XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBjbG9zZU1vZGVsR2xvYmFsKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3Qga2hCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgna2gtc2VsZWN0LWJvZHknKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBraEJvZHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChraEJvZHkuaXRlbShpKS5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGtoQm9keS5pdGVtKGkpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGFsSXNDbG9zZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MU2VsZWN0RWxlbWVudH0gc2VsZWN0XHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUJ1aWxkZXIoc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBraExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGtoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcl9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGtoRGF0YSA9IHRoaXMuc2VsZWN0RGF0YShzZWxlY3QpLFxyXG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XHJcblxyXG5cclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJraC1zZWxlY3RcIjtcclxuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJraC1zZWxlY3QtaGVhZGVyXCI7XHJcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSBcImtoLXNlbGVjdC1ib2R5XCI7XHJcbiAgICAgICAgc2VsZWN0ZWRWaWV3LmNsYXNzTmFtZSA9IFwic2VsZWN0LXZpZXdcIjtcclxuICAgICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzZWxlY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJraC1zZWxlY3QtY29udGVudFwiO1xyXG4gICAgICAgIGNvbnRhaW5lcl9pdGVtLmlkID0gXCJpdGVtX2NvbnRhaW5lclwiO1xyXG5cclxuICAgICAgICBoZWFkZXIuYXBwZW5kKGtoSWNvbiwga2hMYWJlbCk7XHJcbiAgICAgICAga2hMYWJlbC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlSG9sZGVyKHNlbGVjdCwga2hMYWJlbCkpO1xyXG4gICAgICAgIGlmICghc2VsZWN0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICBoZWFkZXIub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5xdWVyeS5tYXRjaGVzKSB0aGlzLm9wZW5TZWxlY3QoZXZlbnQsIGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGtoTGFiZWwuaW5uZXJUZXh0ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGFsSXNPcGVuKHNlbGVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5Lm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGtoRGF0YSkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncm91cCBpbiBraERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXAgIT09IFwiZGVmYXVsdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfaXRlbS5hcHBlbmQodGhpcy5fY3JlYXRlR3JvdXBJdGVtKGdyb3VwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAga2hEYXRhW2dyb3VwXS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlVmljdHVhbFNlbGVjdEl0ZW0odmFsdWUsIHNlbGVjdCwgX3RoaXMsIHNlbGVjdGVkVmlldywgYm9keSwga2hMYWJlbCwga2hJY29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwID09PSBcImRlZmF1bHRcIikgaXRlbS5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfaXRlbS5hcHBlbmQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBraERhdGEuZGVmYXVsdC5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jcmVhdGVWaWN0dWFsU2VsZWN0SXRlbSh2YWx1ZSwgc2VsZWN0LCBfdGhpcywgc2VsZWN0ZWRWaWV3LCBib2R5LCBraExhYmVsLCBraEljb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcl9pdGVtLmFwcGVuZChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGNvbnRhaW5lcl9pdGVtKTtcclxuICAgICAgICAgICAgX3RoaXMuc2VhcmNoRmllbGRJbnB1dChzZWxlY3QsIGJvZHkpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZChoZWFkZXIsIGJvZHkpXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3QuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChjb250ZW50LCBzZWxlY3RlZFZpZXcpO1xyXG4gICAgICAgICAgICBlbHNlIGNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fSBzZWxlY3RcclxuICAgICAqIEBwYXJhbSBfdGhpc1xyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gc2VsZWN0ZWRWaWV3XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBib2R5XHJcbiAgICAgKiBAcGFyYW0ga2hMYWJlbFxyXG4gICAgICogQHBhcmFtIGtoSWNvblxyXG4gICAgICogQHJldHVybiB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZpY3R1YWxTZWxlY3RJdGVtKHZhbHVlLCBzZWxlY3QsIF90aGlzLCBzZWxlY3RlZFZpZXcsIGJvZHksIGtoTGFiZWwsIGtoSWNvbikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBzZWxlY3Rfdmlld19pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJraC1zZWxlY3QtaXRlbVwiO1xyXG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gXCJraC1zZWxlY3QtaXRlbS1pY29uXCI7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gXCJraC1zZWxlY3QtaXRlbS1sYWJlbFwiO1xyXG4gICAgICAgIHNlbGVjdF92aWV3X2l0ZW0uY2xhc3NOYW1lID0gXCJzZWxlY3Qtdmlldy1pdGVtXCI7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gdmFsdWUubGFiZWw7XHJcblxyXG4gICAgICAgIC8qIGlmIChzZWxlY3Qub3B0aW9ucy5pdGVtKHZhbHVlLmluZGV4KS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmxhZycpIHx8IHNlbGVjdC5vcHRpb25zLml0ZW0odmFsdWUuaW5kZXgpLmhhc0F0dHJpYnV0ZSgnZGF0YS1pY29uJykpIHtcclxuICAgICAgICAgICAgIGlmIChzZWxlY3Qub3B0aW9ucy5pdGVtKHZhbHVlLmluZGV4KS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmxhZycpKSB7XHJcbiAgICAgICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSBfdGhpcy5mbGFnKHNlbGVjdC5vcHRpb25zLml0ZW0odmFsdWUuaW5kZXgpLmRhdGFzZXQuZmxhZyk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpZiAoc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuaGFzQXR0cmlidXRlKCdkYXRhLWljb24nKSkge1xyXG4gICAgICAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gX3RoaXMuX2NyZWF0ZUljb25JdGVtKHNlbGVjdC5vcHRpb25zLml0ZW0odmFsdWUuaW5kZXgpLmRhdGFzZXQuaWNvbik7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpdGVtLmFwcGVuZChpY29uLCBsYWJlbCk7XHJcbiAgICAgICAgIH0gZWxzZSBpdGVtLmFwcGVuZChsYWJlbCk7XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgX3RoaXMuX2FkZEljb24oc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCksIGljb24pO1xyXG4gICAgICAgIGl0ZW0uYXBwZW5kKGljb24sIGxhYmVsKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0Lmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubXVsdGlTZWxlY3RJdGVtKGl0ZW0sIHNlbGVjdCwgdmFsdWUsIHNlbGVjdGVkVmlldywgc2VsZWN0X3ZpZXdfaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWUuY3RybEtleSkgYm9keS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNlbGVjdC5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLml0ZW1GaWxsKGJvZHksIHNlbGVjdCwgdmFsdWUsIGtoTGFiZWwsIGtoSWNvbiwgdGhpcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBib2R5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgX3RoaXMuc2VsZWN0TW9kYWxJc0Nsb3NlKHNlbGVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0Lmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0X3ZpZXdfaXRlbS5pbm5lclRleHQgPSB2YWx1ZS5sYWJlbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmlldy5hcHBlbmRDaGlsZChzZWxlY3Rfdmlld19pdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGtoTGFiZWwuaW5uZXJUZXh0ID0gdmFsdWUubGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2FkZEljb24oc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCksIGtoSWNvbik7XHJcblxyXG4gICAgICAgICAgICAvKiBpZiAoc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuaGFzQXR0cmlidXRlKCdkYXRhLWZsYWcnKSB8fCBzZWxlY3Qub3B0aW9ucy5pdGVtKHZhbHVlLmluZGV4KS5oYXNBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5vcHRpb25zLml0ZW0odmFsdWUuaW5kZXgpLmhhc0F0dHJpYnV0ZSgnZGF0YS1mbGFnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAga2hJY29uLmlubmVySFRNTCA9IF90aGlzLmZsYWcoc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuZGF0YXNldC5mbGFnKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdC5vcHRpb25zLml0ZW0odmFsdWUuaW5kZXgpLmhhc0F0dHJpYnV0ZSgnZGF0YS1pY29uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAga2hJY29uLmlubmVySFRNTCA9IF90aGlzLl9jcmVhdGVJY29uSXRlbShzZWxlY3Qub3B0aW9ucy5pdGVtKHZhbHVlLmluZGV4KS5kYXRhc2V0Lmljb24pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gYm9keVxyXG4gICAgICogQHBhcmFtIHtIVE1MU2VsZWN0RWxlbWVudH0gc2VsZWN0XHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGtoTGFiZWxcclxuICAgICAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGtoSWNvblxyXG4gICAgICogQHBhcmFtIF90aGlzXHJcbiAgICAgKi9cclxuICAgIGl0ZW1GaWxsKGJvZHksIHNlbGVjdCwgdmFsdWUsIGtoTGFiZWwsIGtoSWNvbiwgX3RoaXMpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG9sZFNlbGVjdGVkID0gYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gdmFsdWUuaW5kZXg7XHJcbiAgICAgICAgc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwia2hjaGFuZ2VcIikpXHJcbiAgICAgICAgaWYgKG9sZFNlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTZWxlY3RlZC5pdGVtKGkpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBraExhYmVsLmlubmVyVGV4dCA9IHZhbHVlLmxhYmVsO1xyXG4gICAgICAgIHRoaXMuX2FkZEljb24oc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCksIGtoSWNvbik7XHJcblxyXG4gICAgICAgIC8qaWYgKHNlbGVjdC5vcHRpb25zLml0ZW0odmFsdWUuaW5kZXgpLmhhc0F0dHJpYnV0ZSgnZGF0YS1mbGFnJykgfHwgc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuaGFzQXR0cmlidXRlKCdkYXRhLWljb24nKSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuaGFzQXR0cmlidXRlKCdkYXRhLWZsYWcnKSkge1xyXG4gICAgICAgICAgICAgICAga2hJY29uLmlubmVySFRNTCA9IHRoaXMuZmxhZyhzZWxlY3Qub3B0aW9ucy5pdGVtKHZhbHVlLmluZGV4KS5kYXRhc2V0LmZsYWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Qub3B0aW9ucy5pdGVtKHZhbHVlLmluZGV4KS5oYXNBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBraEljb24uaW5uZXJIVE1MID0gdGhpcy5fY3JlYXRlSWNvbkl0ZW0oc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuZGF0YXNldC5pY29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0qL1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MT3B0aW9uRWxlbWVudH0gb3B0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBraEljb25cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9hZGRJY29uKG9wdGlvbiwga2hJY29uKSB7XHJcbiAgICAgICAgY29uc3QgX0ZMQUcgPSBcImRhdGEtZmxhZ1wiLCBfSUNPTiA9IFwiZGF0YS1pY29uXCJcclxuICAgICAgICBpZiAob3B0aW9uLmhhc0F0dHJpYnV0ZShfRkxBRykgfHwgb3B0aW9uLmhhc0F0dHJpYnV0ZShfSUNPTikpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5oYXNBdHRyaWJ1dGUoX0ZMQUcpKSB7XHJcbiAgICAgICAgICAgICAgICBraEljb24uaW5uZXJIVE1MID0gdGhpcy5mbGFnKG9wdGlvbi5kYXRhc2V0LmZsYWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uaGFzQXR0cmlidXRlKF9JQ09OKSkge1xyXG4gICAgICAgICAgICAgICAga2hJY29uLmlubmVySFRNTCA9IHRoaXMuX2NyZWF0ZUljb25JdGVtKG9wdGlvbi5kYXRhc2V0Lmljb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGljb24gaXRlbSBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvblxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZUljb25JdGVtKGljb24pIHtcclxuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtpY29ufVwiPjwvc3Bhbj5gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cFxyXG4gICAgICogQHJldHVybiB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlR3JvdXBJdGVtKGdyb3VwKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ3JvdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtZ3JvdXBcIik7XHJcbiAgICAgICAgZ3JvdXBFbGVtZW50LmlubmVyVGV4dCA9IGdyb3VwO1xyXG4gICAgICAgIHJldHVybiBncm91cEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gYm9keVxyXG4gICAgICovXHJcbiAgICBvcGVuU2VsZWN0KGV2ZW50LCBib2R5KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qga2hCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgna2gtc2VsZWN0LWJvZHknKTtcclxuICAgICAgICBpZiAoYm9keS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIilcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWxzZSBib2R5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgLy8gY2xvc2Ugb3RoZXIgbW9kYWxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtoQm9keS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoa2hCb2R5Lml0ZW0oaSkgIT09IGJvZHkgJiYga2hCb2R5Lml0ZW0oaSkuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcclxuICAgICAgICAgICAgICAgIGtoQm9keS5pdGVtKGkpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IC0gKGV2ZW50LnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSA8IGJvZHkub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUudG9wID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uLXJldmVyc2VcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fSBzZWxlY3RcclxuICAgICAqIEBwYXJhbSBsYWJlbFxyXG4gICAgICogQHJldHVybnMge0hUTUxTcGFuRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgcGxhY2VIb2xkZXIoc2VsZWN0LCBsYWJlbCkge1xyXG4gICAgICAgIGxldCBwbGFjZUhvbGRlciA9IFwiQ2hvaXNpciB1bmUgb3B0aW9uXCIsXHJcbiAgICAgICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3QuaGFzQXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiKSlcclxuICAgICAgICAgICAgcGxhY2VIb2xkZXIgPSBzZWxlY3QuZGF0YXNldC5wbGFjZWhvbGRlcjtcclxuXHJcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBwbGFjZUhvbGRlcjtcclxuICAgICAgICByZXR1cm4gc3BhbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGl0ZW1cclxuICAgICAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHNlbGVjdGVkVmlld1xyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBzZWxlY3Rfdmlld19pdGVtXHJcbiAgICAgKi9cclxuICAgIG11bHRpU2VsZWN0SXRlbShpdGVtLCBzZWxlY3QsIHZhbHVlLCBzZWxlY3RlZFZpZXcsIHNlbGVjdF92aWV3X2l0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFZpZXcucmVtb3ZlQ2hpbGQoc2VsZWN0X3ZpZXdfaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0Lm9wdGlvbnMuaXRlbSh2YWx1ZS5pbmRleCkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNlbGVjdF92aWV3X2l0ZW0uaW5uZXJUZXh0ID0gdmFsdWUubGFiZWw7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmlldy5hcHBlbmRDaGlsZChzZWxlY3Rfdmlld19pdGVtKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGlucHV0IHNlYXJjaFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdFxyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gYm9keVxyXG4gICAgICovXHJcbiAgICBzZWFyY2hGaWVsZElucHV0KHNlbGVjdCwgYm9keSkge1xyXG4gICAgICAgIGlmIChzZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNlYXJjaCcpICYmIHNlbGVjdC5kYXRhc2V0LnNlYXJjaCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoX2ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInNlYXJjaFwiO1xyXG4gICAgICAgICAgICBpbnB1dC5pZCA9IFwic2VhcmNoX2lucHV0XCI7XHJcbiAgICAgICAgICAgIHNlYXJjaF9jb250YWluZXIuaWQgPSBcInNlYXJjaF9jb250YWluZXJcIjtcclxuICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlJlY2hlcmNoZVwiO1xyXG4gICAgICAgICAgICBpbnB1dC5hdXRvY29tcGxldGUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInNlYXJjaFwiO1xyXG4gICAgICAgICAgICBzZWFyY2hfaWNvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaWNvbicpO1xyXG5cclxuICAgICAgICAgICAgc2VhcmNoX2ljb24uaW5uZXJIVE1MID0gU0VBUkNIX0lDT047XHJcblxyXG4gICAgICAgICAgICBpbnB1dC5vbmNsaWNrID0gZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlucHV0Lm9uaW5wdXQgPSBldmVudCA9PiB0aGlzLnNlbGVjdEZpbHRlcihldmVudCwgYm9keSk7XHJcbiAgICAgICAgICAgIC8qIGlucHV0Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgc2VhcmNoX2NvbnRhaW5lci5hcHBlbmQoaW5wdXQsIHNlYXJjaF9pY29uKTtcclxuICAgICAgICAgICAgYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHNlYXJjaF9jb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBib2R5XHJcbiAgICAgKi9cclxuICAgIHNlbGVjdEZpbHRlcihldmVudCwgYm9keSkge1xyXG4gICAgICAgIGNvbnN0IGtoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBraEl0ZW0gPSBib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2toLXNlbGVjdC1pdGVtJyksXHJcbiAgICAgICAgICAgIGdyb3VwID0gYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QtZ3JvdXAnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBraEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGtoSXRlbS5pdGVtKGkpLmxhc3RDaGlsZC50ZXh0Q29udGVudC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKGtoVmFsdWUsIDApKSB7XHJcbiAgICAgICAgICAgICAgICBraEl0ZW0uaXRlbShpKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uga2hJdGVtLml0ZW0oaSkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkrKykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBfbmV4dCA9IGdyb3VwW2ldLm5leHRFbGVtZW50U2libGluZywgaXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChfbmV4dCAhPT0gbnVsbCAmJiBfbmV4dC5jbGFzc0xpc3QuY29udGFpbnMoJ2toLXNlbGVjdC1pdGVtJykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX25leHQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX25leHQgPSBfbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXMpIGdyb3VwW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZWxzZSBncm91cFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdFxyXG4gICAgICogQHJldHVybnMge3t9fVxyXG4gICAgICovXHJcbiAgICBzZWxlY3REYXRhKHNlbGVjdCkge1xyXG4gICAgICAgIC8vY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0gc2VsZWN0Lm9wdGlvbnMsIG9wdGdyb3VwID0gc2VsZWN0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRncm91cCcpO1xyXG4gICAgICAgIGxldCBzZWxlY3REYXRhID0ge307XHJcbiAgICAgICAgc2VsZWN0RGF0YVsnZGVmYXVsdCddID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0Z3JvdXAubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghKG9wdGdyb3VwW2ldLmxhYmVsIGluIE9iamVjdC5rZXlzKHNlbGVjdERhdGEpKSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0RGF0YVtvcHRncm91cFtpXS5sYWJlbF0gPSBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaXRlbShpKS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTE9wdEdyb3VwRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0RGF0YVtvcHRpb25zLml0ZW0oaSkucGFyZW50Tm9kZS5sYWJlbF0ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbnMuaXRlbShpKS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zLml0ZW0oaSkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG9wdGlvbnMuaXRlbShpKS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogb3B0aW9ucy5pdGVtKGkpLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pdGVtKGkpLnZhbHVlLnRyaW0oKSAhPT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3REYXRhW1wiZGVmYXVsdFwiXS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbnMuaXRlbShpKS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9ucy5pdGVtKGkpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogb3B0aW9ucy5pdGVtKGkpLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogb3B0aW9ucy5pdGVtKGkpLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbnMuaXRlbShpKS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zLml0ZW0oaSkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgaW5kZXg6IG9wdGlvbnMuaXRlbShpKS5pbmRleCxcclxuICAgICAgICAgICAgICAgICBzZWxlY3RlZDogb3B0aW9ucy5pdGVtKGkpLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZWxlY3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGZsYWcgY291bnRyeVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZmxhZyh2YWx1ZSkge1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImZyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRkxBR19GUjtcclxuICAgICAgICAgICAgY2FzZSBcImVuXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRkxBR19FTjtcclxuICAgICAgICAgICAgY2FzZSBcImdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRkxBR19HRVI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwX3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBGTEFHX1BfVDtcclxuICAgICAgICAgICAgY2FzZSBcImNfclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZMQUdfQ19SO1xyXG4gICAgICAgICAgICBjYXNlIFwibVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZMQUdfTTtcclxuICAgICAgICAgICAgY2FzZSBcImhfclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZMQUdfSF9SO1xyXG4gICAgICAgICAgICBjYXNlIFwicF9yXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRkxBR19QX1I7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgc2VsZWN0TW9kYWxJc09wZW4odGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fG51bGx9IHRhcmdldFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RNb2RhbElzQ2xvc2UodGFyZ2V0KSB7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2toLXNlbGVjdC1pZCcpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRzLml0ZW0oaSkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzLml0ZW0oaSkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU0VBUkNIX0lDT04gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiBmaWxsPVwiIzAwMDAwMFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLz48L3N2Zz5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZMQUdfRU4gPSBgXHJcbjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cImlzby04ODU5LTFcIj8+XHJcbjxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbnZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGNpcmNsZSBzdHlsZT1cImZpbGw6I0YwRjBGMDtcIiBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjI1NlwiLz48Zz48cGF0aCBzdHlsZT1cImZpbGw6IzAwNTJCNDtcIiBkPVwiTTUyLjkyLDEwMC4xNDJjLTIwLjEwOSwyNi4xNjMtMzUuMjcyLDU2LjMxOC00NC4xMDEsODkuMDc3aDEzMy4xNzhMNTIuOTIsMTAwLjE0MnpcIi8+PHBhdGggc3R5bGU9XCJmaWxsOiMwMDUyQjQ7XCIgZD1cIk01MDMuMTgxLDE4OS4yMTljLTguODI5LTMyLjc1OC0yMy45OTMtNjIuOTEzLTQ0LjEwMS04OS4wNzZsLTg5LjA3NSw4OS4wNzZINTAzLjE4MXpcIi8+PHBhdGggc3R5bGU9XCJmaWxsOiMwMDUyQjQ7XCIgZD1cIk04LjgxOSwzMjIuNzg0YzguODMsMzIuNzU4LDIzLjk5Myw2Mi45MTMsNDQuMTAxLDg5LjA3NWw4OS4wNzQtODkuMDc1TDguODE5LDMyMi43ODRMOC44MTksMzIyLjc4NFxyXG56XCIvPjxwYXRoIHN0eWxlPVwiZmlsbDojMDA1MkI0O1wiIGQ9XCJNNDExLjg1OCw1Mi45MjFjLTI2LjE2My0yMC4xMDktNTYuMzE3LTM1LjI3Mi04OS4wNzYtNDQuMTAydjEzMy4xNzdMNDExLjg1OCw1Mi45MjF6XCIvPjxwYXRoIHN0eWxlPVwiZmlsbDojMDA1MkI0O1wiIGQ9XCJNMTAwLjE0Miw0NTkuMDc5YzI2LjE2MywyMC4xMDksNTYuMzE4LDM1LjI3Miw4OS4wNzYsNDQuMTAyVjM3MC4wMDVMMTAwLjE0Miw0NTkuMDc5elwiLz48cGF0aCBzdHlsZT1cImZpbGw6IzAwNTJCNDtcIiBkPVwiTTE4OS4yMTcsOC44MTljLTMyLjc1OCw4LjgzLTYyLjkxMywyMy45OTMtODkuMDc1LDQ0LjEwMWw4OS4wNzUsODkuMDc1VjguODE5elwiLz48cGF0aCBzdHlsZT1cImZpbGw6IzAwNTJCNDtcIiBkPVwiTTMyMi43ODMsNTAzLjE4MWMzMi43NTgtOC44Myw2Mi45MTMtMjMuOTkzLDg5LjA3NS00NC4xMDFsLTg5LjA3NS04OS4wNzVWNTAzLjE4MXpcIi8+PHBhdGggc3R5bGU9XCJmaWxsOiMwMDUyQjQ7XCIgZD1cIk0zNzAuMDA1LDMyMi43ODRsODkuMDc1LDg5LjA3NmMyMC4xMDgtMjYuMTYyLDM1LjI3Mi01Ni4zMTgsNDQuMTAxLTg5LjA3NkgzNzAuMDA1elwiLz48L2c+PGc+PHBhdGggc3R5bGU9XCJmaWxsOiNEODAwMjc7XCIgZD1cIk01MDkuODMzLDIyMi42MDloLTIyMC40NGgtMC4wMDFWMi4xNjdDMjc4LjQ2MSwwLjc0NCwyNjcuMzE3LDAsMjU2LDBcclxuYy0xMS4zMTksMC0yMi40NjEsMC43NDQtMzMuMzkxLDIuMTY3djIyMC40NHYwLjAwMUgyLjE2N0MwLjc0NCwyMzMuNTM5LDAsMjQ0LjY4MywwLDI1NmMwLDExLjMxOSwwLjc0NCwyMi40NjEsMi4xNjcsMzMuMzkxXHJcbmgyMjAuNDRoMC4wMDF2MjIwLjQ0MkMyMzMuNTM5LDUxMS4yNTYsMjQ0LjY4MSw1MTIsMjU2LDUxMmMxMS4zMTcsMCwyMi40NjEtMC43NDMsMzMuMzkxLTIuMTY3di0yMjAuNDR2LTAuMDAxaDIyMC40NDJcclxuQzUxMS4yNTYsMjc4LjQ2MSw1MTIsMjY3LjMxOSw1MTIsMjU2QzUxMiwyNDQuNjgzLDUxMS4yNTYsMjMzLjUzOSw1MDkuODMzLDIyMi42MDl6XCIvPjxwYXRoIHN0eWxlPVwiZmlsbDojRDgwMDI3O1wiIGQ9XCJNMzIyLjc4MywzMjIuNzg0TDMyMi43ODMsMzIyLjc4NEw0MzcuMDE5LDQzNy4wMmM1LjI1NC01LjI1MiwxMC4yNjYtMTAuNzQzLDE1LjA0OC0xNi40MzVcclxubC05Ny44MDItOTcuODAyaC0zMS40ODJWMzIyLjc4NHpcIi8+PHBhdGggc3R5bGU9XCJmaWxsOiNEODAwMjc7XCIgZD1cIk0xODkuMjE3LDMyMi43ODRoLTAuMDAyTDc0Ljk4LDQzNy4wMTljNS4yNTIsNS4yNTQsMTAuNzQzLDEwLjI2NiwxNi40MzUsMTUuMDQ4bDk3LjgwMi05Ny44MDRcclxuVjMyMi43ODR6XCIvPjxwYXRoIHN0eWxlPVwiZmlsbDojRDgwMDI3O1wiIGQ9XCJNMTg5LjIxNywxODkuMjE5di0wLjAwMkw3NC45ODEsNzQuOThjLTUuMjU0LDUuMjUyLTEwLjI2NiwxMC43NDMtMTUuMDQ4LDE2LjQzNWw5Ny44MDMsOTcuODAzXHJcbkgxODkuMjE3elwiLz48cGF0aCBzdHlsZT1cImZpbGw6I0Q4MDAyNztcIiBkPVwiTTMyMi43ODMsMTg5LjIxOUwzMjIuNzgzLDE4OS4yMTlMNDM3LjAyLDc0Ljk4MWMtNS4yNTItNS4yNTQtMTAuNzQzLTEwLjI2Ni0xNi40MzUtMTUuMDQ3bC05Ny44MDIsOTcuODAzVjE4OS4yMTl6XCIvPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGTEFHX0ZSID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cImlzby04ODU5LTFcIj8+XHJcbjxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbnZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxjaXJjbGUgc3R5bGU9XCJmaWxsOiNGMEYwRjA7XCIgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIyNTZcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojRDgwMDI3O1wiIGQ9XCJNNTEyLDI1NmMwLTExMC4wNzEtNjkuNDcyLTIwMy45MDYtMTY2Ljk1Ny0yNDAuMDc3djQ4MC4xNTVDNDQyLjUyOCw0NTkuOTA2LDUxMiwzNjYuMDcxLDUxMiwyNTZ6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzAwNTJCNDtcIiBkPVwiTTAsMjU2YzAsMTEwLjA3MSw2OS40NzMsMjAzLjkwNiwxNjYuOTU3LDI0MC4wNzdWMTUuOTIzQzY5LjQ3Myw1Mi4wOTQsMCwxNDUuOTI5LDAsMjU2elwiLz5cclxuPGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGTEFHX0dFUiA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJpc28tODg1OS0xXCI/PlxyXG48c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG52aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0ZGREE0NDtcIiBkPVwiTTE1LjkyMywzNDUuMDQzQzUyLjA5NCw0NDIuNTI3LDE0NS45MjksNTEyLDI1Niw1MTJzMjAzLjkwNi02OS40NzMsMjQwLjA3Ny0xNjYuOTU3TDI1NiwzMjIuNzgzXHJcbkwxNS45MjMsMzQ1LjA0M3pcIi8+XHJcbjxwYXRoIGQ9XCJNMjU2LDBDMTQ1LjkyOSwwLDUyLjA5NCw2OS40NzIsMTUuOTIzLDE2Ni45NTdMMjU2LDE4OS4yMTdsMjQwLjA3Ny0yMi4yNjFDNDU5LjkwNiw2OS40NzIsMzY2LjA3MSwwLDI1NiwwelwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNEODAwMjc7XCIgZD1cIk0xNS45MjMsMTY2Ljk1N0M1LjYzMywxOTQuNjksMCwyMjQuNjg2LDAsMjU2czUuNjMzLDYxLjMxLDE1LjkyMyw4OS4wNDNoNDgwLjE1NVxyXG5DNTA2LjM2OCwzMTcuMzEsNTEyLDI4Ny4zMTQsNTEyLDI1NnMtNS42MzItNjEuMzEtMTUuOTIzLTg5LjA0M0gxNS45MjN6XCIvPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPlxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZMQUdfUF9UID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cImlzby04ODU5LTFcIj8+XHJcbjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT5cclxuPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG48Zz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6I0U1QkEwMztcIiBkPVwiTTQ4OC44LDE3MC4xNzhoLTI4Ljc5NmMtMTIuNzkyLDAtMjMuMiwxMC40MDgtMjMuMiwyMy4ydjIyLjM5NmwtOS41NjQsMjUuODY0bDE0LjY5NCw1LjQzM1xyXG5cdFx0bDguMTU4LTIyLjA2MmgzMC4yNzdjMTcuNDQxLDAsMzEuNjMtMTQuMTksMzEuNjMtMzEuNjNDNTEyLDE4MC41ODYsNTAxLjU5MiwxNzAuMTc4LDQ4OC44LDE3MC4xNzh6XCIvPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojRTVCQTAzO1wiIGQ9XCJNNzUuMTk2LDE5My4zNzhjMC0xMi43OTItMTAuNDA4LTIzLjItMjMuMi0yMy4ySDIzLjE5OUMxMC40MDcsMTcwLjE3OCwwLDE4MC41ODYsMCwxOTMuMzc4XHJcblx0XHRjMCwxNy40NDEsMTQuMTksMzEuNjMsMzEuNjMsMzEuNjNoMzAuMjc3bDguMTU4LDIyLjA2MmwxNC42OTQtNS40MzNsLTkuNTY0LTI1Ljg2NFYxOTMuMzc4elwiLz5cclxuPC9nPlxyXG48cG9seWdvbiBzdHlsZT1cImZpbGw6I0Y5Q0EwMDtcIiBwb2ludHM9XCIzNDAuNTU4LDUzLjU3MSAxNzEuNDQyLDUzLjU3MSAxNTUuNzc0LDEzMy4xMjkgMzU2LjIyNiwxMzMuMTI5IFwiLz5cclxuPGc+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiMyQjJBMzI7XCIgZD1cIk0yOS44OTMsMzY5LjA4djczLjc0N2MwLDguNjE4LDYuOTg2LDE1LjYwMywxNS42MDMsMTUuNjAzaDYwLjE3NlxyXG5cdFx0YzguNjE4LDAsMTUuNjAzLTYuOTg2LDE1LjYwMy0xNS42MDN2LTc5LjQxM1wiLz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6IzJCMkEzMjtcIiBkPVwiTTM5MC43MywzNjMuNDE0djc5LjQxM2MwLDguNjE4LDYuOTg2LDE1LjYwMywxNS42MDMsMTUuNjAzaDYwLjE3NlxyXG5cdFx0YzguNjE4LDAsMTUuNjAzLTYuOTg2LDE1LjYwMy0xNS42MDN2LTg0Ljg4OFwiLz5cclxuPC9nPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzBEMUIyNDtcIiBkPVwiTTM0MC41OSw0MTYuNjc2SDE3MS40MWMtMTIuMTE1LDAtMjEuOTM2LTkuODIyLTIxLjkzNi0yMS45MzZsMCwwbDE0MC41NC0xOC43OTRsNzIuNTEyLDE4Ljc5NGwwLDBcclxuXHRDMzYyLjUyNiw0MDYuODU1LDM1Mi43MDUsNDE2LjY3NiwzNDAuNTksNDE2LjY3NnpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojRjlDQTAwO1wiIGQ9XCJNNDY2LjYwNiwyNDQuMzU0SDQ1LjM5NGMtMTYuMDU5LDAtMjkuMDc4LDEzLjAxOS0yOS4wNzgsMjkuMDc4djg5Ljk4Mmg0NzkuMzY4di04OS45ODJcclxuXHRDNDk1LjY4NCwyNTcuMzczLDQ4Mi42NjUsMjQ0LjM1NCw0NjYuNjA2LDI0NC4zNTR6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0U1QkEwMztcIiBkPVwiTTkyLjA0NCwyNDQuMzU0aC00Ni42NWMtMTYuMDU5LDAtMjkuMDc4LDEzLjAxOS0yOS4wNzgsMjkuMDc4djg5Ljk4Mmg0Ni42NTF2LTg5Ljk4MlxyXG5cdEM2Mi45NjcsMjU3LjM3Myw3NS45ODUsMjQ0LjM1NCw5Mi4wNDQsMjQ0LjM1NHpcIi8+XHJcbjxyZWN0IHg9XCIxMzYuOTQ1XCIgeT1cIjI3MlwiIHN0eWxlPVwiZmlsbDojNjE2OTcwO1wiIHdpZHRoPVwiMjM4LjExOVwiIGhlaWdodD1cIjQ1LjQzXCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzgyOTJBMztcIiBkPVwiTTUxMS44OTMsMzU1Ljg4OHYyNi4wMTdjMCw3LjA5Mi01Ljc1NSwxMi44MzYtMTIuODM2LDEyLjgzNkgxMi45NlxyXG5cdGMtNy4wOTIsMC0xMi44MzYtNS43NDQtMTIuODM2LTEyLjgzNnYtMjYuMDE3YzAtNy4wOTIsNS43NDQtMTIuODM2LDEyLjgzNi0xMi44MzZoNDg2LjA5N1xyXG5cdEM1MDYuMTM5LDM0My4wNTIsNTExLjg5MywzNDguNzk3LDUxMS44OTMsMzU1Ljg4OHpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojOUFBN0I4O1wiIGQ9XCJNNTExLjg5MywzNTUuODg4djI2LjAxN2MwLDcuMDkyLTUuNzU1LDEyLjgzNi0xMi44MzYsMTIuODM2SDQ5Ljg2XHJcblx0Yy03LjA5MiwwLTEyLjgzNi01Ljc0NC0xMi44MzYtMTIuODM2di0yNi4wMTdjMC03LjA5Miw1Ljc0NC0xMi44MzYsMTIuODM2LTEyLjgzNmg0NDkuMTk4XHJcblx0QzUwNi4xMzksMzQzLjA1Miw1MTEuODkzLDM0OC43OTcsNTExLjg5MywzNTUuODg4elwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNDMEVBRjk7XCIgZD1cIk00MzQuNTkxLDI0NC4zNTNINzcuNDA4bDI5LjE0LTg3LjQ5MmM0LjcxLTE0LjE3MywxNy45NzUtMjMuNzI5LDMyLjkxLTIzLjcyOWgyMzMuMDg1XHJcblx0YzE0LjkzNSwwLDI4LjIsOS41NTcsMzIuOTEsMjMuNzI5TDQzNC41OTEsMjQ0LjM1M3pcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojQTBEOUYyO1wiIGQ9XCJNNDMzLjI3NSwyNDQuMzUzSDc4LjcyNGwyMS42NDEtNjIuNDI1YzQuOTA5LTE0LjE3MywxOC43MTYtMjMuNzI5LDM0LjI2OC0yMy43MjloMjQyLjczNVxyXG5cdGMxNS41NTIsMCwyOS4zNTksOS41NTcsMzQuMjY4LDIzLjcyOUw0MzMuMjc1LDI0NC4zNTN6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0Y5Q0EwMDtcIiBkPVwiTTQyOS42MywyNTQuMjYxbC0zMS42MDUtOTQuOTI5Yy0zLjY1OS0xMC45ODgtMTMuODk3LTE4LjM3LTI1LjQ3OS0xOC4zN0gxMzkuNDUzXHJcblx0Yy0xMS41ODEsMC0yMS44MTksNy4zODItMjUuNDc4LDE4LjM3TDgyLjM3LDI1NC4yNjFsLTE0Ljg2NC00Ljk1bDMxLjYwNi05NC45MjljNS43OTItMTcuMzk4LDIyLjAwNC0yOS4wODgsNDAuMzQxLTI5LjA4OGgyMzMuMDk0XHJcblx0YzE4LjMzNywwLDM0LjU1LDExLjY4OSw0MC4zNDIsMjkuMDg4bDMxLjYwNiw5NC45MjlMNDI5LjYzLDI1NC4yNjF6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0U1QkEwMztcIiBkPVwiTTM3NS4wNTksMzI1LjI2N0gxMzYuOTQxYy00LjMyNiwwLTcuODMzLTMuNTA3LTcuODMzLTcuODMzdi00NS40M2MwLTQuMzI2LDMuNTA3LTcuODMzLDcuODMzLTcuODMzXHJcblx0aDIzOC4xMThjNC4zMjYsMCw3LjgzMywzLjUwNyw3LjgzMyw3LjgzM3Y0NS40M0MzODIuODkyLDMyMS43NiwzNzkuMzg1LDMyNS4yNjcsMzc1LjA1OSwzMjUuMjY3eiBNMTQ0Ljc3NCwzMDkuNjAxaDIyMi40NTF2LTI5Ljc2NFxyXG5cdEgxNDQuNzc0VjMwOS42MDF6XCIvPlxyXG48Zz5cclxuXHQ8cmVjdCB4PVwiNDAzLjI1M1wiIHk9XCIyODIuOTk4XCIgc3R5bGU9XCJmaWxsOiNGRUZGRkY7XCIgd2lkdGg9XCI2NS43OTZcIiBoZWlnaHQ9XCIzNC40NjRcIi8+XHJcblx0PHJlY3QgeD1cIjQyLjk0N1wiIHk9XCIyODIuOTk4XCIgc3R5bGU9XCJmaWxsOiNGRUZGRkY7XCIgd2lkdGg9XCI2NS43OTZcIiBoZWlnaHQ9XCIzNC40NjRcIi8+XHJcbjwvZz5cclxuPGc+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiMyQjJBMzI7XCIgZD1cIk0yMTkuNDMyLDY5Ljc3YzIuMjk1LDAsMy4yNjgsMi41MDIsMy4yNjgsNC43OTdjMCwyLjY0Mi0xLjE4Miw0LjkzNy0zLjI2OCw0LjkzN2gtOS41OTV2MzcuNzU2XHJcblx0XHRjMCwyLjIyNS0yLjcxMSwzLjMzNy01LjQyNCwzLjMzN2MtMi43MTEsMC01LjQyNC0xLjExMi01LjQyNC0zLjMzN1Y3OS41MDRoLTkuNTk1Yy0yLjA4NiwwLTMuMjY4LTIuMjk1LTMuMjY4LTQuOTM3XHJcblx0XHRjMC0yLjI5NSwwLjk3My00Ljc5NywzLjI2OC00Ljc5N0gyMTkuNDMyelwiLz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6IzJCMkEzMjtcIiBkPVwiTTIyMi42MjgsMTE2LjE0OGMwLTAuMjA5LDAuMDctMC40ODcsMC4xMzktMC43NjVMMjM1LjcsNzIuOTY5YzAuNzY1LTIuNDM1LDMuODk0LTMuNjE2LDcuMDkzLTMuNjE2XHJcblx0XHRzNi4zMjcsMS4xODEsNy4wOTMsMy42MTZsMTMuMDAyLDQyLjQxNGMwLjA3LDAuMjc5LDAuMTM5LDAuNTU3LDAuMTM5LDAuNzY1YzAsMi41NzItMy45NjQsNC40NS02Ljk1Myw0LjQ1XHJcblx0XHRjLTEuNzM5LDAtMy4xMjktMC41NTctMy41NDctMi4wMTdsLTIuMzY1LTguNjkyaC0xNC42NzFsLTIuMzY1LDguNjkyYy0wLjQxNywxLjQ2LTEuODA4LDIuMDE3LTMuNTQ2LDIuMDE3XHJcblx0XHRDMjI2LjU5MiwxMjAuNTk4LDIyMi42MjgsMTE4LjcyLDIyMi42MjgsMTE2LjE0OHogTTI0Ny44NjgsMTAxLjU0N2wtNS4wNzYtMTguNjM1bC01LjA3NiwxOC42MzVcclxuXHRcdEMyMzcuNzE2LDEwMS41NDYsMjQ3Ljg2OCwxMDEuNTQ2LDI0Ny44NjgsMTAxLjU0N3pcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiMyQjJBMzI7XCIgZD1cIk0yODcuMjg3LDEwMi42NThsLTEwLjE1MiwxNy4yNDVjLTAuNDg3LDAuNzY1LTEuNDYsMS4xMTItMi41NzIsMS4xMTJcclxuXHRcdGMtMi45ODksMC03LjIzMS0yLjM2NS03LjIzMS01LjM1NGMwLTAuNjI3LDAuMjA5LTEuMjUyLDAuNjI2LTEuOTQ3bDEyLjAyOS0xOC41NjVsLTExLjU0Mi0xOC40OTVcclxuXHRcdGMtMC40ODctMC43NjUtMC42OTYtMS40Ni0wLjY5Ni0yLjE1NmMwLTIuOTIsMy45NjMtNS4xNDUsNy4wMjMtNS4xNDVjMS41MjksMCwyLjU3MiwwLjU1NiwzLjI2OCwxLjgwOGw5LjI0NywxNi4xMzFsOS4yNDctMTYuMTMxXHJcblx0XHRjMC42OTYtMS4yNTIsMS43MzktMS44MDgsMy4yNjgtMS44MDhjMy4wNTksMCw3LjAyMywyLjIyNSw3LjAyMyw1LjE0NWMwLDAuNjk2LTAuMjA5LDEuMzkxLTAuNjk2LDIuMTU2bC0xMS41NDIsMTguNDk1XHJcblx0XHRsMTIuMDI5LDE4LjU2NWMwLjQxNywwLjY5NiwwLjYyNiwxLjMyMSwwLjYyNiwxLjk0N2MwLDIuOTg5LTQuMjQxLDUuMzU0LTcuMjMyLDUuMzU0Yy0xLjExMiwwLTIuMTU1LTAuMzQ4LTIuNTcyLTEuMTEyXHJcblx0XHRMMjg3LjI4NywxMDIuNjU4elwiLz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6IzJCMkEzMjtcIiBkPVwiTTMxNS4wMjcsNzMuMDM4YzAtMi4yOTUsMi43MTEtMy4yNjgsNS40MjMtMy4yNjhjMi43MTIsMCw1LjQyNCwwLjk3Myw1LjQyNCwzLjI2OHY0NC4yMjJcclxuXHRcdGMwLDIuMjI1LTIuNzExLDMuMzM3LTUuNDI0LDMuMzM3Yy0yLjcxMSwwLTUuNDIzLTEuMTEyLTUuNDIzLTMuMzM3VjczLjAzOHpcIi8+XHJcbjwvZz5cclxuPGc+XHJcblx0PHJlY3QgeD1cIjEyOS4xMTJcIiB5PVwiMjcyXCIgc3R5bGU9XCJmaWxsOiNFNUJBMDM7XCIgd2lkdGg9XCIxNS42NjZcIiBoZWlnaHQ9XCI0NS40M1wiLz5cclxuXHQ8cmVjdCB4PVwiMTY4Ljc5XCIgeT1cIjI3MlwiIHN0eWxlPVwiZmlsbDojRTVCQTAzO1wiIHdpZHRoPVwiMTUuNjY2XCIgaGVpZ2h0PVwiNDUuNDNcIi8+XHJcblx0PHJlY3QgeD1cIjIwOC40NzhcIiB5PVwiMjcyXCIgc3R5bGU9XCJmaWxsOiNFNUJBMDM7XCIgd2lkdGg9XCIxNS42NjZcIiBoZWlnaHQ9XCI0NS40M1wiLz5cclxuXHQ8cmVjdCB4PVwiMjQ4LjE2NlwiIHk9XCIyNzJcIiBzdHlsZT1cImZpbGw6I0U1QkEwMztcIiB3aWR0aD1cIjE1LjY2NlwiIGhlaWdodD1cIjQ1LjQzXCIvPlxyXG5cdDxyZWN0IHg9XCIyODcuODU0XCIgeT1cIjI3MlwiIHN0eWxlPVwiZmlsbDojRTVCQTAzO1wiIHdpZHRoPVwiMTUuNjY2XCIgaGVpZ2h0PVwiNDUuNDNcIi8+XHJcblx0PHJlY3QgeD1cIjMyNy41NDNcIiB5PVwiMjcyXCIgc3R5bGU9XCJmaWxsOiNFNUJBMDM7XCIgd2lkdGg9XCIxNS42NjZcIiBoZWlnaHQ9XCI0NS40M1wiLz5cclxuXHQ8cmVjdCB4PVwiMzY3LjIzMVwiIHk9XCIyNzJcIiBzdHlsZT1cImZpbGw6I0U1QkEwMztcIiB3aWR0aD1cIjE1LjY2NlwiIGhlaWdodD1cIjQ1LjQzXCIvPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcbmV4cG9ydCBjb25zdCBGTEFHX0NfUiA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJpc28tODg1OS0xXCI/PlxyXG48IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+XHJcbjxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuXHQgdmlld0JveD1cIjAgMCA0OTYuNDg1IDQ5Ni40ODVcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2LjQ4NSA0OTYuNDg1O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxnPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojNDU0NTQ1O1wiIGQ9XCJNNDE2LjYyOCwzNTAuMzJ2NDcuMzUyYzAsOC41NjQsNi45NTEsMTUuNTE1LDE1LjUxNSwxNS41MTVoMzQuODAxXHJcblx0XHRjOC41NjQsMCwxNS41MTUtNi45NTEsMTUuNTE1LTE1LjUxNVYzNTAuMzJINDE2LjYyOHpcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiM0NTQ1NDU7XCIgZD1cIk0xNC4wMjYsMzUwLjMydjQ3LjM1MmMwLDguNTY0LDYuOTUxLDE1LjUxNSwxNS41MTUsMTUuNTE1aDM0LjhjOC41NjQsMCwxNS41MTUtNi45NTEsMTUuNTE1LTE1LjUxNVxyXG5cdFx0VjM1MC4zMkgxNC4wMjZ6XCIvPlxyXG48L2c+XHJcbjxnPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojQ0FDQUNBO1wiIGQ9XCJNNDg1LjE5LDE2Mi43NThINDY3LjQ0Yy02LjIzNywwLTExLjI5NSw1LjA1OC0xMS4yOTUsMTEuMjk1cy01LjA1OCwxMS4yOTUtMTEuMjk1LDExLjI5NWgtOS43NzVcclxuXHRcdGw0LjQ4NCw3LjI3N2g0NS42M2M2LjIzNywwLDExLjI5NS01LjA1OCwxMS4yOTUtMTEuMjk1di03LjI3N0M0OTYuNDg1LDE2Ny44MTYsNDkxLjQyNywxNjIuNzU4LDQ4NS4xOSwxNjIuNzU4elwiLz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6I0NBQ0FDQTtcIiBkPVwiTTUxLjYzNCwxODUuMzQ4Yy02LjIzNywwLTExLjI5NS01LjA1OC0xMS4yOTUtMTEuMjk1YzAtNi4yMzctNS4wNTgtMTEuMjk1LTExLjI5NS0xMS4yOTVIMTEuMjk1XHJcblx0XHRDNS4wNTgsMTYyLjc1OCwwLDE2Ny44MTYsMCwxNzQuMDUzdjcuMjc3YzAsNi4yMzcsNS4wNTgsMTEuMjk1LDExLjI5NSwxMS4yOTVoNDUuNjNsNC40ODQtNy4yNzdINTEuNjM0elwiLz5cclxuPC9nPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0YzRjNGMztcIiBkPVwiTTQzMy4xMzcsMTY2LjQzNWMtMTEuNzkyLTQwLjYwMy0zMy4yMzMtNzIuMTMtNzcuMjY1LTc4LjE4MWMtNDguMDk3LTYuNjA5LTE2Ny4xMjktNi42MDktMjE1LjIyNiwwXHJcblx0Yy00NC4wNDgsNi4wNjYtNjUuNDg5LDM3LjU3OC03Ny4yNjUsNzguMTgxYy0xMy41OTEsNDYuNjctNDkuMzM4LDQ0LjMyNy00OS4zMzgsMTAxLjU2MnY5My44NTFINDgyLjQ5di05My44NTFcclxuXHRDNDgyLjQ3NSwyMTIuNTMsNDQ2LjA2MSwyMTAuODU1LDQzMy4xMzcsMTY2LjQzNXpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojMTY4REUyO1wiIGQ9XCJNNDM3LjM1NywxOTQuMTc2Yy00Ljk0OS03LjQzMi04Ljk4My0xNS43OTQtMTEuNjY3LTI0LjkxN2MtMi41MjktOC42NTctNS43NzItMTcuNDg2LTkuNjM1LTI2LjI2N1xyXG5cdGMtMTAuOTIzLTI0Ljc3OC0zNC4zOTctNDIuOTQ2LTYxLjI1NC00Ni44MjVjLTQ3LjUzOC02Ljc0OS0xNjQuNjE2LTYuODg5LTIxMy4xMTYsMGMtNDAuOTQ0LDUuODk2LTYwLjE2OCwzNi4zNjgtNzAuOTA0LDczLjA5MlxyXG5cdGMtMi42NjksOS4xMzgtNi43MTgsMTcuNDctMTEuNjY3LDI0LjkxN0MxODUuMDE4LDIwNC4wOSwzMTEuNDgyLDIwNC4wOSw0MzcuMzU3LDE5NC4xNzZ6XCIvPlxyXG48Zz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6I0NBQ0FDQTtcIiBkPVwiTTQ2OC44MzcsMzA4LjM5OWMwLDAtMTAuNDczLDYuODExLTUyLjkwNywxMi4wNTVjLTQyLjQzNCw1LjI0NC00NS41ODQsMzguMjQ1LTQ1LjU4NCwzOC4yNDVoNzAuNzM0XHJcblx0XHRDNDc5LjMxLDM0Ny42OTgsNDY4LjgzNywzMDguMzk5LDQ2OC44MzcsMzA4LjM5OXpcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiNDQUNBQ0E7XCIgZD1cIk00NDMuODczLDIxNS40MzJjLTM5LjQzOSwxNi4wODktNDIuMDYyLDE2LjQ5My02Ny4zMzYsMzUuMTI2XHJcblx0XHRDMzkwLjk1MSwyMjUuOTgyLDQyNy41MiwyMTUuMzA4LDQ0My44NzMsMjE1LjQzMnpcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiNDQUNBQ0E7XCIgZD1cIk01Mi42MTIsMjE1LjQzMmM1MS45MjksMjEuMTk0LDUxLjgyMSwyMy42NzYsNjcuMzM2LDM1LjEyNlxyXG5cdFx0QzEwNS44OTEsMjI2LjU4Nyw3MC4xMjgsMjE1LjI5Miw1Mi42MTIsMjE1LjQzMnpcIi8+XHJcblx0PHBvbHlnb24gc3R5bGU9XCJmaWxsOiNDQUNBQ0E7XCIgcG9pbnRzPVwiMzY1LjM1MSwzMzcuNTY3IDM1Ny4yMzYsMzU0LjMzOSAxMzkuMjQ4LDM1NC4zMzkgMTMxLjEzNCwzMzcuNTY3IFx0XCIvPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojQ0FDQUNBO1wiIGQ9XCJNODAuNTcsMzIwLjQ1NGMtNDIuNDM0LTUuMjQ0LTUyLjkwNy0xMi4wNTUtNTIuOTA3LTEyLjA1NXMtMTAuNDczLDM5LjMsMjcuNzcyLDUwLjNoNzAuNzAzXHJcblx0XHRDMTI2LjEzOCwzNTguNjk5LDEyMy4wMDQsMzI1LjY4Miw4MC41NywzMjAuNDU0elwiLz5cclxuPC9nPlxyXG48Zz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6I0VENjI2MjtcIiBkPVwiTTQ1NC45NTEsMjQyLjgxNmMtNTAuMjA3LTQuMjgyLTg0LjI2MywzNC40OS04NC4yNjMsMzQuNDlzLTcuNjgsNC40NTMsNDkuNjgsMTAuODNcclxuXHRcdGMyNy40MzEsMy4wNDEsMzkuOTgzLTYuNTk0LDQ1LjYzLTE3LjQ4NkM0NzEuOTI0LDI1OS4xODQsNDY1LjY0MSwyNDMuNzMxLDQ1NC45NTEsMjQyLjgxNnpcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiNFRDYyNjI7XCIgZD1cIk0xMjYuMTY5LDI3Ny4zMDZjMCwwLTM0LjE4LTM4Ljc3Mi04NC41NzMtMzQuNDljLTEwLjczNiwwLjkxNS0xNy4wMzYsMTYuMzY4LTExLjA5MywyNy44MTlcclxuXHRcdGM1LjY2MywxMC44OTIsMTguMjYxLDIwLjUyNyw0NS44MDEsMTcuNDg2QzEzMy44OCwyODEuNzU5LDEyNi4xNjksMjc3LjMwNiwxMjYuMTY5LDI3Ny4zMDZ6XCIvPlxyXG48L2c+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojNkY2RjZGO1wiIGQ9XCJNNDgyLjQ3NSwzNjEuODQ4djguOTA2YzAsNy4yMy01Ljg4LDEzLjA3OS0xMy4xMSwxMy4wNzlIMjcuMTM2Yy03LjIzLDAtMTMuMTEtNS44NDktMTMuMTEtMTMuMDc5XHJcblx0di04LjkwNkg0ODIuNDc1elwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiM3Nzc3Nzc7XCIgZD1cIk0zODQuNDAzLDI5OC41NDZjLTI0LjMxMi0yNy43NzItNTkuNDM5LTQzLjY5MS05Ni4zNDktNDMuNjkxaC03OS42MjRcclxuXHRjLTM2LjkxMSwwLTcyLjAyMSwxNS45MTktOTYuMzQ5LDQzLjY5MWMtNy44OTcsOS4wMTQtMS40ODksMjMuMTMzLDEwLjQ4OCwyMy4xMzNoMjUxLjM0NVxyXG5cdEMzODUuODkzLDMyMS42NzksMzkyLjMwMSwzMDcuNTYxLDM4NC40MDMsMjk4LjU0NnpcIi8+XHJcbjxnPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojNkY2RjZGO1wiIGQ9XCJNMTkwLjMwOSwyNzUuMzM2SDMwNi4xNmMyLjYyMiwwLDQuNzYzLTIuMTI2LDQuNzYzLTQuNzYzcy0yLjEyNi00Ljc2My00Ljc2My00Ljc2M0gxOTAuMzA5XHJcblx0XHRjLTIuNjM4LDAtNC43NjMsMi4xMjYtNC43NjMsNC43NjNTMTg3LjY4NywyNzUuMzM2LDE5MC4zMDksMjc1LjMzNnpcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiM2RjZGNkY7XCIgZD1cIk0xNzUuOTczLDI5My4wN2gxNDQuNTI0YzIuNjIyLDAsNC43NjMtMi4xMjYsNC43NjMtNC43NjNjMC0yLjYyMi0yLjEyNi00Ljc2My00Ljc2My00Ljc2M0gxNzUuOTczXHJcblx0XHRjLTIuNjIyLDAtNC43NjMsMi4xMjYtNC43NjMsNC43NjNDMTcxLjIyNSwyOTAuOTQ0LDE3My4zNTEsMjkzLjA3LDE3NS45NzMsMjkzLjA3elwiLz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6IzZGNkY2RjtcIiBkPVwiTTMzOC4xMjIsMzAxLjI5M0gxNTguMzYzYy0yLjYyMiwwLTQuNzYzLDIuMTI2LTQuNzYzLDQuNzYzYzAsMi42MjIsMi4xMjYsNC43NjMsNC43NjMsNC43NjNcclxuXHRcdGgxNzkuNzU5YzIuNjIyLDAsNC43NjMtMi4xMjYsNC43NjMtNC43NjNDMzQyLjg4NSwzMDMuNDE4LDM0MC43NDQsMzAxLjI5MywzMzguMTIyLDMwMS4yOTN6XCIvPlxyXG48L2c+XHJcbjxnPlxyXG5cdDxjaXJjbGUgc3R5bGU9XCJmaWxsOiNGRkNCNUE7XCIgY3g9XCI0NDIuNDkyXCIgY3k9XCIyNjMuMjQ5XCIgcj1cIjE1LjcxN1wiLz5cclxuXHQ8Y2lyY2xlIHN0eWxlPVwiZmlsbDojRkZDQjVBO1wiIGN4PVwiNTMuOTMxXCIgY3k9XCIyNjMuMjQ5XCIgcj1cIjE1LjcxN1wiLz5cclxuPC9nPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzFCOTVFMDtcIiBkPVwiTTI2My40OTQsMTQ3LjgxN3YtMzUuNDUyYzAtNS42NzksNC42ODYtMTAuMzQ5LDEwLjUwNC0xMC4zNDloMC44NTNcclxuXHRjNS42NzktMC40MzQsMTAuNDg4LDQuMjUxLDEwLjQ4OCw5Ljc5djM0LjY3NmMwLDYuODExLDQuOTY1LDEyLjc2OSwxMS42MzYsMTMuMTg4YzcuMjMsMC4yNzksMTMuMTg4LTUuMzg0LDEzLjE4OC0xMi40NzR2LTI1Ljg3OVxyXG5cdGMwLTUuNjc5LDQuNjg2LTEwLjM0OSwxMC4zNDktMTAuMzQ5aDAuODUzYzYuMDk3LDAsMTEuMDYyLDQuOTY1LDExLjA2MiwxMC45MjN2MTkuOTA2YzAsNi42NzIsNS4xMDQsMTIuNzY5LDExLjc3NiwxMy4wNDhcclxuXHRjNy4wOSwwLjQzNCwxMy4xODgtNS4yNDQsMTMuMTg4LTEyLjMzNXYtMjIuOWMwLTUuOTU4LDQuOTY1LTEwLjQ4OCwxMC45MjMtMTAuMzQ5YzAuMTQsMCwwLjE0LDAsMC4xNCwwYzAuMTQsMCwwLjE0LDAsMC4yNzksMFxyXG5cdGM1Ljk1OC0wLjE0LDEwLjkyMyw0LjM5MSwxMC45MjMsMTAuMzQ5djI1LjMwNWMwLDYuODExLDUuMTA0LDEyLjc2OSwxMS43NzYsMTMuMTg4YzcuMjMsMC4yNzksMTMuMDQ4LTUuMzg0LDEzLjA0OC0xMi40NzR2LTIxLjE3OFxyXG5cdGMtMTIuNDI4LTE1LjAwMy0zMC4xMTUtMjUuNDYtNDkuNjQ4LTI4LjI4NGMtNDcuNTY5LTYuNzY1LTE2NC42NjItNi44NzMtMjEzLjExNiwwYy0xOS41NDksMi44MjQtMzcuMjM2LDEzLjI4MS00OS42NjQsMjguMjg0XHJcblx0djE3LjM0NmMwLDYuNjcyLDUuMTA0LDEyLjc2OSwxMS45MTYsMTMuMDQ4YzcuMDksMC40MzQsMTMuMDQ4LTUuMjQ0LDEzLjA0OC0xMi4zMzV2LTIyLjljMC01Ljk1OCw0Ljk2NS0xMC40ODgsMTEuMDYyLTEwLjM0OVxyXG5cdGMwLDAsMCwwLDAuMTQsMGMwLDAsMCwwLDAuMTQsMGM1LjkyNy0wLjE0LDExLjAzMSw0LjM5MSwxMS4wMzEsMTAuMzQ5djI1LjMwNWMwLDYuODExLDQuOTY1LDEyLjc2OSwxMS42MzYsMTMuMTg4XHJcblx0YzcuMTA2LDAuMjc5LDEyLjkyNC01LjIyOSwxMy4xMjYtMTIuMTQ4di0zMy43OTJjMC03LjEwNiw1LjkxMS0xMi43NjksMTMuMDk1LTEyLjQ0M2M2LjcwMywwLjQwMywxMS43MjksNi4zNzcsMTEuNzI5LDEzLjA3OVxyXG5cdHYzMi4yNTZjMC4xODYsNi41MDEsNS4xNjcsMTIuMjU3LDExLjY5OCwxMi42NzZjNy4yMywwLjI3OSwxMy4wNDgtNS4zODQsMTMuMDQ4LTEyLjQ3NGwwLjE0LTI3LjQ5M1xyXG5cdGMwLTcuMDksNS44MTgtMTIuNzY5LDEzLjA0OC0xMi40OWM2LjY3MiwwLjQxOSwxMS43NzYsNi4zNzcsMTEuNzc2LDEzLjE4OHYyOS43NThjMC4xNCw2LjY3Miw1LjY3OSwxMi4wNTUsMTIuMzM1LDEyLjA1NVxyXG5cdEMyNTcuOTU1LDE2MC4yOTEsMjYzLjQ5NCwxNTQuNjI4LDI2My40OTQsMTQ3LjgxN3pcIi8+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcbmV4cG9ydCBjb25zdCBGTEFHX00gPSBgPHN2ZyBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTAgNTEwXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTAgNTEwXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjI1NVwiIGN5PVwiMjU1XCIgZmlsbD1cIiNhNWU4ODdcIiByPVwiMjU1XCIvPjxwYXRoIGQ9XCJtNTEwIDI1NWMwIDE0MC44My0xMTQuMTcgMjU1LTI1NSAyNTV2LTUxMGMxNDAuODMgMCAyNTUgMTE0LjE3IDI1NSAyNTV6XCIgZmlsbD1cIiMwMGNjNzZcIi8+PGNpcmNsZSBjeD1cIjI1NVwiIGN5PVwiMjU1XCIgZmlsbD1cIiMwMGNjNzZcIiByPVwiMTcxLjY1XCIvPjxwYXRoIGQ9XCJtNDI2LjY1IDI1NWMwIDk0LjgtNzYuODUgMTcxLjY1LTE3MS42NSAxNzEuNjV2LTM0My4zYzk0LjggMCAxNzEuNjUgNzYuODUgMTcxLjY1IDE3MS42NXpcIiBmaWxsPVwiIzAwOTk1OVwiLz48cGF0aCBkPVwibTMzMC44OSAxOTEuMjVjMCA1MC4zOC0zMS41MSA5My4zOS03NS44OSAxMTAuNC0xMy4xNCA1LjA1LTI3LjQxIDcuODEtNDIuMzIgNy44MS02NS4yOSAwLTExOC4yMS01Mi45Mi0xMTguMjEtMTE4LjIxczUyLjkyLTExOC4yMSAxMTguMjEtMTE4LjIxYzE0LjkxIDAgMjkuMTggMi43NiA0Mi4zMiA3LjgxIDQ0LjM4IDE3LjAxIDc1Ljg5IDYwLjAyIDc1Ljg5IDExMC40elwiIGZpbGw9XCIjZmZmNWY1XCIvPjxwYXRoIGQ9XCJtMzMwLjg5IDE5MS4yNWMwIDUwLjM4LTMxLjUxIDkzLjM5LTc1Ljg5IDExMC40di0yMjAuOGM0NC4zOCAxNy4wMSA3NS44OSA2MC4wMiA3NS44OSAxMTAuNHpcIiBmaWxsPVwiI2ZmZjVmNVwiLz48cGF0aCBkPVwibTQ0NC41OSAyMjYuODFjLTEzLjA5NyA4MC4xOTQtOS42MjIgNTguOTA0LTE2LjM1IDEwMC4xNi05LjM1IDU3LjI1LTYzLjM0IDk2LjA4LTEyMC41OSA4Ni43My01MC4xOTctOC4xOTUtNDguMzcxLTcuNzg0LTUyLjY1LTguOTEtMzQuMDYtOC45LTU2LjM4LTQyLjQ0LTUwLjU5LTc3Ljg4bDQuMTEtMjUuMTVjMy42OC0yMi41NSAyNC4wOS0zOC4yMSA0Ni40OC0zNi4zNiAxLjE2LjA5IDIuMzMuMjMgMy40OS40MiAyMC45IDMuNDEgNDAuNjEtMTAuNzYgNDQuMDItMzEuNjZsNC44Ni0yOS43NmM1LjU3LTM0LjEgMzUuMDYtNTguMzMgNjguNTMtNTguMzMgMy43MiAwIDcuNDkuMyAxMS4yOS45MiAzNy44OSA2LjE5IDYzLjU5IDQxLjkyIDU3LjQgNzkuODJ6XCIgZmlsbD1cIiM5MTRkMjRcIi8+PHBhdGggZD1cIm00NDQuNTkgMjI2LjgxYy0xMy4wOTcgODAuMTk0LTkuNjIyIDU4LjkwNC0xNi4zNSAxMDAuMTYtOS4zNSA1Ny4yNS02My4zNCA5Ni4wOC0xMjAuNTkgODYuNzMtNTAuMTk3LTguMTk1LTQ4LjM3MS03Ljc4NC01Mi42NS04Ljkxdi0xMzkuMzljMS4xNi4wOSAyLjMzLjIzIDMuNDkuNDIgMjAuOSAzLjQxIDQwLjYxLTEwLjc2IDQ0LjAyLTMxLjY2bDQuODYtMjkuNzZjNS41Ny0zNC4xIDM1LjA2LTU4LjMzIDY4LjUzLTU4LjMzIDMuNzIgMCA3LjQ5LjMgMTEuMjkuOTIgMzcuODkgNi4xOSA2My41OSA0MS45MiA1Ny40IDc5LjgyelwiIGZpbGw9XCIjODA0MjMxXCIvPjxwYXRoIGQ9XCJtMjkxLjY4NCAzMzMuNjU0Yy0xLjgyMi04LjA4MSAzLjI1Mi0xNi4xMDkgMTEuMzMzLTE3LjkzMmw0OS40NjktMTAuNTY0YzguMDg1LTEuODE4IDE2LjExIDMuMjUzIDE3LjkzMiAxMS4zMzRzLTMuMjUyIDE2LjEwOS0xMS4zMzMgMTcuOTMybC00OS40NjkgMTAuNTY0Yy04LjA4NyAxLjgyMS0xNi4xMTEtMy4yNTQtMTcuOTMyLTExLjMzNHpcIiBmaWxsPVwiIzViMzYyYVwiLz48cGF0aCBkPVwibTMyMC4wMSAyNzIuOTQxYy0xLjgyMi04LjA4MSAzLjI1Mi0xNi4xMDkgMTEuMzMzLTE3LjkzMmw0My42MTUtOS44MzRjOC4wODQtMS44MTggMTYuMTEgMy4yNTMgMTcuOTMyIDExLjMzNHMtMy4yNTIgMTYuMTA5LTExLjMzMyAxNy45MzJsLTQzLjYxNSA5LjgzNGMtOC4wODcgMS44MjEtMTYuMTEtMy4yNTQtMTcuOTMyLTExLjMzNHpcIiBmaWxsPVwiIzViMzYyYVwiLz48Y2lyY2xlIGN4PVwiMTkwLjA0OFwiIGN5PVwiMTcyLjZcIiBmaWxsPVwiI2ZmOWYwMFwiIHI9XCI0OC4zMDlcIi8+PHBhdGggZD1cIm0xMDQuNzQzIDMzNy43ODZjLTcuOTQ5LTIuMzM5LTE2LjI4NiAyLjIwNi0xOC42MjUgMTAuMTUzbC0yLjE1MiA3LjMxMmMtMi4zMzkgNy45NDcgMi4yMDcgMTYuMjg2IDEwLjE1NCAxOC42MjYgNy45NTUgMi4zNCAxNi4yODgtMi4yMTQgMTguNjI1LTEwLjE1M2wyLjE1Mi03LjMxMmMyLjMzOS03Ljk0Ny0yLjIwNy0xNi4yODYtMTAuMTU0LTE4LjYyNnpcIiBmaWxsPVwiI2ZmNmM2Y1wiLz48cGF0aCBkPVwibTE1MS44NzcgMzc1LjEwN2MtNy45NDgtMi4zNDEtMTYuMjg2IDIuMjA2LTE4LjYyNSAxMC4xNTNsLTIuMTUyIDcuMzEyYy0yLjMzOSA3Ljk0NyAyLjIwNyAxNi4yODYgMTAuMTU0IDE4LjYyNiA3Ljk1NSAyLjM0IDE2LjI4OC0yLjIxNCAxOC42MjUtMTAuMTUzbDIuMTUyLTcuMzEyYzIuMzQtNy45NDgtMi4yMDYtMTYuMjg3LTEwLjE1NC0xOC42MjZ6XCIgZmlsbD1cIiNmZjAwNTlcIi8+PHBhdGggZD1cIm0xODMuMTk3IDM0NS4wOTgtNy4zMTEtMi4xNTJjLTcuOTQ3LTIuMzM5LTE2LjI4NyAyLjIwNi0xOC42MjUgMTAuMTUzLTIuMzQgNy45NDcgMi4yMDYgMTYuMjg2IDEwLjE1MyAxOC42MjZsNy4zMTEgMi4xNTJjNy45NTQgMi4zNCAxNi4yODgtMi4yMTIgMTguNjI1LTEwLjE1MyAyLjM0LTcuOTQ3LTIuMjA2LTE2LjI4Ni0xMC4xNTMtMTguNjI2elwiIGZpbGw9XCIjZmY2YzZjXCIvPjxnIGZpbGw9XCIjZmYwMDU5XCI+PHBhdGggZD1cIm0xNDQuODIyIDM0NC4zMjVjNy4yNzQtMy45NjYgOS45NTYtMTMuMDc2IDUuOTkxLTIwLjM1bC0zLjY0Ny02LjY5MWMtMy45NjUtNy4yNzQtMTMuMDc3LTkuOTU2LTIwLjM1LTUuOTkyLTcuMjc0IDMuOTY2LTkuOTU2IDEzLjA3Ni01Ljk5MSAyMC4zNWwzLjY0NyA2LjY5MWMzLjk2NCA3LjI3MSAxMy4wNzIgOS45NTggMjAuMzUgNS45OTJ6XCIvPjxwYXRoIGQ9XCJtMTA4LjM3MiAyOTUuMjEyYy00LjE1Mi03LjE2Ny0xMy4zMjktOS42MTMtMjAuNDk4LTUuNDYxbC03LjEwNiA0LjExNmMtNy4xNjggNC4xNTItOS42MTMgMTMuMzMtNS40NjEgMjAuNDk4IDQuMTUgNy4xNjUgMTMuMzI1IDkuNjE2IDIwLjQ5OCA1LjQ2MWw3LjEwNi00LjExNmM3LjE2OC00LjE1MiA5LjYxMy0xMy4zMyA1LjQ2MS0yMC40OTh6XCIvPjwvZz48L3N2Zz5gO1xyXG5leHBvcnQgY29uc3QgRkxBR19IX1IgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiaXNvLTg4NTktMVwiPz5cclxuPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPlxyXG48c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcblx0IHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxnPlxyXG5cdDxyZWN0IHk9XCIxNjYuNFwiIHN0eWxlPVwiZmlsbDojRThFQUVBO1wiIHdpZHRoPVwiMTEzLjA2N1wiIGhlaWdodD1cIjM0NS42XCIvPlxyXG5cdDxyZWN0IHg9XCIzOTguOTMzXCIgeT1cIjE2Ni40XCIgc3R5bGU9XCJmaWxsOiNFOEVBRUE7XCIgd2lkdGg9XCIxMTMuMDY3XCIgaGVpZ2h0PVwiMzQ1LjZcIi8+XHJcbjwvZz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNGRjcwNTg7XCIgZD1cIk0wLDE3Mi44TDAsMTcyLjhoNTEybDAsMGMwLTEyLjgtMTAuNjY3LTIzLjQ2Ny0yMy40NjctMjMuNDY3SDIzLjQ2N0MxMC42NjcsMTQ5LjMzMywwLDE2MCwwLDE3Mi44elwiXHJcblx0Lz5cclxuPHJlY3QgeD1cIjExMy4wNjdcIiB5PVwiMTA4LjhcIiBzdHlsZT1cImZpbGw6I0YyRjJGMjtcIiB3aWR0aD1cIjI4NS44NjdcIiBoZWlnaHQ9XCI0MDMuMlwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNGRjcwNTg7XCIgZD1cIk00MTQuOTMzLDg1LjMzM0g5Ny4wNjdjLTYuNCwwLTExLjczMyw1LjMzMy0xMS43MzMsMTEuNzMzUzkwLjY2NywxMDguOCw5Ny4wNjcsMTA4LjhoMzE3Ljg2N1xyXG5cdGM2LjQsMCwxMS43MzMtNS4zMzMsMTEuNzMzLTExLjczM1M0MjEuMzMzLDg1LjMzMyw0MTQuOTMzLDg1LjMzM3pcIi8+XHJcbjxnPlxyXG5cdDxyZWN0IHg9XCIzMlwiIHk9XCIxOTguNFwiIHN0eWxlPVwiZmlsbDojNTRDMEVCO1wiIHdpZHRoPVwiNDkuMDY3XCIgaGVpZ2h0PVwiNTQuNFwiLz5cclxuXHQ8cmVjdCB4PVwiMzJcIiB5PVwiMjc0LjEzM1wiIHN0eWxlPVwiZmlsbDojNTRDMEVCO1wiIHdpZHRoPVwiNDkuMDY3XCIgaGVpZ2h0PVwiNTQuNFwiLz5cclxuXHQ8cmVjdCB4PVwiMzJcIiB5PVwiMzQ5Ljg2N1wiIHN0eWxlPVwiZmlsbDojNTRDMEVCO1wiIHdpZHRoPVwiNDkuMDY3XCIgaGVpZ2h0PVwiNTQuNFwiLz5cclxuXHQ8cmVjdCB4PVwiMzJcIiB5PVwiNDI1LjZcIiBzdHlsZT1cImZpbGw6IzU0QzBFQjtcIiB3aWR0aD1cIjQ5LjA2N1wiIGhlaWdodD1cIjU0LjRcIi8+XHJcblx0PHJlY3QgeD1cIjQzMC45MzNcIiB5PVwiMTk4LjRcIiBzdHlsZT1cImZpbGw6IzU0QzBFQjtcIiB3aWR0aD1cIjQ5LjA2N1wiIGhlaWdodD1cIjU0LjRcIi8+XHJcblx0PHJlY3QgeD1cIjQzMC45MzNcIiB5PVwiMjc0LjEzM1wiIHN0eWxlPVwiZmlsbDojNTRDMEVCO1wiIHdpZHRoPVwiNDkuMDY3XCIgaGVpZ2h0PVwiNTQuNFwiLz5cclxuXHQ8cmVjdCB4PVwiNDMwLjkzM1wiIHk9XCIzNDkuODY3XCIgc3R5bGU9XCJmaWxsOiM1NEMwRUI7XCIgd2lkdGg9XCI0OS4wNjdcIiBoZWlnaHQ9XCI1NC40XCIvPlxyXG5cdDxyZWN0IHg9XCI0MzAuOTMzXCIgeT1cIjQyNS42XCIgc3R5bGU9XCJmaWxsOiM1NEMwRUI7XCIgd2lkdGg9XCI0OS4wNjdcIiBoZWlnaHQ9XCI1NC40XCIvPlxyXG48L2c+XHJcbjxyZWN0IHg9XCIxNDUuMDY3XCIgeT1cIjI5My4zMzNcIiBzdHlsZT1cImZpbGw6Izg0REJGRjtcIiB3aWR0aD1cIjUzLjMzM1wiIGhlaWdodD1cIjU0LjRcIi8+XHJcbjxyZWN0IHg9XCIxOTguNFwiIHk9XCIzNzguNjY3XCIgc3R5bGU9XCJmaWxsOiM0MDU5NkI7XCIgd2lkdGg9XCIxMTQuMTMzXCIgaGVpZ2h0PVwiMTMzLjMzM1wiLz5cclxuPHJlY3QgeT1cIjQ4OS42XCIgc3R5bGU9XCJmaWxsOiNBQ0IzQkE7XCIgd2lkdGg9XCI1MTJcIiBoZWlnaHQ9XCIyMi40XCIvPlxyXG48Zz5cclxuXHQ8cmVjdCB4PVwiMTQ1LjA2N1wiIHk9XCIxNDEuODY3XCIgc3R5bGU9XCJmaWxsOiM4NERCRkY7XCIgd2lkdGg9XCI1My4zMzNcIiBoZWlnaHQ9XCI1NC40XCIvPlxyXG5cdDxyZWN0IHg9XCIxNDUuMDY3XCIgeT1cIjIxNy42XCIgc3R5bGU9XCJmaWxsOiM4NERCRkY7XCIgd2lkdGg9XCI1My4zMzNcIiBoZWlnaHQ9XCI1NC40XCIvPlxyXG5cdDxyZWN0IHg9XCIyMjkuMzMzXCIgeT1cIjE0MS44NjdcIiBzdHlsZT1cImZpbGw6Izg0REJGRjtcIiB3aWR0aD1cIjUzLjMzM1wiIGhlaWdodD1cIjU0LjRcIi8+XHJcblx0PHJlY3QgeD1cIjIyOS4zMzNcIiB5PVwiMjE3LjZcIiBzdHlsZT1cImZpbGw6Izg0REJGRjtcIiB3aWR0aD1cIjUzLjMzM1wiIGhlaWdodD1cIjU0LjRcIi8+XHJcblx0PHJlY3QgeD1cIjIyOS4zMzNcIiB5PVwiMjkzLjMzM1wiIHN0eWxlPVwiZmlsbDojODREQkZGO1wiIHdpZHRoPVwiNTMuMzMzXCIgaGVpZ2h0PVwiNTQuNFwiLz5cclxuXHQ8cmVjdCB4PVwiMzEzLjZcIiB5PVwiMTQxLjg2N1wiIHN0eWxlPVwiZmlsbDojODREQkZGO1wiIHdpZHRoPVwiNTMuMzMzXCIgaGVpZ2h0PVwiNTQuNFwiLz5cclxuXHQ8cmVjdCB4PVwiMzEzLjZcIiB5PVwiMjE3LjZcIiBzdHlsZT1cImZpbGw6Izg0REJGRjtcIiB3aWR0aD1cIjUzLjMzM1wiIGhlaWdodD1cIjU0LjRcIi8+XHJcblx0PHJlY3QgeD1cIjMxMy42XCIgeT1cIjI5My4zMzNcIiBzdHlsZT1cImZpbGw6Izg0REJGRjtcIiB3aWR0aD1cIjUzLjMzM1wiIGhlaWdodD1cIjU0LjRcIi8+XHJcbjwvZz5cclxuPGc+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiM0MDU5NkI7XCIgZD1cIk0xNDcuMiwxLjA2N2gxMy44NjdWNjRIMTQ3LjJWMzkuNDY3aC0yNS42VjY0aC0xMy44NjdWMS4wNjdIMTIxLjZ2MjYuNjY3aDI1LjZMMTQ3LjIsMS4wNjdcclxuXHRcdEwxNDcuMiwxLjA2N3pcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiM0MDU5NkI7XCIgZD1cIk0yMjkuMzMzLDU1LjQ2N2MtNi40LDYuNC0xMy44NjcsOS42LTIzLjQ2Nyw5LjZzLTE3LjA2Ny0zLjItMjMuNDY3LTkuNlxyXG5cdFx0Yy02LjQtNi40LTkuNi0xMy44NjctOS42LTIzLjQ2N3MzLjItMTcuMDY3LDkuNi0yMy40NjdDMTg4LjgsMy4yLDE5Ni4yNjcsMCwyMDUuODY3LDBjOS42LDAsMTcuMDY3LDMuMiwyMy40NjcsOS42XHJcblx0XHRjNi40LDYuNCw5LjYsMTMuODY3LDkuNiwyMy40NjdDMjM4LjkzMyw0MS42LDIzNS43MzMsNTAuMTMzLDIyOS4zMzMsNTUuNDY3eiBNMjI1LjA2NywzMy4wNjdjMC01LjMzMy0yLjEzMy0xMC42NjctNS4zMzMtMTQuOTMzXHJcblx0XHRjLTMuMi00LjI2Ny04LjUzMy02LjQtMTMuODY3LTYuNHMtOS42LDIuMTMzLTEzLjg2Nyw2LjRjLTMuMiw0LjI2Ny01LjMzMyw4LjUzMy01LjMzMywxNC45MzNTMTg4LjgsNDMuNzMzLDE5Miw0Ni45MzNcclxuXHRcdGM0LjI2Nyw0LjI2Nyw4LjUzMyw2LjQsMTMuODY3LDYuNGM1LjMzMywwLDkuNi0yLjEzMywxMy44NjctNi40UzIyNS4wNjcsMzguNCwyMjUuMDY3LDMzLjA2N3pcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiM0MDU5NkI7XCIgZD1cIk0yNzYuMjY3LDEzLjg2N3Y1MS4ySDI2Mi40di01MS4yaC0xOC4xMzN2LTEyLjhIMjk0LjRWMTIuOGgtMTguMTMzVjEzLjg2N3pcIi8+XHJcblx0PHBhdGggc3R5bGU9XCJmaWxsOiM0MDU5NkI7XCIgZD1cIk0zNDkuODY3LDEuMDY3djEyLjhoLTMydjEyLjhoMjguOFYzOC40aC0yOC44djEyLjhoMzJWNjRoLTQ2LjkzM1YxLjA2N0gzNDkuODY3elwiLz5cclxuXHQ8cGF0aCBzdHlsZT1cImZpbGw6IzQwNTk2QjtcIiBkPVwiTTM2My43MzMsNjUuMDY3di02NEgzNzcuNlY1MS4yaDI2LjY2N1Y2NGgtNDAuNTMzVjY1LjA2N3pcIi8+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPC9zdmc+YDtcclxuZXhwb3J0IGNvbnN0IEZMQUdfUF9SID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cImlzby04ODU5LTFcIj8+XHJcbjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT5cclxuPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0ZGQjEyNTtcIiBkPVwiTTE3MC40NzksMTU5LjE0MWwtNTAuNTgzLDAuMDcxbC0wLjEzOS04NS4yNGMtMC4wMDMtMi4zODUsMS45MjctNC4zMjEsNC4zMTItNC4zMjRsNDEuOTQ3LTAuMDU5XHJcblx0YzIuMzg1LTAuMDAzLDQuMzIxLDEuOTI3LDQuMzI0LDQuMzEyTDE3MC40NzksMTU5LjE0MXpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojRkY5MDFEO1wiIGQ9XCJNMTcwLjM0MSw3My45MDFjLTAuMDAzLTIuMzg1LTEuOTM5LTQuMzE1LTQuMzI0LTQuMzEybC0yNS4wMSwwLjAzNVxyXG5cdGMyLjIxOCwwLjE3OCwzLjk2OSwyLjAxMywzLjk3Myw0LjI3N2wwLjEzOSw4NS4yNGwtMjUuMjIyLDAuMDM1djAuMDM1bDUwLjU4My0wLjA3MUwxNzAuMzQxLDczLjkwMXpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojRTFFRkZCO1wiIGQ9XCJNMjU0LjEyNCw2OC4wNDRMMTE4LjYyOCwxOTUuNjg2bDAuMjcxLDE5NC4wNDZjMC4wMDcsNS4xMTksNC4xNjMsOS4yNjMsOS4yODEsOS4yNTZsMjUyLjgxMS0wLjM1M1xyXG5cdGM1LjExOS0wLjAwNyw5LjI2My00LjE2Myw5LjI1Ni05LjI4MWwtMC4yNzEtMTk0LjA0NkwyNTQuMTI0LDY4LjA0NHpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojQ0NERkVEO1wiIGQ9XCJNMzg5Ljk3NiwxOTUuMzA3TDI1NC4xMjUsNjguMDQ0bC0yMi4zNDMsMjEuMDQ4bDExMy4zODQsMTA2LjIxNWwwLjI3MSwxOTQuMDQ2XHJcblx0YzAuMDA3LDUuMTE5LTQuMTM3LDkuMjc0LTkuMjU1LDkuMjgxaDQ0LjgxMWM1LjExOS0wLjAwNyw5LjI2My00LjE2Myw5LjI1Ni05LjI4MUwzODkuOTc2LDE5NS4zMDd6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6I0ZGNEM0QztcIiBkPVwiTTQzNy43NzMsMjM4LjA2NWMtNC41NzQsMC4wMDYtOS4xNTktMS42NjEtMTIuNzYxLTUuMDM1TDI1NC4xMjcsNzIuOTVMODMuNjksMjMzLjUwN1xyXG5cdGMtNy40OTEsNy4wNTctMTkuMjg0LDYuNzA0LTI2LjMzOS0wLjc4NmMtNy4wNTctNy40OS02LjcwNS0xOS4yODMsMC43ODYtMjYuMzM5TDI0MS4zMTUsMzMuODIzXHJcblx0YzcuMTYxLTYuNzQ3LDE4LjMzNS02Ljc2MiwyNS41MTUtMC4wMzZsMTgzLjY1OSwxNzIuMDQ3YzcuNTEsNy4wMzUsNy44OTUsMTguODI3LDAuODU5LDI2LjMzNlxyXG5cdEM0NDcuNjg3LDIzNi4wNzksNDQyLjczNiwyMzguMDU4LDQzNy43NzMsMjM4LjA2NXpcIi8+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojRjMzOTM5O1wiIGQ9XCJNNDUxLjM0OCwyMDkuNzZjLTMuNjYxLDMuOTA4LTguNjEyLDUuODg3LTEzLjU3NSw1Ljg5NGMtNC41NzQsMC4wMDYtOS4xNTktMS42NjEtMTIuNzYxLTUuMDM1XHJcblx0TDI1NC4xMjcsNTAuNTM4TDgzLjY5LDIxMS4wOTVjLTcuNDkxLDcuMDU3LTE5LjI4NCw2LjcwNC0yNi4zMzktMC43ODZjLTAuNDcyLTAuNTAxLTAuOTA1LTEuMDIzLTEuMzEtMS41NlxyXG5cdGMtNS4zNjksNy4xMTctNS4wMDksMTcuMjY0LDEuMzEsMjMuOTcxYzcuMDU0LDcuNDksMTguODQ4LDcuODQzLDI2LjMzOSwwLjc4NkwyNTQuMTI3LDcyLjk1bDE3MC44ODUsMTYwLjA4XHJcblx0YzMuNjAyLDMuMzc0LDguMTg3LDUuMDQxLDEyLjc2MSw1LjAzNWM0Ljk2NC0wLjAwNyw5LjkxNC0xLjk4NiwxMy41NzUtNS44OTRjNi4yODgtNi43MTEsNi42MzEtMTYuODMzLDEuMjc3LTIzLjkzM1xyXG5cdEM0NTIuMjI5LDIwOC43NjIsNDUxLjgwNiwyMDkuMjcxLDQ1MS4zNDgsMjA5Ljc2elwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiMyRDU4NzE7XCIgZD1cIk0yODkuMTc1LDIyOC4wMTRsLTY5LjY1NSwwLjA5N2MtMy4yNjgsMC4wMDUtNS45MTQsMi42NTgtNS45MDksNS45MjZsMC4yMywxNjQuODNsODEuNDktMC4xMTRcclxuXHRsLTAuMjMtMTY0LjgzQzI5NS4wOTcsMjMwLjY1NSwyOTIuNDQzLDIyOC4wMSwyODkuMTc1LDIyOC4wMTR6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzFENDg1OTtcIiBkPVwiTTI5NS4xMDEsMjMzLjkyNGMtMC4wMDUtMy4yNjgtMi42NTgtNS45MTQtNS45MjYtNS45MDlsLTM5LjM1NCwwLjA1NVxyXG5cdGMyLjQwMSwwLjc1MSw0LjE0NSwyLjk5MSw0LjE0OSw1LjY0bDAuMjMsMTY1LjEwMmw0MS4xMzEtMC4wNThMMjk1LjEwMSwyMzMuOTI0elwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNGRUQ5QTg7XCIgZD1cIk00NjYuOTA5LDMxNS41NTNsLTEwMi42NjYsNjguNzA5bC0zMC41OTctMS43MTdsLTEuMTk4LTEyLjA0M1xyXG5cdGMtMS43ODMtMTcuOTI3LTE1LjU4Ni0zMi4zMTUtMzMuNDI0LTM0LjgzOWwtODEuOTc5LTkuNDM5Yy0xOC45MTEtMi42NzYtMzcuMTE5LTkuMDEzLTUzLjYwNS0xOC42NTdsMCwwXHJcblx0Yy0yMi41MDgtMTMuMTY3LTQ4LjExNC0yMC4xMDYtNzQuMTktMjAuMTA2SDMwLjE0NXYxMzQuOTE2bDE1Ni4yMTMsNTkuMTU1YzUuOTA0LDEuNjY3LDEyLjEwNCwyLjE2NiwxOC4xNjMsMS4yMDhcclxuXHRjMC4wMzYtMC4wMDYsMC4wNzMtMC4wMTEsMC4xMDktMC4wMTdsMTU3LjI3LTIyLjY3YzEyLjExNi0xLjkzNCwyMy41MDUtNy4wMzcsMzMuMDEzLTE0Ljc5MmwxMDEuNjQ2LTkxLjQxOVxyXG5cdGM5LjEyMi04LjEsMTAuODEzLTIxLjcxMywzLjk1LTMxLjhsMCwwQzQ5My4wMDEsMzExLjAwOCw0NzcuOTg5LDMwOC4xMDgsNDY2LjkwOSwzMTUuNTUzelwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNGNEM4OTI7XCIgZD1cIk01MDEuODUxLDMyNC4yODVsLTEwMC40NjksODQuNTcxYy05LjUwOCw3Ljc1NS0yNS4zMTQsMTIuODU3LTM3LjQzLDE0Ljc5MmwtMTU5LjMyMSwxMS4zODlcclxuXHRjLTAuMDM2LDAuMDA2LTAuMDczLDAuMDEyLTAuMTA5LDAuMDE3Yy02LjA1OSwwLjk1Ny0xMi4yNiwwLjQ1OC0xOC4xNjMtMS4yMDhMMzAuMTQ1LDM3NC42OTF2NDcuNjg4bDE1Ni4yMTMsNTkuMTU1XHJcblx0YzIuOTUyLDAuODMzLDUuOTc4LDEuMzc1LDkuMDIzLDEuNTg4YzAuNzYxLDAuMDUzLDEuNTI0LDAuMDg2LDIuMjg3LDAuMDk4YzIuMjg5LDAuMDM1LDQuNTgxLTAuMTE5LDYuODUzLTAuNDc4XHJcblx0YzAuMDM2LTAuMDA2LDAuMDczLTAuMDEyLDAuMTA5LTAuMDE3bDE1Ny4yNy0yMi42N2MzLjc4Ni0wLjYwNSw3LjUwMi0xLjUxOSwxMS4xMTEtMi43MjZjMC43MjItMC4yNDIsMS40MzktMC40OTUsMi4xNTItMC43NlxyXG5cdGMzLjU2NS0xLjMyNCw3LjAxNy0yLjkzOSwxMC4zMjEtNC44MjljMC42NjEtMC4zNzgsMS4zMTUtMC43NjcsMS45NjQtMS4xNjZjMi41OTQtMS41OTksNS4wODktMy4zNzIsNy40NjYtNS4zMTFsMTAxLjY0Ni05MS40MTlcclxuXHRDNTA1LjAyMywzNDYuMzI4LDUwNy4wNzcsMzM0LjA3Miw1MDEuODUxLDMyNC4yODV6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzJENTg3MTtcIiBkPVwiTTUwLjA2Niw0NjguMjA1SDI2LjY4Yy0xMC42OTksMC0xOS4zNzItOC42NzMtMTkuMzcyLTE5LjM3MlYyNzUuNzcyXHJcblx0YzAtMTAuNjk5LDguNjczLTE5LjM3MiwxOS4zNzItMTkuMzcyaDIzLjM4NmMxMC42OTksMCwxOS4zNzIsOC42NzMsMTkuMzcyLDE5LjM3MnYxNzMuMDYxXHJcblx0QzY5LjQzOCw0NTkuNTMyLDYwLjc2NSw0NjguMjA1LDUwLjA2Niw0NjguMjA1elwiLz5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiMxRDQ4NTk7XCIgZD1cIk01MC4wNjYsMjU2LjRIMjYuNjhjLTEuMzE1LDAtMi41OTgsMC4xMzQtMy44MzksMC4zODRjOC44NTksMS43ODIsMTUuNTMyLDkuNjA0LDE1LjUzMiwxOC45ODhcclxuXHR2MTczLjA2MWMwLDkuMzg0LTYuNjczLDE3LjIwNi0xNS41MzIsMTguOTg4YzEuMjQxLDAuMjUsMi41MjUsMC4zODQsMy44MzksMC4zODRoMjMuMzg2YzEwLjY5OSwwLDE5LjM3Mi04LjY3MywxOS4zNzItMTkuMzcyXHJcblx0VjI3NS43NzJDNjkuNDM4LDI2NS4wNzMsNjAuNzY1LDI1Ni40LDUwLjA2NiwyNTYuNHpcIi8+XHJcbjxwYXRoIGQ9XCJNNTA2LjU1MiwzMTcuOTMzYy05LjczOS0xNC4zMTItMjkuMzUxLTE4LjEtNDMuNzA3LTguNDUybC02NS4zNCw0My43MjhsLTAuMTktMTM2LjExbDIyLjcsMjEuMjY1XHJcblx0YzQuODI3LDQuNTIxLDExLjEyMSw3LjAwOSwxNy43MjksNy4wMDljMC4wMTIsMCwwLjAyNiwwLDAuMDM5LDBjNy4xMzQtMC4wMSwxNC4wMjItMywxOC44OTgtOC4yMDVcclxuXHRjNC43MzctNS4wNTcsNy4yMjItMTEuNjU1LDYuOTk2LTE4LjU4MWMtMC4yMjYtNi45MjYtMy4xMzYtMTMuMzQ5LTguMTkzLTE4LjA4NmwtNDMuMDM1LTQwLjMxNFxyXG5cdGMtMi45NDYtMi43Ni03LjU3MS0yLjYwOS0xMC4zMywwLjMzN2MtMi43NTksMi45NDYtMi42MDgsNy41NywwLjMzNywxMC4zM2w0My4wMzUsNDAuMzE0YzIuMjA4LDIuMDY4LDMuNDc4LDQuODcyLDMuNTc3LDcuODk1XHJcblx0YzAuMDk4LDMuMDIzLTAuOTg2LDUuOTA0LTMuMDU1LDguMTExYy0yLjE2LDIuMzA2LTUuMDksMy41NzgtOC4yNTIsMy41ODJjLTAuMDA2LDAtMC4wMTEsMC0wLjAxNywwYy0yLjg4MywwLTUuNjMtMS4wODYtNy43MzctMy4wNlxyXG5cdGwtMzUuMDI2LTMyLjgxMWMtMC4wMDEtMC4wMDEtMC4wMDItMC4wMDItMC4wMDItMC4wMDJMMjU5LjEyNCw2Ny42MTZjLTIuODE2LTIuNjM3LTcuMTk4LTIuNjMzLTEwLjAwNywwLjAxNEwxMTMuNjI0LDE5NS4yNjhcclxuXHRjLTAuMDAxLDAuMDAxLTAuMDAxLDAuMDAyLTAuMDAyLDAuMDAybC0zNC45NDMsMzIuOTE3Yy0yLjIwMSwyLjA3NC01LjA3OSwzLjE2LTguMTAzLDMuMDc2Yy0zLjAyNC0wLjA5LTUuODMxLTEuMzUzLTcuOTA1LTMuNTU2XHJcblx0Yy0yLjA3NC0yLjIwMS0zLjE2Ny01LjA3OS0zLjA3Ni04LjEwMmMwLjA5LTMuMDI0LDEuMzUzLTUuODMxLDMuNTU0LTcuOTA1TDI0Ni4zMjYsMzkuMTQzYzQuMzQyLTQuMDkxLDExLjE1NC00LjEwMSwxNS41MDctMC4wMjFcclxuXHRMMzY5LDEzOS41MTRjMi45NDUsMi43NTksNy41NywyLjYwOSwxMC4zMy0wLjMzN2MyLjc1OS0yLjk0NiwyLjYwOC03LjU3LTAuMzM3LTEwLjMzTDI3MS44MjcsMjguNDU1XHJcblx0Yy05Ljk3My05LjM0NC0yNS41NzYtOS4zMjMtMzUuNTIzLDAuMDQ5bC01OC42MzksNTUuMjRsLTAuMDE2LTkuODUzYy0wLjAwNC0zLjEwNi0xLjIxOC02LjAyNC0zLjQxNy04LjIxNlxyXG5cdGMtMi4xOTUtMi4xODktNS4xMDktMy4zOTQtOC4yMDktMy4zOTRjLTAuMDA2LDAtMC4wMTEsMC0wLjAxNywwbC00MS45NDcsMC4wNTljLTMuMTA2LDAuMDA0LTYuMDIzLDEuMjE4LTguMjE2LDMuNDE3XHJcblx0Yy0yLjE5MiwyLjE5OS0zLjM5OCw1LjEyLTMuMzkzLDguMjI3bDAuMTE2LDcxLjA4N2wtNTkuNDM5LDU1Ljk5M2MtNS4wNDQsNC43NTEtNy45MzUsMTEuMTgyLTguMTQyLDE4LjEwOFxyXG5cdHMyLjI5NiwxMy41MTgsNy4wNDcsMTguNTZjNC43NSw1LjA0NCwxMS4xODEsNy45MzYsMTguMTA4LDguMTQzYzAuMjY1LDAuMDA4LDAuNTMsMC4wMTIsMC43OTUsMC4wMTJcclxuXHRjNi42MzUsMCwxMi45MTgtMi40OSwxNy43NjctNy4wNmwyMi42NDktMjEuMzM2bDAuMDksNjQuMjkxYy03LjMyOC0xLjA2Ny0xNC43NDItMS42MjctMjIuMTktMS42MjdINzYuNzQ2di00LjM4MlxyXG5cdGMwLTE0LjcxMS0xMS45NjktMjYuNjgtMjYuNjgtMjYuNjhIMjYuNjhDMTEuOTY5LDI0OS4wOTIsMCwyNjEuMDYsMCwyNzUuNzcyVjM5MC4yOWMwLDQuMDM2LDMuMjcyLDcuMzA4LDcuMzA4LDcuMzA4XHJcblx0czcuMzA4LTMuMjcyLDcuMzA4LTcuMzA4VjI3NS43NzJjMC02LjY1Miw1LjQxMi0xMi4wNjQsMTIuMDY0LTEyLjA2NGgyMy4zODVjNi42NTIsMCwxMi4wNjQsNS40MTIsMTIuMDY0LDEyLjA2NHYxMS42OXYxNDkuNzk2XHJcblx0djExLjU3NWMwLDYuNjUyLTUuNDEyLDEyLjA2NC0xMi4wNjQsMTIuMDY0SDI2LjY4Yy02LjY1MiwwLTEyLjA2NC01LjQxMi0xMi4wNjQtMTIuMDY0di0xMi43ODhjMC00LjAzNi0zLjI3Mi03LjMwOC03LjMwOC03LjMwOFxyXG5cdFMwLDQzMi4wMDksMCw0MzYuMDQ1djEyLjc4OGMwLDE0LjcxMSwxMS45NjksMjYuNjgsMjYuNjgsMjYuNjhoMjMuMzg1YzE0LjcxMSwwLDI2LjY4LTExLjk2OCwyNi42OC0yNi42OHYtMC45OTNsMTA3LjAyNCw0MC41MjhcclxuXHRjMC4xOTgsMC4wNzUsMC4zOTksMC4xNDEsMC42MDMsMC4xOThjNC42NTMsMS4zMTQsOS4zMDQsMS45NzMsMTMuODk2LDEuOTczYzIuNDg0LDAsNC45NTEtMC4xOTMsNy4zOTMtMC41NzlsMTU3LjI4MS0yMi42NzJcclxuXHRjMC4wMzctMC4wMDUsMC4wNzMtMC4wMTEsMC4xMS0wLjAxN2MxMy4zNzItMi4xMzUsMjUuOTg3LTcuNzg4LDM2LjQ4LTE2LjM0NmMwLjA5MS0wLjA3NCwwLjE4MS0wLjE1MSwwLjI2OC0wLjIzbDEwMS42MTEtOTEuMzg4XHJcblx0QzUxMy4yNDQsMzQ4LjgwMiw1MTUuNDUzLDMzMS4wMTUsNTA2LjU1MiwzMTcuOTMzeiBNMTYzLjAzNyw3Ni45MDJsMC4wMzQsMjAuNTlsLTM1LjkxMiwzMy44M2wtMC4wODktNTQuMzcxTDE2My4wMzcsNzYuOTAyelxyXG5cdCBNMTI2LjA2MSwyODQuNjE3bC0wLjExMy04MC44NzhMMjU0LjE0MSw4Mi45NzZsMTI4LjUzOCwxMjAuNDEybDAuMjIzLDE1OS41OTNsLTIwLjY5MSwxMy44NDhMMzQwLjMsMzc1LjZsLTAuNTc5LTUuODJcclxuXHRjLTIuMDM5LTIwLjQ5OC0xNy4xNzEtMzYuOTg3LTM3LjE4LTQwLjkyMmwtMC4xMzItOTQuOTQ1Yy0wLjAxLTcuMjg2LTUuOTQyLTEzLjIwNy0xMy4yMjctMTMuMjA3Yy0wLjAwNiwwLTAuMDExLDAtMC4wMTgsMFxyXG5cdGwtNjkuNjU0LDAuMDk4Yy0zLjUzMywwLjAwNS02Ljg1MywxLjM4NS05LjM0NywzLjg4N2MtMi40OTUsMi41MDEtMy44NjYsNS44MjUtMy44NjEsOS4zNTdsMC4xMTYsODIuNzgxXHJcblx0Yy0xMy43OTctMy4xNTQtMjYuOTcxLTguMzYzLTM5LjI4OC0xNS41NjhjLTEuNTM3LTAuODk5LTMuMDg5LTEuNzY3LTQuNjU0LTIuNjExYy0wLjYxLTAuMzI5LTEuMjMtMC42MzgtMS44NDUtMC45NTlcclxuXHRjLTAuOTUyLTAuNDk3LTEuOTAyLTAuOTk3LTIuODY0LTEuNDc0Yy0wLjc2Ni0wLjM4LTEuNTQxLTAuNzQtMi4zMTMtMS4xMDdjLTAuODE5LTAuMzg5LTEuNjM3LTAuNzgyLTIuNDYyLTEuMTU3XHJcblx0Yy0wLjg0LTAuMzgxLTEuNjg3LTAuNzQ0LTIuNTMzLTEuMTFjLTAuNzczLTAuMzM0LTEuNTQ2LTAuNjctMi4zMjQtMC45OTFjLTAuODctMC4zNTktMS43NDUtMC43MDQtMi42MjEtMS4wNDdcclxuXHRjLTAuNzc3LTAuMzA0LTEuNTU1LTAuNjA2LTIuMzM2LTAuODk4Yy0wLjg2Ny0wLjMyNC0xLjczOC0wLjYzNy0yLjYxMS0wLjk0NGMtMC44MTktMC4yODktMS42MzktMC41NzEtMi40NjMtMC44NDZcclxuXHRjLTAuODM2LTAuMjc5LTEuNjc0LTAuNTUyLTIuNTE2LTAuODE3Yy0wLjg5Ny0wLjI4My0xLjc5OC0wLjU1My0yLjctMC44MmMtMC43NzUtMC4yMjgtMS41NDktMC40NTYtMi4zMjgtMC42NzJcclxuXHRjLTEuMDE3LTAuMjgzLTIuMDM5LTAuNTQ4LTMuMDYyLTAuODFDMTI3LjAxOSwyODQuODc1LDEyNi41NDMsMjg0LjczNiwxMjYuMDYxLDI4NC42MTd6IE0yMjAuOTIxLDIzNS40MThsNjYuODc0LTAuMDk0XHJcblx0bDAuMTI4LDkxLjcwNWwtNjEuMTI1LTcuMDM3bC01Ljc1OS0wLjY2M0wyMjAuOTIxLDIzNS40MTh6IE00OTEuNjczLDM0OC40MWwtMTAxLjUxMSw5MS4yOThcclxuXHRjLTguNDU5LDYuODU5LTE4LjYwNiwxMS4zOTYtMjkuMzYxLDEzLjEyMmwtMTU3LjIxMywyMi42NjJjLTAuMDMzLDAuMDA1LTAuMDY1LDAuMDEtMC4wOTgsMC4wMTVsLTAuMTA5LDAuMDE3XHJcblx0Yy00Ljc2MywwLjc1NC05LjcyMywwLjQzNi0xNC43NDQtMC45NDJMNzYuNzQ2LDQzMi4yMVYyOTQuNzdoMTIuNTA1YzEwLjY0NSwwLDIxLjIxOCwxLjIyOSwzMS41MTQsMy42MTZcclxuXHRjMC4zODMsMC4wODksMC43NjUsMC4xOCwxLjE0NywwLjI3MmMxLjI2NSwwLjMwNSwyLjUyNywwLjYxOSwzLjc4MywwLjk1OWMwLjExLDAuMDMsMC4yMTksMC4wNjIsMC4zMjksMC4wOTJcclxuXHRjMS4yNTksMC4zNDQsMi41MTMsMC43MDcsMy43NjMsMS4wODZjMC4yMjQsMC4wNjgsMC40NDksMC4xMzUsMC42NzIsMC4yMDRjMS4zMywwLjQxMSwyLjY1NCwwLjg0LDMuOTcxLDEuMjlcclxuXHRjMC4xMzYsMC4wNDcsMC4yNzEsMC4wOTUsMC40MDcsMC4xNDJjMi43NDMsMC45NDcsNS40NTksMS45OCw4LjE0MSwzLjA5OGMwLjE0NiwwLjA2MSwwLjI5MiwwLjEyMiwwLjQzOCwwLjE4NFxyXG5cdGMxLjMzNywwLjU2MiwyLjY2NiwxLjE0MywzLjk4NiwxLjc0N2MwLjAzNSwwLjAxNiwwLjA3MSwwLjAzMywwLjEwNiwwLjA1YzEuMjc2LDAuNTg2LDIuNTQzLDEuMTk0LDMuODAyLDEuODE5XHJcblx0YzAuMTQ4LDAuMDczLDAuMjk3LDAuMTQ1LDAuNDQ1LDAuMjE5YzEuMjMsMC42MTUsMi40NSwxLjI1MiwzLjY2MywxLjkwNGMwLjIyOSwwLjEyMywwLjQ1NywwLjI0OSwwLjY4NiwwLjM3M1xyXG5cdGMxLjIyNCwwLjY2NywyLjQ0MSwxLjM0NywzLjY0NiwyLjA1MmMxNy4zOTEsMTAuMTczLDM2LjMyMywxNi43NjIsNTYuMjcxLDE5LjU4NWMwLjA2MywwLjAwOSwwLjEyNSwwLjAxNywwLjE4OCwwLjAyNGw4MS44ODEsOS40MjdcclxuXHRjMC40NTMsMC4wNjUsMC45MDMsMC4xNCwxLjM1LDAuMjI0YzEyLjA1NCwyLjI2NCwyMS41NjgsMTEuMTcxLDI0Ljc1MSwyMi43N2MwLjQ3MiwxLjcxOCwwLjgwNCwzLjQ5NiwwLjk4Niw1LjMxOWwwLjMyNSwzLjI3XHJcblx0bC0xNTMuNDYtMTMuNDQ1Yy00LjAxOC0wLjM1MS03LjU2NiwyLjYyMi03LjkxOCw2LjY0MmMtMC4zNTMsNC4wMjEsMi42MjIsNy41NjYsNi42NDIsNy45MThsMTYyLjI0MiwxNC4yMTVcclxuXHRjMC4wMzksMC4wMDMsMC4wNzcsMC4wMDIsMC4xMTUsMC4wMDVzMC4wNzUsMC4wMDksMC4xMTQsMC4wMTJsMzAuNTk3LDEuNzE3YzAuMTM3LDAuMDA4LDAuMjczLDAuMDExLDAuNDA5LDAuMDExXHJcblx0YzAuMTQ1LDAsMC4yODgtMC4wMjMsMC40MzItMC4wMzJjMC4xNjMtMC4wMSwwLjMyNi0wLjAxNiwwLjQ4OC0wLjAzNmMwLjIxOC0wLjAyOCwwLjQzMS0wLjA3NSwwLjY0NS0wLjEyMlxyXG5cdGMwLjE1My0wLjAzNCwwLjMwNy0wLjA1OSwwLjQ1Ny0wLjEwM2MwLjIzNC0wLjA2NywwLjQ1OS0wLjE1OCwwLjY4Ni0wLjI0OWMwLjEyMi0wLjA0OSwwLjI0OC0wLjA4NiwwLjM2OC0wLjE0MlxyXG5cdGMwLjM0MS0wLjE1OCwwLjY3My0wLjM0LDAuOTg5LTAuNTUybDI1Ljk3Mi0xNy4zODFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDIsMC4wMDMtMC4wMDNsNzYuNzAyLTUxLjMzMlxyXG5cdGM3LjcxNy01LjE4NywxOC4yNTEtMy4xNTIsMjMuNDgyLDQuNTM2QzQ5OS4yNDksMzMzLjE4MSw0OTguMDYyLDM0Mi43MzYsNDkxLjY3MywzNDguNDF6XCIvPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48L3N2Zz5gO1xyXG5cclxuIiwiaW1wb3J0IHN1Yk1lbnVUb2dnbGVDb250ZW50LCB7IGNsb3NlU3ViTWVudUNvbnRlbnRJZk9wZW4sIG1lbnVUb2dnbGUsIHN1Yk1lbnVUb2dnbGUgfSBmcm9tIFwiLi9wYXJ0aWFsL3N1Yi1tZW51XCI7XHJcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IHNlYXJjaEluVGFibGUgfSBmcm9tIFwiLi9wYXJ0aWFsL3RhYmxlXCI7XHJcbmltcG9ydCB7IEtoQ2hhcnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0toQ2hhcnRcIjtcclxuaW1wb3J0IHdlbGNvbWVNb2RhbENsb3NlQWN0aW9uIGZyb20gXCIuL3BhcnRpYWwvd2VsY29tZS1tZXNzYWdlXCI7XHJcbmltcG9ydCBLaFNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdEN1c3RvbS9LaFNlbGVjdFwiO1xyXG5pbXBvcnQgS2hNZWRpYVN0b3JlIGZyb20gXCIuL2NvbXBvbmVudHMvbWVkaWEtc3RvcmUvS2hNZWRpYVN0b3JlXCI7XHJcbmltcG9ydCBDaGlwQnVpbGRlciBmcm9tIFwiLi9jb21wb25lbnRzL0NoaXBCdWlsZGVyXCI7XHJcbmltcG9ydCBpbnZvaWNlUHJpbnQgZnJvbSBcIi4vcGFydGlhbC9wcmludC1pbnZvaWNlXCI7XHJcbmltcG9ydCBUYWJCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJCYXJcIjtcclxuaW1wb3J0IHBhbmVsQWN0aW9uIGZyb20gXCIuL3BhcnRpYWwvcGFuZWxcIjtcclxuaW1wb3J0IHN3aXRjaFZhbHVlVG9nZ2xlIGZyb20gXCIuL3BhcnRpYWwvc3dpdGNoXCI7XHJcbmltcG9ydCBhY3RpdmVGaWVsZFBhcmVudCBmcm9tIFwiLi9wYXJ0aWFsL2ZpZWxkXCI7XHJcbmltcG9ydCBjbG9zZUFsZXJ0QWN0aW9uIGZyb20gXCIuL3BhcnRpYWwvYWxlcnRcIjtcclxuaW1wb3J0IGFjY291bnRSZXNlYXJjaCBmcm9tIFwiLi9wYXJ0aWFsL2FjY291bnQtcmVzZWFyY2hcIjtcclxuaW1wb3J0IENoZWNrYm94R3JvdXAgZnJvbSBcIi4vY29tcG9uZW50cy9DaGVja2JveEdyb3VwXCI7XHJcbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2gtYXBwLWJvZHktbmF2LWJhci1pdGVtLWJ0bicpO1xyXG5cclxuICAgIHN1Yk1lbnVUb2dnbGVDb250ZW50KHRvZ2dsZUJ0bik7XHJcbiAgICBtZW51VG9nZ2xlKCk7XHJcbiAgICBzZWFyY2hJblRhYmxlKCk7XHJcbiAgICAvL2dsb2JhbFNlYXJjaCgpO1xyXG4gICAgLy9jbG9zZUFsZXJ0QWN0aW9uKCk7XHJcbiAgICBhY2NvdW50UmVzZWFyY2goKVxyXG4gICAgd2VsY29tZU1vZGFsQ2xvc2VBY3Rpb24oKTtcclxuICAgIGludm9pY2VQcmludCgpO1xyXG4gICAgcGFuZWxBY3Rpb24oKTtcclxuICAgIHN3aXRjaFZhbHVlVG9nZ2xlKCk7XHJcbiAgICBhY3RpdmVGaWVsZFBhcmVudCgpO1xyXG4gICAgY2xvc2VBbGVydEFjdGlvbigpO1xyXG5cclxuXHJcblxyXG4gICAgKG5ldyBJbWFnZUxvYWRlcigpKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBLaFNlbGVjdCgna2gtc2VsZWN0LW5hdGl2ZScpO1xyXG4gICAgbmV3IEtoTWVkaWFTdG9yZSgpO1xyXG4gICAgbmV3IEtoTWVkaWFTdG9yZSgnaW1nLW1lZGlhLXN0b3JlXycpO1xyXG4gICAgbmV3IENoaXBCdWlsZGVyKCk7XHJcbiAgICBuZXcgVGFiQmFyKCk7XHJcbiAgICBuZXcgQ2hlY2tib3hHcm91cCgpO1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsb3NlU3ViTWVudUNvbnRlbnRJZk9wZW4odG9nZ2xlQnRuLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbXBvbmVudHNcclxuICAgIG5ldyBLaENoYXJ0KCk7XHJcblxyXG5cclxufSk7IiwiaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0FsZXJ0RGlhbG9nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2NvdW50UmVzZWFyY2goKSB7XHJcbiAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudC1zZWFyY2gtZmllbGRcIiksXHJcbiAgICAgICAgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfYWNjb3VudC1zZWFyY2gtYnV0dG9uXCIpLFxyXG4gICAgICAgIHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX25hbWVcIiksXHJcbiAgICAgICAgdXNlck1hdHJpY3VsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9tYXRyaWN1bGVcIiksXHJcbiAgICAgICAgbWF0cmljdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfbWF0cmljdWxlXCIpLFxyXG4gICAgICAgIGFjY291bnRfdHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudF90eXBlXCIpLFxyXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudC1zZWFyY2gtbG9hZGVyXCIpLFxyXG4gICAgICAgIGFjY291bnRfZXhpc3RfdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudC1leGlzdC12aWV3XCIpLFxyXG4gICAgICAgIGJ0blN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdfYnRuJyksXHJcbiAgICAgICAgX2FsZXJ0ID0gbmV3IEFsZXJ0RGlhbG9nKCk7XHJcblxyXG4gICAgaWYgKGlucHV0U2VhcmNoICYmIGJ0bikge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBfbWF0cmljdWxlID0gaW5wdXRTZWFyY2gudmFsdWUudG9TdHJpbmcoKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgdXJsID0gXCIvYWRtaW4vb2ZmaWNlL2FjY291bnQvZmluZC91c2VyXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKF9tYXRyaWN1bGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJfbWF0cmljdWxlXCIsIF9tYXRyaWN1bGUudG9VcHBlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgIHJlc2V0VmlldygpO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsIGZvcm1EYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kYXRhICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZS52YWx1ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5sYXN0bmFtZSArIFwiIFwiICsgcmVzcG9uc2UuZGF0YS5kYXRhLmZpcnN0bmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1hdHJpY3VsZS52YWx1ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXRyaWN1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfdHlwZS52YWx1ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kYXRhLmFjY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpY3VsZS52YWx1ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXRyaWN1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9leGlzdF92aWV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b25TdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYWxlcnQuc2V0WWVzT25seSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2FsZXJ0LnR5cGUgPSBcImRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYWxlcnQueWVzID0gXCJEJ0FDQ09SRFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYWxlcnQuc2V0TWVzc2FnZSA9IFwiQ2UgbWF0cmljdWxlIG4nZXhpc3RlIHBhcywgVmV1aWxsZXogdsOpcmlmaWVyIGxlIG1hdHJpY3VsZSBldCByw6llc3NheWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2FsZXJ0LnNldEhlYWRlciA9IFwiSW5mb3JtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYWxlcnQuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX2FsZXJ0LnNldFllc09ubHkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBfYWxlcnQudHlwZSA9IFwid1wiXHJcbiAgICAgICAgICAgICAgICBfYWxlcnQueWVzID0gXCJPdWlcIjtcclxuICAgICAgICAgICAgICAgIF9hbGVydC5zZXRNZXNzYWdlID0gXCJWZXVpbGxleiByZW1wbGlyIGNvcnJlY3RlbWVudCBsZSBjaGFtcCBkZSByZWNoZXJjaGVcIlxyXG4gICAgICAgICAgICAgICAgX2FsZXJ0LnNldEhlYWRlciA9IFwiQXZlcnRpc3NlbWVudFwiXHJcbiAgICAgICAgICAgICAgICBfYWxlcnQuc2hvdygpXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0VmlldygpIHtcclxuICAgICAgICB1c2VybmFtZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdXNlck1hdHJpY3VsZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgYWNjb3VudF90eXBlLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBtYXRyaWN1bGUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGFjY291bnRfZXhpc3Rfdmlldy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0QnV0dG9uU3RhdGUoaXNBY3RpdmUgPSB0cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5TdWJtaXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuU3VibWl0Lml0ZW0oaSkuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuU3VibWl0Lml0ZW0oaSkucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuU3VibWl0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuU3VibWl0Lml0ZW0oaSkuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZUFsZXJ0QWN0aW9uKCkge1xyXG4gICAgY29uc3QgQUxFUlRfQ0xPU0UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrb3JvcGgtYWxlcnQtY29udGVudC1jbG9zZScpO1xyXG4gICAgbGV0IF9pcyA9IHRydWU7XHJcbiAgICBpZiAoQUxFUlRfQ0xPU0UubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBTEVSVF9DTE9TRS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBBTEVSVF9DTE9TRVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQWxlcnQodGhpcy5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIF9pcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2lzKSBjbG9zZUFsZXJ0KEFMRVJUX0NMT1NFW2ldLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9LCAxMDAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcclxuICovXHJcbmZ1bmN0aW9uIGNsb3NlQWxlcnQocGFyZW50KSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgICB9LCA1MDApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2ZUZpZWxkUGFyZW50KCkge1xyXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2toLWlucHV0LWZpZWxkJyk7XHJcbiAgICBpZiAoaW5wdXRGaWVsZC5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5pdGVtKGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5pdGVtKGkpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLml0ZW0oaSkuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpID09PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQuaXRlbShpKS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFuZWxBY3Rpb24oKXtcclxuICAgIGNvbnN0IHBhbmVscyA9ICQoJy5rb3JvcGgtcGFuZWwtY29udGVudCcpO1xyXG4gICAgJCgnLmtvcm9waC1wYW5lbC1pbmRpY2F0b3ItYnV0dG9uJykucGFyZW50KCkucGFyZW50KCkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHBhbmVsX2NvbnRlbnQgPSAkKHRoaXMpLnNpYmxpbmdzKCcua29yb3BoLXBhbmVsLWNvbnRlbnQnKSxcclxuICAgICAgICAgICAgbm9uZSA9IHBhbmVsX2NvbnRlbnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIsXHJcbiAgICAgICAgICAgIEZJRUxEX05BTUUgPSAkKHRoaXMpLnBhcmVudCgpLmRhdGEoJ25hbWUnKTtcclxuICAgICAgICBpZiAobm9uZSkgJCh0aGlzLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZCkuYWRkQ2xhc3MoJ3BhbmVsLXNob3cnKTtcclxuICAgICAgICBlbHNlICQodGhpcy5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQpLnJlbW92ZUNsYXNzKCdwYW5lbC1zaG93Jyk7XHJcbiAgICAgICAgcGFuZWxfY29udGVudC5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEZJRUxEX05BTUUsIFwiXCIgKyBub25lKVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5lbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBGSUVMRF9OQU1FID0gJChwYW5lbHNbaV0pLnBhcmVudCgpLmRhdGEoJ25hbWUnKSxcclxuICAgICAgICAgICAgSU5ESUNBVE9SPSQocGFuZWxzW2ldKS5zaWJsaW5ncygnaGVhZGVyJykuY2hpbGRyZW4oJy5rb3JvcGgtcGFuZWwtaW5kaWNhdG9yJykuY2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oRklFTERfTkFNRSkhPW51bGwpe1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oRklFTERfTkFNRSk9PT1cInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgSU5ESUNBVE9SLmFkZENsYXNzKCdwYW5lbC1zaG93Jyk7XHJcbiAgICAgICAgICAgICAgICBwYW5lbHNbaV0uY2xhc3NMaXN0LnJlcGxhY2UoJ2Nsb3NlJywnb3BlbicpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBJTkRJQ0FUT1IucmVtb3ZlQ2xhc3MoJ3BhbmVsLXNob3cnKTtcclxuICAgICAgICAgICAgICAgIHBhbmVsc1tpXS5jbGFzc0xpc3QucmVwbGFjZSgnb3BlbicsJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnZvaWNlUHJpbnQoKSB7XHJcbiAgICBjb25zdCBidG5QcmludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmludC1pbnZvaWNlJyksXHJcbiAgICAgICAgdmlld1ByaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludm9pY2Vfdmlld19wcmludCcpO1xyXG5cclxuICAgIGlmIChidG5QcmludCAmJiB2aWV3UHJpbnQpIHtcclxuICAgICAgICBidG5QcmludC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2aWV3UHJpbnQuY29udGVudFdpbmRvdy5wcmludCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiLypcclxuICogIEBjb21wYW55IERhcmNGbG93IGRlc2lnbiBbaHR0cHM6Ly9kYXJjZmxvdy5jb21dXHJcbiAqICBAYXV0aG9yICAgIEtvcm9waCA8eWprQG91dGxvb2suZnI+IHsoKzIyNSkwNzc4MzI5NTkyfVxyXG4gKiAgQHdlYnNpdGUgaHR0cDovL2tvcm9waC5zaXRlXHJcbiAqICBAbGluayAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Lb3JvcGhcclxuICogIEBsaWNlbnNlICAgQXBhY2hlIDIuMFxyXG4gKiAgQENvcHlyaWdodCAoYykgMjAyMS5cclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgQ29va2llIGZyb20gXCIuLi9jb21wb25lbnRzL0Nvb2tpZVwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRvZ2dsZUJ0blxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWVudVRvZ2dsZUNvbnRlbnQodG9nZ2xlQnRuKSB7XHJcblxyXG4gICAgaWYgKHRvZ2dsZUJ0bikge1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHN1Yk1lbnVUb2dnbGUodGhpcy5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxFbGVtZW50fSBlbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1Yk1lbnVUb2dnbGUoZWwpIHtcclxuICAgIGlmIChlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpXHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbHNlIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fEVsZW1lbnR9IGVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VTdWJNZW51Q29udGVudElmT3BlbihlbCkge1xyXG4gICAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IGJ0blRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdraC1hcHAtYm9keS1uYXYtYmFyLXRvZ2dsZS1tZW51LWJ0bicpLFxyXG4gICAgICAgIHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2gtYXBwJyksXHJcbiAgICAgICAgY2xhc3NOYW1lID0gJ25hdi1iYXItc21hbGwnLFxyXG4gICAgICAgIHF1ZXJ5ID0gXCIobWF4LXdpZHRoOjgwMHB4KVwiO1xyXG5cclxuICAgIGlmIChtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKSB7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgQ29va2llLnNldENvb2tpZShcIl92aXN1YWxfc2lkZV9iYXJfc3RhdGVcIiwgXCJuYXYtYmFyLXNtYWxsXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidG5Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2lkZUJhclNob3dBbmRIaWRkZW4oc2lkZUJhcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXRjaE1lZGlhKHF1ZXJ5KS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIENvb2tpZS5zZXRDb29raWUoXCJfdmlzdWFsX3NpZGVfYmFyX3N0YXRlXCIsIFwibmF2LWJhci1zbWFsbFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgQ29va2llLnNldENvb2tpZShcIl92aXN1YWxfc2lkZV9iYXJfc3RhdGVcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhcHBCYXJcclxuICovXHJcbmZ1bmN0aW9uIHNpZGVCYXJTaG93QW5kSGlkZGVuKGFwcEJhcikge1xyXG4gICAgaWYgKGFwcEJhci5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1iYXItc21hbGwnKSkge1xyXG4gICAgICAgIENvb2tpZS5zZXRDb29raWUoXCJfdmlzdWFsX3NpZGVfYmFyX3N0YXRlXCIsIFwiXCIpO1xyXG4gICAgICAgIGFwcEJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtYmFyLXNtYWxsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwcEJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyLXNtYWxsJyk7XHJcbiAgICAgICAgQ29va2llLnNldENvb2tpZShcIl92aXN1YWxfc2lkZV9iYXJfc3RhdGVcIiwgXCJuYXYtYmFyLXNtYWxsXCIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dpdGNoVmFsdWVUb2dnbGUoKXtcclxuICAgIGNvbnN0IGZpZWxkcz1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdraC1zd2l0Y2gtZmllbGQnKTtcclxuXHJcbiAgICBpZiAoZmllbGRzLmxlbmd0aCl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmllbGRzLml0ZW0oaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja2VkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlPXRoaXMuZGF0YXNldC5vbjtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlPXRoaXMuZGF0YXNldC5vZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qXHJcbiAqICBAY29tcGFueSBEYXJjRmxvdyBkZXNpZ24gW2h0dHBzOi8vZGFyY2Zsb3cuY29tXVxyXG4gKiAgQGF1dGhvciAgICBLb3JvcGggPHlqa0BvdXRsb29rLmZyPiB7KCsyMjUpMDc3ODMyOTU5Mn1cclxuICogIEB3ZWJzaXRlIGh0dHA6Ly9rb3JvcGguc2l0ZVxyXG4gKiAgQGxpbmsgICAgICBodHRwczovL2dpdGh1Yi5jb20vS29yb3BoXHJcbiAqICBAbGljZW5zZSAgIEFwYWNoZSAyLjBcclxuICogIEBDb3B5cmlnaHQgKGMpIDIwMjEuXHJcbiAqXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9BbGVydERpYWxvZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEluVGFibGUoKSB7XHJcbiAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRleC12aWV3LWJvZHktc2VhcmNoLWZpZWxkJyksXHJcbiAgICAgICAgdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdraC10LXJvdycpO1xyXG5cclxuICAgIGlmIChpbnB1dFNlYXJjaCkge1xyXG4gICAgICAgIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbGV0IF9zZWFyY2hfdGV4dCA9IGUudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2tleXMgPSB0cltpXS5kYXRhc2V0LmtleXMuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX2tleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJbaV0uZGF0YXNldFtfa2V5c1tqXV0udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKF9zZWFyY2hfdGV4dCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcInRhYmxlLXJvd1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKmlmIChfc3RyLmluZGV4T2YoZS50YXJnZXQudmFsdWUudG9TdHJpbmcoKS50cmltKCkudG9Mb2NhbGVMb3dlckNhc2UoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95SXRlbUV2ZW50KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkZXN0cm95SXRlbUV2ZW50KCkge1xyXG4gICAgY29uc3QgX2J0bl9pdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzdHJveS1pdGVtJyksXHJcbiAgICAgICAgX2FsZXJ0ID0gbmV3IEFsZXJ0RGlhbG9nKCk7XHJcbiAgICBfYWxlcnQuaGVhZGVyID0gXCJzdXBwcmVzc2lvblwiO1xyXG5cclxuICAgIF9hbGVydC55ZXMgPSBcIk91aVwiO1xyXG4gICAgX2FsZXJ0Lm5vID0gXCJOb25cIjtcclxuICAgIF9hbGVydC50eXBlID0gXCJkXCI7XHJcbiAgICBpZiAoX2J0bl9pdGVtLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2J0bl9pdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9idG5faXRlbS5pdGVtKGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkYXRhLW1lc3NhZ2UnKSlcclxuICAgICAgICAgICAgICAgICAgICBfYWxlcnQuc2V0TWVzc2FnZSA9IHRoaXMuZGF0YXNldC5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBfYWxlcnQuc2V0TWVzc2FnZSA9IFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGRvbm7DqWUgP1wiO1xyXG4gICAgICAgICAgICAgICAgX2FsZXJ0LnNob3coKS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjY291bnRSZXNlYXJjaCgpe1xyXG4gICAgY29uc3QgaW5wdXRTZWFyY2g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50LXNlYXJjaC1maWVsZFwiKSxcclxuICAgICAgICAgICBidG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50LXNlYXJjaC1idXR0b25cIiksXHJcbiAgICAgICAgICAgdXNlcm5hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX25hbWVcIiksXHJcbiAgICAgICAgICAgdXNlck1hdHJpY3VsZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfbWF0cmljdWxlXCIpLFxyXG4gICAgICAgICAgIG1hdHJpY3VsZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9tYXRyaWN1bGVcIik7XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VsY29tZU1vZGFsQ2xvc2VBY3Rpb24oKXtcclxuICAgIGNvbnN0IHdlbGNvbWVfbWVzc2FnZV9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZS1tZXNzYWdlJyksXHJcbiAgICAgICAgd2VsY29tZV9tZXNzYWdlX2J0bl9jbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lLW1lc3NhZ2UtY2xvc2UnKTtcclxuXHJcbiAgICBpZiAod2VsY29tZV9tZXNzYWdlX2NvbnRhaW5lciAmJiB3ZWxjb21lX21lc3NhZ2VfYnRuX2Nsb3NlKSB7XHJcblxyXG4gICAgICAgIHdlbGNvbWVfbWVzc2FnZV9idG5fY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdlbGNvbWVfbWVzc2FnZV9jb250YWluZXIuc3R5bGUubGVmdCA9IFwiLTEwMCVcIjtcclxuICAgICAgICAgICAgd2VsY29tZV9tZXNzYWdlX2NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMXMgZWFzZS1vdXRcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgd2VsY29tZV9tZXNzYWdlX2NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCItMTAwJVwiO1xyXG4gICAgICAgICAgICB3ZWxjb21lX21lc3NhZ2VfY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImxlZnQgMXMgZWFzZS1vdXRcIjtcclxuICAgICAgICB9LDEwMDAwKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiJCIsImpRdWVyeSIsInJlcXVpcmUiLCJlIiwiYXhpb3MiLCJBbGVydERpYWxvZyIsInRyYW5zSWQiLCJUUkFOUyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ5ZXNPbmx5IiwidHlwZSIsInZhbHVlIiwibWFzc2FnZSIsImhlYWRlciIsImluY2x1ZGVzIiwiY29uc29sZSIsImVycm9yIiwieWVzIiwibm8iLCJkaXZFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJhbGVydERpYWxvZ0RPTSIsImFwcGVuZCIsImFsZXJ0RGlhbG9nQnV0dG9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkJVVFRPTl9DT1VOVCIsImxlbmd0aCIsImkiLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImdldEhlYWRlckNsYXNzTmFtZSIsImdldEhlYWRlckljb25DbGFzc05hbWUiLCJDaGVja2JveEdyb3VwIiwiZ3JvdXBzIiwicGFyZW50RmllbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNoaWxkcmVuIiwibGFzdEVsZW1lbnRDaGlsZCIsImRhdGFzZXQiLCJ0YXJnZXQiLCJjaGVja2VkUGFyZW50RmllbGQiLCJ1cGRhdGVDaGVja2JveFZhbHVlIiwic2VsZWN0QWxsRmllbGQiLCJzaG93RmllbGQiLCJnZXRTaG93RmllbGQiLCJqIiwiZXZlbnQiLCJjaGVja2VkIiwiaW5kZXhPZiIsImgiLCJrIiwiX2lzIiwiQ2hpcEJ1aWxkZXIiLCJfQUREX0VWRU5UX0NISVAiLCJfUkVNT1ZFX0VWRU5UX0NISVAiLCJjaGlwQ29udGFpbmVySXRlbSIsImJ1aWxkIiwidGFnQ29udGVudCIsImNvbnRhaW5lciIsImJhc2VDb250YWluZXIiLCJ0YWdDb250YWluZXIiLCJpbnB1dENvbnRhaW5lciIsInNlYXJjaENvbnRhaW5lciIsIl9pbnB1dCIsIl9oaWRkZW5fZmllbGQiLCJkYXRhU2VhcmNoIiwiSlNPTiIsInBhcnNlIiwic2VhcmNoYWJsZSIsInJlcXVpcmVkIiwibXVsdGlwbGUiLCJkYXRhSW5pdCIsImluaXQiLCJkYXRhIiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJhdXRvZm9jdXMiLCJmb2N1cyIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfbm90TXVsdGlwbGVDaGlwIiwic2VhcmNoVmlldyIsImFkZENoaXBJdGVtV2hlblByZXNzRW50ZXIiLCJpbml0Q2hpcCIsInN0cmluZ2lmeSIsIl90YWdWYWx1ZSIsInRhZ0l0ZW0iLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJ0YWciLCJiaW5kIiwicHVzaCIsImlucHV0QWN0aW9uIiwidGFnVmFsdWUiLCJfdGFnSXRlbSIsIm9uY2xpY2siLCJwcmV2ZW50U2Nyb2xsIiwidG9TdHJpbmciLCJ0cmltIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiY2FsbCIsImNoaWxkRWxlbWVudENvdW50IiwiaGFzQXR0cmlidXRlIiwiZmlsdGVyIiwibWFwIiwiX3RhZyIsInNlYXJjaEl0ZW0iLCJfdGhpcyIsImRpc2FibGVkIiwibGFiZWwiLCJfaXRlbSIsIl9idXR0b24iLCJfdGV4dCIsInRhYkluZGV4IiwiQ29va2llIiwiZXhwaXJlIiwiX2RhdGUiLCJEYXRlIiwic3RyX3BhdGgiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInN0cl9leHBpcmUiLCJ0b1VUQ1N0cmluZyIsImNvb2tpZSIsIl92YWx1ZSIsImNvb2tpZVJhdyIsInNwbGl0IiwiX25hbWUiLCJzdWJzdHJpbmciLCJLaENvb2tpZSIsImdldENvb2tpZSIsIkltYWdlTG9hZGVyIiwicGF0dGVybiIsIl9wYXR0ZXJuIiwiX2NsYXNzTmFtZSIsIl9lbGVtZW50cyIsIklOUFVUX0ZJTEUiLCJJTUciLCJTVkdfQ09OVEFJTkVSIiwic2V0QXR0cmlidXRlIiwiY2xpY2siLCJkaXNwbGF5IiwicGFkZGluZyIsImRhdGFJbWdSZWFkZXIiLCJsb2ciLCJpbWciLCJzdmciLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiX2V2ZW50Iiwic3JjIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImZpbGVzIiwiQ2hhcnQiLCJyZWdpc3RlcmFibGVzIiwicmVnaXN0ZXIiLCJLaENoYXJ0IiwiY2hhcnRJdGVtQ29udGVudCIsIl9kYXRhIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhc2VDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwidmFsdWVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwib25DbGljayIsImNvbnRleHQiLCJfYWxlcnQiLCJpbmRleCIsInNob3ciLCJUYWJCYXIiLCJ0YWJzIiwidGFiIiwidGFiSXRlbSIsInRhYkJ0biIsIlRBQl9LRVkiLCJpbml0VGFiQmFyIiwidGFiQmFyQWN0aW9uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImluaXRLZXkiLCJnZXRJdGVtIiwibWFzayIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRUaW1lb3V0IiwiQlROX0FDVElWRSIsIkNPTlRFTlRfQUNUSVZFIiwib2xkQnRuIiwib2xkQ29udGVudCIsImNvbnRhaW5zIiwiU1ZHX0FERCIsIlNWR19ERUxFVEUiLCJTVkdfRk9MREVSIiwiU1ZHX0ZPTERFUl9BREQiLCJTVkdfRk9MREVSX0RFTEVURSIsIlNWR19TQVZFIiwiU1ZHX1dBUk5JTkciLCJjb25maWciLCJLaE1lZGlhU3RvcmUiLCJJTlBVVF9GSUxFX05BTUUiLCJESVJFQ1RPUllfSUQiLCJESVJFQ1RPUllfTkFNRSIsIkNMQVNTX05BTUUiLCJraE1lZGlhU3RvcmVCb2R5Iiwic3ViQm9keSIsIm1lZGlhU3RvcmVMaXN0Iiwidmlld0VtcHR5IiwiY29udGVudCIsInN1YldvcmQiLCJ3b3JkIiwiYmFzZSIsInJvb3QiLCJraFZpZXciLCJfZW1wdHlWaWV3IiwiZmlsZSIsImdldCIsInByZWZpeCIsInRoZW4iLCJyZXNwb25zZSIsImxvYWRlckNvbnRhaW5lciIsImtoTG9hZERhdGEiLCJ3aWR0aCIsImhlaWdodCIsImlzIiwiZGl2IiwiZm9sZGVyTmFtZSIsImJ1dHRvbiIsImluc2VydEFkamFjZW50SFRNTCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJsaXN0X2l0ZW1fYWRkIiwicmVtb3ZlQXR0cmlidXRlIiwiaXNNYXNrIiwibWVkaWFMaXN0IiwibWVkaWFMaXN0SGVhZGVyIiwia2hBbGVydCIsIm1hc2tMb2FkZXIiLCJjYXRhbG9nIiwibWVkaWFTdG9yZUxpc3RJdGVtIiwidXJsIiwidGl0bGUiLCJjcmVhdGVkIiwiY3JlYXRlZF9hdCIsInNlbGVjdGVkIiwiaW1hZ2VMaXNJdGVtSXNTZWxlY3RlZCIsImZvbGRlclNWRyIsImZvbGRlckhlYWRlciIsImJ0bkZvbGRlclJlbW92ZSIsIm1lZGlhU3RvcmVMaXN0QWRkIiwicGFyZW50Iiwic2V0TWVzc2FnZSIsInJlcCIsInRyYW5zaXRpb24iLCJyZW1vdmVfZm9sZGVyIiwicmVwbGFjZSIsIl9pZCIsInBhcnNlSW50IiwiaXNOYU4iLCJfcGxhY2Vob2xkZXIiLCJfaW1hZ2VQbGFjZWhvbGRlciIsImRhdGVGb3JtYXQiLCJkYXRlIiwibGFzdEluZGV4T2YiLCJfdHlwZSIsIm9uZXJyb3IiLCJldiIsInN0b3BQcm9wYWdhdGlvbiIsImJ1dHRvblNhdmUiLCJyZW1vdmVfZmlsZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJhY3RpdmF0ZWQiLCJhZGRTVkciLCJvbmNoYW5nZSIsIm1lZGlhU3RvcmVUYW1wb24iLCJpbnNlcnRCZWZvcmUiLCJsaXN0SXRlbUFkZElzRW5hYmxlIiwiY2xlYXJCdG4iLCJwcm9ncmVzc0JhciIsImtoQmFzZSIsImFkZEZpbGVSZXF1ZXN0Iiwic291cmNlIiwiY2FuY2VsIiwiQ2FuY2VsVG9rZW4iLCJwb3N0IiwiYWRkX2ZpbGUiLCJkYXRhU2VuZCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwicGVyY2VudCIsImxvYWRlZCIsInRvdGFsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImRhdGFSZXNwIiwicmVwbGFjZVdpdGgiLCJoZWFkZXJDb250YWluZXIiLCJidG5BZGRGb2xkZXIiLCJzaXplX2NvbnRhaW5lciIsImlucHV0IiwiZGVmYXVsdF9zaXplIiwib25rZXlkb3duIiwiUmVnRXhwIiwidXNlckFkZEZvbGRlclJlcXVlc3QiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiYWRkRm9sZGVyUmVxdWVzdCIsImFkZF9mb2xkZXIiLCJmb2xkZXIiLCJsaXN0RGlzYWJsZWQiLCJmaXJzdENoaWxkIiwiYnV0dG9uQWRkRm9sZGVyIiwibG9hZGVyIiwibWVkaWFCdXR0b25DbG9zZSIsInZpZXdUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlbG9hZCIsImZvbGRlckFkZEl0ZW0iLCJsb2NhdGlvbiIsImltZ19jbGFzcyIsImlucHV0X2lkIiwib3Blbk1lZGlhU3RvcmUiLCJnZXRVVENEYXRlIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsIlNWR19BRERfRk9MREVSIiwiU1ZHX0VYQ0VMIiwiU1ZHX1RFWFQiLCJTVkdfUERGIiwiU1ZHX1BERl8iLCJTVkdfV09SRCIsIkZMQUdfQ19SIiwiRkxBR19FTiIsIkZMQUdfRlIiLCJGTEFHX0dFUiIsIkZMQUdfSF9SIiwiRkxBR19NIiwiRkxBR19QX1IiLCJGTEFHX1BfVCIsIlNFQVJDSF9JQ09OIiwiS0hTZWxlY3QiLCJxdWVyeSIsIm1hdGNoTWVkaWEiLCJiaW5kQWN0aW9uIiwiY2xvc2VNb2RlbEdsb2JhbCIsIkVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJjdXN0b21CdWlsZGVyIiwiYmluZFdpdGhDbGFzc05hbWUiLCJlbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwia2hCb2R5Iiwic2VsZWN0TW9kYWxJc0Nsb3NlIiwic2VsZWN0Iiwia2hMYWJlbCIsImtoSWNvbiIsImNvbnRhaW5lcl9pdGVtIiwic2VsZWN0ZWRWaWV3Iiwia2hEYXRhIiwic2VsZWN0RGF0YSIsImFwcGVuZENoaWxkIiwicGxhY2VIb2xkZXIiLCJtYXRjaGVzIiwib3BlblNlbGVjdCIsImlubmVyVGV4dCIsInNlbGVjdGVkSW5kZXgiLCJzZWxlY3RNb2RhbElzT3BlbiIsIk9iamVjdCIsImtleXMiLCJncm91cCIsIl9jcmVhdGVHcm91cEl0ZW0iLCJmb3JFYWNoIiwiY3JlYXRlVmljdHVhbFNlbGVjdEl0ZW0iLCJwYWRkaW5nTGVmdCIsInNlYXJjaEZpZWxkSW5wdXQiLCJpY29uIiwic2VsZWN0X3ZpZXdfaXRlbSIsIl9hZGRJY29uIiwibXVsdGlTZWxlY3RJdGVtIiwiY3RybEtleSIsIml0ZW1GaWxsIiwib2xkU2VsZWN0ZWQiLCJFdmVudCIsIm9wdGlvbiIsIl9GTEFHIiwiX0lDT04iLCJmbGFnIiwiX2NyZWF0ZUljb25JdGVtIiwiZ3JvdXBFbGVtZW50IiwiaW5uZXJIZWlnaHQiLCJwYWdlWSIsInBhZ2VZT2Zmc2V0Iiwib2Zmc2V0SGVpZ2h0IiwiYm90dG9tIiwidG9wIiwiZmxleERpcmVjdGlvbiIsInNwYW4iLCJyZW1vdmVDaGlsZCIsInNlYXJjaCIsInNlYXJjaF9jb250YWluZXIiLCJzZWFyY2hfaWNvbiIsImF1dG9jb21wbGV0ZSIsIm9uaW5wdXQiLCJzZWxlY3RGaWx0ZXIiLCJraFZhbHVlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJraEl0ZW0iLCJsYXN0Q2hpbGQiLCJfbmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsIm9wdGdyb3VwIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiSFRNTE9wdEdyb3VwRWxlbWVudCIsInRleHQiLCJ0YXJnZXRzIiwic3ViTWVudVRvZ2dsZUNvbnRlbnQiLCJjbG9zZVN1Yk1lbnVDb250ZW50SWZPcGVuIiwibWVudVRvZ2dsZSIsInN1Yk1lbnVUb2dnbGUiLCJzZWFyY2hJblRhYmxlIiwid2VsY29tZU1vZGFsQ2xvc2VBY3Rpb24iLCJLaFNlbGVjdCIsImludm9pY2VQcmludCIsInBhbmVsQWN0aW9uIiwic3dpdGNoVmFsdWVUb2dnbGUiLCJhY3RpdmVGaWVsZFBhcmVudCIsImNsb3NlQWxlcnRBY3Rpb24iLCJhY2NvdW50UmVzZWFyY2giLCJ0b2dnbGVCdG4iLCJzdGFydCIsImlucHV0U2VhcmNoIiwiYnRuIiwidXNlcm5hbWUiLCJ1c2VyTWF0cmljdWxlIiwibWF0cmljdWxlIiwiYWNjb3VudF90eXBlIiwiYWNjb3VudF9leGlzdF92aWV3IiwiYnRuU3VibWl0IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfbWF0cmljdWxlIiwidG9VcHBlckNhc2UiLCJyZXNldFZpZXciLCJsYXN0bmFtZSIsImZpcnN0bmFtZSIsImFjY291bnQiLCJzdWJtaXRCdXR0b25TdGF0ZSIsInNldFllc09ubHkiLCJzZXRIZWFkZXIiLCJpc0FjdGl2ZSIsIkFMRVJUX0NMT1NFIiwiY2xvc2VBbGVydCIsImlucHV0RmllbGQiLCJwYW5lbHMiLCJwYW5lbF9jb250ZW50Iiwic2libGluZ3MiLCJub25lIiwiY3NzIiwiRklFTERfTkFNRSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsIklORElDQVRPUiIsImJ0blByaW50Iiwidmlld1ByaW50IiwiY29udGVudFdpbmRvdyIsInByaW50IiwiZWwiLCJidG5Ub2dnbGUiLCJzaWRlQmFyIiwic2V0Q29va2llIiwic2lkZUJhclNob3dBbmRIaWRkZW4iLCJhcHBCYXIiLCJmaWVsZHMiLCJvbiIsIm9mZiIsInRyIiwiX3NlYXJjaF90ZXh0IiwiX2tleXMiLCJkZXN0cm95SXRlbUV2ZW50IiwiX2J0bl9pdGVtIiwibWVzc2FnZSIsInJlc3AiLCJzdWJtaXQiLCJ3ZWxjb21lX21lc3NhZ2VfY29udGFpbmVyIiwid2VsY29tZV9tZXNzYWdlX2J0bl9jbG9zZSIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9