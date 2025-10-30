import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Motorcycle } from '@/types/motorcycle';

interface PopularModelsProps {
  motorcycles: Motorcycle[];
  onViewDetails: () => void;
}

export function PopularModels({ motorcycles, onViewDetails }: PopularModelsProps) {
  return (
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
                onClick={onViewDetails}
              >
                Подробнее
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
