import {gql} from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
 query getCityByName($name: String!) {
     getCityByName(name: $name) {
         name
         country
         weather {
            temperature {actual,min,max}
            summary{title}
            timestamp
            wind{speed}
          }
     }   
 } 

 `