import React from 'react'

export default function T(props) {
  return (
    <div>
      <input type="text" className={props.txt.done ? 'text':''} readOnly value={props.txt.nom} style={{fontWeight:'bolder'}} id='en' />
      <input type="button" onClick={props.remove}  value="suprimer"  className='btn'  id='sup'/>
      <input type="button" onClick={()=>props.chager(props.txt.id) } value="done" className='btn' id='done' />
    
    </div>
  )
}