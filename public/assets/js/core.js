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
