export async function getServerSideProps() {
  const { products, bannerData } = await getSeedData();

  return {
    props: {
      products,
      bannerData,
    },
  };
}
