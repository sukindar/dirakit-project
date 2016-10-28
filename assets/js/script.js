/* Load JS on document ready */
$(document).ready(function () {
    /* Semantic UI Initialization */
    $('.tabbing.menu .item').tab();
    $('.special.card .image').dimmer({on: 'hover'});
    $('select.dropdown').dropdown({forceSelection: false});
    $('.ui.small.images > .image').click(function () {
        $('.ui.modal').modal('show');
    });

    $('.slider.control').click(function () {
        $('.ui.sidebar.inverted.vertical.menu').sidebar('toggle');
    });
    $('img').visibility({
        type: 'image',
        transition: 'fade in',
        duration: 1000
    });

    $('.ui.stackable.four.column.grid.container')
        .visibility({
            once: false,
            // update size when new content loads
            observeChanges: true,
            // load content on bottom edge visible
            onBottomVisible: function () {
                // loads a max of 5 times
                window.loadFakeContent();
            }
        })
    ;
    /* End of Semantic UI Initialization */
});

$('.add-step').click(function () {
    addStep();
});

var counter = 1;
function addStep() {
    var stepHtml = $('.custom-step');
    var steps = "<div class='step-" + counter + "'>" +
        "<div class='inline fields'>" +
        "<div class='four wide field'>" +
        "Intro" +
        "</div>" +
        "<div class='eight wide field'>" +
        "<input type='text' placeholder='Judul Intro'>" +
        "</div>" +
        "<div class='four wide field'>" +
        "<button class='ui button fluid'><i class='upload icon'></i>Upload Gambar</button>" +
        "</div>" +
        "</div>" +
        "<div class='inline fields'>" +
        "<div class='four wide field'>" +
        "Langkah &nbsp; <span class='step-counter'>" + counter + "</span>" +
        "</div>" +
        "<div class='eight wide field'>" +
        "<textarea name='step' id='step'></textarea>" +
        "</div>" +
        "<div class='four wide field'>" +
        "<button class='ui button fluid'><i class='upload icon'></i>Upload Gambar</button>" +
        "</div>" +
        "</div>" +
        "</div>";
    counter++;

    var step = stepHtml.html();
    step = step += steps;
    stepHtml.html(step);
}
var infiniteContents = '<div class="column">'+
    '<div class="ui fluid special card">'+
    '<div class="blurring dimmable image">'+
    '<div class="ui dimmer">'+
    '<div class="content">'+
    '<a class="center" href="#">'+
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!'+
'</a>'+
'</div>'+
'</div>'+
'<img src="assets/images/13.png" alt="13">'+
    '</div>'+
    '<div class="content">'+
    '<a href="#" class="header">Lorem Ipsum</a>'+
'<div class="meta">'+
    '<a href="#"><i class="folder icon"></i>Showcase</a>'+
    '<a href="#"><i class="user icon"></i>Admin</a>'+
    '<a href="#"><i class="unhide icon"></i>2200</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="column">'+
    '<div class="ui fluid special card">'+
    '<div class="blurring dimmable image">'+
    '<div class="ui dimmer">'+
    '<div class="content">'+
    '<a class="center" href="#">'+
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!'+
'</a>'+
'</div>'+
'</div>'+
'<img src="assets/images/13.png" alt="13">'+
    '</div>'+
    '<div class="content">'+
    '<a href="#" class="header">Lorem Ipsum</a>'+
'<div class="meta">'+
    '<a href="#"><i class="folder icon"></i>Showcase</a>'+
    '<a href="#"><i class="user icon"></i>Admin</a>'+
    '<a href="#"><i class="unhide icon"></i>2200</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="column">'+
    '<div class="ui fluid special card">'+
    '<div class="blurring dimmable image">'+
    '<div class="ui dimmer">'+
    '<div class="content">'+
    '<a class="center" href="#">'+
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!'+
'</a>'+
'</div>'+
'</div>'+
'<img src="assets/images/13.png" alt="13">'+
    '</div>'+
    '<div class="content">'+
    '<a href="#" class="header">Lorem Ipsum</a>'+
'<div class="meta">'+
    '<a href="#"><i class="folder icon"></i>Showcase</a>'+
    '<a href="#"><i class="user icon"></i>Admin</a>'+
    '<a href="#"><i class="unhide icon"></i>2200</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="column">'+
    '<div class="ui fluid special card">'+
    '<div class="blurring dimmable image">'+
    '<div class="ui dimmer">'+
    '<div class="content">'+
    '<a class="center" href="#">'+
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!'+
'</a>'+
'</div>'+
'</div>'+
'<img src="assets/images/13.png" alt="13">'+
    '</div>'+
    '<div class="content">'+
    '<a href="#" class="header">Lorem Ipsum</a>'+
'<div class="meta">'+
    '<a href="#"><i class="folder icon"></i>Showcase</a>'+
    '<a href="#"><i class="user icon"></i>Admin</a>'+
    '<a href="#"><i class="unhide icon"></i>2200</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
var count = 1;
window.loadFakeContent = function () {
    // load fake content
    var
        $segment = $('.ui.stackable.four.column.grid.container'),
        $loader = $segment.find('.inline.loader'),
        $content = infiniteContents;
    if (count <= 5) {
        $loader.addClass('active');
        setTimeout(function () {
            $loader
                .removeClass('active')
                .before($content)
            ;
            $('.ui.sticky')
                .sticky('refresh')
            ;
            $('.visibility.example > .overlay, .visibility.example > .demo.segment, .visibility.example .items img')
                .visibility('refresh')
            ;
        }, 1000);
    }
    count++;
}