function openNav(){var e=document.getElementById("navbar");"navbar"===e.className?(e.className+=" responsive",document.body.style.overflowY="hidden"):(e.className="navbar",document.body.style.overflowY="visible")}function check_if_in_view(){var e=$window.height(),t=$window.scrollTop(),o=t+e;$.each($animation_elements,function(){var e=$(this),n=e.outerHeight(),a=e.offset().top,i=a+n;i>=t&&a<=o&&e.addClass("in-view")}),$.each($quote_mark,function(){var e=$(this),n=e.outerHeight(),a=e.offset().top,i=a+n;i>=t&&a<=o&&e.addClass("jiggle")}),$.each($hello_animate,function(){var e=$(this),n=e.outerHeight(),a=e.offset().top,i=a+n;i>=t&&a<=o&&e.addClass("jiggle")})}var button=document.querySelector(".menu-toggle");button.addEventListener("click",function(){button.classList.toggle("menu-toggle-open")}),$(".menu-toggle").click(function(){$(this).toggleClass("menu-toggle-rotate")}),$(".smooth-scroll").on("click",function(e){e.preventDefault();var t=$(this).data("scrollTo");$("html, body").animate({scrollTop:$(t).offset().top},650)});var $animation_elements=$(".animation-element"),$quote_mark=$(".quote-icon"),$hello_animate=$(".hello-animation"),$window=$(window);$window.on("scroll resize",check_if_in_view),$window.trigger("scroll"),$(".kiss-slider").kissSlider({paginationSelector:".kiss-pagination",autoscrollDelay:5e3});var today=new Date,year=today.getFullYear(),est=new Date("Sep 8, 2011 12:43:59"),difference=today.getTime()-est.getTime();difference/=315569e5;var elMsg=document.getElementById("myExperience");elMsg.textContent=Math.floor(difference)+" years";var el=document.getElementById("copyright");el.innerHTML='<p property="dc:rights">&copy;<span property="dc:dateCopyrighted"> 2013-'+year+'<span property="dc:publisher"> anuar Bolatov</span></p>';var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],elDate=document.getElementById("todaysDate");elDate.innerHTML=monthNames[today.getMonth()]+"<span>&nbsp;<span>"+year,$(".btn").on("mouseenter",function(e){var t=$(this).offset(),o=e.pageX-t.left,n=e.pageY-t.top;$(this).find("span").css({top:n,left:o})}).on("mouseout",function(e){var t=$(this).offset(),o=e.pageX-t.left,n=e.pageY-t.top;$(this).find("span").css({top:n,left:o})}),$(function(){$("#form").parsley().on("field:validated",function(){var e=0===$(".parsley-error").length;$(".bs-callout-info").toggleClass("hidden",!e),$(".bs-callout-warning").toggleClass("hidden",e)}).on("form:submit",function(){return!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJvcGVuTmF2IiwieCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc05hbWUiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJjaGVja19pZl9pbl92aWV3Iiwid2luZG93X2hlaWdodCIsIiR3aW5kb3ciLCJoZWlnaHQiLCJ3aW5kb3dfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwid2luZG93X2JvdHRvbV9wb3NpdGlvbiIsIiQiLCJlYWNoIiwiJGFuaW1hdGlvbl9lbGVtZW50cyIsIiRlbGVtZW50IiwidGhpcyIsImVsZW1lbnRfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJlbGVtZW50X3RvcF9wb3NpdGlvbiIsIm9mZnNldCIsInRvcCIsImVsZW1lbnRfYm90dG9tX3Bvc2l0aW9uIiwiYWRkQ2xhc3MiLCIkcXVvdGVfbWFyayIsIiRoZWxsb19hbmltYXRlIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGF0YSIsImFuaW1hdGUiLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwia2lzc1NsaWRlciIsInBhZ2luYXRpb25TZWxlY3RvciIsImF1dG9zY3JvbGxEZWxheSIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImVzdCIsImRpZmZlcmVuY2UiLCJnZXRUaW1lIiwiZWxNc2ciLCJ0ZXh0Q29udGVudCIsIk1hdGgiLCJmbG9vciIsImVsIiwiaW5uZXJIVE1MIiwibW9udGhOYW1lcyIsImVsRGF0ZSIsImdldE1vbnRoIiwiZSIsInBhcmVudE9mZnNldCIsInJlbFgiLCJwYWdlWCIsImxlZnQiLCJyZWxZIiwicGFnZVkiLCJmaW5kIiwiY3NzIiwicGFyc2xleSIsIm9rIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFB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LFNBQ3ZCMEMsRUFBT0YsRUFBRUcsTUFBUUYsRUFBYUcsS0FDOUJDLEVBQU9MLEVBQUVNLE1BQVFMLEVBQWF4QyxHQUNsQ1QsR0FBRUksTUFBTW1ELEtBQUssUUFBUUMsS0FBSy9DLElBQUk0QyxFQUFNRCxLQUFLRixNQUU3Q2xELEVBQUUsV0FDQUEsRUFBRSxTQUFTeUQsVUFBVXBDLEdBQUcsa0JBQW1CLFdBQ3pDLEdBQUlxQyxHQUFvQyxJQUEvQjFELEVBQUUsa0JBQWtCMkQsTUFDN0IzRCxHQUFFLG9CQUFvQm9CLFlBQVksVUFBV3NDLEdBQzdDMUQsRUFBRSx1QkFBdUJvQixZQUFZLFNBQVVzQyxLQUVoRHJDLEdBQUcsY0FBZSxXQUNqQixPQUFPIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG9wZW5OYXYoKSB7XHRcclxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XHJcbiAgICBpZiAoeC5jbGFzc05hbWUgPT09IFwibmF2YmFyXCIpIHtcclxuICAgICAgICB4LmNsYXNzTmFtZSArPSBcIiByZXNwb25zaXZlXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB4LmNsYXNzTmFtZSA9IFwibmF2YmFyXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxufVxyXG52YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJyk7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XHJcblx0ICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS10b2dnbGUtb3BlbicpO1xyXG5cdH0pO1xyXG5cclxuJCgnLm1lbnUtdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51LXRvZ2dsZS1yb3RhdGUnKTtcclxufSk7XHJcbiQoJy5zbW9vdGgtc2Nyb2xsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3Njcm9sbFRvJyk7XHJcbiAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgc2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wXHJcbiAgfSwgNjUwKTtcclxufSk7XHJcbnZhciAkYW5pbWF0aW9uX2VsZW1lbnRzID0gJCgnLmFuaW1hdGlvbi1lbGVtZW50Jyk7XHJcbnZhciAkcXVvdGVfbWFyayA9ICQoJy5xdW90ZS1pY29uJyk7XHJcbnZhciAkaGVsbG9fYW5pbWF0ZSA9ICQoJy5oZWxsby1hbmltYXRpb24nKTtcclxudmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG5mdW5jdGlvbiBjaGVja19pZl9pbl92aWV3KCkge1xyXG4gIHZhciB3aW5kb3dfaGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcclxuICB2YXIgd2luZG93X3RvcF9wb3NpdGlvbiA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgdmFyIHdpbmRvd19ib3R0b21fcG9zaXRpb24gPSAod2luZG93X3RvcF9wb3NpdGlvbiArIHdpbmRvd19oZWlnaHQpO1xyXG4gXHJcbiAgJC5lYWNoKCRhbmltYXRpb25fZWxlbWVudHMsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIHZhciBlbGVtZW50X2hlaWdodCA9ICRlbGVtZW50Lm91dGVySGVpZ2h0KCk7XHJcbiAgICB2YXIgZWxlbWVudF90b3BfcG9zaXRpb24gPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XHJcbiAgICB2YXIgZWxlbWVudF9ib3R0b21fcG9zaXRpb24gPSAoZWxlbWVudF90b3BfcG9zaXRpb24gKyBlbGVtZW50X2hlaWdodCk7XHJcblxyXG4gICAgLy9jaGVjayB0byBzZWUgaWYgdGhpcyBjdXJyZW50IGNvbnRhaW5lciBpcyB3aXRoaW4gdmlld3BvcnRcclxuICAgIGlmICgoZWxlbWVudF9ib3R0b21fcG9zaXRpb24gPj0gd2luZG93X3RvcF9wb3NpdGlvbikgJiZcclxuXHJcbiAgICAoZWxlbWVudF90b3BfcG9zaXRpb24gPD0gd2luZG93X2JvdHRvbV9wb3NpdGlvbikpIHtcclxuXHJcbiAgICAkZWxlbWVudC5hZGRDbGFzcygnaW4tdmlldycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gICQuZWFjaCgkcXVvdGVfbWFyaywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGVsZW1lbnRfaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuICAgIHZhciBlbGVtZW50X3RvcF9wb3NpdGlvbiA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcDtcclxuICAgIHZhciBlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA9IChlbGVtZW50X3RvcF9wb3NpdGlvbiArIGVsZW1lbnRfaGVpZ2h0KTtcclxuXHJcbiAgICAvL2NoZWNrIHRvIHNlZSBpZiB0aGlzIGN1cnJlbnQgY29udGFpbmVyIGlzIHdpdGhpbiB2aWV3cG9ydFxyXG4gICAgaWYgKChlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA+PSB3aW5kb3dfdG9wX3Bvc2l0aW9uKSAmJlxyXG5cclxuICAgIChlbGVtZW50X3RvcF9wb3NpdGlvbiA8PSB3aW5kb3dfYm90dG9tX3Bvc2l0aW9uKSkge1xyXG5cclxuICAgICRlbGVtZW50LmFkZENsYXNzKCdqaWdnbGUnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJC5lYWNoKCRoZWxsb19hbmltYXRlLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICB2YXIgZWxlbWVudF9oZWlnaHQgPSAkZWxlbWVudC5vdXRlckhlaWdodCgpO1xyXG4gICAgdmFyIGVsZW1lbnRfdG9wX3Bvc2l0aW9uID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xyXG4gICAgdmFyIGVsZW1lbnRfYm90dG9tX3Bvc2l0aW9uID0gKGVsZW1lbnRfdG9wX3Bvc2l0aW9uICsgZWxlbWVudF9oZWlnaHQpO1xyXG5cclxuICAgIC8vY2hlY2sgdG8gc2VlIGlmIHRoaXMgY3VycmVudCBjb250YWluZXIgaXMgd2l0aGluIHZpZXdwb3J0XHJcbiAgICBpZiAoKGVsZW1lbnRfYm90dG9tX3Bvc2l0aW9uID49IHdpbmRvd190b3BfcG9zaXRpb24pICYmXHJcblxyXG4gICAgKGVsZW1lbnRfdG9wX3Bvc2l0aW9uIDw9IHdpbmRvd19ib3R0b21fcG9zaXRpb24pKSB7XHJcblxyXG4gICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ2ppZ2dsZScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG4kd2luZG93Lm9uKCdzY3JvbGwgcmVzaXplJywgY2hlY2tfaWZfaW5fdmlldyk7XHJcbiR3aW5kb3cudHJpZ2dlcignc2Nyb2xsJyk7XHJcbiQoJy5raXNzLXNsaWRlcicpLmtpc3NTbGlkZXIoe1xyXG4gIHBhZ2luYXRpb25TZWxlY3RvcjogJy5raXNzLXBhZ2luYXRpb24nLFxyXG4gIGF1dG9zY3JvbGxEZWxheTogNTAwMFxyXG59KTtcclxudmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxudmFyIHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG52YXIgZXN0ID0gbmV3IERhdGUoJ1NlcCA4LCAyMDExIDEyOjQzOjU5Jyk7XHJcbnZhciBkaWZmZXJlbmNlID0gdG9kYXkuZ2V0VGltZSgpIC0gZXN0LmdldFRpbWUoKTtcclxuZGlmZmVyZW5jZSA9IChkaWZmZXJlbmNlIC8gMzE1NTY5MDAwMDApO1xyXG5cclxudmFyIGVsTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215RXhwZXJpZW5jZScpO1xyXG5lbE1zZy50ZXh0Q29udGVudCA9IE1hdGguZmxvb3IoZGlmZmVyZW5jZSkgKyAnIHllYXJzJztcclxuXHJcbnZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5cmlnaHQnKTtcclxuZWwuaW5uZXJIVE1MID0gJzxwIHByb3BlcnR5PVwiZGM6cmlnaHRzXCI+JmNvcHk7PHNwYW4gcHJvcGVydHk9XCJkYzpkYXRlQ29weXJpZ2h0ZWRcIj4gMjAxMy0nICsgeWVhciArICc8c3BhbiBwcm9wZXJ0eT1cImRjOnB1Ymxpc2hlclwiPiBhbnVhciBCb2xhdG92PC9zcGFuPjwvcD4nO1xyXG5cclxudmFyIG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxyXG4gIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcclxuXTtcclxuXHJcbnZhciBlbERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlzRGF0ZScpO1xyXG5lbERhdGUuaW5uZXJIVE1MID0gbW9udGhOYW1lc1t0b2RheS5nZXRNb250aCgpXSArICc8c3Bhbj4mbmJzcDs8c3Bhbj4nICsgeWVhcjtcclxuJCgnLmJ0bicpXHJcbi5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBwYXJlbnRPZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpLFxyXG4gICAgICAgIHJlbFggPSBlLnBhZ2VYIC0gcGFyZW50T2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgcmVsWSA9IGUucGFnZVkgLSBwYXJlbnRPZmZzZXQudG9wO1xyXG4gICAgJCh0aGlzKS5maW5kKCdzcGFuJykuY3NzKHt0b3A6cmVsWSwgbGVmdDpyZWxYfSk7XHJcbn0pLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBwYXJlbnRPZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpLFxyXG4gICAgICAgIHJlbFggPSBlLnBhZ2VYIC0gcGFyZW50T2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgcmVsWSA9IGUucGFnZVkgLSBwYXJlbnRPZmZzZXQudG9wO1xyXG4gICAgJCh0aGlzKS5maW5kKCdzcGFuJykuY3NzKHt0b3A6cmVsWSwgbGVmdDpyZWxYfSk7XHJcbn0pO1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAkKCcjZm9ybScpLnBhcnNsZXkoKS5vbignZmllbGQ6dmFsaWRhdGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgb2sgPSAkKCcucGFyc2xleS1lcnJvcicpLmxlbmd0aCA9PT0gMDtcclxuICAgICQoJy5icy1jYWxsb3V0LWluZm8nKS50b2dnbGVDbGFzcygnaGlkZGVuJywgIW9rKTtcclxuICAgICQoJy5icy1jYWxsb3V0LXdhcm5pbmcnKS50b2dnbGVDbGFzcygnaGlkZGVuJywgb2spO1xyXG4gIH0pXHJcbiAgLm9uKCdmb3JtOnN1Ym1pdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59KTsiXX0=
