const dropDownMenu = () => {
    const menuClickListener = () => {
        const menu = document.querySelectorAll('.menu');
        menu.forEach((menu) => menu.addEventListener('click', (e) => {
            toggleMenu(e);
        }));
    }

    const toggleMenu = (e) => {
        let menuButton = e.target;
        let dropDownMenu = menuButton.nextElementSibling;

        if (dropDownMenu.classList.length === 2) {
            dropDownMenu.classList.remove('notVisible');
        } else {
            dropDownMenu.classList.add('notVisible');
        }
    }

    return {menuClickListener}
}
dropDownMenu().menuClickListener();


const imageSlider = () => {
    let currentSlide = 1;

    const setCurrentSlide = (newValue) => {
        currentSlide = newValue;
    }

    const getCurrentSlide = () => {
        return currentSlide;
    }

    const buttonsListener = () => {
        //forwardSlide()
        setTimeout(automaticSlide, 3000);

        const forwardButton = document.querySelector('#forwardButton');
        forwardButton.addEventListener('click', () => {
            forwardSlide();
        })

        const backButton = document.querySelector('#backButton');
        backButton.addEventListener('click', () => {
            backSlide();
        })

        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot) => dot.addEventListener('click', (e) => {
            let selection = Number(e.target.id.slice(3));
            setCurrentSlide(selection);
            displayCurrentSlide();
        }))
    }

    const forwardSlide = () => {
        if (getCurrentSlide() === 3) {
            setCurrentSlide(1);
        } else {
            setCurrentSlide(getCurrentSlide()+1);
        }
        displayCurrentSlide();
    }

    const backSlide = () => {
        if (getCurrentSlide() === 1) {
            setCurrentSlide(3);
        } else {
            setCurrentSlide(getCurrentSlide()-1);
        }
        displayCurrentSlide();
    }

    const displayCurrentSlide = () => {
        const dots = document.querySelector('#dots')

        const images = document.querySelectorAll('img');

        images.forEach((img) => {
            if (Number(img.id) === getCurrentSlide()) {
                img.className = 'fade-in';
                dots.children[Number(img.id)-1].classList.add('filled');
            } else {
                img.className = 'notVisible';
                dots.children[Number(img.id)-1].className = 'dot';
            }
        })
    }

    const automaticSlide = () => {
        forwardSlide();
        setTimeout(automaticSlide, 3000);
    }

    return {buttonsListener}
}
imageSlider().buttonsListener();