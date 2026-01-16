import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-background" id="table-of-contents">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <List className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">What This Page Covers</h2>
              </div>
              <nav>
                <ul className="grid md:grid-cols-2 gap-3">
                  {items.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-primary hover:underline hover:text-primary/80 transition-colors w-full"
                      >
                        {index + 1}. {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
