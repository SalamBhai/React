import { useEffect } from "react";
import { useState } from "react";
import { FlotingButton } from "./components";
import { AddTaskContainer, Greeting, Heading, TimeLineContainer } from "./containers";
import TasksContainer from "./containers/TasksContainer";

function App() {

  const [currentPage, setCurrentPage] = useState('tasks');

  const categories = [
    {
      id: 1,
      title: 'School',

    },
    {
      id: 2,
      title: 'Work',
    },
    {
      id: 3,
      title: 'Home',
    },
    {
      id: 4,
      title: 'Sport',
    }

  ]

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Taking My Sister To School",
      date: "2022-04-10",
      time: "09:22",
      categories: [1, 2],
      isCompleted: false,
      color: '#4beed1'
    },
    {
      id: 2,
      title: "Create Name Name",
      date: "2022-04-09",
      time: "06:00",
      categories: [2, 4],
      isCompleted: false,
      color: '#fbe114'
    },
    {
      id: 3,
      title: "Do Yoga",
      date: "2022-04-07",
      time: "08:00",
      categories: [3, 4, 1],
      isCompleted: false,
      color: '#148cfb'
    },

    {
      id: 4,
      title: "Solve Sister Assignment",
      date: "2022-04-10",
      time: "09:00",
      categories: [1, 3],
      isCompleted: false,
      color: '#fb1467'
    },

  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const [selectedTimeline, setSelectedTimeline] = useState(0);

  const timelines = [
    {
      id: 0,
      title: 'All',
      // isActive: true,
    },
    {
      id: 1,
      title: 'Today',
      // isActive: true,
    },
    {
      id: 2,
      title: 'Skipped',
      // isActive: false,
    },
    {
      id: 3,
      title: 'Upcoming',
      // isActive: false,
    },
    {
      id: 4,
      title: 'Task Done',
      // isActive: false,
    }

  ];

  const [activeTimeline, setActiveTimeline] = useState(0);

  const getDate = () => new Date().toISOString().split('T')[0];
  const parseTaskTime = (date, time) => Date.parse(new Date(`${date}T${time}`));

  // const getTime = () => {

  //   const date = new Date().toLocaleTimeString().split(' ');
  //   let [hour, minute] = (date[0]).split(':')

  //   hour = date[1] == "AM" ? hour : parseInt(hour) + 12;
  //   return `${hour}:${minute}`;
  // }

  const getParsedDate = () => Date.parse(new Date());


  // const parseTime = (time) => {
  //   const [hour, minute] = time.split(':');
  //   const newTime = hour + minute;
  //   console.log(newTime);
  //   return parseInt(newTime);
  // }


  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const handleTimelineChange = () => {

    switch (activeTimeline) {
      case 0:
        setFilteredTasks(tasks);
        break;
      case 1:
        setFilteredTasks(tasks.filter(task => task.date === getDate()));
        break;
      case 2:
        setFilteredTasks(tasks.filter(task => !task.isCompleted && parseTaskTime(task.date, task.time) < getParsedDate()));
        break;
      case 3:
        setFilteredTasks(tasks.filter(task => !task.isCompleted && parseTaskTime(task.date, task.time) >= getParsedDate()));
        break;
      case 4:
        setFilteredTasks(tasks.filter(task => task.isCompleted));
        break;
      default:
        setFilteredTasks(tasks)
    }

  }

  useEffect(handleTimelineChange, [activeTimeline]);

  useEffect(() => {
    handleTimelineChange();
  }, [tasks]);

  // useEffect(() => {
  //   handleTimelineChange();

  // }, [filteredTasks])


  return (
    <div style={{ position: 'relative' }} >
      <div style={{ padding: '15px', paddingBottom: '50px' }}>
        <Heading />
        <Greeting />
        <TimeLineContainer timelines={timelines} activeTimeline={activeTimeline} setActiveTimeline={setActiveTimeline} />
        <TasksContainer categories={categories} tasks={filteredTasks} />
        <FlotingButton onClick={() => setCurrentPage('addtask')} />
      </div>

      {currentPage === 'addtask' && <AddTaskContainer prev={() => setCurrentPage('tasks')} categories={categories} funcToSetTask={addTask} />}

    </div>
  )

}

export default App;
