"use client";
/* eslint-disable @next/next/no-html-link-for-pages */
import {useEffect,useState} from "react";
import type {AssessmentResult,DimensionKey} from "@/types/assessment";
import {dimensionKeys} from "@/types/assessment";
import {dimensionMeta,band} from "@/data/results";
import {loadResult,clearAll} from "@/lib/storage";
import {LoveBrainGauge} from "@/components/results/LoveBrainGauge";
import {RadarProfile} from "@/components/results/RadarProfile";
import {DimensionBars} from "@/components/results/DimensionBars";
import {RiskMatrix} from "@/components/results/RiskMatrix";
import {DerivedMetrics} from "@/components/results/DerivedMetrics";
import {EnergyDonut} from "@/components/results/EnergyDonut";
import {RiskFactors} from "@/components/results/RiskFactors";
import {InsightReport} from "@/components/results/InsightReport";
import {ShareCard} from "@/components/results/ShareCard";

function SectionHead({no,en,title,copy}:{no:string;en:string;title:string;copy?:string}){return <header className="section-head"><span>{no} / {en}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</header>}
/* Client hydration reads the device-local report after mount. */
/* eslint-disable react-hooks/set-state-in-effect */
export default function ResultPage(){const[result,setResult]=useState<AssessmentResult|null|undefined>(undefined),[share,setShare]=useState(false);useEffect(()=>setResult(loadResult()),[]);
 if(result===undefined)return <main className="loading-page">正在打开你的恋爱心理画像…</main>;
 if(!result)return <main className="empty-result"><span>LOVE BRAIN INDEX</span><h1>还没有你的<br/>恋爱画像。</h1><p>完成 24 道恋爱情境题后，这里会生成你的完整关系报告。</p><a className="primary-button" href="/test?restart=1">开始测试 <b>→</b></a></main>;
 const riskRank=(k:DimensionKey)=>dimensionMeta[k].positive?100-result.scores[k]:result.scores[k];const high=[...dimensionKeys].sort((a,b)=>riskRank(b)-riskRank(a))[0];const stable=[...dimensionKeys].sort((a,b)=>riskRank(a)-riskRank(b))[0];
 return <main className="report-page"><nav className="report-nav"><a href="/" className="brand">LOVE BRAIN INDEX</a><span>YOUR REPORT · {new Date(result.completedAt).toLocaleDateString("zh-CN")}</span></nav>
  <section className="report-hero"><div className="report-title"><span>RELATIONSHIP PROFILE / 01</span><h1>恋爱心理<br/>画像报告</h1><div className="keywords">{result.insights.keywords.map(x=><i key={x}>{x}</i>)}</div></div><LoveBrainGauge score={result.loveBrainIndex}/><div className="score-copy"><span>{band(result.loveBrainIndex)} · LOVE BRAIN INDEX</span><h2>{result.level.name}</h2><blockquote>“{result.level.quote}”</blockquote><p>{result.level.description}</p></div></section>
  <section className="report-section personality"><SectionHead no="02" en="RELATIONSHIP PERSONALITY" title="你的恋爱人格"/><div className="personality-card"><span>{result.profile.english}</span><h2>{result.profile.name}</h2><blockquote>“{result.profile.tagline}”</blockquote><p>{result.profile.description}</p><div><section><b>关系优势</b>{result.profile.strengths.map(x=><i key={x}>{x}</i>)}</section><section><b>潜在风险</b>{result.profile.risks.map(x=><i key={x}>{x}</i>)}</section></div></div></section>
  <section className="report-section"><SectionHead no="03" en="EIGHT-DIMENSION MAP" title="你的恋爱心理八维图谱" copy="同样的综合分，也可能拥有完全不同的内部结构。"/><div className="radar-layout"><RadarProfile scores={result.scores}/><div className="feature-scores"><article><span>最高关注项</span><h3>{dimensionMeta[high].name}<b>{result.scores[high]}</b></h3><p>{result.scores[high]>=55?dimensionMeta[high].high:dimensionMeta[high].low}</p></article><article><span>最稳定项</span><h3>{dimensionMeta[stable].name}<b>{result.scores[stable]}</b></h3><p>{dimensionMeta[stable].positive?dimensionMeta[stable].high:dimensionMeta[stable].low}</p></article></div></div></section>
  <section className="report-section"><SectionHead no="04" en="DIMENSION BREAKDOWN" title="核心维度解析" copy="点击任意维度，看看这个数字在你的关系里意味着什么。"/><DimensionBars scores={result.scores}/></section>
  <section className="report-section"><SectionHead no="05" en="RELATIONSHIP MATRIX" title="关系风险矩阵" copy="投入不是风险，失去自我才是。坐标由你的投入与独立维度共同决定。"/><RiskMatrix scores={result.scores}/></section>
  <section className="report-section"><SectionHead no="06" en="HIDDEN INDEX" title="三个隐藏指数"/><DerivedMetrics metrics={result.derived}/></section>
  <section className="report-section"><SectionHead no="07" en="LOVE ENERGY" title="你的恋爱能量去了哪里？"/><EnergyDonut data={result.energy}/><p className="chart-note">根据本次答题倾向估算的关系注意力分布，并非实际时间统计。</p></section>
  <section className="report-section"><SectionHead no="08" en="RISK & PROTECTION" title="风险因素与保护因素"/><RiskFactors insights={result.insights}/></section>
  <section className="report-section"><SectionHead no="09" en="DEEP ANALYSIS" title="你的深度关系分析"/><InsightReport report={result.insights}/></section>
  <section className="report-section advice-card"><span>10 / A NOTE FOR YOU</span><h2>爱不是把自己交出去，<br/>而是带着完整的自己靠近。</h2><p>{result.profile.advice}</p></section>
  <section className="report-section methodology"><details><summary><span>这份报告怎么算出来的？</span><b>+</b></summary><div><p>我们根据 24 个恋爱情境，看你会不会怕被冷落、情绪容易受 TA 影响、能不能拒绝不舒服的事、是否付出过多、容易多想、怕失去、给爱情加滤镜，以及谈恋爱后还能不能保留自己的生活。</p><p>一道题可能同时影响两三个方向，有些选项顺序也会故意打乱。所有分数都会换算成 0–100，再生成综合指数、恋爱类型和隐藏指标。</p><p>本结果只用于娱乐和了解自己，不是心理诊断。人会随着经历和关系变化，这次结果也不是给你贴一辈子的标签。</p></div></details></section>
  <section className="share-cta"><span>11 / SHARE YOUR PROFILE</span><h2>有些结果，<br/>适合发给懂你的人。</h2><button className="primary-button" onClick={()=>setShare(true)}>生成分享卡 <b>→</b></button><a className="restart-button" href="/test?restart=1" onClick={()=>clearAll()}>重新测试</a></section>
  <footer><span>LOVE BRAIN INDEX</span><p>本测试仅供娱乐及自我探索，不构成心理诊断、医疗建议或专业心理咨询。</p></footer>
  {share&&<div className="modal" role="dialog" aria-modal="true" aria-label="分享结果卡"><button className="modal-close" onClick={()=>setShare(false)} aria-label="关闭">×</button><div className="modal-inner"><ShareCard result={result}/><p>截图保存这张卡片，分享你的 LOVE BRAIN INDEX。</p></div></div>}
 </main>}
