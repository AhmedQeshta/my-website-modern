// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiExperiencesInterface } from '@/interfaces';
import { graphQLClient } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiExperiencesInterface>,
) {
  const data = await graphQLClient.request(
    `
    query experiences {
      experiences {
        id
        company
        companyImage {
          url
        }
        isCurrentlyWorkingHere
        jobTitle
        technologies {
          id
          title
          image {
            url
          }
        }
        dateEnded
        dateStarted
        summaryPoints
        order
      }
    }
    `,
  );

  // cashing
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
  res.status(200).json(data);
}
