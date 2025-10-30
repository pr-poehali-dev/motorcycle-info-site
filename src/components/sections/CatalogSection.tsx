import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Motorcycle } from '@/types/motorcycle';

interface CatalogSectionProps {
  motorcycles: Motorcycle[];
  selectedBikes: number[];
  onViewSpecs: () => void;
  onToggleComparison: (id: number) => void;
}

export function CatalogSection({ motorcycles, selectedBikes, onViewSpecs, onToggleComparison }: CatalogSectionProps) {
  return (
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
                  onClick={onViewSpecs}
                >
                  Полные характеристики
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => onToggleComparison(bike.id)}
                >
                  {selectedBikes.includes(bike.id) ? 'Убрать из сравнения' : 'Добавить к сравнению'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
