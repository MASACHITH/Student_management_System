import React,{useState} from "react";

export default function AddStudent(){

    return(
    <div className="container">
    <form>
        <div >
          <label for="name" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="name" aria-describedby="Enter Student Name" placeholder="Enter Student Name"/>
        </div>
        <div >
          <label for="age" class="form-label">Student Age</label>
          <input type="text" class="form-control" id="age" aria-describedby="Enter Student Age" placeholder="Enter Student Age"/>
        </div>
        <div >
          <label for="gender" class="form-label">Student Gender</label>
          <input type="text" class="form-control" id="gender" aria-describedby="Enter Student Gender" placeholder="Enter Student Gender"/>
        <div></div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    )
}