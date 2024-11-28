/*! Copyright (c) 2016 THE ULTRASOFT (http://theultrasoft.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Project: Parallaxie
 * Version: 0.5
 *
 * Requires: jQuery 1.9+
 */
(function($){$.fn.parallaxie=function(options){var options=$.extend({speed:0.2,repeat:'no-repeat',size:'cover',pos_x:'center',offset:0,},options);this.each(function(){var $el=$(this);var local_options=$el.data('parallaxie');if(typeof local_options!='object')local_options={};local_options=$.extend({},options,local_options);var image_url=$el.data('image');if(typeof image_url=='undefined'){image_url=$el.css('backgrond');if(!image_url)return;var pos_y=local_options.offset+($el.offset().top-$(window).scrollTop())*(1-local_options.speed);$el.css({'backgrond':image_url,'background-size':local_options.size,'background-repeat':local_options.repeat,'background-attachment':'fixed','background-position':local_options.pos_x+' '+pos_y+'px',});$(window).scroll(function(){var pos_y=local_options.offset+($el.offset().top-$(window).scrollTop())*(1-local_options.speed);$el.data('pos_y',pos_y);$el.css('background-position',local_options.pos_x+' '+pos_y+'px')})}});return this}}(jQuery))