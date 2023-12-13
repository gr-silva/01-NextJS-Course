import Link from "../src/components/Link";

const HomePage = () => {
  return (
    <div>
      <h1>Alura Cases - Home</h1>
      <Link children={"Ir para o FAQ"} href={"/faq"} />
    </div>
  );
};

export default HomePage;
