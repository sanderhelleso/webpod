window.onload = start;

function start() {

    // webpod constructor
    function Webpod(options) {
        this.options = options;
    }

    // webpod options
    const options = [
        {
            theme: "dark"
        },

        {
            position: "bottom-right"
        }
    ];

    // webpod trigger
    const trigger = document.createElement("a");
    trigger.id = "webpodTrigger";
    trigger.innerHTML = "<i class='fas fa-podcast'></i>";
    trigger.addEventListener("click", openWebpod);
    document.body.appendChild(trigger);

    // new webpod
    const webpod = new Webpod(options, trigger);

    console.log(webpod);

    // open webpod
    function openWebpod() {
        console.log(webpod);
    }
}