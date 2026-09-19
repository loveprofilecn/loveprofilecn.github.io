import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://love-brain-index-cn.cccyclicalist.chatgpt.site"),
  title: "恋爱脑浓度测试｜测测你的 Love Brain Index",
  description: "24 道恋爱情境题，从怕被冷落、情绪受影响、容易妥协、付出过多等方向生成你的恋爱心理画像。",
  openGraph:{title:"恋爱脑浓度测试｜LOVE BRAIN INDEX",description:"24 个恋爱情境，看看爱情到底占用了你多少 CPU。",type:"website",locale:"zh_CN",images:[{url:"/og.png",width:1536,height:911,alt:"恋爱脑浓度测试 LOVE BRAIN INDEX"}]},
  twitter:{card:"summary_large_image",title:"恋爱脑浓度测试",description:"测测爱情到底占用了你多少 CPU。",images:["/og.png"]},
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
