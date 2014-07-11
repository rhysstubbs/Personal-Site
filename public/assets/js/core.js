//= require jquery-1.10.2.min.js

(function($) {

	$(document).on('ready', function() {

		page = new Page();

	});

	// ------------------------------------------------------------------------------------------------------
	// COMMON PAGE FUNCIONALITY

	Page = function()
	{
		// Collapsible menus
		// var mainMenu = new CollapsibleMenu($('#header .nav'));

		// Equal height groups
		// var heightGroups = new EqualHeightGroups();

		// Placeholder support in older browsers
		$('input, textarea').placeholder();
	}

	// ------------------------------------------------------------------------------------------------------
	// COLLAPSIBLE MENU

	CollapsibleMenu = function(wrap)
	{
		wrap.after('<span class="expand-btn" data-toggle-menu="'+wrap.selector+'"><i class="sprite expand-menu"></i></span>');
		$(document).on('click', '[data-toggle-menu]', $.proxy(CollapsibleMenu.prototype.toggle, this))
	}

	CollapsibleMenu.prototype.toggle = function(e)
	{
		$($(e.currentTarget).attr('data-toggle-menu')).toggleClass('open');
	}

	// ------------------------------------------------------------------------------------------------------
	// EQUAL HEIGHT GROUPS

	EqualHeightGroups = function(wrap, opts)
	{
		this.opts = $.extend({}, BannerSlideshow.defaults, opts || {});
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
				return $(this).outerHeight();
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

	// ------------------------------------------------------------------------------------------------------
	// FULL WIDTH BANNER SLIDESHOW

	BannerSlideshow = function(opts)
	{
		this.opts = $.extend(true, {}, BannerSlideshow.defaults, opts);
        this.wrap = opts.wrap;

        if (!this.wrap || !this.wrap.length) return;

        this.images = this.wrap.find(this.opts.selectors.images).eq(0);
        this.content = this.wrap.find(this.opts.selectors.content).eq(0);
        this.num = 0;
        this.count = 0;
        this.playing = false;
        this.timeoutId = null;
        this.pagination = null;
        this.nextLink = null;
        this.prevLink = null;

        if (!this.opts.wrap || !this.opts.wrap.length) return;

        this.init();
	}

	BannerSlideshow.defaults = {
		loop: true, // Whether it can loop back round to the beginning / end
		wrap: null, // The container element
		interval: 6000, // The length of time between slides
		fade: 800, // The duration of the fade effect
		play: true, // Whether to play straight away
		pauseAfterClick: true, // Whether to pause playing after a user interaction
		pagination: true, // If true, will render a pagination list inside the selector defined below
		nextPrev: false, // If true, will render next and previous links inside the selector defined below
		fixedHeight: true, // If true, container heights will be fixed to the highest slide within them
		centerContent: true, //  If true, will vertically center the content
		centerContentThreshold: 768, // The minimum height at which the slideshow will vertically center the content in it's wrap
		contentOffset: 0, // The vertical offset of the content, if centerContent is set to true
		selectors: {
			images: '.slide-images .slides', // The container for image slides (optional)
			content: '.slide-content .slides', // The container for content slides (optional)
			pagination: '', // The container for pagination
			nextPrev: '' // The container for next and previous links
		},
		slides: [] // Slide data objects. Object properties will be mapped to the elements by class name
	};

	/**
	 * Loop through configured slides and generate the HTML for them. There must be at least one slide on
	 * the page already, so it can be used as a template for the others.
	 *
	 * Class names are used to map slide objects to html elements
	 */
	BannerSlideshow.prototype.init = function()
	{
		var image = this.images.find('.slide').eq(0).attr('data-num', 0).addClass('active'), // template for image slides
			content = this.content.find('.slide').eq(0).attr('data-num', 0).addClass('active'), // template for content slides
			imagesHtml = this.images.html(), // html string of images
			contentHtml = this.content.html(); // html string of content

		for (var i = 0; i < this.opts.slides.length; i++) {

			var slide = this.opts.slides[i];

			if (this.images.length) {
				var $image = image.clone();
				$image.find('img').attr('src', slide.image);
				delete slide.image;
				for (var p in slide) {
					$image.find('.'+p).html(slide[p]);
				}
				imagesHtml += '<div class="slide" data-num="'+(i+1)+'">'+$image.html()+'</div>';
			}

			if (this.content.length) {
				var $content = content.clone();
				for (var p in slide) {
					if(slide[p] != '') {
						$content.find('.'+p).html(slide[p]);
					} else {
						$content.find('.'+p).remove();
					}
				}
				contentHtml += '<div class="slide" data-num="'+(i+1)+'">'+$content.html()+'</div>';
			}

		}

		if (this.images.length) {
			this.images.html(imagesHtml);
			this.count = this.images.find('.slide').length;
		}

		if (this.content.length) {
			this.content.html(contentHtml);
		}

		if (this.opts.play) this.play();
		if (this.opts.pagination) this.buildPagination();
		if (this.opts.nextPrev) this.buildNextPrev();

		// Change event
		this.wrap.on('slideshow.change', $.proxy(this.onChange, this));
		this.onChange(null, this.num);

		// Resize events
		$(window).on('load', $.proxy(this.onResize, this));
		this.wrap.imagesLoaded($.proxy(this.onResize, this));
		this.onResize();
		$(window).on('resize', $.proxy(this.onResize, this));

		this.wrap.on('click', '.slide', $.proxy(function(e) {
			if ($(e.target).is('a') || $(e.target).parents('a').length) return;
			if (this.opts.pauseAfterClick) this.pause();
			this.next();
			return false;
		}, this));
	}

	BannerSlideshow.prototype.play = function()
	{
		if (this.playing) return;
		this.playing = true;
		this.timeoutId = setTimeout($.proxy(this.next, this), this.opts.interval);
	}

	BannerSlideshow.prototype.pause = function()
	{
		if (!this.playing) return;
		this.playing = false;
		clearTimeout(this.timeoutId || null);
		this.timeoutId = null;
	}

	BannerSlideshow.prototype.goto = function(num)
	{
		if (num === this.num) return;

		this.gotoContent(num);
		this.gotoImage(num);
		this.num = num;
		clearTimeout(this.timeoutId || null);
		this.wrap.trigger('slideshow.change', [this.num, this]);

		if (this.playing) {
			this.timeoutId = setTimeout($.proxy(this.next, this), this.opts.interval);
		}
	}

	BannerSlideshow.prototype.next = function()
	{
		this.goto((this.num >= this.count-1) ? (this.opts.loop ? 0 : this.num) : this.num+1);
	}

	BannerSlideshow.prototype.prev = function()
	{
		this.goto((this.num <= 0) ? (this.opts.loop ? this.count-1 : this.num) : this.num-1);
	}

	BannerSlideshow.prototype.gotoContent = function(num)
	{
		if (!this.content.length) return;

		// Deactivate any old slides
		this.content.find('.slide.active')
		.css({ visibility:'visible' })
		.animate({ opacity:0 }, { duration:(this.opts.fade || 0), queue:false });

		// Animate the new slide in over the old one
		clearTimeout(this.fadeTimeout || null);

		this.fadeTimeout = setTimeout($.proxy(function() {

			this.content.find('.slide.active').removeClass('active');

			this.content.find('.slide[data-num="'+num+'"]')
			.appendTo(this.content)
			.addClass('active')
			.css({ visibility:'visible', opacity:0 })
			.animate({ opacity:1 }, { duration:(this.opts.fade || 0), queue:false });

		}, this), Math.max(Math.round(this.opts.fade / 2), 0));
		
	}

	BannerSlideshow.prototype.gotoImage = function(num)
	{
		if (!this.images.length) return;

		// Deactivate any old slides
		this.images.find('.slide.active').removeClass('active').css({ visibility:'visible', opacity:1 });

		// Animate the new slide in over the old one
		this.images.find('.slide[data-num="'+num+'"]')
		.appendTo(this.images)
		.addClass('active')
		.css({ visibility:'visible', opacity:0 })
		.animate({ opacity:1 }, { duration:(this.opts.fade || 0), queue:false });
	}

	BannerSlideshow.prototype.buildPagination = function(num)
	{
		if (!this.opts.pagination || this.pagination != null) {
			return;
		}

		var html = '<nav class="pagination"><div class="wrap"><ul>';
		for (var i = 0; i < this.count; i++) {
			html += '<li data-num="'+i+'"><span>'+(i+1)+'</span></li>';
		}
		html += '</ul></div></nav>';

		if (this.opts.selectors.pagination) {
			this.wrap.find(this.opts.selectors.pagination).append(html);
		} else {
			this.wrap.append(html);
		}
		
		this.pagination = this.wrap.find('.pagination');

		this.wrap.on('click', '.pagination span', $.proxy(function(e) {
			if (this.opts.pauseAfterClick) this.pause();
			this.goto($(e.target).parents('[data-num]:eq(0)').attr('data-num') || 0);
		}, this));
	}

	BannerSlideshow.prototype.buildNextPrev = function(num)
	{
		if (!this.opts.nextPrev || (this.nextLink != null && this.prevLink != null)) return;

		var html = 
		'<a href="javascript:void(\'Next Slide\')" class="next-slide"><span>Next</span></a>' +
		'<a href="javascript:void(\'Previous Slide\')" class="prev-slide"><span>Prev</span></a>';

		if (this.opts.selectors.nextPrev) {
			this.wrap.find(this.opts.selectors.nextPrev).append(html);
		} else {
			this.wrap.append(html);
		}

		this.nextLink = this.wrap.find('.next-slide');
		this.prevLink = this.wrap.find('.prev-slide');
		this.wrap.on('click', '.next-slide', $.proxy(function() {
			if (this.opts.pauseAfterClick) this.pause();
			this.next();
			return false;
		}, this));
		this.wrap.on('click', '.prev-slide', $.proxy(function() {
			if (this.opts.pauseAfterClick) this.pause();
			this.prev();
			return false;
		}, this));
	}

	BannerSlideshow.prototype.onChange = function(evt, num)
	{
		// Update next and previous links
		if (this.opts.nextPrev && !this.opts.loop) {
			if (num < this.count-1) {
				this.nextLink.removeClass('disabled');
			} else {
				this.nextLink.addClass('disabled');
			}

			if (num > 0) {
				this.prevLink.removeClass('disabled');
			} else {
				this.prevLink.addClass('disabled');
			}
		}

		// Update pagination
		if (this.opts.pagination) {
			this.pagination.find('[data-num]').removeClass('on').filter('[data-num="'+num+'"]').addClass('on');
		}
	}

	BannerSlideshow.prototype.fixHeight = function()
	{
		var centerContent = this.opts.centerContent,
			contentOffset = this.opts.contentOffset,
			fixedHeight = this.opts.fixedHeight,
			contentWrap = this.content.css('margin-top', 0).height('auto'),
			slides = contentWrap.find('.slide').css('margin-top', 0).height('auto'),
			wrapHeight = this.wrap.height(),
			heights = [];

		if (contentWrap.length) {
			var contentHeight = 0;
			slides.each($.proxy(function(i, el) {
				var h = heights[i] = $(el).outerHeight();
				if (h > contentHeight) contentHeight = h;
				if (centerContent && !fixedHeight && this.viewportWidth >= this.opts.centerContentThreshold) {
					$(el).css('margin-top', Math.max(Math.round((wrapHeight - h) / 2) + contentOffset, 0));
				}
			}, this));
			if (fixedHeight) {
				contentWrap.height(contentHeight);
				if (centerContent) {
					if (this.viewportWidth >= this.opts.centerContentThreshold) {
						contentWrap.css('margin-top', Math.max(Math.round((wrapHeight - contentHeight) / 2) + contentOffset, 0));
					}
					slides.each(function(i, el) {
						$(el).css('margin-top', Math.max(Math.round((contentHeight - heights[i]) / 2), 0));
					});
				}
			}
		}

		if (this.images.length) {
			var imageHeight = 0;
			this.images.find('.slide').each(function(i) {
				var h = $(this).outerHeight();
				if (h > imageHeight) imageHeight = h;
			});
			if (this.opts.fixedHeight) this.images.height(imageHeight);
		}
	}

	BannerSlideshow.prototype.onResize = function()
	{
		if (this.throttleResize == true) {
			this.resizeAttempts++;
			return;
		}

		this.viewportWidth = $(window).width() + $.scrollbarWidth();
		this.fixHeight();

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
