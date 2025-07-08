import { 
  Users, 
  Heart,
  Target,
  Shield,
  Baby,
  Utensils,
  Calendar,
  Video,
  MessageCircle,
  FileText,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  User,
  ChevronRight
} from 'lucide-react';

// Icon mapping for dynamic rendering
const iconMap = {
  Users,
  Heart,
  Target,
  Shield,
  Baby,
  Utensils,
  Calendar,
  Video,
  MessageCircle,
  FileText,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  User,
  ChevronRight
};

// Component to render icons dynamically
export const DynamicIcon = ({ name, className = "h-6 w-6", ...props }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`);
    return null;
  }
  
  return <IconComponent className={className} {...props} />;
};

// Helper function to get icon component
export const getIconComponent = (name) => {
  return iconMap[name] || null;
};

export default DynamicIcon;
