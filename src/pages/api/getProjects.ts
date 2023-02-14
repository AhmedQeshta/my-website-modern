// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiProjectsInterface } from '@/interfaces';
import { graphQLClient } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiProjectsInterface>,
) {
  const data = await graphQLClient.request(
    `
    query projects {
      projects {
        id
        title
        image {
          url
        }
        summary{
          html
        }
        technologies {
          id
          title
          image{
            url
          }
        }
        linkToBuild
        order
      }
    }
    `,
  );

  // cashing
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  res.status(200).json(data);
}
