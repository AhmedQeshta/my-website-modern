import { ApiPageInfosInterFace } from '@/interfaces';
import { graphQLClient } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiPageInfosInterFace>,
) {
  const data = await graphQLClient.request(
    `
    query pageinfos {
      pageinfos(last: 10) {
        id
        address
        phoneNumber
        points
        tittle
        role
        email
        heroImage{
          url
        }
        backgroundInfo{
          url
        }
        description{
          html
        }
        resume{
          url
        }
      }
    }
    
    `,
  );

  // cashing
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
  res.status(200).json(data);
}
