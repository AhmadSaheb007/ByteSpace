import { useState } from 'react'
import './SignupPage.css'

const signupCourses = [
  {
    image: '/assets/courses/2.jpg',
    title: 'Build Digital Asset',
    className: 'signup-course signup-course-back',
  },
  {
    image: '/assets/courses/3.jpg',
    title: 'the Power of Big Data',
    className: 'signup-course signup-course-front',
  },
]

const studentAvatars = [
  '/assets/community/1.png',
  '/assets/community/2.png',
  '/assets/community/3.png',
  '/assets/community/1.png',
  '/assets/community/3.png',
]

function SignupPage() {
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormMessage('Sign-up is not connected yet. Your account has not been created.')
  }

  return (
    <main className="signup-page">
      <div className="signup-grid" aria-hidden="true" />
      <section className="signup-intro">
        <a className="signup-brand" href="/" aria-label="ByteSpace home">
          <span className="signup-brand-mark" aria-hidden="true" />
        </a>
        <div className="signup-intro-copy">
          <h2>Sign up and come in</h2>
          <p>
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>
        </div>

        <div className="signup-art" aria-label="ByteSpace courses">
          {signupCourses.map((course) => (
            <article className={course.className} key={course.title}>
              <div className="signup-course-image">
                <img src={course.image} alt="" />
                <div className="signup-image-stats">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>
              <div className="signup-course-body">
                <div className="signup-course-title">
                  <h3>{course.title}</h3>
                  <span>4.5 <b>★</b></span>
                </div>
                <p>by <span>purepearl studio</span></p>
                <div className="signup-course-meta">
                  <span className="signup-level"><b>▮</b> Beginner</span>
                  <div className="signup-avatars" aria-hidden="true">
                    {studentAvatars.slice(0, 4).map((avatar, index) => (
                      <img key={`${avatar}-${index}`} src={avatar} alt="" />
                    ))}
                    <b>26+</b>
                  </div>
                </div>
                <strong className="signup-price">$25<small>/lifetime</small></strong>
              </div>
            </article>
          ))}

          <div
            className="signup-float signup-float-loop"
          />
          <img
            className="signup-float signup-float-coil"
            src="/assets/floatings/1.png"
            alt=""
            aria-hidden="true"
          />
          <div
            className="signup-float signup-float-triangle"
          />
          <div className="signup-happy-card">
            <span>Happy Students</span>
            <small>4.5 (240) <b>★</b></small>
            <div className="signup-happy-avatars" aria-hidden="true">
              {studentAvatars.map((avatar, index) => (
                <img key={`${avatar}-${index}`} src={avatar} alt="" />
              ))}
              <b>2K+</b>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-form-side">
        <div className="signup-form-card">
          <div className="signup-form-heading">
            <p>Create an Account</p>
            <h1>Welcome to<br />ByteSpace</h1>
          </div>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="signup-name">Full Name</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jamie Davis"
              required
            />

            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              required
            />

            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="********"
              minLength={8}
              required
            />

            <button type="submit">Continue</button>
            <p className="signup-form-message" role="status">{formMessage}</p>
          </form>
          <p className="signup-login">
            Already have an account? <a href="/signin">Login</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default SignupPage
