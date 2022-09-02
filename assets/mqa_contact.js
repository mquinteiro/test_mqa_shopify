

(function() {
    console.log("starting mqa_contact.js");
    document.addEventListener('submit', function(e) {
        console.log("submit event");
        console.log(e);
        e.preventDefault();
    });
})();
