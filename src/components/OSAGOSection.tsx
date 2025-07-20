import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const OSAGOSection = () => {
  return (
    <section id="osago" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Проблемы с ОСАГО?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Страховые компании часто занижают выплаты или необоснованно отказывают в возмещении. 
              Мы поможем получить справедливую компенсацию.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Независимая оценка ущерба</h3>
                  <p className="text-gray-600">Профессиональная оценка реального размера ущерба</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Досудебное урегулирование</h3>
                  <p className="text-gray-600">Эффективное взаимодействие со страховой компанией</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Судебная защита</h3>
                  <p className="text-gray-600">Полное сопровождение дела в суде</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-center">Получите бесплатную консультацию</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                Позвонить сейчас
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                Написать в WhatsApp
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                Отправить email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OSAGOSection;