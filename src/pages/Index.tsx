import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Motorcycle {
  id: number;
  name: string;
  type: string;
  image: string;
  engine: {
    displacement: string;
    power: string;
    torque: string;
    type: string;
    cylinders: number;
  };
  specs: {
    weight: string;
    fuelCapacity: string;
    fuelConsumption: string;
    topSpeed: string;
    frontWheel: string;
    rearWheel: string;
    seatHeight: string;
    wheelbase: string;
    groundClearance: string;
    brakeFront: string;
    brakeRear: string;
    transmission: string;
    cooling: string;
    ignition: string;
  };
  price: string;
}

const motorcycles: Motorcycle[] = [
  {
    id: 1,
    name: 'Shadow Racer 1000',
    type: 'Спортбайк',
    image: 'https://cdn.poehali.dev/projects/12141ed2-7b23-4723-99bd-862fc763bbf0/files/e4ef76e7-bb27-4eb9-afad-88067bb1773b.jpg',
    engine: {
      displacement: '998 см³',
      power: '200 л.с.',
      torque: '115 Нм',
      type: 'Рядный 4-цилиндровый',
      cylinders: 4,
    },
    specs: {
      weight: '195 кг',
      fuelCapacity: '17 л',
      fuelConsumption: '6.2 л/100км',
      topSpeed: '299 км/ч',
      frontWheel: '120/70 ZR17',
      rearWheel: '190/55 ZR17',
      seatHeight: '825 мм',
      wheelbase: '1405 мм',
      groundClearance: '130 мм',
      brakeFront: '2x 320 мм диски',
      brakeRear: '220 мм диск',
      transmission: '6-ступенчатая',
      cooling: 'Жидкостное',
      ignition: 'Электронное',
    },
    price: '1 890 000 ₽',
  },
  {
    id: 2,
    name: 'Crimson Cruiser 750',
    type: 'Круизер',
    image: 'https://cdn.poehali.dev/projects/12141ed2-7b23-4723-99bd-862fc763bbf0/files/175e49f6-8f8d-47f0-ac69-cf23f35a9d60.jpg',
    engine: {
      displacement: '749 см³',
      power: '54 л.с.',
      torque: '65 Нм',
      type: 'V-образный 2-цилиндровый',
      cylinders: 2,
    },
    specs: {
      weight: '228 кг',
      fuelCapacity: '14 л',
      fuelConsumption: '4.8 л/100км',
      topSpeed: '180 км/ч',
      frontWheel: '130/90 R16',
      rearWheel: '180/70 R16',
      seatHeight: '690 мм',
      wheelbase: '1625 мм',
      groundClearance: '140 мм',
      brakeFront: '300 мм диск',
      brakeRear: '300 мм диск',
      transmission: '5-ступенчатая',
      cooling: 'Воздушное',
      ignition: 'Электронное',
    },
    price: '1 250 000 ₽',
  },
  {
    id: 3,
    name: 'Black Thunder ADV',
    type: 'Туристический',
    image: 'https://cdn.poehali.dev/projects/12141ed2-7b23-4723-99bd-862fc763bbf0/files/87bbe964-18d5-4325-8537-c0dcaf1f0b15.jpg',
    engine: {
      displacement: '1254 см³',
      power: '136 л.с.',
      torque: '125 Нм',
      type: 'V-образный 2-цилиндровый',
      cylinders: 2,
    },
    specs: {
      weight: '254 кг',
      fuelCapacity: '23 л',
      fuelConsumption: '5.5 л/100км',
      topSpeed: '220 км/ч',
      frontWheel: '120/70 R19',
      rearWheel: '170/60 R17',
      seatHeight: '870 мм',
      wheelbase: '1594 мм',
      groundClearance: '220 мм',
      brakeFront: '2x 320 мм диски',
      brakeRear: '265 мм диск',
      transmission: '6-ступенчатая',
      cooling: 'Жидкостное',
      ignition: 'Электронное',
    },
    price: '2 150 000 ₽',
  },
];

export default function Index() {
  const [selectedBikes, setSelectedBikes] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  const toggleComparison = (id: number) => {
    setSelectedBikes((prev) =>
      prev.includes(id) ? prev.filter((bikeId) => bikeId !== id) : prev.length < 2 ? [...prev, id] : prev
    );
  };

  const comparedBikes = motorcycles.filter((bike) => selectedBikes.includes(bike.id));

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Bike" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold">MotoFox<span className="text-primary">Pro.Ru</span></h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Каталог', 'Характеристики', 'Двигатели', 'Сравнение', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'главная' && (
        <div className="pt-20">
          <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${motorcycles[0].image})` }}
            />
            <div className="container mx-auto px-4 z-20 text-center">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary">Новая коллекция 2024</Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                МОЩЬ И <span className="text-primary">СКОРОСТЬ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Профессиональные мотоциклы с выдающимися характеристиками. Полный анализ двигателей, колес и расхода
                топлива.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setActiveSection('каталог')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('сравнение')}>
                  Сравнить модели
                </Button>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Популярные модели</h2>
              <p className="text-muted-foreground">Лучшие мотоциклы нашей коллекции</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {motorcycles.map((bike) => (
                <Card key={bike.id} className="group hover:border-primary transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">{bike.type}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{bike.name}</CardTitle>
                    <p className="text-3xl font-bold text-primary">{bike.price}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Двигатель</span>
                        <span className="font-medium">{bike.engine.displacement}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Мощность</span>
                        <span className="font-medium">{bike.engine.power}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Расход</span>
                        <span className="font-medium">{bike.specs.fuelConsumption}</span>
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => setActiveSection('характеристики')}
                    >
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-secondary/30 py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { icon: 'Gauge', value: '299', label: 'км/ч макс. скорость', unit: '' },
                  { icon: 'Zap', value: '200', label: 'л.с. мощность', unit: '' },
                  { icon: 'Fuel', value: '4.8', label: 'л/100км расход', unit: '' },
                  { icon: 'Award', value: '15+', label: 'лет опыта', unit: '' },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Icon name={stat.icon as any} className="text-primary mb-4" size={48} />
                    <div className="text-5xl font-bold mb-2">
                      {stat.value}
                      <span className="text-primary">{stat.unit}</span>
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'каталог' && (
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">Каталог мотоциклов</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {motorcycles.map((bike) => (
                <Card key={bike.id} className="hover:border-primary transition-all">
                  <div className="relative h-64">
                    <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{bike.name}</CardTitle>
                        <Badge>{bike.type}</Badge>
                      </div>
                      <p className="text-2xl font-bold text-primary">{bike.price}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full mb-2"
                      onClick={() => setActiveSection('характеристики')}
                    >
                      Полные характеристики
                    </Button>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => toggleComparison(bike.id)}
                    >
                      {selectedBikes.includes(bike.id) ? 'Убрать из сравнения' : 'Добавить к сравнению'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'характеристики' && (
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">Технические характеристики</h2>
            <Tabs defaultValue={motorcycles[0].id.toString()} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {motorcycles.map((bike) => (
                  <TabsTrigger key={bike.id} value={bike.id.toString()}>
                    {bike.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {motorcycles.map((bike) => (
                <TabsContent key={bike.id} value={bike.id.toString()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img src={bike.image} alt={bike.name} className="w-full rounded-lg" />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{bike.name}</h3>
                        <Badge className="mb-4">{bike.type}</Badge>
                        <p className="text-4xl font-bold text-primary">{bike.price}</p>
                      </div>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="Gauge" className="text-primary" />
                            Двигатель
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Объем</span>
                            <span className="font-medium">{bike.engine.displacement}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Мощность</span>
                            <span className="font-medium">{bike.engine.power}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Крутящий момент</span>
                            <span className="font-medium">{bike.engine.torque}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Тип</span>
                            <span className="font-medium">{bike.engine.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Цилиндров</span>
                            <span className="font-medium">{bike.engine.cylinders}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="Settings" className="text-primary" />
                            Общие характеристики
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Вес</span>
                            <span className="font-medium">{bike.specs.weight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Бак</span>
                            <span className="font-medium">{bike.specs.fuelCapacity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Расход</span>
                            <span className="font-medium">{bike.specs.fuelConsumption}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Макс. скорость</span>
                            <span className="font-medium">{bike.specs.topSpeed}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="CircleDot" className="text-primary" />
                            Колеса
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Переднее</span>
                            <span className="font-medium">{bike.specs.frontWheel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Заднее</span>
                            <span className="font-medium">{bike.specs.rearWheel}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="Ruler" className="text-primary" />
                            Размеры
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Высота сиденья</span>
                            <span className="font-medium">{bike.specs.seatHeight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Колесная база</span>
                            <span className="font-medium">{bike.specs.wheelbase}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Дорожный просвет</span>
                            <span className="font-medium">{bike.specs.groundClearance}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="Disc" className="text-primary" />
                            Тормоза и трансмиссия
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Передний тормоз</span>
                            <span className="font-medium">{bike.specs.brakeFront}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Задний тормоз</span>
                            <span className="font-medium">{bike.specs.brakeRear}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">КПП</span>
                            <span className="font-medium">{bike.specs.transmission}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Охлаждение</span>
                            <span className="font-medium">{bike.specs.cooling}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Зажигание</span>
                            <span className="font-medium">{bike.specs.ignition}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      )}

      {activeSection === 'двигатели' && (
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">Типы двигателей</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {motorcycles.map((bike) => (
                <Card key={bike.id} className="hover:border-primary transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Zap" className="text-primary" />
                      {bike.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Тип двигателя</span>
                        <Badge variant="outline">{bike.engine.type}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Цилиндров</span>
                        <span className="font-bold text-primary text-xl">{bike.engine.cylinders}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Объем</span>
                        <span className="font-medium">{bike.engine.displacement}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Мощность</span>
                        <span className="font-medium text-primary">{bike.engine.power}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Крутящий момент</span>
                        <span className="font-medium">{bike.engine.torque}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Icon name="Fuel" size={16} />
                        Расход топлива
                      </div>
                      <p className="text-2xl font-bold text-primary">{bike.specs.fuelConsumption}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'сравнение' && (
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">Сравнение моделей</h2>
            {comparedBikes.length === 0 && (
              <Card className="max-w-2xl mx-auto text-center p-12">
                <Icon name="GitCompare" size={64} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground mb-6">Выберите до 2 моделей для сравнения</p>
                <Button onClick={() => setActiveSection('каталог')}>Перейти в каталог</Button>
              </Card>
            )}
            {comparedBikes.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8">
                {comparedBikes.map((bike) => (
                  <Card key={bike.id}>
                    <div className="relative h-64">
                      <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-4 right-4"
                        onClick={() => toggleComparison(bike.id)}
                      >
                        <Icon name="X" size={16} />
                      </Button>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-3xl">{bike.name}</CardTitle>
                      <Badge>{bike.type}</Badge>
                      <p className="text-3xl font-bold text-primary mt-2">{bike.price}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2">
                          <Icon name="Gauge" size={20} className="text-primary" />
                          Двигатель
                        </h4>
                        <div className="pl-7 space-y-1 text-sm">
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Объем:</span>
                            <span>{bike.engine.displacement}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Мощность:</span>
                            <span>{bike.engine.power}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Момент:</span>
                            <span>{bike.engine.torque}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Тип:</span>
                            <span>{bike.engine.type}</span>
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2">
                          <Icon name="Settings" size={20} className="text-primary" />
                          Характеристики
                        </h4>
                        <div className="pl-7 space-y-1 text-sm">
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Вес:</span>
                            <span>{bike.specs.weight}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Бак:</span>
                            <span>{bike.specs.fuelCapacity}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Расход:</span>
                            <span className="text-primary font-medium">{bike.specs.fuelConsumption}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Макс. скорость:</span>
                            <span>{bike.specs.topSpeed}</span>
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2">
                          <Icon name="CircleDot" size={20} className="text-primary" />
                          Колеса
                        </h4>
                        <div className="pl-7 space-y-1 text-sm">
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Переднее:</span>
                            <span>{bike.specs.frontWheel}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-muted-foreground">Заднее:</span>
                            <span>{bike.specs.rearWheel}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeSection === 'контакты' && (
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-12 text-center">Свяжитесь с нами</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-muted-foreground">г. Новосибирск, ул. Мотоциклистов, д. 15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-muted-foreground">+7 (914) 112-54-40</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">mrartyomreddarkfoxstorm@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                        <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Оставьте заявку</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.ru" />
                      </div>
                      <div>
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea id="message" placeholder="Расскажите, что вас интересует..." rows={4} />
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Отправить заявку
                        <Icon name="Send" size={16} className="ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-secondary/30 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Bike" className="text-primary" size={28} />
                <h3 className="text-xl font-bold">MotoFox<span className="text-primary">Pro.Ru</span></h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные мотоциклы с выдающимися характеристиками
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                {['Главная', 'Каталог', 'Характеристики', 'Двигатели'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Сравнение</p>
                <p>О компании</p>
                <p>Доставка</p>
                <p>Гарантия</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+7 (914) 112-54-40</p>
                <p>mrartyomreddarkfoxstorm@gmail.com</p>
                <p>г. Новосибирск</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 MOTOPRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}