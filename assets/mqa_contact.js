

(function() {
    console.log("starting mqa_contact.js");
    document.addEventListener('submit', function(e) {
        console.log("submit event");
        console.log(e);
        e.preventDefault();
    });
    if (mqa_sent == true) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '3793573127352252');
        fbq('track', 'Contact');
    }
})();

