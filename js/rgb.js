let objectOf33Colors = [];
for(let i=0; i<30; i++){
    objectOf33Colors.push(Math.round(Math.random(i)* 255))
}

const rgb = new Vue({
    el: '#rgb',
    data: {
        red: 150,
        green: 150,
        blue: 150,
        objectOf33Colors,
        randomButton: false,
        setOfColors: {
            randomColors() {
                return Math.round(Math.random() * 255)
            }
        },
    },
    computed: {
        first: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[0] << 16) + (this.objectOf33Colors[1] << 8) + this.objectOf33Colors[2]).toString(16).slice(1)
        },
        second: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[3] << 16) + (this.objectOf33Colors[4] << 8) + this.objectOf33Colors[5]).toString(16).slice(1)
        },
        third: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[6] << 16) + (this.objectOf33Colors[7] << 8) + this.objectOf33Colors[8]).toString(16).slice(1)
        },
        fourth: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[9] << 16) + (this.objectOf33Colors[10] << 8) + this.objectOf33Colors[11]).toString(16).slice(1)
        },
        fifth: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[12] << 16) + (this.objectOf33Colors[13] << 8) + this.objectOf33Colors[14]).toString(16).slice(1)
        },
        sixth: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[15] << 16) + (this.objectOf33Colors[16] << 8) + this.objectOf33Colors[17]).toString(16).slice(1)
        },
        seventh: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[18] << 16) + (this.objectOf33Colors[19] << 8) + this.objectOf33Colors[20]).toString(16).slice(1)
        },
        eighth: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[21] << 16) + (this.objectOf33Colors[22] << 8) + this.objectOf33Colors[23]).toString(16).slice(1)
        },
        ninth: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[24] << 16) + (this.objectOf33Colors[25] << 8) + this.objectOf33Colors[26]).toString(16).slice(1)
        },
        tenth: function () {
            return "#" + ((1 << 24) + (this.objectOf33Colors[27] << 16) + (this.objectOf33Colors[28] << 8) + this.objectOf33Colors[29]).toString(16).slice(1)
        },
        getRedColor: function() {
            return {
                color: `rgb(${this.red}, 0, 0)`,
            }
        },
        getGreenColor: function() {
            return {
                color: `rgb(0, ${this.green}, 0)`,
            }
        },
        getBlueColor: function() {
            return {
                color: `rgb(0, 0, ${this.blue})`,
            }
        },
        displayRGB: function() {
            return {
                backgroundColor: `rgb(${this.red}, ${this.green}, ${this.blue})`,
            }
        },
        fontRGB: function() {
            return {
                color: `rgb(${this.red}, ${this.green}, ${this.blue})`,
            }
        },
        rgbToHex: function() {
            return "#" + ((1 << 24) + (this.red << 16) + (this.green << 8) + this.blue).toString(16).slice(1);
        },
    },
    methods: {
        getNumbers: function (start, stop) {
            return new Array(stop - start).fill(start).map((n, i) => n + i);
        },
        changeColors: function() {
            this.randomButton = true;
            this.objectOf33Colors = [];
            for(let i = 0; i < 32; i++){
                this.objectOf33Colors.push(Math.round(Math.random(i)* 255))
            }
        },
    }
})