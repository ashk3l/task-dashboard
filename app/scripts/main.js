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

    //define isotope variables
    var $container = $('.task-container');
    filters = {};

//    // filter items on button click
//    $('.action-bar .dropdown ul.dropdown-menu li').on('click', 'a', function () {
//        var filterValue = $(this).attr('data-filter');
//        $container.isotope({
//            filter: filterValue
//        });
//    });


    
    // store filter for each group
    var filters = {};

    $('.action-bar .dropdown ul.dropdown-menu li').on('click', 'a', function () {
        var $this = $(this);
        // get group key
        var $dropdownGroup = $this.parents('.dropdown');
        var filterGroup = $dropdownGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');
        // combine filters
        var filterValue = concatValues(filters);
        $container.isotope({
            filter: filterValue
        });
    });

    // flatten object by concatting values
    function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }
    

});