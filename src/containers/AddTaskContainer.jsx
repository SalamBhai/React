import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MdOutlineSave } from 'react-icons/md'
import { IconButton, InputField } from '../components';
import InputContainer from './InputContainer';
import './styles/AddTaskContainer.css'

const AddTaskContainer = ({ prev, categories, tasks, funcToSetTask }) => {

    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b']

    const [selectedColor, setSelectedColor] = useState(colors[0])

    const [selectedCategories, setSelectedCategories] = useState([])

    const [taskObject, setTaskObject] = useState({
        color: selectedColor,
    })

    const handlecategoryClick = (id) => {

        selectedCategories.includes(id) ?
            setSelectedCategories(selectedCategories.filter(category => category !== id)) :
            setSelectedCategories([...selectedCategories, id])
           

    }

    const handleColorClick = (c) => {

        setSelectedColor(c)

        setTaskObject({ ...taskObject, color: c })

    }
    const handleInputChange = (e) => {
        setTaskObject({ ...taskObject, [e.target.name]: e.target.value })

        // if(e.target.name == 'title')
        // {
        //     setTaskObject({...taskObject, title: e.target.value})
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        taskObject.isCompleted = false;
        taskObject.id = Math.floor(Math.random() * 100000000);

        console.log(taskObject);

        funcToSetTask(taskObject);

        prev();
    }

    useEffect(() => {
        setTaskObject({ ...taskObject, categories: selectedCategories })
    }, [selectedCategories])

    useEffect(() =>{
        console.log(taskObject)
    }, [taskObject])



    return (
        <div className="add-task-container">
            <div className="add-task-header">
                <IconButton icon={<BsFillArrowLeftCircleFill />} clickAction={prev} />
                <h4>Add Task </h4>
                <span></span>
            </div>

            <div className="add-task-content">
                <InputContainer label={'Task Color'}>
                    <div className='color-picker' style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        {
                            colors.map(c => <div className={`${selectedColor === c ? 'selectedColor' : ''}`} style={{ backgroundColor: c, width: '30px', height: '30px', borderRadius: '500px' }} onClick={() => handleColorClick(c)}>

                            </div>)
                        }
                    </div>
                </InputContainer>
                <form onSubmit={handleSubmit}>

                    <InputContainer label={'Title'}>
                        <InputField type='text' id='title' changeEvent={handleInputChange} />
                    </InputContainer>

                    <InputContainer label={'Date'}>
                        <InputField type='date' id='date' changeEvent={handleInputChange} />
                    </InputContainer>

                    <InputContainer label={'Time'}>
                        <InputField type='time' id='time' changeEvent={handleInputChange} />
                    </InputContainer>


                    <InputContainer label={'Select Categories'}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {categories.map(category =>
                                <div
                                    className={`timeline-item ${selectedCategories.includes(category.id) ? 'active' : 'inactive'}`} onClick={() => handlecategoryClick(category.id)}>
                                    {category.title}
                                </div>)}
                        </div>
                    </InputContainer>

                    <div style={{ marginTop: '30px' }}>
                        <button type='submit' style={{
                            backgroundColor: selectedColor,
                            color: 'black',
                            width: '100%',
                            borderRadius: '20px',
                            padding: '10px',
                            border: 'none',
                            outline: 'none',
                            fontSize: '0.9em',
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px'
                        }}>
                            <MdOutlineSave />
                            Add Task
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddTaskContainer;