import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
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
                onClick={() => onSectionChange(item.toLowerCase())}
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
  );
}
