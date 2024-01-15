// Purpose of this JavaScript is to add action to change which of the panels/cards is the "active" class, which will then implement the CSS styling specific to the active class

// Bring in all of the panels into the JS file. Several ways to do this, getElementById, querySelector, etc.
// querySelector can grab elements, class names, or Ids; problem is, if we just put .panel it will only grab the first one, so we need querySelectorAll
// querySelectorAll instead of selecting all the panels directly, it places all the elements into a node list, which is similar to an array

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    // console.log(panel) will show in Deveoper Tools console each element in the NodeList array of panels
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}