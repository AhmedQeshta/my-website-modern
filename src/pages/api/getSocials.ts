// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiSocialsInterface } from '@/interfaces';
import { graphQLClient } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiSocialsInterface>,
) {
  const data = await graphQLClient.request(
    `query socials {
      socials {
        id
        title
        url
      }
    }
    `,
  );

  res.status(200).json(data);
}
