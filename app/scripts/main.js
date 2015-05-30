$(document).ready(function () {
    //login button
    $('.loadingButton').click(function () {
        $(this).button('loading');
    });
    //initialize dropdowns
    $('.dropdown-toggle').dropdown();
    
    //datepicker
     $('.date-picker-widget').datetimepicker();

});