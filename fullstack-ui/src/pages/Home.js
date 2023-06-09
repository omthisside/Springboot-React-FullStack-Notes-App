import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  const [notes, setNotes] = useState([]);

  const {id} = useParams();

  useEffect(()=> {
    loadNotes();
  }, []);

  const loadNotes=async()=>{
    const result = await axios.get("http://localhost:9192/fullstack/notes");
    setNotes(result.data);
  }

  const deleteNote = async(id) => {
    await axios.delete(`http://localhost:9192/fullstack/note/${id}`);
    loadNotes();
  }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Content</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes.map((note, index) => (
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{note.name}</td>
                            <td>{note.description}</td>
                            <td>{note.content}</td>
                            <td>
                                <Link className='btn btn-primary mx-2'
                                    to = {`/viewnote/${note.id}`}
                                >View</Link>
                                <Link className='btn btn-outline-primary mx-2'
                                    to = {`/editnote/${note.id}`}
                                >Edit</Link>
                                <button className='btn btn-danger mx-2'
                                    onClick={()=> deleteNote(note.id)}
                                >Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>    
        </div>        
    </div>
  )
}
