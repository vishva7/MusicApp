const Card = () => {
  return (
    <div class="pt-5 bg-gray-500">
      <div class=" w-15 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
