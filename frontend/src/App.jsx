import { useState } from "react";
import logo from "./image/logo.png";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Heart,
  MapPin,
  Menu,
  Play,
  Users,
  X,
} from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";

const sermons = [
  ["Keeping Our Focus", "Hebrews 11:27", "VCICM"],
  ["Keeping our Focus on God's Provision", "Proverbs 3:9", "VCICM"],
  ["The Powerful Secret of Spiritual Growth", "John 15:1-7", "VCICM"]
];

const ministries = [
  ["Bible Study", "Grow deeper in God's Word and strengthen your faith."],
  ["Prayer Ministry", "Seek God's presence through prayer and intercession."],
  ["Youth Ministry", "Equip the next generation to live for Christ."],
  ["Outreach Ministry", "Serve people and share the Gospel with love."],
  ["Worship Ministry", "Use your gifts to glorify God through worship."],
  ["Discipleship", "Grow as a follower of Jesus and help others grow."],
];

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/ministries", "Ministries"],
    ["/sermons", "Sermons"],
    ["/events", "Events"],
    ["/giving", "Giving"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Victory Church Logo" className="brand-mark" />
          <span>
            <strong>VICTORY CHURCH</strong>
            <small>International Christian Ministry</small>
            {/* <small>Mandaluyong Chapter</small> */}
          </span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([path, label]) => (
            <Link key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          {/* <Link className="admin-link" to="/admin" onClick={() => setOpen(false)}>
            Admin
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand footer-brand">
            <img src={logo} alt="Victory Church Logo" className="brand-mark" />
            <span>
              <strong>VICTORY CHURCH</strong>
              <small>International Christian Ministry</small>
            </span>
          </div>
          <p>Building lives through God's Word and the love of Jesus Christ.</p>
        </div>
        <div>
          <h4>Connect</h4>
          {/* <div className="socials">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="YouTube"><Youtube /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div> */}
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Victory Church International Christian Ministry
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="wrap hero-content">
        <span className="eyebrow">WELCOME HOME</span>
        <h1>WIN. BUILD.<br /><em>SEND.</em></h1>
        <p>
          A Christ-centered community where people discover God's Word,
          grow in faith, and serve with purpose.
        </p>
        <div className="hero-actions">
          <Link className="btn gold" to="/about">
            Discover Our Church <ArrowRight />
          </Link>
          <Link className="btn outline" to="/contact">
            Plan Your Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <article className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Home() {
  return (
    <>
      <Hero />

      <section className="intro wrap">
        <div>
          <span className="eyebrow">YOU BELONG HERE</span>
          <h2>Come as you are.<br /><em>Grow with us.</em></h2>
        </div>
        <div>
          <p>
            A Full Gospel centered community committed to making disciples. 
            We believe that the message of Jesus is transformative, and we aim to create an environment where people can grow spiritually.
          </p>
          <Link className="text-link" to="/about">Learn more <ArrowRight /></Link>
        </div>
      </section>

      <section className="cream-section">
        <div className="wrap">
          <SectionHeading eyebrow="GET INVOLVED" title={<>Ways to <em>Grow</em></>}>
            Discover opportunities to grow in faith, serve others, and make a difference.
          </SectionHeading>
          <div className="grid-4">
            <Card icon={<BookOpen />} title="Bible Study" text="Go deeper into God's Word and strengthen your faith." />
            <Card icon={<Heart />} title="Prayer Ministry" text="Seek God's presence together through prayer and intercession." />
            <Card icon={<Users />} title="Community" text="Build Christ-centered relationships and encourage one another." />
            <Card icon={<ArrowRight />} title="Outreach" text="Share the Gospel and serve people with practical love." />
          </div>
        </div>
      </section>

      <section className="verse">
        <div className="wrap">
          <span className="verse-cross">✝</span>
          <blockquote>“But thanks be to God, which giveth us the victory through our Lord Jesus Christ.”</blockquote>
          <p>1 Corinthians 15:57</p>
        </div>
      </section>

      <section className="wrap upcoming">
        <SectionHeading eyebrow="JOIN US" title={<>Upcoming <em>Services</em></>} />
        <div className="event-row">
          <CalendarDays />
          <div>
            <strong>Sunday Worship Service</strong>
            <p>Every Sunday · 10:00 AM – 12:00 NN</p>
          </div>
          <Link to="/events">View schedule <ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <PageHero eyebrow="WHO WE ARE" title="Living by Faith, Serving with Love" />
      <main className="wrap page-content">
        <div className="two-column">
          <div>
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Our <em>Mission</em></h2>
            <p>
              TO EVANGELIZE PEOPLE AND BRING THEM INTO THE KNOWLEDGE OF REPENTANCE THAT WILL LEAD THEM TO ACCEPTING JESUS CHRIST AS THEIR PERSONAL LORD AND SAVIOR.
            </p>
            <p>
             TEACHING THEM TO SERVE GOD WHOLEHEARTEDLY AND EXPERIENCE GOD'S POWER AND HEALING UPON THEIR LIVES THAT THEY MAY LIVE VICTORIOUS IN THIS DYING WORLD.
            </p>
            <p>
             EQUIPPING THEM TO BE DEEPLY FOUNDED IN GOD'S WORDS TO BE FIRM IN RIGHTEOUSNESS IN TRIUMPH OVER TROUBLES AND STRUGGLES THEY MAY FACE IN LIVING THEIR CHRISTIAN LIFE.
            </p>
            <p>
              VCICM FIRMLY BELIEVES THAT THE ONLY WAY TO SATISFY LIFE IS THROUGH JESUS CHRIST AND THE ONLY METHOD IS THE WORD OF GOD.
            </p>
            <h2>Our <em>Vision</em></h2>
            <p>
              WIN - BUILD - SEND.
            </p>
          </div>
          <div className="feature-box">
            <span>7 DRIVERS</span>
            <p>
              PRAYER  | EVANGELISM | DISCIPLESHIP | TITHES AND OFFERING | PRAISE AND WORSHIP | CHURCH COMMITMENT | CHURCH PLANTING
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function Ministries() {
  return (
    <>
      <PageHero eyebrow="GET INVOLVED" title="Our Ministries" />
      <main className="wrap page-content">
        <div className="grid-3">
          {ministries.map(([title, text]) => (
            <Card key={title} icon={<Heart />} title={title} text={text} />
          ))}
        </div>
      </main>
    </>
  );
}

function Sermons() {
  return (
    <>
      <PageHero eyebrow="WATCH & LISTEN" title="Sermons" />
      <main className="wrap page-content">
        <div className="sermon-list">
          {sermons.map(([title, scripture, speaker]) => (
            <article className="sermon-row" key={title}>
              <div className="play-circle"><Play fill="currentColor" /></div>
              <div>
                <span>{scripture}</span>
                <h3>{title}</h3>
                <p>{speaker}</p>
              </div>
              <button className="listen-btn">Watch</button>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

function Events() {
  const events = [
    ["SUNDAY", "Sunday Worship Service", "10:00 AM – 12:00 NN"],
    ["WEDNESDAY", "Midweek Bible Study", "7:00 PM – 8:30 PM"],
    ["SATURDAY", "Music Service", "3:00 PM – 6:30 PM"],
    ["IMPORTANT", "PRAYING AND FASTING EVERY LAST SATURDAY OF THE MONTH", "10:00 AM – ONWARDS"],
  ];

  return (
    <>
      <PageHero eyebrow="CALENDAR" title="Events & Services" />
      <main className="wrap page-content">
        <div className="event-list">
          {events.map(([day, title, time]) => (
            <article className="event-card" key={title}>
              <CalendarDays />
              <div>
                <span>{day}</span>
                <h3>{title}</h3>
                <p>{time}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="small-note">Update these times to match your church's official schedule.</p>
      </main>
    </>
  );
}

function Giving() {
  return (
    <>
      <PageHero eyebrow="GENEROSITY" title="Give With Purpose" />
      <main className="wrap page-content">
        <div className="giving-box">
          <Heart />
          <h2>Your generosity helps ministry <em>continue.</em></h2>
          <p>
            Giving is an opportunity to honor God and support the work of the
            ministry. Replace this section with your official giving channels,
            bank details, or payment provider.
          </p>
          <button className="btn gold">Give Now <ArrowRight /></button>
        </div>
      </main>
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="CONNECT WITH US" title="We Would Love to Hear From You" />
      <main className="wrap page-content">
        <div className="two-column contact">
          <div>
            <span className="eyebrow">PLAN YOUR VISIT</span>
            <h2>We are ready to <em>connect.</em></h2>
            <p>Have a prayer request, question, or testimony? Send us a message.</p>
            <p className="address"><MapPin /> 464 Ojen Building New Zaniga Mandaluyong City<br />Philippines</p>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <input required placeholder="Your Name" />
            <input required type="email" placeholder="Email Address" />
            <textarea required rows="6" placeholder="Your Message" />
            <button className="btn gold" type="submit">Send Message <ArrowRight /></button>
            {sent && <p className="success">Thank you! Your message was submitted. Connect this form to the backend API for production.</p>}
          </form>
        </div>
      </main>
    </>
  );
}

function Admin() {
  const items = [
    ["Sermons", "Manage sermon library"],
    ["Events", "Manage services and events"],
    ["Ministries", "Manage ministry pages"],
    ["Messages", "View contact and prayer requests"],
    ["Gallery", "Manage church photos"],
    ["Settings", "Church information and links"],
  ];

  return (
    <>
      <PageHero eyebrow="ADMINISTRATION" title="Church Dashboard" />
      <main className="wrap page-content">
        <div className="admin-grid">
          {items.map(([title, description]) => (
            <article className="admin-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <button>Manage →</button>
            </article>
          ))}
        </div>
        <div className="notice">
          Demo dashboard UI. Connect these controls to authenticated backend APIs before production use.
        </div>
      </main>
    </>
  );
}

export default function App() {
  return <Layout />;
}