import React, {useState, Component, useEffect} from "react";
import axios from "axios";



export default function UpdateStudent(){
    

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e){
        e.preventDefault();
        const id = this.props.match.params.id;
        
        const newStudent = {
            name,
            age,
            gender
        }
        
        axios.put(`http://localhost:8070/student/update/${id}`,newStudent)
        .then(()=>{
            alert("Student added")
        }).catch((err)=>{
            alert(err)
        })


    }
    


    
    


    return(
        <div className="container">
            <form onSubmit={sendData}>
                <div class="mb-3">
                    <label for="name">Student Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Student Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                </div>

                <div class="mb-3">
                    <label for="age">Student Age</label>
                    <input type="text" class="form-control" id="age" placeholder="Enter Student Age"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                </div>

                <div class="mb-3">
                    <label for="gender">Student Gender</label>
                    <input type="text" class="form-control" id="gender" placeholder="Enter Student Gender"
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}/>   
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}