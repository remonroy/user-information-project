import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faUserEdit} from '@fortawesome/free-solid-svg-icons'
import './Card.css'

const Card = () => {
    const[info,setInfo]=useState([])
    const[update,setUpdate]=useState([])
    const[updateOne,setUpdateOne]=useState([])
    const[updateTwo,setUpdateTwo]=useState([])
    console.log(updateOne,updateTwo);
    const[id,setId]=useState()

    const loadData=()=>{
        fetch('http://localhost:4000/showData')
        .then(res=>res.json())
        .then(data=>{
            setInfo(data)
            
        })
    }
    
    useEffect(()=>{
        loadData()
    },[])
    const handleClick=(id)=>{
        fetch(`http://localhost:4000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(Infodata=>{
            console.log(Infodata)
            window.location.reload();
        })
    }
    const handleUpdate=(id)=>{
        
        fetch(`http://localhost:4000/update/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setUpdate(data[0].firstName)
            setUpdateOne(data[0].lastName)
            setUpdateTwo(data[0].email)
        })
        setId(id)
    }
   const handleSubmit=(e)=>{
        e.preventDefault()
        const valuing=e.target[0].value
        const updateData={
            id:id,
            status:valuing,
            lastName:updateOne,
            email:updateTwo
        }
        console.log(updateData);
        fetch('http://localhost:4000/updateFild',{
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                loadData()
                setUpdate('')
                setUpdateOne('')
                setUpdateTwo('')
            }
        })
        

    }
    return (
        <section className=" container-fluid row  mt-5">
            {
                info.map((inf,index)=>
                <div className="col-md-3">        
   
                    <div className="mainDive">
                        <div className="folotig">
                            <div className="letSite">#{index + 1}</div>
                            <div className="rightSite">
                                <button onClick={()=>handleUpdate(inf._id)}><FontAwesomeIcon icon={faUserEdit} /></button>
                                <button onClick={()=>handleClick(inf._id)}><FontAwesomeIcon  icon={faTrash} /></button>
                                {/* <ModalOpen inf={inf} modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalOpen> */}
                            </div>
                        </div>
                        <div className="midle">
                            <p>FirstName: {inf.firstName}</p>
                            <p>LastName: {inf.lastName}</p>
                            <p>Email: {inf.email}</p>

                        </div>
                    </div>
                </div>
                
                )
            }
           
            <div className="mainnnn">
                <form onSubmit={handleSubmit}>
                    <input value={update} onChange={(e)=>setUpdate(e.target.value)} className="form-control" type="text" name="updateName"/>
                    <input value={updateOne} onChange={(e)=>setUpdateOne(e.target.value)} className="form-control" type="text" name="updateLastName"/>
                    <input value={updateTwo} onChange={(e)=>setUpdateTwo(e.target.value)} className="form-control" type="text" name="updateEmail"/>
                   
                    <input type="submit" value="update"/>
                </form>
            </div>
                    
        </section>
    );
};

export default Card;