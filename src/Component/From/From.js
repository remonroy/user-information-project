import React, { useState } from 'react';

const From = () => {
    const[information,setInfromation]=useState({
        isfail:true,
        firstName :'',
        lastName  :'',
        email     :''
    })
    const[message,setMessage]=useState(false)
    
    const handleBlur=(e)=>{
        let isFromValid=true;
        
        if (e.target.name === "firstName") {
            isFromValid=e.target.value.length < 54
            
        }
        if (e.target.name === "lastName") {
            isFromValid=e.target.value.length < 54
        }
        if (e.target.name === "email") {
            isFromValid=/\S+@\S+\.\S+/.test(e.target.value)
            
        }
        if (isFromValid) {
            const newUserinfo={...information}
            newUserinfo[e.target.name]=e.target.value
            setInfromation(newUserinfo)
        }
    }
    const handleSubmit=(e)=>{
        const allreviewInfo={
            firstName:information.firstName,
            lastName:information.lastName,
            email:information.email,
            
        }
        console.log(allreviewInfo);
        fetch('http://localhost:4000/infopost',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(allreviewInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            setMessage(data)
            window.location.reload()
        })
        
        e.preventDefault();
    }
    return (
        <section className="container-fluid row MB-5">
            {/* <p>Cheking information</p>
           <p>FirstName:{information.firstName}</p>
           <p>FirstName:{information.lastName}</p>
           <p>Email:{information.email}</p> */}
            <div className="col-md-10 p-2 pr-5 p-3" >
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1">first Name</label>
                        <input onBlur={handleBlur} required type="name" className="form-control" name="firstName" placeholder="First name" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">last Name</label>
                        <input onBlur={handleBlur} required type="text" className="form-control" name="lastName" placeholder="last name" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input onBlur={handleBlur} required type="email" className="form-control" name="email" placeholder="email" />
                        
                    </div>
                       
                    <input type="submit" value="submit"/>
                        {
                            message && <p style={{color:"green"}}>Your info added successful....!</p>
                        }
                       
                </form>
            </div>
        </section>
    );
};

export default From;