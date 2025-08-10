import { useState } from "react";
import './home.css'
function Home() {
  const [route, setRoute] = useState("home");
  const [modalJob, setModalJob] = useState(null);

  const jobs = [
    { id: 1, title: "Frontend Engineer", location: "Bengaluru, India", type: "Full-time", exp: "2+ years", desc: "Build delightful UI experiences using React." },
    { id: 2, title: "Backend Engineer (Java)", location: "Remote", type: "Full-time", exp: "3+ years", desc: "Design scalable microservices and APIs." },
    { id: 3, title: "Product Designer", location: "Mumbai, India", type: "Contract", exp: "4+ years", desc: "Lead design from discovery to delivery." }
  ];

  const stories = [
    { id: 1, name: "Asha R.", role: "Founder, ZenFoods", text: "Partnering with AcmeCorp helped us scale from 10 to 100 stores in 9 months. Their engineering team is relentless." },
    { id: 2, name: "Vikram S.", role: "CTO, ByteStack", text: "AcmeCorp's cloud expertise reduced our infra costs by 37% while improving reliability." },
    { id: 3, name: "Maya P.", role: "Head of Ops, CareKart", text: "The growth roadmap and execution were spot on — revenue up 3x in under a year." }
  ];

  return (
    <div className="corp-root">

      <header className="topnav">
        <div className="brand" onClick={() => setRoute("home")}>
          <div className="logo-blob" />
          <div>
            <div className="brand-name">AcmeCorp</div>
            <div className="brand-tag">Reliable. Relentless. Slightly mysterious.</div>
          </div>
        </div>

        <nav className="navlinks">
          <button onClick={() => setRoute("about")} className="navbtn">About</button>
          <button onClick={() => setRoute("services")} className="navbtn">Services</button>
          <button onClick={() => setRoute("recruit") } className="navbtn primary">Recruitment</button>
          <button onClick={() => setRoute("stories")} className="navbtn">Success Stories</button>
          <button onClick={() => setRoute("contact")} className="navbtn outline">Contact</button>
        </nav>
      </header>

      <main className="container">
        {route === "home" && (
          <section className="hero">
            <div className="hero-left">
              <h1>We build products people love — and companies rely on.</h1>
              <p className="lead">Enterprise-grade engineering, design that converts, and partners who keep their promises. Trusted by startups and enterprises across APAC.</p>

              <div className="cta-row">
                <button className="cta" onClick={() => setRoute("recruit")}>Join our team</button>
                <button className="cta ghost" onClick={() => setRoute("stories")}>See success stories</button>
              </div>

              <div className="stats">
                <div><strong>120+</strong><span>Projects</span></div>
                <div><strong>50M</strong><span>Users served</span></div>
                <div><strong>8</strong><span>Offices</span></div>
              </div>
            </div>

            <div className="hero-right">
              <div className="cardglass">
                <h3>Open positions</h3>
                <ul className="job-sample">
                  {jobs.slice(0,2).map(j => (
                    <li key={j.id}>
                      <div>
                        <strong>{j.title}</strong>
                        <div className="muted">{j.location} • {j.type}</div>
                      </div>
                      <button className="apply" onClick={() => setModalJob(j)}>Apply</button>
                    </li>
                  ))}
                </ul>
                <div className="muted small">More roles on the recruitment page.</div>
              </div>

              <div className="trust">
                <div className="trust-row">
                  <TrustLogo initials="G" name="GigaPay" />
                  <TrustLogo initials="N" name="Nimble" />
                  <TrustLogo initials="H" name="Hydra" />
                </div>
              </div>
            </div>
          </section>
        )}

        {route === "about" && (
          <section className="content">
            <h2>About AcmeCorp</h2>
            <p>We are a team of product builders, ops experts, and designers solving hard problems in logistics, fintech and consumer platforms. We value clarity, speed, and outcomes.</p>

            <div className="threecol">
              <div className="card">
                <h4>Product-first</h4>
                <p>We ship features that move the needle — not just tickets closed.</p>
              </div>
              <div className="card">
                <h4>Reliable</h4>
                <p>Systems designed for failure and restored with empathy and speed.</p>
              </div>
              <div className="card">
                <h4>Secure</h4>
                <p>Privacy, encryption, and audits are not afterthoughts — they're built-in.</p>
              </div>
            </div>
          </section>
        )}

        {route === "services" && (
          <section className="content">
            <h2>What we do</h2>
            <div className="services">
              <Service name="Custom Software" desc="End-to-end product development from discovery to launch."/>
              <Service name="Cloud & Infra" desc="Cost optimized, resilient platforms and on-call culture."/>
              <Service name="Growth & Analytics" desc="Data-driven experiments and reliable analytics pipelines."/>
            </div>
          </section>
        )}

        {route === "recruit" && (
          <section className="content">
            <h2>Recruitment</h2>
            <p>We hire curious people who move quickly and care about craft. Below are representative openings — click Apply to start the process.</p>

            <div className="job-list">
              {jobs.map(j => (
                <div className="jobcard" key={j.id}>
                  <div>
                    <h4>{j.title}</h4>
                    <div className="muted">{j.location} • {j.type} • {j.exp}</div>
                    <p>{j.desc}</p>
                  </div>
                  <div>
                    <button className="apply" onClick={() => setModalJob(j)}>Apply</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="small muted">Recruitment process: 1) Short take-home 2) Technical interview 3) System design 4) Offer. We try to be transparent about timelines.</div>
          </section>
        )}

        {route === "stories" && (
          <section className="content">
            <h2>Success Stories</h2>
            <p>Real results from long-term partners.</p>

            <div className="testimonials">
              {stories.map(s => (
                <blockquote key={s.id} className="testimonial">
                  <p>“{s.text}”</p>
                  <footer>{s.name} — <span className="muted">{s.role}</span></footer>
                </blockquote>
              ))}
            </div>

            <div className="casegrid">
              <div className="case">
                <h4>Scaling ZenFoods</h4>
                <p>We architected a resilient order platform, enabling a 4x increase in peak throughput.</p>
                <a className="linkish" href="#" onClick={(e)=>{e.preventDefault(); setRoute('services')}}>Read more →</a>
              </div>

              <div className="case">
                <h4>ByteStack API overhaul</h4>
                <p>Migration to event-driven architecture and a 55% reduction in latency for critical endpoints.</p>
                <a className="linkish" href="#" onClick={(e)=>{e.preventDefault(); setRoute('services')}}>Read more →</a>
              </div>
            </div>
          </section>
        )}

        {route === "contact" && (
          <section className="content smallform">
            <h2>Contact</h2>
            <p>Interested in partnering or joining? Drop a note and we'll respond within 3 business days.</p>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — demo form only.')}}>
              <div className="row"><input placeholder="Name" required/></div>
              <div className="row"><input placeholder="Email" type="email" required/></div>
              <div className="row"><textarea placeholder="How can we help?" required/></div>
              <div className="row"><button className="cta">Send message</button></div>
            </form>
          </section>
        )}

      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} AcmeCorp — Built with clarity.</div>
        <div className="muted">Privacy · Security · Terms</div>
      </footer>

      {/* Modal */}
      {modalJob && (
        <div className="modal-bg" onClick={() => setModalJob(null)}>
          <div className="modal" onClick={(e)=>e.stopPropagation()}>
            <h3>Apply for {modalJob.title}</h3>
            <p className="muted">{modalJob.location} • {modalJob.type} • {modalJob.exp}</p>
            <form onSubmit={(e)=>{e.preventDefault(); setModalJob(null); alert('Application submitted — demo only.')}}>
              <label>
                Full name
                <input required/>
              </label>
              <label>
                Email
                <input type="email" required/>
              </label>
              <label>
                Resume URL
                <input placeholder="https://"/>
              </label>
              <div className="modal-actions">
                <button type="button" className="ghost" onClick={()=>setModalJob(null)}>Cancel</button>
                <button className="cta" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function TrustLogo({initials, name}){
  return (
    <div className="trust-logo" title={name}>
      <div className="circle">{initials}</div>
      <div className="muted small">{name}</div>
    </div>
  );
}

function Service({name, desc}){
  return (
    <div className="servicecard card">
      <h4>{name}</h4>
      <p>{desc}</p>
      <a className="linkish" href="#" onClick={(e)=>e.preventDefault()}>Learn more →</a>
    </div>
  );
}
export default Home;
