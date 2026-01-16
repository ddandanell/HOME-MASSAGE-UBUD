import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD schema for better Google Search Console compatibility
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://homemassageubud.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://homemassageubud.com${item.href}` : undefined
      })).filter(item => item.item) // Only include items with URLs (not current page)
    ]
  };

  return (
    <>
      {/* JSON-LD Schema for Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visible Breadcrumb Navigation with Microdata */}
      <nav aria-label="Breadcrumb" className="py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a 
                href="/" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                itemProp="item"
              >
                <Home className="w-4 h-4 mr-1" />
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            {items.map((item, index) => (
              <li 
                key={index}
                className="flex items-center"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
                {item.current ? (
                  <span 
                    className="font-medium text-primary" 
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </a>
                )}
                <meta itemProp="position" content={String(index + 2)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}