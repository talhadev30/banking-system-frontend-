import React from 'react'
import {
  Zap,
  ShieldCheck,
  Wallet,
  ArrowRightLeft,
} from "lucide-react";

const Herocard = () => {

    
  const cards = [
  {
    title: "Instant transfers",
    desc: "Send money in a tap, 24/7.",
    icon: Zap,
  },
  {
    title: "Bank-grade security",
    desc: "Your funds and data are encrypted.",
    icon: ShieldCheck,
  },
  {
    title: "Zero fees",
    desc: "No hidden charges, ever.",
    icon: Wallet,
  },
  {
    title: "Live insights",
    desc: "See every transaction in real time.",
    icon: ArrowRightLeft,
  },
];
  return (
    <div className="mt-20 flex flex-wrap gap-4">
  {cards.map((card, index) => {
    const Icon = card.icon;

    return (
      <div
        key={index}
        className="basis-full md:basis-[48%] xl:flex-1 rounded-2xl bg-purple-200/10 backdrop-blur-3xl p-5"
      >
        <Icon size={28} color="#5518A0" />

        <div className="mt-2">
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-white/70">{card.desc}</p>
        </div>
      </div>
    );
  })}
</div>
  )
}

export default Herocard