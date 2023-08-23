
import RecipeDetails from "@/components/Recipe/RecipeDetails";
import { getClient } from "@/util/apolloClient";

import { gql } from '@apollo/client';

const query = gql`
  query getRecipeBySlug($slug: String!) {
    recipe2Collection(preview: true, where: { slug: $slug}) {
      total,
      items {
        title,
        by,
        cookingTime,
        prepTime,
        description {
          json
        },
        date,
        imagesCollection {
          items {
            title,
            size,
            url,
            width,
            height
          }
        },
        featured,
        tags,
        ingredients,
        instructions,
        ratings
      }
    }
  }
`;


export default async function DetailPage({ params }: { params: { slug: string } }) {

  // Fake Data
  // const data = {
  //   "recipe2Collection": {
  //     "total": 1,
  //     "items": [
  //       {
  //         "slug":"tonkatsu",
  //         "title": "Tonkatsu",
  //         "by": "MomFoodie",
  //         "cookingTime": 15,
  //         "prepTime": 30,
  //         "description": {
  //           "json": {
  //             "data": {},
  //             "content": [
  //               {
  //                 "data": {},
  //                 "content": [
  //                   {
  //                     "data": {},
  //                     "marks": [],
  //                     "value": "Tonkatsu is a popular Japanese dish that consists of breaded and deep-fried pork cutlet. The word \"tonkatsu\" can be broken down into two parts: \"ton\" which means pork, and \"katsu\" which is short for \"katsuretsu,\" meaning cutlet in Japanese. It's a dish that showcases the influence of Western cuisine on Japanese cooking, as it's similar to a Western-style breaded and fried cutlet.",
  //                     "nodeType": "text"
  //                   }
  //                 ],
  //                 "nodeType": "paragraph"
  //               }
  //             ],
  //             "nodeType": "document"
  //           }
  //         },
  //         "date": "2023-08-18T00:00:00.000Z",
  //         "featured": false,
  //         "tags": [
  //           "Japanese",
  //           "Pork",
  //           "Fried"
  //         ],
  //         "ingredients": [
  //           {
  //             "name": "Pork Loin or Pork Fillet",
  //             "note": "Sliced and pounded",
  //             "quantity": "4 pieces"
  //           },
  //           {
  //             "name": "Salt",
  //             "note": "To taste",
  //             "quantity": ""
  //           },
  //           {
  //             "name": "Black Pepper",
  //             "note": "To taste",
  //             "quantity": ""
  //           },
  //           {
  //             "name": "All-Purpose Flour",
  //             "note": "",
  //             "quantity": "1 cup"
  //           },
  //           {
  //             "name": "Eggs",
  //             "note": "Beaten",
  //             "quantity": "2"
  //           },
  //           {
  //             "name": "Breadcrumbs",
  //             "note": "Panko breadcrumbs recommended",
  //             "quantity": "2 cups"
  //           },
  //           {
  //             "name": "Vegetable Oil",
  //             "note": "For frying",
  //             "quantity": "For deep frying"
  //           },
  //           {
  //             "name": "Cabbage",
  //             "note": "Shredded, for serving",
  //             "quantity": "1 small head"
  //           },
  //           {
  //             "name": "Tonkatsu Sauce",
  //             "note": "For serving",
  //             "quantity": "To taste"
  //           },
  //           {
  //             "name": "Cooked White Rice",
  //             "note": "For serving",
  //             "quantity": ""
  //           }
  //         ],
  //         "instructions": [
  //           "Season the pork slices with salt and black pepper on both sides.",
  //           "Dredge each pork slice in all-purpose flour, shaking off the excess.",
  //           "Dip the floured pork slices into the beaten eggs, ensuring they are fully coated.",
  //           "Coat the pork slices with breadcrumbs, pressing gently to adhere.",
  //           "In a deep skillet or pot, heat vegetable oil over medium heat to around 350°F (175°C).",
  //           "Carefully place the breaded pork slices into the hot oil and fry until they are golden brown and crispy, about 3-4 minutes per side.",
  //           "Remove the tonkatsu from the oil and place them on a wire rack or paper towels to drain any excess oil.",
  //           "Let the tonkatsu rest for a moment, then slice each piece into thick strips.",
  //           "Serve the tonkatsu with shredded cabbage, a side of tonkatsu sauce, and steamed white rice."
  //         ],
  //         "ratings": {
  //           "one_star": 0,
  //           "two_star": 0,
  //           "five_star": 0,
  //           "four_star": 0,
  //           "three_star": 0,
  //           "total_reviews": 0
  //         },
  //         "imagesCollection": {
  //           "items": [
  //             {
  //               "title": "Tonkatsu",
  //               "size": 157512,
  //               "url": "https://images.ctfassets.net/g0vr3cxwdodh/24HLoB8APpAVnGDpjVqBxr/cc3b63c980e32452a54ce48378fd2086/tonkatsu.jpeg",
  //               "width": 1200,
  //               "height": 1200
  //             }
  //           ]
  //         }
  //       }
  //     ]
  //   }
  // }
  
  // Apollo Client - Server Rendered
  const { loading, error, data } = await getClient().query({ query, variables: { slug: params.slug } });

  const detail: RecipeCollection = data?.recipe2Collection; 
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <RecipeDetails data={ detail.items[0] } />
  )
}
