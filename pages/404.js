import Link from "../src/components/Link";

const Page404 = () => {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404 :O</h1>
      <Link children={"Ir para o Home"} href={"/"} />
    </div>
  );
};

export default Page404;