// Navigation

var navButtons = document.querySelectorAll('nav .button');
for (button of navButtons) {
    button.addEventListener('click', function () {
        for (button of navButtons) {
            button.className = 'button';
        }
        this.className = 'button pressed';
        var showSection = (this.innerHTML).toLowerCase()
        setTimeout(function () {
            section(showSection);
        }, 400);
    });
}

function section(input) {
    $('.about').toggle(false);
    $('.resume').toggle(false);
    $('.projects').toggle(false);
    var el = document.querySelector('.' + input);
    $(el).toggle(true);
}

section('about');

// Home Section

var i = 0;
var txt;
var endtxt;
var speed = 80;
var element;

function typeWriter(stringToType) {
    if (stringToType != null) {
        txt = stringToType;
    }

    if (i == 0) {
        element.innerHTML = '';
    }
    if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        i = 0;
        setTimeout(function () {
            element.innerHTML = endtxt;
        }, 1000);
    }
}

var desc = document.querySelector('.description');
desc.addEventListener('click', function () {
    element = document.querySelector(".about span");
    endtxt = 'Andrea deCandia';
    typeWriter('I love programming');
});

$('.github').click(function () {
    window.open('https://github.com/andrea-de/');
});

$('.linkedin').click(function () {
    window.open('https://www.linkedin.com/in/andrewdecandia/');
});

// Resume Section

var resumeContainer = document.querySelector('.resume');
var resume = document.querySelector('.resume img');

resume.addEventListener('click', function () {
    console.log('testing1');
    $(resumeContainer).toggleClass('full');
});

$('.resume span').click(function () {
    console.log('hi');
    element = document.querySelector(".resume span");
    endtxt = 'Resume';
    typeWriter('Not everything is a button...');
});

// Project Secton

var projectIndex = 1;
var projectLength = data.length;

var prev = document.getElementById('prevButton');
var next = document.getElementById('nextButton');
var select = document.getElementById('projectDiv');

prev.addEventListener("click", function () {
    if (projectIndex == 1) {
        projectIndex = projectLength;
    } else {
        projectIndex--;
    }
    displayProject(projectIndex);
});

next.addEventListener("click", function () {
    if (projectIndex == projectLength) {
        projectIndex = 1;
    } else {
        projectIndex++;
    }
    displayProject(projectIndex);
});

displayProject(1);

function displayProject(receivedIndex) {
    var index = receivedIndex - 1;
    var img = document.querySelector('.imgContainer img');
    var text = document.querySelector('#projectName');
    var desc = document.querySelector('#projectDesc');
    text.innerHTML = data[index].name;
    desc.innerHTML = data[index].desc;
    img.src = data[index].pic;
    // hack fix - creates global variable 
    link = data[index].link;
    select.removeEventListener("click", makeLink);
    select.addEventListener("click", makeLink);
}

function makeLink() {
    setTimeout(function () {
        window.open(link);
    }, 400);
}

// Game

var gameButtons = document.querySelectorAll('.game .button');

gameButtons[0].addEventListener("click", function () {
    if ($('.gameBack').hasClass('black')) {
        $(gameButtons[0]).toggleClass('pressed');
        setTimeout(function () {
            $('.gameBack').toggleClass('black');
            $(gameButtons[0]).toggleClass('onTop');
        }, 500);
        setTimeout(function () {
            if ($(gameButtons[2]).hasClass('pressed') && $(gameButtons[3]).hasClass('pressed')) {
                element = document.querySelector(".about p");
                endtxt = 'The password is "password", Congratulations.';
                typeWriter('The password is "password", Congratulations.');
                setTimeout(function () {
                    location.reload();
                }, 5000);
            } else {
                $(gameButtons[0]).toggleClass('pressed');
                $(gameButtons[1]).toggleClass('pressed');
            }
        }, 1000);
    } else {
        $(gameButtons[0]).toggleClass('pressed');
        $(gameButtons[1]).toggleClass('onTop');
        setTimeout(function () {
            $('.gameBack').toggleClass('white');
        }, 500);
    }
});

gameButtons[1].addEventListener("click", function () {
    if ($('.gameBack').hasClass('white')) {
        $(gameButtons[1]).toggleClass('pressed');
        setTimeout(function () {
            $('.gameBack').toggleClass('white');
            $(gameButtons[1]).toggleClass('onTop');
        }, 500);
        setTimeout(function () {
            if ($(gameButtons[2]).hasClass('pressed') && $(gameButtons[3]).hasClass('pressed')) {
                element = document.querySelector(".about p");
                endtxt = 'The password is "password", Congratulations.';
                typeWriter('The password is "password", Congratulations.');
                setTimeout(function () {
                    location.reload();
                }, 5000);
            } else {
                $(gameButtons[0]).toggleClass('pressed');
                $(gameButtons[1]).toggleClass('pressed');
            }
        }, 1000);
    } else {
        $(gameButtons[1]).toggleClass('pressed');
        $(gameButtons[0]).toggleClass('onTop');
        setTimeout(function () {
            $('.gameBack').toggleClass('black');
        }, 500);
    }
});

gameButtons[2].addEventListener("click", function () {
    if ($(gameButtons[2]).hasClass('pressed')) {
        $(gameButtons[2]).toggleClass('pressed');
        setTimeout(function () {
            $(gameButtons[0]).toggleClass('onBottom');
            $(gameButtons[1]).toggleClass('onBottom');
        }, 500);
        setTimeout(function () {
            $(gameButtons[2]).toggleClass('pressed');
            $(gameButtons[3]).toggleClass('pressed');
        }, 2000);
    } else {
        $(gameButtons[2]).toggleClass('pressed');
        setTimeout(function () {
            $(gameButtons[0]).toggleClass('onBottom');
            $(gameButtons[1]).toggleClass('onBottom');
        }, 500);
        $(gameButtons[3]).toggleClass('pressed', false);
    }
});

gameButtons[3].addEventListener("click", function () {
    $(gameButtons[3]).toggleClass('pressed');
    if ($(gameButtons[2]).hasClass('pressed')) {
        setTimeout(function () {
            $(gameButtons[3]).toggleClass('pressed', false);
        }, 4000);
    }
    $(gameButtons[0]).toggleClass('onBottom', false);
    $(gameButtons[1]).toggleClass('onBottom', false);
    $(gameButtons[2]).toggleClass('pressed', false);
});
