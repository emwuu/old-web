var posts = [
  {'title': 'To Japan!', 'date': '2018-03-26', 'img': 'https://lh3.googleusercontent.com/JZtLBNZe7yJ8K7EEcnkuvxCMd3jqBL4rzmWsNamQcyEEkP2YE0cn7aVhp79rY2s_Ipe7lotGLfwhvy-vvyx1DEAZ6kSRXGdpPrDWL6SBswjB7-r6Wp_49WHG_ufHoLtkIUs1YqeC5A=w2400'},
  {'title': 'Cherry Blossoms at International Christian University', 'date': '2018-03-27', 'img': 'https://lh3.googleusercontent.com/lsXN3vXMqALFA8YqnCuSMahpLWl8hfHOVmQA-Pkd8A5RoQjeL39AsYZraovLlCIKA5Kxhj8VKxRYWWguDpqxL3gV6dHLIpkfEBNBSoun0eTJkv1UNix0pUcI_HJUBFjXW-9vdNe4Hw=w2400'},
  {'title': 'My New Home in Sendai', 'date': '2018-03-28', 'img': 'https://lh3.googleusercontent.com/GBhl2LubchKZ5H5FGXd1lKc1cPpVXc3OaLrfjE1E1SoaztUWcwpygzhV74BPzkPOOKhtXZIJP2UvGTTnNTLiwQJ8yrN_7CZtpHCHBFC09Ut39i5_TDBfAfk8y4TFFKvIDRYmIhHkAQ=w2400'},
  {'title': 'Boring Logistics and Daiso', 'date': '2018-03-29', 'img': 'https://lh3.googleusercontent.com/yFtWJO2AhGzFXclMo2wizR9ZkdBCvDxPrp2J_MwHVBbGhXjMS0esvMx7qLIEGwxNKwj8qrLwH6PLWeTmdi-2BizfPJ5zJGE51ZhRZks2ycqRmTQTW6VJ4tmAc91ry_EGVa93wbhREA=w2400'},
  {'title': 'Neighborhood Snooping', 'date': '2018-03-30', 'img': 'https://lh3.googleusercontent.com/f0mBhdLPHz4sQNNjGori2w3PP2j_W_IV0XaPStsva6lyOUgGqTF7wKo2g0ATlH8TXtBrkXFSAVQSSwXvHGe5i726enydO8X14Ypgiux5zdpkfupSxKLli3X8Oh5P7KVSpWUePeF_Lg=w2400'},
  {'title': 'Lazy Saturday Picnic', 'date':'2018-03-31', 'img': 'https://lh3.googleusercontent.com/YINm__GOZyYFG9GFEK3DZvdDe2OqmsFEo4vGiXAdaNHGuDPliVIuZAHaYxh-DDYBzGsjgaY9lOh1CtocZljUxhDHv0kLUwUIfYovafq49Vgrri3YJpS-WfnOENcLoRP21TUHblfaKA=w2400'},
  {'title': 'Lifehouse Sendai', 'date':'2018-04-1', 'img': 'images/LifehouseSendai.png'},
  {'title': 'Cindy and Ethan Visit', 'date': '2018-04-7', 'img':'https://lh3.googleusercontent.com/yoPI1D7UMdDnoetjhnwC-djE6A3rhf8Y1qFcz9fx3kJPIaZwyQLdwKQaI1A1Fji32uYuv15CgRnDqGXc5PyV2b2Gqq_RUqfdCggvqMDstdMV97q7-9DyFzTl12vaQY0MmELLiDKxgA=w2400'},
  {'title': 'Cindy and Ethan Visit', 'date': '2018-04-8', 'img':'https://lh3.googleusercontent.com/yoPI1D7UMdDnoetjhnwC-djE6A3rhf8Y1qFcz9fx3kJPIaZwyQLdwKQaI1A1Fji32uYuv15CgRnDqGXc5PyV2b2Gqq_RUqfdCggvqMDstdMV97q7-9DyFzTl12vaQY0MmELLiDKxgA=w2400'},
  {'title': 'Ogawara', 'date':'2018-04-9', 'img': 'https://lh3.googleusercontent.com/h4OwSmeD2j-zHtRI-VT0a5m3HjSl1q5aHstG5PLEN7Fx_2IJTSxqbKszmDiHPvEzRFNx6fIJduNJHT6uXlFwJi-eYDL4V65PRdHHyL_sE7ArSyUwwfpVgT7SKE2KS8_tVzLDmAyj4A=w2400'},
  {'title': 'Tsutsujigaoka Park Hanami', 'date':'2018-04-10', 'img': 'https://lh3.googleusercontent.com/QXCMvI4Ktmsf9gBUfA4UGP2h2MGQtEadmyYWXnGckbqJ75tXZgicyxhgr03Sl9KL3zwi25x0JIemc4LurtGK0J1J-4RbotlflnijaH5_42X0TOF7gYd6fm24PEgSjUoBvObyXbewcQ=w2400'}
]

var curMonth = 4;

var datesWithEvents = document.getElementsByClassName('event');

for (i = 0; i < datesWithEvents.length; i++){
  datesWithEvents[i].addEventListener('mouseover', changeWindow, false);
}

function changeWindow(){
  var month = curMonth;
  if (this.className.split(" ")[0] === 'prev-month'){
    month = curMonth - 1;
  }

  var dateToSearch = "2018-0" + month + "-";
  //search for post in posts array
  for (i = 0; i < posts.length; i++){
    if (posts[i].date === dateToSearch + this.firstChild.innerHTML){
      document.getElementById('featuredImage').src = posts[i].img;
      document.getElementById('overlay').innerHTML = posts[i].title;
    }
  }
}

$(document).ready(function() {
  function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if(isScrolledIntoView(this) == true){
        $(this).addClass('fadeInDown');
      }
    });
  });
});