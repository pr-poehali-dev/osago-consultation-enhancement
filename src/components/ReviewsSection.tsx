import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  return (
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
  );
};

export default ReviewsSection;