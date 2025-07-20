import "./principalsMessage.css";

export default function PrincipalsMessage() {
  return (
    <>
      <section class="section-padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="/images/principal-img.jpg"
                alt="Dr. V. L. Pujari"
                class="img-fluid principal-img"
              />
              <h4 class="mt-3 mb-0">Dr. V. L. Pujari</h4>
              <p class="text-muted">M.A, M.Ed, D.C.S, Ph.D</p>
            </div>
            <div class="col-md-8">
              <h2>Welcome to Our College</h2>
              <p class="lead">
                Established in 2004, our college is on a mission to promote
                Teacher Education. After more than a decade of academic
                excellence, we continue to be recognized by the Government of
                Karnataka, National Council for Teacher Education (NCTE), and
                are affiliated with Rani Channamma University, Belagavi.
              </p>
              <p>
                Our infrastructure and facilities are in line with NCTE, UGC,
                and NAAC standards, and we are proud of our NAAC accreditation
                with "Potential for Excellence" in TQM of NCTE and the Govt. of
                Karnataka. We are dedicated to nurturing every student,
                especially those who are hesitant, by fostering an innovative
                and supportive learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Our Core Initiatives</h2>
          <div class="row g-4">
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 p-4 text-center">
                <div class="card-body">
                  <h5 class="card-title">Mentor System</h5>
                  <p class="card-text">
                    A dedicated teacher mentors a small group of 10 students,
                    creating a supportive environment for personalized guidance
                    and development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 p-4 text-center">
                <div class="card-body">
                  <h5 class="card-title">Talent Hunt</h5>
                  <p class="card-text">
                    Our weekly Talent Hunt program helps students discover and
                    showcase their hidden talents in various areas like singing,
                    dancing, and public speaking.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 p-4 text-center">
                <div class="card-body">
                  <h5 class="card-title">Alumni & Parent Meets</h5>
                  <p class="card-text">
                    Regular interactions with alumni and parents help us build
                    strong relationships and continuously improve through
                    valuable feedback.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 p-4 text-center">
                <div class="card-body">
                  <h5 class="card-title">Experiential Learning</h5>
                  <p class="card-text">
                    We emphasize hands-on learning through seminars, projects,
                    internships, and community engagement activities to provide
                    practical experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 p-4 text-center">
                <div class="card-body">
                  <h5 class="card-title">Beyond the Curriculum</h5>
                  <p class="card-text">
                    We offer career-oriented programs and add-on courses to
                    foster team spirit, creativity, and practical skills among
                    our students.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 p-4 text-center">
                <div class="card-body">
                  <h5 class="card-title">Holistic Development</h5>
                  <p class="card-text">
                    Daily prayer, yoga, sports, and cultural clubs are integral
                    parts of our curriculum to ensure the all-round development
                    of our future teachers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
