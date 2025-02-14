
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Library } from "lucide-react";

const books = [
  {
    title: "Tinova pustolovina na tavanu",
    url: "https://bit.ly/40Ycdd8",
    coverImage: "/lovable-uploads/b0b0746a-9628-4f1f-894a-f742e10e8461.png"
  },
  { title: "Hoki", url: "#" },
  { title: "Kraljevske suze", url: "#" },
  { title: "Korjenčica", url: "#" },
  { title: "Bjelobrkova limunada", url: "#" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-section" style={{ "--section-delay": "0" } as React.CSSProperties}>
        <div className="flex flex-col items-center text-center mb-16">
          <img 
            src="/lovable-uploads/7dd9ad16-5548-4961-8be0-d29a0b9737ed.png" 
            alt="Rozalija's Stories" 
            className="w-48 h-48 mb-8 animate-float"
          />
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-800">
            Tatjana Rozalija Ovčar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Stvarateljica čarobnih dječjih priča i profesionalna knjižničarka
          </p>
        </div>
      </section>

      {/* Published Books */}
      <section className="page-section bg-white/50" style={{ "--section-delay": "1" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Objavljene slikovnice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <Card key={book.title} className="book-card">
                {book.coverImage && (
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="font-playfair text-xl mb-3">{book.title}</h3>
                <Button asChild variant="outline" className="w-full">
                  <a href={book.url} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Pogledaj u katalogu
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Electronic Stories */}
      <section className="page-section" style={{ "--section-delay": "2" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Elektronske slikovnice</h2>
          <Card className="book-card">
            <h3 className="font-playfair text-2xl mb-4">Muki</h3>
            <p className="text-gray-600 mb-4">
              Otkrijte Mukijevu priču u našoj posebnoj elektronskoj slikovnici
            </p>
            <Button className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              Čitaj priču
            </Button>
          </Card>
        </div>
      </section>

      {/* Looking for Illustrators */}
      <section className="page-section bg-white/50" style={{ "--section-delay": "3" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Traže ilustratora</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-2">Vilinski grad</h3>
              <p className="text-gray-600">Priča traži svog ilustratora</p>
            </Card>
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-2">4 Mijine priče</h3>
              <p className="text-gray-600">Priča traži svog ilustratora</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="page-section" style={{ "--section-delay": "4" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title justify-center after:left-1/2 after:-translate-x-1/2">Kontakt</h2>
          <Card className="book-card inline-block">
            <div className="flex items-center justify-center gap-4">
              <Mail className="h-5 w-5 text-pastel-pink" />
              <a href="mailto:rozalija.ovcar@gmail.com" className="text-lg hover:text-pastel-pink transition-colors">
                rozalija.ovcar@gmail.com
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="page-section bg-white/50" style={{ "--section-delay": "5" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">O meni</h2>
          <Card className="book-card">
            <div className="flex items-center gap-4 mb-4">
              <Library className="h-8 w-8 text-pastel-purple" />
              <h3 className="font-playfair text-xl">Profesionalna knjižničarka</h3>
            </div>
            <p className="text-gray-600">
              Kao knjižničarka, posvećena sam promicanju dječje književnosti i čitanja. 
              Redovito dijelim preporuke knjiga za djecu i organiziram književne aktivnosti.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
