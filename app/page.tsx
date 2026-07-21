import Image from "next/image";

const projects = [
  {
    title: "SRS Dose Prediction",
    description:
      "Machine learning framework for predicting normal-brain dose-volume metrics in single-isocenter multi-target stereotactic radiosurgery.",
    technologies: ["MATLAB", "Machine Learning", "Medical Physics", "SRS"],
    link: "https://github.com/Zhuoyun-Huang/SRS-Dose-Prediction",
    linkLabel: "View Repository",
  },
  {
    title: "Arc Analysis for Eclipse ESAPI",
    description:
      "Interactive Eclipse ESAPI application for VMAT arc MU/degree analysis, polar visualization, and automatic arc avoidance detection.",
    technologies: ["C#", "ESAPI", "VMAT", "WPF"],
    link: "https://github.com/Zhuoyun-Huang/arc-analysis-esapi",
    linkLabel: "View Repository",
  },
  {
    title: "AI Medical Physics Platform — In Development",
    description:
      "AI-powered platform for medical physics education featuring interactive notes, question banks, formulas, and intelligent explanations.",
    technologies: ["Next.js", "TypeScript", "AI"],
    link: "https://github.com/Zhuoyun-Huang",
    linkLabel: "View GitHub Profile",
  },
  {
    title: "Personal Website",
    description:
      "Personal academic website built with Next.js and Tailwind CSS to showcase research, publications, software projects, and professional experience.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/Zhuoyun-Huang/zhuoyun-website",
    linkLabel: "View Repository",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white transition group-hover:bg-blue-700">
              ZH
            </span>

            <span className="hidden font-semibold text-slate-900 sm:block">
              Zhuoyun Huang
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a
              href="#about"
              className="text-slate-700 transition hover:text-blue-700"
            >
              About
            </a>

            <a
              href="#research"
              className="text-slate-700 transition hover:text-blue-700"
            >
              Research
            </a>

            <a
              href="#publications"
              className="text-slate-700 transition hover:text-blue-700"
            >
              Publications
            </a>

            <a
              href="#projects"
              className="text-slate-700 transition hover:text-blue-700"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-700 transition hover:text-blue-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-screen items-center bg-slate-50 px-6 pb-16 pt-28"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="text-center lg:text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Medical Physics · Research · Software
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
              Zhuoyun Huang
            </h1>

            <h2 className="mt-5 text-2xl font-medium text-slate-600 md:text-3xl">
              Medical Physics PhD Student
            </h2>

            <p className="mt-3 text-lg font-medium text-slate-500">
              University at Buffalo
            </p>

            <p className="mt-7 text-lg leading-8 text-slate-600 md:text-xl">
              Radiation Oncology · Machine Learning · Medical Imaging
            </p>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 lg:mx-0">
              I develop research methods and clinical software at the
              intersection of medical physics, radiation therapy, imaging, and
              machine learning.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/Zhuoyun_Huang_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-lg"
              >
                View CV
              </a>

              <a
                href="#research"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
              >
                Explore My Research
              </a>

              <a
                href="https://github.com/Zhuoyun-Huang"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-100" />

              <Image
                src="/profile.jpg"
                alt="Portrait of Zhuoyun Huang"
                width={420}
                height={520}
                priority
                className="relative h-[390px] w-[315px] rounded-[2rem] border border-white object-cover object-center shadow-2xl sm:h-[460px] sm:w-[370px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-blue-700">
            About
          </p>

          <h2 className="mt-3 text-4xl font-bold">About Me</h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            I earned my M.S. in Medical Physics from Duke University and am
            pursuing doctoral training in Medical Physics at the University at
            Buffalo.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            My work focuses on radiation oncology, stereotactic radiosurgery,
            medical imaging, machine learning, and clinical software
            development. I am particularly interested in translating data-driven
            research into practical tools for treatment planning, plan
            evaluation, and patient care.
          </p>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="scroll-mt-20 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-blue-700">
            Research
          </p>

          <h2 className="mt-3 text-4xl font-bold">Research Interests</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-bold">SIMT SRS</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Prediction and analysis of normal-brain dose-volume metrics for
                single-isocenter multi-target stereotactic radiosurgery.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-bold">Machine Learning</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Gradient-boosted tree models and data-driven methods for
                treatment-planning prediction and clinical decision support.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-bold">Clinical Software</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Development of software tools for plan analysis, workflow
                automation, and medical physics research.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-blue-700">
            Publications
          </p>

          <h2 className="mt-3 text-4xl font-bold">Selected Publications</h2>

          <article className="mt-10 rounded-2xl border border-slate-200 p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Journal Article
            </p>

            <h3 className="mt-3 text-xl font-bold leading-8">
              Predicting Normal Brain Dose-Volume Metrics for Single-Isocenter
              Multi-Target Stereotactic Radiosurgery
            </h3>

            <p className="mt-4 text-slate-600">Zhuoyun Huang et al.</p>

            <p className="mt-2 italic text-slate-500">
              Journal of Radiosurgery and SBRT
            </p>

            <p className="mt-4 font-medium text-emerald-700">
              Accepted for publication
            </p>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-blue-700">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">Selected Projects</h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Selected research, clinical software, and educational projects
            involving medical physics, machine learning, and web development.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.linkLabel}: ${project.title}`}
                  className="mt-7 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
                >
                  {project.linkLabel} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-blue-700">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">Let&apos;s Connect</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am interested in research collaborations and professional
            conversations related to medical physics, machine learning,
            radiation oncology, and clinical software development.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:zhuoyunh@buffalo.edu"
              className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-lg"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Zhuoyun-Huang"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/zhuoyun-huang-0b55533bb/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Zhuoyun Huang. All rights reserved.
      </footer>
    </main>
  );
}
