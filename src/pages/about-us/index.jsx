import "./aboutUs.css"

export default function AboutUs() {
  return (
    <main class="container my-5">
      <div class="row g-4 mb-5">
        <div class="col-lg-6">
          <div class="card h-100 p-4">
            <div class="card-body">
              <h2 class="card-title section-title mb-3">About Our College</h2>
              <p class="text-muted">
                BVM started its B.Ed. course from the Academic Year 2004-05 on
                its idyllic campus. The Bharatesh College of Education has an
                elegant building conforming to NCTE norms. It features spacious
                classrooms and well-equipped resource centers to train the
                bright young teachers of tomorrow.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 p-4">
            <div class="card-body">
              <h2 class="card-title section-title mb-3">Our Mission</h2>
              <p class="text-muted">
                We are an academic community where both student-teachers and
                faculty have the freedom and responsibility to communicate,
                evaluate, and expand humanity's knowledge. We are dedicated to
                academic excellence and creating an environment that fosters a
                genuine love for teaching and learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <h2 class="text-center section-title mb-4">Our Facilities</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="facility-card h-100">
              <h3>Resource Centers</h3>
              <p class="text-muted small">
                Science & Mathematics, Psychology, ICT with Internet
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="facility-card h-100">
              <h3>Health & Physical Education</h3>
              <p class="text-muted small">
                A dedicated Health and Physical Resource Centre
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="facility-card h-100">
              <h3>Arts & Library</h3>
              <p class="text-muted small">
                Art, Craft & Music Centre, and a Library with Internet
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100 p-4">
            <div class="card-body">
              <h2 class="card-title section-title mb-3">
                Recognition & Affiliation
              </h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Recognized by the National Council for Teacher Education
                  (NCTE), New Delhi
                </li>
                <li class="list-group-item">
                  Affiliated with Rani Chennamma University, Belagavi & approved
                  by the Government of Karnataka
                </li>
                <li class="list-group-item">
                  Offers a one-year B.Ed. course through a co-education system
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 p-4">
            <div class="card-body">
              <h2 class="card-title section-title mb-3">Academic Excellence</h2>
              <div class="row g-3">
                <div class="col-sm-6">
                  <div class="stat-card h-100">
                    <p class="stat-number">100%</p>
                    <p class="text-muted mb-0">
                      Success Rate for the last 9 years
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="stat-card h-100">
                    <p class="stat-number">10+</p>
                    <p class="text-muted mb-0">
                      Years of Academic Progress (as of 2013-14)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
