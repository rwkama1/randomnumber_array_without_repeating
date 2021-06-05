class Array
{
    constructor(parray)
    {
        this.array=parray;
    }
    random_number_without_repeating=()=>
    {
  let arr=this.array;
  let array_length=this.array.length;
  let r=array_length+1;
      for(let a=0;a<=array_length;a++)
      {
        let c=0;
        let random=Math.floor(Math.random()*((r-1)*2)+1);
        
        for(let b=0;b<=array_length;b++)
        {
           if(random===this.array[b])
           {
               c=1;
           }
        }
        if(c===1)
        {
            a=a-1;
        }
        else
        {
            this.array[a]=random;
        }
      }
     
      return arr;
    }


}
module.exports={Array}