import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Motorcycle } from '@/types/motorcycle';

interface EnginesSectionProps {
  motorcycles: Motorcycle[];
}

export function EnginesSection({ motorcycles }: EnginesSectionProps) {
  return (
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
  );
}
