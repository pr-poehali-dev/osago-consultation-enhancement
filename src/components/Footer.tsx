import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Shield" className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ОсагоКонсалт</span>
            </div>
            <p className="text-gray-400">
              Профессиональные консультации по страхованию и защите прав потребителей
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#osago" className="hover:text-white transition-colors">ОСАГО</a></li>
              <li><a href="#roads" className="hover:text-white transition-colors">Платные дороги</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Правовая защита</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>+7 (495) 123-45-67</p>
              <p>info@osagokonsalt.ru</p>
              <p>г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ОсагоКонсалт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;