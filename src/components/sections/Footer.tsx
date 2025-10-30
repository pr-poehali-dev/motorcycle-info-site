import Icon from '@/components/ui/icon';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

export function Footer({ onSectionChange }: FooterProps) {
  return (
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
                  onClick={() => onSectionChange(item.toLowerCase())}
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
              <p>Гарантия до 2027 года</p>
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
  );
}
