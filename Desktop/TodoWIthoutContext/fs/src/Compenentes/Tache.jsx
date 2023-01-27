import React from 'react'
import { useState } from 'react';
import{v4 as uuidv4} from 'uuid';
import T from './T';
import './Style.css'

export default function Tache() {
    const [tache,setTache]=useState([
        {id:uuidv4(),nom:'read',done:false},
        {id:uuidv4(),nom:'sport',done:false},
        {id:uuidv4(),nom:'play',done:false}
        ])
    
        const [taches,setTaches]=useState('');

        
        const addTache=()=>{
            let ntache=[...tache];
            let nTache={};
            nTache.id=uuidv4();
            nTache.nom=taches;
            ntache.push(nTache);
            setTache(ntache);
            setTaches('');
        }
    
        const removeTache=(idp)=>{
            let nTache=tache.filter((t)=>{
                return t.id!=idp
            })
    
            setTache(nTache); 
        }
        const chager=(id)=>{
            let arr=tache.map((e)=>{
                if (e.id===id){
                    e.done=!e.done;
    
                }
                return e
            })
            setTache(arr)
        }
  return (
    <div>
        <h1>To_Do without Context</h1>
        <form action="">
             <input type="text" className='form-control' onChange={(e)=>(setTaches(e.target.value))} value={taches} />
            <br />
            <input type="button" onClick={addTache} value="ajouter une tache" className='btn' id='btn' />
        </form>
            <br /><br />
            <ul>
                {
                    tache.map((t)=>{
                        return <li key={t.id}><T remove={()=>{removeTache(t.id)}} chager={chager} txt={t}></T> </li>
                    })
                }
            </ul>
    </div>
  )
}
