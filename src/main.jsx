import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, DollarSign, FileText, Phone, ShieldCheck, TrendingUp } from 'lucide-react';
import './index.css';

function Button({ children, className = '', type = 'button', variant = 'solid' }) {
  const base = 'inline-flex items-center justify-center rounded-full font-bold transition focus:outline-none focus:ring-4 focus:ring-emerald-300/40';
  const styles = variant === 'outline'
    ? 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
    : 'bg-emerald-400 text-slate-950 hover:bg-emerald-300';
  return <button type={type} className={`${base} ${styles} ${className}`}>{children}</button>;
}

function Card({ children, className = '' }) {
  return <div className={`rounded-[2rem] border ${className}`}>{children}</div>;
}

function AdirFundingLandingPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', revenue: '', amount: '' });
  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Funding Request - Adir Funding');
    const body = encodeURIComponent(
      `Full Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCompany: ${form.company}\nMonthly Revenue: ${form.revenue}\nAmount Requested: ${form.amount}`
    );
    window.location.href = `mailto:submissions@adirfunding.com?subject=${subject}&body=${body}`;
  };

  const products = [
    { title: 'Business Capital', text: 'Fast working capital options designed around your revenue, cash flow, and timing.', icon: DollarSign },
    { title: 'Lines of Credit', text: 'Flexible access to capital for qualified businesses that want room to move.', icon: TrendingUp },
    { title: 'Consolidation Options', text: 'Review existing balances and see whether we can improve your payment structure.', icon: ShieldCheck },
  ];

  const steps = [
    { title: 'Apply', text: 'Submit basic business details and recent bank statements.', icon: FileText },
    { title: 'Get Reviewed', text: 'Our team reviews revenue, balances, positions, and funding goals.', icon: Clock },
    { title: 'Fund', text: 'Once approved and signed, funding can move quickly.', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 font-black text-slate-950 shadow-lg shadow-emerald-500/20">AF</div>
            <div>
              <div className="text-xl font-black tracking-tight">Adir Funding</div>
              <div className="text-xs uppercase tracking-[0.28em] text-emerald-300">Business Capital</div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex">
            <a href="#products" className="hover:text-emerald-300">Products</a>
            <a href="#process" className="hover:text-emerald-300">Process</a>
            <a href="#qualify" className="hover:text-emerald-300">Qualify</a>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
          </nav>
          <a href="#quote" className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300">Apply Now</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.24),transparent_35%),radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">Same-day review available</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">Your business. <span className="text-emerald-300">Our capital.</span> One clear path forward.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Adir Funding helps business owners access fast, flexible funding options without the bank runaround. Get a direct review, clear terms, and a funding advisor who knows how to close.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-base font-black text-slate-950 hover:bg-emerald-300">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></a>
              <a href="tel:0000000000" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10">Talk to an Advisor</a>
            </div>
          </motion.div>

          <Card className="border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur" id="quote">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">Get a free quote</h2>
              <p className="mt-2 text-sm text-slate-300">Submit your details and we’ll review your eligibility.</p>
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                {[
                  ['name', 'Full Name'], ['phone', 'Phone'], ['email', 'Email'], ['company', 'Company Name'], ['revenue', 'Monthly Revenue'], ['amount', 'Amount Requested'],
                ].map(([key, label]) => (
                  <input key={key} value={form[key]} onChange={(e) => update(key, e.target.value)} placeholder={label} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-emerald-300/40 placeholder:text-slate-500 focus:ring-4" />
                ))}
                <label className="flex gap-3 text-xs leading-5 text-slate-300"><input required type="checkbox" className="mt-1" />By submitting this form, I consent to receive calls, texts, and emails from Adir Funding regarding business funding options.</label>
                <Button type="submit" className="mt-2 py-4 text-base font-black">Let’s Start</Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 py-16">
        <div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">Product offerings</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Funding built around how your business actually runs.</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.map((item) => { const Icon = item.icon; return <Card key={item.title} className="border-white/10 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.09]"><div className="p-7"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950"><Icon /></div><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.text}</p><a href="#contact" className="mt-6 inline-flex items-center font-black text-emerald-300">Learn more <ArrowRight className="ml-2 h-4 w-4" /></a></div></Card>; })}
        </div>
      </section>

      <section id="process" className="bg-white text-slate-950"><div className="mx-auto max-w-7xl px-5 py-16"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-700">How it works</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Simple process. Serious execution.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{steps.map((step, idx) => { const Icon = step.icon; return <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"><div className="flex items-center justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300"><Icon /></div><span className="text-5xl font-black text-slate-200">0{idx + 1}</span></div><h3 className="mt-6 text-2xl font-black">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></div>; })}</div></div></section>

      <section id="qualify" className="mx-auto max-w-7xl px-5 py-16"><div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 md:grid-cols-[.9fr_1.1fr] md:p-12"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">Checklist</p><h2 className="mt-3 text-4xl font-black">See what your business may qualify for.</h2><p className="mt-4 leading-7 text-slate-300">Send recent bank statements and your desired funding amount. For consolidation, include balances or current contracts.</p></div><div className="grid gap-4 sm:grid-cols-3">{[['6+ Months','in business'], ['$10K+','monthly revenue'], ['No hard pull','for initial review']].map(([big, small]) => <div key={big} className="rounded-3xl bg-slate-950 p-6 text-center"><div className="text-3xl font-black text-emerald-300">{big}</div><div className="mt-2 text-sm uppercase tracking-widest text-slate-400">{small}</div></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 pb-16"><div className="grid gap-5 md:grid-cols-3">{[['Fast and straight to the point.','Adir Funding reviewed my file quickly and gave me clear options without the usual runaround.'], ['They knew how to structure it.','The team looked at my existing positions and helped me understand what made sense.'], ['Professional from start to funding.','Easy process, clear communication, and fast follow-up.']].map(([title, quote]) => <Card key={title} className="border-white/10 bg-white/[0.06] text-white"><div className="p-7"><div className="text-xl font-black">“{title}”</div><p className="mt-4 leading-7 text-slate-300">{quote}</p></div></Card>)}</div></section>

      <footer id="contact" className="border-t border-white/10 bg-slate-900"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2"><div><h2 className="text-4xl font-black">Funding that fits.</h2><p className="mt-4 max-w-xl leading-7 text-slate-300">Your dedicated advisor is here to make the process direct, transparent, and built around your business goals.</p></div><div className="flex flex-col justify-center gap-3 md:items-end"><div className="flex items-center gap-3 text-xl font-black"><Phone className="text-emerald-300" /> (000) 000-0000</div><div className="text-slate-300">submissions@adirfunding.com</div><div className="text-sm text-slate-500">© 2026 Adir Funding. All rights reserved.</div></div></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<AdirFundingLandingPage />);
