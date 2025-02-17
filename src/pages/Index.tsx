
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
            <div className="text-gray-600 mb-4 prose prose-gray max-w-none">
              <p>Malena pahuljasta loptica otkotrljala se niz laganu padinu sve dolje do potoka. Bio je to najmlađi stanovnik dvorišta. Mekana duga dlaka, vragolaste oči i znatiželjna narav krasile su tog umiljatog, svima dragog mačića.</p>
              <p>Od kada je prije nepuna dva mjeseca došao na svijet, Muki je postao pravi mali istraživač. Sada je, činise krenuo u novu pustolovinu. Podignutog repića i raširenih očiju promatra potok. Njegovu je pažnju privuklo klokotanje i mjehurići zraka koji su se stvarali oko velikog kamena podno malenog vodenog slapa.</p>
              <p>Nekoliko je trenutaka netremice osluškivao žuborenje vode i već se u sljedećem našao ispod velikog hrasta osluškujući i promatrajući ritmične udarce žuninog žutog kljuna o drvo. Na šumskom je tlu zašuštalo jesensko lišće i Muki je već poskočio gurajući njuškicu prema jednom listu koji je odlučio otputovati. Liste je polako klizio i kada je maćić naglo odskočio mijaknuvši, ispod lista se ukazao jež...</p>
              <p>Život u dvorištu i obližnjem šumarku Mukiju je iz minute u minutu donosio uzbuđenja. Cijeli je dan znao provesti u proučavanju, igri i skakutanju. A navečer, kada je bilo vrijeme za ulazak u kuću, smjestio bi se na prozorskoj dasci i još dugo promatrao obrise stabala u noći i osluškivao zvukove dvorišta i šume koji su dopirali iz mraka.</p>
              <p>Sve u svemu, bio je to jedan vrlo znatiželjan mačić. Baš kao i Doni koji se mačićevom dolasku na svijet silno obradovao. Točnije rečeno, on je tom događaju osobno prisustvovao i sa oduševljenjem još dugo nakon toga prepričavao tijek rođenja svojeg kućnog mezimca. Od tada je prošlo skoro cijelo godišnje doba.</p>
              <p>Sada je Muki ležao na prozorskoj dasci, a Fran u krevetu. Dječak je razmišljao o želji koja je još uvijek bila samo u njegovim mislima. Doni je večeras pokušao napisati pismo, ali ga je, kao i obično kada bi sjeo za stol, Muki u tome omeo. Zapravo, mačić je, šapom hvatajući olovku, dječaka naveo na smijeh, a onda i na igru s bakinim klupkom vune. Ostatak večeri Doni je proveo raspetljavajući ono što je Muki u dvije minute zamrsio. A Muki? On ga je pozorno promatrao povremeno pružajući šapicu u pokušaju da pomogne.</p>
              <p>Snijegom prekriveno drveće, brežuljak, snjegović i sanjke. Bila je to posljednja slika koja je prošla Donovim mislima prije nego je utonuo u san. Upravo je to bila ona želja koju je dječak večeras pokušao staviti na papir. Sutra će to zasigurno i učiniti. Već dvije godine za redom snijega za sanjkanje nije bilo, a ove je godine dječak odlučio stvar uzeti u svoje ruke. Napisat će pismo Sv. Nikoli i on će mu ispuniti želju! Kako se toga još nitko prije njega nije dosjetio? No, svejedno, sutra će stvar biti riješena. Jedino što je Doni zabrinjavalo bila je adresa na koju pismo treba nasloviti.</p>
              <p>«Hoće li biti dovoljno njegovo ime?», upitao je mamu čim je ujutro ušao u kuhinju.</p>
              <p>«Čije ime? Za što dovoljno?» zbunila se mama.</p>
              <p>Kada joj je Doni sve lijepo objasnio plan je bio donesen u trenu. Baš danas mama mora na poštu. Ponijet će pismo i poslati ga. A za adresu još će pitati poštara. On sigurno zna svoj posao. Uostalom ovih je dana Sv. Nikoli isporučio toliko pisama koliko ima i djece.</p>
              <p>«Ti samo lijepo napiši pismo prije nego što krenem», rekla je na kraju mama.</p>
              <p>«Koliku kuću mora imati Sv. Nikola da u nju stanu sva ta pisma?»... razmišljao je Don dok je olovkom ispisivao okrugla debeljuškasta slova.</p>
              <p>Njegovu misao prekinuo je nitko drugi nego njuškom i šapom Doni. Skočivši mu u krilo, pružio je šapicu prema olovci. Ovaj put je Don ostao ozbiljan. A kada je Dona potom skočio na stol, Don se čak i razljutio, pa je, odgurnuvši ga, povikao:</p>
              <p>«Prestani Doni, smetaš mi!»</p>
              <p>Na to je mali mačić podigao repić, njuškicu i uha pa na trenutak zastao, a onda poput vihora nestao.</p>
              <p>Nakon što je dovršio pismo, Don je doručkovao, a onda se toplo obukao i krenuo van. I tek je tada primjetio da Donija nema. Nije ga bilo u sobi, ni u kuhinji, a niti bilo gdje u kući. «Mora da je već vani», pomislio je i istrčao u dvorište. Ali, mačića ni ondje nije bilo. Sada ga je Don počeo dozivati, pa onda tražiti. Prvo u šupi, onda pod tačkama, zatim ispod kosilice... na kraju otrči do šume. Spustio se i do potoka, pogledom pretražio sve krošnje, rukama razgrtao otpalo lišće. Našao je gliste, mrave, razne bube i dvije žabe. Na grani je ugledao žunu i rep vjeverice za koji mu se načas učinilo da je Donijev. Na kraju je pod lišćem naišao i na ježa, ali ne i na mačića.</p>
              <p>«Kamo se samo sakrio?», pitao se Don zabrinuto, dok je nakon jednosatne potrage za prijateljem odvezivao cipele: «Da je tu, sada bi lovio moje žnirance. Ali vratit će se on do ručka», tješio se Don ulazeći u kuću.</p>
              <p>Ali Donija se nije vratio. Nije došao na ručak. Nije se vratio niti do večere.</p>
              <p>Poljubivši ga za laku noć, mama je primjetila da su se Donove oči napunile suzama.</p>
              <p>«Zbog Donija?» upitala ga je. Don je uspio samo klimnuti glavom i jedna se suza već skotrljala niz obraz, a onda i druga. Kada ga je majka uzela u naručje, mali potočići nezaustavljivo su potekli Donovim obrazima.</p>
              <p>«Vratit će se do jutra, vidjet ćeš!» rekla je mama.</p>
              <p>«Ali vani je hladno. I mrak je. A on je malen.» tiho je kroz suze govorio dječak.</p>
              <p>«Baš kao i ti i on ima svog anđela čuvara. Sigurno se pobrinuo za našeg Donija i smjestio ga negdje gdje je toplo» tješila ga je dalje mama.</p>
              <p>Ali Donu je bilo teško, jako teško oko srca.</p>
              <p>«Uvrijedio sam ga, možda se više ne vrati...», i baš kada se nova suza spremala skotrljati niz dječakov obraz, začuje se tiho mijaukanje.</p>
              <p>«ŠŠŠŠ!» osluhne mama, razmakne zastore i nasmije se tako radosno i glasno da je i tata dotrčao u Donovu sobu.</p>
              <p>«Evo ga, evo...» ponavljao je dječak grleći mačića i istovremeno brišući rukavom suze.</p>
              <p>«Pun je prašine i paučine. Izgleda kao da je upravo sišao s tavana!» primjetio je tata.</p>
              <p>«A kako bi onamo dospio? Tavanska vrata su zatvorena još od proljeća.», pitala se mama.</p>
              <p>«Pa valjda mu je njegov anđeo pomogao» dosjetio se Don.</p>
              <p>«Hm, to je moguće. U svakom slučaju, sutra ćemo ga okupati» zaključila je rukama skidajući paučinu i nekoliko kuglica prašine s mačića koji je već zagnjurio njuškicu u Donov pokrivač. Sada je Don mogao mirno zaspati. Uskoro je kućom zavladala noćna tišina.</p>
              <p>Slijedeće jutro, cijeli dan i nekoliko idućih Don i Donija proveli su u igri. Naravno, Don se trudio prisjetiti najdražih Donijevih igara. Neko vrijeme trčali su šumom, preskakali potok, razgrtali lišće, skrivali se jedan od drugoga u grmlju, čak se i verali po drveću. Donovi su se obrazi zarumenjeli, a Donijeve oči su blistale. Od zadovoljstva, ali i od studeni. Iz dana u dan bivalo je hladnije. Jednog je jutra čak i Donija, koji bi inače jedva dočekao prvo jutarnje otvaranje ulaznih vrata, zastao na pragu. Jaki nalet vjetra podigao je dlake Donijevog mekanog krzna i mačić je ustuknuo. Don je brzo zaključio kako je danas najbolje ostati u kući, pa je izvukao pikule, stare metalne poklopce za lonce i glatke duguljaste daščice, ostatke tatine najnovije police. Neobični orkestar je bio spreman. Doni se silno veselio ovoj glazbenoj igri. Skakutao je zajedno s pikulama, šapicama ih je gurao i navodio na drveni tobogan, pratio ih na putu do poklopaca, pa ih onda dočekivao sve naginjući njuškicu dok je promatrao krugove i osluškivao zvukove koje su pikule proizvodile.</p>
              <p>Igrali su se tako sve do večeri kada je trebalo očistiti čizmice za darove Sv. Nikole.</p>
              <p>A onda je tu noć pao snijeg. Bila je to prava bijela čarolija. Osobito za Dona, ali i za Donija. Sve što je mačić još jučer poznavao, odjednom je nestalo. Kao da je netko zamahnuo čarobnim štapićem i sve je bilo prekriveno nekim čudnim, mokrim i hladnim prekrivačem. Čemu se to Don veselio, mačiću nikako nije bilo jasno. I dok se Don glasno smijao trčeći kroz snijeg, njegove su šapice upadale toliko duboko da su mu uskoro i trbuščić i rep, a onda i oba uha bili potpuno mokri. A kada je Don izvukao sanjke iz šupe, Donijeva njuškica se već tresla od zime. Hladnoća mu i ne bi toliko naškodila da ga je njegov najbolji prijatelj tada uzeo u naručje. Ma, da ga je uopće primjetio, već bi mu bilo toplije... Ali Don je bio toliko zaokupljen sanjkama, snjegovićem i drugim snježnim igrama da je na mačića posve zaboravio!</p>
              <p>A kada se mačić nakon ove kratke avanture na snijegu uspio vratiti kući, nekoliko idućih dana nije izlazio, osim u nuždi. Donove igre promatrao sa sigurne udaljenosti, smješten na prozorskoj dasci u toploj sobi. Kada bi se dječak rumen u licu i izmoren vratio u kuću, jedino za što je bio spreman, bio je krevet.</p>
              <p>I tako, dok je Don ove dane provodio na snijegu u igri ili u postelji na zasluženom odmoru, Donija se - dosađivao. Prvog je dana bio samo malo povrijeđen jer ga Don nije primjećivao, ali je još uvijek uživao u toplini sobe s prozora promatrajući blještavu bjelinu snijega i Dona u igri. Drugoga dana već je bio pomalo nestrpljiv u iščekivanju Donovog povratka u kuću. Trećeg dana se počeo ljutiti dosađujući se na prozorskoj dasci. Peti dan je odlučio nešto poduzeti i krenuo na neko drugo, isto ovako suho, ali novo i zanimljivije mjesto.</p>
              <p>«Kamo je to Donija otišao?», već iste večeri ovo su pitanje postavili i Don i mama i tata.</p>
              <p>«Budući da naš Donija baš i ne uživa u snijegu, ne bih rekao da je odlutao daleko. Sigurno je negdje u blizini.» razmišljao je tata na glas.</p>
              <p>«Da, ovih je dana često boravio u sobi», potvrdi mama.</p>
              <p>«Kad bolje razmislim, izgledao mi je nekako tužan...», zabrinuo se Don.</p>
              <p>«Samo se nemoj sada i ti rastužiti. Ujutro ćemo ga potražiti!», završi razgovor tata, a mama položi ruku na Donovu kosu i doda: »Ne brini, Don ima svog anđela čuvara. Sjećaš se?»</p>
              <p>Ujutro su krenuli u potragu. Tragovi stopa u snijegu nisu vodili dalje od šupe. Tata je bio u pravu. Mora biti tu negdje oko kuće. Samo gdje? Šupu su već pretražili. Pogledali su i u susjedovom dvorištu, ispod njegovih stepenica, ispod automobila i stare prikolice. Zavirili su i iza uredno složenih cjepanica za ogrijev. Za svaki slučaj prošetali su i šumom. Ali ništa. Nigdje ništa.</p>
              <p>«Skuhat ću nam čaj. A onda ćemo razmisliti što dalje», tako je rekla mama ulazeći u kuću, a tata i Don samo su nijemo kimnuli glavama i bezvoljno sjeli na trosjed. Iz kuhinje se kratko još čuo šum vode i zveckanje šalica, a onda je sve utihnulo. Tišina se spustila na ukućane i zavladala sobom.</p>
              <p>A onda, nenadano, odnekuda, začuo se prigušen zvuk. Pa odmah zatim još jedan, pa još jedan, poput muklih udara malih batića nekog čudnovatog glazbala. Činilo se kao da zvukovi dolaze iz velike daljine. Nekoliko trenutaka kasnije začulo se još nekoliko tonova istovremeno i u nizu. Ton za tonom, sve upornije i jasnije redali su se i polagano oblikovali neobičnu melodiju.</p>
              <p>Gotovo istovremeno i tata i mama su poskočili:</p>
              <p>«Klavir!», rekla je mama,</p>
              <p>«Na tavanu!», bio je već na nogama tata.</p>
              <p>«Doni!?», razveselio se Don potrčavši za roditeljima prema hodniku.</p>
              <p>«Možda. Nadamo se», govorila je mama uzimajući sinčića u naručje dok je tata već prisljanjao ljestve uza zid.</p>
              <p>Odmah zatim otvor za tavan bio je otvoren, i cijela obitelj začas je stajala na drvenim podnim daskama zadovoljno se smješeći prizoru koji ih je ondje dočekao.</p>
              <p>Slabašna svjetlost zimskog poslijepodneva dopirala je kroz malene pukotine krova blago osvjetljavajući ono što su i očekivali: stari crni pianino i Donija na njemu. Mala pahuljasta loptica stajala je na klavirskim tipkama začuđeno promatrajući pridošlice.</p>
              <p>«Naš Doni glazbenik», nježnim glasom tišinu prekine mama.</p>
              <p>«To je moj Doni!», ponosno doda Don.</p>
              <p>«Hajde, odsviraj nam još nešto», nasmiješi se tata, svejednako stojeći na mjestu kako svojim pokretom ne bi uznemirio Donija.</p>
              <p>A Donija, taj maleni glazbenik, nakon prvotnog iznenađenja, malo je nagnuo glavicu znatiželjno iščekujući daljnji razvoj događaja. Tako su nekoliko trenutaka svi stajali promatrajući se i iščekujući.</p>
              <p>Svakoga trenutka na tavanu je bivalo sve tamnije i uskoro se nije vidjelo ništa osim obrisa. A onda se konačno začuo jedan ton. Pa još jedan, onda dva odjednom i zatim čitav niz. Don, mama i tata jedva su išta vidjeli, ali sada su bili sigurni otkuda zvukovi dolaze. Stojeći tamo gore u tami znali su da to njihov pahuljasti mačić hoda amo tamo po klavirskim tipkama i mogli su ga zamisliti kako svojim nježnim rozim šapicama dotiče jednu po jednu ili više tipki klavira, proizvodeći najneobičniju, ako ne i najljepšu glazbu koju su ikada čuli.</p>
              <p>Iznad krova kuće na nebu su se pojavile prve zvijezde. Mrak se polako spuštao, a bjelina snijega se uzdizala prema njemu. U krošnji velikog hrasta pojavio se mjesec, a na sniježnom tlu zasvjetlili su kristalići leda. Iako su tišinu večeri prekidali neočekivani zvukovi, priroda i životinje polako su se spremali na počinak. Provlačeći se kroz otvore među crijepovima, Mukijeva je mala kompozicija vani zasigurno zvučala kao nježna uspavanka.</p>
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
