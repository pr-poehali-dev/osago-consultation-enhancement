import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Профессиональные консультации
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Решаем проблемы с <span className="text-blue-600">ОСАГО</span> и платными дорогами
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Получите квалифицированную помощь в вопросах страхования и возмещения ущерба от некачественно оказанных услуг
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
          <div className="lg:text-center">
            <img 
              src="/img/5a7ea5f2-fc55-4ed5-88aa-731503537a17.jpg" 
              alt="Консультации по страхованию"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;