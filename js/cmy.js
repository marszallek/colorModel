const cmyk = new Vue({
    el: '#cmyk',
    data: {
        cyan: 100,
        magenta: 100,
        yellow: 100,
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
        cmykToHex: function() {
            let red = Math.round(255 * ( 1 - this.cyan / 100 ));
            let green = Math.round(255 * ( 1 - this.magenta / 100 ));
            let blue = Math.round(255 * ( 1 - this.yellow / 100 ));
            return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
        }
    },
    methods: {
        getNumbers: function (start, stop) {
            return new Array(stop - start).fill(start).map((n, i) => n + i);
        }
    }
})