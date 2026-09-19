"use client";
import { useEffect,useState } from "react";
import { questions } from "@/data/questions";
import { clearProgress,loadProgress,saveProgress,saveResult } from "@/lib/storage";
import { createResult } from "@/lib/assessment";
import type { Answers } from "@/types/assessment";
import {sitePath} from "@/lib/basePath";
/* Client hydration restores device-local progress after mount. */
/* eslint-disable react-hooks/set-state-in-effect, @next/next/no-html-link-for-pages */

export default function TestPage(){const[index,setIndex]=useState(0),[answers,setAnswers]=useState<Answers>({}),[selected,setSelected]=useState<number|null>(null),[analyzing,setAnalyzing]=useState(false),[analysisStep,setAnalysisStep]=useState(0);
 useEffect(()=>{const params=new URLSearchParams(window.location.search);if(params.get("restart")==="1"){clearProgress();return}const p=loadProgress();if(p&&params.get("resume")==="1"){setIndex(Math.min(p.index,23));setAnswers(p.answers)}},[]);
 const choose=(choice:number)=>{if(selected!==null)return;setSelected(choice);const next={...answers,[questions[index].id]:choice};setAnswers(next);saveProgress(index,next);setTimeout(()=>{if(index===questions.length-1){setAnalyzing(true);const result=createResult(next);saveResult(result);clearProgress();const ticker=setInterval(()=>setAnalysisStep(v=>Math.min(3,v+1)),360);setTimeout(()=>{clearInterval(ticker);window.location.assign(sitePath("/result"))},1450)}else{setIndex(v=>v+1);saveProgress(index+1,next);setSelected(null)}},210)};
 if(analyzing){const copy=["正在分析依恋模式…","正在计算关系边界…","正在生成恋爱心理画像…","你的报告已生成"];return <main className="analysis-screen"><div className="analysis-orbit"><i/><span>{Math.round((analysisStep+1)/4*100)}</span></div><p>LOVE BRAIN INDEX</p><h1>{copy[analysisStep]}</h1><div className="analysis-line"><i style={{width:`${(analysisStep+1)*25}%`}}/></div></main>}
 const q=questions[index];return <main className="test-page"><header className="test-header"><a href="/" className="brand">LOVE BRAIN INDEX</a><span>{String(index+1).padStart(2,"0")} <i/> {questions.length}</span></header><div className="progress-track"><i style={{width:`${((index+1)/questions.length)*100}%`}}/></div>
 <section className="question-wrap"><div className="question-meta"><span>{q.eyebrow}</span><b>{String(index+1).padStart(2,"0")}</b></div><h1>{q.question}</h1><div className="answers" role="radiogroup" aria-label={`第 ${index+1} 题`}>{q.answers.map((a,i)=><button key={a.text} className={selected===i?"selected":""} onClick={()=>choose(i)} aria-checked={selected===i} role="radio"><span>{String.fromCharCode(65+i)}</span><p>{a.text}</p><i>{selected===i?"✓":"↗"}</i></button>)}</div>{index>0&&<button className="back-button" onClick={()=>{setIndex(v=>v-1);setSelected(null)}}>← 上一题</button>}</section></main>}
