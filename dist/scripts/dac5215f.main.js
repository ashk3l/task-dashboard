$(document).ready(function(){function a(a){var b="";for(var c in a)b+=a[c];return b}$(".loadingButton").click(function(){$(this).button("loading")}),$(".dropdown-toggle").dropdown(),$(".date-picker-widget").datetimepicker(),$(".task-container").isotope({itemSelector:".task",layoutMode:"fitRows"});var b=$(".task-container");c={};var c={};$(".action-bar .dropdown ul.dropdown-menu li").on("click","a",function(){var d=$(this),e=d.parents(".dropdown"),f=e.attr("data-filter-group");c[f]=d.attr("data-filter");var g=a(c);b.isotope({filter:g})})});