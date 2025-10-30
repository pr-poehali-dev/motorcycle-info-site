import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Motorcycle } from '@/types/motorcycle';

interface ComparisonSectionProps {
  comparedBikes: Motorcycle[];
  onToggleComparison: (id: number) => void;
  onNavigateToCatalog: () => void;
}

export function ComparisonSection({ comparedBikes, onToggleComparison, onNavigateToCatalog }: ComparisonSectionProps) {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center">Сравнение моделей</h2>
        {comparedBikes.length === 0 && (
          <Card className="max-w-2xl mx-auto text-center p-12">
            <Icon name="GitCompare" size={64} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground mb-6">Выберите до 2 моделей для сравнения</p>
            <Button onClick={onNavigateToCatalog}>Перейти в каталог</Button>
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
                    onClick={() => onToggleComparison(bike.id)}
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
  );
}
