import type { Question } from "@/types/assessment";

export const questions: Question[] = [
 {id:1,eyebrow:"消息 · 等待",question:"TA 已经五个小时没回你消息，但朋友圈刚刚更新了。",answers:[
  {text:"可能有自己的节奏，等方便时再聊。",effects:{attachmentAnxiety:0,rejectionSensitivity:0,selfPreservation:3}},
  {text:"有点在意，但先继续做手头的事。",effects:{attachmentAnxiety:1,rejectionSensitivity:1,selfPreservation:2}},
  {text:"反复打开聊天框，猜测那条动态是什么意思。",effects:{attachmentAnxiety:3,rejectionSensitivity:3,emotionalDependence:2}},
  {text:"开始回想自己是不是说错了什么。",effects:{attachmentAnxiety:4,rejectionSensitivity:4,fearOfLoss:2}}]},
 {id:2,eyebrow:"时间 · 选择",question:"你本来和朋友约好周末出门，TA 临时说：“我有点想你。”",answers:[
  {text:"先看双方时间，找到不让谁被放鸽子的方案。",effects:{selfBoundary:3,selfPreservation:3,overInvestment:1}},
  {text:"按原计划见朋友，和 TA 约下次。",effects:{selfBoundary:4,selfPreservation:4,overInvestment:0}},
  {text:"大概率取消朋友的局，TA 比较重要。",effects:{overInvestment:3,selfPreservation:1,selfBoundary:1}},
  {text:"已经在换衣服了，其他安排以后再说。",effects:{overInvestment:4,selfPreservation:0,selfBoundary:0}}]},
 {id:3,eyebrow:"语气 · 信号",question:"TA 今天只回了一个“嗯”，和平时不太一样。",answers:[
  {text:"先问一句今天是不是累了，不预设结论。",effects:{rejectionSensitivity:1,attachmentAnxiety:1,selfBoundary:3}},
  {text:"会留意，但一条消息还说明不了什么。",effects:{rejectionSensitivity:0,selfPreservation:3}},
  {text:"把前面的对话重新读一遍，寻找转折点。",effects:{rejectionSensitivity:4,attachmentAnxiety:2}},
  {text:"心情立刻沉下去，担心 TA 已经变了。",effects:{emotionalDependence:4,fearOfLoss:3,rejectionSensitivity:3}}]},
 {id:4,eyebrow:"礼物 · 投入",question:"纪念日前一周，你发现自己准备的礼物远超原本预算。",answers:[
  {text:"既然很难得，贵一点也值得。",effects:{overInvestment:4,romanticIdealization:2,selfBoundary:1}},
  {text:"调整方案，心意不需要靠价格证明。",effects:{overInvestment:0,selfBoundary:4}},
  {text:"会纠结，但还是希望 TA 收到时足够惊喜。",effects:{overInvestment:2,romanticIdealization:2}},
  {text:"再加一份，重要的日子就该做到极致。",effects:{overInvestment:4,romanticIdealization:3,selfPreservation:1}}]},
 {id:5,eyebrow:"争执 · 恢复",question:"一次争执后，TA 说想先冷静一晚。",answers:[
  {text:"尊重暂停，照常吃饭睡觉，明天再谈。",effects:{emotionalDependence:0,attachmentAnxiety:0,selfBoundary:4}},
  {text:"会不舒服，但能把注意力拉回自己。",effects:{emotionalDependence:1,selfPreservation:3}},
  {text:"这一晚什么都做不进去，只想等消息。",effects:{emotionalDependence:4,attachmentAnxiety:3}},
  {text:"不断发消息解释，希望现在就和好。",effects:{attachmentAnxiety:4,fearOfLoss:3,selfBoundary:0}}]},
 {id:6,eyebrow:"未来 · 想象",question:"刚认识不久，你们已经非常聊得来。你更接近哪种状态？",answers:[
  {text:"已经在想以后住在哪里、一起养什么宠物。",effects:{romanticIdealization:4,overInvestment:2}},
  {text:"享受心动，也继续观察彼此是否真的合适。",effects:{romanticIdealization:1,selfBoundary:3,selfPreservation:3}},
  {text:"会畅想一些画面，但知道它们只是想象。",effects:{romanticIdealization:2,selfPreservation:2}},
  {text:"觉得这么合拍一定是命中注定。",effects:{romanticIdealization:4,fearOfLoss:2}}]},
 {id:7,eyebrow:"边界 · 拒绝",question:"TA 想看你的聊天记录，说“情侣不该有秘密”。",answers:[
  {text:"虽然不舒服，还是会交出手机证明自己。",effects:{selfBoundary:0,fearOfLoss:3}},
  {text:"只给 TA 看可能引起误会的那一段。",effects:{selfBoundary:1,attachmentAnxiety:2}},
  {text:"说明信任不等于无限开放隐私，并拒绝。",effects:{selfBoundary:4,selfPreservation:4}},
  {text:"先理解 TA 为什么不安，再一起约定边界。",effects:{selfBoundary:4,rejectionSensitivity:1}}]},
 {id:8,eyebrow:"社交 · 比较",question:"聚会时，TA 和一个很有魅力的人聊得很投入。",answers:[
  {text:"加入聊天，正常认识新朋友。",effects:{fearOfLoss:0,attachmentAnxiety:0,selfPreservation:3}},
  {text:"会有一点醋意，之后坦然说出来。",effects:{fearOfLoss:1,selfBoundary:3}},
  {text:"整晚观察他们的眼神和距离。",effects:{rejectionSensitivity:4,fearOfLoss:3}},
  {text:"开始觉得自己可能随时会被替代。",effects:{fearOfLoss:4,attachmentAnxiety:4,emotionalDependence:2}}]},
 {id:9,eyebrow:"生活 · 重心",question:"恋爱进入热恋期后，你原本坚持的兴趣课撞上了约会时间。",answers:[
  {text:"先暂停兴趣课，热恋期当然应该多见面。",effects:{selfPreservation:0,overInvestment:3}},
  {text:"偶尔调一次，但不会长期放弃。",effects:{selfPreservation:3,selfBoundary:3}},
  {text:"保留课程，约会安排在别的时间。",effects:{selfPreservation:4,selfBoundary:4}},
  {text:"看 TA 的反应，如果失望我就不去了。",effects:{selfPreservation:1,emotionalDependence:3,fearOfLoss:2}}]},
 {id:10,eyebrow:"缺点 · 滤镜",question:"朋友提醒你，TA 常常失约，而且从不提前说明。",answers:[
  {text:"TA 最近压力大，真正相爱就该多包容。",effects:{romanticIdealization:4,selfBoundary:1}},
  {text:"朋友不了解我们，不想听外人的判断。",effects:{romanticIdealization:3,rejectionSensitivity:2}},
  {text:"区分偶发和习惯，直接和 TA 谈具体影响。",effects:{romanticIdealization:1,selfBoundary:4}},
  {text:"把提醒记下来，观察 TA 是否愿意改变。",effects:{romanticIdealization:0,selfPreservation:4}}]},
 {id:11,eyebrow:"确认 · 安全感",question:"关系很稳定的一段时间里，你还会想确认“你爱我吗”？",answers:[
  {text:"经常需要，听到才会安心。",effects:{attachmentAnxiety:4,emotionalDependence:3}},
  {text:"偶尔会问，把它当作亲密表达。",effects:{attachmentAnxiety:2}},
  {text:"更看重持续的行动，不太需要反复确认。",effects:{attachmentAnxiety:0,selfBoundary:3}},
  {text:"不刻意问，但需要时会直接说自己想被安慰。",effects:{attachmentAnxiety:1,selfBoundary:4}}]},
 {id:12,eyebrow:"计划 · 协调",question:"TA 获得外地机会，希望你也立刻换城市。",answers:[
  {text:"先梳理双方成本、期限和各自目标再决定。",effects:{selfBoundary:4,selfPreservation:4,overInvestment:1}},
  {text:"只要能在一起，工作和城市都可以放弃。",effects:{overInvestment:4,selfPreservation:0,fearOfLoss:3}},
  {text:"会认真考虑，但不会在信息不全时承诺。",effects:{selfBoundary:3,selfPreservation:3}},
  {text:"怕拒绝会影响感情，所以先答应再说。",effects:{selfBoundary:0,fearOfLoss:4,overInvestment:3}}]},
 {id:13,eyebrow:"已读 · 解读",question:"TA 看了你的长消息，过了很久只回复：“知道了。”",answers:[
  {text:"先问 TA 是否方便继续聊，避免隔空猜测。",effects:{rejectionSensitivity:1,selfBoundary:3}},
  {text:"觉得语气有问题，整晚都在分析这三个字。",effects:{rejectionSensitivity:4,emotionalDependence:4}},
  {text:"暂时搁置，等线下沟通时再确认。",effects:{rejectionSensitivity:0,selfPreservation:3}},
  {text:"马上补很多解释，生怕 TA 误会或离开。",effects:{attachmentAnxiety:4,fearOfLoss:3}}]},
 {id:14,eyebrow:"付出 · 平衡",question:"最近三次见面都是你规划、订位和收拾残局。",answers:[
  {text:"只要 TA 开心，多做一点没关系。",effects:{overInvestment:4,selfBoundary:1}},
  {text:"继续安排，毕竟我更擅长这些。",effects:{overInvestment:3,selfPreservation:2}},
  {text:"说出自己的疲惫，邀请 TA 负责下一次。",effects:{selfBoundary:4,overInvestment:1}},
  {text:"先停下来，看这段关系是否有双向投入。",effects:{selfBoundary:4,selfPreservation:4,overInvestment:0}}]},
 {id:15,eyebrow:"分歧 · 现实",question:"你们很相爱，但对婚育、金钱和生活方式的期待明显不同。",answers:[
  {text:"只要爱得够深，这些问题都会自然解决。",effects:{romanticIdealization:4,fearOfLoss:2}},
  {text:"先不想那么远，至少现在很快乐。",effects:{romanticIdealization:3,selfPreservation:1}},
  {text:"把分歧具体谈清，判断彼此能否承担结果。",effects:{romanticIdealization:0,selfBoundary:4}},
  {text:"承认爱与合适是两件事，必要时也能离开。",effects:{romanticIdealization:0,fearOfLoss:0,selfPreservation:4}}]},
 {id:16,eyebrow:"低谷 · 情绪",question:"你今天过得很糟，TA 也正忙得无法陪你。",answers:[
  {text:"感觉更委屈，甚至怀疑自己对 TA 是否重要。",effects:{emotionalDependence:4,attachmentAnxiety:3}},
  {text:"会失落，但先找朋友、运动或休息缓冲。",effects:{emotionalDependence:1,selfPreservation:4}},
  {text:"等 TA 忙完再讲，也照顾好眼前的自己。",effects:{emotionalDependence:0,selfBoundary:3}},
  {text:"不断发消息，希望 TA 至少马上安慰几句。",effects:{emotionalDependence:4,overInvestment:2,attachmentAnxiety:2}}]},
 {id:17,eyebrow:"冷淡 · 预警",question:"TA 最近回复速度慢了一些，但见面时仍然亲密。",answers:[
  {text:"相信完整的相处信息，不用一个指标下结论。",effects:{rejectionSensitivity:0,attachmentAnxiety:0}},
  {text:"留意变化，找合适时机问近况。",effects:{rejectionSensitivity:1,selfBoundary:3}},
  {text:"开始测试 TA：故意晚回，看对方反应。",effects:{rejectionSensitivity:3,fearOfLoss:3}},
  {text:"默认感情在降温，提前陷入分手预演。",effects:{fearOfLoss:4,attachmentAnxiety:4,rejectionSensitivity:4}}]},
 {id:18,eyebrow:"消费 · 原则",question:"TA 希望你一起买一件超出承受范围的情侣单品。",answers:[
  {text:"坦白预算，提议一个双方都舒服的替代方案。",effects:{selfBoundary:4,selfPreservation:4}},
  {text:"咬咬牙买，免得 TA 扫兴。",effects:{selfBoundary:0,overInvestment:4,fearOfLoss:2}},
  {text:"先分期买下来，以后再省。",effects:{overInvestment:4,selfPreservation:1}},
  {text:"认真考虑后决定是否值得，不用情侣物品证明爱。",effects:{selfBoundary:4,romanticIdealization:0}}]},
 {id:19,eyebrow:"独处 · 空白",question:"TA 出差一周，联系也会比平时少。",answers:[
  {text:"安排自己的生活，也期待下次见面。",effects:{selfPreservation:4,emotionalDependence:0}},
  {text:"前两天不习惯，之后能找到自己的节奏。",effects:{selfPreservation:3,emotionalDependence:1}},
  {text:"每天都很空，做什么都提不起劲。",effects:{emotionalDependence:4,selfPreservation:0}},
  {text:"需要固定报备，否则会一直担心。",effects:{attachmentAnxiety:4,fearOfLoss:3}}]},
 {id:20,eyebrow:"承诺 · 速度",question:"认识两周，TA 说：“我觉得我们会一直在一起。”",answers:[
  {text:"被打动，觉得这就是难得的灵魂契合。",effects:{romanticIdealization:4,overInvestment:3}},
  {text:"享受这句话，但让时间验证彼此。",effects:{romanticIdealization:1,selfPreservation:3}},
  {text:"会心动，也会留意承诺和行动是否一致。",effects:{romanticIdealization:2,selfBoundary:3}},
  {text:"马上把未来的重要计划都考虑进 TA。",effects:{overInvestment:4,selfPreservation:0,romanticIdealization:4}}]},
 {id:21,eyebrow:"冲突 · 底线",question:"争吵时，TA 用了让你很受伤的表达，之后像没发生一样。",answers:[
  {text:"怕把事情闹大，自己消化就好。",effects:{selfBoundary:0,fearOfLoss:3}},
  {text:"先恢复情绪，再清楚说明哪些表达不能接受。",effects:{selfBoundary:4,selfPreservation:4}},
  {text:"只要 TA 还愿意靠近，我就不追究了。",effects:{selfBoundary:1,emotionalDependence:3}},
  {text:"讨论修复方式，也观察类似情况是否重复。",effects:{selfBoundary:4,romanticIdealization:0}}]},
 {id:22,eyebrow:"注意力 · 日常",question:"工作学习正需要专注时，TA 连续发来许多日常消息。",answers:[
  {text:"每条都立即回，不能让 TA 感到被忽略。",effects:{overInvestment:4,attachmentAnxiety:2,selfPreservation:0}},
  {text:"说一声自己在忙，结束后集中回复。",effects:{selfBoundary:4,selfPreservation:4}},
  {text:"边做事边回，虽然效率会低一点。",effects:{overInvestment:2,selfPreservation:2}},
  {text:"先静音，忙完自然再联系。",effects:{selfBoundary:3,selfPreservation:4}}]},
 {id:23,eyebrow:"不安 · 求证",question:"你梦见 TA 喜欢上别人，醒来后仍然很真实。",answers:[
  {text:"知道梦是梦，过一会儿就放下。",effects:{fearOfLoss:0,attachmentAnxiety:0}},
  {text:"会撒娇说起，但不把它当证据。",effects:{fearOfLoss:1,attachmentAnxiety:1}},
  {text:"旁敲侧击地问 TA 最近有没有新朋友。",effects:{fearOfLoss:3,rejectionSensitivity:3}},
  {text:"一整天都不安，需要 TA 反复保证。",effects:{fearOfLoss:4,attachmentAnxiety:4,emotionalDependence:3}}]},
 {id:24,eyebrow:"关系 · 自我",question:"如果用一句话描述理想的亲密关系，你更认同：",answers:[
  {text:"两个人互相靠近，也各自拥有完整的世界。",effects:{selfBoundary:4,selfPreservation:4,romanticIdealization:0}},
  {text:"我愿意倾尽所有，只要对方也同样爱我。",effects:{overInvestment:4,fearOfLoss:3,selfPreservation:0}},
  {text:"相爱的人就该尽可能成为彼此的全部。",effects:{emotionalDependence:4,romanticIdealization:4,selfBoundary:0}},
  {text:"亲密与独立可以协商，不必只有一种标准答案。",effects:{selfBoundary:3,selfPreservation:3,rejectionSensitivity:0}}]}
];
