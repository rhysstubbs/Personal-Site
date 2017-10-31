/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//= require jquery-1.10.2.min.js

(function($) {

	$(document).on('ready', function() {

		window.page = new Page();

	});

	// ------------------------------------------------------------------------------------------------------
	// COMMON PAGE FUNCIONALITY

	Page = function()
	{
		// Equal height groups
		var heightGroups = new EqualHeightGroups();

		// Placeholder support in older browsers
		$('input, textarea').placeholder();

		// Form validation
		this.initValidation();
	}

	/**
	 * Form Validation using Parsley JS: http://parsleyjs.org/doc/index.html
	 */
	Page.prototype.initValidation = function()
	{
		// Validate all forms with the "validate" class
		$('form.validate').parsley({
			trigger: 'change', // Which event to trigger validation on
			errorClass: 'has-error', // Class when there are errors
			successClass: 'has-success', // Class for successful validation
			errorsMessagesDisabled: true, // Whether to add disable messages on each field
			trimValue: true, // Trim whitespace before validation
			validationThreshold: 3, // Minimum number of chars before validation will fire

			classHandler: function(field)
			{
				var tagName = (field.$element.prop('tagName') || '').toLowerCase();
				var type = (field.$element.attr('type') || '').toLowerCase();

				// Add feedback class and icons
				if (type != 'radio' && type != 'checkbox' && tagName != 'textarea') {
					field.$element.after(
						'<i class="fa fa-check form-control-feedback feedback-success" aria-hidden="true"></i>' +
						'<i class="fa fa-remove form-control-feedback feedback-error" aria-hidden="true"></i>'
					);
					field.$element.parents('.form-group').eq(0).addClass('has-feedback');
				}

				return field.$element.parents('.form-group').eq(0);
			},

			errorsContainer: function (field)
			{
				return field.$element.parents('.form-group').eq(0);
			}

		});
	}

	// ------------------------------------------------------------------------------------------------------
	// EQUAL HEIGHT GROUPS

	EqualHeightGroups = function(wrap, opts)
	{
		this.opts = $.extend({}, EqualHeightGroups.defaults, opts || {});
		this.wrap = wrap || $('body');
		
		if (!this.wrap.find('[data-height-group]').length) return;

		var groups = {};

		this.wrap.find('[data-height-group]').each(function() {

			var groupId = $(this).attr('data-height-group');
			if (groups.hasOwnProperty(groupId)) return;

			groups[groupId] = $('[data-height-group="'+groupId+'"]');

		});

		this.groups = groups;

		$(window).on('load resize', $.proxy(this.onResize, this));
		this.onResize();

	}

	EqualHeightGroups.defaults = {};

	EqualHeightGroups.prototype.processGroup = function(groupId)
	{
		var group = this.groups[groupId].height('auto'),
			lines = {};

		group.each(function(i, el) {
			var cPos = $(el).offset().top+'';
			if (!lines.hasOwnProperty(cPos)) lines[cPos] = [];
			lines[cPos].push(el);
		});

		for (var p in lines) {
			var line = $(lines[p]).map(function() { return $(this).toArray(); } );
			var maxHeight = Math.max.apply(null, line.map(function() {
				return $(this).height();
			}).get());
			line.height(maxHeight);
		}
	}

	EqualHeightGroups.prototype.onResize = function()
	{
		if (this.throttleResize == true) {
			this.resizeAttempts++;
			return;
		}

		for (var p in this.groups) {
			this.processGroup(p);
		}

		this.throttleResize = true;
		this.resizeAttempts = 0;
		clearTimeout(this.resizeTimeout || null);
		setTimeout($.proxy(function() {
			this.throttleResize = false;
			if (this.resizeAttempts > 0) {
				this.onResize();
			}
		}, this), 500);
	}

})(jQuery);


/***/ })
/******/ ]);