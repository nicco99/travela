import React,{useState} from 'react'



   

function Search() {
   const [inputs, setInputs] = useState({});

     const handleChange = (event) => {
       const name = event.target.name;
      const value = event.target.value;
       setInputs(values => ({...values, [name]: value}))
     }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  return (
    
    <div className='search'>
      <div className='flex justify-center   h-full w-full'>
        <div className="background shadow-lg h-4/5 ">
            <form onSubmit={handleSubmit} className="my-8">
                <label className='p-5 bg-slate-200'>From:
                     <select name="cities" id="cities">
                          <option value="Nairobi">Nairobi</option>
                          <option value="Mombasa">Mombasa</option>
                          <option value="Nakuru">Nakuru</option>
                    </select>
                </label>
    
                 <label className='p-5 bg-slate-200 ' >To:
                     <select name="cities" id="cities">
                         <option value="Mombasa">Mombasa</option>
                         <option value="Nairobi">Nairobi</option>
                        <option value="Nakuru">Nakuru</option>
    
                    </select>
                </label>
           
                <input className='bg-sky-500 p-5 ml-4 rounded-md' type="button" value="Go" />
            </form>
        </div>
      </div>
    </div>
  )
}

 
 
 
 

export default Search