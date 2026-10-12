import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  prefix?: string;
  target: number;
  suffix: string;
  title: string;
  subtitle: string;
}

const stats: StatItem[] = [
  { prefix: 'S$', target: 2.9, suffix: 'M+', title: 'Customer savings on deliveries.', subtitle: 'Money Saving' },
  { target: 86.3, suffix: 'M+', title: 'Worldwide delivery quotes made.', subtitle: 'Quotation Made' },
  { target: 1.5, suffix: 'M+', title: 'Customers shipping worldwide.', subtitle: 'Happy Customers' },
  { target: 2.7, suffix: 'M+', title: 'EasyParcel recyclable polymailers used.', subtitle: 'Recyclable Polymailers' },
];

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-4xl md:text-5xl font-black text-primary">
      {prefix}{count.toFixed(1)}{suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-text-dark font-medium mt-2">{stat.subtitle}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
