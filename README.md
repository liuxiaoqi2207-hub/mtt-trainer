# MTT Trainer V1

亚洲线上系列赛导向的 MTT 决策训练器原型。

## 已实现
- Spot Quiz（翻前 / ICM）
- 模块切换
- 即时反馈
- 错题本
- 只刷错题模式
- 规则卡片
- 本地统计（localStorage）

## 当前模块
- 20bb Open
- 15bb Reshove
- BB Defend
- 10bb Jam
- Bubble ICM
- Final Table
- Asia Series Mode（亚洲线上系列赛模式）

## 用法
直接浏览器打开 `index.html` 即可。

如果想本地起个静态服务：

```bash
cd mtt-trainer
python3 -m http.server 8000
```

然后访问：
`http://localhost:8000`

## 下一步建议
- 扩充题库到 200+ 题
- 增加题库 JSON 独立文件
- 增加“只刷错题”模式
- 增加“每日训练计划”
- 增加“亚洲线上系列赛模式”
