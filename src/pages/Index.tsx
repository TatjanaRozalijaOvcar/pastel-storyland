
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Library } from "lucide-react";

const books = [
  {
    title: "Tinova pustolovina na tavanu",
    url: "https://bit.ly/40Ycdd8",
    coverImage: "/lovable-uploads/b0b0746a-9628-4f1f-894a-f742e10e8461.png"
  },
  {
    title: "Hoki",
    url: "https://bit.ly/3QiMbMJ",
    coverImage: "/lovable-uploads/2cb8d80a-7fd4-4949-aa97-c16bfc2c5ea4.png"
  },
  {
    title: "Kraljevske suze",
    url: "https://bit.ly/40Z24Np",
    coverImage: "/lovable-uploads/fdc205c3-8e2a-42e4-b0a2-64c370610b0a.png"
  },
  {
    title: "Korjenčica",
    url: "https://bit.ly/4jWrOCF",
    coverImage: "/lovable-uploads/2cb5a51b-b72e-4f04-86d6-21769a001749.png"
  },
  {
    title: "Bjelobrkova limunada",
    url: "https://bit.ly/4gGgesv",
    coverImage: "/lovable-uploads/6f65bca8-6ca0-412b-bb1f-fa3563c1195b.png"
  }
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
            Stvarateljica dječjih priča i knjižničarka
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

      {/* Unpublished Stories */}
      <section className="page-section" style={{ "--section-delay": "2" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Neobjavljene priče u potrazi za svojim ilustratorom, urednikom i izdavačem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-4">Mukijeva uspavanka</h3>
              <p className="text-gray-600 mb-4">Tekst priče dostupan je na upit putem maila.</p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:rozalija.ovcar@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Zatraži priču
                </a>
              </Button>
            </Card>

            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-4">Vilinski grad</h3>
              <p className="text-gray-600 mb-4">Tekst priče dostupan je na upit putem maila.</p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:rozalija.ovcar@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Zatraži priču
                </a>
              </Button>
            </Card>

            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-4">Mijine priče</h3>
              <ul className="text-gray-600 list-disc list-inside ml-2 mb-4">
                <li>Morska zvijezda</li>
                <li>Galebovo pero</li>
                <li>U starom gradu</li>
                <li>Kamo vode racvjetane stepenice</li>
              </ul>
              <p className="text-gray-600 mb-4">Tekstovi priča dostupni su na upit putem maila.</p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:rozalija.ovcar@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Zatraži priče
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Recommendations */}
      <section className="page-section" style={{ "--section-delay": "4" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Mjesečne preporuke za čitanje slikovnica i knjiga za djecu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="book-card">
              <img 
                src="/lovable-uploads/a9376964-ea2e-440b-b94e-fef8bc7e5f16.png"
                alt="San o šumi"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-playfair text-xl mb-4">Za najmlađe (0-4 godine)</h3>
            </Card>
            <Card className="book-card">
              <img 
                src="/lovable-uploads/b7bdec94-240e-40c3-ae88-1d8fc9aac0ad.png"
                alt="Sjaj male krijesnice"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-playfair text-xl mb-4">Za predškolce i prvoškolce (5-8 godina)</h3>
            </Card>
            <Card className="book-card">
              <img 
                src="/lovable-uploads/8efb41f4-6785-496d-9fa2-228104df8865.png"
                alt="Knjiga recepata za putovanje kroz odrastanje"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-playfair text-xl mb-4">Za mlađe školarce (9-12 godina)</h3>
            </Card>
            <Card className="book-card">
              <img 
                src="/lovable-uploads/878b0f95-f2bc-46bc-b5dc-b76bfe7b3117.png"
                alt="Mjesec od papira"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-playfair text-xl mb-4">Za starije školarce (13-16 godina)</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="page-section bg-white/50" style={{ "--section-delay": "5" } as React.CSSProperties}>
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

      {/* About Author */}
      <section className="page-section" style={{ "--section-delay": "6" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">O autorici</h2>
          <Card className="book-card">
            <div className="flex items-center gap-4 mb-4">
              <Library className="h-8 w-8 text-pastel-purple" />
              <h3 className="font-playfair text-xl">Knjižničarka i književnica</h3>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                Tatjana Rozalija Ovčar rođena je 1967. godine u Zagrebu gdje je diplomirala komparativnu književnost, povijest umjetnosti i bibliotekarstvo. Od 1999. zaposlena je u Knjižnicama grada Zagreba.
              </p>
              <p>
                Kao knjižničarka, posvećena je promicanju dječje književnosti i čitanja. U slobodno vrijeme piše priče za slikovnice i ilustrirane knjige.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
