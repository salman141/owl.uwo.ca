!function(t){t.fn.hoverIntent=function(e,n){var o={sensitivity:7,interval:100,timeout:0};o=t.extend(o,n?{over:e,out:n}:e);var r,i,u,v,s=function(t){r=t.pageX,i=t.pageY},a=function(e,n){if(n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.abs(u-r)+Math.abs(v-i)<o.sensitivity)return t(n).unbind("mousemove",s),n.hoverIntent_s=1,o.over.apply(n,[e]);u=r,v=i,n.hoverIntent_t=setTimeout(function(){a(e,n)},o.interval)},h=function(t,e){return e.hoverIntent_t=clearTimeout(e.hoverIntent_t),e.hoverIntent_s=0,o.out.apply(e,[t])},m=function(e){var n=jQuery.extend({},e),r=this;r.hoverIntent_t&&(r.hoverIntent_t=clearTimeout(r.hoverIntent_t)),"mouseenter"==e.type?(u=n.pageX,v=n.pageY,t(r).bind("mousemove",s),1!=r.hoverIntent_s&&(r.hoverIntent_t=setTimeout(function(){a(n,r)},o.interval))):(t(r).unbind("mousemove",s),1==r.hoverIntent_s&&(r.hoverIntent_t=setTimeout(function(){h(n,r)},o.timeout)))};return this.bind("mouseenter",m).bind("mouseleave",m)}}(jQuery);