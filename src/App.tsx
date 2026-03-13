/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Cpu, 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Zap, 
  ChevronRight, 
  Menu, 
  X, 
  Rocket, 
  Lightbulb, 
  Heart,
  ArrowRight,
  Gamepad2,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Link,
  Check,
  Share2,
  ChevronDown
} from 'lucide-react';

// --- Types ---
interface GameEvent {
  name: string;
  type: 'Autonomous' | 'RC' | 'Theme-based';
  players: string;
  levels: string[];
}

// --- Constants ---
const MAKERVERSE_ORANGE = '#FF6321';
const MAKERVERSE_BLUE = '#0056B3';
const REGISTRATION_URL = 'https://forms.gle/6W3upEFHpdKqzuJv6';
const GAME_RULES_URL = '/game-rules-and-details.pdf';
const FESTIVAL_CALENDAR_URL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=1st+Dipolog+Robotics+Festival+%26+Competition+2026&dates=20260411T010000Z/20260411T090000Z&details=Not+joining+a+game+category%3F+You%E2%80%99re+still+invited.+Explore+live+demos%2C+robotics+exhibits%2C+drone+and+UAV%2FUGV+showcases%2C+communication+technologies+like+LoRa%2C+product+displays%2C+and+hands-on+tech+experiences+for+all+ages.&location=Zamboanga+del+Norte+Cultural+and+Sports+Center%2C+Dipolog+City';

const GAME_EVENTS: GameEvent[] = [
  { name: 'Line Tracing (Programmable)', type: 'Autonomous', players: '1 Player', levels: ['Grade 1 - 3', 'Grade 4 - 8', 'Grade 9 - 12', 'Open'] },
  { name: 'Shoot the Ball / MakerBall', type: 'Autonomous', players: '1 Player', levels: ['Grade 1 - 3', 'Grade 4 - 8'] },
  { name: 'Sumobot / Robo Push (Autonomous)', type: 'Autonomous', players: '1-2 Players', levels: ['Open'] },
  { name: 'Sumobot / Robo Push (RC)', type: 'RC', players: '1-2 Players', levels: ['Grade 4 - 8', 'Grade 9 - 12', 'Open'] },
  { name: 'SoccerBot (RC)', type: 'RC', players: '3 Players + 1 Coach', levels: ['Open'] },
  { name: 'Track Mania (RC)', type: 'RC', players: '1-2 Players', levels: ['Open'] },
  { name: 'Innovation / Future Makers', type: 'Theme-based', players: '1-3 Participants', levels: ['Grade 4 - 8', 'Grade 9 - 12', 'Open'] },
];

const STUDENT_LEARNING_IMAGES = [
  '/student-learning-1.jpg',
  '/student-learning-2.jpg',
  '/student-learning-3.jpg',
  '/student-learning-4.jpg',
  '/student-learning-5.jpg',
];

// --- Components ---

const BASE = import.meta.env.BASE_URL;

const MakerverseLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img src={`${BASE}makerverse-logo.jpg`} alt="Makerverse" className={`${className} rounded-full object-cover`} />
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Venue', href: '#venue' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MakerverseLogo className="w-12 h-12" />
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            MAKERVERSE
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-[#FF6321] transition-colors ${scrolled ? 'text-slate-600' : 'text-white/80'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6321] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#e55a1e] transition-all shadow-lg shadow-orange-500/20"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-600 hover:text-[#FF6321]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6321] text-white px-5 py-3 rounded-xl text-center font-semibold"
            >
              Register Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: April 11, 2026, 07:30:00 GMT+0800 (Philippine Standard Time)
    const targetDate = new Date('2026-04-11T07:30:00+08:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            Learn, Create, Innovate
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            1st Dipolog <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6321] to-orange-400">
              Robotics Festival
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
            Join the movement that empowers the countryside. A free, advocacy-driven STEM event designed to spark curiosity and build the next generation of makers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6321] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e55a1e] transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-orange-500/30"
            >
              Join the Competition
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => document.getElementById('share')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Share2 size={20} />
              Share Event
            </button>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">April 11</span>
                <span className="text-slate-500 text-sm uppercase tracking-wider">Event Date</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">FREE</span>
                <span className="text-slate-500 text-sm uppercase tracking-wider">Registration</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">200+</span>
                <span className="text-slate-500 text-sm uppercase tracking-wider">Participants</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 inline-block backdrop-blur-sm shadow-xl">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                <Clock size={14} className="text-[#FF6321]" />
                Countdown to Launch
              </p>
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="flex flex-col items-center min-w-[60px]">
                  <span className="text-white font-black text-4xl font-mono">{timeLeft.days.toString().padStart(2, '0')}</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Days</span>
                </div>
                <span className="text-white/20 text-3xl font-black pb-4">:</span>
                <div className="flex flex-col items-center min-w-[60px]">
                  <span className="text-white font-black text-4xl font-mono">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Hours</span>
                </div>
                <span className="text-white/20 text-3xl font-black pb-4">:</span>
                <div className="flex flex-col items-center min-w-[60px]">
                  <span className="text-white font-black text-4xl font-mono">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Mins</span>
                </div>
                <span className="text-white/20 text-3xl font-black pb-4">:</span>
                <div className="flex flex-col items-center min-w-[60px]">
                  <span className="text-[#FF6321] font-black text-4xl font-mono">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 flex items-center justify-center">
            <motion.img 
              src={`${BASE}mascot.png`}
              alt="Makerverse Mascot" 
              className="w-[400px] h-auto drop-shadow-[0_20px_60px_rgba(255,99,33,0.3)]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Floating UI Element */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Trophy size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Prizes</p>
                <p className="text-sm font-bold text-slate-900">Exciting rewards await! 🏆</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % STUDENT_LEARNING_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + STUDENT_LEARNING_IMAGES.length) % STUDENT_LEARNING_IMAGES.length);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % STUDENT_LEARNING_IMAGES.length);
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-[#FF6321] uppercase tracking-[0.2em] mb-4">About the Festival</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Promoting STEM & Innovation for All
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              The Dipolog Robotics Festival is a non-profit, advocacy-driven STEM event intended to promote Science, Technology, Engineering, Mathematics (STEM), innovation, and robotics among the youth of Dipolog City and the wider Zamboanga del Norte community.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6321]">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Inclusive Access</h4>
                  <p className="text-sm text-slate-500">Free of charge, ensuring participation is accessible to all interested learners.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Hands-on Learning</h4>
                  <p className="text-sm text-slate-500">Interactive exhibits and guided sessions designed to spark curiosity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Problem Solving</h4>
                  <p className="text-sm text-slate-500">Strengthening skills through real-world robotics challenges.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Advocacy Driven</h4>
                  <p className="text-sm text-slate-500">Building a movement that empowers the countryside youth.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.facebook.com/makerverse.ph" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1864D9] transition-all shadow-lg shadow-blue-500/20"
            >
              <Facebook size={20} fill="currentColor" />
              Follow us on Facebook
            </a>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img
                src={STUDENT_LEARNING_IMAGES[activeSlide]}
                alt="Students Learning"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
                {STUDENT_LEARNING_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${activeSlide === idx ? 'w-6 bg-white' : 'w-2.5 bg-white/60'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60"
                aria-label="Next image"
              >
                →
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#003366] text-white p-8 rounded-[2rem] shadow-2xl max-w-xs hidden sm:block">
              <p className="text-3xl font-black mb-2">150-200</p>
              <p className="text-sm opacity-80 font-medium">Anticipated participants from public and private schools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 mx-auto mb-8">
            <Rocket size={32} />
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-10">
            "Our vision at Makerverse is not just to teach. It’s to build a movement. A movement that empowers the countryside, that creates confident makers out of curious kids. We believe learning tech shouldn’t be a luxury. It should be a right."
          </blockquote>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-white mb-1">Makerverse</p>
            <p className="text-xs text-slate-500 mt-4 max-w-md">
              Excerpt from a speech at the 2025 Summer Robot Games International Open & Youth Robotics Convention, Philippines
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Competitions = () => {
  return (
    <section id="competitions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#FF6321] uppercase tracking-[0.2em] mb-4">Competition Events</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Choose Your Challenge</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore the full list of game events available for participants. Choose based on your age division and team setup.
          </p>
          <a
            href={GAME_RULES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-[#0056B3] font-semibold hover:text-[#003d80]"
          >
            View complete game rules and details (PDF)
            <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {GAME_EVENTS.map((game, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 text-blue-600">
                    <Gamepad2 size={24} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">{game.name}</h4>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${game.type === 'Autonomous' ? 'bg-orange-100 text-orange-700' : game.type === 'RC' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {game.type}
                </span>
              </div>

              <p className="text-sm font-medium text-slate-600 mb-4">Team Setup: {game.players}</p>

              <div className="flex flex-wrap gap-2">
                {game.levels.map((level, levelIdx) => (
                  <span key={levelIdx} className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    {level}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#003366] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <h4 className="text-3xl font-black mb-4">Ready to compete?</h4>
          <p className="text-blue-100/80 mb-8 max-w-xl mx-auto">
            Registration is completely free. Secure your spot now and join the first-ever robotics festival in Dipolog City.
          </p>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6321] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#e55a1e] transition-all shadow-xl shadow-orange-900/40 inline-block"
          >
            Register for Free
          </a>
        </div>
      </div>
    </section>
  );
};

const FestivalExperience = () => {
  const highlights = [
    'Live robot and drone demos',
    'UAV / UGV technology showcases',
    'Robotics parts and product displays',
    'Communication tech zone (LoRa, modules, IoT)',
    'Hands-on exhibits for students, families, and tech enthusiasts',
  ];

  return (
    <section id="festival-experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#003366] to-[#0a4f99] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-orange-400/20 blur-3xl rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-sm font-bold text-orange-300 uppercase tracking-[0.2em] mb-4">Festival Experience</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Beyond the Competition
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                Not joining a game category? You’re still invited. Explore live demos, robotics exhibits, drone and UAV/UGV showcases, communication technologies like LoRa, product displays, and hands-on tech experiences for all ages.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-blue-100 mb-4 font-bold">What attendees can explore</p>
              <div className="space-y-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-orange-300 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-50">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={FESTIVAL_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-[#FF6321] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#e55a1e] transition-all"
              >
                <Calendar size={18} />
                Add Festival to Calendar
              </a>

              <a
                href="#share"
                className="mt-4 inline-flex items-center gap-2 text-blue-100 hover:text-white font-semibold"
              >
                <Share2 size={16} />
                Share this with friends
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Venue = () => {
  return (
    <section id="venue" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video lg:aspect-square">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.2!2d123.3475178!3d8.5837147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325497007d6c2bb9%3A0xfaeea25f1f214132!2sZamboanga%20del%20Norte%20Cultural%20and%20Sports%20Center!5e0!3m2!1sen!2sph!4v1709900000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Map"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-[#FF6321] uppercase tracking-[0.2em] mb-4">Location & Date</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              ZDN Cultural and <br />Sports Center
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-[#FF6321]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">The Venue</h4>
                  <p className="text-slate-600 leading-relaxed">
                    General Luna, Estaka, Dipolog City, Zamboanga del Norte. <br />
                    A premier facility hosting the first-ever robotics festival.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Save the Date</h4>
                  <p className="text-slate-600 leading-relaxed">
                    April 11, 2026. <br />
                    Doors open at 7:30 AM for registration and inspection.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Schedule</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Morning Sessions: 9:30 AM - 12:00 PM <br />
                    Afternoon Sessions: 1:00 PM - 4:00 PM <br />
                    Awarding Ceremony: 4:15 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is there a registration fee?",
      answer: "No, the Dipolog Robotics Festival is completely free of charge. Our goal is to make STEM accessible to all interested learners, especially students from public schools."
    },
    {
      question: "Who can participate in the competitions?",
      answer: "The event is open to students from Grade 1 to Grade 12, as well as an Open Category for older participants, teachers, mentors, and hobbyists. Check the specific game categories for grade requirements."
    },
    {
      question: "How many games can I join?",
      answer: "Participants can join all game clusters, but are limited to 1 game per cluster, or 2 games in selected clusters. Make sure to check the schedule to avoid conflicts."
    },
    {
      question: "What should participants bring?",
      answer: "Participants must bring their fully assembled robot, measuring tools (ruler/tape measure), a stopwatch/timer, and any tools for minor adjustments. If your game requires it, bring ping-pong balls, extra batteries, and your remote controller."
    },
    {
      question: "Where is the venue located?",
      answer: "The event will be held at the Zamboanga del Norte Cultural and Sports Center, located at General Luna, Estaka, Dipolog City."
    },
    {
      question: "What time should I arrive?",
      answer: "Doors open at 7:30 AM for registration and robot inspection. We recommend arriving early to ensure your robot passes inspection before the opening remarks at 8:20 AM."
    },
    {
      question: "How can I get more information?",
      answer: "Send us a message on our Facebook page (facebook.com/makerverse.ph) or email us at contact@simriventures.com. We're happy to answer any questions about the event, registration, or competitions."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#FF6321] uppercase tracking-[0.2em] mb-4">Got Questions?</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Frequently Asked Questions</h3>
          <p className="text-slate-600">Everything you need to know about the 1st Dipolog Robotics Festival.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-[#FF6321] shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180 text-[#FF6321]' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <MakerverseLogo className="w-12 h-12" />
              <span className="font-bold text-2xl tracking-tight">MAKERVERSE</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Building a movement that empowers the countryside and creates confident makers out of curious kids.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/makerverse.ph" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6321] transition-all border border-white/10">
                <Facebook size={18} fill="currentColor" />
              </a>
              <a href="https://www.instagram.com/makerverse.ph" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6321] transition-all border border-white/10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Quick Links</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#competitions" className="hover:text-white transition-colors">Competitions</a></li>
              <li><a href="#venue" className="hover:text-white transition-colors">Venue Details</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Game Rules</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Contact Us</h5>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Dipolog City, Zamboanga del Norte</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-orange-500 flex-shrink-0 mt-0.5"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href="mailto:contact@simriventures.com" className="hover:text-white transition-colors">contact@simriventures.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={18} className="text-orange-500" />
                <a href="https://www.facebook.com/makerverse.ph" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">facebook.com/makerverse.ph</a>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-6">For inquiries, sponsorships, and volunteering — reach out anytime!</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Makerverse. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Promotional = () => {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://makerverse.com';
  const shareText = "Join me at the 1st Dipolog Robotics Festival - Empowering the countryside youth through STEM!";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank', 'width=600,height=400');
  };

  const shareLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
  };

  return (
    <section id="share" className="py-24 bg-[#FF6321] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-[10rem] font-black select-none">DIPOLOG</div>
        <div className="absolute bottom-10 right-10 text-[10rem] font-black select-none">ROBOTICS</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
              A FIRST <br />FOR DIPOLOG
            </h2>
            <p className="text-xl md:text-2xl font-medium text-orange-100 mb-10 max-w-lg leading-relaxed">
              History is being made. For the first time, the youth of Zamboanga del Norte will have a dedicated stage to showcase their engineering prowess and innovative spirit.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl">
                <p className="text-3xl font-bold mb-1">01</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">Historical Event</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl">
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">Free Access</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl">
                <p className="text-3xl font-bold mb-1">STEM</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">Focused Advocacy</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-slate-900 p-10 rounded-[3rem] shadow-3xl"
          >
            <h4 className="text-2xl font-black mb-6">Spread the Word</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Help us build this movement. Share this event with students, teachers, and parents in your community. Let's make tech accessible to every curious kid in the countryside.
            </p>
            <div className="space-y-4">
              <button onClick={shareFacebook} className="w-full bg-[#1877F2] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#1864D9] transition-all">
                <Facebook fill="currentColor" size={20} />
                Share on Facebook
              </button>
              <button onClick={shareTwitter} className="w-full bg-[#1DA1F2] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#1A91DA] transition-all">
                <Twitter fill="currentColor" size={20} className="text-white" />
                Share on Twitter
              </button>
              <button onClick={shareLinkedin} className="w-full bg-[#0A66C2] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#0958A8] transition-all">
                <Linkedin fill="currentColor" size={20} />
                Share on LinkedIn
              </button>
              <button onClick={handleCopy} className="w-full bg-slate-100 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition-all border border-slate-200">
                {copied ? <Check size={20} className="text-green-600" /> : <Link size={20} />}
                {copied ? 'Link Copied!' : 'Copy Event Link'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-500/30 selection:text-orange-900">
      <Nav />
      <main>
        <Hero />
        <About />
        <Vision />
        <Promotional />
        <Competitions />
        <FestivalExperience />
        <Venue />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
