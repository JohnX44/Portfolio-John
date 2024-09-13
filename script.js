// Fade in hero section on page load
$(".hero").hide().fadeIn(1500); // Fade in over 1.5 seconds

// Slide in tech stack icons one by one
$(".icon").each(function(index) {
  $(this).delay(500 * index).animate({ opacity: 1, top: 0 }, 800); // Delay and slide in
});

// Add hover effect to project cards
$(".card").hover(
  function() {
    $(this).animate({ marginTop: "-10px" }, 300); // Slide up on hover
  },
  function() {
    $(this).animate({ marginTop: "0px" }, 300); // Slide back on mouse out
  }
);

$(".navbar-nav .nav-link").hover(
    function() {
      $(this).stop().animate({ fontSize: '1.2em' }, 300); // Enlarge text
    },
    function() {
      $(this).stop().animate({ fontSize: '1em' }, 300); // Shrink text
    }
  );

  $(".tech-item").hover(
    function() {
      $(this).find(".icon").stop().animate({ fontSize: '2em' }, 300); // Enlarge icon
      $(this).find(".fact-text").stop().fadeIn(300); // Show fact text
    },
    function() {
      $(this).find(".icon").stop().animate({ fontSize: '4em' }, 300); // Shrink icon
      $(this).find(".fact-text").stop().fadeOut(300); // Hide fact text
    }
  );