import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({
  children,
  header = "Hybrid",
}: {
  children: React.ReactNode;
  header?: string;
}) {
  return (
    <>
      <Head>
        <title>{header}</title>
      </Head>
      <div className="w-full relative flex flex-col">
        <Header />
        <div className="w-full">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
