
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  format: string;
  benefit: string;
  ctaText: string;
  ctaLink: string;
  isNew?: boolean;
  imageSrc?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features,
  format,
  benefit,
  ctaText,
  ctaLink,
  isNew,
  imageSrc,
}: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="relative space-y-4 pb-8">
        {isNew && (
          <Badge className="absolute right-6 top-6 bg-migrapro-terre-cuite text-white">
            Nouveau
          </Badge>
        )}
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-migrapro-vert-foret/10">
            <Icon className="w-8 h-8 text-migrapro-vert-foret" />
          </div>
        </div>
        {imageSrc && (
          <div className="relative h-48 w-full rounded-lg overflow-hidden -mx-6 -mt-2">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardTitle className="text-2xl font-heading text-center">{title}</CardTitle>
        <CardDescription className="text-center text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-migrapro-vert-foret"></span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="space-y-3 pt-4 border-t">
          <div className="text-sm">
            <span className="font-medium">Format :</span> {format}
          </div>
          <div className="text-sm font-medium text-migrapro-terre-cuite">
            {benefit}
          </div>
        </div>

        <Button className="w-full bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/90" asChild>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
