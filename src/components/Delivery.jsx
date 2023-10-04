const Delivery = () => {
      return (
        <section className="bg-slate-200 py-8">
          <div className=" container  mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Satisfaction Guaranteed
                </h2>
                <p className="text-lg text-gray-600">
                  Our products are crafted with premium quality materials to ensure
                  your satisfaction.
                </p>
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <img
                  className="max-w-[400px] mx-auto md:mx-0"
                  src="https://i.ibb.co/6Bp40Dj/sslcommerz.png"
                  alt="Satisfaction Guaranteed"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-10">
              <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Cozy Yet Lasts the Test of Time
                </h2>
                <p className="text-lg text-gray-600">
                  Our products offer unmatched comfort while maintaining durability
                  and longevity.
                </p>
              </div>
              <div className="md:w-1/2 text-center md:text-right order-1 md:order-2">
                <img
                  className="max-w-[400px] mx-auto md:mx-0"
                  src="https://i.ibb.co/yWDnVyR/delivery.png"
                  alt="Cozy Yet Lasts the Test of Time"
                />
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default Delivery;
    