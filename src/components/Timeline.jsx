import './styles/Timeline.css'

const Timeline = ({ title, isActive, ...rest }) => {

    return (
        <span  className={`timeline-item ${isActive ? 'active' : ''}`} {...rest}>{title}</span>
    )

}

export default Timeline;