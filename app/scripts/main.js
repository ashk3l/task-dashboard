$(document).ready(function () {
    //login button
    $('.loadingButton').click(function () {
        $(this).button('loading');
    });
    //initialize dropdowns
    $('.dropdown-toggle').dropdown();

    //datepicker
    $('.date-picker-widget').datetimepicker();

    //filtering for tasks
    $('.task-container').isotope({
        // options...
        itemSelector: '.task',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $('.action-bar .dropdown ul.dropdown-menu li').on('click', 'a', function () {
        var $container = $('.task-container');

        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

});