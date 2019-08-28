const tabs_switcher = {
    btns: document.querySelectorAll('.btn__tab'),
    tabs: document.querySelectorAll('.main__tab'),
    switch () {
        for (let i = 0; i < this.btns.length; i++) {
            this.btns[i].addEventListener('click', e => {
                document.querySelector('.main__container').classList.add('normal__width');
                for (let j = 0; j < this.btns.length; j++) {
                    this.btns[j].classList.remove('active__btn', 'border__right', 'border__left', 'border__both');
                    this.tabs[j].classList.remove('active__tab');
                }
                this.btns[i].classList.add('active__btn');
                this.tabs[i].classList.add('active__tab');
                
                if (i === 0) {
                    this.btns[1].classList.add('border__left');
                    this.btns[2].classList.add('border__left');
                } else if (i === 1) {
                    this.btns[0].classList.add('border__right');
                    this.btns[2].classList.add('border__left');
                } else {
                    this.btns[0].classList.add('border__right');
                    this.btns[1].classList.add('border__right');
                }
            })
        }
    }
}
tabs_switcher.switch();