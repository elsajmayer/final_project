//Nav Bar
$(document).ready(function(){
  $('nav a').on('click', function(event){
    event.preventDefault();
    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top;
    console.log(targetOffset);

    $('html,body').animate({
                 scrollTop: targetOffset
            }, 600);
    });
  });

// Scrollspy
$('body').scrollspy({
  target: '#mainNav'
});

// Email Form
$('#submit').on('click', function(){
    var email = $("#email").val();
    alert(email);
    console.log($('#email').val());
    })

// Gear Modal
$('#gear').on('click', function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $(".modal-body").html('<iframe width="100%" height="500px" frameborder="0" scrolling="yes" allowtransparency="true" src="'+url+'"></iframe>');
});
