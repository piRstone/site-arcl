import HomeActionCards from '@/Components/HomeActionCards';
import NewsletterForm from '@/Components/NewsletterForm';
import Title from '@/Components/Title';
import {HTMLAttributes} from 'react';

const Section = ({children, ...props}:  HTMLAttributes<HTMLElement> & {children: React.ReactNode}) => (
  <section {...props} className={`${props.className} mt-14 sm:mt-18`}>
    {children}
  </section>
)

export default function Home() {
  return (
    <div className="relative z-10 pb-20 max-w-4xl mx-auto px-8">
      <section id="home-banner" className="py-16">
        <Section className="flex flex-col items-center">
          <div className="max-w-3xl">
            <h1 className="text-center mx-auto font-semibold text-4xl md:text-6xl mb-12">
              Association des Riverains du Champ Louet
            </h1>
          </div>
          <div className="text-xl max-w-3xl text-left md:text-center">
            <p className="text-gray-500 text-lg md:text-xl">
              Le site du Champ Louet à Clisson, où se tient le Hellfest tous les
              ans, est un lieu vivant et ouvert au public à l’année. La présence
              du bar ambulant &quot;Le Berliet&quot; et de plusieurs cirques ont été
              sources de nuisances tout au long des précédents étés. L’ouverture
              prochaine de la brasserie en lieu et place de l’ancienne
              discothèque &quot;Le Looksor&quot; va attirer bon nombre de visiteurs. Nous
              nous sommes donc réunis en tant que riverains pour prendre part
              aux discussions et faire en sorte que le développement des
              activités du site du Champ Louet se fasse dans le respect de tous
              les habitants alentours.
            </p>
          </div>
        </Section>
        <HomeActionCards />
        <Section id="pourquoi-adherer">
          <Title text="Pourquoi adhérer ?" />
          <div className="text-center">
            <p className="text-gray-500 text-lg md:text-xl">
              L’association des Riverains du Champ Louet a pour but de défendre
              les intérêts des habitants du quartier du Champ Louet à Clisson.
              Nous sommes convaincus que l’union fait la force et que plus nous
              serons nombreux, plus nous pourrons peser dans les décisions qui
              concernent notre quartier pour demander et obtenir des mesures qui
              respectent notre cadre de vie.
            </p>
          </div>
        </Section>
        <Section id="concertation">
          <Title text="Dans la concertation et l’écoute" />
          <div className="text-center">
            <p className="text-gray-500 text-lg md:text-xl">
              Nos sommes convaincus que pour obtenir des résultats et maintenir
              le contact avec toutes les parties prenantes, les échanges doivent
              se faire dans la concertation et l’écoute de chacun. Nous n’avons
              pas vocation à nous opposer à tous les projets qui pourraient
              avoir lieu sur ce site mais nous veillerons toujours à que chaque
              activité se fasse dans le respect des riverains qui vivent ici à
              l’année et ont le droit au calme et à la tranquillité.
            </p>
          </div>
        </Section>
        <Section id="newsletter">
          <Title text="Restez informé de nos avancées" />
          <NewsletterForm />
        </Section>
      </section>
    </div>
  );
}
