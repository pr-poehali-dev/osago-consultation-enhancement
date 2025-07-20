import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ОсагоКонсалт</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#osago" className="text-gray-600 hover:text-blue-600 transition-colors">ОСАГО</a>
            <a href="#roads" className="text-gray-600 hover:text-blue-600 transition-colors">Платные дороги</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
            <a href="#prices" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
            <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Консультация
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;