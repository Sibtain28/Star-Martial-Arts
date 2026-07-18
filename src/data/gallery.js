import { Dumbbell, Trophy, HeartPulse, Baby, PartyPopper } from "lucide-react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";

export const CATEGORIES = [
  { slug: "training", label: "Training", icon: Dumbbell },
  { slug: "competitions", label: "Competitions", icon: Trophy },
  { slug: "fitness", label: "Fitness", icon: HeartPulse },
  { slug: "kids", label: "Kids", icon: Baby },
  { slug: "events", label: "Events", icon: PartyPopper },
];

export const GALLERY_ITEMS = [
  { id: "g01", category: "training", title: "Evening Karate Class", span: "aspect-[3/4]", src: img1 },
  { id: "g02", category: "competitions", title: "State Championship Finals", span: "aspect-square", src: img2 },
  { id: "g03", category: "fitness", title: "Strength & Conditioning Circuit", span: "aspect-[4/5]", src: img3 },
  { id: "g04", category: "kids", title: "Kids Belt Grading Day", span: "aspect-video", src: img4 },
  { id: "g05", category: "training", title: "BJJ Sparring Session", span: "aspect-square", src: img5 },
  { id: "g06", category: "events", title: "Club Anniversary Gathering", span: "aspect-[4/5]", src: img6 },
  { id: "g07", category: "training", title: "Muay Thai Pad Work", span: "aspect-video", src: img7 },
  { id: "g08", category: "competitions", title: "National BJJ Open", span: "aspect-[3/4]", src: img8 },
  { id: "g09", category: "fitness", title: "Morning Conditioning Group", span: "aspect-square", src: img9 },
  { id: "g10", category: "kids", title: "Junior Karate Demo", span: "aspect-[4/5]", src: img10 },
  { id: "g11", category: "events", title: "Open Mat Community Day", span: "aspect-square", src: img11 },
  { id: "g12", category: "training", title: "MMA Technical Drilling", span: "aspect-[4/5]", src: img12 },
  { id: "g13", category: "competitions", title: "Boxing Inter-Club Meet", span: "aspect-video", src: img13 },
  { id: "g14", category: "kids", title: "Kids Self-Defense Workshop", span: "aspect-square", src: img14 },
  { id: "g15", category: "fitness", title: "Weekend Fitness Bootcamp", span: "aspect-[3/4]", src: img15 },
  { id: "g16", category: "events", title: "Founder's Day Celebration", span: "aspect-[4/5]", src: img16 },
];
