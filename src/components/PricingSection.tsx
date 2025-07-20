import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  return (
    <section id="prices" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Цены на услуги</h2>
          <p className="text-lg text-gray-600">Прозрачное ценообразование без скрытых платежей</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-center">Консультация</CardTitle>
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-900">Бесплатно</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Первичная консультация</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Оценка перспектив дела</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Рекомендации по действиям</span>
              </div>
              <Button className="w-full mt-6" variant="outline">
                Получить консультацию
              </Button>
            </CardContent>
          </Card>

          <Card className="relative border-blue-500 border-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500">Популярно</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-center">Досудебное урегулирование</CardTitle>
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-900">от 15%</span>
                <p className="text-sm text-gray-500">от суммы взыскания</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Составление претензии</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Переговоры со страховой</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Независимая оценка</span>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                Выбрать план
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-center">Судебное разбирательство</CardTitle>
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-900">от 20%</span>
                <p className="text-sm text-gray-500">от суммы взыскания</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Подготовка иска</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Представительство в суде</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Исполнение решения</span>
              </div>
              <Button className="w-full mt-6" variant="outline">
                Обсудить детали
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;