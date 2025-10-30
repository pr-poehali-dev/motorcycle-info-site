import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Motorcycle } from '@/types/motorcycle';

interface SpecsSectionProps {
  motorcycles: Motorcycle[];
}

export function SpecsSection({ motorcycles }: SpecsSectionProps) {
  return (
    <div className="pt-40 pb-20">
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
                <div className="flex items-start">
                  <img src={bike.image} alt={bike.name} className="w-full rounded-lg sticky top-24" />
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
  );
}
