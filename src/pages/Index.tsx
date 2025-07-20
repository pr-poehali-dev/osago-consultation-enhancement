import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Services Section */}
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

      {/* OSAGO Section */}
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

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600">Что говорят о нашей работе</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Помогли получить доплату по ОСАГО в размере 150 тысяч рублей. Страховая сначала отказывалась, но специалисты грамотно составили претензию."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="User" className="h-6 w-6 text-gray-500" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Анна М.</p>
                  <p className="text-sm text-gray-500">Москва</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Вернули деньги за незаконные штрафы на платной дороге. Процесс занял месяц, результат превзошел ожидания."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="User" className="h-6 w-6 text-gray-500" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Сергей К.</p>
                  <p className="text-sm text-gray-500">Санкт-Петербург</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Профессиональный подход и внимание к деталям. Довели дело до суда и выиграли. Рекомендую всем!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="User" className="h-6 w-6 text-gray-500" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Елена Д.</p>
                  <p className="text-sm text-gray-500">Екатеринбург</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-gray-600">Готовы помочь решить ваши вопросы</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="MessageSquare" className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@osagokonsalt.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Офис</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Сообщение</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Опишите вашу ситуацию"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;