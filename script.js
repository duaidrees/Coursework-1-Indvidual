
    let app = new Vue({
        el: '#app',
        data:{
            items: items,
            cart:[],
            page: "items",
            sortBy: '',
            sortDirection: 'asc',
            search:'',
        },
        methods: {
            //This function is used to add items to cart and decrement space by 1//
            addtocart: function (item){
                if(item.spaces >= 1 ){
                item.spaces = item.spaces - 1;
                this.cart.push(item);
                }
                return item;
            },
            //This function is used to remove items from cart and increment space by 1//
            removeitem: function (item){
                this.cart.splice((item), 1);
                item.spaces = item.spaces +1;
                return item;
            },
            //This function is used to navigate between cart and lesson page//
            navigateTo(page){
                this.page= page;
            },
            //This function is used to sort items accroding to subject, price, location, availablity//
            sort: function(s){
                if(s === this.sortBy) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                }
                this.sortBy = s;
            },
        },

        computed: {
            //This function is used to sort items accroding to subject, price, location, availablity//
            sorteditems: function(){
                return this.items.sort((p1,p2) => {
                    let modifier = 1;
                    if(this.sortDirection === 'desc') modifier = -1;
                    if(p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier; if(p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
                    return 0;
                });
            },

            //This function is used to serach items from the search//
            filteredsearch(){
                if(this.search.trim().length>0){
                    return this.items.filter((item)=> item.subject.toLowerCase().includes(this.search.toLowerCase().trim()))}
                }
            },
    })
    
        //This function is used to validate the form and show alert message of sucessful registration//
        function submitClick() {
            if (formValidation()) {
                alert("Registration Sucessfull!");
                return true;
                } else {
                return false;
            }
        }

        //This function is used to validate the field of name and phone//
        function formValidation() {
            flag = true;

            // Validate letters only as Name
            if (document.checkout.name.value == "") {
            alert("Please fill in your Name!");
            flag = false;
            }

            // Validate letters only as Name
            if (!/^[a-zA-Z]*$/g.test(document.checkout.name.value)) {
            alert("Enter alphabetic characters as Name!");
            flag = false;
            }

            // Validate Phone number
            if (document.checkout.phone.value == "") {
            alert("Please fill in your Phone Number!");
            flag = false;
            }
            // Validate Numbers only as Phone
            if (!/^[0-9]*$/g.test(checkout.phone.value)) {
            alert("Enter numeric values as Phone Number!");
            flag = false;
            }
            return flag;
        }

