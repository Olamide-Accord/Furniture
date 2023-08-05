import './mission.css'
import mission from '@assets/mission.jpg'

const Mission = () => {
  return (
    <article className='mission'>
      <div className='img-wrapper'>
        <img src={mission} alt="" />
      </div>
      <div className='mission-desc'>
        <h3>Mission Statement</h3>
        <p>
          Our mission is to create timeless furniture pieces that bring comfort, beauty, and functionality into people's lives. We strive to design and craft high-quality furniture using sustainable materials and innovative techniques, ensuring that every piece reflects our commitment to excellence and enhances the spaces they inhabit.
        </p>
      </div>
    </article>
  )
}

export default Mission