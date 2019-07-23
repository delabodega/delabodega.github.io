$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-10}, 1250, 'easeInOutSine');
  });
});

function openNav() {
  console.log('TEST1')
  var x = document.getElementById("sideBar");
  if (x.className === "") {
    console.log('TEST2')
    x.className = "open";
  } else {
    console.log('TEST3')
    x.className = "";
  }
}
