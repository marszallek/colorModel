let objectOf33Colors = [];
for(let i=0; i<30; i++){
    objectOf33Colors.push(Math.round(Math.random(i)* 255))
}
const cmyk = new Vue({
    el: '#cmyk',
    data: {
        cyan: 100,
        magenta: 100,
        yellow: 100,
        objectOf33Colors,
        randomButton: false
    },
    computed: {
        cyanColor: function() {
            let red = Math.round(255 * ( 1 - this.cyan / 100 ));
            return {
                color: `rgb(${red}, 255, 255)`, 
            }
        },
        magentaColor: function() {
            let green = Math.round(255 * ( 1 - this.magenta / 100 ));
            return {
                color: `rgb(255, ${green}, 255)`, 
            }
        },
        yellowColor: function() {
            let blue = Math.round(255 * ( 1 - this.yellow / 100 ));
            return {
                color: `rgb(255, 255, ${blue})`, 
            }
        },
        displayCMYK: function() {
            let red = Math.round(255 * ( 1 - this.cyan / 100 ));
            let green = Math.round(255 * ( 1 - this.magenta / 100 ));
            let blue = Math.round(255 * ( 1 - this.yellow / 100 ));
            return {
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }
        },
        fontCMYK: function() {
            let red = Math.round(255 * ( 1 - this.cyan / 100 ));
            let green = Math.round(255 * ( 1 - this.magenta / 100 ));
            let blue = Math.round(255 * ( 1 - this.yellow / 100 ));
            return {
                color: `rgb(${red}, ${green}, ${blue})`
            }
        },
        cmykToHex: function() {
            let red = Math.round(255 * ( 1 - this.cyan / 100 ));
            let green = Math.round(255 * ( 1 - this.magenta / 100 ));
            let blue = Math.round(255 * ( 1 - this.yellow / 100 ));
            return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
        },
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
    },
    methods: {
        changeColors: function() {
            this.randomButton = true;
            this.objectOf33Colors = [];
            for(let i = 0; i < 32; i++){
                this.objectOf33Colors.push(Math.round(Math.random(i)* 255))
            }
        },
    }
})