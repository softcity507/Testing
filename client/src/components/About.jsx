import React from "react";

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 pb-16">

            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl overflow-hidden my-8 px-8 py-16 md:py-24 text-center">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                />
                <div className="relative z-10">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Est. 2024 · Gurgaon, Haryana</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 logo">ShoeVista</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Your ultimate destination for premium footwear — curated for the entire family.
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <div className="grid md:grid-cols-2 gap-10 items-center my-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Our Story</p>
                    <h2 className="text-3xl font-bold mb-6">Where Comfort Meets Style</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Welcome to ShoeVista, your ultimate online destination for an extensive
                        range of high-quality footwear tailored to meet the needs of the entire
                        family. Located in the vibrant city of Gurgaon, Haryana, we are proud to
                        offer a curated selection of shoes from some of the most renowned brands
                        in the industry, including Adidas, Puma, and Skechers.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        At ShoeVista, we understand that comfort and style go hand in hand.
                        That's why our collection features everything from high-performance
                        running shoes to versatile walking sneakers. Whether you're gearing up
                        for a marathon, enjoying a casual stroll, or simply seeking everyday
                        comfort, our range includes something for every occasion and preference.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-xl p-6 text-center">
                        <p className="text-3xl font-extrabold text-gray-900">50+</p>
                        <p className="text-sm text-gray-500 mt-1">Premium Brands</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-6 text-center">
                        <p className="text-3xl font-extrabold text-gray-900">10K+</p>
                        <p className="text-sm text-gray-500 mt-1">Happy Customers</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-6 text-center">
                        <p className="text-3xl font-extrabold text-gray-900">500+</p>
                        <p className="text-sm text-gray-500 mt-1">Shoe Styles</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-6 text-center">
                        <p className="text-3xl font-extrabold text-gray-900">4.8★</p>
                        <p className="text-sm text-gray-500 mt-1">Avg. Rating</p>
                    </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="my-16">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 text-center">Why Choose Us</p>
                <h2 className="text-3xl font-bold mb-10 text-center">The ShoeVista Difference</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: "🚀", title: "Fast Delivery", desc: "Swift & secure delivery across India, right to your doorstep." },
                        { icon: "✨", title: "Top Brands", desc: "Curated collections from Adidas, Nike, Puma, Skechers & more." },
                        { icon: "🔄", title: "Easy Returns", desc: "Hassle-free returns & refunds within 7 days of purchase." },
                        { icon: "💬", title: "24/7 Support", desc: "Dedicated customer support team always ready to help you." },
                    ].map((item, i) => (
                        <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-900 transition-all duration-300 group">
                            <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-14 my-16 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Our Mission</p>
                <h2 className="text-3xl font-bold mb-6">Step Into Confidence</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                    Shopping with us means you have access to the latest trends and
                    innovations in footwear, all from the comfort of your home. Our
                    user-friendly online platform allows you to easily navigate through
                    categories, find detailed product information, and enjoy special
                    promotions. With our commitment to exceptional customer service and
                    fast, reliable delivery across India, you can trust us to deliver your
                    chosen pair right to your doorstep swiftly and securely.
                </p>
            </div>

            {/* Trusted Brands Strip */}
            <div className="my-16 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Trusted By Leading Brands</p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {[
                        { src: "/GenInfo/adidas.jpg", name: "Adidas" },
                        { src: "/GenInfo/nike.png", name: "Nike" },
                        { src: "/GenInfo/puma.jpg", name: "Puma" },
                        { src: "/GenInfo/skechers.jpg", name: "Skechers" },
                    ].map((brand, i) => (
                        <div key={i} className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:scale-105">
                            <img src={brand.src} alt={brand.name} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
