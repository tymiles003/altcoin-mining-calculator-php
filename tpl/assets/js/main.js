function hideOtherCurrencies() {
    $('[class^="curr-"]').not('[class=curr-USD]').hide();
}

$('#switch').click(function() {

    // Rotate the icon
    $(this).rotate({
        bind:
        {
            click: function() {
                var deg = 360;// / $('th span[class^="curr-"]').length;
                switchRotation += deg;
                console.error('TRYING TO ROTATE TO: ' + switchRotation);
                $(this).rotate({animateTo: switchRotation});
            }
        }
    });

    // Cycle to the next currency
    var search = 'span[class^="curr-"]';
    spans = $('th ' + search);

    max = spans.length - 1;

    idx = 0;
    spans.each(function(index) {
        if($(this).is(':visible')) {
            idx = index + 1;
            if(idx > max) {
                idx = 0;
            }

            // Hide the previous currency
            var next = $(spans).get(idx);
            $(this).hide();
            $(next).show();

            // Show the new currency
            span2 = $('td span[class^="curr-"]');
            $(span2).filter(':visible').hide();
            $(span2).filter('.' + $(next).attr('class')).show();
            return false;
        }
    });
});

