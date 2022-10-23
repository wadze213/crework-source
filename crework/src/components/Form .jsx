import { useState, useEffect} from 'react'
import '../components/component-styles/styles.css'
import FormInput from './FormInput'



let Input = localStorage.getItem("SignupForm")?
JSON.parse(localStorage.getItem("SignupForm")):[];


const Form = () => {

  const [values,setValues]=useState([Input])


useEffect(() => {
  localStorage.setItem("SignupForm",JSON.stringify(values))//chores-dependency

},[values])




const input =[
  {
    id:1,
    name:"firstname",
    type:"text",
    placeholder:"Enter First name",
    label:"First name",
    errorMessage:"Please enter your First name",
    required:true,
  },
  {
    id:2,
    name:"lastname",
    type:"text",
    placeholder:"Enter Last name",
    label:"Last name",
    errorMessage:"Please enter your Last name",
    required:true,
  },
  {
    id:3,
    name:"email",
    type:"email",
    placeholder:"ex:myname@example.com",
    errorMessage:"It should be a valid email address!",
    label:"Email",
    required:true,
  },
  {
    id:4,
    name:"Position",
    type:"text",
    placeholder:"ex:Graphic Designer",
    label:"Position",
    errorMessage:"Please enter your Position",
    required:true,
  },
  {
    id:5,
    name:"Bio",
    type:"text",
    placeholder:"Enter your bio",
    label:"Bio",
    errorMessage:"Please enter your Bio",
    required:true,
   
  },
 

 
];


const handleSubmit = (e)=>{
  e.preventDefault();
  
  }
  const onChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  };





  





  return (
    <div className='forms center-section'>
      <form  onSubmit={handleSubmit}>
      <h1>Sign up</h1>
        {input.map((input) => (
            <FormInput key={input.id}{...input}
            value={values[input.name]} 
            onChange={onChange} />
        ))}
          
            
          <button type='submit' >Create my account</button>
            </form>
    </div>
  )
}

export default Form