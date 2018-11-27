let listArray = ['You know what you did.', 'Remember that one time with that one thing? Yeah, That', 'You thought no one was watching, but santa was.', "I checked my list twice, you're going to question me?", "Who are we kidding? We both know how this went", "We'll see about next year"];
let chooseArray = ['Naughty', 'Nice'];

let music = document.getElementById('christmasMusic');

$('#setup').modal();

function getList() {
    music.play();
    $.modal.close();
    let person = $('#name').val();
    let listIndex = Math.floor(Math.random() * (listArray.length - 0) + 0);
    let chooseIndex = Math.floor(Math.random() * (2 - 0) + 0);

    $('.display').html(`<div class="nOrN"><span class="${chooseArray[chooseIndex]}">${person}</span>, you are ${chooseArray[chooseIndex]}</div>` +
    `<div class="reason">${listArray[listIndex]}</div>`);
}