import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  backgroundImage: string;
  onNavigateToCatalog: () => void;
  onNavigateToComparison: () => void;
}

export function HeroSection({ backgroundImage, onNavigateToCatalog, onNavigateToComparison }: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="container mx-auto px-4 z-20 text-center mt-20">
        <Badge className="mb-6 bg-primary/20 text-primary border-primary">Новая коллекция 2024</Badge>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">
          МОЩЬ И <span className="text-primary">СКОРОСТЬ</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto drop-shadow-md">
          Профессиональные мотоциклы с выдающимися характеристиками. Полный анализ двигателей, колес и расхода
          топлива.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={onNavigateToCatalog}>
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={onNavigateToComparison}>
            Сравнить модели
          </Button>
        </div>
      </div>
    </section>
  );
}
