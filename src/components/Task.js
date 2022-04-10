import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <>
      {/* <h3>{task.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={onDelete}/></h3> */}
      <h3 className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      {task.text}{' '}
      <FaTimes 
        style={{color:'red', cursor: 'pointer'}} 
        onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.day}</p>
    </>
  )
}

export default Task