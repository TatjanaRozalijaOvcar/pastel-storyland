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

      {/* Story Looking for Illustrator */}
      <section className="page-section" style={{ "--section-delay": "2" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Priča traži svojeg čitača, urednika, ilustratora i izdavača</h2>
          <Card className="book-card">
            <h3 className="font-playfair text-2xl mb-4">Mukijeva uspavanka</h3>
            <img 
              src="/lovable-uploads/dc299811-ad5a-4eb5-871d-6158b88eca55.png"
              alt="Ilustracija Mukija"
              className="w-full h-auto max-h-96 object-contain mb-6 bg-gray-50 rounded-lg"
            />
            <div className="prose prose-gray max-w-none mb-6 text-gray-600">
              <p>Malena pahuljasta loptica otkotrljala se niz laganu padinu sve dolje do potoka. Bio je to najmlađi stanovnik dvorišta. Mekana duga dlaka, vragolaste oči i znatiželjna narav krasile su tog umiljatog, svima dragog mačića.</p>
              <p>Od kada je prije nepuna dva mjeseca došao na svijet, Muki je postao pravi mali istraživač. Sada je, činise krenuo u novu pustolovinu. Podignutog repića i raširenih očiju promatra potok. Njegovu je pažnju privuklo klokotanje i mjehurići zraka koji su se stvarali oko velikog kamena podno malenog vodenog slapa.</p>
              <p>Nekoliko je trenutaka netremice osluškivao žuborenje vode i već se u sljedećem našao ispod velikog hrasta osluškujući i promatrajući ritmične udarce žuninog žutog kljuna o drvo. Na šumskom je tlu zašuštalo jesensko lišće i Muki je već poskočio gurajući njuškicu prema jednom listu koji je odlučio otputovati. Liste je polako klizio i kada je maćić naglo odskočio mijaknuvši, ispod lista se ukazao jež...</p>
              <p className="whitespace-pre-line">
                {`Život u dvorištu i obližnjem šumarku Mukiju je iz minute u minutu donosio uzbuđenja. Cijeli je dan znao provesti u proučavanju, igri i skakutanju. A navečer, kada je bilo vrijeme za ulazak u kuću, smjestio bi se na prozorskoj dasci i još dugo promatrao obrise stabala u noći i osluškivao zvukove dvorišta i šume koji su dopirali iz mraka.

Sve u svemu, bio je to jedan vrlo znatiželjan mačić. Baš kao i Doni koji se mačićevom dolasku na svijet silno obradovao. Točnije rečeno, on je tom događaju osobno prisustvovao i sa oduševljenjem još dugo nakon toga prepričavao tijek rođenja svojeg kućnog mezimca. Od tada je prošlo skoro cijelo godišnje doba.

Sada je Muki ležao na prozorskoj dasci, a Fran u krevetu. Dječak je razmišljao o želji koja je još uvijek bila samo u njegovim mislima. Doni je večeras pokušao napisati pismo, ali ga je, kao i obično kada bi sjeo za stol, Muki u tome omeo. Zapravo, mačić je, šapom hvatajući olovku, dječaka naveo na smijeh, a onda i na igru s bakinim klupkom vune. Ostatak večeri Doni je proveo raspetljavajući ono što je Muki u dvije minute zamrsio. A Muki? On ga je pozorno promatrao povremeno pružajući šapicu u pokušaju da pomogne.

${/* ... continue with the rest of the story */}`}
              </p>
            </div>
            <Button className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              Čitaj priču
            </Button>
          </Card>
        </div>
      </section>

      {/* More Stories */}
      <section className="page-section bg-white/50" style={{ "--section-delay": "3" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Još priča</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-2">Vilinski grad</h3>
              <p className="text-gray-600">Tekst priče dostupan je na upit putem maila.</p>
            </Card>
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-2">Mijine priče</h3>
              <p className="text-gray-600 mb-2">Tekstovi priča dostupni su na upit putem maila.</p>
              <ul className="text-gray-600 list-disc list-inside ml-2">
                <li>Morska zvijezda</li>
                <li>Galebovo pero</li>
                <li>U starom gradu</li>
                <li>Kamo vode racvjetane stepenice</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Recommendations */}
      <section className="page-section" style={{ "--section-delay": "4" } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Preporuke za čitanje slikovnica i knjiga za djecu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-4">Za najmlađe (0-3 godine)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Slikovnice s jednostavnim ilustracijama</li>
                <li>Kartonske slikovnice</li>
                <li>Taktilne slikovnice</li>
              </ul>
            </Card>
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-4">Za predškolce (3-6 godina)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Slikovnice s više teksta</li>
                <li>Priče o životinjama</li>
                <li>Edukativne slikovnice</li>
              </ul>
            </Card>
            <Card className="book-card">
              <h3 className="font-playfair text-xl mb-4">Za školarce (7+ godina)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Dječji romani</li>
                <li>Zabavne enciklopedije</li>
                <li>Stripovi za djecu</li>
              </ul>
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
