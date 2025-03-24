import { AdmissionTicket, Automobile, BuildingConstruction, HouseWithGarden, SpeakerHighVolume } from "../Icons";
import Title from "../Title";

const HomeActionCards = () => {
  const actionsData = [
    {
      id: 1,
      title: "Nuisances sonores",
      text: "Quels seront les impacts de l'augmentation de l'activité sur les nuissances sonores ? Le Berliet est ouvert tout l'été jusqu'en septembre, avec des concerts presque tous les jours. De son côté, bien que le Hellfest ne dure que 4 jours, le bruit lié au montage / démontage (coups de marteau, avertisseurs de recul, etc) est présent tous les jours de la semaine. Qu'en sera-t-il de la future brasserie lorsqu'elle ouvrira ? Quid également de la Gardienne des Ténèbres au niveau de ses possibilités sonores ?",
      icon: <SpeakerHighVolume />,
    },
    {
      id: 2,
      title: "Circulation et stationnement",
      text: "L'ouverture de la brasserie sera source de trafic supplémentaire. Les plus de 300 courverts par jour annoncés seront source d'un flux de véhicules important et bien que le parking existant soit grand (300 places), sera-t-il suffisant pour accueillir le public de la brasserie en plus des visiteurs du site du Hellfest ? Quid d'une soirée à succès affichant complet ?",
      icon: <Automobile />,
    },
    {
      id: 3,
      title: "Jauge de fréquentation",
      text: "Le site du Champ Louet est ouvert à l'année. Celui-ci s'embellissant après chaque édition du Hellfest, il tend à être de plus en plus fréquenté. La future Gardienne des Ténèbres sera aussi une attraction de plus qui apportera son lot de visiteurs supplémentaires. Quel sera l'impact de cette fréquentation sur les riverains et comment seront gérés les besoins sur place (toilettes, déchets, etc) ?",
      icon: <AdmissionTicket />,
    },
    {
      id: 4,
      title: "Extension du site",
      text: "Depuis l'arrivée du Hellfest sur le site du Champ Louet, celui-ci n'a cessé de grandir. Il occupe maintenant 15 hectares de terres agricoles en partie artificialisées. Les ambitions d'agrandissement du festival ne sont pas secrètes et le déplacement de la scène \"Valley\" a sollicité plus de 400m2 de terres supplémentaires. Jusqu'où ira l'extension du site et quelles seront les conséquences sur les terres agricoles environnantes ?",
      icon: <BuildingConstruction />,
    },
    {
      id: 5,
      title: "Impact sur le foncier",
      text: "Toutes ces nuissances cumulées et ces activités risquent d'avoir un impact sur le foncier. Les riverains sont inquiets de voir le site du Champ Louet devenir un lieu de fête permanent et que les nuisances soient une contrainte de taille pour la revente de leur bien. Nous devons trouver un équilibre entre les activités du site et le respect des riverains pour préserver leur qualité de vie.",
      icon: <HouseWithGarden />,
    },
  ];

  return (
    <section id="nos-actions" className="mt-20">
      <Title text="Nos actions" />
      <div className="text-center text-gray-500 text-xl">
        <p>Nos actions sont liées aux thématiques suivantes&nbsp;:</p>
      </div>
      <section className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-12 md:grid-cols-2">
        {actionsData.map((action) => (
          <div
            key={action.id}
            className="relative col-span-1 p-2 md:p-5 rounded-lg bg-[#e5e7eb]"
          >
            <div className="w-full p-5">
              <div className="flex flex-col gap-4">
                {action.icon}
                <h3 className="mb-2 text-2xl font-extrabold leading-9">
                  {action.title}
                </h3>
              </div>
              <p className="text-gray-500">{action.text}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default HomeActionCards;
