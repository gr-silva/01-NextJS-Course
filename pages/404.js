import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";

const Page404 = () => {
  return (
    <div>
      <PageTitle>404 - Page Not Found</PageTitle>
      <h1>Você se perdeu e caiu na página 404 :O</h1>
      <Link href={"/"}>Ir para o Home</Link>
    </div>
  );
};

export default Page404;
