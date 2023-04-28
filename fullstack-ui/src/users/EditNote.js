import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditNote() {

    let navigate = useNavigate()

    const {id} = useParams();

    const [note, setNote] = useState({
        name: "",
        description: "",
        content: "",
    })

    const { name, description, content } = note; 

    const onInputChange = (e)=>{
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    useEffect(()=> {
        loadNote();
    }, []);

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:9192/fullstack/note/${id}`, note);
        navigate('/');
    }

    const loadNote = async ()=>{
        const result = await axios.get(`http://localhost:9192/fullstack/note/${id}`)
        setNote(result.data)
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Edit Note</h2>
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
