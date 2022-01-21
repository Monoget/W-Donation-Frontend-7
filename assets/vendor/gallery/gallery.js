/* ---------------------------------------------
Portfolio mixItUp
--------------------------------------------- */

$(function() {

var filterList = {

init: function() {

// MixItUp plugin
// http://mixitup.io
$('#portfoliolist').mixItUp({
selectors: {
target: '.portfolio',
filter: '.filter'
},
load: {
filter: '.cat1, .cat2, .cat3, .cat4, .cat5'
}
});

}

};

// Run the show!
filterList.init();


});