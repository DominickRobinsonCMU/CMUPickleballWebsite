var navbar = `
<nav>
    <div class="navbar">
        <a href="about.html">CMU Pickleball</a>
        <a href="members.html">Members</a>
        <a href="officers.html">Officers</a>
        <a href="articles.html">Articles</a>
        <a href="hall-of-fame.html">Hall of Fame</a>
        <a href="video-game.html">Video Game</a>
        <a href="lore.html">Lore</a>
        <a href="links.html">Links</a>
        <a href="calendar.html">Calendar</a>
    </div>
</nav>
`;

{/* <li><img src="images/pickles/pete_the_pickle.png" alt="Logo"></li> */ }


document.write(navbar);

// Get the height of the navbar including padding
var navbar = document.querySelector('nav');
var navbarHeight = window.getComputedStyle(navbar).height;
console.log('Navbar height including padding:', navbarHeight);

var header = document.querySelector('header');
header.style.marginTop = navbarHeight;


var scrollThreshold = 200; // Example: Change opacity after scrolling 200 pixels

// Event listener for scroll events
window.addEventListener('scroll', function () {
    // Get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is below the threshold
    if (scrollPosition > scrollThreshold) {
        navbar.style.backgroundColor = 'rgba(51,51,51,0.7)'; // Fully opaque background
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)'; // Restore initial opacity
    }
});


{/* <li><a href="paddles.html">Paddle Shop</a></li> */ }
{/* <li><a href="merch.html">Merchandise</a></li> */ }
