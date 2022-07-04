const app = new Vue
(
    {
        el: '#root',
        data: {
            name: "",
            surName: "",
            url: "",
            urlInput: ""
        },

        methods: {
            imgInput: function(){
                this.url = this.urlInput;
            }
        }
    }
);
