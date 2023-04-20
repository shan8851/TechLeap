import { useState } from 'react'
import techLeapLogo from './assets/techleaplong.svg'
import './App.css'
import { td } from './data/testimonials';

type TestimonialProps = {
  quote: string
  author: string
  title: string
}

function App() {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const magicLinkEmail = `https://magic.beehiiv.com/v1/53ff64cb-69f4-4bc1-9ea4-3c75252cea93?email=${email}`
  const magicLinkAddress = `https://magic.beehiiv.com/v1/53ff64cb-69f4-4bc1-9ea4-3c75252cea93?email=${address}`
  const sub = () => {
    if (!email) return
    window.location.replace(magicLinkEmail)
  }

  const subTestimonial = () => {
    if (!address) return
    window.location.replace(magicLinkAddress)
  }

  const Testimonial = ({ quote, author, title }: TestimonialProps) => {
    return (
      <div key={author} className="testimonial">
        <h1 className="quote">{`"${quote}"`}</h1>
        <p className="author">
          - {author},<span> {title}</span>
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <div id="hero" className="hero">
        <div className="hero-content">
          <div>
            <a href="#" target="_blank">
              <img src={techLeapLogo} className="logo" alt="Tech Leap logo" />
            </a>
          </div>
          <div className="content">
            <p className="text">Practical guidance for breaking into software development and thriving in your early years.</p>
            <input className='input'
              type="email"
              placeholder="email address"
              onChange={e => setEmail(e.target.value)} />
            <button className='button' onClick={sub}>Subscribe</button>
          </div>
        </div>
        <a href="#testimonials" className="scroll">
          <p className="subText">See what subscribers are saying</p>
          <p className="emoji">👇</p>
        </a>
      </div>
      <div id="testimonials" className="testimonials">
        {td.map((t) => (
          <Testimonial key={t.author} author={t.author} quote={t.quote} title={t.title} />
        ))}
        <div className="flex">
          <input placeholder='email address' className="input" type="email"
            onChange={e => setAddress(e.target.value)} />
          <button onClick={subTestimonial} className="button">subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default App
