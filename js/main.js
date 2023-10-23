/* Your JS here. */
console.log('Hello World!')



// Modal
// Getting elements
const modal = document.getElementById("modal-id");
const b = document.getElementById("modal-button");
const cross = document.getElementsByClassName("close")[0];

// Show the modal when button is clicked
b.onclick = function() {
  modal.style.display = "block";
}

// Hide the modal when it's closed
cross.onclick = function() {
  modal.style.display = "none";
}

// Hide the modal when outside is clicked
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Navbar resize
function resize_navbar() {
    let curr_scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let total_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled_percent = (curr_scroll / total_height) * 100;
    let adjusted_height = document.getElementsByClassName("nav-container")[0].style.height;
    const items = document.querySelectorAll('.nav-item');
    
    // Only change the navbar if scrolled within top 5 percent
    if(scrolled_percent <= 5){
        adjusted_height = 75 - scrolled_percent * 5;
        document.getElementsByClassName("nav-container")[0].style.height = adjusted_height + "px";
        items.forEach(element => {
            element.style.fontSize = 30 - scrolled_percent * 2 + "px";
        });
    }
    // Still run it in case directly loaded to an anchor
    else{
        scrolled_percent = 5;
        adjusted_height = 75 - scrolled_percent * 5;
        document.getElementsByClassName("nav-container")[0].style.height = adjusted_height + "px";
        items.forEach(element => {
            element.style.fontSize = 30 - scrolled_percent * 2 + "px";
        });
    }
}



// Reflecting current position on navbar
// Get an array of scroll locations of anchors
const anc_collect = document.getElementsByClassName("anchor");
const anc_array = [...anc_collect];
anc_position = anc_array.map(x => x.getBoundingClientRect().top + window.scrollY);

// Get an array of the elements to change
const selected_collect = document.getElementsByClassName("selected");
const selected_array = [...selected_collect];

const fixed_img = document.getElementById("background-picture");
function select_navitem() {
    let curr_scroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Find out the number of anchors with larger scroll locations than current location
    let large_anc_num = (anc_position.filter(n => n > (curr_scroll+5))).length;
    
    // Clear all background colors
    curr_index = anc_array.length - large_anc_num;
        selected_array.forEach(element => {
        element.style.removeProperty('background-color');
    });

    // Turn the selected background color back on
    selected_collect[curr_index].style.backgroundColor = "#7796CB";
    
    if(curr_index > 0 && curr_index < 5){
        fixed_img.style.display = "block";
    }
    else{
        fixed_img.style.display = "none";
    }
}


resize_navbar();
window.addEventListener("scroll", function(){
    resize_navbar();
    select_navitem();
});



// Carousel
curr_slide = 0;
slides = document.getElementsByClassName("slides");

function turn_off() {
    let i;    
    // Hide every picture
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
}

function turn_on(n) {
    // Boundary check
    curr_slide = (n+slides.length) % slides.length;    
    
    turn_off()
    
    slides[curr_slide].style.display = "block";
    // slides[curr_slide].style.width = "200px";
}

// Next/previous controls
function show_next() {
    turn_on(curr_slide += 1);
}

// Thumbnail image controls
function show_prev() {
    turn_on(curr_slide -= 1);
}

turn_off()
turn_on(curr_slide)

const prev = document.getElementsByClassName("arrow")[0];
prev.addEventListener("click", show_prev);

const next = document.getElementsByClassName("arrow")[1];
next.addEventListener("click", show_next);



