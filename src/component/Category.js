import {React,useState} from 'react'
import list from "../data"

function Category() {
     
const [data,setData]=useState(list);

const filterResult=(catItem)=>{
  const result=list.filter((curData)=>{
    return curData.category===catItem
  });
  setData(result)
 console.log(result)
}
  return (
    <div>
       
   
    <div className="category">
  <button onClick={()=>filterResult('dress')}>Dresses</button>
  <button onClick={()=>filterResult('jacket')}>Jackets</button>
</div>

</div>
  )
}

export default Category