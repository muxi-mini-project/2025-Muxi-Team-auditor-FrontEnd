import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';

export default function Settings() {
  return (
    <div className="flex w-full flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">设置</CardTitle>
        </CardHeader>
        <CardContent className="grid w-full grid-cols-[2fr,3fr] gap-4">
          <div>
            <Label>项目信息</Label>
            <Card className="py-4">
              <CardContent>API Key: xxxxx</CardContent>
            </Card>
          </div>
          <div>
            <Label>成员信息</Label>
            <Card className="py-4">
              <CardContent>
                <div>
                  <Label>成员</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">审核标准</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            审核要求如下：内容需准确无误，数据、事实、引用应有可靠来源，专业知识要符合行业标准和学术规范，避免误解或误导；语言表达要清晰流畅，逻辑严谨，条理清晰，语句通顺，无错别字、语病；格式需规范统一，包括字体、字号、行距、段落排版等，符合相关标准和要求；图片、表格等元素要清晰可辨，与文字内容紧密相关，且有准确的说明和标注；遵守法律法规和相关政策，不得包含违法违规、侵权、不实等不良信息，确保内容的合法性和合规性。
          </p>
          <p>
            审核要求如下：内容需准确无误，数据、事实、引用应有可靠来源，专业知识要符合行业标准和学术规范，避免误解或误导；语言表达要清晰流畅，逻辑严谨，条理清晰，语句通顺，无错别字、语病；格式需规范统一，包括字体、字号、行距、段落排版等，符合相关标准和要求；图片、表格等元素要清晰可辨，与文字内容紧密相关，且有准确的说明和标注；遵守法律法规和相关政策，不得包含违法违规、侵权、不实等不良信息，确保内容的合法性和合规性。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
