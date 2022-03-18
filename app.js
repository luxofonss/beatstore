const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var beatsList = $('.main__beats-list >.row')
var songsList = $('.main__songs-list >.row')
var currSong = $('.main__playing-song')
var followBtn = $('.follow-btn')
var navItems = $$('.nav-item')
var audio = $('#audio')
var forward = $('.playing-btn-foward')

var app = {
    beats: [
        {
            beatName: 'Always with you',
            author: 'Luxofons',
            img: './assets/image/ALWAYS WITH YOU dtk.png',
            src: './assets/beats/always with you.mp3',
            price: '$35.00',
            tempo: '75 BMP'
        },
        {
            beatName: 'Cat and Peach',
            author: 'Luxofons',
            img: './assets/image/cat and peach.png',
            src: './assets/beats/cat and peach.wav',
            price: '$35.00',
            tempo: '80 BMP'
        },
        {
            beatName: 'Raining',
            author: 'Luxofons',
            img: './assets/image/rarining.png',
            src: './assets/beats/raining day.mp3',
            price: '$35.00',
            tempo: '75 BMP'
        },
        {
            beatName: 'Stay',
            author: 'Luxofons',
            img: './assets/image/stay.png',
            src: './assets/beats/stay.mp3',
            price: '$35.00',
            tempo: '75 BMP'
        },
        {
            beatName: 'Raining',
            author: 'Luxofons',
            img: './assets/image/rarining.png',
            src: './assets/beats/raining day.mp3',
            price: '$35.00',
            tempo: '75 BMP'
        },
        {
            beatName: 'Stay',
            author: 'Luxofons',
            img: './assets/image/stay.png',
            src: './assets/beats/stay.mp3',
            price: '$35.00',
            tempo: '75 BMP'
        }
    ],

    songs: [
        {
            songName: 'Ai đâu hay',
            author: 'Sean x Luxofons',
            img: './assets/image/aidauhay.jpg',
            src: './assets/songs/ai dau hay.mp3'
        },
        {
            songName: 'An nhiên',
            author: 'Sóc Nâu',
            img: './assets/image/annhien.jpg',
            src: './assets/songs/an nhien.mp3'
        },
        {
            songName: 'Hongkong12',
            author: 'MC12 x Nguyễn Trọng Tài',
            img: './assets/image/hongkong12.jpg',
            src: './assets/songs/hongkong12.mp3'
        },
        {
            songName: 'Muốn nhậu cùng không',
            author: 'Linh Cáo',
            img: './assets/image/nhaucungkhong.jpg',
            src: './assets/songs/muon nhau cung khong.mp3'
        },
        {
            songName: 'Hongkong12',
            author: 'MC12 x Nguyễn Trọng Tài',
            img: './assets/image/hongkong12.jpg',
            src: './assets/songs/hongkong12.mp3'
        },
        {
            songName: 'Muốn nhậu cùng không',
            author: 'Linh Cáo',
            img: './assets/image/nhaucungkhong.jpg',
            src: './assets/songs/muon nhau cung khong.mp3'
        }

    ],

    render: function () {
        const beatHtmls = this.beats.map(beat => {
            return `
            <div class=" col l-3 m-4 c-6">
                <div class="beat-item">
                    <div class="beat-item-img">
                        <img src="${beat.img}" class="beat-image"
                            alt="">
                        <div class="play-pause">
                            <div class="play-btn hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            
                        </div>
                    </div>
                    <div class="beat-detail">
                        <div class="beat-price">${beat.price}</div>
                        <div class="beat-download">
                            <div class="text">Free</div>
                            <div class="download-logo item-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </div>
                        <div class="beat-tempo">
                        ${beat.tempo}
                        </div>
                    </div>
                    <div class="beat-name">
                        ${beat.beatName}
                    </div>
                </div>
            </div>
            `
        })
        beatsList.innerHTML = beatHtmls.join('')

        const songsHtmls = this.songs.map(song => {
            return `
            <div class=" col l-3 m-4 c-6">
                <div class="beat-item">
                    <div class="beat-item-img">
                        <img src="${song.img}" class="beat-image" alt="">
                        <div class="play-pause">
                            <div class="play-btn hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="pause-btn hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="beat-detail">
                        <div class="song-artist beat-price">${song.author}</div>
                    </div>
                    <div class="beat-name">
                        ${song.songName}
                    </div>
                </div>
            </div>
            `
        })
        songsList.innerHTML = songsHtmls.join('')

    },

    handleEvents: function () {
        var isPlaying = false
        var playBtn = $$('.play-btn')
        var _this = this
        Array.from(playBtn).forEach(function (song, index) {
            playBtn[index].onclick = function () {
                audio.src = _this.beats[index].src
                var playPauseBtn = song.parentElement
                console.log(playPauseBtn)
                if (isPlaying === false) {
                    console.log('play')
                    isPlaying = true
                    playPauseBtn.innerHTML = `
                    <div class="pause-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>`
                    audio.play()
                }
                else {
                    console.log('pause')
                    isPlaying = false
                    playPauseBtn.innerHTML = `
                    <div class="play-btn hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>`
                    audio.pause()
                }
            }
        })
        // Follow
        var followed = false
        followBtn.addEventListener('click', function () {
            if (followed === false) {
                followBtn.innerHTML = `
                <div class="item-logo-top">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span class="text">Followed</span>
                `
                followBtn.classList.add('followed')
                followed = true
            }
            else {
                followBtn.innerHTML = `
                <div class="item-logo-top">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span class="text">Follow</span>
                `
                followBtn.classList.remove('followed')
                followed = false
            }
        })

        // Nav-bar
        var currNav = 0

        for (let index in navItems) {
            navItems[index].onclick = function () {
                navItems[currNav].classList.remove('active')
                this.classList.add('active')
                currNav = index
            }
        }
    },

    start: function () {
        this.render()
        this.handleEvents()
    }
}

app.start()

