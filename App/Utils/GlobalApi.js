import { request, gql } from 'graphql-request'

const MASTER_URL = 'https://api-ap-southeast-2.hygraph.com/v2/clryegivp1gi901utbsk2pf6o/master'

const getSlider = async ()=> {
    const query = gql`
        query getSlider {
            sliders {
                id
                name
                image {
                    url
                }
            }
          }
        `
        const result = await request(MASTER_URL, query)
        return result
}

export default {
    getSlider
}

