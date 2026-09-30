import { useMemo, useState } from "react";
import "./App.css";

const courses = [
  {
    category: "Design",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    image: "/public/assets/courses/1.jpg",
    color: "lavender",
  },
  {
    category: "Design",
    title: "Build Digital Asset",
    creator: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    image: "/public/assets/courses/2.jpg",
    color: "blue",
  },
  {
    category: "Development",
    title: "the Power of Big Data",
    creator: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    image: "/public/assets/courses/3.jpg",
    color: "peach",
  },
  {
    category: "Business",
    title: "Balancing Productivity and Focus",
    creator: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    image: "/public/assets/courses/4.jpg",
    color: "mint",
  },
  {
    category: "Business",
    title: "Mastering Money Management",
    creator: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    image: "/public/assets/courses/5.jpg",
    color: "cream",
  },
  {
    category: "Business",
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    image: "/public/assets/courses/6.jpg",
    color: "blue",
  },
];

const courseStudents = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80",
];

const categories = [
  ["design", "Design"],
  ["development", "Development"],
  ["software", "IT & Software"],
  ["business", "Business"],
  ["marketing", "Marketing"],
  ["photography", "Photography"],
];

const courseFilters = [
  { label: "Featured", value: "" },
  { label: "Music", value: "Music" },
  { label: "Drawing & Painting", value: "Design" },
  { label: "Marketing", value: "Marketing" },
  { label: "Animation", value: "Design" },
  { label: "Social Media", value: "Marketing" },
  { label: "UI/UX Design", value: "Design" },
  { label: "Creative Marketing", value: "Marketing" },
  { label: "Digital Illustration", value: "Design" },
  { label: "Film & Video", value: "Photography" },
  { label: "Crafts", value: "Design" },
  { label: "Freelance & Entrepreneurship", value: "Business" },
  { label: "Graphic Design", value: "Design" },
  { label: "Photography", value: "Photography" },
  { label: "Productivity", value: "Business" },
  { label: "Web Development", value: "Development" },
  { label: "Data Science", value: "Development" },
  { label: "Cooking", value: "Business" },
];

const additionalCourseFilters = [
  { label: "Business", value: "Business" },
  { label: "Personal Growth", value: "Personal growth" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image:
      "/public/assets/community/1.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image:
      "/public/assets/community/2.png",
    quote:
      '"I’ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image:
      "/public/assets/community/3.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It’s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const footerLinks = [
  [
    ["Featured Courses", "#courses"],
    ["Featured Categories", "#categories"],
    ["Business", "#categories"],
    ["IT", "#categories"],
    ["Design", "#categories"],
  ],
  [
    ["Development", "#categories"],
    ["Marketing", "#categories"],
    ["Photography", "#categories"],
    ["Finance", "#categories"],
    ["Sport", "#categories"],
  ],
  [
    ["Become a Creator", "#creator-cta"],
    ["Affiliate Program", "#creator-tools"],
    ["Contact", "mailto:hello@bytespace.example"],
    ["Help", "mailto:hello@bytespace.example"],
    ["About", "#home"],
  ],
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 4.2 4.2" />
    </svg>
  );
}

function CategoryIcon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2.5,
    viewBox: "0 0 32 32",
    "aria-hidden": true,
  };

  switch (name) {
    case "design":
      return (
        <svg {...common}>
          <path d="m6 23 12-12 5 5L11 28H6v-5Zm10-10 5 5m2-15 5 5-4 4-5-5 4-4ZM5 6l5 5m-5 0 5-5m11 12 5 5m-5 0 5-5" />
        </svg>
      );
    case "development":
      return (
        <svg {...common}>
          <path d="M10 5h12a2 2 0 0 1 2 2v5h-4l-4-4-4 4h-4V7a2 2 0 0 1 2-2Zm0 22h12a2 2 0 0 0 2-2v-5h-4l-4 4-4-4h-4v5a2 2 0 0 0 2 2ZM13 13l-4 3 4 3m6-6 4 3-4 3" />
        </svg>
      );
    case "software":
      return (
        <svg {...common}>
          <path d="M5 7h22v16H5zM3 27h26M8 10h16v10H8z" />
        </svg>
      );
    case "business":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="9" height="22" rx="1.5" />
          <rect x="15" y="11" width="13" height="16" rx="1.5" />
          <path d="M7 9h3m-3 4h3m-3 4h3m-3 4h3m12-6h2m-2 4h2m-2 4h2" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...common}>
          <path d="M5 7h5m-3-3v6m7 3a8 8 0 0 1 11 7m-7-7a5 5 0 0 1 6 5m-6-1a2 2 0 0 1 2 2m-1 6a8 8 0 0 0 7 4" />
          <circle cx="22" cy="25" r="2" />
        </svg>
      );
    case "photography":
      return (
        <svg {...common}>
          <path d="M5 10h5l2-3h8l2 3h5v16H5z" />
          <circle cx="16" cy="18" r="5" />
          <path d="M8 13h1" />
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [activeCourseFilter, setActiveCourseFilter] = useState("Featured");
  const [showMoreCourseFilters, setShowMoreCourseFilters] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const visibleCourses = useMemo(() => {
    const term = submittedSearch.trim().toLowerCase();
    if (!term) return courses;
    return courses.filter((course) =>
      [course.category, course.title, course.creator]
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }, [submittedSearch]);

  function runSearch(event) {
    event.preventDefault();
    setSubmittedSearch(search);
    setActiveCourseFilter("");
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  }

  function selectCategory(category) {
    const courseCategory =
      category === "IT & Software" ? "Development" : category;
    setSearch(courseCategory);
    setSubmittedSearch(courseCategory);
    setActiveCourseFilter("");
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <section className="hero" id="home">
        <img
          className="hero-float"
          src="/assets/floatings/2.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="shape shape-right" aria-hidden="true" />
        <img
          className="squiggle squiggle-left"
          src="/assets/floatings/1.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="squiggle squiggle-right"
          src="/assets/floatings/1.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="doughnut" aria-hidden="true" />
        <div className="paper-plane" aria-hidden="true" />

        <header className="site-header">
          <a className="brand" href="#home" aria-label="ByteSpace home">
            <span className="brand-mark" aria-hidden="true" />
            <span>ByteSpace</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#creators">Creators</a>
          </nav>
          <div className="account-nav">
            <a href="/signin">Sign In</a>
            <a href="/signup">Join Us</a>
            <button
              className="bag-button"
              type="button"
              aria-label="Shopping bag"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 8h14l-1 13H6L5 8Z" />
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
              </svg>
            </button>
          </div>
        </header>

        <div className="hero-copy">
          <p className="eyebrow">Learn something that moves you</p>
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="hero-description">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <form className="search-form" onSubmit={runSearch} role="search">
            <label className="search-field">
              <SearchIcon />
              <input
                aria-label="Search courses"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Course, topic, creator"
                value={search}
              />
            </label>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="hero-art" aria-label="A student learning online">
          <div className="hero-sun" />
          <img
            className="hero-student"
            src="public/assets/st_hero.png"
            alt="Student working on a laptop"
          />
          <div className="info-card course-stat">
            <span>UI/UX Design</span>
            <small>200 Courses&nbsp; • &nbsp;1000+ Students</small>
          </div>
          <div className="info-card progress-stat">
            <span>Learning Progress</span>
            <strong>55%</strong>
            <i>
              <b />
            </i>
          </div>
          <div className="info-card happy-stat">
            <span>Happy Students</span>
            <small>
              4.5 (240) <b>★</b>
            </small>
            <div
              className="avatar-row"
              aria-label="A growing community of students"
            >
              <i>J</i>
              <i>M</i>
              <i>A</i>
              <i>S</i>
              <i className="avatar-count">2K+</i>
            </div>
          </div>
        </div>
      </section>

      <section className="partners" aria-label="Learning partners">
        <div className="partner-logos">
          <div className="partner-logo">
            <svg
              className="partner-symbol symbol-wave"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="19" />
              <path d="M3 12c8-5 15 7 24 3 4-2 7-4 10-3M1 20c9-5 15 8 25 4 5-2 8-5 12-4M3 28c7-4 13 6 22 4 6-1 9-5 12-5" />
            </svg>
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <svg
              className="partner-symbol symbol-burst"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="5" />
              <path d="M20 2v9m0 18v9M2 20h9m18 0h9M7.3 7.3l6.4 6.4m12.6 12.6 6.4 6.4m0-25.4-6.4 6.4m-12.6 12.6-6.4 6.4" />
            </svg>
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <svg
              className="partner-symbol symbol-bolt"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="19" />
              <path d="m23 5-13 17h9l-2 13 13-18h-9l2-12Z" />
            </svg>
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <svg
              className="partner-symbol symbol-flower"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="19" />
              <circle cx="20" cy="13" r="4" />
              <circle cx="27" cy="20" r="4" />
              <circle cx="20" cy="27" r="4" />
              <circle cx="13" cy="20" r="4" />
            </svg>
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <svg
              className="partner-symbol symbol-orbit"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="18.5" />
              <circle cx="20" cy="20" r="15" />
              <circle cx="20" cy="20" r="11.5" />
              <circle cx="20" cy="20" r="8" />
              <circle cx="20" cy="20" r="4.5" />
            </svg>
            <span>Logoipsum</span>
          </div>
        </div>
      </section>

      <section className="courses-section section-wrap" id="courses">
        <div className="section-heading">
          <div>
            <h2>
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p className="section-description">
              At Bytespace Courses, we bring you closer to life-changing
              knowledge. Explore a variety of courses across different fields,
              from technology to the arts, and make a difference in your career
              and life.
            </p>
          </div>
        </div>
        <div className="filter-pills" aria-label="Filter courses">
          {[
            ...courseFilters,
            ...(showMoreCourseFilters ? additionalCourseFilters : []),
          ].map(({ label, value }) => (
            <button
              className={activeCourseFilter === label ? "active" : ""}
              key={label}
              onClick={() => {
                setSearch(value);
                setSubmittedSearch(value);
                setActiveCourseFilter(label);
              }}
              type="button"
            >
              {label}
            </button>
          ))}
          <button
            className="more-filter"
            onClick={() => setShowMoreCourseFilters((showMore) => !showMore)}
            type="button"
            aria-expanded={showMoreCourseFilters}
          >
            {showMoreCourseFilters ? "− Less" : "+ More"}
          </button>
        </div>
        {visibleCourses.length ? (
          <div className="course-grid">
            {visibleCourses.map((course) => (
              <article className="course-card" key={course.title}>
                <div className={`course-image ${course.color}`}>
                  <img src={course.image} alt="" loading="lazy" />
                  <div className="course-image-stats">
                    <span>{course.lessons}</span>
                    <span>{course.duration}</span>
                    <span>{course.comments}</span>
                  </div>
                </div>
                <div className="course-card-copy">
                  <div className="course-card-heading">
                    <h3 title={course.title}>{course.title}</h3>
                    <span className="course-rating">
                      {course.rating}
                      <b>★</b>
                    </span>
                  </div>
                  <p className="creator">
                    by <span>{course.creator}</span>
                  </p>
                  <div className="course-meta">
                    <span className="course-level">
                      <b aria-hidden="true">▮</b> Beginner
                    </span>
                    <div
                      className="course-students"
                      aria-label="Course students"
                    >
                      {courseStudents.map((image, index) => (
                        <img
                          src={image}
                          alt=""
                          key={image}
                          style={{ "--student-index": index }}
                        />
                      ))}
                      <span>26+</span>
                    </div>
                  </div>
                  <div className="course-price">
                    <strong>{course.price}</strong>
                    <span>/lifetime</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <h3>No courses found just yet</h3>
            <p>Try a different topic or browse all of our courses.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSubmittedSearch("");
                setActiveCourseFilter("Featured");
              }}
            >
              Show all courses
            </button>
          </div>
        )}
      </section>

      <section className="categories-section section-wrap" id="categories">
        <div className="center-heading">
          <h2>Explore Diverse Learning Paths at Bytespace</h2>
          <p className="section-description">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>
        <div className="category-grid">
          {categories.map(([icon, name]) => (
            <button
              className="category-tile"
              key={name}
              onClick={() => selectCategory(name)}
              type="button"
            >
              <span>
                <CategoryIcon name={icon} />
              </span>
              <b>{name}</b>
            </button>
          ))}
        </div>
      </section>

      <section className="growth-section" id="creators">
        <div className="growth-inner">
          <div className="growth-copy">
            <p className="section-kicker">Make the next move yours</p>
            <h2>
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="growth-numbers">
              <span>
                <b>12K</b>
                <small>Students</small>
              </span>
              <span>
                <b>70+</b>
                <small>Courses</small>
              </span>
              <span>
                <b>16</b>
                <small>Creators</small>
              </span>
            </div>
          </div>
          <div className="growth-image">
            <article className="growth-course-card">
              <img
                src="/public/assets/courses/1.jpg"
                alt=""
                loading="lazy"
              />
              <span>Beginner · 17 lessons</span>
              <strong>Learn Figma from scratch</strong>
              <small>by purpleart studio</small>
              <b>
                $25 <small>/ lifetime</small>
              </b>
            </article>
            <img
              src="/public/assets/st_hero.png"
              alt="ByteSpace course creator"
              loading="lazy"
            />

            <div className="info-card growth-progress">
              <span>Learning Progress</span>
              <strong>55%</strong>
              <i>
                <b />
              </i>
            </div>
          </div>
        </div>
      </section>

      <section className="creator-tools-section" id="creator-tools">
        <div className="creator-tools-inner">
          <div className="creator-visual">
            <div className="revenue-card revenue-card-main">
              <span>Total Revenue</span>
              <small>July 1–28</small>
              <strong>$120.29</strong>
              <i>
                <b />
              </i>
            </div>
            <div className="revenue-card revenue-card-year">
              <span>Year to Date</span>
              <small>2025</small>
              <strong>$1,200.38</strong>
              <b className="revenue-growth">+12%</b>
            </div>
            <img
              className="creator-portrait"
              src="/public/assets/st_2.png"
              alt="Creator managing her online courses"
              loading="lazy"
            />
            <img
              className="creator-squiggle"
              src="/assets/floatings/1.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <div className="info-card creator-happy-card">
              <span>Happy Students</span>
              <small>
                4.5 (240) <b>★</b>
              </small>
              <div className="course-students" aria-label="Course students">
                {courseStudents.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    key={image}
                    style={{ "--student-index": index }}
                  />
                ))}
                <span>26+</span>
              </div>
            </div>
          </div>
          <div className="creator-tools-copy">
            <p className="section-kicker">Your ideas deserve a classroom</p>
            <h2>
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p>
              <strong>ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul>
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="creator-cta" id="creator-cta">
        <div className="hero-grid" aria-hidden="true" />
        <div className="cta-shape cta-shape-left" aria-hidden="true" />
        <div className="cta-shape cta-shape-right" aria-hidden="true" />
        <img
          className="cta-squiggle cta-squiggle-left"
          src="/assets/floatings/1.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="cta-squiggle cta-squiggle-right"
          src="/assets/floatings/1.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="cta-doughnut" aria-hidden="true" />
        <div className="cta-triangle" aria-hidden="true" />
        <div className="creator-cta-copy">
          <p className="section-kicker">Teach what you love</p>
          <h2>
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </h2>
          <p>
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <a href="mailto:creators@bytespace.example">
            Join as Creator <span>↗</span>
          </a>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-inner">
          <div className="testimonials-heading">
            <h2>
              Discover What Our
              <br />
              Community Is Saying
            </h2>
            <p>
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <img src={testimonial.image} alt="" loading="lazy" />
                <h3>{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="footer-main">
          <div className="footer-newsletter">
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark" aria-hidden="true" />
              <span>ByteSpace</span>
            </a>
            <p>
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault();
                if (event.currentTarget.reportValidity())
                  setNewsletterSubmitted(true);
              }}
            >
              <label className="visually-hidden" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                onChange={(event) => {
                  setNewsletterEmail(event.target.value);
                  setNewsletterSubmitted(false);
                }}
                placeholder="Enter your email"
                required
                value={newsletterEmail}
              />
              <button type="submit">
                {newsletterSubmitted ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
            <small>
              {newsletterSubmitted
                ? `Thanks for subscribing, ${newsletterEmail}.`
                : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
            </small>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map((column, index) => (
              <div key={index}>
                {column.map(([label, href]) => (
                  <a href={href} key={label}>
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2025 ByteSpace. All rights reserved.</span>
          <nav aria-label="Legal links">
            <a href="mailto:privacy@bytespace.example">Privacy Policy</a>
            <a href="mailto:legal@bytespace.example">Terms of Service</a>
            <a href="mailto:privacy@bytespace.example">Cookies Settings</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

export default App;
