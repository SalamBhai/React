import { MdDateRange, MdAccessTime } from 'react-icons/md';
import { FaPenSquare } from 'react-icons/fa';

const Taskcard = ({ task, categories }) => {
    return (
        <div style={{ backgroundColor: task.color }} className="task-container">
            <div className='task-content'>
                <div className='task-categories-container'>
                    {
                        categories.map(category =>
                            <span className='task-category'>
                                {category.title}
                            </span>)
                    }
                </div>
                <h4>{task.title}</h4>

                <div className='task-date-time'>
                    <div>
                        <MdDateRange />
                        <span> {task.date}</span>
                    </div>
                    <div>
                        <MdAccessTime />
                        <span> {task.time}</span>
                    </div>
                </div>
            </div>
            <div className="task-actions">
                <FaPenSquare />

                <div className="round">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox"></label>
                </div>
            </div>

        </div>
    )
}

export default Taskcard;