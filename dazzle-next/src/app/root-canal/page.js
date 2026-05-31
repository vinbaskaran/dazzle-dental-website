import { ServiceLanding } from "@/components/ServiceLanding";
import { SERVICES } from "@/app/services-content";

const service = SERVICES["root-canal"];

export const metadata = {
  title: service.title,
  description: service.description,
  alternates: { canonical: "/root-canal" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dazzle Dental & Cosmetic Studio",
    title: service.title,
    description: service.description,
    url: "https://www.dazzledentalstudio.in/root-canal",
    images: [{ url: service.ogImage, width: 1200, height: 630, alt: service.h1 }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.title,
    description: service.description,
    images: [service.ogImage],
  },
};

export default function Page() {
  return <ServiceLanding slug="root-canal" />;
}
