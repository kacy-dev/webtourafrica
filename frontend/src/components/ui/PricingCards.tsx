
import React, { useState } from "react";
import {
  Monitor,
  MapPin,
  Smartphone,
  Star,
  Award,
  Rocket,
  Check,
} from "lucide-react";

interface Plan {
  name: string;
  priceUSD: number;
  priceNGN: number;
  priceGBP: number;
  priceEUR: number;
  features: string[];
  icon: React.ReactNode;
  recommended?: boolean;
}

interface CountryRate {
  name: string;
  currency: string;
  rateToUSD: number;
  symbol: string;
}

const countries: CountryRate[] = [
  { name: "Nigeria", currency: "NGN", rateToUSD: 1 / 0.0026, symbol: "₦" },
  { name: "United States", currency: "USD", rateToUSD: 1, symbol: "$" },
  { name: "United Kingdom", currency: "GBP", rateToUSD: 0.81, symbol: "£" },
  { name: "Eurozone", currency: "EUR", rateToUSD: 0.92, symbol: "€" },
];

const services = ["Web", "Google Profile", "App"];

const plansData: Record<string, Plan[]> = {
  Web: [
    {
      name: "Free",
      priceUSD: 0,
      priceNGN: 0,
      priceGBP: 0,
      priceEUR: 0,
      features: ["Basic template", "1 page", "Limited support"],
      icon: <Monitor size={32} />,
    },
    {
      name: "Basic",
      priceUSD: 100,
      priceNGN: 46000,
      priceGBP: 81,
      priceEUR: 92,
      features: ["3 pages", "Responsive design", "Email support"],
      icon: <Monitor size={32} />,
    },
    {
      name: "Pro",
      priceUSD: 250,
      priceNGN: 115000,
      priceGBP: 203,
      priceEUR: 230,
      features: ["10 pages", "Custom design", "Priority support", "SEO"],
      icon: <Star size={32} />,
      recommended: true,
    },
    {
      name: "Premium",
      priceUSD: 500,
      priceNGN: 230000,
      priceGBP: 406,
      priceEUR: 460,
      features: [
        "Unlimited pages",
        "Custom features",
        "Dedicated support",
        "SEO + Marketing",
      ],
      icon: <Award size={32} />,
    },
  ],
  "Google Profile": [
    {
      name: "Mini Setup",
      priceUSD: 6.5,
      priceNGN: 5000,
      priceGBP: 6,
      priceEUR: 7,
      features: ["Google Business Profile Setup"],
      icon: <MapPin size={32} />,
    },
    {
      name: "Maintenance Basic",
      priceUSD: 15,
      priceNGN: 10000,
      priceGBP: 12,
      priceEUR: 14,
      features: ["Monthly updates", "Business posts"],
      icon: <Rocket size={32} />,
    },
    {
      name: "Maintenance Pro",
      priceUSD: 25,
      priceNGN: 15500,
      priceGBP: 20,
      priceEUR: 23,
      features: ["Weekly updates", "Post management", "Reviews support"],
      icon: <Check size={32} />,
      recommended: true,
    },
    {
      name: "Maintenance Premium",
      priceUSD: 50,
      priceNGN: 30000,
      priceGBP: 41,
      priceEUR: 46,
      features: [
        "Daily updates",
        "Full profile management",
        "Marketing guidance",
        "Review optimization",
      ],
      icon: <Award size={32} />,
    },
  ],
  App: [
    {
      name: "Free",
      priceUSD: 0,
      priceNGN: 0,
      priceGBP: 0,
      priceEUR: 0,
      features: ["Prototype only"],
      icon: <Smartphone size={32} />,
    },
    {
      name: "Basic",
      priceUSD: 200,
      priceNGN: 92000,
      priceGBP: 162,
      priceEUR: 184,
      features: ["Basic app", "iOS & Android", "Limited support"],
      icon: <Smartphone size={32} />,
    },
    {
      name: "Pro",
      priceUSD: 400,
      priceNGN: 184000,
      priceGBP: 325,
      priceEUR: 368,
      features: ["Full app", "Custom features", "Priority support"],
      icon: <Rocket size={32} />,
      recommended: true,
    },
    {
      name: "Premium",
      priceUSD: 800,
      priceNGN: 368000,
      priceGBP: 650,
      priceEUR: 736,
      features: [
        "Enterprise app",
        "Full customization",
        "Marketing & Analytics",
        "Dedicated support",
      ],
      icon: <Award size={32} />,
    },
  ],
};

export default function PricingSection() {
  const [activeService, setActiveService] = useState("Google Profile");
  const [currency, setCurrency] = useState<"USD" | "NGN" | "GBP" | "EUR">(
    "USD"
  );
  const [country, setCountry] = useState<CountryRate>(countries[1]); 

  const handleServiceClick = (service: string) => setActiveService(service);

  const handleCurrencyChange = (cur: "USD" | "NGN" | "GBP" | "EUR") =>
    setCurrency(cur);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find((c) => c.name === e.target.value);
    if (selected) {
      setCountry(selected);
      setCurrency(selected.currency as "USD" | "NGN" | "GBP" | "EUR");
    }
  };

  const formatPrice = (plan: Plan) => {
    let price = plan[`price${currency}` as keyof Plan] as number;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="text-center flex flex-col justify-center items-center mb-8">
          <span className="text-xs text-primary outline outline-1 outline-primary rounded-full py-1 px-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Features
          </span>
          <h1
            className="text-3xl md:text-4xl font-bold my-2 max-w-2xl font-bold text-dark"
            style={{ lineHeight: 1.2 }}
          >
            {" "}
            Choose your tailored Plan & {" "}
            <b className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                We Handle Everything
            </b>
          </h1>

          <span className="text-dark opacity-70 text-sm">
            Let’s bring your digital dream to life, step by step.
          </span>
        </div>

        <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
          <select
            className="px-4 py-2 border rounded-md"
            value={country.name}
            onChange={handleCountryChange}
          >
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border rounded-md"
            value={currency}
            onChange={(e) =>
              handleCurrencyChange(
                e.target.value as "USD" | "NGN" | "GBP" | "EUR"
              )
            }
          >
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <div className="flex gap-2 lg:flex-row md:flex-row bg-white border border-1 border-dark/10 rounded-lg justify-center mb-8">
          {services.map((service) => (
            <button
              key={service}
              className={`px-4 py-3 text-[11px] lg:text-sm  font-semibold w-full rounded-lg ${
                activeService === service
                  ? "bg-primary text-white outline outline-1  outline-primary outline-offset-2"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => handleServiceClick(service)}
            >
              {service}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
          {plansData[activeService].map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-xl border shadow-md flex flex-col items-center text-center ${
                plan.recommended
                  ? "border-primary bg-primary/10"
                  : "border-gray-200"
              }`}
            >
              <div className="flex self-start">
                <div className="mb-4 text-left">{plan.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-extrabold mb-4">
                {formatPrice(plan)}
              </p>
              <ul className="text-sm mb-4 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>

              <button className="text-xs bg-primary text-light px-3 py-2 rounded-md outline outline-1  outline-primary outline-offset-2">
                Get Started
              </button>

              {plan.recommended && (
                <span className="mt-2 px-3 py-1 bg-primary text-white rounded-full text-xs">
                  Recommended
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
