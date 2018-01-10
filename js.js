
      jQuery( function($)
      {
        //zresetuj scroll
        $.scrollTo(0);
        $('#bhome').click(function() { $.scrollTo($('#header'), 1000); });
        $('#babout').click(function() { $.scrollTo($('#about-me'), 1000); });
        $('#bskills').click(function() { $.scrollTo($('#skills'), 1000); });
        $('#bprojects').click(function() { $.scrollTo($('#projects'), 1000); });
        $('#bcontact').click(function() { $.scrollTo($('#contact'), 1000); });
      }
      );

// clock
function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),

    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),

    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),


    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);


// text icons
