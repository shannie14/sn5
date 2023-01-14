import { useEffect, useState } from "react";

const Home = () => {

    const [brands, setBrands] = useState(null)

    //occurs after render
    useEffect(() => {
        const fetchBrands = async () => {
            const response = await fetch('/brands')
            const json = await response.json()

            if (response.ok) {
                setBrands(json)
            }
        }

        fetchBrands()
    }, [])

    return (
        <div className="home">
            <h2>SN HOME</h2>
            <div className="brands">
                {brands && brands.map((brand) => (
                    <p key={brand._id}>{brand.client}{brand.campaign}</p>
                ))}

            </div>
        </div>
    )
}
export default Home;