import Icon from '@/components/ui/icon';

export function StatsSection() {
  return (
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
  );
}
