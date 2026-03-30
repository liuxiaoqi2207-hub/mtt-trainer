# 20bb RFI 公开资料校验版说明

状态：第一轮校验，仅用于把 `mtt-trainer` 从明显偏差修到“公开资料一致性更高”的版本。

## 目的
- 不使用 GTOWizard 私有/登录内容
- 先基于公开资料把 `20bb RFI` 中最关键的 `HJ / CO / BTN` 口径修正
- 后续再用用户自己的主表（GTOWizard）逐步二次校正

## 参考来源（公开）
1. RangeConverter — 8 max MTT 20bb Tournament Poker Charts
   - https://rangeconverter.com/articles/poker-charts-8max-mtt-20bb-no-limit-texas-holdem-tournaments
   - 说明：公开 20bb MTT 范围介绍，明确是 no-limp、solver simplification 思路
2. Red Chip Poker — Preflop Poker Charts
   - https://redchippoker.com/preflop-poker-charts/
   - 说明：强调 chart 应作为 baseline，学习应以复盘和吸收范围形状为主
3. 搜索交叉参考
   - PokerCoaching 公开 chart 入口
   - BBZ / Pokerati / RangeConverter 等公开 chart 描述页面

## 第一轮修正原则
- 优先修用户已经指出的明显错位：
  - `20bb HJ KTo` 不能继续当成 fold
  - `20bb HJ A7o` 不能继续当成 open
- 不追求与任何单一私有工具 100% 一致
- 优先保证：
  1. 位置宽度顺序正确
  2. 低 Axo 不被开得过松
  3. broadway / suited connector 的相对权重更合理
  4. BTN 不被简化成 any two suited 宽偷

## 本轮已改
- `viewerRanges['20bb'].HJ`
- `viewerRanges['20bb'].CO`
- `viewerRanges['20bb'].BTN`
- 新增训练题：
  - `20bb HJ KTo -> Raise`
  - `20bb HJ A7o -> Fold`

## 当前限制
- 这仍不是用户 GTOWizard 主表的 1:1 镜像
- 公开资料来源之间本身也会有参数差异（人数、ante、open size、simplification）
- 因此这个版本定义为：

# “公开资料校验版”

不是最终版。

## 下一步建议
1. 继续扩充 20bb RFI 题库，不只修 2-3 道边界题
2. 把 `UTG / LJ / SB` 一起纳入公开资料校验
3. 后续如用户愿意提供 GTOWizard 截图/口径，再做 `GTOWizard 校正版`
