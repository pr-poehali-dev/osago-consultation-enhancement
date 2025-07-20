import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600">Комплексная поддержка в решении ваших вопросов</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Shield" className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Консультации по ОСАГО</CardTitle>
              <CardDescription>
                Профессиональная помощь в оформлении и получении выплат по ОСАГО
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Помощь в оформлении полиса</li>
                <li>• Расчет компенсаций</li>
                <li>• Ведение дел в суде</li>
                <li>• Взыскание ущерба</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Car" className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Платные дороги</CardTitle>
              <CardDescription>
                Решение споров и возврат средств за некачественные услуги
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Возврат переплат за проезд</li>
                <li>• Обжалование штрафов</li>
                <li>• Претензии к качеству дорог</li>
                <li>• Юридическое сопровождение</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="FileText" className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Правовая защита</CardTitle>
              <CardDescription>
                Комплексная защита ваших прав и интересов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Составление документов</li>
                <li>• Представительство в суде</li>
                <li>• Досудебное урегулирование</li>
                <li>• Исполнение решений</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;