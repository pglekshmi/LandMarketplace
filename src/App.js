
//  import { useState } from "react";
 import {useForm} from "react-hook-form";
function App() {
   const {register, handleSubmit, formState : {errors}} = useForm();
  // const[userInfo, setUserInfo]=useState();
  
  const handleRegistration = (data) => {console.log(data)
                               alert("Registered Successfully")};
                              
  return (
    <div>
   
    <form onSubmit = {handleSubmit(handleRegistration)} 
          id="userform"> 
   <div>
  <label> Name:</label>
    <input type="text" 
           name="username" 
           placeholder="Username" 
           {...register('username',{required:true})} />
    {errors.username && errors.username.type === "required" && <span font-color="red">This is required
      </span>}
  <br/>
  <br/>
  <label>Email ID:</label>
    <input type="text" 
          name="email" 
          placeholder="Enter valid email id" 
          {...register('email',{required:true})} />
     {errors.username && errors.username.type === "required" && <span>This is required
     
      </span>}
   <br/>
  <br/>
  <label>Phone No:</label>
    <input type="text" 
           name="phone"
           placeholder="Enter 10-digit mobile number"
            {...register('phone',{required:true})} />
    {errors.username && errors.username.type === "required" && <span>This is required
      </span>}
    <br/>
  <br/>
  <label> Address:</label>
    <textarea name="address" 
              placeholder="Enter address as on ID proof" 
              form="userform" {...register('address',{required:true})}/>
     {errors.address && errors.address.type === "required" && <span>This is required
      </span>}
      <br/>
  <br/>
  <label> PinCode:</label>
    <input type="text"
           name="pincode"
           placeholder="Enter 6-digit pincode"
            {...register('pincode',{required:true})}/>
     {errors.pincode && errors.pincode.type === "required" && <span>This is required
      </span>}
      <br/>
  <br/>
  
  <label>Aadhar No:</label>
    <input type="text" 
           name="adhar" 
           placeholder="Enter valid Adhar no."
           {...register('adhar',{required:true})}/>
     {errors.adhar && errors.adhar.type === "required" && <span>This is required
      </span>}
    <br/>
    <br/>
    <label> PAN No:</label>
    <input type="text"
           name="pan" 
           placeholder="Enter PAN No" 
           {...register('pan',{required:true})}/>
     {errors.pan && errors.pan.type === "required" && <span>This is required
      </span>}
      <br/>
  <br/>
  <label> Password:</label>
    <input type="password"
           name="password" 
           placeholder="Enter password" 
           {...register('password',{required:true , maxLength: 8, minLength: 4})}/>
     {errors.password && errors.password.type === "required" && <span>This is required
      </span>}
      {errors.password && errors.password.type === "maxLength" && <span>Max length exceeded</span> }
      {errors.password && errors.password.type === "minLength" && <span>Need atleast 4 characters</span> }
      <br/>
  <br/>
  
  
    </div>
  <button>Submit</button>

</form>
</div>
  );
}

export default App;
