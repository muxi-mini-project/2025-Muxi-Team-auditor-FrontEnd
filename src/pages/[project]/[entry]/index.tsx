import { TagCheckbox } from '@/components/TagCheckbox';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';

export default function EntryPage() {
  return (
    <div className="flex flex-col gap-8 h-full">
      {/* 标题区域 */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          为什么我的匣子老闪退？为什么我的匣子老闪退？为什么我的匣子老闪退？为什么我的匣子老闪退？
        </h1>
        <div className="flex gap-2 text-sm text-muted-foreground">
          <span>发布人：旅游的青蛙</span>
          <span>发布日期：2025.1.12</span>
        </div>
      </div>

      {/* 内容卡片 - 使用 flex-1 使其占满剩余空间 */}
      <Card className="flex-1">
        <CardContent className="pt-6">
          <div className="flex gap-6 h-full">
            <div className="flex-1">
              <div className="whitespace-pre-wrap">
                我的匣子老闪退，为什么？ 点进去一会儿就会卡死。
                生活如同一场没有脚本的即兴演出，而我就是那个常常忘词的演员，尴尬却又充满未知的惊喜。如果灵魂能像衣服一样随意更换，我愿意每天穿不同的"灵魂"去上班，看看哪个更适合应对老板的脸。
                夜晚的星空像是一张巨大的网，而我就是那个被网住的梦，挣扎着想要逃脱，却沉醉于那无边的黑暗。
                时间在指尖上溜过，像是一块玻璃瓶融化的奶茶力，甜味渐渐消散，只留下清苦的触感回忆。
                我的内心住着一个孩子，他喜欢在皮深人静时跑出来，对着空气大喊："世界，你欠我一个解释！"
                如果能把梦想装进冰箱，那么我的冰箱里一定堆满了各种口味的冰淇淋，可惜，现实总是那个无情的热量，让一切融化。
                在这个充满规则的世界里，我就像是一只误入棋盘的蜘蛛，触碰起舞，却总也找不到自己的方格。
                人类的感情复杂得就像是一道没有答案的数学题，我懒不开始，你也猜不透我，却依然乐此不疲地纠缠在一起。
              </div>
            </div>
            <div className="w-64 flex-shrink-0">
              <img src="/angry.png" alt="表情" className="w-full rounded-xl" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <TagCheckbox>功能反馈</TagCheckbox>
          <TagCheckbox>Bug反馈</TagCheckbox>
        </CardFooter>
      </Card>

      {/* 底部按钮 */}
      <div className="flex justify-between">
        <Button variant="pagination">◀ PREVIOUS</Button>
        <div className="flex gap-2">
          <Button variant="ai">AI审核</Button>
          <Button variant="reject">REJECT</Button>
          <Button variant="pass">PASS</Button>
        </div>
        <Button variant="pagination">NEXT ▶</Button>
      </div>
    </div>
  );
}
