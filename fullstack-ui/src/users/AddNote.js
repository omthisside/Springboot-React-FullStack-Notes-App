import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddNote() {

    let navigate = useNavigate()

    const [note, setNote] = useState({
        name: "",
        description: "",
        content: "",
    })

    const{name, description, content}=note;

    const onInputChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:9192/fullstack/note', note);
        navigate('/');
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Create a note</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Name
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter name of the note'
                            name="name"
                            value={name}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>
                            Description
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter a description'
                            name="description"
                            value={description}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Content' className='form-label'>
                            Content
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter the content'
                            name="content"
                            value={content}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
