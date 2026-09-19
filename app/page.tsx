"use client";

import { useEffect, useState } from "react";
import { loadProgress } from "@/lib/storage";
import { sitePath } from "@/lib/basePath";

export default function Home() {
  const [resume, setResume] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setResume(!!loadProgress()));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="site-shell home-page">
      <nav className="nav">
        <span className="brand">LOVE BRAIN INDEX</span>
        <span className="nav-note">RELATIONSHIP PROFILE / 2026</span>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">A SELF-EXPLORATION TEST</p>
          <h1><span>恋爱脑</span><br />浓度测试</h1>
          <p className="hero-lead">24 个恋爱情境，<br />看看爱情到底占用了你多少 CPU。</p>
          <p className="hero-aside">有的人谈恋爱，<br className="desktop-only" />有的人把恋爱当全职工作。</p>
          <div className="hero-actions">
            <a className="primary-button" href={resume ? `${sitePath("/test")}?resume=1` : sitePath("/test")}>
              {resume ? "继续上次测试" : "开始测试"}<span>→</span>
            </a>
            {resume && <a className="text-button" href={`${sitePath("/test")}?restart=1`}>重新开始</a>}
          </div>
        </div>

        <div className="index-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-center"><span>LOVE BRAIN</span><strong>0—100</strong><small>MEASURE YOUR<br />RELATIONSHIP MODE</small></div>
          <span className="art-mark mark-a">01</span><span className="art-mark mark-b">24</span>
        </div>
      </section>

      <section className="facts" aria-label="测试信息">
        <div><b>24</b><span>道情境题</span></div><div><b>3–5</b><span>分钟</span></div>
        <div><b>100%</b><span>匿名</span></div><div><b>NOW</b><span>即时报告</span></div>
      </section>
      <section className="intro">
        <p className="section-no">01 / ABOUT</p>
        <h2>不是给爱情打分，<br />是看清你在关系里的运行方式。</h2>
        <p>从依恋、情绪、边界、投入与安全感等八个方向，生成一份属于你的恋爱心理画像。</p>
      </section>
      <footer><span>LOVE BRAIN INDEX</span><p>本测试仅供娱乐及自我探索，不构成心理诊断、医疗建议或专业心理咨询。</p></footer>
    </main>
  );
}
