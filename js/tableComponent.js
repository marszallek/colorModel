let objectOf33Colors = [];
for(let i=0; i<30; i++){
    objectOf33Colors.push(Math.round(Math.random(i)* 255))
}

Vue.component('table-of-colors', {
    template: '<table>'+
                '<tr>'+
                    '<th>Color In Hexidecimal</th>'+
                    '<th>Display Color</th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ first }}</th>'+
                    '<th v-bind:style="{ backgroundColor: first}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ second }}</th>'+
                    '<th v-bind:style="{ backgroundColor: second}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ third }}</th>'+
                    '<th v-bind:style="{ backgroundColor: third}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ fourth }}</th>'+
                    '<th v-bind:style="{ backgroundColor: fourth}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ fifth }}</th>'+
                    '<th v-bind:style="{ backgroundColor: fifth}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ sixth }}</th>'+
                    '<th v-bind:style="{ backgroundColor: sixth}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ seventh }}</th>'+
                    '<th v-bind:style="{ backgroundColor: seventh}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ eighth }}</th>'+
                    '<th v-bind:style="{ backgroundColor: eighth}"></th>'+
                    '</tr>'+
                '<tr>'+
                    '<th>{{ ninth }}</th>'+
                    '<th v-bind:style="{ backgroundColor: ninth}"></th>'+
                '</tr>'+
                '<tr>'+
                    '<th>{{ tenth }}</th>'+
                    '<th v-bind:style="{ backgroundColor: tenth}"></th>'+
                '</tr>'+
            '</table>',
    props: {
        objectOf33Colors,
        randomButton: ''
    },
    /*data() {
        return {
            objectOf33Colors,
            randomButton: false
        }
    },*/
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

vm.objectOf33Colors;
vm.randomButton = false;