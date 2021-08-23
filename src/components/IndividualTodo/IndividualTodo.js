import React from 'react'
import {Icon} from 'react-icons-kit'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'

export default function IndividualTodo({individualTodo, deleteTodo}) {

    const handleDelete = () => {
        deleteTodo(individualTodo.id);
    }

    return (
      <div className='todo'>
          <div>
              {individualTodo.Todo}
          </div>
          <div className='actions-div'>
            <div>
                <Icon size={18} icon={edit2} />
            </div>
            <div className='delete-btn' onClick={handleDelete}>
                <Icon size={18} icon={trash} />
            </div>
          </div>
      </div>
    )
}
