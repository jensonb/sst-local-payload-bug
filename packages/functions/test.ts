import { APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { ApiHandler, usePathParam } from "sst/node/api";

/**
 * Failures are only experienced while running `sst dev`. All cases succeed if actually deployed.
 */
export const handler = ApiHandler(async () => {
  const test = usePathParam("test") || "1";

  switch (test) {
    // succeeds
    case "1": {
      return success(TEST_VARIANT);
    }

    // succeeds
    case "2": {
      return success([TEST_VARIANT, TEST_VARIANT]);
    }

    // succeeds
    case "3": {
      return success(Array(9).fill(TEST_VARIANT));
    }

    // fails
    case "4": {
      return success(Array(10).fill(TEST_VARIANT));
    }

    // fails
    case "5": {
      return success(Array(100).fill(TEST_VARIANT));
    }

    default:
      throw new Error("invalid test");
  }
});

const success = (body: unknown): APIGatewayProxyStructuredResultV2 => ({
  statusCode: 200,
  body: typeof body === "string" ? body : JSON.stringify(body),
});

const TEST_VARIANT = {
  size: "S",
  availabilityRegions: {
    EU: "Europe",
    BR: "Brazil",
    AU: "Australia",
    JP: "Japan",
    UK: "United Kingdom",
    EU_ES: "Spain",
    EU_LV: "Latvia",
    US: "United States",
    CA: "Canada",
  },
  name: "Gildan 18500 Unisex Heavy Blend Hooded Sweatshirt (White / S)",
  availabilityStatus: [
    { region: "US", status: "in_stock" },
    { region: "EU", status: "in_stock" },
    { region: "EU_LV", status: "in_stock" },
    { region: "EU_ES", status: "in_stock" },
    { region: "AU", status: "in_stock" },
    { region: "JP", status: "in_stock" },
    { region: "CA", status: "in_stock" },
    { region: "BR", status: "in_stock" },
    { region: "UK", status: "in_stock" },
  ],
  modified: "2023-03-30T23:32:48.963Z",
  image: "https://files.cdn.printful.com/products/146/5522_1581490387.jpg",
  mockCount: 0,
  variantData: {
    image: "https://files.cdn.printful.com/products/146/5522_1581490387.jpg",
    availability_regions: {
      EU: "Europe",
      BR: "Brazil",
      AU: "Australia",
      JP: "Japan",
      UK: "United Kingdom",
      EU_ES: "Spain",
      EU_LV: "Latvia",
      US: "United States",
      CA: "Canada",
    },
    availability_status: [
      { region: "US", status: "in_stock" },
      { region: "EU", status: "in_stock" },
      { region: "EU_LV", status: "in_stock" },
      { region: "EU_ES", status: "in_stock" },
      { region: "AU", status: "in_stock" },
      { region: "JP", status: "in_stock" },
      { region: "CA", status: "in_stock" },
      { region: "BR", status: "in_stock" },
      { region: "UK", status: "in_stock" },
    ],
    size: "S",
    color: "White",
    price: "22.95",
    product_id: 146,
    name: "Gildan 18500 Unisex Heavy Blend Hooded Sweatshirt (White / S)",
    id: 5522,
    in_stock: true,
    color_code2: null,
    color_code: "#ffffff",
  },
  results:
    '{"product":{"id":146,"main_category_id":28,"type":"T-SHIRT","description":"Everyone needs a cozy go-to hoodie to curl up in, so go for one that\'s soft, smooth, and stylish. It\'s the perfect choice for cooler evenings!\\r\\n\\r\\n• 50% pre-shrunk cotton, 50% polyester\\r\\n• Fabric weight: 8.0 oz/yd² (271.25 g/m²)\\r\\n• Air-jet spun yarn with a soft feel and reduced pilling\\r\\n• Double-lined hood with matching drawcord\\r\\n• Quarter-turned body to avoid crease down the middle\\r\\n• 1 × 1 athletic rib-knit cuffs and waistband with spandex\\r\\n• Front pouch pocket\\r\\n• Double-needle stitched collar, shoulders, armholes, cuffs, and hem\\r\\n• Blank product sourced from Honduras, Mexico, or Nicaragua","type_name":"Sweatshirt","title":"Unisex Heavy Blend Hoodie | Gildan 18500","brand":"Gildan","model":"18500 Unisex Heavy Blend Hooded Sweatshirt","image":"https://files.cdn.printful.com/o/upload/product-catalog-img/c6/c650a4604d04de3cedb2694e01920f60_l","variant_count":90,"currency":"USD","options":[{"id":"thread_colors_chest_center","title":"Center chest thread colors","type":"multi_select","values":{"#FFFFFF":"1801 White","#000000":"1800 Black","#96A1A8":"1718 Grey","#A67843":"1672 Old Gold","#FFCC00":"1951 Gold","#E25C27":"1987 Orange","#CC3366":"1910 Flamingo","#CC3333":"1839 Red","#660000":"1784 Maroon","#333366":"1966 Navy","#005397":"1842 Royal","#3399FF":"1695 Aqua/Teal","#6B5294":"1832 Purple","#01784E":"1751 Kelly Green","#7BA35A":"1848 Kiwi Green"},"additional_price":null,"additional_price_breakdown":[]},{"id":"thread_colors_chest_left","title":"Left chest thread colors","type":"multi_select","values":{"#FFFFFF":"1801 White","#000000":"1800 Black","#96A1A8":"1718 Grey","#A67843":"1672 Old Gold","#FFCC00":"1951 Gold","#E25C27":"1987 Orange","#CC3366":"1910 Flamingo","#CC3333":"1839 Red","#660000":"1784 Maroon","#333366":"1966 Navy","#005397":"1842 Royal","#3399FF":"1695 Aqua/Teal","#6B5294":"1832 Purple","#01784E":"1751 Kelly Green","#7BA35A":"1848 Kiwi Green"},"additional_price":null,"additional_price_breakdown":[]},{"id":"thread_colors_wrist_left","title":"Wrist left thread colors","type":"multi_select","values":{"#FFFFFF":"1801 White","#000000":"1800 Black","#96A1A8":"1718 Grey","#A67843":"1672 Old Gold","#FFCC00":"1951 Gold","#E25C27":"1987 Orange","#CC3366":"1910 Flamingo","#CC3333":"1839 Red","#660000":"1784 Maroon","#333366":"1966 Navy","#005397":"1842 Royal","#3399FF":"1695 Aqua/Teal","#6B5294":"1832 Purple","#01784E":"1751 Kelly Green","#7BA35A":"1848 Kiwi Green"},"additional_price":null,"additional_price_breakdown":[]},{"id":"thread_colors_wrist_right","title":"Wrist right thread colors","type":"multi_select","values":{"#FFFFFF":"1801 White","#000000":"1800 Black","#96A1A8":"1718 Grey","#A67843":"1672 Old Gold","#FFCC00":"1951 Gold","#E25C27":"1987 Orange","#CC3366":"1910 Flamingo","#CC3333":"1839 Red","#660000":"1784 Maroon","#333366":"1966 Navy","#005397":"1842 Royal","#3399FF":"1695 Aqua/Teal","#6B5294":"1832 Purple","#01784E":"1751 Kelly Green","#7BA35A":"1848 Kiwi Green"},"additional_price":null,"additional_price_breakdown":[]},{"id":"notes","title":"Embroidery notes","type":"text","values":null,"additional_price":null,"additional_price_breakdown":[]},{"id":"lifelike","title":"Lifelike","type":"bool","values":null,"additional_price":null,"additional_price_breakdown":[]}],"dimensions":null,"is_discontinued":false,"avg_fulfillment_time":null,"techniques":[{"key":"EMBROIDERY","display_name":"Embroidery","is_default":false},{"key":"DTG","display_name":"DTG printing","is_default":true}],"files":[{"id":"embroidery_chest_center","type":"embroidery_chest_center","title":"Center chest","additional_price":"2.95","options":[]},{"id":"embroidery_chest_left","type":"embroidery_chest_left","title":"Left chest","additional_price":"2.95","options":[]},{"id":"embroidery_wrist_left","type":"embroidery_wrist_left","title":"Left wrist","additional_price":"2.95","options":[]},{"id":"embroidery_wrist_right","type":"embroidery_wrist_right","title":"Right wrist","additional_price":"2.95","options":[]},{"id":"default","type":"front","title":"Front print","additional_price":null,"options":[]},{"id":"back","type":"back","title":"Back print","additional_price":"5.95","options":[]},{"id":"label_outside","type":"label_outside","title":"Outside label","additional_price":"2.49","options":[]},{"id":"sleeve_right","type":"sleeve_right","title":"Right sleeve","additional_price":"5.95","options":[]},{"id":"sleeve_left","type":"sleeve_left","title":"Left sleeve","additional_price":"5.95","options":[]},{"id":"preview","type":"mockup","title":"Mockup","additional_price":null,"options":[]}]},"variant":{"id":5522,"product_id":146,"name":"Gildan 18500 Unisex Heavy Blend Hooded Sweatshirt (White / S)","size":"S","color":"White","color_code":"#ffffff","color_code2":null,"image":"https://files.cdn.printful.com/products/146/5522_1581490387.jpg","price":"22.95","in_stock":true,"availability_regions":{"US":"United States","EU":"Europe","EU_LV":"Latvia","EU_ES":"Spain","AU":"Australia","JP":"Japan","CA":"Canada","BR":"Brazil","UK":"United Kingdom"},"availability_status":[{"region":"US","status":"in_stock"},{"region":"EU","status":"in_stock"},{"region":"EU_LV","status":"in_stock"},{"region":"EU_ES","status":"in_stock"},{"region":"AU","status":"in_stock"},{"region":"JP","status":"in_stock"},{"region":"CA","status":"in_stock"},{"region":"BR","status":"in_stock"},{"region":"UK","status":"in_stock"}]}}',
  colorCode: "#ffffff",
  variantId: "5522",
  inStock: true,
  color: "White",
  productId: "146",
  brand: "Gildan",
  __typename: "PrintfulVariant",
  created: "2023-03-26T02:02:50.806Z",
  type: "T-SHIRT",
};
