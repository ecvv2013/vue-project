window.addEventListener('load', function () {
    var vm = new Vue({
        el: '#vm',
        data: {
            num: 0,
            bannerImgs: [
                'img/m1.jpg',
                'img/m2.jpg',
                'img/m3.webp',
                'img/m4.png'
            ],
            index: 0,
            styles: {
                class1: '',
                class2: ''
            },
            persons: {
                name: 'Tran',
                age: '33',
                sex: 'male',
                person: '<span>tran is 33 years old, male.</span>'
            },
            ShowAndDiv: '隐藏'
        },
        methods: {
            add: function () {
                if (this.num < 10) {
                    this.num++;
                } else {
                    alert('到顶了')
                }
            },
            sub: function () {
                if (this.num > 0) {
                    this.num--;
                } else {
                    alert('到底了')
                }
            },
            prev: function () {
                this.index--;
                this.bannerImgs[this.index];
            },
            next: function () {
                this.index++;
                this.bannerImgs[this.index];
            },
            hover:  function() {

            },
            toggle1: function() {
                if(this.styles.class1 == '') {
                    this.styles.class1 = 'sty2';
                    this.ShowAndDiv = '显示'
                } else {
                    this.styles.class1 = '';
                    this.ShowAndDiv = '隐藏'
                }
            },
            toggle2: function() {
                this.styles.class2 = 'banner'
            },
            toggle3: function() {
                this.styles.class2 = ''
            }
        }
    })
})