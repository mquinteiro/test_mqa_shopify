

(function() {
    console.log("starting mqa_contact.js");
    document.addEventListener('submit', function(e) {
        console.log("submit event");
        console.log(e);
        e.preventDefault();
    });
    if (mqa_sent == true) {
        console.log("mqa_sent is true");
    }
})();

