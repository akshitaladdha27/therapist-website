"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, Heart, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealDown } from "./RevealDown";

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>


const faqs = [
  {
    question: "Who do you typically work with?",
    answer:
      "I primarily work with adults who are experiencing anxiety, panic, trauma, burnout, or the effects of long-term stress. Many of my clients are high-achieving professionals, creatives, or individuals who appear functional on the outside but feel overwhelmed or emotionally drained internally.",
  },
  {
    question: "What issues do you specialize in?",
    answer:
      "My areas of focus include anxiety, panic, trauma, professional burnout, perfectionism, and chronic stress. I also support clients who are working through the impact of past experiences on their relationships, confidence, and sense of safety.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive while still allowing space for reflection and depth. I integrate evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
];

const backgroundItems = [
  {
    title: "Education",
    content:
      "Doctor of Psychology (PsyD) in Clinical Psychology, with advanced training in evidence-based treatment for anxiety, trauma, and stress-related disorders. Academic focus included trauma-informed care, psychological assessment, and therapeutic intervention across adult populations.",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist in the state of California. Practice adheres to ethical standards established by state licensing boards and professional psychological associations.",
  },
  {
    title: "Certifications & Training",
    content:
      "Extensive training in cognitive-behavioral therapy (CBT), EMDR, mindfulness-based approaches, and body-oriented techniques. Ongoing continuing education in trauma-informed therapy, nervous system regulation, and burnout prevention.",
  },
];

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Support for persistent worry, overthinking, panic symptoms, and feeling constantly on edge. We’ll work to understand both the emotional and physical patterns behind anxiety and build tools for steadiness and relief.",
    image: "/images/panic.avif",
  },
  {
    title: "Trauma & Past Experiences",
    description:
      "Carefully paced trauma-informed therapy for both single-incident and long-standing experiences. The focus is on safety, regulation, and helping you feel more grounded in daily life—not just during sessions.",
    image: "/images/trama.avif",
  },
  {
    title: "Burnout & Chronic Stress",
    description:
      "Support for professionals and high-achievers experiencing exhaustion, emotional fatigue, and loss of balance. Therapy becomes a space to slow down, reset expectations, and create sustainable ways of living and working.",
    image: "/images/burnout.jpg",
  },
];


export default function HomePage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [plusIndex, setplusIndex] = useState<number | null>(null);

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastY || currentY < 80);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  useEffect(() => {
    if (localStorage.getItem("site-unlocked") !== "true") {
      router.replace("/");
    }
  }, [router]);

  return (
    // <main className="relative w-full overflow-hidden flex flex-col items-stretch  m-0 p-0 bg-[#fbf8f3] text-[#2f3b1f] ">
    <main className="relative w-full overflow-hidden flex flex-col items-stretch m-0 p-0 bg-transparent">

      {/* ================= NAVBAR ================= */}
      <nav
      className={`fixed top-0 left-0 z-50 w-full bg-[#F4EFEA] px-6 md:px-20 py-3 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-playfair text-2xl md:text-4xl font-medium text-[#2E2E2E]">
            Dr. Maya Reynolds
          </h1>

          <div className="hidden md:flex gap-8 font-manrope text-lg text-[#2E2E2E]">
            <a href="#" className="hover:opacity-50">
              Blog
            </a>
            <a href="#" className="hover:opacity-50">
              Contact
            </a>
          </div>
        </div>
      </nav>


      {/* ================= PAGE 1 ================= */}
      <section className="relative w-full top-0 bg-[#F4EFEA] overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 py-24 md:py-40 md:grid-cols-2">
          <RevealDown>
          <div>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl leading-tight text-[#2E2E2E] mb-6">
              Hey, it’s me <br />
              Dr. Maya Reynolds, <br />
              PsyD
            </h1>

            <p className="font-manrope text-base md:text-lg text-[#4A4A4A] mb-10 max-w-lg">
              Are you an adult, overwheled, stuck in your day today life then you on right place I am here to assist you.  
            </p>

            <div className="flex gap-6">
              <button className="rounded-full bg-[#5F7D6E] px-8 py-3 font-manrope text-white transition hover:bg-[#4E6A5D]">
                Schedule a free call
              </button>

              <button className="rounded-full border border-[#5F7D6E] px-8 py-3 font-manrope text-[#5F7D6E] transition hover:bg-[#5F7D6E] hover:text-white">
                Contact me
              </button>
            </div>
          </div>
          </RevealDown>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-full z-0">
                <Image 
                  src="/images/Hero BG Image.png" 
                  alt="bg-container"
                  fill
                  sizes="(max-width: 768px) 90vw, 460px" 
                  className="object-contain"
                  
                />
              </div>

              <div className="relative z-10 h-90 sm:h-105 md:h-130  w-65 sm:w-75 md:w-95 overflow-hidden rounded-t-full">
                <Image
                  src="/images/Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds"
                  width={380}
                  height={520}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= PAGE 2 ================= */}
      <section className="relative w-full overflow-hidden bg-[#D9D7B6] py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl">

          {/* LEFT IMAGE */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0">
            <div className="absolute inset-0 border border-[#D6DED9] rounded-full scale-110"></div>
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-sm">
              <Image 
                src="/images/laptop-doc-image.png" 
                alt="Dr. Maya Reynolds" 
                fill 
                sizes="(max-width: 768px) 70vw, 256px"
                className="object-cover"
                loading="eager"
              />
            </div>
          </div>

          <RevealDown>
            <div className="flex-1 max-w-xl text-center md:text-left">
              <span className="inline-block bg-[#EAD9C8] text-[#6B4F3F] px-4 py-1 rounded-full text-xs sm:text-sm font-manrope font-medium mb-4">
                Licensed Clinical Psychologist (Fictional Therapist)
              </span>

              <h2 className="font-playfair text-3xl sm:text-4xl text-[#2E2E2E] mt-4 mb-6">
                Grounded support for high-achieving adults.
              </h2>

              <p className="font-manrope text-[#4A4A4A] mb-8 leading-relaxed text-sm sm:text-base">
                Expertly tailored strategies for those feeling “functional” on the outside
                while quietly navigating anxiety, burnout, or past trauma.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="text-center md:text-left">
                  <div className="text-[#5F7D6E] mb-2 flex justify-center md:justify-start">
                    <User size={22} />
                  </div>
                  <p className="text-xs font-manrope font-semibold text-[#2E2E2E]">CBT & EMDR</p>
                  <p className="text-[10px] font-manrope text-[#6A6A6A]">Evidence-based</p>
                </div>

                <div className="text-center md:text-left">
                  <div className="text-[#5F7D6E] mb-2 flex justify-center md:justify-start">
                    <Heart size={22} />
                  </div>
                  <p className="text-xs font-manrope font-semibold text-[#2E2E2E]">Trauma Informed</p>
                  <p className="text-[10px] font-manrope text-[#6A6A6A]">Safe & Paced</p>
                </div>

                <div className="text-center md:text-left sm:col-span-2 md:col-span-1">
                  <div className="text-[#5F7D6E] mb-2 flex justify-center md:justify-start">
                    <Coffee size={22} />
                  </div>
                  <p className="text-xs font-manrope font-semibold text-[#2E2E2E]">Burnout Relief</p>
                  <p className="text-[10px] font-manrope text-[#6A6A6A]">For Professionals</p>
                </div>
              </div>
            </div>
          </RevealDown>

          <div className="w-full sm:max-w-sm md:w-[320px] bg-[#e7e5cb] p-6 sm:p-8 rounded-4xl shadow-xl border border-[#e7e5cb] text-center">
            <div className="h-28 sm:h-32 mb-6 flex justify-center">
              <Image
                src="/images/trauma-recovery.jpg"
                alt="Trauma recovery"
                width={200}
                height={120}
                className="object-contain"
              />
            </div>

            <h3 className="font-playfair text-lg sm:text-xl text-[#2E2E2E] mb-4">
              Trauma Recovery
            </h3>

            <div className="w-full h-px bg-[#E6ECE9] mb-6"></div>

            <p className="font-manrope text-xs sm:text-sm text-[#5A5A5A] leading-relaxed mb-8">
              Specialized EMDR and body-oriented techniques to process past experiences
              and regain a sense of safety and confidence.
            </p>

            <button className="border-2 border-[#5F7D6E] text-[#5F7D6E] px-6 py-2 rounded-lg text-sm font-manrope font-semibold hover:bg-[#d8d6bc] transition-colors">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* -------------PAGE 3------------------ */}
      <section className="bg-[#fbf8f3] py-20 px-6 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center font-playfair text-3xl sm:text-4xl md:text-5xl text-[#2f3b1f] mb-14">
            My Specialties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#e9e6df]
                  border border-[#2f3b1f]/30
                  rounded-lg
                  p-6
                  flex flex-col
                  items-start
                "
              >
                <h3 className="font-playfair text-xl sm:text-2xl text-[#2f3b1f] mb-4">
                  {item.title}
                </h3>

                <p className="font-manrope text-sm sm:text-base text-[#4a4a4a] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="w-full mt-auto flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------PAGE 4----------------- */}
      <section className="relative w-full bg-[#bab773] py-14 sm:py-16 px-6 sm:px-8 md:px-12 lg:px-24 overflow-hidden">

        <RevealDown>
          <div className="max-w-9xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-16 md:mb-">
            
            <div>
              <h2 className="font-playfair pl-5 text-3xl sm:text-4xl md:text-5xl text-[#2D4356] leading-tight">
                A calm, private space for healing.
              </h2>
            </div>

            <div className="flex flex-col justify-end font-manrope">
              <h3 className="text-[#2D4356] font-medium text-lg sm:text-xl mb-4">
                Our Office in Santa Monica p
              </h3>

              <p className="text-[#3e3e3e] leading-7 mb- text-left md:text-justify max-w-xl text-sm sm:text-base md:text-lg">
                My Santa Monica office is designed to feel quiet, grounded, and welcoming from
                the moment you arrive. With natural light, comfortable seating, and a private,
                uncluttered environment, the space supports reflection, emotional safety, and
                a sense of ease—especially for those who feel overwhelmed or constantly “on.”
              </p>

              <p className="text-[#3e3e3e] leading-7 text-left md:text-justify max-w-xl text-sm sm:text-base md:text-lg">
                I offer in-person sessions at this location, as well as secure telehealth
                appointments for clients located throughout California.
              </p>
            </div>
          </div>
        </RevealDown>

        <div className="max-w-6xl mx-auto relative mb-16 md:mb-10">

          <div className="hidden md:block absolute -left-16 -top-20 w-64 h-64 lg:w-120 lg:h-104 opacity-100 pointer-events-none rounded-[40px] overflow-hidden">
            <Image
              src="/images/office2 (1).jpeg"
              alt="Therapy office space"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 w-full md:w-3/5 lg:w-1/2 rounded-4xl sm:rounded-[40px] overflow-hidden shadow-2xl ml-auto">
            <Image
              src="/images/office1.jpeg"
              alt="Counseling office interior"
              width={800}
              height={500}
              className="w-full h-70 sm:h-90 md:h-105 object-cover"
            />
          </div>
        </div>

        <RevealDown>
          <div className="max-w-9xl mx-auto px-0 sm:px-6 md:px-10 mb-16 md:mb-20">
            <p className="text-[#4F4F4F] leading-7 font-manrope text-sm sm:text-base md:text-lg text-left md:text-justify">
              Clients often share that the space itself helps them feel more settled before
              sessions even begin. Whether we’re working through anxiety, burnout, or the
              impact of past experiences, the environment is intentionally designed to support
              a slower pace, deeper presence, and a greater sense of safety.
            </p>
          </div>
        </RevealDown>

        <RevealDown>
          <div className="text-center max-w-4xl mx-auto px-4">
            <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-[#2D4356] italic opacity-80">
              “Therapy works best when you feel safe, comfortable, and truly seen.”
            </p>
          </div>
        </RevealDown>

      </section>

      

      {/* ================= PAGE 5 ================= */}
      <section className="relative w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-[#F2F1E8]">

        <div className="relative h-70 sm:h-90 md:h-auto">
          <Image
            src="/images/session.png"
            alt="Support session"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex">
          <div className="flex flex-col justify-between w-full">

            <RevealDown>
              <div className="px-6 sm:px-8 md:px-12 py-10 md:py-16">
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-6xl text-[#5E5B32] mb-6 md:mb-10 leading-tight">
                  You don’t have to do this all alone.
                </h2>

                <h3 className="font-manrope text-base sm:text-lg text-[#4A4A4A] mb-6">
                  If you’re facing any of these, there’s support available:
                </h3>

                <ul className="list-disc ml-6 sm:ml-9 space-y-3 sm:space-y-4 font-manrope text-base sm:text-lg text-[#4A4A4A] mb-8 md:mb-10">
                  <li>Persistent feelings of sadness or anxiety</li>
                  <li>Difficulty focusing or staying present</li>
                  <li>Challenges in relationships</li>
                  <li>Constant exhaustion or burnout</li>
                  <li>Feeling overwhelmed by daily life</li>
                </ul>

                <p className="font-manrope text-base sm:text-lg text-[#4A4A4A] max-w-xl">
                  Through empathy, insight, and collaboration, we’ll work together to
                  help you navigate life’s challenges with greater clarity and balance.
                </p>
              </div>
            </RevealDown>

            <div className="px-6 sm:px-8 md:px-12 pb-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-xl">
              <button
                className="
                  px-6 py-3
                  bg-[#89864b]
                  text-white
                  font-manrope
                  text-sm
                  tracking-wide
                  rounded-md
                  transition
                  hover:bg-[#6F6C3F]
                "
              >
                Start Therapy
              </button>

              <button
                className="
                  px-6 py-3
                  font-manrope
                  text-sm
                  tracking-wide
                  text-[#5E5B32]
                  transition
                  hover:text-[#909d76]
                "
              >
                A Quick Call →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PAGE 6 ================= */}
      <section className="relative w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 
        bg-[#747362]
        px-6 sm:px-8 md:px-16 lg:px-24
        py-16 md:py-20
      ">

        <div className="flex items-center">
          <div className="w-full text-left flex flex-col items-start">
            <RevealDown>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-playfair mb-6">
                Hey, I'm Maya
              </h2>

              <p className="text-base sm:text-lg md:text-xl mb-10 md:mb-14 leading-relaxed font-manrope max-w-xl">
                I'm committed to providing a safe and supportive environment where we can
                explore your thoughts, feelings, and behaviors. With empathy and guidance,
                we'll work together to navigate the challenges life throws your way.
              </p>
            </RevealDown>

            <div className="w-full flex justify-center md:justify-start font-manrope">
              <button
                className="
                  border border-[#2f3b1f]
                  px-6 sm:px-8 py-3 sm:py-4
                  text-xs sm:text-sm tracking-wide
                  hover:bg-[#2f3b1f]
                  hover:text-white
                  transition
                "
              >
                LET’S CHAT →
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center mt-16 md:mt-0">

          <div className="
            w-60 h-90
            sm:w-70 sm:h-105
            md:w-85 md:h-125
            lg:w-95 lg:h-140
            overflow-hidden
            rounded-t-[9999px]
          ">
            <Image
              src="/images/Dr. Maya Reynolds.png"
              alt="About"
              width={380}
              height={520}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div className="hidden md:block absolute -bottom-6 -right-10 w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden">
            <Image
              src="/images/brain.png"
              alt="Detail"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        className="
          grid grid-cols-1 md:grid-cols-2
          px-6 sm:px-8 md:px-16
          pt-20 sm:pt-24 md:pt-32
          pb-16
          gap-16 md:gap-24
          bg-[#9da894]
          relative w-full overflow-hidden
        "
      >
        <div className="flex items-center justify-center mt-10 md:mt-0">
          <div
            className="
              relative
              w-55 h-60
              sm:w-65 sm:h-70
              md:w-105 md:h-112.5
              flex items-center justify-center
            "
          >
            <img
              src="/images/Vector 1.png"
              alt=""
              className="absolute w-full h-auto opacity-80"
              style={{ zIndex: 1 }}
            />

            <img
              src="/images/Vector 2.png"
              alt=""
              className="absolute w-[105%] h-auto"
              style={{ zIndex: 2 }}
            />

            <img
              src="/images/_.png"
              alt="FAQ icon"
              className="absolute w-16 sm:w-20 md:w-24 h-auto"
              style={{ zIndex: 3 }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-start mt-8 md:mt-10">
          <div className="w-full max-w-xl">
            <RevealDown>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair mb-8 md:mb-10 text-[#2f3b1f]">
                FAQs
              </h2>

              <div className="border-t border-[#2f3b1f]">
                {faqs.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={index} className="border-b border-[#2f3b1f]">
                      <button
                        className="
                          w-full
                          flex justify-between items-center
                          py-5 sm:py-6
                          text-left
                          font-manrope
                          text-lg sm:text-xl md:text-2xl
                          font-semibold
                          transition-all
                        "
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span className="flex items-center gap-4">
                          <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                            <motion.img
                              key={isOpen ? "minus" : "plus"}
                              src={isOpen ? "/icons/minus.png" : "/icons/add.png"}
                              initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="w-full h-full"
                              alt="toggle"
                            />
                          </div>
                          {item.question}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </RevealDown>
          </div>
        </div>
      </section>

      {/* ------------------PROFESTIONAL BACKGROUND------------------- */}
      <section className="relative w-full overflow-hidden bg-[#c1c6ae] py-28">
        <div className="max-w-3xl mx-auto px-6">
          <RevealDown>

          <h2 className="text-5xl font-semibold font-playfair text-center text-[#2f3b1f] mb-12">
            My Professional Background
          </h2>

          <div className="border-t border-[#2f3b1f] font-manrope">
            {backgroundItems.map((item, index) => {
              const isOpen = plusIndex === index;

              return (
                <div key={index} className="border-b border-[#2f3b1f]">
                  <button
                    onClick={() => setplusIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center py-6 text-left text-xl text-[#2f3b1f]"
                  >
                    <span>{item.title}</span>
                    <span
                      className={`text-2xl transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-6 text-sm text-[#2f3b1f] max-w-xl transform transition-transform duration-500 ease-out">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          </RevealDown>
        </div>
      </section>


      {/* ----------------GET STARTED----------------------- */}
      <section className="relative w-full overflow-hidden bg-[#dedeca] py-16 sm:py-20 flex justify-center items-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <RevealDown>
            <h2 className="
              text-3xl sm:text-4xl md:text-[54px]
              leading-tight
              font-playfair
              text-[#2f3b1f]
              mb-6
              max-w-2xl
              mx-auto
            ">
              Taking the first step can be overwhelming
            </h2>

            <p className="
              text-base sm:text-lg
              text-[#2f3b1f]/80
              font-manrope
              leading-relaxed
              mb-10
              max-w-xl
              mx-auto
            ">
              So, let's make it easy. Schedule a free 15 minute consultation so we get to know each other.
            </p>
          </RevealDown>

          <button
            className="
              bg-[#009a9a]
              hover:bg-[#008181]
              text-white
              px-8 sm:px-10
              py-3 sm:py-4
              rounded-lg
              text-sm sm:text-md
              font-semibold
              font-manrope
              transition-all
              shadow-sm
            "
          >
            Get Started
          </button>
        </div>
      </section>

      {/* --------------------INFO--------------------------- */}
      <section className="relative w-full overflow-hidden bg-[#ebede4] py-12 text-[#2A3A14]">
        <div className="
          max-w-7xl mx-auto
          px-6 sm:px-8 md:px-12
          flex flex-col md:flex-row
          justify-between
          gap-12 md:gap-24
        ">

          <RevealDown>
            <div className="text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair mb-6">
                Dr. Maya Reynolds
              </h3>

              <p className="text-base sm:text-lg leading-relaxed font-manrope mb-6">
                123th Street 45 W, <br />
                Santa Monica, CA 90401
              </p>

              <div className="space-y-1 text-base sm:text-lg font-manrope">
                <p className="underline cursor-pointer">email@example.com</p>
                <p className="underline cursor-pointer">(555) 555-5555</p>
              </div>
            </div>
          </RevealDown>

          <RevealDown>
            <div className="
              flex flex-col sm:flex-row
              gap-12 sm:gap-20 md:gap-32
              text-left sm:text-right
            ">
              
              <div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-playfair mb-6">
                  Hours
                </h4>
                <p className="text-base sm:text-lg font-manrope">Monday – Friday</p>
                <p className="text-base sm:text-lg font-manrope">10am – 6pm</p>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-playfair mb-6">
                  Find
                </h4>
                <ul className="space-y-1 text-base sm:text-lg underline font-manrope">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
            </div>
          </RevealDown>
        </div>
      </section>
      

      <footer className="relative w-full overflow-hidden  bg-[#d7ded2] py-6">
        <div className="
          max-w-6xl mx-auto
          px-6 sm:px-8 md:px-12
          mt-6
          text-center
          space-y-4
        ">
          
          <div className="
            flex flex-wrap
            justify-center
            gap-4 sm:gap-6
            font-manrope
            text-sm sm:text-base
            text-black
            underline
          ">
            <a href="#">Privacy & Cookies Policy</a>
            <a href="#">Licensing</a>
          </div>

          <p className="text-[#2F3B1F] font-manrope text-sm sm:text-base">
            Website Template Credits:
            <span className="underline ml-1 cursor-pointer text-black">
              Douglas Henrique by Figma
            </span>
          </p>

          <p className="text-[#2F3B1F] font-manrope text-xs sm:text-sm">
            All Rights Reserved © 2026 Your Business Name Here, LLC.
          </p>

        </div>
      </footer>
    </main>
  );
}
