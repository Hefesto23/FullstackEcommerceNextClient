import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard("3c1c77e7-c111-4de2-9a75-bc4a3cfc3ca0")
    // console.log(billboard)

  return (
    <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
        </div>
        <div className="flex flex-col gap-x-8 px-4 sm:px-6 lg:px-8">
            <ProductList title='Featured Products' items={products} />
        </div>
    </Container>
  )
}

export default HomePage