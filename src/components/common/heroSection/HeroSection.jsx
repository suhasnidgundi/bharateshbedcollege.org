export default function HeroSection() {
  return (
    <section
      class="hero-wrap hero-wrap-2"
      style="background-image: url('images/bg_2.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
            <h1 class="mb-2 bread">Our Courses</h1>
            <p class="breadcrumbs">
              <span class="mr-2">
                <a href="index.html">
                  Home <i class="ion-ios-arrow-forward"></i>
                </a>
              </span>{" "}
              <span>
                Courses <i class="ion-ios-arrow-forward"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
