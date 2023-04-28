import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

export default function ViewNote() {

    const [note, setNote] = useState({
        name: "",
        description: "",
        content: ""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadNote();
    }, [])

    const loadNote = async ()=>{
        const result = await axios.get(`http://localhost:9192/fullstack/note/${id}`);
        console.log(result.data,"result")
        setNote(result.data);
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Complete Note </h2>
                <div className='card'>
                    <div className='card-header'>
                        id : {note.id}
                        <b>Content: </b>
                            {note.content}
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={'/'}>
                    Back To Home
                </Link>
            </div>
        </div>
    </div>
  )
}
