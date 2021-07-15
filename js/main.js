
$('.testimonial-slider').slick({
    dots: true,
    infinite: false,
    speed: 600,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  $('.ethopiaBtn').click(function(){
    $('.tabs button').removeClass('active')
    $(this).addClass('active')
    $('.AllTabs').children('div').hide(600)
    $('.ethopia').show(600)
  })

  $('.brazilBtn').click(function(){
    $('.tabs button').removeClass('active')
    $(this).addClass('active')
    $('.AllTabs').children('div').hide(600)
    $('.brazil').show(600)
  })
  
  $('.peruBtn').click(function(){
    $('.tabs button').removeClass('active')
    $(this).addClass('active')
    $('.AllTabs').children('div').hide(600)
    $('.peru').show(600)
  })

  $('.germanyBtn').click(function(){
    $('.tabs button').removeClass('active')
    $(this).addClass('active')
    $('.AllTabs').children('div').hide(600)
    $('.germany').show(600)
  })

  $('.italyBtn').click(function(){
    $('.tabs button').removeClass('active')
    $(this).addClass('active')
    $('.AllTabs').children('div').hide(600)
    $('.italy').show(600)
  })

  $('.switzerlandBtn').click(function(){
    $('.tabs button').removeClass('active')
    $(this).addClass('active')
    $('.AllTabs').children('div').hide(600)
    $('.switzerland').show(600)
  })

  $('.egyptBtn').click(function(){
    $('.tabs button').removeClass('active')
    $(this).addClass('active')
    $('.AllTabs').children('div').hide(600)
    $('.egypt').show(600)
  })

  $('.filter.btn').click(function(){
    $('.card.filterCard table').toggle(400)
  })


  $('.btn.ynBtn').click(function(){
    $('.btn.ynBtn').removeClass('active')
    $(this).addClass('active')
  })

  $('.overviewBtn').click(function(event){
    event.preventDefault()
    $('.pricing').addClass('active')
    $('.overview i').removeClass('fa-map-marker-alt').addClass('fa-check')
    $('.addCard').hide()
    $('.priceCard').show()
  })

  $('.pricingBtn').click(function(event){
    event.preventDefault()
    $('.description').addClass('active')
    $('.pricing i').removeClass('fa-map-marker-alt').addClass('fa-check')
    $('.priceCard').hide()
    $('.describeCard').show()
  })

  $('.descriptionBtn').click(function(event){
    event.preventDefault()
    $('.pictures').addClass('active')
    $('.description i').removeClass('fa-map-marker-alt').addClass('fa-check')
    $('.describeCard').hide()
    $('.imgCard').show()
  })



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
    
  $('.couponBtn').click(function(){
    $('.coupon').toggle(400)
  })


  $("#shipAddress").click(function(){
    if($("#shipAddress").prop("checked")){
      $('.shippingAdress').show()
  } else {
    $('.shippingAdress').hide()
  }
  })

 

 $('.verifyBtnn').click(function(event){
   event.preventDefault()
   $('.joinCard').hide()
   $('.confirmCard').show()
 })

 $('.Priority').click(function(){
   $('.profileDashboard li').removeClass('active')
   $('.PriorityCard').show()
   $('.NewCard').hide()
   $('.aActiveCard').hide()
   $('.LateCard').hide()
   $('.DeliveredCard').hide()
   $('.CompletedCard').hide()
   $('.CancelledCard').hide()
   $('.StarredCard').hide()
   $(this).parent().addClass('active')
 })

 $('.New').click(function(){
   $('.profileDashboard li').removeClass('active')
   $('.PriorityCard').hide()
   $('.NewCard').show()
   $('.aActiveCard').hide()
   $('.LateCard').hide()
   $('.DeliveredCard').hide()
   $('.CompletedCard').hide()
   $('.CancelledCard').hide()
   $('.StarredCard').hide()
  $(this).parent().addClass('active')
})

$('.aActive').click(function(){
  $('.profileDashboard li').removeClass('active')
  $('.PriorityCard').hide()
  $('.NewCard').hide()
  $('.aActiveCard').show()
  $('.LateCard').hide()
  $('.DeliveredCard').hide()
  $('.CompletedCard').hide()
  $('.CancelledCard').hide()
  $('.StarredCard').hide()
 $(this).parent().addClass('active')
})

$('.Late').click(function(){
  $('.profileDashboard li').removeClass('active')
  $('.PriorityCard').hide()
  $('.NewCard').hide()
  $('.aActiveCard').hide()
  $('.LateCard').show()
  $('.DeliveredCard').hide()
  $('.CompletedCard').hide()
  $('.CancelledCard').hide()
  $('.StarredCard').hide()
 $(this).parent().addClass('active')
})

$('.Delivered').click(function(){
  $('.profileDashboard li').removeClass('active')
  $('.PriorityCard').hide()
  $('.NewCard').hide()
  $('.aActiveCard').hide()
  $('.LateCard').hide()
  $('.DeliveredCard').show()
  $('.CompletedCard').hide()
  $('.CancelledCard').hide()
  $('.StarredCard').hide()
 $(this).parent().addClass('active')
})

$('.Completed').click(function(){
  $('.profileDashboard li').removeClass('active')
  $('.PriorityCard').hide()
  $('.NewCard').hide()
  $('.aActiveCard').hide()
  $('.LateCard').hide()
  $('.DeliveredCard').hide()
  $('.CompletedCard').show()
  $('.CancelledCard').hide()
  $('.StarredCard').hide()
 $(this).parent().addClass('active')
})

$('.Cancelled').click(function(){
  $('.profileDashboard li').removeClass('active')
  $('.PriorityCard').hide()
  $('.NewCard').hide()
  $('.aActiveCard').hide()
  $('.LateCard').hide()
  $('.DeliveredCard').hide()
  $('.CompletedCard').hide()
  $('.CancelledCard').show()
  $('.StarredCard').hide()
 $(this).parent().addClass('active')
})

$('.Starred').click(function(){
  $('.profileDashboard li').removeClass('active')
  $('.PriorityCard').hide()
  $('.NewCard').hide()
  $('.aActiveCard').hide()
  $('.LateCard').hide()
  $('.DeliveredCard').hide()
  $('.CompletedCard').hide()
  $('.CancelledCard').hide()
  $('.StarredCard').show()
 $(this).parent().addClass('active')
})

$('.listToggler').click(function(){
  $('.orderList').toggle(100)
})



$('#upload1').change(function() {
  var file = $('#upload1')[0].files[0].name;
  $('.dragg1').hide()
  $('.delBtn1').show()
  $('#filename1').text(file);
});
$('#upload2').change(function() {
  var file = $('#upload2')[0].files[0].name;
  $('.dragg2').hide()
  $('.delBtn2').show()
  $('#filename2').text(file);
});
$('#upload3').change(function() {
  var file = $('#upload3')[0].files[0].name;
  $('.dragg3').hide()
  $('.delBtn3').show()
  $('#filename3').text(file);
});
$('#upload4').change(function() {
  var file = $('#upload4')[0].files[0].name;
  $('.dragg4').hide()
  $('.delBtn4').show()
  $('#filename4').text(file);
});
$('#upload5').change(function() {
  var file = $('#upload5')[0].files[0].name;
  $('.dragg5').hide()
  $('.delBtn5').show()
  $('#filename5').text(file);
});


$(".delBtn1").click(function(event){
  event.preventDefault()
  document.getElementById("upload1").value=null;
  $('.dragg1').show()
  $('.delBtn1').hide()
  $('#filename1').text("Browse");
})

$(".delBtn2").click(function(event){
  event.preventDefault()
  document.getElementById("upload2").value=null;
  $('.dragg2').show()
  $('.delBtn2').hide()
  $('#filename2').text("Browse");
})
$(".delBtn3").click(function(event){
  event.preventDefault()
  document.getElementById("upload3").value=null;
  $('.dragg3').show()
  $('.delBtn3').hide()
  $('#filename3').text("Browse");
})
$(".delBtn4").click(function(event){
  event.preventDefault()
  document.getElementById("upload4").value=null;
  $('.dragg4').show()
  $('.delBtn4').hide()
  $('#filename4').text("Browse");
})
$(".delBtn5").click(function(event){
  event.preventDefault()
  document.getElementById("upload5").value=null;
  $('.dragg5').show()
  $('.delBtn5').hide()
  $('#filename5').text("Browse");
})

var country = 0
$('.allCountryBtn').click(function(event){
  event.preventDefault()
  $('.moreCountries').toggle()

  if(country % 2 ==0){
    $('.allCountryBtn').text("View Less")
    country++
  }
  else{ 
    $('.allCountryBtn').text("View All")
    country++
}
})

var sidebar = 0
$('#profileImg').click(function(event){
  event.preventDefault()

  if(sidebar % 2 == 0){
    $('.profileOptionSidebar').css("transform","translateX(0)")
    sidebar++
  }
  else{
    $('.profileOptionSidebar').css("transform","translateX(100%)")
    sidebar++
  }
})

$('#mobSidebar').click(function(event){
  event.preventDefault()

  if(sidebar % 2 == 0){
    $('.profileOptionSidebar').css("transform","translateX(0)")
    sidebar++
  }
  else{
    $('.profileOptionSidebar').css("transform","translateX(100%)")
    sidebar++
  }
})

$('.profileSidebarCloser').click(function(){
  $('.profileOptionSidebar').css("transform","translateX(100%)")
    sidebar++
})