import { useState } from 'react'
import './SignupPage.css'

const signInCourses = [
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

function SignInPage() {
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormMessage('Sign-in is not connected yet. No account session was started.')
  }

  return (
    <main className="signup-page signin-page">
      <div className="signup-grid" aria-hidden="true" />
      <section className="signup-intro">
        <a className="signup-brand" href="/" aria-label="ByteSpace home">
          <span className="signup-brand-mark" aria-hidden="true" />
        </a>
        <div className="signup-intro-copy">
          <h2>Sign in with ease</h2>
          <p>
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>
        </div>

        <div className="signup-art" aria-label="ByteSpace courses">
          {signInCourses.map((course) => (
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
                    <i>J</i><i>M</i><i>A</i><i>S</i><b>26+</b>
                  </div>
                </div>
                <strong className="signup-price">$25<small>/lifetime</small></strong>
              </div>
            </article>
          ))}

          <img className="signup-float signup-float-loop" src="" alt="" aria-hidden="true" />
          {/* <img className="signup-float signup-float-coil" src="/assets/floatings/1.png" alt="" aria-hidden="true" /> */}
          <img className="signup-float signup-float-triangle" src="" alt="" aria-hidden="true" />
          <div className="signup-happy-card">
            <span>Happy Students</span>
            <small>4.5 (240) <b>★</b></small>
            <div className="signup-happy-avatars" aria-hidden="true">
              <i>J</i><i>M</i><i>A</i><i>S</i><i>R</i><b>2K+</b>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-form-side">
        <div className="signup-form-card">
          <div className="signup-form-heading">
            <p>Sign In</p>
            <h1>Welcome Back</h1>
          </div>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="signin-email">Email</label>
            <input
              id="signin-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              required
            />

            <label htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              required
            />

            <button type="submit">Sign In</button>
            <p className="signup-form-message" role="status">{formMessage}</p>
          </form>
          <p className="signup-login">
            New user? <a href="/signup">Create an account</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default SignInPage
