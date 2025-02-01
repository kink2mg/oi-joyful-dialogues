import Navbar from "@/components/Navbar";
import PlanCard from "@/components/PlanCard";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const plans = [
    {
      title: "NET PÓS",
      category: "Plano Premium",
      price: 119.90,
      gb: 50,
      features: [
        { text: "Passaporte Américas para usar seu celular no exterior" },
        { text: "GB para redes sociais e vídeos" },
        { text: "WhatsApp ilimitado" },
        { text: "Internet de uso livre" }
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500"
    },
    {
      title: "NET CONTROLE",
      category: "Plano Essencial",
      price: 54.90,
      gb: 25,
      features: [
        { text: "5G mais rápido do Brasil" },
        { text: "Ligações ilimitadas" },
        { text: "YouTube ilimitado" },
        { text: "+2GB bônus todo mês" }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Planos Net</h1>
          <p className="text-lg text-gray-600">Escolha o plano perfeito para suas necessidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index} 
              {...plan} 
              isPopular={index === 0}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>
      </main>
      
      <div className="fixed bottom-6 right-6 animate-bounce">
        <Button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          <MessageCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
