const app = new Vue({
    el: '#app',
    data: {
        red: 150,
        green: 150,
        blue: 150,
    },
    computed: {
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
                color: `rgb(0, 0, ${this.blue})`
            }
        },
        displayColor: function() {
            return {
                backgroundColor: `rgb(${this.red}, ${this.green}, ${this.blue})`
            }
        },
        rgbToHex: function() {
            return "#" + ((1 << 24) + (this.red << 16) + (this.green << 8) + this.blue).toString(16).slice(1);
        }
    },
    methods: {
        getNumbers: function (start, stop) {
            return new Array(stop - start).fill(start).map((n, i) => n + i);
        }
    }
})