import SectionWrapper from "../_hoc/SectionWrapper";
import { client } from "../../utils/client";

const Services = async () => {
  const services = await getData();

  return (
    <>
      <div className="px-24 py-12">
        <h1 className="font-bold text-4xl">
          {services.sectionContent.heading}
        </h1>
        <div className="flex flex-col space-y-12 md:space-x-5 lg:flex lg:flex-row py-16">
          {services.services.service.map((e: Service, i: number) => (
            <ServiceCard
              key={e._key}
              service={e.service}
              description={e.description}
              index={`0${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ service, description, index }: ServiceCardProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-lg">{index}</h1>
      <h1 className="font-bold text-2xl">{service}</h1>
      <p>{description}</p>
    </div>
  );
};

const getData = async () => {
  const response = await client.fetch<Section[]>(
    `*[_type == "section-info" && defined(service)]`
  );

  const resolvedService = await client.fetch(
    `*[_type == "services" && _id == "${response[0].service?._ref}"]`
  );

  const services = resolvedService[0];
  const sectionContent = response[0];
  // console.log(services);

  const serviceSection = {
    services,
    sectionContent,
  };

  return serviceSection;
};

export default SectionWrapper(Services, "services");
