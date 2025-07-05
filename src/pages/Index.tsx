import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donations = [
    {
      title: "VIP",
      price: "199₽",
      features: ["Приватные привилегии", "Цветной ник", "Доступ к /kit vip"],
      color: "bg-yellow-500",
    },
    {
      title: "PREMIUM",
      price: "399₽",
      features: [
        "Все привилегии VIP",
        "Дополнительные команды",
        "Эксклюзивные возможности",
      ],
      color: "bg-purple-500",
    },
    {
      title: "ELITE",
      price: "799₽",
      features: [
        "Все привилегии PREMIUM",
        "Админские возможности",
        "Особый статус",
      ],
      color: "bg-red-500",
    },
  ];

  const cases = [
    {
      title: "Стартовый кейс",
      price: "49₽",
      items: ["Алмазная броня", "Зелья", "Блоки"],
      rarity: "common",
    },
    {
      title: "Боевой кейс",
      price: "99₽",
      items: ["Зачарованное оружие", "Редкие ресурсы", "PvP наборы"],
      rarity: "rare",
    },
    {
      title: "Легендарный кейс",
      price: "199₽",
      items: ["Уникальные предметы", "Эксклюзивные скины", "Редкие блоки"],
      rarity: "legendary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-green-500" size={32} />
              <span className="text-2xl font-bold text-white">PvPCraft</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-slate-300 hover:text-green-400 transition-colors"
              >
                Главная
              </a>
              <a
                href="#donate"
                className="text-slate-300 hover:text-green-400 transition-colors"
              >
                Донат
              </a>
              <a
                href="#cases"
                className="text-slate-300 hover:text-green-400 transition-colors"
              >
                Кейсы
              </a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              <Icon name="Users" className="mr-2" size={16} />
              Играть
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              PvP & <span className="text-green-400">Развитие</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Лучший сервер для PvP сражений и прогресса. Кланы, войны, развитие
              персонажа и эпичные битвы ждут тебя!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Начать играть
              </Button>
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="flex items-center">
                  <Icon
                    name="Users"
                    className="mr-1 text-green-400"
                    size={16}
                  />
                  <span className="text-sm">Онлайн: 1,247</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Server"
                    className="mr-1 text-green-400"
                    size={16}
                  />
                  <span className="text-sm">IP: pvpcraft.ru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                1,247
              </div>
              <div className="text-slate-300">Игроков онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                15,638
              </div>
              <div className="text-slate-300">Общий регистраций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                8,942
              </div>
              <div className="text-slate-300">PvP убийств</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-slate-300">Стабильность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Донат привилегии
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Поддержи сервер и получи уникальные возможности для доминирования
              в PvP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donations.map((donation, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${donation.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon name="Crown" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {donation.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-green-400">
                    {donation.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {donation.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-slate-300"
                      >
                        <Icon
                          name="Check"
                          className="mr-2 text-green-400"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Купить привилегию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section
        id="cases"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Кейсы и награды
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Открывай кейсы и получай редкие предметы для PvP боев
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Package" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {caseItem.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-green-400">
                    {caseItem.price}
                  </div>
                  <Badge
                    variant={
                      caseItem.rarity === "legendary"
                        ? "destructive"
                        : caseItem.rarity === "rare"
                          ? "secondary"
                          : "default"
                    }
                    className="mt-2"
                  >
                    {caseItem.rarity === "legendary"
                      ? "Легендарный"
                      : caseItem.rarity === "rare"
                        ? "Редкий"
                        : "Обычный"}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-slate-400 font-medium">
                      Возможные предметы:
                    </div>
                    {caseItem.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-slate-300"
                      >
                        <Icon
                          name="Sparkles"
                          className="mr-2 text-yellow-400"
                          size={16}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Открыть кейс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" className="text-green-500" size={24} />
                <span className="text-xl font-bold text-white">PvPCraft</span>
              </div>
              <p className="text-slate-400">
                Лучший сервер для PvP и развития в Minecraft
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Игра</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Правила
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Команды
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Гайды
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Форум
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Подключение</h4>
              <div className="space-y-2">
                <div className="text-slate-400">
                  IP: <span className="text-green-400">pvpcraft.ru</span>
                </div>
                <div className="text-slate-400">
                  Версия: <span className="text-green-400">1.18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PvPCraft. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
