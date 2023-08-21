
'use client'

import HomeContainer from './components/HomeContainer';
import SearchBar from './components/SearchBar';
// import { getClient } from './util/apolloClient'
// import { gql } from '@apollo/client';


// const query = gql`
// query {
//   recipe2Collection(preview: true, limit: 2) {
//     total,
//     items {
//       title,
//       by,
//       cookingTime,
//       prepTime,
//       description {
//         json
//       },
//       date,
//       imagesCollection {
//         items {
//           title,
//           size,
//           url,
//           width,
//           height
//         }
//       },
//       featured,
//       tags,
//       ingredients,
//       instructions,
//       ratings,
//       slug
//     }
//   }
// }
// `;


export default function Home() {

  // const data = await getClient().query({ query });


  return (
    <main className="main">
      {/* <HomeContainer data={data} /> */}
      {/* <SearchBar /> */}
      <HomeContainer />
    </main>
  )
}
