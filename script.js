const quotes = [
    {
        name:'anushka',
        quote:'An apple a day keeps the doctor away'
    },
    {
        name:'anshika',
        quote:'Always hope for the best'
    },
    {
        name:'manvi',
        quote:'Do not let the child inside you die'
    },
    {
        name:'anjali',
        quote:'Success is all about hard work'
    }
]
const qotbtn = document.querySelector('#qtBtn');
const qtauthor = document.querySelector('#author');
const qt = document.querySelector('#quote');
qotbtn.addEventListener('click',displayQ);
function displayQ() {
    let number = Math.floor(Math.random() * quotes.length);
    console.log(number);
    qtauthor.innerHTML = quotes[number].name;
    qt.innerHTML = quotes[number].quote;
}

