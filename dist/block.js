!function(e){var t={};function n(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(l,c,function(t){return e[t]}.bind(null,c));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_js__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz8zNzAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3NpZGViYXIuanMnOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/YWVkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n")},function(module,exports){eval('function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar _wp$editPost = wp.editPost,\n    PluginSidebar = _wp$editPost.PluginSidebar,\n    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl,\n    TextareaControl = _wp$components.TextareaControl;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar withSelect = wp.data.withSelect;\nvar registerPlugin = wp.plugins.registerPlugin;\nvar addAction = wp.hooks.addAction;\n\nvar NofmMetadata =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NofmMetadata, _Component);\n\n  function NofmMetadata(props) {\n    var _this;\n\n    _classCallCheck(this, NofmMetadata);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(NofmMetadata).call(this, props));\n    _this.handleInputValue = _this.handleInputValue.bind(_assertThisInitialized(_this));\n    _this.state = {\n      _id_youtube: {\n        key: \'\',\n        value: \'\'\n      },\n      _id_vimeo: {\n        key: \'\',\n        value: \'\'\n      },\n      _is_featured: {\n        key: \'_is_featured\',\n        value: true\n      }\n    };\n    wp.apiFetch({\n      path: "/wp/v2/posts/".concat(_this.props.postId),\n      method: \'GET\'\n    }).then(function (data) {\n      // console.log(data.meta._is_featured.length);\n      _this.setState({\n        _id_youtube: {\n          key: \'_id_youtube\',\n          value: data.meta._id_youtube\n        },\n        _id_vimeo: {\n          key: \'_id_vimeo\',\n          value: data.meta._id_vimeo\n        },\n        _is_featured: {\n          key: \'_is_featured\',\n          value: data.meta._is_featured.length === 0 ? false : data.meta._is_featured\n        }\n      });\n\n      return data;\n    }).catch(function (error) {\n      return console.error(error);\n    });\n    return _this;\n  } //end constructor\n\n\n  _createClass(NofmMetadata, [{\n    key: "render",\n    //end get derived state from props\n    value: function render() {\n      // console.log(this.state);\n      return wp.element.createElement(Fragment, null, wp.element.createElement(PluginSidebarMoreMenuItem, {\n        target: "nofm-metadata-sidebar"\n      }, __(\'NoFm Metadata\')), wp.element.createElement(PluginSidebar, {\n        name: "nofm-metadata-sidebar",\n        title: __(\'Nofm Metadata\')\n      }, wp.element.createElement(PanelBody, null, wp.element.createElement("label", {\n        "for": "_id_youtbe"\n      }, "Id de Youtube"), wp.element.createElement("br", null), wp.element.createElement("input", {\n        type: "text",\n        name: "_id_youtube",\n        value: this.state._id_youtube.value,\n        onChange: this.handleInputValue\n      }), wp.element.createElement("br", null), wp.element.createElement("label", {\n        "for": "_id_vimeo"\n      }, "Id de Vimeo"), wp.element.createElement("br", null), wp.element.createElement("input", {\n        type: "text",\n        name: "_id_vimeo",\n        value: this.state._id_vimeo.value,\n        onChange: this.handleInputValue\n      }), wp.element.createElement("br", null), wp.element.createElement("label", {\n        "for": "_is_featured"\n      }, "Featured post"), wp.element.createElement("br", null), wp.element.createElement("input", {\n        type: "checkbox",\n        name: "_is_featured",\n        value: this.state._is_featured.value,\n        onChange: this.handleInputValue,\n        checked: this.state._is_featured.value\n      }), wp.element.createElement("br", null))));\n    } //end render\n\n  }, {\n    key: "handleInputValue",\n    value: function handleInputValue(event) {\n      var target = event.target;\n      var value = target.type === \'checkbox\' ? target.checked : target.value;\n      var name = target.name;\n      var final_value = name != \'_is_featured\' ? value : !this.state._is_featured.value; // console.log(final_value);\n\n      this.setState(_defineProperty({}, name, {\n        key: name,\n        value: final_value\n      }));\n    } //end handle input value\n\n  }], [{\n    key: "getDerivedStateFromProps",\n    value: function getDerivedStateFromProps(nextProps, state) {\n      var state_arr = Object.values(state); // console.log(state_arr);\n\n      state_arr.map(function (object) {\n        // console.log(object);\n        if ((nextProps.isPublishing || nextProps.isSaving) && !nextProps.isAutoSaving) {\n          wp.apiRequest({\n            path: "/nofm/v2/update-meta?id=".concat(nextProps.postId),\n            method: \'POST\',\n            data: object\n          }).then(function (data) {\n            return data;\n          }, function (err) {\n            return err;\n          });\n        }\n      });\n    }\n  }]);\n\n  return NofmMetadata;\n}(Component); //End class\n\n\nvar HOC = withSelect(function (select, _ref) {\n  var forceIsSaving = _ref.forceIsSaving;\n\n  var _select = select(\'core/editor\'),\n      getCurrentPostId = _select.getCurrentPostId,\n      isSavingPost = _select.isSavingPost,\n      isPublishingPost = _select.isPublishingPost,\n      isAutosavingPost = _select.isAutosavingPost,\n      getEditedPostAttribute = _select.getEditedPostAttribute,\n      isTyping = _select.isTyping,\n      getPermalink = _select.getPermalink;\n\n  return {\n    postId: getCurrentPostId(),\n    isSaving: forceIsSaving || isSavingPost(),\n    isAutoSaving: isAutosavingPost(),\n    isPublishing: isPublishingPost(),\n    isTyping: isTyping()\n  };\n})(NofmMetadata);\nregisterPlugin(\'nofm-metadata\', {\n  icon: \'schedule\',\n  render: HOC\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaWRlYmFyLmpzPzBmYzgiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbi8qKlxuICogSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGVkaXRQb3N0ID0gd3AuZWRpdFBvc3QsXG4gICAgUGx1Z2luU2lkZWJhciA9IF93cCRlZGl0UG9zdC5QbHVnaW5TaWRlYmFyLFxuICAgIFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0gPSBfd3AkZWRpdFBvc3QuUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgVGV4dGFyZWFDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dGFyZWFDb250cm9sO1xudmFyIF93cCRlbGVtZW50ID0gd3AuZWxlbWVudCxcbiAgICBDb21wb25lbnQgPSBfd3AkZWxlbWVudC5Db21wb25lbnQsXG4gICAgRnJhZ21lbnQgPSBfd3AkZWxlbWVudC5GcmFnbWVudDtcbnZhciB3aXRoU2VsZWN0ID0gd3AuZGF0YS53aXRoU2VsZWN0O1xudmFyIHJlZ2lzdGVyUGx1Z2luID0gd3AucGx1Z2lucy5yZWdpc3RlclBsdWdpbjtcbnZhciBhZGRBY3Rpb24gPSB3cC5ob29rcy5hZGRBY3Rpb247XG5cbnZhciBOb2ZtTWV0YWRhdGEgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE5vZm1NZXRhZGF0YSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTm9mbU1ldGFkYXRhKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZm1NZXRhZGF0YSk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihOb2ZtTWV0YWRhdGEpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICBfdGhpcy5oYW5kbGVJbnB1dFZhbHVlID0gX3RoaXMuaGFuZGxlSW5wdXRWYWx1ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIF9pZF95b3V0dWJlOiB7XG4gICAgICAgIGtleTogJycsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcbiAgICAgIF9pZF92aW1lbzoge1xuICAgICAgICBrZXk6ICcnLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG4gICAgICBfaXNfZmVhdHVyZWQ6IHtcbiAgICAgICAga2V5OiAnX2lzX2ZlYXR1cmVkJyxcbiAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICAgIHdwLmFwaUZldGNoKHtcbiAgICAgIHBhdGg6IFwiL3dwL3YyL3Bvc3RzL1wiLmNvbmNhdChfdGhpcy5wcm9wcy5wb3N0SWQpLFxuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubWV0YS5faXNfZmVhdHVyZWQubGVuZ3RoKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgX2lkX3lvdXR1YmU6IHtcbiAgICAgICAgICBrZXk6ICdfaWRfeW91dHViZScsXG4gICAgICAgICAgdmFsdWU6IGRhdGEubWV0YS5faWRfeW91dHViZVxuICAgICAgICB9LFxuICAgICAgICBfaWRfdmltZW86IHtcbiAgICAgICAgICBrZXk6ICdfaWRfdmltZW8nLFxuICAgICAgICAgIHZhbHVlOiBkYXRhLm1ldGEuX2lkX3ZpbWVvXG4gICAgICAgIH0sXG4gICAgICAgIF9pc19mZWF0dXJlZDoge1xuICAgICAgICAgIGtleTogJ19pc19mZWF0dXJlZCcsXG4gICAgICAgICAgdmFsdWU6IGRhdGEubWV0YS5faXNfZmVhdHVyZWQubGVuZ3RoID09PSAwID8gZmFsc2UgOiBkYXRhLm1ldGEuX2lzX2ZlYXR1cmVkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH0gLy9lbmQgY29uc3RydWN0b3JcblxuXG4gIF9jcmVhdGVDbGFzcyhOb2ZtTWV0YWRhdGEsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIC8vZW5kIGdldCBkZXJpdmVkIHN0YXRlIGZyb20gcHJvcHNcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbSwge1xuICAgICAgICB0YXJnZXQ6IFwibm9mbS1tZXRhZGF0YS1zaWRlYmFyXCJcbiAgICAgIH0sIF9fKCdOb0ZtIE1ldGFkYXRhJykpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGx1Z2luU2lkZWJhciwge1xuICAgICAgICBuYW1lOiBcIm5vZm0tbWV0YWRhdGEtc2lkZWJhclwiLFxuICAgICAgICB0aXRsZTogX18oJ05vZm0gTWV0YWRhdGEnKVxuICAgICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQm9keSwgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge1xuICAgICAgICBcImZvclwiOiBcIl9pZF95b3V0YmVcIlxuICAgICAgfSwgXCJJZCBkZSBZb3V0dWJlXCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgbmFtZTogXCJfaWRfeW91dHViZVwiLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5faWRfeW91dHViZS52YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZVxuICAgICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XG4gICAgICAgIFwiZm9yXCI6IFwiX2lkX3ZpbWVvXCJcbiAgICAgIH0sIFwiSWQgZGUgVmltZW9cIiksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBuYW1lOiBcIl9pZF92aW1lb1wiLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5faWRfdmltZW8udmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVcbiAgICAgIH0pLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge1xuICAgICAgICBcImZvclwiOiBcIl9pc19mZWF0dXJlZFwiXG4gICAgICB9LCBcIkZlYXR1cmVkIHBvc3RcIiksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgbmFtZTogXCJfaXNfZmVhdHVyZWRcIixcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuX2lzX2ZlYXR1cmVkLnZhbHVlLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlLFxuICAgICAgICBjaGVja2VkOiB0aGlzLnN0YXRlLl9pc19mZWF0dXJlZC52YWx1ZVxuICAgICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKSkpO1xuICAgIH0gLy9lbmQgcmVuZGVyXG5cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVJbnB1dFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWUoZXZlbnQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB2YXIgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuICAgICAgdmFyIG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICAgIHZhciBmaW5hbF92YWx1ZSA9IG5hbWUgIT0gJ19pc19mZWF0dXJlZCcgPyB2YWx1ZSA6ICF0aGlzLnN0YXRlLl9pc19mZWF0dXJlZC52YWx1ZTsgLy8gY29uc29sZS5sb2coZmluYWxfdmFsdWUpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwge1xuICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgIHZhbHVlOiBmaW5hbF92YWx1ZVxuICAgICAgfSkpO1xuICAgIH0gLy9lbmQgaGFuZGxlIGlucHV0IHZhbHVlXG5cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBzdGF0ZSkge1xuICAgICAgdmFyIHN0YXRlX2FyciA9IE9iamVjdC52YWx1ZXMoc3RhdGUpOyAvLyBjb25zb2xlLmxvZyhzdGF0ZV9hcnIpO1xuXG4gICAgICBzdGF0ZV9hcnIubWFwKGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgICAgaWYgKChuZXh0UHJvcHMuaXNQdWJsaXNoaW5nIHx8IG5leHRQcm9wcy5pc1NhdmluZykgJiYgIW5leHRQcm9wcy5pc0F1dG9TYXZpbmcpIHtcbiAgICAgICAgICB3cC5hcGlSZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IFwiL25vZm0vdjIvdXBkYXRlLW1ldGE/aWQ9XCIuY29uY2F0KG5leHRQcm9wcy5wb3N0SWQpLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBvYmplY3RcbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm9mbU1ldGFkYXRhO1xufShDb21wb25lbnQpOyAvL0VuZCBjbGFzc1xuXG5cbnZhciBIT0MgPSB3aXRoU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QsIF9yZWYpIHtcbiAgdmFyIGZvcmNlSXNTYXZpbmcgPSBfcmVmLmZvcmNlSXNTYXZpbmc7XG5cbiAgdmFyIF9zZWxlY3QgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJyksXG4gICAgICBnZXRDdXJyZW50UG9zdElkID0gX3NlbGVjdC5nZXRDdXJyZW50UG9zdElkLFxuICAgICAgaXNTYXZpbmdQb3N0ID0gX3NlbGVjdC5pc1NhdmluZ1Bvc3QsXG4gICAgICBpc1B1Ymxpc2hpbmdQb3N0ID0gX3NlbGVjdC5pc1B1Ymxpc2hpbmdQb3N0LFxuICAgICAgaXNBdXRvc2F2aW5nUG9zdCA9IF9zZWxlY3QuaXNBdXRvc2F2aW5nUG9zdCxcbiAgICAgIGdldEVkaXRlZFBvc3RBdHRyaWJ1dGUgPSBfc2VsZWN0LmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUsXG4gICAgICBpc1R5cGluZyA9IF9zZWxlY3QuaXNUeXBpbmcsXG4gICAgICBnZXRQZXJtYWxpbmsgPSBfc2VsZWN0LmdldFBlcm1hbGluaztcblxuICByZXR1cm4ge1xuICAgIHBvc3RJZDogZ2V0Q3VycmVudFBvc3RJZCgpLFxuICAgIGlzU2F2aW5nOiBmb3JjZUlzU2F2aW5nIHx8IGlzU2F2aW5nUG9zdCgpLFxuICAgIGlzQXV0b1NhdmluZzogaXNBdXRvc2F2aW5nUG9zdCgpLFxuICAgIGlzUHVibGlzaGluZzogaXNQdWJsaXNoaW5nUG9zdCgpLFxuICAgIGlzVHlwaW5nOiBpc1R5cGluZygpXG4gIH07XG59KShOb2ZtTWV0YWRhdGEpO1xucmVnaXN0ZXJQbHVnaW4oJ25vZm0tbWV0YWRhdGEnLCB7XG4gIGljb246ICdzY2hlZHVsZScsXG4gIHJlbmRlcjogSE9DXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')}]);