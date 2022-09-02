

(function() {
    console.log("starting mqa_contact.js");
    document.addEventListener('submit', function(e) {
        console.log("submit event");
        console.log(e);
        e.preventDefault();
    });
})();

mqa_sent = function() {
    console.log("mqa_sent function called on sucssedd! Contact");
}