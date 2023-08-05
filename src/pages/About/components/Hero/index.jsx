import './hero.css';
import image1 from '@assets/about/image1.jpg'
import image2 from '@assets/about/image2.jpg'

const Hero = () => {
  return (
    <article className='about-hero'>
      <div className='about-text'>
        <h3>Furniture brand that transcends trends.</h3>
      </div>
      <div className='about-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis expedita nam eveniet sit quisquam deserunt qui minus ducimus, recusandae vel reiciendis id corrupti voluptates porro tempora, temporibus reprehenderit error dolorem sunt. Voluptas ea debitis aliquid sunt. Fugit placeat illo sit excepturi labore rerum dolores soluta quo ea? Voluptate, delectus!
        </p>
      </div>
      <div className='about-img'>
        <img src={image1} alt="living room couch" />
        <div className="overlay"></div>
      </div>
      <div className='about-img'>
        <img src={image2} alt="work setup" />
        <div className="overlay"></div>
      </div>
    </article>
  )
}

export default Hero