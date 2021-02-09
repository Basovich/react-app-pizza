import React from "react"
import ContentLoader from "react-content-loader"

const PizzasLoader = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="129" cy="124" r="119" />
        <rect x="1" y="265" rx="4" ry="4" width="274" height="30" />
        <rect x="0" y="315" rx="4" ry="4" width="270" height="83" />
        <rect x="4" y="422" rx="4" ry="4" width="100" height="32" />
        <rect x="140" y="416" rx="24" ry="24" width="131" height="42" />
    </ContentLoader>
)

export default PizzasLoader