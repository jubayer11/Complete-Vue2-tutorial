export const fruitMixin=
    {
        data:()=>
        {
            return{
                fruits:['Apple','Bananna','Mango','Melon'],
                filterText:'',
            }
        },
        created()
        {
            console.log('mixin life cycle method');
        },
        filters:
            {
                toUppercase(value)
                {
                    return value.toUpperCase();
                }
            },

        computed:
            {
                filteredFruits()
                {
                    return this.fruits.filter((el)=>
                    {
                        return el.match(this.filterText);
                    })
                }
            }
    }