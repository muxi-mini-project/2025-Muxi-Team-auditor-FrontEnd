import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';

export default function Settings() {
  return (
    <Card className="w-full m-4">
      <CardHeader>
        <CardTitle className="text-xl">设置</CardTitle>
      </CardHeader>
      <CardContent className="w-full grid grid-cols-[2fr,3fr] gap-4">
        <div>
          <Label>项目信息</Label>
          <Card>
            <CardContent>API Key: xxxxx</CardContent>
          </Card>
        </div>
        <div>
          <Label>成员信息</Label>
          <Card>
            <CardContent>
              <div>
                <Label>成员</Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
